//Libs
//Se importa i18next
import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector'; //Detecta automáticamente el idioma del navegador para que ese idioma sea el peimero que muestra
import {initReactI18next} from 'react-i18next';

//Se inicializa  i18next

i18n
// .use(LanguageDetector)
.use(initReactI18next)
.init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es:{
            translation: {
                //----------------GENERAL-------------------
                // Navbar.
                "toolbar":{
                    "menu": "MENÚ",
                    "espanol": "Español",
                    "ingles": "Inglés",
                },
                "sidetoolbar":{
                    "inicio": "Inicio",
                    "hacemos": "Lo que hacemos",
                    "blog": "Blog",
                    "bolsa": "Bolsa de trabajo",
                },
                "sidebar":{
                    "home": "Home",
                    "historia": "Historia",
                    "blog": "Blog",
                    "clientes": "Clientes",
                    "equipo": "¡Haz equipo con nosotros!"
                },
                // Header
                "header":{
                    "scroll": "Haz scrolling",
                    "creamos": "CREAMOS",
                    "mejores": "MEJORES REALIDADES",
                },

                //-------------HOME-------------------
                "historia":{
                    "queremos": "Queremos ser parte de tu historia, a través de...",
                },
                "logros":{
                    "meses": "En 84 meses",
                    "materiales": "50k materiales de comunicación",
                    "clientes": '200+ clientes',
                    "campanias": "500+ campañas estratégicas",
                    "paises": "30+ paises",
                    "entrevistas": "150+ entrevistas en medios"
                },
                // -------------FOOTER---------------
                "footer":{
                    "amamos": "Amamos la comunicación",
                    "contacto": "Contacto",
                    "contactoFacebook": "Facebook",
                    "contactoInstagram": "Instagram",
                    "contactoCorreo": "Correo",
                    "bolsa": "Bolsa de Trabajo",
                    "bolsaDiseño": "Diseño",
                    "bolsaProyecto": "Project manager",
                    "bolsaAudiovisual": "Audiovisual",
                    "derechos": "© 2022 TOLKO GROUP. ALL RIGHTS RESERVED. TOLKO and the Logo are registered trademarks of Tolko Group.",
                    "privacidad": "Política de privacidad",
                    "accesibilidad": "Declaración de accesibilidad"
                },
            }
        },
        // -------------------------------------------------------------------------------------------------------
        // ------------------------------------------- INGLÉS ----------------------------------------------------
        // -------------------------------------------------------------------------------------------------------

        en:{
            translation: {
                //--------------------GENERAL-----------------
                // Navbar.
                "toolbar":{
                    "menu": "MENU",
                    "espanol": "Spanish",
                    "ingles": "English",
                },
                "sidetoolbar":{
                    "home": "Home",
                    "historia": "Story",
                    "blog": "Blog",
                    "clientes": "Customers",
                },
                "sidebar":{
                    "home": "Home",
                    "historia": "Story",
                    "blog": "Blog",
                    "clientes": "Customers",
                    "equipo": "Make a team with us!"
                },
                // Header
                "header":{
                    "scroll": "Start scrolling",
                    "creamos": "WE MAKE",
                    "mejores": "BETTER REALITIES",
                },

                //HOME
                "historia":{
                    "queremos": "We wanna to be part of your Story, through...",
                },
                "logros":{
                    "meses": "In 84 months",
                    "materiales": "50k communication materials",
                    "clientes": '200+ customers',
                    "campanias": "500+ strategic cammpaigns",
                    "paises": "30+ countries",
                    "entrevistas": "150+ interviews in media"
                },
                "footer":{
                    "amamos": "We love communicating",
                    "contacto": "Contact",
                    "contactoFacebook": "Facebook",
                    "contactoInstagram": "Instagram",
                    "contactoCorreo": "Mail",
                    "bolsa": "Careers",
                    "bolsaDiseño": "Design",
                    "bolsaProyecto": "Project manager",
                    "bolsaAudiovisual": "Audiovisual",
                    "derechos": "© 2022 TOLKO GROUP. ALL RIGHTS RESERVED. TOLKO and the Logo are registered trademarks of Tolko Group.",
                    "privacidad": "Privacy Police",
                    "accesibilidad": "Accesibility statement"
                },
            }
        }

    }

})