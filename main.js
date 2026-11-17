const storageKey = 'somewhere-in-cai:discovered';
const published = new Map(performances.filter(isPublishable).map(copla => [copla.id, copla]));
const discovered = readProgress();
const stops = document.querySelector('#stops');
const scene = document.querySelector('#scene');
const collection = document.querySelector('#collection');
const coplaDialog = document.querySelector('#copla');
const fullscreen = document.querySelector('#fullscreen');
const initialPlace = places.find(place => place.id === 'campo-del-sur');
let hintsOn = false;

function isPublishable(copla) {
  return copla.published === true && copla.title && copla.group && (copla.authors?.length || Object.keys(copla.credits ?? {}).length)
    && Number.isInteger(copla.year) && copla.modality && (/^[\w-]{11}$/.test(copla.youtubeId ?? '') || (copla.audioUrl && copla.sourceUrl));
}

function readProgress() {
  try {
    const progress = JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    return new Set(Array.isArray(progress) ? progress.filter(id => typeof id === 'string') : []);
  } catch {
    return new Set();
  }
}

function addDiscovery(id) {
  readProgress().forEach(savedId => discovered.add(savedId));
  discovered.add(id);
  try {
    localStorage.setItem(storageKey, JSON.stringify([...discovered]));
  } catch {
    // Si el navegador bloquea el almacenamiento, la visita conserva su progreso en memoria.
  }
  updateProgress();
}

