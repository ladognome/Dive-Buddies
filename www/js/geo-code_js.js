var GeoCode = (function() {
    var flag= true;
    var location_coordinates = null;
    var f = null;
    var scientifNameList = [];
      var fishList = [];
      var mollusksList = [];
      var coralsList = [];  
      var specificList_LordHowe_fish = ['Pterois volitans','Coris bulbifrons','Seriola lalandi','Thalassoma lunare','Canthigaster callisternus','Pseudanthias pictilis','Alutarius macracanthus','Trachypoma macracanthus','Xyrichtys niger','Epinephelus undulatostriatus'];
      var specificList_LordHowe_mollusks = ['Aequipecten nux','Sepioteuthis lessoniana','Aplysia dactylomela','Conus arenatus','Ctena bella','Diacria trispinosa','Sepia bandensis','Drupa morum','Engina zonalis','Umbraculum sinicum'];
      var specificList_LordHowe_corals = ['Acropora glauca','Acropora solitaryensis','Madrepora hyacinthus','Parascolymia vitiensis','Acropora yongei','Acanthastrea bowerbanki','Isopora palifera','Goniopora lichen','Stephanocyathus spiniger','Pavona minuta'];
    
    function init(){
            var address = (document.getElementById('enterlocation'));
            var  autocomplete = new google.maps.places.Autocomplete(address);
            autocomplete.setTypes(['geocode']);
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    return;
                }

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                    ].join(' ');
            }
          });
    }

    

    function codeAddress(){
        geocoder = new google.maps.Geocoder();
        var address = document.getElementById("enterlocation").value;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {

          //alert("Latitude: "+results[0].geometry.location.lat());
          //alert("Longitude: "+results[0].geometry.location.lng());
            f = 'POLYGON(('+ String(Math.floor(results[0].geometry.location.lng() -1)) +' '+ String(Math.floor(results[0].geometry.location.lat() -1)) + ',' + ' '+ String(Math.floor(results[0].geometry.location.lng() -1)) + ' ' +String(Math.floor(results[0].geometry.location.lat() +1)) + ',' + ' '+ String(Math.floor(results[0].geometry.location.lng() +1)) + ' ' + String(Math.floor(results[0].geometry.location.lat() +1)) + ',' + ' ' + String(Math.floor(results[0].geometry.location.lng() +1)) + ' ' + String(Math.floor(results[0].geometry.location.lat() -1)) + ',' + ' ' + String(Math.floor(results[0].geometry.location.lng() -1)) + ' ' + String(Math.floor(results[0].geometry.location.lat() -1)) + '))'; 
              
              console.log(f);
    //      document.getElementById("lati").innerHTML = "Latitutde:"+results[0].geometry.location.lat();
    //      document.getElementById("longi").innerHTML = "Longitude:"+results[0].geometry.location.lng();
          if (results[0].geometry.location.lng()>158 && results[0].geometry.location.lng()<160 && results[0].geometry.location.lat()>-32 && results[0].geometry.location.lat()<-31){
                console.log("coordinates match");
                flag = true;
                location_coordinates = results[0].geometry.location;
                //alert(flag);
              }
              else{/*alert("Not found");*/ flag=false;
                  location_coordinates = results[0].geometry.location;
                  }

          } 

          else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });

      } 

    $('#fishTab').click(function(){
        console.log("clicked fish");
        var index = 39;
        filler = null;
        for (var i in fishList) {
                
                filler += "<li class=\"widget uib_w_"+String(index)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+fishList[i]+"</i></a></li>\n";
                index++;
            }
            document.getElementById("list_display").innerHTML = filler;
    });
    
    $('#mollusksTab').click(function(){
        console.log("clicked mollusks");
        var index = 39;
        filler=null;
        for (var i in fishList) {
                
                filler += "<li class=\"widget uib_w_"+String(index)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+mollusksList[i]+"</i></a></li>\n";
                index++;
            }
            document.getElementById("list_display").innerHTML = filler;
    });
    
    $('#coralsTabs').click(function(){
        console.log("clicked corals");
        var index = 39;
//        meraElement = "<li class="widget uib_w_39" data-uib="app_framework/listitem" data-ver="1"><a>List Item</a>";
//        document.getElementById("list_display").innerHTML = meraElement;
        filler=null;
        for (var i in fishList) {
                
                filler += "<li class=\"widget uib_w_"+String(index)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+coralsList[i]+"</i></a></li>\n";
                index++;
            }
            document.getElementById("list_display").innerHTML = filler;
    });

    $('#enterlocation').onfocus = function(){initialize();};
    
    $('#predive').click(function () {
          var postDate = new Date();
          postDate.setMonth(postDate.getMonth()-3);
      $.ajax({
             type: "GET",
             // url: "http://api.iobis.org",
             url:"http://api.iobis.org/taxa",
             contentType: "application/json; charset=utf-8",
             dataType: "jsonp",
             data: {

              'geometry': String(f),
//               'year': new Date().getYear(),
              // 'startdate': new Date(),
              // 'enddate': postDate,


              // 'phylum': "Chordata",
//                 'geometry': POLYGON(((location_address.lng-1) (location_address),,,))
              'limit': 1000,
             },
             success: function(data){

              if (flag==true){
                     console.log("Flag is true, proceeding to specific display");
                     scientifNameList = ['Pterois volitans','Coris bulbifrons','Seriola lalandi','Thalassoma lunare','Canthigaster callisternus','Pseudanthias pictilis','Alutarius macracanthus','Trachypoma macracanthus','Xyrichtys niger','Epinephelus undulatostriatus','Aequipecten nux','Sepioteuthis lessoniana','Aplysia dactylomela','Conus arenatus','Ctena bella','Diacria trispinosa','Sepia bandensis','Drupa morum','Engina zonalis','Umbraculum sinicum','Acropora glauca','Acropora solitaryensis','Madrepora hyacinthus','Parascolymia vitiensis','Acropora yongei','Acanthastrea bowerbanki','Isopora palifera','Goniopora lichen','Stephanocyathus spiniger','Pavona minuta'];
                     mollusksList = specificList_LordHowe_mollusks;
                     coralsList = specificList_LordHowe_corals;
                     fishList = specificList_LordHowe_fish;

                     var filler = "";
                      var index = 39;
                      for (var i in scientifNameList) {
                          if (typeof scientifNameList[i] == 'undefined'){
                              continue;
                          }
                          filler += "<li class=\"widget uib_w_"+String(index)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+scientifNameList[i]+"</i></a></li>\n";
                          index++;
                      }
                 }
                 else{
                     console.log("Flag is not true, proceed to generic display");
                 

              //alert(data.count);
              console.log("data count "+ data.count);
              //var text= $.parseJSON(data);
              // console.log(Object.keys(text));
              var keys = [];
              for(var k in data) keys.push(k);

              console.log("total " + keys.length + " keys: " + keys);
              console.log(data.results);
              //console.log((data.results).length);


              for(var i=0;i<(data.results).length;i++){
                if(typeof data.results[i]['species'] == 'undefined'){
                  continue;
                }
                scientifNameList.push([data.results[i]['records'],data.results[i]['species'],data.results[i]['phylum']]);
              }
              
              scientifNameList.sort(function(a,b){return a[1]-b[1]});
              scientifNameList.reverse();
              console.log("format of name list");
              console.log(scientifNameList);

              //for (var item in data.results) scientifNameList.push(item['scientificName']);
              // for (var i=0;i<(data.results).length;i++){
              //   if(typeof data.results[i]['species'] == 'undefined'){
              //       continue;
              //   }
              //   scientifNameList.push(data.results[i]['species']);
              //     if (data.results[i]['phylum'] == 'Mollusca' && mollusksList.length < 10){
              //         mollusksList.push(data.results[i]['species'])
              //     }
              //     else if(data.results[i]['phylum'] == 'Chordata' && fishList.length < 10){
              //       fishList.push(data.results[i]['species'])
              //     }
              //     else if(data.results[i]['phylum'] == 'Cnidaria' && coralsList.length < 10){
              //       coralsList.push(data.results[i]['species'])
              //     }
              //   console.log(scientifNameList[i]);
                
              //   console.log(typeof scientifNameList[i])
              // }

              for (var i=0;i<(scientifNameList).length;i++){
                // if(typeof data.results[i]['species'] == 'undefined'){
                //     continue;
                // }
                // scientifNameList.push(data.results[i]['species']);
                  if (scientifNameList[i][2] == 'Mollusca' && mollusksList.length < 10){
                      mollusksList.push(scientifNameList[i][1])
                  }
                  else if(scientifNameList[i][2] == 'Chordata' && fishList.length < 10){
                    fishList.push(scientifNameList[i][1])
                  }
                  else if(scientifNameList[i][2] == 'Cnidaria' && coralsList.length < 10){
                    coralsList.push(scientifNameList[i][1])
                  }
                // console.log(scientifNameList[i]);
                
                // console.log(typeof scientifNameList[i])
              }

              console.log("List of fish");
                console.log(fishList);
                console.log("List of Mollusks");
                console.log(mollusksList);
                console.log("List of corals");
                console.log(coralsList); 
              console.log(scientifNameList[0]);
                

             var filler = "";
            var index = 39;
            for (var i in scientifNameList) {
                if (typeof scientifNameList[i] == 'undefined'){
                    continue;
                }
                filler += "<li class=\"widget uib_w_"+String(index)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+scientifNameList[i][1]+"</i></a></li>\n";
                index++;
            }
            } 
            document.getElementById("list_display").innerHTML = filler;
             
            },

             error: function (jqXHR, status) {
                 console.log("Problem");
             }
            // }
            });
        });
    // $.ajax({
    //     url: 'http://api.iobis.org/',
    //     type: 'GET',
    //     data: {
    //     // 'ID=1&Name=John&Age=10', // or $('#myform').serializeArray()

    //   },
    //     success: function() { alert('GET completed'); }

    // });
    
    return {
    codeAddress: codeAddress,
    init: init
  };
})();