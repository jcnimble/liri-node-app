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
  *Clone repo
  *Run npm install
  *At command prompt run node liri.js <pass in an instruction from above>

# Instructions
1) node liri.js my-tweets: This will show your last 20 tweets and when they were created at in your terminal/bash window. 
2) node liri.js spotify


## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
