var request = require('request');
var async = require('async');
var moment = require('moment');
var fs = require('fs');
var striptags = require('striptags');

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
                    "type": talk.acf.type == "Talk" ? "talk" : "break",
                    "speaker": speaker ? speaker.title.rendered : "",
                    "image": talk.acf.type == "Talk" ? "talk" : "break",
                    "title": talk.title.rendered,
                    "description": talk.acf.description,
                    "time": formatTime(talk.acf.start_datetime),
                    "endtime": talk.acf.end_datetime ? formatTime(talk.acf.end_datetime) : "",
                    "duration": "5",
                    "speakerInfo": speaker ? [
                        {
                            "name": speaker.title.rendered,
                            "bio": speaker.acf.speaker_description,
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

getTalks();