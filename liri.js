require("dotenv").config();

var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
// console.log(spotify);
var fs = require("fs");

//The first will be the action
var action = process.argv[2];

//For multiple word arguments: 
// Store all of the arguments in an array
var nodeArgs = process.argv;

//Empty variable for holding user input(movie or song)
var input = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        input = input + "+" + nodeArgs[i];
    }
    else {
        input += nodeArgs[i];
    }
    console.log(input);
}

//The switch-case will direct which function gets run.
switch (action) {
    case "concert-this":
        concertThis();
        break;


    case "spotify-this-song":
        if (!input === "") {
            spotifyThisSong(input);
        } else {
            // If no song provided, default to "The Sign" by Ace of Base.
            spotifyTheSign();
        }
        break;

    case "movie-this":
        if (!input === "") {
            movieThis(input);
        } else {
            // If no movie provided, default to "Mr. Nobody"
            movieThis("Mr. Nobody");
        }
        break;


    case "do-what-it-says":
        doWhatItSays();
        break;
}

//if "concert-this" function is called...
function concertThis() {

    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

    axios
        .get(queryUrl)
        .then(function (data) {

 console.log(data);
         
        })

        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

/*     Name of the venue
    Venue location
    Date of the Event (use moment to format this as "MM/DD/YYYY") */


//spotify-this-song   
var getArtistNames = function (artist) {
    return artist.name
}

function spotifyThisSong(song) {
    spotify
        .search({ type: 'track', query: song })
        .then(function (data) {
            var songs = data.tracks.items;
            for (var i = 0; i < songs.length; i++) {
                console.log(i + 1);
                console.log('Artist(s):' + songs[i].artists.map(getArtistNames));
                console.log('Song name:' + songs[i].name);
                console.log('Preview song:' + songs[i].preview_url);
                console.log('Album:' + songs[i].album.name);
                console.log('==================================================');
            }
        })
        .catch(function (err) {
            console.log(err);
        });

};
//Put this is so the exact song "The Sign" by Ace of Base would show and only that entry
function spotifyTheSign() {
    spotify
        .search({ type: 'track', query: 'The sign ace of base', limit: 1 })
        .then(function (data) {
            var songs = data.tracks.items;
            for (var i = 0; i < songs.length; i++) {
                console.log('Artist(s):' + songs[i].artists.map(getArtistNames));
                console.log('Song name:' + songs[i].name);
                console.log('Preview song:' + songs[i].preview_url);
                console.log('Album:' + songs[i].album.name);
                console.log('==================================================');
            }
        })
        .catch(function (err) {
            console.log(err);
        });

};

//movie-this
function movieThis(movie) {

    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios
        .get(queryUrl)
        .then(function (response) {

            console.log('Title: ' + response.data.Title);
            console.log('Year: ' + response.data.Year);
            console.log('IMDB Rating: ' + response.data.imdbRating);
            console.log('Rotten Tomato Rating: ' + response.data.Ratings[1].Value);
            console.log('Country: ' + response.data.Country);
            console.log('Language: ' + response.data.Language);
            console.log('Plot: ' + response.data.Plot);
            console.log('Actors: ' + response.data.Actors);

        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

}

//do-what-it-says
function doWhatItSays() {
    // This block of code will read from the "random.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        // console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        if (dataArr.length == 2) {
            (dataArr[0], dataArr[1]);
            dataArr[0] = action;
            dataArr[1] = input
        }
        else if (dataArr.length == 1) {
            (dataArr[0]);
            dataArr[0] = action;
        }

    });
}