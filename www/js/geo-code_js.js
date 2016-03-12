var GeoCode = (function() {
    var flag= true;
    
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

    //      document.getElementById("lati").innerHTML = "Latitutde:"+results[0].geometry.location.lat();
    //      document.getElementById("longi").innerHTML = "Longitude:"+results[0].geometry.location.lng();
          if (results[0].geometry.location.lng()>158 && results[0].geometry.location.lng()<160 && results[0].geometry.location.lat()>-32 && results[0].geometry.location.lat()<-31){
                alert("coordinates match");
                flag = true;
                alert(flag);
              }
              else{alert("Not found"); flag=false;}

          } 

          else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });

       if (flag){alert("Flag is true");} 
       else{alert("Flag is set to false now");}

      }



    $('#enterlocation').onfocus = function(){initialize();};
      // alert("Hi")
      $('#predive').click(function () {
      $.ajax({
             type: "GET",
             // url: "http://api.iobis.org",
             url:"http://api.iobis.org/taxa",
             contentType: "application/json; charset=utf-8",
             dataType: "jsonp",
             data: {

              'geometry': 'POLYGON((158 -31, 158 -32, 160 -32, 160 -31, 158 -31))',
              'limit': 10,
             },
             success: function(data){
              //alert(data.count);
              console.log("data count "+ data.count);
              //var text= $.parseJSON(data);
              // console.log(Object.keys(text));
              var keys = [];
              for(var k in data) keys.push(k);

              alert("total " + keys.length + " keys: " + keys);
              console.log(data.results);
              //console.log((data.results).length)

              var scientifNameList = [];
              //for (var item in data.results) scientifNameList.push(item['scientificName']);
              for (i=0;i<(data.results).length;i++){

                scientifNameList.push(data.results[i]['species']);
                console.log(scientifNameList[i]);
              }
              console.log(scientifNameList[0]);



            var div_display = document.getElementById('list_display');

            // say that fruits contains all your data
            //var fruits = ['Apples','Bananas','Pineapples','Peaches','Grapes'],
                ul = document.createElement('ul'); // create an arbitrary ul element

            // loop through the fruits array
            for(var i in scientifNameList) {
                    // create an arbitrary li element
              var li = document.createElement('li'),
                 content = document.createTextNode(scientifNameList); // create a textnode to the document

              li.appendChild(content); // append the created textnode above to the li element
              ul.appendChild(li); // append the created li element above to the ul element
            }

            div_display.appendChild(ul); // finally the ul element to the div with an id of placeholder

            },

             error: function (jqXHR, status) {
                 console.log("Problem");
             }
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