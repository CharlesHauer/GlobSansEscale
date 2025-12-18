import iconCulinaire from './assets/icon-culinaire.png'
import iconArtisanat from './assets/icon-artisanat.png'
import iconArtistique from './assets/icon-artistique.png'
import iconAssociatif from './assets/icon-associatif.png'
import logoIdvalo from './assets/logo-idvalo.png'
import logoArchipel from './assets/logo-archipel.jpg'
import logoCelliers from './assets/logo-celliers.png'
import logoMusicajans from './assets/logo-musicajans.png'
import logoGospel from './assets/logo-gospel.png'

export const homeIntro = {
  title: 'Un voyage au cœur des cultures, sans quitter Nantes.',
  description:
    'Glob’Escale est un festival multiculturel sur le Parc des Chantiers : musique, danse, gastronomie, ateliers et rencontres réunissent la métropole nantaise autour de la découverte et du partage.',
}

export const escalesOverview = [
  {
    title: 'Escales Culinaires',
    description:
      'Des spécialités authentiques préparées par des chefs et food-trucks venus des quatre coins du monde.',
    detail: 'Chaque plat raconte une histoire et fait voyager vos papilles.',
    icon: iconCulinaire,
    to: '/escales/culinaires',
  },
  {
    title: 'Escales Artisanales',
    description: 'Des ateliers créatifs pour découvrir des savoir-faire uniques.',
    detail: 'Bougies, sushis, tatouages tribaux… une immersion dans les gestes du monde.',
    icon: iconArtisanat,
    to: '/escales/artisanales',
  },
  {
    title: 'Escales Artistiques',
    description: 'Performances, danses et concerts qui célèbrent la diversité culturelle.',
    detail: 'Un tour du monde des rythmes et des talents.',
    icon: iconArtistique,
    to: '/escales/artistiques',
  },
  {
    title: 'Escales Associatives',
    description: 'Rencontres avec des associations engagées dans la solidarité et l’ouverture.',
    detail: 'Découvertes, animations et dialogues pour agir ensemble.',
    icon: iconAssociatif,
    to: '/escales/associatives',
  },
]

export const callsToAction = [
  {
    title: 'Prestataires',
    copy:
      'Vous proposez des services ou des expériences en lien avec le voyage, la culture ou la découverte ?',
    detail:
      'Rejoignez notre réseau et faites découvrir votre savoir-faire à une communauté curieuse et engagée.',
    link: '/contact',
    cta: 'Proposer vos services',
  },
  {
    title: 'Partenaires',
    copy: 'Associez votre image à une aventure humaine et solidaire.',
    detail: 'Contribuez à des projets enrichissants qui valorisent la rencontre et le partage.',
    link: '/partenaires',
    cta: 'Nous soutenir',
  },
  {
    title: 'Devenir bénévole',
    copy: 'Envie de voyager, rencontrer et créer des moments uniques ?',
    detail: 'Rejoignez l’équipage Glob’Escale et vivez le festival de l’intérieur.',
    link: '/contact',
    cta: 'Rejoindre l’équipage',
  },
]

export const collaborators = [
  { name: 'IDVALO', logo: logoIdvalo, url: 'https://idvalo.fr' },
  {
    name: 'Archipel Évènement',
    logo: logoArchipel,
    url: 'https://www.archipel-evenement.com',
  },
  {
    name: 'Les Celliers du Val de Loire',
    logo: logoCelliers,
    url: 'https://www.lescelliersdegrandlieu.com/',
  },
  { name: 'Musica Jans', logo: logoMusicajans, url: 'https://musicajans.com/' },
  { name: 'Nantes Gospel', logo: logoGospel, url: 'https://www.nantesgospel.fr' },
]

export const valuesList = [
  {
    title: 'Diversité et inclusion',
    description:
      'Célébrer la richesse des différences : Glob’Escale rassemble des cultures, des idées et des personnes dans un esprit d’ouverture.',
  },
  {
    title: 'Equité',
    description:
      'Offrir un accès égal pour tous afin que chaque culture soit représentée et valorisée de façon juste et équilibrée.',
  },
  {
    title: 'Solidarité et partage',
    description:
      'Un espace d’entraide et d’échanges où les expériences culturelles renforcent les liens humains et créent une communauté.',
  },
]

export const teamMembers = [
  {
    name: 'Jade Brunet',
    role: 'Capitaine de l’odyssée',
    bio: 'Jade veille à ce que chaque étape du voyage soit une réussite. Son passeport est rempli d’idées innovantes pour faire de Glob’Escale un carrefour où cultures et échanges s’entremêlent.',
  },
  {
    name: 'Marta De Sousa',
    role: 'Boussole médiatique',
    bio: 'Marta partage l’âme du festival à travers les mots, les images et les réseaux. Chaque publication est une invitation à l’évasion et aux rencontres.',
  },
]

