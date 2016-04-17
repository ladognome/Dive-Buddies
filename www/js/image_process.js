function IMAGE(imageDoc)
{
    var imageHTML = "";
    $.ajax
    ({
        url : imageDoc,
        async: false,
        success : function(result){
            var imageURL = $(result).filter("img").first()[0];
            if (imageURL !== undefined && imageURL.hasAttribute("src")){
                console.log(imageURL.src);
                imageHTML = "<img src=\""+imageURL.src+"\" width=\"150\"></img>";
            }
            console.log("IMAGE HTML: "+imageHTML);   
        }
    });
    return imageHTML;
}

function wiki(word) {
    var response = "";
    var imageHTML = null;
    word = word.toLowerCase();
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&prop=text&page=" + word,
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success : function(data, textStatus, jqXHR){
            if (data !== undefined){
                if (data.parse !== undefined){
                    var markup = data.parse.text["*"];
                    var blurb = $('<div></div>').html(markup);
                    var imageURL = $(blurb[0]).find('img')[0];
                    //console.log(imageURL);
                    if (imageURL !== undefined && imageURL.hasAttribute("src")){
                        console.log(imageURL.src);
                        imageHTML = "<img src=\""+imageURL.src+"\" width=\"150\"></img>";
                    }
                    console.log("IMAGE HTML: "+imageHTML);
                    response = imageHTML;
                }
            }
        },
        error: function (errorMessage) {
        }

    });
    return response;
}