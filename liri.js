//read and set any environment variables with the dotenv package
require("dotenv").config();
//import the keys.js file and stores it in 'keys' variable
var keys = require("./keys.js");
//access to my personal spotify api information
var spotify = new Spotify(keys.spotify);

//-----------------------NPM Access-----------------------------------------------------------------------------------------------------------
//access to the core node packafe to filesystem...for readi/writing files (used here for mainly the Do-What-It-Says portion)
var fs = require("fs");
//include the axios npm package stored within 'axios' variable
var axios = require("axios");
//include the moment npm package stored within 'moment' variable
var moment = require('moment');
//access to my personal spotify api information
var Spotify = require("node-spotify-api");

// ---------------------Bands In Town portion--------------------------------------------------------------------------------------------------
//grabs 'titleArtist' variable within the 3rd node of argument line
var titleArtist = process.argv[2];

//jQuery bandsintown api for the selected title artist
var bandsUrl = "https://rest.bandsintown.com/artists/" + titleArtist + "/events?app_id=codingbootcamp"

//axios get request to 'bandsUrl'
axios.get(bandsUrl).then(
    function(response) {
        var titleVenue = response.data[0].venue.name;
        var locationVenue = response.data[0].venue.city;
        var dateTimeVenue = response.data[0].datetime;
        console.log("Name of Artist: " + titleArtist  + "\nVenue Name: " + titleVenue + "\nVenue Location: "
         + locationVenue  + "\nDate Time: " + moment(dateTimeVenue).format("MM/DD/YYYY"));
    })
    .catch(function(error){
        if (error.response) {
            console.log(error.response.name);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error, request) {
            //'error.request' is an object that comes back with details pertaining to the error that occured in receiving the request
            console.log(error.request);
        }
        else {
            //message the user that something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
            console.log(error.config);
    });


// ----------------OMDb portion-----------------------------------------------------------------------------------------------------------------
//grabs 'titleMovie' variable within the 3rd node of argument line
var titleMovie = process.argv[2];
//'omdbUrl' variable to hold the url link to my OMDb API key & logging the responses to the console
var omdbUrl = "https://www.omdbapi.com/?t=" + titleMovie + "&y=&plot=short&apikey=9e558ee4";

//axios get request to 'omdbUrl'
axios.get(omdbUrl).then (
    function(response) {
        var movieReleaseDate = response.data.Year;
        var movieImdbRating = response.data.imdbRating;
        var movieTomatoesRating = response.data.Ratings[1].Value;
        var movieCountryProduction = response.data.Country;
        var movieLanguage = response.data.Language;
        var moviePlot = response.data.Plot;
        var movieActors = response.data.Actors;

        console.log("Title of the movie: " + titleMovie + "\nYear Movie Released: "
        + movieReleaseDate + "\nIMDB Rating: " + movieImdbRating + 
        "\nRotten Tomatoes Rating: " + movieTomatoesRating + "\nLocation of Movie Production: "
        + movieCountryProduction + "\nLanguage of Movie: " + movieLanguage
        + "\nMovie Plot: " + moviePlot + "\nActors in Movie: " + movieActors);
    })
        .catch(function(error){
            if(error.response){
                console.log(error.response.name);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log("Error", error.message);
            }
            console.log(error.config);
    });


// ------------------Do What It Says portion-------------------------------------------------------------------------------------------------
// The code will store the contents of the reading inside the variable "data" callback function
// line 94 will begin starting to read from the file "random.txt"...'utf8' will construct the text it writes in random.txt as actually letters that we can read/understand
fs.readFile("random.txt", "utf8", function(error, data) {
    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }
      // We will then print the contents of data
    console.log(data);
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
    // We will then re-display the content as an array for later use.
    console.log(dataArr);
});




//------------------Spotify This Song portion------------------------------------------------------------------------------------------------
