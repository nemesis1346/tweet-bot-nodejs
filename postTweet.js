var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
// RETWEET BOT ==========================
//TODO: MAKE BOT TO RESPOND MESSAGES AUTOMATICALLY
//These functions are to retrieve the most popular twitts
var hashtags = ['#art',
    '#music',
    '#jazz',
    "#rock",
    '#spirit',
    '#chaman',
    '#santana',
    '#kichwa',
    '#ecuador',
    '#firstnations',
    '#indigenous',
    "#latin",
    "#diversidad",
    "#peace",
    "#elder",
    "#grandma",
    "#emprendedor",
    "#negocio",
    "#entrepreneur",
    "#startup",
    "#social",
    "#non-profit",
    "#blues",
    "#R&B",
    "#congress",
    "#concert",
    "#concerto",
    "#otavalo",
    "#mywaytrip",
    "#runa",
    "#hiphop"];
//MUT COMBINE THESE TWITTS WITH THE ONES THAT I RETRIEVED

//-----------------------------------------------------------------------------------
//This section is to post custom tags retrieved from the instructions above
//ARRAY of MyWay Trip
var dataTwitts = [
    {
        "status": "https://www.youtube.com/watch?v=5PpbDx-MieY",
        "title": "PAYA MAMA VIDEO ingles",
        "description": "This production was an attempts to show the most human side of our ancestors."
    },
    {
        "status": "https://www.youtube.com/watch?v=5PpbDx-MieY",
        "title": "PAYA MAMA VIDEO espanol",
        "description": "Este trabajo es un esfuerzo por mostrar el lado más humano de nuestros taytas y mamas."
    },
    {
        "status": "https://www.youtube.com/watch?v=KBJ3C50Ew-g",
        "title": "emprendimiento ingles",
        "description": "This is a small documentary about MyWay Trip music groups and several other artists and enterpreneurs."
    },
    {
        "status": "https://www.youtube.com/watch?v=KBJ3C50Ew-g",
        "title": "emprendimiento espanol",
        "description": "Pequeño documental sobre varios emprendimientos de #Otavaleños en varias instancias sociales, inluyendo la banda MyWay Trip."
    },
    {
        "status": "https://www.youtube.com/watch?v=KuxiW9H6ueo",
        "title": "yana yurak ingles",
        "description": "The artistic team was #AmadoMaigua and #AlejandraLema. We are very thankful in working with great musicians."
    },
    {
        "status": "https://www.youtube.com/watch?v=KuxiW9H6ueo",
        "title": "yana yurak espanol",
        "description": "Primer Sencillo y video clip del grupo musical #MyWayTrip. Este concepto fue nuestro primero intento de mostrar algo diferente."
    },
    {
        "status": "https://www.youtube.com/watch?v=xSru2GptCLs",
        "title": "concierto asamblea general ingles",
        "description": "Thanks to the #PlataformSonica program for trusting in our work and giving us the permission to make use of the #NationalCongress of Ecuador to represent our first album #YanaYurak."
    },
    {
        "status": "https://www.youtube.com/watch?v=xSru2GptCLs",
        "title": "concierto asamblea general espanol",
        "description": "Gracias al programa Plataforma Sónica por confiar en nuestro trabajo y dejarnos hacer uso del espacio de la Asamblea Nacional del Ecuador para presentar nuestro primer album #YanaYurak."
    },
    {
        "status": "https://www.youtube.com/watch?v=h5QaIYngEjU",
        "title": "desesperanza ingles",
        "description": "In this project we try to evoque the sounds of the #andean #nostalgie from another perspective, from the #RUNAs, human beings that grow up in the #Andean #Region."
    },
    {
        "status": "https://www.youtube.com/watch?v=h5QaIYngEjU",
        "title": "desesperanza general espanol",
        "description": "En este proyecto tratamos de evocar los sonidos de la regiòn andina. la nostalgia desde otra perspectiva, de los RUNAs, seres humanos que crecieron en la regiòn andina."
    },
    {
        "status": "https://www.youtube.com/watch?v=v7ValD50B3A",
        "title": "sacha espanol",
        "description": "Les presentamos #Sacha. Un tema que evoca los sonidos de la nostalgia de lo salvaje, de la nostalgia #kichwa, de historias y personajes que se han perdido en los tiempos en la tradición oral."
    },
    {
        "status": "https://www.youtube.com/watch?v=iuoRuSuy0pY&t=5s",
        "title": "yana yurak live espanol",
        "description": "First live album Yana Yurak. With this production we are honoring the abstract art with an indigenous feeling."
    },
    {
        "status": "https://www.youtube.com/watch?v=iuoRuSuy0pY&t=5s",
        "title": "yanda yurak espanol",
        "description": "Primer album en vivo Yana Yurak, el título de nuestro primer trabajo discográfico. Esta producción musical es un homenaje al arte abstracto con una nostalgia de la region andina."
    },
    {
        "status": "https://www.youtube.com/watch?v=i9w7Cb1fY-8",
        "title": "concierto soberanos live espanol",
        "description": "MyWayTrip fest SBRNS en Vivo Machana Lounge-Otavalo."
    },
    {
        "status": "https://www.youtube.com/watch?v=SYuglizZjf4",
        "title": "yanda yurak english",
        "description": "A Production of MyWay Trip featuring #SBRNS. A single with a social message. SBRNS is a #HipHop Band that criticize the status quo of the system by singing rap in native language #kichwa."
    },
    {
        "status": "https://www.youtube.com/watch?v=SYuglizZjf4",
        "title": "yanda yurak espanol",
        "description": "Una producción de MyWay Trip en conjunto con SBRNS. SBRNS es un grupo de Hip Hop que critica el status quo del sistema cantando rap en el idioma kichwa."
    },
    {
        "status": "https://www.youtube.com/watch?v=5xOLLWQxjes",
        "title": "transfiguracion english",
        "description": "Transfiguration is our second single where we tried to project an intense work of composition and audiovisual production."
    },
    {
        "status": "https://www.youtube.com/watch?v=5xOLLWQxjes",
        "title": "transfiguracion espanol",
        "description": "Transfiguración es nuestro segundo sencillo en donde proyectamos un intenso trabajo de composición y producción audiovisual. "
    },
    {
        "status": "https://www.youtube.com/watch?v=zPIoG392Fws",
        "title": "fandango jatun rumi english",
        "description": "This is one of our first compositions. Was recorded in #Jatum #Rumi. According with some #Kichwa legends, this stone has several origins."
    },
    {
        "status": "https://www.youtube.com/watch?v=zPIoG392Fws",
        "title": "fandango jatun rumi espanol",
        "description": "Este es uno de nuestras primeras composiciones. Se grabo en Jatum Rumi, segun leyendas kichwas esta piedra tienes muchos origenes."
    },
    {
        "status": "https://www.youtube.com/watch?v=GM7aW-aeLyY",
        "title": "abdul reggae  espanol",
        "description": "Reggae al estilo Abdul"
    },
    {
        "status": "https://www.youtube.com/watch?v=F1GiTA8wvxc",
        "title": "jam",
        "description": "blues menor, nuestros inicios."
    },
    {
        "status": "https://open.spotify.com/album/6AfSoetp1twvTFMtcQnUC3",
        "title": "colores single spotify"
    },
    {
        "status": "https://open.spotify.com/track/5iWs0tpho5CzjmpBxXRJtc",
        "title": "desesperanza single spotify"
    },
    {
        "status": "https://open.spotify.com/album/2LFjuf1drWsFY8x94Lp14H",
        "title": "sacha single spotify"
    },
    {
        "status": "https://open.spotify.com/album/6Fcw69tvhPlkEMWfRjEqRY",
        "title": "reject single spotify"
    },
    {
        "status": "https://open.spotify.com/album/198DKG4ScQYAWydQKATJfa",
        "title": "yana yurak single spotify"
    },
    {
        "status": "https://open.spotify.com/track/7d1UTHt8vSbeSBzjT8GSbY",
        "title": "fandango album spotify"
    },
    {
        "status": "https://open.spotify.com/track/4eupRmV8enAj7v7IzGEHgd",
        "title": "sacha album spotify"
    },
    {
        "status": "https://open.spotify.com/track/0a80vrffJwb1hr1GcTitLV",
        "title": "under the moon potify"
    },
    {
        "status": "https://open.spotify.com/track/0a80vrffJwb1hr1GcTitLV",
        "title": "desesperanza album potify"
    },
    {
        "status": "https://open.spotify.com/track/4lDWM0aXfjL1hKa74MtIy0",
        "title": "colores album potify"
    },
    {
        "status": "https://open.spotify.com/track/5ZjqGigLIIUuyfk7OPPS7F",
        "title": "yana yurak album potify"
    },
    {
        "status": "https://open.spotify.com/track/1RsKN2jveJR55QokFzJlkb",
        "title": "tranasfiguracion album potify"
    },
    {
        "status": "https://www.facebook.com/mywaytripzz/",
        "title": "myway trip album potify"
    }
];

