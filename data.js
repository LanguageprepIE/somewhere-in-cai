// Los identificadores de las coplas son permanentes: el progreso se guarda por id.
// Para publicar una copla, completa title, group, authors (lista), year, modality
// y youtubeId, y cambia published a true después de verificar todos los datos.
// Cada punto usa coordenadas x, y en porcentajes sobre la imagen completa.

const places = [
  {
    id: 'campo-del-sur',
    name: 'El Campo del Sur',
    image: {
      src: 'assets/eddie-campo-del-sur.jpg',
      width: 1199,
      height: 1312,
      alt: 'Eddie en el paseo marítimo al atardecer: lleva gorra marinera y chubasquero amarillo, una caña de pescar y la bandera del Cádiz CF. Al fondo se ve la catedral.'
    },
    hotspots: [
      { performanceId: 'bandera', x: 77, y: 29, object: 'La bandera del Cádiz CF', connection: 'Una copla que trascendió el Carnaval hasta convertirse en el himno oficioso del cadismo.' },
      { performanceId: 'puesta-de-sol', x: 94, y: 51.5, object: 'La puesta de sol', connection: 'Un piropo a Cádiz convertido en una pintura musical de sus colores, su luz y su mar.' },
      { performanceId: 'rocas', x: 77, y: 75.5, object: 'Las rocas del paseo', connection: 'Un clásico de Enrique Villegas que encuentra inspiración en las piedras de La Caleta.' },
      { performanceId: "campo-panuelo", x: 42, y: 35, object: "El pañuelo rojo de Eddie", connection: "Los vientos gaditanos dieron vida a esta histórica comparsa, primer premio de 1994. Un descubrimiento especialmente apropiado para el antiguo Paseo del Vendaval." },
      { performanceId: "campo-cana", x: 15, y: 23, object: "La caña de pescar", connection: "Las aventuras de los pescadores del puente Carranza convertidas en puro humor gaditano." },
      { performanceId: "campo-catedral", x: 78, y: 54, object: "La Catedral", connection: "La silueta más emblemática del Campo del Sur nos descubre un primer premio de coros." },
      { performanceId: "campo-nubes", x: 56, y: 10, object: "Las nubes", connection: "Un recorrido poético por la provincia de Cádiz siguiendo al viento de levante y los aromas que recoge a su paso." },
      { performanceId: "campo-olas", x: 94, y: 69, object: "Las olas del mar", connection: "El levante y el poniente se disputan el amor de Cádiz en uno de los piropos más hermosos del Carnaval." }
    ]
  },
  {
    id: 'la-caleta',
    name: 'La Caleta',
    intro: 'Eddie se asoma a La Caleta con un tipo inspirado en La maldición de la lapa negra.',
    image: {
      src: 'assets/eddie-la-caleta.jpg',
      width: 1536,
      height: 864,
      alt: 'Eddie sostiene una lapa negra en La Caleta. A su lado hay una guitarra y redes de pesca. Las monedas y las conchas están en la arena, junto a una barquita. Al fondo se ven el Vaporcito y el balneario de Nuestra Señora de la Palma.'
    },
    hotspots: [
      { id: 'caleta-lapa-negra', x: 63.5, y: 17.5, object: 'La lapa negra', performanceId: 'caleta-lapa-negra', connection: 'Los Brujos Titis, primer premio de chirigotas, inspiran la caracterización carnavalera de Eddie en La Caleta.' },
      { id: 'caleta-monedas', x: 61.4, y: 89.3, object: 'Las monedas antiguas', performanceId: 'caleta-monedas', connection: 'El histórico hallazgo de monedas antiguas en la playa gaditana convertido en una de las coplas más universales del Carnaval.' },
      { id: 'caleta-vaporcito', x: 75.7, y: 29.8, object: 'El Vaporcito', performanceId: 'caleta-vaporcito', connection: 'El entrañable homenaje musical de Paco Alba al barco que unía Cádiz con El Puerto de Santa María.' },
      { id: 'caleta-balneario', x: 17.7, y: 17.4, object: 'El balneario de Nuestra Señora de la Palma', performanceId: 'caleta-balneario', connection: 'Una de las presentaciones más recordadas del Carnaval, dedicada a la playa y al sentimiento caletero.' },
      { id: 'caleta-barquita', x: 82.8, y: 48.2, object: 'La barquita', performanceId: "caleta-templarios", connection: "Una historia de amor entre Santa Catalina y San Sebastián, separados por las aguas de La Caleta." },
      { id: 'caleta-guitarra', x: 19.8, y: 68.8, object: 'La guitarra', performanceId: 'caleta-guitarra', connection: 'Un homenaje a la belleza y la personalidad de la guitarra española, instrumento fundamental del Carnaval.' },
      { id: 'caleta-redes', x: 6.7, y: 58.3, object: 'Las redes de pesca', performanceId: 'caleta-redes', connection: 'Un extraordinario piropo al mundo submarino y la belleza de La Caleta.' }
    ]
  },
  {
    id: 'la-vina',
    name: 'El barrio de la Viña',
    intro: 'Eddie se venda para volver a La Viña, la capital del mar.',
    image: {
      src: 'assets/eddie-la-vina.jpg',
      width: 1536,
      height: 864,
      alt: 'Eddie vestido de momia en una terraza de La Viña. En la mesa hay llaves, pandereta, máscara y periódico; al fondo, vecinos disfrazados, balcones y banderines.'
    },
    hotspots: [
      { performanceId: "vina-vendas", x: 49, y: 19, object: "Las vendas de Eddie", connection: "Primer premio de chirigotas de 1986 y una de las agrupaciones históricas vinculadas al Love. Su tipo inspira la caracterización de Eddie." },
      { performanceId: "vina-llaves", x: 60, y: 86, object: "El manojo de llaves", connection: "Un paseo por Cádiz guiado por sus aromas hasta llegar a La Viña, la capital del mar." },
      { performanceId: "vina-azulejo", x: 11, y: 24, object: "El azulejo de La Viña", connection: "Una de las primeras grandes coplas de Antonio Martín, dedicada a conservar la tradición musical gaditana." },
      { performanceId: "vina-pandereta", x: 76, y: 68, object: "La pandereta", connection: "Primer premio de coros de 1989. Una celebración de la musicalidad y el ritmo carnavaleros." },
      { performanceId: "vina-cartel", x: 27, y: 36, object: "El cartel de Carnaval", connection: "El ingenio de Los Borrachos convierte el cartel de Carnaval de Rafael Alberti en el remate de un cuplé." },
      { performanceId: "vina-periodico", x: 93, y: 90, object: "El periódico de Carnaval", connection: "Una mirada irónica a quienes se consideran entendidos del Carnaval y a la verdadera esencia de la fiesta." },
      { performanceId: "vina-calle", x: 76, y: 36, object: "La calle del fondo", connection: "Un paseo por Cádiz de la mano de dos referentes de la comparsa gaditana." },
      { performanceId: "vina-carnavaleros", x: 93, y: 53, object: "El grupo de carnavaleros", connection: "Primer premio de chirigotas de 1999. El grupo del fondo evoca la alegría y la sátira callejera de Los Yesterday." },
      { performanceId: "vina-mascara", x: 88, y: 75, object: "La máscara roja", connection: "" },
      { performanceId: "vina-balcon", x: 96, y: 26, object: "El balcón del barrio", connection: "Un hermoso pasodoble de amor a Cádiz y al propio pasodoble chirigotero, interpretado por la antología Pa echá el ratito en homenaje al legado musical de El Habichuela." }
    ]
  },
  {
    id: 'el-puerto',
    name: 'El puerto y la bahía',
    intro: 'Eddie vuelve al muelle para cantar a la bahía. Busca el azulejo Non Plus Ultra.',
    image: {
      src: 'assets/eddie-puerto.png',
      width: 1672,
      height: 941,
      alt: 'Eddie, vestido de marinero, canta en el muelle al atardecer junto a un azulejo Non Plus Ultra, un farol, cuerdas, una guitarra y una caja de pescado. En la bahía hay un pesquero, un velero y una gaviota.'
    },
    hotspots: [
      { performanceId: "puerto-azulejo", x: 12, y: 27, object: "El azulejo Non Plus Ultra", connection: "Una exposición imaginaria de las maravillas de Cádiz que culmina celebrando su lema Non Plus Ultra." },
      { performanceId: "puerto-toma-mi-canela", x: 96, y: 55, object: "La gaviota", connection: "Una gaviota imagina sobrevolar la bahía y recorrer los barrios y tradiciones de Cádiz." },
      { performanceId: "puerto-los-luceros", x: 7, y: 62, object: "El farol", connection: "El faro y la luna se regalan una serenata en este homenaje a la tradición musical del pasodoble gaditano." },
      { performanceId: "puerto-pesquero", x: 59, y: 47, object: "El barco pesquero", connection: "Los Majaras imaginan unir el espigón de Cádiz con El Puerto de Santa María en esta presentación." },
      { performanceId: "puerto-velero", x: 80, y: 41, object: "El velero del horizonte", connection: "Un viaje musical alrededor del mundo que termina descubriendo que Cádiz reúne todos sus encantos." },
      { performanceId: "puerto-carne-mecha", x: 77, y: 78, object: "La caja de pescado", connection: "Una celebración de la cocina gaditana que reúne hasta 43 platos en un mismo tango." },
      { performanceId: "puerto-la-mar-de-coplas", x: 30, y: 9, object: "La gorra marinera de Eddie", connection: "La presentación de una comparsa de Antonio Martín que obtuvo el primer premio en 1990." },
      { performanceId: "puerto-los-rederos", x: 16, y: 90, object: "Las cuerdas y aparejos del muelle", connection: "Un redero repasa las redes a orillas del mar y le canta a Cádiz con orgullo por su oficio." },
      { performanceId: "puerto-guitarra", x: 35, y: 89, object: "La guitarra", connection: "Una celebración del pasodoble gaditano, su música y el sentimiento que transmite una guitarra." }
    ]
  },
  {
    id: 'gran-teatro-falla',
    name: 'El Gran Teatro Falla',
    intro: 'Entre bambalinas, Eddie se asoma al escenario del Falla.',
    image: {
      src: './assets/eddie-falla.jpg', width: 1402, height: 1122,
      alt: 'Eddie entre el telón rojo y el escenario del Gran Teatro Falla, rodeado de instrumentos y recuerdos del Carnaval.'
    },
    hotspots: [
      {"performanceId": "falla-duendes", "object": "Personaje rojo junto al telón", "x": 39, "y": 75, "connection": "Cuando el Falla se queda vacío, sus pequeños habitantes cobran vida. Una presentación llena de música, magia y amor por el teatro."},
      {"performanceId": "falla-trotamusicos", "object": "Guitarra", "x": 8, "y": 64, "connection": "Una celebración del Carnaval como expresión artística y sentimental del pueblo gaditano."},
      {"performanceId": "falla-millonarios", "object": "Telón rojo", "x": 24, "y": 40, "connection": "La riqueza del arte y del sentimiento carnavalero en una de las comparsas más emblemáticas de Juan Carlos Aragón."},
      {"performanceId": "falla-tutilimundi", "object": "Palcos del teatro", "x": 85, "y": 26, "connection": "El primer gran triunfo del Coro de los Niños, con una presentación que convierte el teatro en el corazón de la fiesta."},
      {"performanceId": "falla-puretas", "object": "Bombo", "x": 80, "y": 62, "connection": "Una presentación que puso al Falla en pie con el inconfundible baile de los puretas."},
      {"performanceId": "falla-fantasia", "object": "Partitura antigua", "x": 16, "y": 86, "connection": "Un tango clásico que convirtió en música un piropo a la mujer gaditana."},
      {"performanceId": "falla-charruas", "object": "Trofeo", "x": 90, "y": 84, "connection": "Un homenaje a dos grandes figuras de la comparsa gaditana, Antonio Martín y Pedro Romero."},
      {"performanceId": "falla-palomez", "object": "Pitos de Carnaval", "x": 33, "y": 95, "connection": "El humor del Canijo de Carmona transforma el escenario del Falla en un restaurante con un menú para cada comensal."},
      {"performanceId": "falla-taberneros", "object": "Farol de bambalinas", "x": 5, "y": 24, "connection": "Uno de los tangos más queridos de Julio Pardo, un clásico del piropo a la mujer gaditana."},
      {"performanceId": "falla-listos", "object": "Máscara de ratón", "x": 23.5, "y": 66.5, "connection": "Una declaración de amor y gratitud a Cádiz, a su gente y a su música. Uno de los pasodobles más recordados del Carnaval de 2020."},
      { x: 67, y: 79, performanceIds: [] }
    ]
  },
  {
    id: 'casco-antiguo',
    name: 'El casco antiguo',
    intro: 'Eddie levanta la copa frente al Mercado Central. Entre los puestos de flores y el bullicio de la plaza, suenan las coplas del Cádiz de todos los días.',
    image: {
      src: './assets/eddie-casco-antiguo.png', width: 1448, height: 1086,
      alt: 'Eddie brinda ante el Mercado Central de Cádiz, con puestos de flores a la derecha y una cúpula al fondo.'
    },
    hotspots: [
      { x: 52.5, y: 38, object: 'Puesto de flores', performanceId: 'casco-pavos-reales', connection: 'Entre flores y colores asoma el cortejo disparatado de una chirigota con aires de realeza.' },
      { x: 59, y: 17, object: 'Rótulo del Mercado Central', performanceId: 'casco-titis-de-cai', connection: 'El Selu convierte el batallón y el recuerdo de la mili en una historia de guasa gaditana.' },
      { x: 92, y: 12, object: 'Cúpula del fondo', performanceId: 'casco-cielo-de-cadiz', connection: 'Dos coloretes le bastan a Tino Tovar para evocar la sencillez del Carnaval de otros tiempos.' },
      { x: 68, y: 40, object: 'Entrada del Mercado Central', performanceId: 'casco-tio-de-la-tiza', connection: 'La entrada del mercado recuerda los tangos que suenan alrededor de la plaza durante el carrusel de coros.' },
      { x: 36, y: 88, object: 'Tapa de la mesa', performanceId: 'casco-currelantes', connection: 'Jesús Bienvenido lleva a escena a los currelantes de Cádiz, que montan un circo para hacer oír su voz.' },
      { x: 94, y: 80, object: 'Calle del fondo — El Pópulo', performanceId: 'casco-reinas-del-populo', connection: 'El Coro de los Niños rinde homenaje a las agrupaciones callejeras que llenan de coplas el barrio más antiguo de Cádiz.' },
      { x: 84, y: 55, object: 'Reloj amarillo de Eddie', performanceId: 'casco-tampax-goyescas', connection: 'El reloj da pie a un cuplé sobre un móvil navideño y su disparatado reconocimiento de voz.' },
      { x: 24, y: 23, object: 'Copa de Eddie', performanceId: 'casco-los-cubatas', connection: 'Un defensor del medio ambiente muy a su manera protagoniza este clásico del humor chirigotero de los ochenta.' },
      { x: 40, y: 16, object: 'Sombrero de Eddie', performanceId: 'casco-sanmolontropos', connection: 'Bajo el sombrero se esconde un cuplé que juega con el reloj y el reglamento del Falla.' }
    ]
  },
  {
    id: 'torre-tavira',
    name: 'Torre Tavira — El Carnaval con más ange',
    intro: 'Entre risas, Eddie se busca un sitio junto a Torre Tavira. Los personajes y carteles de la calle dan paso a parodias, cuplés, temas libres, romanceros y chirigotas callejeras.',
    image: { src: './assets/eddie-torre-tavira.jpg', width: 1448, height: 1086, alt: 'Eddie se ríe ante una actuación callejera junto a Torre Tavira, entre carteles de cuartetos y romanceros.' },
    hotspots: [
      { x: 96, y: 32.5, object: 'Cartel de Eugenio', collectionTitle: 'El Peña, el Masa y los clásicos', connection: 'Escenas de los clásicos del cuarteto gaditano.', performanceIds: ['tavira-boda', 'tavira-cenicienta', 'tavira-ensayo', 'tavira-calvo'] },
      { x: 95, y: 55, object: 'Cartel Cuarteto de Rota', collectionTitle: 'El cuarteto de Rota', connection: 'Homenaje a José Balsa Cirrito, Miguel Sánchez Romero-Guerrero y Felipe Pacheco Salas.', performanceIds: ['tavira-currito', 'tavira-windous'] },
      { x: 95, y: 43.75, object: 'Cartel El Bati', collectionTitle: 'El Bati y Vera Luque', connection: 'Parodias y cuplés del grupo que dirigió Fernando Casas Ciria.', performanceIds: ['tavira-encadenados', 'tavira-pejigueras-ninos', 'tavira-pejigueras-pitita'] },
      { x: 62, y: 45, object: 'Personaje con carpeta', collectionTitle: 'El arte de la parodia', connection: 'Enredos y personajes que hicieron historia en el Falla.', performanceIds: ['tavira-enredo', 'tavira-ser', 'tavira-heidi'] },
      { x: 48, y: 46, object: 'Personaje en bata con patito', collectionTitle: 'El Morera', connection: 'Del campo a La Caleta con el cuarteto del Morera.', performanceIds: ['tavira-campo', 'tavira-comando', 'tavira-ares'] },
      { x: 83, y: 35, object: 'Marinero con prismáticos', collectionTitle: 'El Gago', connection: 'El humor del cuarteto del Gago.', performanceIds: ['tavira-rolling', 'tavira-pensionistas'] },
      { x: 72, y: 50, object: 'Personaje con vestido de flores', collectionTitle: 'Las nuevas generaciones', connection: 'Dos épocas del cuarteto de los niños.', performanceIds: ['tavira-canon', 'tavira-caseta'] },
      { x: 94, y: 21, object: 'Cartel de Romanceros', collectionTitle: 'Los romanceros', connection: 'Versos, cartelón y humor de calle.', performanceIds: ['tavira-bruce', 'tavira-hueva', 'tavira-camina', 'tavira-namber'] },
      { x: 34, y: 27, object: 'Azulejo bajo el rótulo de Torre Tavira', collectionTitle: 'Las ilegales de Torre Tavira', connection: 'Grabaciones históricas de la chirigota del Gómez y Emilio en las calles de Cádiz.', performanceIds: ['tavira-fantasmas-vacas', 'tavira-fantasmas-medicina', 'tavira-curas', 'tavira-volteretas'] },
      { x: 43, y: 64, object: 'Público de la actuación callejera', collectionTitle: 'La calle sigue viva', connection: 'El rock y la guasa de las callejeras de 2024.', performanceIds: ['tavira-woodstock', 'tavira-sin-filtro'] }
    ]
  }
];

