// api ezSy7xkZNG8LrRcs8Pgpy2T5PVTc14f6

var searchWord = "shaq";
var urlQuery = "http://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=ezSy7xkZNG8LrRcs8Pgpy2T5PVTc14f6";

$.ajax({url:urlQuery,method:'GET'})
    .done(function(response){
        console.log(response.data[0].embed_url);
        $("#gifLand").html("<img scr=" + response.data[0].embed_url + ">");
    });

   