export const editionHighlights = {
  intro: [
    'La première édition de Glob’Escale a posé ses valises sur l’Île de Nantes en avril 2025.',
    'Chaque stand, atelier et performance était un bout du monde à explorer, savourer et partager.',
  ],
  stats: [
    { label: 'Voyageurs-curieux', value: '2 500' },
    { label: 'Haltes gourmandes', value: '6' },
    { label: 'Ateliers créatifs et immersifs', value: '9' },
    { label: 'Troupes artistiques', value: '6' },
    { label: 'Associations engagées', value: '5' },
  ],
  sections: [
    {
      title: 'Escales gourmandes',
      text: 'Un tour du monde des saveurs où chaque plat racontait une histoire et évoquait un coin du globe.',
    },
    {
      title: 'Escales créatives',
      text: 'Des ateliers pour éveiller la curiosité, apprendre et expérimenter de nouveaux gestes.',
    },
    {
      title: 'Escales artistiques',
      text: 'Danse, musique et performances qui nous ont emportés ailleurs entre rythmes, traditions et émotions partagées.',
    },
    {
      title: 'Escales associations',
      text: 'Des associations fidèles à l’esprit d’échange et de solidarité, incarnant les liens entre cultures et actions locales.',
    },
  ],
}

export const culinaryVendors = [
  {
    title: 'Cuisine africaine — L’Éléphant Gourmand',
    description:
      'Traiteur nantais mêlant produits locaux et saveurs du monde, pour des plats gourmands et raffinés.',
    highlight: 'Venez goûter les plats typiques de la cuisine africaine sur son stand.',
  },
  {
    title: 'Cuisine d’Asie — L’Atelier des Sushis',
    description:
      'Petite entreprise artisanale qui prépare chaque matin des sushis frais et gourmands avec des produits de qualité.',
    highlight:
      'Trois boîtes de sushis différentes à découvrir pour voyager au pays du Soleil-Levant.',
  },
  {
    title: 'Cuisine d’Amérique — Steliana',
    description:
      'Entreprise familiale argentine : les empanadas incarnent la convivialité et le partage du quotidien argentin.',
    highlight: 'Des empanadas authentiques à déguster en famille ou entre amis.',
  },
  {
    title: 'Cuisine d’Océanie — Oh My Fish',
    description:
      'Spécialiste des produits de la mer avec un pain brioché toasté garni de recettes au poisson frais.',
    highlight: 'Dégustez leurs fameux fish rolls faits avec des produits ultra frais.',
  },
  {
    title: 'Cuisine d’Europe — Tonton Pâte',
    description:
      'Food truck nantais spécialiste des panozzos, sandwichs à base de pâte à pizza cuits au feu de bois.',
    highlight: 'Recettes franco-italiennes réalisées à partir de produits frais et cuisinés.',
  },
  {
    title: 'Cuisine d’Amérique — Millie’s Burger',
    description:
      'Food truck de burgers maison imaginés par une cheffe forte de 12 ans d’expérience en restauration.',
    highlight: 'Une carte variée pour une expérience conviviale et gourmande.',
  },
]

export const artisanWorkshops = [
  {
    title: 'Atelier européen — Création de bougies',
    description:
      'Fabriquez vos bougies parfumées avec Lucine : couleurs, senteurs et techniques de coulage pour repartir avec votre création.',
  },
  {
    title: 'Atelier africain — Pliage de samoussas',
    description:
      'Apprenez à garnir, plier et sceller des samoussas croustillants avec Jocelyne, et repartez avec des astuces pour les refaire chez vous.',
  },
  {
    title: 'Atelier asiatique — Réalisation de sushis',
    description:
      'Maîtrisez la natte de bambou et réalisez vos propres sushis en 30 minutes avec les conseils de Florian.',
  },
  {
    title: 'Atelier Polynésie — Tatouages tribaux éphémères',
    description:
      'Découvrez les motifs ancestraux polynésiens et repartez avec un tatouage éphémère réalisé à l’encre naturelle par Carmen.',
  },
  {
    title: 'Atelier européen — Crochet',
    description:
      'Avec Soleya, réalisez des sacs en crochet faits main, personnalisables et éco-responsables.',
  },
  {
    title: 'Atelier européen — Art du bois recyclé',
    description:
      'Boisélia sublime le bois recyclé en cadres décoratifs uniques qui mêlent chaleur naturelle et couleurs vibrantes.',
  },
  {
    title: 'Atelier africain — Couture avec tissu africain',
    description:
      'Avec Sanni de l’Atelier RafMar, initiez-vous à la couture sur wax et bogolan pour créer accessoires et vêtements.',
  },
  {
    title: 'Atelier Océanie — Création de bijoux coquillages',
    description:
      'Avec Rahitinui, confectionnez vos boucles ou bracelets en coquillages tahitiens et découvrez l’histoire des îles.',
  },
  {
    title: 'Atelier Amérique — Création de cerfs-volants',
    description: 'Fabriquez un cerf-volant et repartez avec votre création prête à prendre le vent.',
  },
]