const performances = [
  {
    id: 'bandera',
    published: true,
    title: 'Me han dicho que el amarillo',
    group: 'La familia Pepperoni',
    authors: ['Manolo Santander'],
    year: 1998,
    modality: 'Chirigota — pasodoble',
    youtubeId: 'BnMYTryUY0k'
  },
  {
    id: 'puesta-de-sol',
    published: true,
    title: 'Qué bonita es Cádiz por la tarde',
    group: 'Los Acuarela',
    authors: ['José Luis Bustelo'],
    year: 2005,
    modality: 'Comparsa — pasodoble',
    youtubeId: '_kXHlMzOhO0',
    recording: 'Antología Savia Nueva, 2025.'
  },
  {
    id: 'rocas',
    published: true,
    title: 'Que las piedras son duras',
    group: 'Quince piedras',
    authors: ['Enrique Villegas'],
    year: 1984,
    modality: 'Comparsa — pasodoble',
    youtubeId: 'Cc-nYZ98ZWk'
  },
  {
    id: "caleta-lapa-negra",
    published: true,
    title: "Presentación de La maldición de la lapa negra",
    group: "La maldición de la lapa negra",
    authors: ["Manuel Santander Cahué", "José Manuel Sánchez Reyes"],
    year: 2019,
    modality: "Chirigota — presentación",
    youtubeId: "r3kUmJSHce0",
    recording: "Actuación completa de la final del COAC 2019."
  },
  {
    id: "caleta-monedas",
    published: true,
    title: "Los duros antiguos",
    group: "Los anticuarios",
    authors: ["Antonio Rodríguez Martínez, El Tío de la Tiza"],
    year: 1905,
    modality: "Coro — tango",
    youtubeId: "SQEbXJ--Daw",
    recording: "Interpretación conjunta de tres coros en 2015.",
    performer: "La trattoria, La niña bonita y Los sudamericanos"
  },
  {
    id: "caleta-vaporcito",
    published: true,
    title: "El Vaporcito del Puerto",
    group: "Los hombres del mar",
    authors: ["Paco Alba"],
    year: 1965,
    modality: "Comparsa — pasodoble",
    youtubeId: "y-cxt-R17hM",
    performer: "Niña Pastori"
  },
  {
    id: "caleta-balneario",
    published: true,
    title: "Presentación de Caleta",
    group: "Caleta",
    authors: ["Antonio Martín"],
    year: 1980,
    modality: "Comparsa — presentación",
    youtubeId: "Fy7GbZ8torc"
  },
  {
    id: "caleta-templarios",
    published: true,
    title: "Mando hacia ti una barquilla",
    group: "Los Templarios",
    year: 1999,
    modality: "Comparsa — pasodoble",
    authors: ["Antonio Martínez Ares"],
    authorLabel: "Letra y música",
    prize: "Tercer premio",
    youtubeId: "nTED09DZh7o",
    alternateYoutubeId: "KdlaCf71xDU",
    sourceUrl: "https://cadenaser.com/emisora/2021/02/01/radio_cadiz/1612177144_391820.html",
    sourceLabel: "Versión de Toni Piojo en Radio Cádiz",
    recording: "Grabación aislada del pasodoble."
  },
  {
    id: "caleta-guitarra",
    published: true,
    title: "La guitarra española",
    group: "Estampas goyescas",
    authors: ["Paco Alba"],
    year: 1973,
    modality: "Comparsa — pasodoble",
    youtubeId: "ers-VapAq7s",
    recording: "Audio histórico del Falla con acompañamiento visual."
  },
  {
    id: "caleta-redes",
    published: true,
    title: "Ese rinconcito llamado Caleta",
    group: "Los forjaores",
    authors: ["Paco Alba"],
    year: 1971,
    modality: "Comparsa — pasodoble",
    youtubeId: "19IdVTp0G5k",
    performer: "Antología Los Divos",
    recording: "2012."
  },
  {
    id: "campo-panuelo",
    published: true,
    title: "Presentación de La Ventolera",
    group: "La Ventolera",
    year: 1994,
    modality: "Comparsa — presentación",
    authors: ["Antonio Martínez Ares"],
    youtubeId: "MNUP8HJ6v9c",
    youtubeStart: 122,
    youtubeEnd: 325,
    recording: "Final del COAC. Presentación entre 2:02 y 5:25."
  },
  {
    id: "campo-cana",
    published: false,
    title: "El cuplé de la caña de pescar y el Renault 5",
    group: "Humedad y paciencia",
    year: 1998,
    modality: "Chirigota — cuplé",
    authors: ["Diego Corzo Cortés", "Juan Manuel Pérez Rodríguez", "Jaime Fernández de la Puente Alcántara", "Manuel Muñiz Vela"],
    candidateYoutubeId: "COi5Vg16f5w"
  },
  {
    id: "campo-catedral",
    published: true,
    title: "Presentación de El coro la Catedral",
    group: "El coro la Catedral",
    year: 2008,
    modality: "Coro — presentación",
    authors: ["Julio Pardo"],
    authorLabel: "Música",
    youtubeId: "djPzdMtEFpo",
    youtubeStart: 40,
    youtubeEnd: 211,
    recording: "Final del COAC. Presentación entre 0:40 y 3:31, según la transcripción."
  },
  {
    id: "campo-nubes",
    published: true,
    title: "Cuando combate el levante",
    group: "El cielo de Cádiz",
    year: 1998,
    modality: "Comparsa — pasodoble",
    authors: ["Constantino Tovar, Tino Tovar"],
    youtubeId: "oD7ljeENCXU",
    youtubeStart: 168,
    youtubeEnd: 278,
    recording: "Segundo pasodoble de la grabación. Entre 2:48 y 4:38, según la transcripción."
  },
  {
    id: "campo-olas",
    published: true,
    title: "Cádiz es mujer con dos novios",
    group: "Los buscavidas",
    year: 1997,
    modality: "Comparsa — pasodoble",
    authors: ["Antonio Martín"],
    youtubeId: "jBad_gcKrZo",
    performer: "Jesús Cateto, Chema y Suso"
  },
  {
    id: "vina-vendas",
    published: true,
    title: "Presentación de Las momias de güete pa güa los niños",
    group: "Las momias de güete pa güa los niños",
    year: 1986,
    modality: "Chirigota — presentación",
    authors: ["José Enrique Villegas Mejías"],
    youtubeId: "vATtC46tVOY",
    youtubeStart: 35,
    youtubeEnd: 249,
    recording: "Final del COAC. La presentación abre la actuación; el primer pasodoble comienza en torno a 4:09."
  },
  {
    id: "vina-llaves",
    published: true,
    title: "Paseaba apuraíllo",
    group: "Los llaveros solitarios",
    year: 1984,
    modality: "Chirigota — pasodoble",
    authors: ["Manuel García Benedicto", "Manuel Rocha Candón", "José María Jurado", "Juan Romero «Caracol»", "Paco Rosado"],
    credits: {"Letra": "Manuel García Benedicto, Manuel Rocha Candón y José María Jurado", "Música": "Juan Romero «Caracol» y Paco Rosado"},
    youtubeId: "s3b525BtbuE",
    performer: "Los llaveros solitarios",
    recording: "Grabación de archivo con imágenes de Televisión Española."
  },
  {
    id: "vina-azulejo",
    published: true,
    title: "El tanguillo gaditano",
    group: "Los mayordomos",
    year: 1968,
    modality: "Comparsa — pasodoble",
    authors: ["Antonio Martín García"],
    youtubeId: "bhOi1mLMr48"
  },
  {
    id: "vina-pandereta",
    published: true,
    title: "Presentación de Takatá chin chin pom pom",
    group: "Takatá chin chin pom pom",
    year: 1989,
    modality: "Coro — presentación",
    authors: ["Antonio Burgos Belinchón", "Antonio Martín García"],
    credits: {"Letra": "Antonio Burgos Belinchón", "Música": "Antonio Martín García"},
    youtubeId: "UbiX2dLaeIc",
    youtubeStart: 4,
    youtubeEnd: 191,
    recording: "Final del COAC. Tramo aproximado de la presentación según la transcripción."
  },
  {
    id: "vina-cartel",
    published: true,
    title: "Cuplé del cartel de Alberti",
    group: "El que la lleva la entiende (Los borrachos)",
    year: 1992,
    modality: "Chirigota — cuplé",
    authors: ["Erasmo Ubera Morón", "José Guerrero Roldán, El Yuyu", "José Luis García Cossío, El Selu"],
    authorLabel: "Créditos de la agrupación",
    youtubeId: "BaMFj23-Rys",
    youtubeStart: 583,
    youtubeEnd: 629,
    recording: "Final del COAC, Archivo Municipal de Cádiz. Tramo aproximado del primer cuplé según la transcripción. Dirección: José Torres Vela."
  },
  {
    id: "vina-periodico",
    published: true,
    title: "La gente opina de Carnaval",
    group: "Los enteraos",
    year: 2009,
    modality: "Chirigota — pasodoble",
    authors: ["José Luis García Cossío, El Selu"],
    youtubeId: "JYtgw4rEB_U",
    recording: "Vídeo dedicado a este pasodoble, con imágenes de Canal Sur."
  },
  {
    id: "vina-calle",
    published: true,
    title: "Se ve por las calles sin fin",
    group: "Güenagente",
    year: 1994,
    modality: "Comparsa — pasodoble",
    authors: ["Pedro Romero", "José Manuel Prada"],
    youtubeId: "_sKnwMnYGiM"
  },
  {
    id: "vina-carnavaleros",
    published: true,
    title: "Presentación de Los Yesterday",
    group: "Los Yesterday",
    year: 1999,
    modality: "Chirigota — presentación",
    authors: ["Juan Carlos Aragón Becerra"],
    youtubeId: "BWYrDPgoh6Y",
    youtubeStart: 51,
    youtubeEnd: 262,
    recording: "Final del COAC. Tramo aproximado de la presentación según la transcripción."
  },
  {
    id: "vina-mascara",
    published: false,
    group: "Las muchachas de la perla",
    year: 2026,
    modality: "Chirigota callejera",
    authors: ["Ana López Segovia"]
  },
  {
    id: "vina-balcon",
    published: true,
    title: "Como un loco enamorao",
    group: "Los funcionarios, una raza superior",
    year: 2005,
    modality: "Chirigota — pasodoble",
    authors: ["José Antonio Pérez Fernández, El Habichuela"],
    authorLabel: "Música",
    youtubeId: "vjMU9_p3EmQ",
    performer: "Antología Pa echá el ratito",
    recording: "Concurso de Coplas Antiguas de la Peña Original Paco Alba."
  },
  {
    id: "puerto-azulejo",
    published: true,
    title: "Piedra a piedra",
    group: "Salsero sero sero siete y salió el sero sero seis, ojú qué pisotón",
    year: 1992,
    modality: "Chirigota — pasodoble",
    authors: ["Francisco Manuel Cárdenas Ruso", "Rafael Gálvez Núñez", "José Antonio Pérez Fernández, El Habichuela"],
    credits: {"Letra": "Francisco Manuel Cárdenas Ruso y Rafael Gálvez Núñez", "Música": "José Antonio Pérez Fernández, El Habichuela"},
    prize: "Tercer premio",
    youtubeId: "4EPPECZrqIQ",
    youtubeStart: 345,
    youtubeEnd: 453,
    recording: "Final del COAC. El capítulo arranca en 5:45 y la transcripción sitúa el comentario posterior en 7:33.",
    dedication: "En recuerdo de José Antonio Pérez Fernández, El Habichuela, cuya música sigue formando parte del alma de Cádiz."
  },
  {
    id: "puerto-toma-mi-canela",
    published: false,
    title: "Toma mi canela",
    group: "Canela y Clavo",
    year: 1984,
    modality: "Comparsa — pasodoble",
    authors: ["Pedro Trujillo Ramos, Catalán Chico"],
    authorLabel: "Letra y música",
    prize: "Cuarto premio",
    sourceUrl: "https://libretodecarnaval.blogspot.com/2008/09/canela-y-clavo.html"
  },
  {
    id: "puerto-los-luceros",
    published: true,
    title: "No es que la luna lunera",
    group: "Los Luceros",
    year: 2019,
    modality: "Comparsa — pasodoble",
    authors: ["Miguel Ángel García Argüez, El Chapa", "José Manuel Aranda Perales", "Manuel Sánchez Alba, El Noly"],
    credits: {"Letra": "Miguel Ángel García Argüez, El Chapa", "Música": "José Manuel Aranda Perales y Manuel Sánchez Alba, El Noly"},
    performer: "Manuel Sánchez Alba, El Noly",
    youtubeId: "QSZNkX9X0D4"
  },
  {
    id: "puerto-pesquero",
    published: true,
    title: "Presentación de Del Puerto a Cai",
    group: "Del Puerto a Cai",
    year: 1982,
    modality: "Comparsa — presentación",
    authors: ["Ángel García López", "La agrupación"],
    credits: {"Letra": "Ángel García López", "Música": "La agrupación"},
    performer: "Los Majaras",
    youtubeId: "kl9tJbCyahM",
    audioUrl: "https://www.carnavaldelpuerto.es/wp-content/Musicas/1982%20-%20Del%20Puerto%20a%20Cai/Presentaci%C3%B3n.mp3",
    recording: "Presentación aislada del archivo Carnaval de El Puerto. El enlace de YouTube lleva a la semifinal completa."
  },
  {
    id: "puerto-velero",
    published: true,
    title: "Popurrí de La vuelta a Cádiz en 80 mundos",
    group: "La vuelta a Cádiz en 80 mundos",
    year: 2016,
    modality: "Coro — popurrí",
    authors: ["Rafael Pastrana Guillén, Faly Pastrana"],
    authorLabel: "Letra y música",
    prize: "Primer premio",
    youtubeId: "IxTJ5bPHlE8",
    youtubeStart: 959,
    youtubeEnd: 1534,
    recording: "Final del COAC, Canal Sur. Tramo aproximado del popurrí según la transcripción."
  },
  {
    id: "puerto-carne-mecha",
    published: false,
    title: "Carne mechá",
    group: "Los Buhoneros",
    year: 1979,
    modality: "Coro — tango",
    authors: ["La agrupación", "Antonio Escobar"],
    credits: {"Letra": "La agrupación", "Música": "Antonio Escobar"},
    prize: "Primer premio compartido",
    sourceUrl: "https://letrasdecarnaval.com/letra/coro-los-buhoneros-1979-tango-carne-mecha"
  },
  {
    id: "puerto-la-mar-de-coplas",
    published: true,
    title: "Presentación de La Mar de Coplas",
    group: "La Mar de Coplas",
    year: 1990,
    modality: "Comparsa — presentación",
    authors: ["Antonio Martín García"],
    prize: "Primer premio",
    youtubeId: "Mmwr-vLCs8E",
    alternateYoutubeId: "Ujb61jpUzrY",
    alternateYoutubeLabel: "Actuación completa de semifinales en YouTube",
    sourceUrl: "https://lawebdelcarnaval.org/video/la-mar-de-coplas-final-coac-1990/",
    sourceLabel: "Actuación completa de la final",
    recording: "Vídeo que contiene únicamente la presentación de la final."
  },
  {
    id: "puerto-los-rederos",
    published: true,
    title: "Presentación de Los Rederos",
    group: "Los Rederos",
    year: 1974,
    modality: "Comparsa — presentación",
    authors: ["Diego Caraballo Blanco", "José Manuel Gómez Álvarez, Catano"],
    credits: {"Letra": "Diego Caraballo Blanco", "Música": "José Manuel Gómez Álvarez, Catano"},
    prize: "Tercer premio provincial",
    audioUrl: "https://www.carnavaldelpuerto.es/wp-content/Musicas/1974%20-%20Los%20Rederos/Presentaci%C3%B3n.mp3",
    sourceUrl: "https://carnavaldelpuerto.es/1974-los-rederos-diego-caraballo-blanco/",
    sourceLabel: "Escuchar en Carnaval de El Puerto",
    recording: "Audio de la presentación en el Gran Teatro Falla, conservado en el archivo de Carnaval de El Puerto."
  },
  {
    id: "puerto-guitarra",
    published: true,
    title: "Con una guitarra",
    group: "Los Vikingos",
    year: 2003,
    modality: "Comparsa — pasodoble",
    authors: ["Joaquín Quiñones Madera", "Manuel Sánchez Alba, El Noly"],
    credits: {"Letra": "Joaquín Quiñones Madera", "Música": "Manuel Sánchez Alba, El Noly"},
    prize: "Segundo premio",
    performer: "Ramoni, Miguel Nández y Kevin Ponce",
    youtubeId: "9auC1mgKsTU",
    alternateYoutubeId: "GVmfsZQRxY0"
  },
  {
    "id": "falla-duendes",
    "published": true,
    "title": "Presentación de Los Duendes Coloraos",
    "group": "Los Duendes Coloraos",
    "year": 2012,
    "modality": "Comparsa — presentación",
    "authors": [
      "Francisco Javier Márquez Mateos",
      "David Márquez Mateos"
    ],
    "authorLabel": "Letra y música",
    "prize": "Primer premio",
    "youtubeId": "FQ4z7U3rl0w",
    "alternateYoutubeId": "FSesqfaApLM",
    "alternateYoutubeLabel": "Actuación completa de la final en YouTube",
    "sourceUrl": "https://www.lawebdelcarnaval.org/comparsa/los-duendes-coloraos/",
    "sourceLabel": "Ficha y otras actuaciones",
    "recording": "Presentación de la final, publicada por Canal Sur."
  },
  {
    "id": "falla-trotamusicos",
    "published": true,
    "title": "Ay, al son del Carnaval",
    "group": "Los Trotamúsicos",
    "year": 1992,
    "modality": "Comparsa — pasodoble",
    "authors": [
      "Antonio Martín García"
    ],
    "authorLabel": "Letra y música",
    "prize": "Segundo premio",
    "youtubeId": "AVdc4AcASRI",
    "alternateYoutubeId": "5WzV2p1kZ8s",
    "alternateYoutubeLabel": "Pasodobles de la comparsa en YouTube",
    "sourceUrl": "https://acordesgaditanos.com/acordes/pasodoble-los-trotamusicos/",
    "sourceLabel": "Letra y acordes",
    "recording": "Pasodoble aislado, publicado con el título «Ay, al son con este son»."
  },
  {
    "id": "falla-millonarios",
    "published": true,
    "title": "Presentación de Los Millonarios",
    "group": "Los Millonarios",
    "year": 2015,
    "modality": "Comparsa — presentación",
    "authors": [
      "Juan Carlos Aragón Becerra"
    ],
    "authorLabel": "Letra y música",
    "prize": "Primer premio",
    "youtubeId": "Ca_eGVbhLhc",
    "youtubeStart": 0,
    "youtubeEnd": 266,
    "alternateYoutubeId": "nIUyiwlSzsQ",
    "alternateYoutubeLabel": "Presentación y pasodobles en YouTube",
    "recording": "Presentación delimitada por los capítulos de la grabación."
  },
  {
    "id": "falla-tutilimundi",
    "published": true,
    "title": "Presentación de Tutilimundi",
    "group": "Tutilimundi",
    "year": 1992,
    "modality": "Coro — presentación",
    "authors": [
      "José Marchena Domínguez",
      "Fernando Migueles Santander, Nandi Migueles"
    ],
    "credits": {
      "Letra": "José Marchena Domínguez",
      "Música": "Fernando Migueles Santander, Nandi Migueles"
    },
    "prize": "Primer premio",
    "youtubeId": "CpuvGy7XnTE",
    "youtubeStart": 45,
    "youtubeEnd": 180,
    "recording": "Final del COAC. Tramo de la presentación delimitado con la transcripción."
  },
  {
    "id": "falla-puretas",
    "published": true,
    "title": "Presentación de Los Puretas del Caribe",
    "group": "Los Puretas del Caribe",
    "year": 2012,
    "modality": "Chirigota — presentación",
    "authors": [
      "Manuel Álvarez Seda",
      "José Manuel Cornejo Benítez"
    ],
    "credits": {
      "Letra": "Manuel Álvarez Seda",
      "Música": "José Manuel Cornejo Benítez"
    },
    "prize": "Primer premio",
    "youtubeId": "EiQsxrmhR6M",
    "youtubeStart": 0,
    "youtubeEnd": 193,
    "sourceUrl": "https://www.canalsur.es/television/carnaval-sur/chirigota-puretas-caribe_1_1128120.html",
    "sourceLabel": "Actuación en Canal Sur",
    "recording": "Final del COAC. Tramo de la presentación delimitado con la transcripción."
  },
  {
    "id": "falla-fantasia",
    "published": true,
    "title": "Gaditana, mi rosita temprana",
    "group": "La Fantasía",
    "year": 1956,
    "modality": "Coro — tango",
    "authors": [
      "Francisco García de Quirós",
      "Manuel Bravo Vilar"
    ],
    "youtubeId": "WTZFmWjIP2c"
  },
  {
    "id": "falla-charruas",
    "published": true,
    "title": "Pasodoble a Antonio Martín y Pedro Romero",
    "group": "Los Charrúas",
    "year": 1995,
    "modality": "Comparsa — pasodoble",
    "authors": [
      "Joaquín Quiñones Madera",
      "José Martínez González, Pepe Martínez"
    ],
    "credits": {
      "Letra": "Joaquín Quiñones Madera",
      "Música": "José Martínez González, Pepe Martínez"
    },
    "prize": "Primer premio",
    "youtubeId": "CMzPSGm-vew",
    "youtubeStart": 183,
    "youtubeEnd": 348,
    "sourceUrl": "https://lawebdelcarnaval.org/comparsa/los-charruas/",
    "sourceLabel": "Archivo de actuaciones",
    "recording": "Primer pasodoble de preliminares. Tramo identificado al cotejar la transcripción con la letra."
  },
  {
    "id": "falla-palomez",
    "published": true,
    "title": "Presentación de Los Juan Palómez",
    "group": "Los Juan Palómez, yo te lo guiso y tú te lo comes",
    "year": 2007,
    "modality": "Chirigota — presentación",
    "authors": [
      "Antonio Pedro Serrano Álvarez, El Canijo de Carmona",
      "Constantino Tovar Verdejo, Tino Tovar"
    ],
    "credits": {
      "Letra": "Antonio Pedro Serrano Álvarez, El Canijo de Carmona",
      "Música": "Constantino Tovar Verdejo, Tino Tovar"
    },
    "prize": "Primer premio",
    "youtubeId": "MKe16L0gOQg",
    "youtubeStart": 0,
    "youtubeEnd": 162,
    "alternateYoutubeId": "8g4falu8OPs",
    "alternateYoutubeLabel": "Actuación completa de preliminares en YouTube",
    "recording": "Final del COAC. Tramo de la presentación delimitado con la transcripción."
  },
  {
    "id": "falla-taberneros",
    "published": true,
    "title": "Como el aroma de nardos",
    "group": "Los Taberneros de Puerto",
    "year": 1982,
    "modality": "Coro — tango",
    "authors": [
      "J. A. Hita",
      "Julio Pardo Merelo"
    ],
    "credits": {
      "Letra": "J. A. Hita",
      "Música": "Julio Pardo Merelo"
    },
    "prize": "Segundo premio",
    "youtubeId": "d3UltTWlvIA",
    "performer": "Antología de Julio Pardo, La gaditana que vuelve (2022)"
  },
  {
    "id": "falla-listos",
    "published": true,
    "title": "Y cuando yo era un tonto",
    "group": "Los Listos",
    "year": 2020,
    "modality": "Comparsa — pasodoble",
    "authors": ["Miguel Ángel García Argüez, El Chapa", "Manuel Sánchez Alba, El Noly"],
    "credits": {
      "Letra": "Miguel Ángel García Argüez, El Chapa",
      "Música del pasodoble": "Manuel Sánchez Alba, El Noly"
    },
    "director": "Ángel Subiela Gómez",
    "prize": "Primer accésit",
    "youtubeId": "Jqy2RNcRSxI",
    "alternateVideo": {
      "youtubeId": "mVCGOF2fU4Q",
      "youtubeStart": 281,
      "youtubeEnd": 434,
      "label": "Preliminares de Onda Cádiz"
    }
  },
  {
    id: 'casco-pavos-reales',
    published: true,
    title: 'Presentación de Los Pavos Reales',
    group: 'Los Pavos Reales, una especie en extinción',
    year: 2004,
    modality: 'Chirigota — presentación',
    authors: ['Francisco Javier Márquez Mateos', 'José Manuel Martínez Sierra', 'David Márquez Mateos'],
    credits: {
      'Letra': 'Francisco Javier Márquez Mateos y José Manuel Martínez Sierra, El Taka',
      'Música': 'David Márquez Mateos'
    },
    director: 'David Márquez Mateos',
    prize: 'Sexto puesto (segundo accésit)',
    youtubeId: 'z8Uz65PjycE',
    sourceUrl: 'https://carnavaldle.es/coac/2004/los-pavos-reales/',
    sourceLabel: 'Ficha del COAC'
  },
  {
    id: 'casco-titis-de-cai',
    published: true,
    title: 'Ahora va a ser pa marzo',
    group: 'Los Titis de Cai',
    year: 1994,
    modality: 'Chirigota — pasodoble',
    authors: ['José Luis García Cossío, El Selu'],
    credits: {
      'Letra': 'José Luis García Cossío, El Selu',
      'Música': 'Atribución abierta. Carnavaldle acredita letra y música a El Selu. Carnaval y Actualidad atribuye la música a José Luis Trechera García. Sigue pendiente la confirmación con una fuente primaria.'
    },
    director: 'José Luis García Cossío, El Selu',
    prize: 'Segundo premio',
    youtubeId: 'aFOGO4ngwDw',
    recording: 'Grabación aislada del pasodoble, también archivado como «Ahora va a hacer».',
    sourceUrl: 'https://carnavaldle.es/coac/1994/los-titis-de-cai/',
    sourceLabel: 'Carnavaldle — créditos de El Selu',
    additionalSources: [
      { label: 'Carnaval y Actualidad — crédito de José Luis Trechera García', url: 'https://carnavalyactualidad.blogspot.com/2014/06/okchirigota-los-titis-de-cai.html' }
    ]
  },
  {
    id: 'casco-cielo-de-cadiz',
    published: true,
    title: 'Pregunta a veces la gente',
    group: 'El Cielo de Cádiz',
    year: 1998,
    modality: 'Comparsa — pasodoble',
    authors: ['Constantino Tovar Verdejo, Tino Tovar'],
    authorLabel: 'Letra y música',
    director: 'Jesús Bienvenido Saucedo',
    prize: 'Segundo premio',
    youtubeId: '31vVacSX_Yw',
    recording: 'Pasodoble de semifinales.',
    sourceUrl: 'https://carnavaldle.es/coac/1998/el-cielo-de-cadiz/',
    sourceLabel: 'Ficha del COAC'
  },
  {
    id: 'casco-tio-de-la-tiza',
    published: true,
    title: 'Debe mi Cádiz salir',
    group: 'El Tío de la Tiza',
    year: 1997,
    modality: 'Coro — tango',
    authors: ['Antonio Rivas Cabañas', 'Julio Pardo Merelo'],
    director: 'Juan Lucena Morant',
    prize: 'Segundo premio',
    youtubeId: '_Lz69f8bZRo',
    sourceUrl: 'https://carnavaldle.es/coac/1997/el-tio-la-tiza/',
    sourceLabel: 'Ficha del COAC'
  },
  {
    id: 'casco-currelantes',
    published: true,
    title: 'Presentación de Los Currelantes',
    group: 'Los Currelantes',
    year: 2011,
    modality: 'Comparsa — presentación',
    authors: ['Jesús Bienvenido Saucedo'],
    authorLabel: 'Letra y música',
    director: 'Daniel Obregón Guillén',
    prize: 'Segundo premio',
    youtubeId: 'aU0klfgnToY',
    youtubeStart: 0,
    youtubeEnd: 230,
    recording: 'Presentación de la final del COAC de 2011.',
    sourceUrl: 'https://carnahub.com/agrupaciones/2011/1970/los-currelantes',
    sourceLabel: 'Ficha y créditos del COAC'
  },
  {
    id: 'casco-reinas-del-populo',
    published: true,
    title: 'Presentación de Las Reinas del Pópulo',
    group: 'Las Reinas del Pópulo',
    year: 2010,
    modality: 'Coro — presentación',
    authors: ['Fernando Migueles Santander, Nandi Migueles'],
    authorLabel: 'Letra y música',
    director: 'Fernando Migueles Santander, Nandi Migueles',
    prize: 'Tercer premio',
    youtubeId: 'xXPFdkgRVPE',
    youtubeStart: 15,
    youtubeEnd: 211,
    alternateYoutubeId: 'vA3-NBHS5tw',
    alternateYoutubeLabel: 'Actuación completa de preliminares en YouTube',
    recording: 'Presentación de la final del COAC de 2010. Grabación del Archivo Municipal de Cádiz.',
    sourceUrl: 'https://www.carnavaldecadiz.tv/index.php/video/2010/final/coros/coro-las-reinas-del-populo-final-actuacion-completa-carnaval-de-cadiz-2010',
    sourceLabel: 'Actuación completa de la final en Carnaval de Cádiz TV'
  },
  {
    id: 'casco-tampax-goyescas',
    published: true,
    title: 'Me han regalado un móvil por Navidad',
    group: 'Tampax Goyescas, comparsa fina y segura',
    year: 2001,
    modality: 'Chirigota — cuplé',
    authors: ['José Guerrero Roldán, El Yuyu', 'Francisco José Fernández Díaz, Toté'],
    credits: {
      'Letra': 'José Guerrero Roldán, El Yuyu',
      'Música': 'Francisco José Fernández Díaz, Toté'
    },
    director: 'Francisco José Fernández Díaz, Toté',
    prize: 'Primer premio',
    youtubeId: 'Jzh_kxTx_YM',
    recording: 'Cuplé aislado de la segunda semifinal del COAC de 2001.'
  },
  {
    id: 'casco-los-cubatas',
    published: true,
    title: 'Yo soy un defensor del medio ambiente',
    group: 'Los Cubatas',
    year: 1986,
    modality: 'Chirigota — pasodoble',
    authors: ['Francisco Rosado Rodríguez', 'Manuel Rocha Cendón', 'Emilio Rosado Rodríguez', 'Juan Romero Quirós, El Caracol'],
    credits: {
      'Letra del repertorio': 'En su entrevista, José Manuel Gómez Sánchez recuerda que escribió junto a Emilio Rosado Rodríguez parte del repertorio, incluido algún pasodoble. La ficha de la agrupación acredita también a Francisco Rosado Rodríguez y Manuel Rocha Cendón. La autoría de este pasodoble concreto sigue sin confirmarse.',
      'Música': 'Francisco Rosado Rodríguez y Juan Romero Quirós, El Caracol, según los créditos del repertorio'
    },
    prize: 'Semifinalista',
    youtubeId: '2M9278tO9Jg',
    sourceUrl: 'https://carnaval.lavozdigital.es/noticia/en-todos-los-grupos-en-los-que-he-estado-ha-primado-la-amistad-la-colaboracion-se-me-adjudican-letras-que-no-he-escrito-y-a-otros-letras-mias/',
    sourceLabel: 'Entrevista autobiográfica a José Manuel Gómez',
    additionalSources: [
      { label: 'Ficha de Los Cubatas en La Web del Carnaval', url: 'https://lawebdelcarnaval.org/chirigota/los-cubatas/' },
      { label: 'Trayectoria de la callejera del Gómez y Emilio Rosado', url: 'https://carnavalgaditano.com/callejera-del-gomez-emilio-rosado-y-guatifo/' },
      { label: 'Créditos de repertorio en Carnaval Por Un Tubo', url: 'https://www.youtube.com/watch?v=k1YgYxp_oZ0' }
    ]
  },
  {
    "id": "tavira-boda",
    "published": true,
    "title": "La boda real, a la gaditana",
    "group": "La boda del siglo",
    "year": 1982,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Manuel Rosales Romero"
    ],
    "youtubeId": "3OQ2LuiTOkQ",
    "youtubeStart": 0,
    "youtubeEnd": 333,
    "context": "El Peña, el Masa y los hermanos Scapachini llevan al Falla su versión de la boda de Carlos y Diana.",
    "prize": "Primer premio",
    "alternateYoutubeId": "t8EuQNTs_BY",
    "alternateYoutubeLabel": "Actuación completa en YouTube",
    "sourceUrl": "https://carnavaldle.es/coac/1982/la-boda-del-siglo/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-cenicienta",
    "published": true,
    "title": "El cuento de la Cenicienta",
    "group": "Tres notas musicales",
    "year": 1991,
    "modality": "Cuarteto — parodia",
    "authors": [
      "José Manuel Gómez Sánchez",
      "Paco Leal",
      "Antonio Alonso",
      "Antonio Mato (Talleres Cuplesur)"
    ],
    "youtubeId": "DCWFk46hrGo",
    "youtubeStart": 0,
    "youtubeEnd": 822,
    "context": "El Peña, Juan Villar «El Masa» y Gabriel Peinado «Gabi» anuncian su particular versión del cuento.",
    "prize": "Primer premio",
    "alternateYoutubeId": "dOV6muDC6iQ",
    "alternateYoutubeLabel": "Actuación completa en YouTube",
    "sourceUrl": "https://carnavaldle.es/coac/1991/tres-notas-musicales/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-ensayo",
    "published": true,
    "title": "El ensayo en el teatro",
    "group": "Tres notas musicales",
    "year": 1991,
    "modality": "Cuarteto — parodia",
    "authors": [
      "José Manuel Gómez Sánchez",
      "Paco Leal",
      "Antonio Alonso",
      "Antonio Mato (Talleres Cuplesur)"
    ],
    "youtubeId": "dOV6muDC6iQ",
    "youtubeStart": 440,
    "youtubeEnd": 1049,
    "context": "El maestro Peñatoven y sus músicos intentan ensayar en un teatro aparentemente vacío.",
    "prize": "Primer premio"
  },
  {
    "id": "tavira-calvo",
    "published": true,
    "title": "Uno calvo del tó",
    "group": "Tres notas musicales",
    "year": 1991,
    "modality": "Cuarteto — cuplé",
    "authors": [
      "José Manuel Gómez Sánchez",
      "Paco Leal",
      "Antonio Alonso",
      "Antonio Mato (Talleres Cuplesur)"
    ],
    "youtubeId": "dOV6muDC6iQ",
    "youtubeStart": 1182,
    "youtubeEnd": 1228,
    "context": "Un cuplé sobre dos fichajes del Cádiz, con el estribillo que el Falla cantó con el trío.",
    "prize": "Primer premio"
  },
  {
    "id": "tavira-currito",
    "published": true,
    "title": "Currito de la Cruz",
    "group": "El cuarteto siempre llama dos veces",
    "year": 1987,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Miguel Sánchez Romero-Guerrero (letra)",
      "José Balsa Cirrito (música)"
    ],
    "youtubeId": "l5IVWdVd0-k",
    "youtubeStart": 9,
    "youtubeEnd": 55,
    "context": "Tras el supuesto percance taurino, Currito y el maestro discuten dónde le ha dado el toro.",
    "prize": "Primer premio",
    "alternateYoutubeId": "TPixopz9ajY",
    "alternateYoutubeLabel": "Actuación completa en YouTube",
    "sourceUrl": "https://www.canalsur.es/television/carnaval-sur/adios-definitivo-cuarteto-rota_1_1045774.html",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-windous",
    "published": true,
    "title": "Una máquina para hablar a distancia",
    "group": "Windous 95",
    "year": 1996,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Miguel Sánchez Romero-Guerrero (letra)",
      "José Balsa Cirrito (música)"
    ],
    "youtubeId": "1kQ8NqQujKU",
    "youtubeStart": 336,
    "youtubeEnd": 373,
    "context": "En la parodia de semifinales, un aparato moderno se cuela en el mundo de los personajes de Rota.",
    "prize": "Primer premio",
    "sourceUrl": "https://www.canalsur.es/television/carnaval-sur/adios-definitivo-cuarteto-rota_1_1045774.html",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-encadenados",
    "published": true,
    "title": "La pesca y el disco de Iron Maiden",
    "group": "Encadenados",
    "year": 1998,
    "modality": "Cuarteto — parodia",
    "authors": [
      "José Antonio Vera Luque"
    ],
    "youtubeId": "adF83fWFFC4",
    "youtubeStart": 311,
    "youtubeEnd": 366,
    "context": "Un boletín deportivo se convierte en una conversación sobre pesca en La Caleta y heavy metal. Dirige Fernando Casas Ciria, El Bati.",
    "prize": "Primer premio",
    "sourceUrl": "https://carnavaldle.es/coac/1998/encadenados/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-pejigueras-ninos",
    "published": true,
    "title": "Hoy en día los niños",
    "group": "Peña Cultural Recreativa Carnavalesca Los Pejigueras",
    "year": 1999,
    "modality": "Cuarteto — cuplé",
    "authors": [
      "José Antonio Vera Luque"
    ],
    "youtubeId": "_ZygWZKvzF8",
    "youtubeStart": 674,
    "youtubeEnd": 729,
    "context": "Las imitaciones infantiles desembocan en una pulla a la familia real. La agrupación ganó la votación de cuplés de La Voz del Carnaval en 2021.",
    "prize": "Primer premio",
    "sourceUrl": "https://carnaval.lavozdigital.es/noticia/el-cuarteto-perfecto-del-carnaval-de-cadiz/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-pejigueras-pitita",
    "published": true,
    "title": "La Pitita Ridruejo",
    "group": "Peña Cultural Recreativa Carnavalesca Los Pejigueras",
    "year": 1999,
    "modality": "Cuarteto — cuplé",
    "authors": [
      "José Antonio Vera Luque"
    ],
    "youtubeId": "_ZygWZKvzF8",
    "youtubeStart": 730,
    "youtubeEnd": 779,
    "context": "El segundo cuplé del primer pase de semifinales juega con las apariciones y los dobles sentidos.",
    "prize": "Primer premio",
    "sourceUrl": "https://carnavaldle.es/coac/1999/pena-c-r-c-los-pejigueras/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-enredo",
    "published": true,
    "title": "Las aspiraciones del trío en el Concurso",
    "group": "Enredo",
    "year": 1987,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Emilio Gutiérrez Cruz, El Libi (letra)",
      "Manuel Santander Cahué (música)"
    ],
    "youtubeId": "joSnSb1uPCI",
    "youtubeStart": 462,
    "youtubeEnd": 495,
    "context": "Los personajes cuentan, a su manera, qué esperan conseguir en el Concurso. Fragmento del pase de semifinales.",
    "prize": "Primer accésit",
    "sourceUrl": "https://carnavaldle.es/coac/1987/enredo/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-ser",
    "published": true,
    "title": "Salgo o no salgo en Carnaval",
    "group": "Ser o no ser",
    "year": 1997,
    "modality": "Cuarteto — parodia",
    "authors": [
      "José Manuel Gómez Sánchez (letra y música)",
      "Juan Romero Quirós (música)"
    ],
    "youtubeId": "BiX8ch61hsw",
    "youtubeStart": 66,
    "youtubeEnd": 127,
    "context": "Una calavera shakespeariana plantea, en clave gaditana, el dilema de salir o no salir en Carnaval.",
    "prize": "Primer premio",
    "sourceUrl": "https://lawebdelcarnaval.org/video/ser-o-no-ser-semifinal-1-coac-1997/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-heidi",
    "published": true,
    "title": "Heidi, Clara y el abuelo enamorado",
    "group": "Los tuyos",
    "year": 2012,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Francisco Javier Aguilera Ceballos",
      "Ángel Piulestán Guillén"
    ],
    "youtubeId": "fqMk5gmxCvM",
    "youtubeStart": 189,
    "youtubeEnd": 318,
    "context": "Heidi y Clara esperan al abuelo, que vuelve del pueblo hablando de Cupido y de su enamorada.",
    "prize": "Tercer premio",
    "sourceUrl": "https://www.carnavaldecadiz.tv/video/2012/semifinales/cuartetos/2012-cuarteto-los-tuyos-completo-semifinal",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-campo",
    "published": true,
    "title": "Una campaña electoral y una mesa de pimpón",
    "group": "Los hombres del campo",
    "year": 2002,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Manuel Jesús Morera Rioja",
      "Francisco José López Benítez"
    ],
    "youtubeId": "jJYS9XVXQ0w",
    "youtubeStart": 100,
    "youtubeEnd": 158,
    "context": "Una candidatura improvisada acaba en una discusión sobre mesas de pimpón, botellón y el precio de la cerveza.",
    "prize": "Segundo premio"
  },
  {
    "id": "tavira-comando",
    "published": true,
    "title": "Tú no eres de Cádiz: el aparcamiento",
    "group": "El equipo A minúscula (Comando Caleti)",
    "year": 2018,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Manuel Jesús Morera Rioja (letra)",
      "José Carlos Meni (letra)",
      "Iván Romero Castellón (letra y música)"
    ],
    "youtubeId": "pbGch5jxyHs",
    "youtubeStart": 44,
    "youtubeEnd": 85,
    "context": "El Gadita convierte el uso de los aparcamientos y sus columnas imposibles en una prueba de gaditanismo.",
    "prize": "Primer premio",
    "sourceUrl": "https://www.canalsur.es/television/carnaval-sur/cuarteto-equipo-minuscula-comando-caleti_1_1128046.html",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-ares",
    "published": true,
    "title": "El cumpleaños de don Antonio",
    "group": "El equipo A minúscula (Comando Caleti)",
    "year": 2018,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Manuel Jesús Morera Rioja (letra)",
      "José Carlos Meni (letra)",
      "Iván Romero Castellón (letra y música)"
    ],
    "youtubeId": "pbGch5jxyHs",
    "youtubeStart": 612,
    "youtubeEnd": 797,
    "context": "Antonio Martínez Ares entra en la parodia de la final y conversa con el Trinchera, que lleva años celebrándole el cumpleaños.",
    "prize": "Primer premio",
    "sourceUrl": "https://carnaval.lavozdigital.es/agrupacion/2018/cuartetos/equipo-minuscula-comando-caleti/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-rolling",
    "published": true,
    "title": "Javier Ruibal y los Rolling del Gago",
    "group": "Esta boca es mía",
    "year": 2009,
    "modality": "Cuarteto — tema libre",
    "authors": [
      "Miguel Ángel Moreno Gómez",
      "José Manuel Cossi González"
    ],
    "youtubeId": "I23XHhd_vyk",
    "youtubeStart": 875,
    "youtubeEnd": 1088,
    "context": "La banda anuncia su concierto en el Falla, recibe a Javier Ruibal con un juego de palabras y arranca su particular versión de los Rolling.",
    "prize": "Segundo premio",
    "sourceUrl": "https://www.diariodecadiz.es/diario_del_carnaval/boca_0_227377286.amp.html",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-pensionistas",
    "published": true,
    "title": "Los abuelos y sus nietos",
    "group": "Los pensionistas se la dan de artistas",
    "year": 2015,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Miguel Ángel Moreno Gómez",
      "José Manuel Cossi González"
    ],
    "youtubeId": "dKqPInVTS94",
    "youtubeStart": 391,
    "youtubeEnd": 484,
    "context": "Los abuelos comparan los concursos y los regalos de sus nietos, con un patinete que remata la conversación.",
    "prize": "Primer premio",
    "sourceUrl": "https://www.carnavaldecadiz.tv/index.php/video/2015/final/cuartetos/2015-cuarteto-los-pensionistas-se-la-dan-de-artistas-final",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-canon",
    "published": true,
    "title": "Casimiro viene de la óptica",
    "group": "Los que están al pie del cañón",
    "year": 2013,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Iván Romero Castellón"
    ],
    "youtubeId": "QUvcmvXtS6k",
    "youtubeStart": 175,
    "youtubeEnd": 221,
    "context": "La llegada de Casimiro al cuartel da pie a una conversación disparatada sobre su visita a la óptica.",
    "prize": "Primer premio",
    "sourceUrl": "https://carnahub.com/agrupaciones/2013/1722/los-que-estan-al-pie-del-canon",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-caseta",
    "published": true,
    "title": "La boda de la Santera y el Papito",
    "group": "En mi caseta cabe todo el mundo",
    "year": 2024,
    "modality": "Cuarteto — parodia",
    "authors": [
      "Iván Romero Castellón (letra y música)",
      "Borja Romero Castellón (música)"
    ],
    "youtubeId": "PtcK-qZZJww",
    "youtubeStart": 476,
    "youtubeEnd": 604,
    "context": "El camping celebra la boda de la Santera y el Papito con el Pena de encargado de los anillos.",
    "prize": "Tercer premio",
    "sourceUrl": "https://www.portaldecadiz.com/carnaval/97784-video-una-boda-el-cadiz-betis-y-muy-poca-vergueenza-en-mi-caseta-cabe-todo-el-mundo-completa-la-historia-",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-hueva",
    "published": true,
    "title": "La cuenta del gastrobar",
    "group": "Nostalgia de hueva",
    "year": 2024,
    "modality": "Romancero",
    "authors": [
      "Francisco Javier Sánchez Vázquez, Monano",
      "Francisco Javier Benítez Muñoz"
    ],
    "youtubeId": "57h-bZpoiyg",
    "youtubeStart": 19,
    "youtubeEnd": 84,
    "context": "Un gaditano explica el susto que se lleva al pedir media ración en un gastrobar.",
    "prize": "Primer premio",
    "sourceUrl": "https://www.carnavaldecadiz.com/carnaval-2024/romancero-nostalgia-de-hueva/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-camina",
    "published": true,
    "title": "De Loreto a plaza de España",
    "group": "Camina o revienta",
    "year": 2025,
    "modality": "Romancero",
    "authors": [
      "José Francisco Butrón Prida",
      "Manuel Pereira González, Txapela"
    ],
    "youtubeId": "pMgyBLRWQqg",
    "youtubeStart": 103,
    "youtubeEnd": 147,
    "context": "El conductor de la línea 2 presenta su recorrido y explica hasta qué punto vive pegado al volante.",
    "prize": "Primer premio",
    "sourceUrl": "https://www.carnavaldecadiz.com/romanceros-2025/romancero-camina-o-revienta/",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-namber",
    "published": true,
    "title": "El yate del número uno",
    "group": "Los namber güan",
    "year": 2026,
    "modality": "Romancero",
    "authors": [
      "Pedro Barba Campos",
      "Agustín Barba Campos"
    ],
    "youtubeId": "4Hyo05jQI_M",
    "youtubeStart": 202,
    "youtubeEnd": 261,
    "context": "Dos presumidos llevan la competición por tener el mejor yate hasta el absurdo.",
    "prize": "Tercer premio",
    "sourceUrl": "https://www.portaldecadiz.com/carnaval/151667-conoce-los-premios-del-concurso-de-romanceros-del-carnaval-de-cadiz-2026",
    "sourceLabel": "Ficha y archivo"
  },
  {
    "id": "tavira-fantasmas-vacas",
    "published": true,
    "title": "El cuplé de las vacas locas",
    "group": "Los Fantasmas",
    "year": 2001,
    "modality": "Chirigota callejera — cuplé",
    "youtubeId": "ghx7OPk0nU4",
    "youtubeStart": 324,
    "youtubeEnd": 381,
    "context": "La crisis de las vacas locas se cuela en una tanda de cuplés grabada en Torre Tavira el 25 de febrero de 2001.",
    "sourceUrl": "https://carnaval.lavozdigital.es/noticia/en-todos-los-grupos-en-los-que-he-estado-ha-primado-la-amistad-la-colaboracion-se-me-adjudican-letras-que-no-he-escrito-y-a-otros-letras-mias/",
    "sourceLabel": "Entrevista autobiográfica a José Manuel Gómez",
    "credits": {
      "Letra del repertorio": "José Manuel Gómez Sánchez y Emilio Rosado Rodríguez participaron en la letra de cuplés y presentación. La autoría de este cuplé concreto sigue sin confirmarse."
    },
    "additionalSources": [
      {
        "label": "Trayectoria de la callejera del Gómez y Emilio Rosado",
        "url": "https://carnavalgaditano.com/callejera-del-gomez-emilio-rosado-y-guatifo/"
      }
    ]
  },
  {
    "id": "tavira-fantasmas-medicina",
    "published": true,
    "title": "El cuplé de los avances de la medicina",
    "group": "Los Fantasmas",
    "year": 2001,
    "modality": "Chirigota callejera — cuplé",
    "youtubeId": "ghx7OPk0nU4",
    "youtubeStart": 545,
    "youtubeEnd": 598,
    "context": "Uno de los cuplés que los fantasmas cantaron en Torre Tavira el primer domingo de Carnaval de 2001.",
    "sourceUrl": "https://carnaval.lavozdigital.es/noticia/en-todos-los-grupos-en-los-que-he-estado-ha-primado-la-amistad-la-colaboracion-se-me-adjudican-letras-que-no-he-escrito-y-a-otros-letras-mias/",
    "sourceLabel": "Entrevista autobiográfica a José Manuel Gómez",
    "credits": {
      "Letra del repertorio": "José Manuel Gómez Sánchez y Emilio Rosado Rodríguez participaron en la letra de cuplés y presentación. La autoría de este cuplé concreto sigue sin confirmarse."
    },
    "additionalSources": [
      {
        "label": "Trayectoria de la callejera del Gómez y Emilio Rosado",
        "url": "https://carnavalgaditano.com/callejera-del-gomez-emilio-rosado-y-guatifo/"
      }
    ]
  },
  {
    "id": "tavira-curas",
    "published": true,
    "title": "Pasodoble del exorcismo",
    "group": "Los Curas de Pueblo",
    "year": 2000,
    "modality": "Chirigota callejera — pasodoble",
    "youtubeId": "xh8J5mq3h7A",
    "youtubeStart": 0,
    "youtubeEnd": 100,
    "context": "El pasodoble completo, grabado en Torre Tavira el 5 de marzo de 2000.",
    "sourceUrl": "https://carnaval.lavozdigital.es/noticia/en-todos-los-grupos-en-los-que-he-estado-ha-primado-la-amistad-la-colaboracion-se-me-adjudican-letras-que-no-he-escrito-y-a-otros-letras-mias/",
    "sourceLabel": "Entrevista autobiográfica a José Manuel Gómez",
    "credits": {
      "Letra del repertorio": "José Manuel Gómez Sánchez y Emilio Rosado Rodríguez colaboraron en la letra del repertorio. La autoría de este pasodoble concreto sigue sin confirmarse."
    },
    "additionalSources": [
      {
        "label": "Trayectoria de la callejera del Gómez y Emilio Rosado",
        "url": "https://carnavalgaditano.com/callejera-del-gomez-emilio-rosado-y-guatifo/"
      }
    ]
  },
  {
    "id": "tavira-woodstock",
    "published": true,
    "title": "Carnaval y rock and roll",
    "group": "Los que fueron a Woodstock y todavía están a gusto",
    "year": 2024,
    "modality": "Chirigota callejera — presentación",
    "youtubeId": "txy_ElfblUE",
    "youtubeStart": 189,
    "youtubeEnd": 276,
    "context": "La Shirigota Rockera trae la guitarra eléctrica y convierte el final de su presentación en un estribillo de rock carnavalero.",
    "sourceUrl": "https://www.codigocarnaval.com/agrupaciones-callejeras/shirigota-rockera/",
    "sourceLabel": "Trayectoria de la Shirigota Rockera",
    "credits": {
      "Interpretación": "Shirigota Rockera Ilegal de Cai",
      "Autoría del fragmento": "Firma individual sin documentar"
    },
    "additionalSources": [
      {
        "label": "Ficha de Woodstock (2024)",
        "url": "https://www.carnavaldecadiz.com/callejeras-o-ilegales/chirigota-callejera-los-que-fueron-a-woodstock-y-todavia-estan-a-gusto/"
      }
    ]
  },
  {
    "id": "tavira-sin-filtro",
    "published": true,
    "title": "La comanda sin filtro",
    "group": "Las sin filtro, dinner de venta",
    "year": 2024,
    "modality": "Chirigota callejera — presentación",
    "youtubeId": "xHoPcNqdsiQ",
    "youtubeStart": 69,
    "youtubeEnd": 156,
    "context": "Cadiwoman mezcla el diner estadounidense y la venta gaditana. Su camarera canta la comanda, con café para casi todo.",
    "sourceUrl": "https://www.carnavaldecadiz.com/callejeras-o-ilegales/chirigota-callejera-las-sin-filtro-chirigota-cadiwoman-1954/",
    "sourceLabel": "Ficha y documentación",
    "authors": [
      "Susana Ginesta"
    ]
  },
  {
    "id": "tavira-bruce",
    "published": true,
    "title": "Bruce Lee nació en la calle Feduchy",
    "group": "El auténtico Bruce Lee",
    "year": 2011,
    "modality": "Romancero",
    "youtubeId": "iBo4PpMMIrE",
    "youtubeStart": 4,
    "youtubeEnd": 79,
    "context": "El supuesto Bruce Lee presenta su película y explica dónde nació de verdad, según su versión gaditana de la historia.",
    "sourceUrl": "https://www.diariodecadiz.es/diario_del_carnaval/imagenes/romanceros-hermanos-barba-imagenes_3_2001100659.amp.html",
    "sourceLabel": "Ficha y documentación",
    "authors": [
      "Pedro Barba Campos",
      "Agustín Barba Campos"
    ]
  },
  {
    "id": "casco-sanmolontropos",
    "published": true,
    "title": "El cuplé del reglamento y el tiempo",
    "group": "Los Sanmolontropos Verdes",
    "year": 1989,
    "modality": "Chirigota — cuplé",
    "youtubeId": "W5Gd80T_HNE",
    "youtubeStart": 0,
    "youtubeEnd": 48,
    "context": "La letra termina en un estribillo atropellado que convierte el límite de tiempo del concurso en su propio chiste.",
    "sourceUrl": "https://elblogdelyuyu.blogspot.com/2008/11/18-chirigotas-2-entrega-1989-los_11.html",
    "sourceLabel": "Ficha y documentación",
    "authors": [
      "José Guerrero Roldán, El Yuyu",
      "Erasmo Ubera Morón",
      "José Luis García Cossío, El Selu"
    ],
    "credits": {
      "Letra": "José Guerrero Roldán, El Yuyu, y Erasmo Ubera Morón",
      "Música": "José Luis García Cossío, El Selu"
    },
    "prize": "Tercer premio",
    "alternateYoutubeId": "V99CTaEzoDs",
    "alternateYoutubeLabel": "Actuación de la final en YouTube"
  },
  {
    "id": "tavira-volteretas",
    "published": true,
    "title": "Me cae fatal",
    "group": "Los Volteretas",
    "year": 1994,
    "modality": "Chirigota callejera — pasodoble",
    "youtubeId": "dDEOavh8VfM",
    "youtubeStart": 0,
    "youtubeEnd": 110,
    "context": "Cada frase recoge el sonido final de la anterior para encadenar un disparate con el siguiente. Grabado en la escalera de Correos, en la plaza de las Flores, el 27 de febrero de 1994.",
    "credits": {
      "Créditos generales de la agrupación": "José Manuel Gómez Sánchez, Emilio Rosado Rodríguez y Juan Romero Quirós, Caracol"
    },
    "sourceUrl": "https://carnaval.lavozdigital.es/noticia/en-todos-los-grupos-en-los-que-he-estado-ha-primado-la-amistad-la-colaboracion-se-me-adjudican-letras-que-no-he-escrito-y-a-otros-letras-mias/",
    "sourceLabel": "Entrevista autobiográfica a José Manuel Gómez",
    "alternateYoutubeId": "qC9GiU9Anqo",
    "alternateYoutubeLabel": "Otra actuación callejera de Los Volteretas",
    "additionalSources": [
      {
        "label": "Trayectoria de la callejera del Gómez y Emilio Rosado",
        "url": "https://carnavalgaditano.com/callejera-del-gomez-emilio-rosado-y-guatifo/"
      }
    ]
  }
];
