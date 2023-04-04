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
                    "inicio": "Inicio",
                    "hacemos": "Lo que hacemos",
                    "blog": "Blog",
                    "bolsa": "Bolsa de trabajo",
                    "factor": "ENCUENTRA EL FACTOR ÚNICO"
                },
                // Header
                "header":{
                    "scroll": "Haz scrolling",
                    "creamos": "CREAMOS",
                    "realidades": "REALIDADES ÚNICAS",
                },
                "tolkobot":{
                    "intro": "¡Qué tal, soy el Tolkobot! ¿Cuál es tu nombre?",
                    "respuesta-userName": "Gusto en conocerte {previousValue} ¿En qué te puedo ayudar?",
                },

                //-------------HOME-------------------
                "historia":{
                    "queremos": "Queremos ser parte de tu historia, a través de...",
                },
                "logros":{
                    "meses": "En 96 meses",
                    "materiales": "50k materiales de comunicación",
                    "clientes": '+200 clientes',
                    "campanias": "+500 campañas estratégicas",
                    "paises": "+30 paises",
                    "entrevistas": "Miles de entrevistas"
                },
                // -------------FOOTER---------------
                "footer":{
                    "certificado": "Certificado",
                    "2023": "2023",
                    "contacto": "Contacto",
                    "contactoFacebook": "Facebook",
                    "contactoInstagram": "Instagram",
                    "contactoCorreo": "Correo",
                    "bolsa": "Bolsa de trabajo",
                    "bolsaDiseño": "Diseño",
                    "bolsaProyecto": "Project manager",
                    "bolsaAudiovisual": "Audiovisual",
                    "derechos": "© 2023 TOLKO GROUP. ALL RIGHTS RESERVED. TOLKO and the Logo are registered trademarks of Tolko Group.",
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
                    "inicio": "Home",
                    "hacemos": "What We Do",
                    "blog": "Blog",
                    "bolsa": "Careers",
                },
                "sidebar":{
                    "inicio": "Home",
                    "hacemos": "What We Do",
                    "blog": "Blog",
                    "bolsa": "Careers",
                    "factor": "Find Out the UNIQUE factor"
                },
                // Header
                "header":{
                    "scroll": "Start scrolling",
                    "creamos": "WE CREATE",
                    "realidades": "UNIQUE REALITIES",
                },
                "tolkobot":{
                    "intro": "Whats Up!, I´m the Tolkobot! What´s your name?",
                    "respuesta-userName": "Nice to meet you {previousValue}! How can I help you?",
                },

                //HOME
                "historia":{
                    "queremos": "We wanna to be part of your Story, through...",
                },
                "logros":{
                    "meses": "In 96 months",
                    "materiales": "50k communication materials",
                    "clientes": '+200 customers',
                    "campanias": "+500 strategic cammpaigns",
                    "paises": "+30 countries",
                    "entrevistas": "Thousands of interviews"
                },
                "footer":{
                    "certificado": "Certified",
                    "2023": "2023",
                    "contacto": "Contact",
                    "contactoFacebook": "Facebook",
                    "contactoInstagram": "Instagram",
                    "contactoCorreo": "Mail",
                    "bolsa": "Careers",
                    "bolsaDiseño": "Design",
                    "bolsaProyecto": "Project manager",
                    "bolsaAudiovisual": "Audiovisual",
                    "derechos": "© 2023 TOLKO GROUP. ALL RIGHTS RESERVED. TOLKO and the Logo are registered trademarks of Tolko Group.",
                    "privacidad": "Privacy Police",
                    "accesibilidad": "Accesibility statement"
                },
            }
        }

    }

})