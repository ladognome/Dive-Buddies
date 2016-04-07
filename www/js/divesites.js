/*  Divesites.com API    */

//var spots = {};
//var xhr = new XMLHttpRequest();
//xhr.open("GET", "http://api.divesites.com/", false);
//xhr.send();
//console.log(xhr.status);
//console.log(xhr.statusText);
function getList(data){
    
    var sites = data["sites"];
    console.log(sites);
    
    var filler=null;
        for (var i in sites) {
                var spot = sites[i];
                var index = 56;
                filler += "<li class=\"widget uib_w_"+String(index)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+spot["name"]+"</i></a></li>\n";
                index++;
            }
            document.getElementById("divespots").innerHTML = filler;
   
}

$('#Go').click(function(){
    var url;
    geocoder = new google.maps.Geocoder();
        var address = document.getElementById("enterlocation").value;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

          console.log("Latitude: "+results[0].geometry.location.lat());
          console.log("Longitude: "+results[0].geometry.location.lng());
        var lat = results[0].geometry.location.lat();
        var long = results[0].geometry.location.lng();
        url = "http://api.divesites.com/?mode=sites&lat="+lat+"&lng="+long+"&dist=25";
          }
                                                 
    $.ajax({
             type: "GET",
             url:url,
             contentType: "application/json; charset=utf-8",
             dataType: "jsonp",
             
             success: function(data){
                 getList(data);

              console.log("success");
             }
    
});});});

$('#UseCurrent').click(function(){
      
        $.ajax({
             type: "GET",
             url:"http://api.divesites.com/",
             contentType: "application/json; charset=utf-8",
             dataType: "jsonp",
            
             success: function(data){
                 getList(data);

              console.log("success");
             }
    
                
  });});
