//read and set any environment variables with the dotenv package
require("dotenv").config();

//import the keys.js file and stores it in 'keys' variable
var keys = require("./keys.js");
//access to my personal spotify api information
var Spotify = require("node-spotify-api");
//access to my personal spotify api information
var spotify = new Spotify(keys.spotify);
//access to the filesystem
var fs = require("fs");

//include the axios npm package stored within 'axios' variable
var axios = require("axios");
//include the moment npm package stored within 'moment' variable
var moment = require('moment');


//grabs 'titleArtist' variable within the 3rd node of argument line
var titleArtist = process.argv[2];

//jQuery bandsintown api for the selected title artist
var queryUrl = "https://rest.bandsintown.com/artists/" + titleArtist + "/events?app_id=codingbootcamp"

//axios get request to 'queryUrl'
axios.get(queryUrl).then(
    function(response) {
        var titleVenue = response.data[0].name;
        var locationVenue = response.data[0].city;
        var dateTimeVenue = response.data[0].datetime;
        console.log("Name of Artist: " + titleArtist  + "\nVenue Name: " + titleVenue + "\nVenue Location: "
         + locationVenue  + "Date Time: " + dateTimeVenue);
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