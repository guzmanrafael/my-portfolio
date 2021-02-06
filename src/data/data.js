import social_logo from "../img/main_social.png";
import recuerdame_logo from "../img/main_recuerdame.png";
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
        name: "Barber Chein Web",
        description: "Una Aplicación Web de administración de la barbería Barber Chein",
        main_photo: barberweb_logo,
        technologies: [
            "React Js",
            "Firebase",
            "Tailwind css"
        ],
        github_link: false,
        link: false,
        photos:
            [
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
                }
            ],
        type: "web"
    },
    {
        id: "2",
        name: "Barber Chein App",
        description: "Una Aplicación Móvil para los clientes de la barbería Barber Chein, en el cual pueden agendar citas.",
        main_photo: barberapp_logo,
        technologies: [
            "React Native",
            "Firebase",
        ],
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
            }
        ],
        type: "mobile"
    },
    {
        id: "3",
        name: "Rafael Guzmán Portafolio",
        description: "Es un sitio web donde puedes encontrar proyectos de mi persona",
        main_photo: myportfolio2,
        technologies: [
            "React Js",
            "Material Ui",
        ],
        github_link: "",
        link: "https://rafaelguzman.netlify.app/",
        photos: [
            {
                original: myportfolio,
            },
        ],
        type: "web"
    },
    {
        id: "4",
        name: "Social-Rif",
        description: "Proyecto escolar con mis compañeros Ruben Velazquez, Cesar Romero y yo Rafael Guzmán. Es una red social para subir publicaciones agregando una imagen, y reaccionar a publicaciones de otros usuarios.",
        main_photo: social_logo,
        technologies: [
            "Node Js",
            "Express",
            "MongoDB",
            "React Js",
            "Material Ui"
        ],
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
                original: social_logo_3
            }
        ],
        type: "web"
    },
    {
        id: "5",
        name: "Recuérdame",
        description: "Proyecto escolar con mis compañeros Ruben Velazquez, Cesar Romero, Damian Bojorquez y yo Rafael Guzmán. Es Una Aplicación Web para administrar notas.",
        main_photo: recuerdame_logo,
        technologies: [
            "React Js",
            "Firebase",
            "Material Ui"
        ],
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
                original: recuerdame_logo_3
            }
        ],
        type: "web"
    }
]
