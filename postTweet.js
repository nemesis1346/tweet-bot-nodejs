var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
// RETWEET BOT ==========================

//ARRAY of MyWay Trip
var hashtags=[
    {
        "status":"This production was an attempts to show the most human side of our ancestors, those that really live the culture, that speak our language, and preserve our memories of the past.  https://www.youtube.com/watch?v=5PpbDx-MieY",
        "title":"PAYA MAMA VIDEO ingles"
    },
    {
        "status": "Este trabajo es un esfuerzo por mostrar el lado más humano de nuestros taytas y mamas, aquellos que de verdad viven la cultura. https://www.youtube.com/watch?v=5PpbDx-MieY",
        "title":"PAYA MAMA VIDEO espanol" 
    },
    {
        "status": "This is a small documentary about MyWay Trip music groups and several other artists and enterpreneurs that feed the colours of the art in Otavalo-Ecuador. https://www.youtube.com/watch?v=KBJ3C50Ew-g",
        "title":"emprendimiento ingles" 
    },
    {
        "status": "Pequeño documental sobre varios emprendimientos de #Otavaleños en varias instancias sociales, inluyendo la banda MyWay Trip. https://www.youtube.com/watch?v=KBJ3C50Ew-g",
        "title":"emprendimiento espanol" 
    },
    {
        "status": " The artistic team was #AmadoMaigua and #AlejandraLema. We are very thankful in working with great musicians such as them and we are happy with the results. https://www.youtube.com/watch?v=KuxiW9H6ueo",
        "title":"yana yurak ingles" 
    },
    {
        "status": "Primer Sencillo y video clip del grupo musical #MyWayTrip. Este concepto fue nuestro primero intento de mostrar algo diferente. https://www.youtube.com/watch?v=KuxiW9H6ueo",
        "title":"yana yurak espanol" 
    },
    {
        "status": "Thanks to the #PlataformSonica program for trusting in our work and giving us the permission to make use of the #NationalCongress of Ecuador to represent our first album #YanaYurak. https://www.youtube.com/watch?v=xSru2GptCLs",
        "title":"concierto asamblea general ingles" 
    },
    {
        "status": "Gracias al programa Plataforma Sónica por confiar en nuestro trabajo y dejarnos hacer uso del espacio de la Asamblea Nacional del Ecuador para presentar nuestro primer album Yana Yurak. . https://www.youtube.com/watch?v=xSru2GptCLs",
        "title":"concierto asamblea general espanol" 
    },
    {
        "status": "In this project we try to evoque the sounds of the #andean #nostalgie from another perspective, from the #RUNAs, human beings that grow up in the #Andean #Region. https://www.youtube.com/watch?v=h5QaIYngEjU",
        "title":"desesperanza ingles" 
    },
    {
        "status": "En este proyecto tratamos de evocar los sonidos de la regiòn andina. la nostalgia desde otra perspectiva, de los RUNAs, seres humanos que crecieron en la regiòn andina . https://www.youtube.com/watch?v=h5QaIYngEjU",
        "title":"desesperanza general espanol" 
    },
    {
        "status": "Les presentamos #Sacha. Un tema que evoca los sonidos de la nostalgia de lo salvaje, de la nostalgia #kichwa, de historias y personajes que se han perdido en los tiempos en la tradición oral.  https://www.youtube.com/watch?v=v7ValD50B3A",
        "title":"sacha espanol" 
    },
    {
        "status": "First live album Yana Yurak. With this production we are honoring the abstract art with an indigenous feeling. https://www.youtube.com/watch?v=iuoRuSuy0pY&t=5s",
        "title":"yana yurak live espanol" 
    },
    {
        "status": "Primer album en vivo Yana Yurak, el título de nuestro primer trabajo discográfico. Esta producción musical es un homenaje al arte abstracto con una nostalgia de la region andina. https://www.youtube.com/watch?v=iuoRuSuy0pY&t=5s",
        "title":"yanda yurak espanol" 
    },
    {
        "status": "MyWayTrip fest SBRNS en Vivo Machana Lounge-Otavalo. https://www.youtube.com/watch?v=i9w7Cb1fY-8",
        "title":"concierto soberanos live espanol" 
    },
    {
        "status": "A Production of MyWay Trip featuring #SBRNS. A single with a social message. SBRNS is a #HipHop Band that criticize the status quo of the system by singing rap in native language #kichwa. https://www.youtube.com/watch?v=SYuglizZjf4",
        "title":"yanda yurak english" 
    },
    {
        "status": "Una producción de MyWay Trip en conjunto con SBRNS. SBRNS es un grupo de Hip Hop que critica el status quo del sistema cantando rap en el idioma kichwa.  https://www.youtube.com/watch?v=SYuglizZjf4",
        "title":"yanda yurak espanol" 
    },
    {
        "status": "Transfiguration is our second single where we tried to project an intense work of composition and audiovisual production.  https://www.youtube.com/watch?v=5xOLLWQxjes",
        "title":"transfiguracion english" 
    },
    {
        "status": "Transfiguración es nuestro segundo sencillo en donde proyectamos un intenso trabajo de composición y producción audiovisual.  https://www.youtube.com/watch?v=5xOLLWQxjes",
        "title":"transfiguracion espanol" 
    },
    {
        "status": "This is one of our first compositions. Was recorded in #Jatum #Rumi. According with some #Kichwa legends, this stone has several origins.  https://www.youtube.com/watch?v=zPIoG392Fws",
        "title":"fandango jatun rumi english" 
    },
    {
        "status": "Este es uno de nuestras primeras composiciones. Se grabo en Jatum Rumi, segun leyendas kichwas esta piedra tienes muchos origenes https://www.youtube.com/watch?v=zPIoG392Fws",
        "title":"fandango jatun rumi espanol" 
    },
    {
        "status": "Reggae al estilo Abdul https://www.youtube.com/watch?v=GM7aW-aeLyY",
        "title":"abdul reggae  espanol" 
    },
    {
        "status": "blues menor, nuestros inicios https://www.youtube.com/watch?v=F1GiTA8wvxc",
        "title":"jam" 
    }
];
var postTwitt = function () {
    var params= {
        'status':'This production was an attempts to show the most human side of our ancestors, those that really live the culture, that speak our language, and preserve our memories of the past. https://www.youtube.com/watch?v=5PpbDx-MieY&t=22s'
    }
Twitter.post('statuses/update', params, function (err, response) {
    if (response) {
        console.log('Posted!!!');
    }
    // if there was an error while tweeting
    if (err) {
        console.log('Something went wrong while Posting... Duplication maybe...');
    }
});
}

postTwitt();