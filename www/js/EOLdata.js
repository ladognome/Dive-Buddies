
var eolDataFile = (function(){

    function getSpeciesID(species){
        //var species = "Xyrichtys martinicensis";
        var id=0;
        $.ajax({
                     type: "GET",
                     url:"http://eol.org/api/search/1.0.json?q="+species+"&page=1&exact=false&filter_by_taxon_concept_id=&filter_by_hierarchy_entry_id=&filter_by_string=&cache_ttl=",
                     contentType: "application/json; charset=utf-8",
                     dataType: "json",
                     async: false,
                     success: function(data){

                         id = data["results"][0]["id"];
                         console.log(id);
                     }

        });
        return id;
    }

    function getImageInfo(id){
        var link = "";
        var description="";
        var commonName = "";
        var scientificName = "";
        var toxicList =["anemone","toxic","venom","venomous","poisonous","poison","danger","dangerous","sting"];
        var toxicCount = 0;
        var toxic=false;
        var startPoint=0;
        $.ajax({
                 type: "GET",

             url:"http://eol.org/api/pages/1.0.json?batch=false&id="+id+"&images_per_page=2&images_page=1&videos_per_page=0&videos_page=1&sounds_per_page=0&sounds_page=1&maps_per_page=0&maps_page=1&texts_per_page=2&texts_page=1&iucn=false&subjects=overview&licenses=all&details=true&common_names=true&synonyms=true&references=true&taxonomy=true&vetted=0&cache_ttl=&language=en",
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             async: false,
             success: function(imgdata){
                console.log(id);
                if (imgdata["dataObjects"][2] !== undefined){
                    link += imgdata["dataObjects"][2]["eolMediaURL"];
                    if (link === undefined){
                    link = "";
                    }
                    description += imgdata["dataObjects"][0]["description"];
                    scientificName += imgdata["scientificName"];
                    for (var i in imgdata["vernacularNames"])
                    {
                         if((imgdata["vernacularNames"][i]["language"]==="en")&& (imgdata["vernacularNames"][i]["eol_preferred"]===true)){
                           commonName +=  imgdata["vernacularNames"][i]["vernacularName"];
                         }
                    }
                    commonName=commonName.charAt(0).toUpperCase() + commonName.slice(1);
                    document.getElementById("fishimg").innerHTML ="<img src ="+link+">";

                    document.getElementById("SpeciesName").innerHTML = "<div class=\"widget-container left-receptacle\"></div> <div class=\"widget-container right-receptacle\"></div> <div class=\"text-container\"><br/><b><i> "+scientificName+"</i></b></div><br/>";
                    document.getElementById("CommonName").innerHTML = "<div class=\"widget-container left-receptacle\"></div> <div class=\"widget-container right-receptacle\"></div> <div class=\"text-container\"><b> "+commonName+"</b></div><br/>";
                    document.getElementById("Description").innerHTML = "<div class=\"widget-container left-receptacle\"></div> <div class=\"widget-container right-receptacle\"></div> <div class=\"text-container\"> "+description+"</div>";
                    for(var i =0;i<toxicList.length;i++){
    //                     startPoint = 0;
    //                     while(startPoint<description.length && description.indexOf(toxicList[i],startPoint)!=-1){
                        if(description.indexOf(toxicList[i],startPoint)>=startPoint){
    //                        startPoint = description.indexOf(toxicList[i]);
                           toxicCount+=1;
                         }
    //                 }
                    }
                    if(toxicCount>=1){
                        toxic=true;
                    }
                }
             },
             error: function (errorMessage) {
             console.log("error with GetImageInfo");
             console.log(id);
             console.log(errorMessage);

            }

            });
        var returnList=[link,toxic];
        return returnList;

    }
    return{
        getSpeciesID: getSpeciesID,
        getImageInfo: getImageInfo
    };
})();
//function getToxic(id){
//    var link = "";
//    var toxicList = ["anemone","toxic","venom","venomous","poisonous","poison","danger","dangerous","sting"];
//    var description = "";
//    var toxicCount = 0;
//    var toxic=false;
//    var startPoint=0;
//    $.ajax({
//             type: "GET",
//
//        url:"http://eol.org/api/pages/1.0.json?batch=false&id="+id+"&images_per_page=2&images_page=1&videos_per_page=0&videos_page=1&sounds_per_page=0&sounds_page=1&maps_per_page=0&maps_page=1&texts_per_page=2&texts_page=1&iucn=false&subjects=overview&licenses=all&details=true&common_names=true&synonyms=true&references=true&taxonomy=true&vetted=0&cache_ttl=&language=en",
//             contentType: "application/json; charset=utf-8",
//             dataType: "json",
//             
//             success: function(imgdata){
//                 console.log(id);
//
//              console.log("pages api call success");
//            console.log(imgdata["dataObjects"][2]["eolMediaURL"]);
//                
//            link += imgdata["dataObjects"][2]["eolMediaURL"];
//            description += imgdata["dataObjects"][0]["description"];
//                 for(var i =0;i<toxicList.length;i++){
//                     startPoint = 0;
//                     while(startPoint<description.length && description.indexOf(toxicList[i],startPoint)!=-1){
//                     if(description.indexOf(toxicList[i],startPoint)>=startPoint){
//                         startPoint = description.indexOf(toxicList[i]);
//                         toxicCount+=1;
//                     }
//                 }
//            }
//            if(toxicCount>=3){
//                 toxic=true;
//            }
//            console.log(link);
//            console.log(toxicCount);
//            console.log(toxic);
//            },
//        error: function (errorMessage) {
//        console.log("error");
//            console.log(id);
//        console.log(errorMessage);
//    
//        }
//        var returnList=[link,toxic];
//        return returnList;
//    
//});
//}