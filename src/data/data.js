import social_logo from "../img/main_social.png";
import recuerdame_logo from "../img/main_recuerdame.png";
import cotizacion_logo from "../img/cotizacion_main.png";
import taller_logo from "../img/taller_main.png";

import barberapp_logo from "../img/main_barberapp.png";
import barberweb_logo from "../img/main_barberweb.png";
import barberweb_logo_1 from "../img/barberweb_1.png";
import barberweb_logo_2 from "../img/barberweb_2.png";
import barberweb_logo_3 from "../img/barberweb_3.png";
import barberweb_logo_4 from "../img/barberweb_4.png";
import barberweb_logo_5 from "../img/barberweb_5.png";
import barberweb_logo_6 from "../img/barberweb_6.png";
import barberweb_logo_7 from "../img/barberweb_7.png";

import barberapp_logo_1 from "../img/barberapp_1.jpeg";
import barberapp_logo_2 from "../img/barberapp_2.jpeg";
import barberapp_logo_3 from "../img/barberapp_3.jpeg";
import barberapp_logo_4 from "../img/barberapp_4.jpeg";
import barberapp_logo_5 from "../img/barberapp_5.jpeg";
import barberapp_logo_6 from "../img/barberapp_6.jpeg";
import barberapp_logo_7 from "../img/barberapp_7.jpeg";
import barberapp_logo_8 from "../img/barberapp_8.jpeg";
import barberapp_logo_9 from "../img/barberapp_9.jpeg";
import barberapp_logo_10 from "../img/barberapp_10.jpeg";

import cotizacion_logo_1 from "../img/cotizacion1.png";
import cotizacion_logo_2 from "../img/cotizacion2.png";
import cotizacion_logo_3 from "../img/cotizacion3.png";
import cotizacion_logo_4 from "../img/cotizacion4.png";
import cotizacion_logo_5 from "../img/cotizacion5.png";
import cotizacion_logo_6 from "../img/cotizacion6.png";
import cotizacion_logo_7 from "../img/cotizacion7.png";
import cotizacion_logo_8 from "../img/cotizacion8.png";
import cotizacion_logo_9 from "../img/cotizacion9.png";
import cotizacion_logo_10 from "../img/cotizacion10.png";
import cotizacion_logo_11 from "../img/cotizacion11.png";
import cotizacion_logo_12 from "../img/cotizacion12.png";

import paginataller_logo_1 from "../img/paginataller.png";

import social_logo_1 from "../img/social_1.png";
import social_logo_2 from "../img/social_2.png";
import social_logo_3 from "../img/social_3.png";

import recuerdame_logo_1 from "../img/recuerdame_1.png";
import recuerdame_logo_2 from "../img/recuerdame_2.png";
import recuerdame_logo_3 from "../img/recuerdame_3.png";
import myportfolio from "../img/portfolio_1.png";
import myportfolio2 from "../img/portfolio_2.png";