export const artisticLineup = [
  {
    title: 'Nantes Gospel',
    description:
      'Chorale dynamique et inclusive fondée en 2021 : elle partage l’énergie du gospel moderne avec passion.',
  },
  {
    title: 'Shobi Desh — Rock Pop',
    description:
      'Groupe de rock pop français aux reprises anthologiques, pour une expérience musicale énergique.',
  },
  {
    title: 'Bambou Kreyol',
    description:
      'Association nantaise qui valorise la culture créole à travers des spectacles rythmés au son du Bèlè.',
  },
  {
    title: 'Coração Do Brasil',
    description:
      'École de samba créée en 1992 à Nantes : percussions, danse et musique brésilienne pour faire vibrer le public.',
  },
  {
    title: 'Moses Fanon',
    description:
      'Pionnier de la scène hip-hop underground nantaise, inspiré par la neo soul et le jazz, pour un dance floor brûlant.',
  },
]

export const associativeLineup = [
  {
    title: 'Maison de l’Europe',
    description:
      'Sensibilise aux enjeux européens et à la mobilité internationale avec des ateliers interactifs et des échanges.',
  },
  {
    title: 'Un enfant par la main',
    description:
      'ONG qui permet aux enfants démunis d’Amérique du Sud, d’Afrique et d’Asie d’accéder à l’éducation via le parrainage.',
  },
  {
    title: 'Maison de l’Afrique',
    description:
      'Centre culturel qui favorise la compréhension des cultures africaines et lutte contre les stéréotypes.',
  },
  {
    title: 'ASAN',
    description:
      'Association Soleil d’Asie Nantes : préservation et transmission des cultures asiatiques, avec actions solidaires.',
  },
  {
    title: 'Association Rahitinui',
    description:
      'Fait découvrir les coutumes tahitiennes à travers bijoux, artisanat et spécialités culinaires sucrées.',
  },
]

export const partnerCards = [
  {
    title: 'Archipel Événement',
    description:
      'Location de jeux et animations pour tous types d’événements, avec plus de 150 références disponibles.',
  },
  {
    title: 'Business Time Club',
    description:
      'Réseau professionnel nantais dédié aux dirigeants de TPE, artisans, commerçants et professions libérales.',
  },
  {
    title: 'Chez Mary et Pierre-Yves',
    description:
      'Services sur mesure pour événements privés et professionnels : diner musical autour de produits locaux et jazz.',
  },
  {
    title: 'Nantes Gospel',
    description:
      'Ensemble vocal qui partage l’énergie du gospel à travers concerts et événements vibrants.',
  },
  {
    title: 'Idvalo',
    description:
      'Partenaire textile pour promouvoir votre marque : goodies, PLV, fournitures de sport, personnalisés en France et Europe.',
  },
  {
    title: 'Shobi Desh',
    description:
      'Groupe de rock pop aux performances énergiques et reprises anthologiques, pour une ambiance unique.',
  },
  {
    title: 'Les Celliers de Grand Lieu',
    description:
      'Cave ligérienne proposant blancs, rouges et rosés locaux, à déguster tout en découvrant leur savoir-faire.',
  },
  {
    title: 'Brunet et Monié Photographie',
    description:
      'Agence photo qui crée un patrimoine visuel authentique pour les entreprises : histoire, valeurs et identité.',
  },
  {
    title: 'Bilanskills',
    description:
      'Accompagnement en bilan de compétences, orientation scolaire et coaching gestion du stress pour avancer sereinement.',
  },
  {
    title: 'IGC Business School',
    description:
      'École de commerce en alternance à Nantes, du Post-Bac au Bac+5, axée sur l’expérience professionnelle.',
  },
]

export const infosPratiques = {
  localisation:
    'Le festival est situé sur l’esplanade des Traceurs de Coques, sur le Parc des Chantiers (Île de Nantes).',
  mobilite: [
    'Les transports représentent près de 80% de l’empreinte carbone des festivals : choisissons des mobilités douces.',
    'Naolib propose des déplacements gratuits dans ses bus et tramways dans la métropole nantaise le week-end.',
  ],
  transports: ['Tram : ligne 1 – arrêt Chantiers Navals', 'Navettes et pistes cyclables accessibles depuis le centre.'],
  parkings: ['Parkings à proximité sur l’Île de Nantes (préférez le covoiturage).'],
}

export const contactReasons = [
  'Informations générales',
  'Devenir bénévole',
  'Relations presse',
  'Autre demande',
]