function getHashTags(inputText) {
    var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    var matches = [];
    var match;

    while ((match = regex.exec(inputText))) {
        matches.push(match[1]);
    }

    return matches;
}
var postTwitt = function () {

    var status = hashtags[Math.floor(Math.random() * hashtags.length)];
    console.log('STATUS');
    console.log(status);
    var params = {
        q: status,
        result_type: 'recent',
        lang: 'en'
    }

    Twitter.get('search/tweets', params, function (err, data) {
        // if there no errors
        if (!err) {
            console.log(data);
            // grab ID of tweet to retweet
            if (data.statuses.length > 0) {

                // extract information of the twitt
                console.log(data.statuses[0]);
                //TODO: CUSTOMIZE THE STATUS 
                //POST 
                var textDataList = [];
                var hasttagsDataList=[];
                data.statuses.forEach(element => {
                    textDataList.push(element.text);
                });
                console.log(textDataList);
                textDataList.forEach(element => {
                    var currentListHashtags=getHashTags(textDataList);
                    console.log(currentListHashtags);
                });
                // var status = dataTwitts[Math.floor(Math.random() * hashtags.length)];
                // console.log('STATUS');
                // console.log(status);
                // var params = {
                //     'status': status.status
                // }
                // Twitter.post('statuses/update', params, function (err, response) {
                //     if (response) {
                //         console.log(response);
                //         console.log('Posted!!!');
                //     }
                //     // if there was an error while tweeting
                //     if (err) {
                //         console.log(err);
                //         console.log('Something went wrong while Posting... Duplication maybe...');
                //     }
                // });

            } else {
                retweet();
                console.log('Twitt not found');
            }
        }
        // if unable to Search a tweet
        else {
            console.log('Something went wrong while SEARCHING...');
        }
    });
}

postTwitt();
setInterval(postTwitt, 2100000);