var request = require('request');
var async = require('async');
var moment = require('moment');
var fs = require('fs');
var striptags = require('striptags');
const Entities = require('html-entities').AllHtmlEntities;

var api = 'https://fluxit.be/react/wordcamp18/wp-json/wp/v2/';

function getTalks() {
    request(api + 'speakers?per_page=100', function (error, response, body) {
        var speakers = JSON.parse(body);

        request(api + 'talks?per_page=100', function (error, response, body) {
            if (error) console.log(error);
            var talks = JSON.parse(body);

            var formattedData = [];
            async.each(talks, function (talk, callback) {
                /* if (talk.acf.speaker) {
                    var speaker = speakers.find(s => {
                        s.title.rendered === talk.acf.speaker[0].post_title;

                        if (s.title.rendered === talk.acf.speaker[0].post_title) {
                            console.log(talk.acf.speaker[0].post_title);
                        }
                    });
                    console.log(speaker);
                } */

                if (talk.acf.speaker) {
                    var speaker = speakers.find(s => s.title.rendered === talk.acf.speaker[0].post_title);
                    console.log(speaker);
                }

                formattedData.push({
                    "location": talk.acf.type == "Talk" ? talk.acf.location : "",
                    "room": talk.acf.type == "Talk" && talk.acf.location != "ViaVia" ? talk.acf.room : "",
                    "type": talk.acf.type == "Talk" ? "talk" : "break",
                    "speaker": speaker ? speaker.title.rendered : "",
                    //"image": talk.acf.type == "Talk" ? "talk" : "break",
                    "image": speaker ? speaker.acf.speaker_image : "https://2018.antwerp.wordcamp.org/files/2018/01/cropped-wordcamp-antwerp-logo-web.png",
                    "title": formatString(talk.title.rendered),
                    "description": formatString(talk.acf.description),
                    "time": formatTime(talk.acf.start_datetime),
                    "endtime": talk.acf.end_datetime ? formatTime(talk.acf.end_datetime) : "",
                    "duration": talk.acf.end_datetime ? (talk.acf.end_datetime - talk.acf.start_datetime) / 60 : "5",
                    "speakerInfo": speaker ? [
                        {
                            "name": speaker.title.rendered,
                            "bio": formatString(speaker.acf.speaker_description),
                            "twitter": "",
                            "github": "",
                            "company": speaker.acf.organisation_url,
                            "image": speaker.acf.speaker_image
                        }
                    ] : ""
                });

                callback();
            }, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("talks done");
                    const content = JSON.stringify(formattedData);

                    fs.writeFile("./tmp/schedule.json", "{\"schedule\":" + content + "}", 'utf8', function (err) {
                        if (err) {
                            return console.log(err);
                        }

                        console.log("The file was saved!");
                    });
                }
            });
        });
    });
}

function formatTime(timestamp) {
    var parsed = moment.unix(timestamp).add(-1, 'hours');
    return (parsed.format("D/M/YYYY h:m A"));
}

function formatString(text) {
    return striptags(Entities.decode(text));
}

//getTalks();






function formatTalks() {
    request(api + 'talks?per_page=100', function (error, response, body) {
        if (error) console.log(error);
        var talks = JSON.parse(body);

        const kek = talks.map((talk) => {
            if (talk.acf.speaker) {
                var speaker = talk.acf.speaker[0].acf;
                speaker.name = talk.acf.speaker.post_title
            }

            function formatTime(timestamp) {
                var parsed = moment.unix(timestamp).add(-1, 'hours');
                return (parsed.format("D/M/YYYY h:m A"));
            }

            return ({
                "location": talk.acf.type == "Talk" ? talk.acf.location : "",
                "room": talk.acf.type == "Talk" && talk.acf.location != "ViaVia" ? talk.acf.room : "",
                "type": talk.acf.type == "Talk" ? "talk" : "break",
                "speaker": speaker ? speaker.name : "",
                "image": speaker ? speaker.speaker_image : "https://2018.antwerp.wordcamp.org/files/2018/01/cropped-wordcamp-antwerp-logo-web.png",
                "title": talk.name, //formatString()
                "description": talk.acf.description, //formatString()
                "time": formatTime(talk.acf.start_datetime),
                "endtime": talk.acf.end_datetime ? formatTime(talk.acf.end_datetime) : "",
                "duration": talk.acf.end_datetime ? (talk.acf.end_datetime - talk.acf.start_datetime) / 60 : "5",
                "speakerInfo": speaker ? [
                    {
                        "name": speaker.name,
                        "bio": speaker.speaker_description, //formatString()
                        "twitter": "",
                        "github": "",
                        "company": speaker.organisation_url,
                        "image": speaker.speaker_image
                    }
                ] : ""
            });
        });

        console.log(kek);

    });
}

formatTalks();