import Apple from "../assets/apple-logo.png";
import Facebook from "../assets/facebook.png";
import Spotify from "../assets/spotify.png";
import Google from "../assets/google.png";
import Amazon from "../assets/amazon.png";
import Adobe from "../assets/adobe.png";
import Microsoft from "../assets/microsoft.png";
import Netflix from "../assets/netflix.png";
import Twitter from "../assets/twitter-blue.png";
import Wild from "../assets/wild.png";

export const companies = [
  {
    id: 0,
    name: "Wild",
    coordinates: [
      4.8269787,
      45.7463242
    ],
    description:
      "Wild est une entreprise innovante dans le domaine de la technologie durable.",
    logo: Wild,
    reviews: [
      { category: "Arab", rating: 4 },
      { category: "Black", rating: 3 },
      { category: "Asian", rating: 5 },
      { category: "LGBT Friendly", rating: 4 },
      { category: "Women Friendly", rating: 3 },
    ],
    comments: [
      { id: 1, text: "Bonne entreprise pour les Arabes", tags: ["Arab"] },
      { id: 2, text: "Pas très inclusif pour les femmes", tags: ["Women"] },
      {
        id: 3,
        text: "L'entreprise valorise les personnes asiatiques",
        tags: ["Asian"],
      },
      { id: 4, text: "Environnement agréable pour les LGBT", tags: ["LGBT"] },
      {
        id: 5,
        text: "L'entreprise peut mieux faire pour les noirs",
        tags: ["Black"],
      },
    ],
  },
  {
    id: 1,
    name: "Apple",
    coordinates: [
      -122.0322895,
      37.3228934
    ],
    description:
      "Apple est une entreprise multinationale spécialisée dans la conception et la commercialisation de produits électroniques.",
    logo: Apple,
    reviews: [
      { category: "Arab", rating: 3 },
      { category: "Black", rating: 4 },
      { category: "Asian", rating: 5 },
      { category: "LGBT Friendly", rating: 4 },
      { category: "Women Friendly", rating: 5 },
    ],
    comments: [
      {
        id: 1,
        text: "Très bon environnement pour les femmes",
        tags: ["Women"],
      },
      { id: 2, text: "Bon pour les LGBT", tags: ["LGBT"] },
      { id: 3, text: "Les noirs sont bien accueillis", tags: ["Black"] },
      { id: 4, text: "Les asiatiques sont bien intégrés", tags: ["Asian"] },
      {
        id: 5,
        text: "L'entreprise pourrait faire mieux pour les Arabes",
        tags: ["Arab"],
      },
    ],
  },
  {
    id: 2,
    name: "Spotify",
    description: "Spotify est une entreprise de service de streaming musical.",
    coordinates: [
      2.3324033,
      48.8798846
    ],
    logo: Spotify,
    reviews: [
      { category: "Arab", rating: 5 },
      { category: "Black", rating: 4 },
      { category: "Asian", rating: 4 },
      { category: "LGBT Friendly", rating: 5 },
      { category: "Women Friendly", rating: 4 },
    ],
    comments: [
      { id: 1, text: "Environnement très inclusif", tags: ["Arab", "LGBT"] },
      { id: 2, text: "Bon pour les Asiatiques", tags: ["Asian"] },
      { id: 3, text: "Les noirs se sentent bien ici", tags: ["Black"] },
      { id: 4, text: "Les femmes sont respectées", tags: ["Women"] },
      { id: 5, text: "Excellent pour la communauté LGBT", tags: ["LGBT"] },
    ],
  },
  {
    id: 3,
    name: "Amazon",
    description:
      "Amazon est une entreprise de commerce électronique et de services cloud.",
    logo: Amazon,
    coordinates: [
      2.3118584156036377,
      48.9040641784668
    ],
    reviews: [
      { category: "Arab", rating: 2 },
      { category: "Black", rating: 3 },
      { category: "Asian", rating: 4 },
      { category: "LGBT Friendly", rating: 3 },
      { category: "Women Friendly", rating: 3 },
    ],
    comments: [
      { id: 1, text: "Pas très inclusif pour les Arabes", tags: ["Arab"] },
      { id: 2, text: "Peut mieux faire pour les LGBT", tags: ["LGBT"] },
      { id: 3, text: "Les asiatiques sont modérément inclus", tags: ["Asian"] },
      {
        id: 4,
        text: "Les noirs ressentent une inclusion moyenne",
        tags: ["Black"],
      },
      {
        id: 5,
        text: "Les femmes ne sont pas très bien représentées",
        tags: ["Women"],
      },
    ],
  },
  {
    id: 4,
    name: "Adobe",
    coordinates: [
      -121.8947723,
      37.3294709
    ],
    description:
      "Adobe est une entreprise de logiciels spécialisée dans les produits multimédias et de créativité.",
    logo: Adobe,
    reviews: [
      { category: "Arab", rating: 4 },
      { category: "Black", rating: 5 },
      { category: "Asian", rating: 5 },
      { category: "LGBT Friendly", rating: 5 },
      { category: "Women Friendly", rating: 5 },
    ],
    comments: [
      {
        id: 1,
        text: "Très inclusif pour tout le monde",
        tags: ["Women", "Black"],
      },
      { id: 2, text: "Excellent environnement pour les LGBT", tags: ["LGBT"] },
      { id: 3, text: "Les arabes sont bienvenus", tags: ["Arab"] },
      {
        id: 4,
        text: "Les asiatiques sont très bien représentés",
        tags: ["Asian"],
      },
      {
        id: 5,
        text: "Les noirs trouvent un environnement favorable",
        tags: ["Black"],
      },
    ],
  },
  {
    id: 5,
    name: "Google",
    coordinates: [
      -122.084614,
      37.4217636
    ],
    description:
      "Google est une entreprise technologique multinationale spécialisée dans les services et produits liés à Internet.",
    logo: Google,
    reviews: [
      { category: "Arab", rating: 4 },
      { category: "Black", rating: 5 },
      { category: "Asian", rating: 5 },
      { category: "LGBT Friendly", rating: 4 },
      { category: "Women Friendly", rating: 5 },
    ],
    comments: [
      { id: 1, text: "Bonne inclusion pour les Arabes", tags: ["Arab"] },
      { id: 2, text: "Les noirs se sentent bienvenus", tags: ["Black"] },
      { id: 3, text: "Les asiatiques sont bien intégrés", tags: ["Asian"] },
      { id: 4, text: "Les LGBT sont bien accueillis", tags: ["LGBT"] },
      { id: 5, text: "Les femmes sont bien représentées", tags: ["Women"] },
    ],
  },
  {
    id: 6,
    name: "Microsoft",
    coordinates: [
      2.2646596431732178,
      48.833900451660156
    ],
    description:
      "Microsoft est une entreprise multinationale américaine d’informatique et de micro-informatique.",
    logo: Microsoft,
    reviews: [
      { category: "Arab", rating: 3 },
      { category: "Black", rating: 4 },
      { category: "Asian", rating: 5 },
      { category: "LGBT Friendly", rating: 4 },
      { category: "Women Friendly", rating: 4 },
    ],
    comments: [
      { id: 1, text: "Environnement correct pour les Arabes", tags: ["Arab"] },
      { id: 2, text: "Bon accueil pour les noirs", tags: ["Black"] },
      { id: 3, text: "Très bon pour les asiatiques", tags: ["Asian"] },
      { id: 4, text: "Les LGBT sont modérément inclus", tags: ["LGBT"] },
      { id: 5, text: "Les femmes trouvent leur place", tags: ["Women"] },
    ],
  },
  {
    id: 7,
    name: "Facebook",
    coordinates: [
      -122.177992,
      37.4519671
    ],
    description:
      "Facebook est une entreprise américaine qui détient le réseau social éponyme.",
    logo: Facebook,
    reviews: [
      { category: "Arab", rating: 4 },
      { category: "Black", rating: 4 },
      { category: "Asian", rating: 5 },
      { category: "LGBT Friendly", rating: 5 },
      { category: "Women Friendly", rating: 5 },
    ],
    comments: [
      { id: 1, text: "Bon pour les Arabes", tags: ["Arab"] },
      { id: 2, text: "Les noirs sont bien accueillis", tags: ["Black"] },
      { id: 3, text: "Excellent pour les asiatiques", tags: ["Asian"] },
      { id: 4, text: "Très bon environnement pour les LGBT", tags: ["LGBT"] },
      { id: 5, text: "Les femmes sont bien représentées", tags: ["Women"] },
    ],
  },
  {
    id: 8,
    name: "Twitter",
    coordinates: [
      2.3311419,
      48.8689953
    ],
    description: "Twitter est une entreprise américaine de microblogage.",
    logo: Twitter,
    reviews: [
      { category: "Arab", rating: 3 },
      { category: "Black", rating: 3 },
      { category: "Asian", rating: 4 },
      { category: "LGBT Friendly", rating: 5 },
      { category: "Women Friendly", rating: 4 },
    ],
    comments: [
      { id: 1, text: "Correct pour les Arabes", tags: ["Arab"] },
      { id: 2, text: "Les noirs sont modérément inclus", tags: ["Black"] },
      { id: 3, text: "Bon pour les asiatiques", tags: ["Asian"] },
      { id: 4, text: "Très bon pour les LGBT", tags: ["LGBT"] },
      { id: 5, text: "Les femmes se sentent bien", tags: ["Women"] },
    ],
  },
  {
    id: 9,
    name: "Netflix",
    coordinates: [
      2.3291903,
      48.8712233
    ],
    description:
      "Netflix est une entreprise américaine proposant des films et séries télévisées en flux continu sur Internet.",
    logo: Netflix,
    reviews: [
      { category: "Arab", rating: 4 },
      { category: "Black", rating: 5 },
      { category: "Asian", rating: 5 },
      { category: "LGBT Friendly", rating: 5 },
      { category: "Women Friendly", rating: 5 },
    ],
    comments: [
      { id: 1, text: "Très inclusif pour les Arabes", tags: ["Arab"] },
      { id: 2, text: "Excellent pour les noirs", tags: ["Black"] },
      { id: 3, text: "Les asiatiques sont bien intégrés", tags: ["Asian"] },
      { id: 4, text: "Environnement parfait pour les LGBT", tags: ["LGBT"] },
      { id: 5, text: "Les femmes trouvent leur place", tags: ["Women"] },
    ],
  },
];
