/* import moment from 'moment'; */
const Entities = require('html-entities').AllHtmlEntities;

import striptags from 'striptags'
/* import Entities from 'html-entities' */

const transform = response => {
    const formattedData = response.data.map((talk) => {

        /* function formatTime(timestamp) {
            var parsed = moment.unix(timestamp);
            return (parsed.format("D/M/YYYY h:m A"));
        } */

        function formatString(text) {
            return striptags(Entities.decode(text));
        }

        /* console.error(talk.acf); */
        let speaker = ""
        if (talk.acf.speaker) {
            speaker = talk.acf.speaker[0].acf;
            speaker.name = talk.acf.speaker[0].post_title
        }

        return ({
            "location": talk.acf.type == "Talk" ? talk.acf.location : "",
            "room": talk.acf.type == "Talk" && talk.acf.location != "ViaVia" ? talk.acf.room : "",
            "type": talk.acf.type == "Talk" ? "talk" : "break",
            "speaker": speaker ? speaker.name : "",
            "image": speaker ? speaker.speaker_image : "https://2018.antwerp.wordcamp.org/files/2018/01/cropped-wordcamp-antwerp-logo-web.png",
            "title": formatString(talk.title.rendered), //formatString()
            "description": formatString(talk.acf.description), //formatString()
            "time": talk.acf.start_datetime,
            "endtime": talk.acf.end_datetime ? talk.acf.end_datetime : "",
            "duration": talk.acf.end_datetime ? (talk.acf.end_datetime - talk.acf.start_datetime) / 60 : "5",
            "speakerInfo": speaker ? [
                {
                    "name": speaker.name,
                    "bio": formatString(speaker.speaker_description), //formatString()
                    "twitter": "",
                    "github": "",
                    "company": speaker.organisation_url,
                    "image": speaker.speaker_image
                }
            ] : ""
        });
    });

    return ({
        ok: true,
        data: formattedData
    })
}

const responseHandler = { transform }

export default responseHandler