
/*

In geo-code.js, replace the getImages() function with this function to include toxicity.
The return type has changed to a list containing the link and toxic value(true or false).
Earlier it simply returned the link, which is now returnList[0].

*/
console.log("toxic js loads");
//doesn't work
//$(document).on("click", "#toxictest", function(evt)
//    {
//    var id = "212303";
//    //var toxicSignURL = "http://i.imgur.com/gEieG9S.png";
//    var list = getToxic(id);
//    console.log(list[1]);
//    if (list[1]==true){
//    add "<img width=\"75px\" height=\"75px\" src=\"http://i.imgur.com/gEieG9S.png\"></img>" to filler HTML
//    }
//});



function getToxic(id){
    var link = "";
    var toxicList = ["anemone","toxic","venom","venomous","poisonous","poison","danger","dangerous","sting"];
    var description = "";
    var toxicCount = 0;
    var toxic=false;
    var startPoint=0;
    $.ajax({
             type: "GET",

        url:"http://eol.org/api/pages/1.0.json?batch=false&id="+id+"&images_per_page=2&images_page=1&videos_per_page=0&videos_page=1&sounds_per_page=0&sounds_page=1&maps_per_page=0&maps_page=1&texts_per_page=2&texts_page=1&iucn=false&subjects=overview&licenses=all&details=true&common_names=true&synonyms=true&references=true&taxonomy=true&vetted=0&cache_ttl=&language=en",
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             
             success: function(imgdata){
                 console.log(id);

              console.log("pages api call success");
            console.log(imgdata["dataObjects"][2]["eolMediaURL"]);
                
            link += imgdata["dataObjects"][2]["eolMediaURL"];
            description += imgdata["dataObjects"][0]["description"];
                 for(var i =0;i<toxicList.length;i++){
                     startPoint = 0;
                     while(startPoint<description.length && startPoint!=-1){
                     if(description.indexOf(toxicList[i],startPoint)>=startPoint){
                         startPoint = description.indexOf(toxicList[i]);
                         toxicCount+=1;
                     }
                 }
            }
            if(toxicCount>=3){
                 toxic=true;
            }
            console.log(link);
            console.log(toxicCount);
            console.log(toxic);
            },
        error: function (errorMessage) {
        console.log("error");
            console.log(id);
        console.log(errorMessage);
    
        }
        var returnList=[link,toxic];
        return returnList;
    
});
}