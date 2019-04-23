# LIRI Bot

LIRI is a command line node app that takes in parameters and gives back data. Similar to iPhone's SIRI, a Speech Interpretation and Recognition Interface -- LIRI is a Language Interpretation and Recognition Interface.  Using LIRI, one can learn:

   * When a musical artist is performing in concert  `concert-this`

   * Details of a Song `spotify-this-song`

   * Key information on a Movie  `movie-this`
   
Additionally, LIRI demonstrates the power of the Node.js File System Module reading a text file and triggering a data response. `do-what-it-says`. As well as logging these responses to a seperate text file.

## Getting Started

To retrieve the data that will power this app, requests are sent using the `axios` package with the Bands in Town, Spotify and OMDB APIs. Additionally, these Node packages are key to the apps success.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * Axios grabs data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

### Prerequisites

Additionally, API keys are needed for Spotify, Bands In Town Artists Events API and OMDP API.  Spotify credentials can be acquired by visiting this link: <https://developer.spotify.com/my-applications/#!/>. This will generate the necessary  **client id** and **client secret**.  The API keys for Bands In Town Artists Events API and OMDP API can be acquired through classroom connections.

### Deployment
* Clone repo
* Run npm install
* At command prompt run 'node liri.js' and instruction below

# Instructions
1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song <song name here>`

   * This will search the Spotify API for a song and the following information about the songs that meet the search criteria will appear in the terminal:

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided, the program will default to "The Sign" by Ace of Base.

3. `node liri.js movie-this <movie name here>`

   * This will search the OMDB API for a movie and the following information about the movie meeting the search criteria will appear in the terminal:
   
     * Title of the movie
     * Year the movie came out
     * IMDB Rating of the movie
     * Rotten Tomatoes Rating of the movie
     * IMDB Rating of the movie
     * Country where the movie was produced
     * Language of the movie
     * Plot of the movie
     * Country where the movie was produced
     * Actors in the movie

   * If no movie is provided, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * The text in random.txt can be edited to prompt others commands like movie-this and concert-this.

## Built With

* [JavaScript]


## Authors

* **Jennifer Ginelli** - *Initial work* - [jcnimble](https://jcnimble.github.io/)

## Acknowledgments

   * LIRI Tutorial [Watch the Video!](https://www.youtube.com/watch?v=1-k08YfQbec)
   * Bryan esteemed Professor
   * Buzz and Aaron dedicated TAs
