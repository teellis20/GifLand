$(function(){
    getButtons(gifArray, "searchButton","#buttonLand");
})


    var gifArray = ["The Rock", "Macho Man", "Hulk Hogan", "Rey Mysterio", "Booker T", "Ric Flair"];

    function getButtons(gifArray, classToAdd, areaToAdd){
        $(areaToAdd).empty();
        for (var i = 0; i < gifArray.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", gifArray[i]);
            a.text(gifArray[i]);
            $(areaToAdd).append(a);
        }
    }

   

    $(document).on("click",".searchButton", function() {
        $("#gifLand").empty();
        var type = $(this).data("type");
        console.log(type);
        var buttonUrl = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=ezSy7xkZNG8LrRcs8Pgpy2T5PVTc14f6";
        $.ajax({url:buttonUrl,method:'GET'})
    .done(function(response){
        for(var i = 0; i < response.data.length; i++) {
            var searchDiv = $("<div class='search-item'>");
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $("<img>");
            image.attr("src", still);
            image.attr("data-still", still);
            image.attr("data-animated", animated);
            image.attr("data-state", "still");
            image.addClass("searchImage");
            searchDiv.append(image);
            $("#gifLand").append(searchDiv);
            
        }
    });
    });

    $(document).on("click",".searchImage", function(){
        var state = $(this).attr("data-state");
        if (state == "still") {
            $(this).attr("src", $(this).data("animated"));
            $(this).attr("data-state", "animated");
        } else {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
    })

    $("#submit-button").on("click", function(){
        var newSearch = $("input").eq(0).val();
        gifArray.push(newSearch);
        getButtons(gifArray,"searchButton", "#buttonLand");
        return false;
    })

    