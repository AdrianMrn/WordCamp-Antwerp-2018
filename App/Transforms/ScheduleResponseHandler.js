import moment from 'moment';

const transform = response => {
    const formattedData = response.data.map((talk) => {

        function formatTime(timestamp) {
            var parsed = moment.unix(timestamp);
            return (parsed.format("D/M/YYYY h:m A"));
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
            "title": talk.title.rendered, //formatString()
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

    return ({
        ok: true,
        data: formattedData
    })
}

const responseHandler = { transform }

export default responseHandler