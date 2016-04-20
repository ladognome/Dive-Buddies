var GeoCodeGoogle = (function() {
    var flag= true;
    var location_coordinates = null;
    var f = null;
//    var scientifNameList = [];
//      var fishList = [];
//      var mollusksList = [];
//      var coralsList = [];  
//      var specificList_LordHowe_fish = ['Pterois volitans','Coris bulbifrons','Seriola lalandi','Thalassoma lunare','Canthigaster callisternus','Pseudanthias pictilis','Alutarius macracanthus','Trachypoma macracanthus','Xyrichtys niger','Epinephelus undulatostriatus'];
//      var specificList_LordHowe_mollusks = ['Aequipecten nux','Sepioteuthis lessoniana','Aplysia dactylomela','Conus arenatus','Ctena bella','Diacria trispinosa','Sepia bandensis','Drupa morum','Engina zonalis','Umbraculum sinicum'];
//      var specificList_LordHowe_corals = ['Acropora glauca','Acropora solitaryensis','Madrepora hyacinthus','Parascolymia vitiensis','Acropora yongei','Acanthastrea bowerbanki','Isopora palifera','Goniopora lichen','Stephanocyathus spiniger','Pavona minuta'];
    
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
            console.log("Geocode Successful");

          } 

          else {
            console.log("Geocode was not successful for the following reason: " + status);
          }
        });

      }
    $('#enterlocation').onfocus = function(){initialize();};
    
    return {
    codeAddress: codeAddress,
    init: init
  };
})();