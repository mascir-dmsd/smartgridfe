// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilPlug,
  UilBolt,
  UilBoltAlt,
  UilBell,
  UilAnalysis,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import node from "../imgs/node.png";
// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Supervision",
  },
  {
    icon: UilBell,
    heading: "Contrôle",
  },
  {
    icon: UilUsersAlt,
    heading: "Optimisation",
  },
  {
    icon: UilPackage,
    heading: 'Prédiction'
  },
  {
    icon: UilAnalysis,
    heading: 'Configuration'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Tension",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "220 V",
    png: UilBoltAlt,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Courant",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "3 A",
    png: UilPlug,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Energie",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4270 W",
    png: UilBolt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: node,
    name: "Noeud1",
    noti: "a envoyé une nouvelle donnée.",
    time: "il y a 25 secondes",
  },
  {
    img: node,
    name: "Noeud2",
    noti: "n'est plus connecté. Aucune donnée n'a été reçu ",
    time: "il y a 30 minutes",
  },
  {
    img: node,
    name: "Noeud3",
    noti: "a envoyé une nouvelle donnée. Attention!!! la consommation est très élevée.",
    time: "il y a 2 heures",
  },
];
