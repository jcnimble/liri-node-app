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

Additionally, API keys are needed for Spotify, Bands In Town Artists Events API and OMDP API.  Spotify credentials can be acquired by visiting this link: <https://developer.spotify.com/my-applications/#!/>. This will generate the necessary client **client id** and **client secret**.  The API keys for Bands In Town Artists Events API and OMDP API can be acquired through classroom connections.

### Deployment
* Clone repo
* Run npm install
* At command prompt run node liri.js <pass in an instruction>

# Instructions
1) node liri.js concert-this: 


2) node liri.js spotify-this-song:


3) node liri.js movie-this: 


4) node liri.js do-what-it-says:



## Built With

* [JavaScript]


## Authors

* **Jennifer Ginelli** - *Initial work* - [jcnimble](https://github.com/jcnimble/jcnimble.github.io.git)

## Acknowledgments

*LIRI Tutorial [Watch the Video!](https://www.youtube.com/watch?v=1-k08YfQbec)
*Bryan esteemed Professor
*Buzz and Aaron dedicated TAs