export const proyectsData = [
  {
    id: "1",
    name: "Sistema de cotización",
    description:
      "Practicas profesionales realizado con Cesar Romero, para el negocio Taller El Marro.",
    main_photo: cotizacion_logo,
    technologies: [
      "Node Js con Express",
      "Postgresql",
      "React Js",
      "Sequelize",
    ],
    github_link: "https://github.com/guzmanrafael/taller-el-marro-backend",
    link: false,
    photos: [
      {
        original: cotizacion_logo_1,
      },
      {
        original: cotizacion_logo_2,
      },
      {
        original: cotizacion_logo_3,
      },
      {
        original: cotizacion_logo_4,
      },
      {
        original: cotizacion_logo_5,
      },
      {
        original: cotizacion_logo_6,
      },
      {
        original: cotizacion_logo_7,
      },
      {
        original: cotizacion_logo_8,
      },
      {
        original: cotizacion_logo_9,
      },
      {
        original: cotizacion_logo_10,
      },
      {
        original: cotizacion_logo_11,
      },
      {
        original: cotizacion_logo_12,
      },
    ],
    type: "web",
  },
  {
    id: "2",
    name: "Página Taller El Marro",
    description:
      "Practicas profesionales realizado con Cesar Romero, para el negocio Taller El Marro.",
    main_photo: taller_logo,
    technologies: ["React Js"],
    github_link: false,
    link: "https://tallerelmarro.netlify.app/",
    photos: [
      {
        original: paginataller_logo_1,
      },
    ],
    type: "web",
  },
  {
    id: "3",
    name: "Barber Chein Web",
    description:
      "Una Aplicación Web de administración de la barbería Barber Chein",
    main_photo: barberweb_logo,
    technologies: ["React Js", "Firebase", "Tailwind css"],
    github_link: false,
    link: false,
    photos: [
      {
        original: barberweb_logo_1,
      },
      {
        original: barberweb_logo_2,
      },
      {
        original: barberweb_logo_3,
      },
      {
        original: barberweb_logo_4,
      },
      {
        original: barberweb_logo_5,
      },
      {
        original: barberweb_logo_6,
      },
      {
        original: barberweb_logo_7,
      },
    ],
    type: "web",
  },
  {
    id: "4",
    name: "Barber Chein App",
    description:
      "Una Aplicación Móvil para los clientes de la barbería Barber Chein, en el cual pueden agendar citas.",
    main_photo: barberapp_logo,
    technologies: ["React Native", "Firebase"],
    github_link: false,
    link: false,
    photos: [
      {
        original: barberapp_logo_1,
      },
      {
        original: barberapp_logo_2,
      },
      {
        original: barberapp_logo_3,
      },
      {
        original: barberapp_logo_4,
      },
      {
        original: barberapp_logo_5,
      },
      {
        original: barberapp_logo_6,
      },
      {
        original: barberapp_logo_7,
      },
      {
        original: barberapp_logo_8,
      },
      {
        original: barberapp_logo_9,
      },
      {
        original: barberapp_logo_10,
      },
    ],
    type: "mobile",
  },
  {
    id: "5",
    name: "Rafael Guzmán Portafolio",
    description:
      "Es un sitio web donde puedes encontrar proyectos de mi persona",
    main_photo: myportfolio2,
    technologies: ["React Js", "Material Ui"],
    github_link: "https://github.com/guzmanrafael/my-portfolio",
    link: "https://rafaelguzman.netlify.app/",
    photos: [
      {
        original: myportfolio,
      },
    ],
    type: "web",
  },
  {
    id: "6",
    name: "Social-Rif",
    description:
      "Proyecto escolar con mis compañeros Ruben Velazquez, Cesar Romero y yo Rafael Guzmán. Es una red social para subir publicaciones agregando una imagen, y reaccionar a publicaciones de otros usuarios.",
    main_photo: social_logo,
    technologies: ["Node Js", "Express", "MongoDB", "React Js", "Material Ui"],
    github_link: "https://github.com/guzmanrafael/social-app",
    link: "https://socia-rif.herokuapp.com/",
    photos: [
      {
        original: social_logo_1,
      },
      {
        original: social_logo_2,
      },
      {
        original: social_logo_3,
      },
    ],
    type: "web",
  },
  {
    id: "7",
    name: "Recuérdame",
    description:
      "Proyecto escolar con mis compañeros Ruben Velazquez, Cesar Romero, Damian Bojorquez y yo Rafael Guzmán. Es Una Aplicación Web para administrar notas.",
    main_photo: recuerdame_logo,
    technologies: ["React Js", "Firebase", "Material Ui"],
    github_link: "https://github.com/guzmanrafael/note-app",
    link: "https://react-app-cursos-d6169.web.app/",
    photos: [
      {
        original: recuerdame_logo_1,
      },
      {
        original: recuerdame_logo_2,
      },
      {
        original: recuerdame_logo_3,
      },
    ],
    type: "web",
  },
];