function updateProgress() {
  const count = [...discovered].filter(id => published.has(id)).length;
  document.querySelector('.count').textContent = `${count} de ${published.size} descubrimientos`;
  document.querySelectorAll('.hotspot').forEach(button => {
    const ids = button.dataset.performances.split(' ');
    const found = ids.every(id => discovered.has(id));
    button.classList.toggle('found', found);
    const status = button.dataset.collection ? ', colección descubierta' : ids.length === 1 ? ', copla descubierta' : ', todos los fragmentos descubiertos';
    button.setAttribute('aria-label', button.dataset.object + (found ? status : ''));
  });
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function button(text, className, onClick) {
  const node = element('button', text, className);
  node.type = 'button';
  node.addEventListener('click', onClick);
  return node;
}

function spotPerformanceIds(spot) {
  return spot.performanceIds ?? [spot.performanceId];
}

function discoverCopla(copla, spot, fragments) {
  addDiscovery(copla.id);
  showCopla(copla, spot, fragments);
}

function showFragments(spot, coplas) {
  document.querySelector('#copla-title').textContent = spot.collectionTitle ?? spot.object;
  const list = element('ul', '', 'entries');
  for (const copla of coplas) {
    const item = element('li');
    const play = button(copla.title, '', () => discoverCopla(copla, spot, coplas));
    play.append(element('span', `${copla.group} · ${copla.modality} · ${copla.year}`));
    item.append(play);
    list.append(item);
  }
  document.querySelector('#copla-body').replaceChildren(list);
  if (coplaDialog.open) list.querySelector('button').focus();
  else coplaDialog.showModal();
}

function illustration(place, interactive) {
  const art = element('div', '', 'illustration');
  art.classList.toggle('tavira', place.id === 'torre-tavira');
  art.classList.toggle('compact-hotspots', ['la-caleta', 'la-vina'].includes(place.id));
  const image = place.image;
  art.style.setProperty('--ratio', image.width / image.height);
  art.classList.toggle('hints-on', hintsOn);
  const img = element('img');
  img.src = image.src;
  img.alt = image.alt;
  img.width = image.width;
  img.height = image.height;
  if (interactive) img.loading = 'lazy';
  art.append(img);
  if (!interactive) return art;

  for (const spot of place.hotspots ?? []) {
    const coplas = spotPerformanceIds(spot).map(id => published.get(id)).filter(Boolean);
    if (!coplas.length || !spot.connection) continue;
    const marker = button('', 'hotspot', () => {
      if (coplas.length === 1 && !spot.collectionTitle) discoverCopla(coplas[0], spot);
      else showFragments(spot, coplas);
    });
    marker.dataset.performances = coplas.map(copla => copla.id).join(' ');
    marker.dataset.object = spot.object;
    marker.dataset.collection = spot.collectionTitle ?? '';
    marker.style.setProperty('--x', `${spot.x}%`);
    marker.style.setProperty('--y', `${spot.y}%`);
    art.append(marker);
  }
  return art;
}

function showFullscreen(place, interactive) {
  document.querySelector('#fullscreen-art').replaceChildren(illustration(place, interactive));
  updateProgress();
  fullscreen.showModal();
}

function showPlace(place) {
  for (const stop of stops.children) {
    if (stop.dataset.place === place.id) stop.setAttribute('aria-current', 'location');
    else stop.removeAttribute('aria-current');
  }

  const sidebar = element('div', '', 'scene-sidebar');
  const title = element('h3', place.name);
  title.id = 'scene-title';
  title.tabIndex = -1;
  sidebar.append(title);
  scene.classList.toggle('scene-layout', Boolean(place.image));
  scene.replaceChildren(sidebar);

  if (!place.image) {
    sidebar.append(element('p', 'Esta parada se incorporará al paseo en una próxima actualización.'));
    return;
  }
  const art = illustration(place, true);
  const hasHotspots = Boolean(art.querySelector('.hotspot'));
  if (place.intro) sidebar.append(element('p', place.intro));
  sidebar.append(element('p', hasHotspots
    ? place.id === 'torre-tavira'
      ? 'Toca los carteles y personajes para abrir sus colecciones. Con el teclado, recórrelos con el tabulador.'
      : 'Toca los detalles de la ilustración para descubrir sus coplas. Con el teclado, recórrelos con el tabulador.'
    : 'Las coplas de esta parada llegarán en una próxima actualización.'));
  const controls = element('div', '', 'scene-controls');
  const hint = button('Dame una pista', 'hint', () => {
    hintsOn = !hintsOn;
    hint.setAttribute('aria-pressed', String(hintsOn));
    art.classList.toggle('hints-on', hintsOn);
  });
  hint.setAttribute('aria-pressed', String(hintsOn && hasHotspots));
  hint.disabled = !hasHotspots;
  const expand = button('⛶ Pantalla completa', 'expand', () => showFullscreen(place, true));
  controls.append(hint, expand);
  sidebar.append(controls);
  scene.append(art);
  updateProgress();
}

function showCollection(mode) {
  const isMine = mode === 'mine';
  document.querySelector('#collection-title').textContent = isMine ? 'Mis descubrimientos' : 'La antología';
  const body = document.querySelector('#collection-body');
  const entries = [...published.values()].filter(copla => !isMine || discovered.has(copla.id));
  body.replaceChildren();
  if (!entries.length) {
    body.append(element('p', isMine ? 'Aquí se guardarán tus descubrimientos durante el paseo.' : 'La antología se estrenará con la primera selección de coplas.'));
    collection.showModal();
    return;
  }

  const filters = [
    ['Todas las modalidades', ''],
    ['Coplas del concurso', 'copla'],
    ['Cuartetos', 'cuarteto'],
    ['Romanceros', 'romancero'],
    ['Chirigotas callejeras', 'callejera']
  ];
  const label = element('label', 'Modalidad ', 'anthology-filter');
  const select = element('select');
  for (const [name, value] of filters) {
    const option = element('option', name);
    option.value = value;
    select.append(option);
  }
  label.append(select);
  const status = element('p');
  status.setAttribute('role', 'status');
  const list = element('ul', '', 'entries');
  for (const copla of entries) {
    const item = element('li');
    const modality = copla.modality.toLowerCase();
    item.dataset.mode = modality.startsWith('chirigota callejera') ? 'callejera'
      : modality.startsWith('cuarteto') ? 'cuarteto'
      : modality.startsWith('romancero') ? 'romancero' : 'copla';
    const spot = places.flatMap(place => place.hotspots ?? [])
      .find(candidate => spotPerformanceIds(candidate).includes(copla.id) && candidate.connection);
    const play = button(copla.title, '', () => showCopla(copla, spot));
    play.append(element('span', `${copla.group} · ${copla.modality} · ${copla.year}`));
    item.append(play);
    list.append(item);
  }
  const updateFilter = () => {
    let count = 0;
    for (const item of list.children) {
      item.hidden = Boolean(select.value && item.dataset.mode !== select.value);
      count += Number(!item.hidden);
    }
    status.textContent = count ? `${count} de ${entries.length} descubrimientos` : 'No hay descubrimientos de esta modalidad.';
  };
  select.addEventListener('change', updateFilter);
  updateFilter();
  body.append(label, status, list);
  collection.showModal();
}

function createVideo(copla) {
  const video = element('iframe', '', 'video');
  video.title = `Vídeo de ${copla.title}`;
  const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${copla.youtubeId}`);
  if (copla.youtubeStart != null) embedUrl.searchParams.set('start', copla.youtubeStart);
  if (copla.youtubeEnd != null) embedUrl.searchParams.set('end', copla.youtubeEnd);
  video.src = embedUrl.href;
  video.allow = 'encrypted-media; picture-in-picture; fullscreen';
  video.allowFullscreen = true;
  video.referrerPolicy = 'strict-origin-when-cross-origin';
  return video;
}

function externalLink(label, url) {
  const link = element('a', label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  return link;
}

function showCopla(copla, spot, fragments) {
  document.querySelector('#copla-title').textContent = copla.title;
  const body = document.querySelector('#copla-body');
  const player = copla.externalOnly ? null : copla.audioUrl ? element('audio') : createVideo(copla);
  if (copla.audioUrl) {
    player.src = copla.audioUrl;
    player.controls = true;
    player.preload = 'metadata';
    player.setAttribute('aria-label', copla.title);
    player.style.maxWidth = '100%';
  }
  const watchUrl = copla.youtubeId ? new URL(`https://www.youtube.com/watch?v=${copla.youtubeId}`) : null;
  if (watchUrl && copla.youtubeStart != null) watchUrl.searchParams.set('t', `${copla.youtubeStart}s`);
  const metadata = element('dl', '', 'metadata');
  const fields = [
    [(copla.recording || copla.performer || copla.id.startsWith('caleta-')) ? 'Agrupación original' : 'Agrupación', copla.group],
    ...Object.entries(copla.credits ?? { [copla.authorLabel ?? 'Autoría']: copla.authors.join(', ') }),
    ['Año', copla.year],
    ['Modalidad', copla.modality]
  ];
  if (copla.performer) fields.push(['Intérprete de la grabación', copla.performer]);
  if (copla.director) fields.push(['Dirección', copla.director]);
  if (copla.prize) fields.push(['Premio', copla.prize]);
  if (copla.recording) fields.push(['Grabación', copla.recording]);
  for (const [label, value] of fields) metadata.append(element('dt', label), element('dd', String(value)));
  body.replaceChildren();
  if (player) body.append(player);
  if (watchUrl) body.append(externalLink('Ver en YouTube', watchUrl));
  if (player && copla.alternateVideo) {
    const alternate = copla.alternateVideo;
    let currentPlayer = player;
    let useAlternate = false;
    const switchVideo = button(alternate.label, 'hint', () => {
      useAlternate = !useAlternate;
      const nextPlayer = createVideo(useAlternate ? { ...copla, ...alternate } : copla);
      currentPlayer.replaceWith(nextPlayer);
      currentPlayer = nextPlayer;
      switchVideo.textContent = useAlternate ? 'Volver al vídeo principal' : alternate.label;
    });
    const controls = element('p');
    controls.append(switchVideo);
    body.append(controls);
  }
  if (copla.alternateYoutubeId) {
    const links = element('p');
    links.append(externalLink(copla.alternateYoutubeLabel ?? 'Otra versión en YouTube',
      `https://www.youtube.com/watch?v=${copla.alternateYoutubeId}`));
    body.append(links);
  }
  if (copla.sourceUrl) {
    const source = element('p');
    source.append(externalLink(copla.sourceLabel, copla.sourceUrl));
    body.append(source);
  }
  for (const { label, url } of copla.additionalSources ?? []) {
    const source = element('p');
    source.append(externalLink(label, url));
    body.append(source);
  }
  body.append(metadata);
  if (copla.context) body.append(element('p', copla.context));
  if (spot) body.append(element('p', spot.connection));
  if (copla.dedication) body.append(element('p', copla.dedication));
  if (fragments) {
    const index = fragments.indexOf(copla);
    const navigation = element('div', '', 'scene-controls');
    navigation.setAttribute('role', 'group');
    navigation.setAttribute('aria-label', 'Navegación de la colección');
    const select = offset => discoverCopla(fragments[index + offset], spot, fragments);
    const previous = button('Anterior', 'hint', () => select(-1));
    previous.disabled = index === 0;
    const next = button('Siguiente', 'hint', () => select(1));
    next.disabled = index === fragments.length - 1;
    navigation.append(previous, button('Ver colección', 'hint', () => showFragments(spot, fragments)), next);
    body.prepend(element('p', `${spot.collectionTitle ?? spot.object} · ${index + 1} de ${fragments.length}`), navigation);
  }
  if (coplaDialog.open) {
    const title = document.querySelector('#copla-title');
    title.tabIndex = -1;
    title.focus();
  }
  else coplaDialog.showModal();
}

for (const place of places) {
  const stop = button(place.name, '', () => {
    showPlace(place);
    document.querySelector('#scene-title').focus();
  });
  stop.dataset.place = place.id;
  stop.setAttribute('aria-controls', 'scene');
  stops.append(stop);
}

document.querySelectorAll('[data-collection]').forEach(trigger => {
  trigger.addEventListener('click', () => showCollection(trigger.dataset.collection));
});
document.querySelector('#expand-hero').addEventListener('click', () => {
  const cover = document.querySelector('#cover-image');
  const image = {
    src: cover.currentSrc || cover.src,
    width: cover.naturalWidth || Number(cover.getAttribute('width')),
    height: cover.naturalHeight || Number(cover.getAttribute('height')),
    alt: cover.alt
  };
  showFullscreen({ image }, false);
});
document.querySelectorAll('[data-close]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const dialog = trigger.closest('dialog');
    if (dialog === coplaDialog) clearVideo();
    dialog.close();
  });
});
function clearVideo() {
  document.querySelector('#copla-body').replaceChildren();
}
coplaDialog.addEventListener('cancel', clearVideo);
fullscreen.addEventListener('close', () => document.querySelector('#fullscreen-art').replaceChildren());
window.addEventListener('storage', event => {
  if (event.key === storageKey) {
    readProgress().forEach(id => discovered.add(id));
    updateProgress();
  }
});

showPlace(initialPlace);
