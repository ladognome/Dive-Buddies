$('#test').click(function(){

var species = "Xyrichtys martinicensis";

$.ajax({
             type: "GET",
             url:"http://eol.org/api/search/1.0.json?q="+species+"&page=1&exact=false&filter_by_taxon_concept_id=&filter_by_hierarchy_entry_id=&filter_by_string=&cache_ttl=",
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             
             success: function(data){
                 var id=0;
                 id = data["results"][0]["id"];
                 console.log("id assigned");
                 getImages(id);
                 console.log(id);
                 console.log(id.toString);
              console.log("success after calling getImages");
             }
    
});});

function getImages(id){
    
    $.ajax({
             type: "GET",
//             url:"http://eol.org/api/pages/1.0.json?batch=&id="+id+"&images_per_page=&images_page=&videos_per_page=&videos_page=&sounds_per_page=&sounds_page=&maps_per_page=&maps_page=&texts_per_page=&texts_page=&iucn=&subjects=&licenses=&details=&common_names=&synonyms=&references=&taxonomy=&vetted=&cache_ttl=&language=en",
        url:"http://eol.org/api/pages/1.0.json?batch=false&id="+id+"&images_per_page=2&images_page=1&videos_per_page=0&videos_page=1&sounds_per_page=0&sounds_page=1&maps_per_page=0&maps_page=1&texts_per_page=2&texts_page=1&iucn=false&subjects=overview&licenses=all&details=true&common_names=true&synonyms=true&references=true&taxonomy=true&vetted=0&cache_ttl=&language=en",
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             
             success: function(imgdata){
                 console.log(id);

              console.log("pages api call success");
            console.log(imgdata["dataObjects"][2]["eolMediaURL"]);
             },
        error: function (errorMessage) {
        console.log("error");
            console.log(id);
        console.log(errorMessage);
    
        }
    
        
    
});
}