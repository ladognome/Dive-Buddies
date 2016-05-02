(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     /* graphic button  #StartPageGraphic */
    $(document).on("click", "#StartPageGraphic", function(evt)
    {
        show('loading', false); 
        GeoCodeGoogle.init(); 
        GeoCodeGoogle.codeAddress();
        activate_subpage("#page_100_31"); 
    });
    
    $(document).on("click", "#mainButton", function(evt)
    {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
       
        
         uib_sb.toggle_sidebar($(".uib_w_7"));  
    });
    

     /* button  Go */    
      $(document).on("click", "#UseCurrent", function(evt)
    {
//          alert("Use Current Called");
         /*global activate_subpage */
         activate_subpage("#DiveSpotSelect"); 
    });
    
    
    /* button  #predive */
    $(document).on("click", "#predive", function(evt)
    {   
         activate_subpage("#PreDive"); 
    });
    
        /* button  #postdive */
    $(document).on("click", "#postdive", function(evt)
    {
        activate_subpage("#PostDive");
    });
    
     //POST DIVE SUBMIT
    $(document).on("click", ".uib_w_45", function(evt)
    {
        show('loading', true);
        activate_subpage("#PostDiveResults");
        var inputText = document.getElementById("input").value.toLowerCase().replace(/[.,\/#"'!$%\^&\*;:{}=\-_`~()]/g,"").replace("-"," ");
        var splitText = inputText.split(" ");
        var composedVector = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];

        
        //CONVERT QUERY INTO WORD-TO-VEC VECTOR, WORDS SUMMED
        for (var i =0; i < splitText.length; i++){
            [].forEach.call(Word2VecUtils.findSimilarWords(1,splitText[i]), function(element, index, array){
                    composedVector = Word2VecUtils.addVecs(composedVector, wordVecs[element[0]]);
                //console.log(element[0]); //the word
                //console.log(element[1]); //the confidence
            });
        }
        console.log(composedVector);
        

        var winningQuestion = "";       
        var winningConfidence = 0;
        
        //************************************************************
        //TRAINING
        //CODE FOR FINDING THE VECTORS FOR THE QUESTIONS
        /*var winningVector = [];
        
        var QUESTIONS = [
           "what fish has blue fins and a yellow tail",
            "what fish has lots of fins which fan out from its body"
        ];
        
        for (var i = 0; i < QUESTIONS.length; i++){
            var question = QUESTIONS[i];
            var composedVector_question = [];
            var split_question = question.toLowerCase().split(" ");
            
            [].forEach.call(Word2VecUtils.findSimilarWords(1,split_question[0]), function(element, index, array){
                composedVector_question = wordVecs[element[0]];
            });

            for (var j =1; j < split_question.length; j++){
                [].forEach.call(Word2VecUtils.findSimilarWords(1,split_question[j]), function(element, index, array){
                    if (wordVecs[element[0]]!= undefined){
                        composedVector_question = Word2VecUtils.addVecs(composedVector_question, wordVecs[element[0]]);
                    }
                    
                });
            }
            console.log(question); //the question
            console.log(JSON.stringify(composedVector_question));
            
            var similarity = Word2VecUtils.getCosSim(composedVector, composedVector_question)
            console.log(similarity);
            if (winningConfidence < similarity){
                winningQuestion = question;
                winningVector = composedVector_question;
                winningConfidence = similarity;
            }
            console.log("Most similar question so far: "+winningQuestion);
        }*/
        
        //************************************************************
        
        //MATCH THE DESCRIPTION TO EACH QUESTION VECTOR
        for (var key in QUESTION_VECTORS){
            if (QUESTION_VECTORS.hasOwnProperty(key)) {
                var similarity = Word2VecUtils.getCosSim(composedVector, QUESTION_VECTORS[key]);
                console.log(similarity);
                if (winningConfidence < similarity){
                    winningQuestion = key;
                    winningConfidence = similarity;
                }
                console.log("Most similar question so far: "+winningQuestion);
            }
        }
        
       
            //FEED THE WINNING QUESTION TO WATSON
        PostToWatson(winningQuestion, function(WatsonResults){
                var WatsonAnswers = WatsonResults["answers"];
                var WatsonDocuments = WatsonResults["evidencelist"];

                //DISPLAY THE RESULTS


                var filler = "";
                for (var i = 0; i < WatsonAnswers.length; i++) {
                    var imageHTML = "";
                    console.log(WatsonAnswers[i]);
                    var opt = WatsonAnswers[i].text;
                    if (opt == "${noAnswer}" || opt.indexOf("undefined") > -1 ) {continue;}
                    var split = opt.split(" - ");
                    console.log(opt);
                    if (split[1] !== undefined){

                        if (opt.indexOf("Corals of the World") > -1){
                            var coral = split[1].split(".")[0]
                            if (filler.indexOf(coral)){ //check for duplicates
                                var species_id = eolDataFile.getSpeciesID(coral);
                                var imageURL=eolDataFile.getImageInfo(species_id)[0];
                                console.log("toxic: "+eolDataFile.getImageInfo(species_id)[1]);
                                filler += "<li style=\"background-image: url("+imageURL+"); background-size: 100% 200px; background-repeat: no-repeat; height:210px; -webkit-text-fill-color: white;  -webkit-text-stroke-width: 0.8px; -webkit-text-stroke-color: black; font-size:25px; font-weight: bold;\" id=\"animal_selection\" class=\"widget uib_w_"+String(48+i)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\" ><a><i>"+coral+"</i></a></li>\n";
                                console.log(filler);
                            }


                        }
                        else if (opt.indexOf("Encyclopedia of Life") > -1){
                            if (filler.indexOf(split[1]) == -1){ //check for duplicates
                                var species_id = eolDataFile.getSpeciesID(split[2]);
                                var imageURL=eolDataFile.getImageInfo(species_id)[0];
                                console.log("toxic: "+eolDataFile.getImageInfo(species_id)[1]);
                                filler += "<li style=\"background-image: url("+imageURL+"); background-size: 100% 200px; background-repeat: no-repeat; height:210px; -webkit-text-fill-color: white;  -webkit-text-stroke-width: 0.8px; -webkit-text-stroke-color: black; font-size:25px; font-weight: bold;\" id=\"animal_selection\" class=\"widget uib_w_"+String(48+i)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\" ><a>"+split[1]+" - <i>"+split[2]+"</i></a></li>\n";
                                console.log(filler);
                            }
                        }
                        else{
                            continue;
                        }
                    }
                }
                document.getElementById("watson_results").innerHTML = filler;
                show('loading', false);
            }); 
    });
    
    $(document).on('click', "#animal_selection", function(evt){
         console.log($(this).text());
        var speciesName = "";
        var speciesDisplay = $(this).text();
        if (speciesDisplay.indexOf(" - ")>=0)
            {
                speciesName = speciesDisplay.slice(speciesDisplay.indexOf(" - ")+3,speciesDisplay.length);
            }
        else{
            speciesName = speciesDisplay;
        }
        console.log('species display '+speciesDisplay);
        console.log("species name "+speciesName);
        
        // get species name by searching for " - <i>", if not found, then the whole text
        var speciesID = eolDataFile.getSpeciesID(speciesName);
        console.log("ID "+speciesID);
        
        var templink = eolDataFile.getImageInfo(speciesID);
         activate_subpage("#fishinfo");
         
         //populate fishinfo page with relevant info
     });
    
     $(document).on("click", ".uib_w_59", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
     $(document).on("click", ".uib_w_58", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
     $(document).on("click", ".uib_w_57", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
     $(document).on("click", ".uib_w_56", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
    $(document).on("click", ".uib_w_55", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
    
    
  /* $(document).on("click", ".uib_w_50", function(evt)
    {
         activate_subpage("#fishinfo"); 
    });
    
    $(document).on("click", ".uib_w_49", function(evt)
    {
         activate_subpage("#fishinfo"); 
    });
    
    $(document).on("click", ".uib_w_48", function(evt)
    {
         activate_subpage("#fishinfo"); 
    });*/
    
    
            $(document).on("click", ".uib_w_41", function(evt)
    {
         activate_subpage("#fishinfo"); 
    });
    $(document).on("click", ".uib_w_40", function(evt)
    {
         activate_subpage("#fishinfo"); 
    });
    $(document).on("click", ".uib_w_39", function(evt)
    {
         activate_subpage("#fishinfo"); 
    });
    

    $(document).on("click", ".uib_w_56", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
    $(document).on("click", ".uib_w_57", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
    $(document).on("click", ".uib_w_58", function(evt)
    {
         activate_subpage("#DiveModeSelect"); 
    });
     
     
    
        /* button  Use Current Location */
    $(document).on("click", ".uib_w_29", function(evt)
    {
        //alert("Use Current Not Called");
         activate_subpage("#DiveSpotSelect"); 
    });
    
        /* button  Go */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_subpage */
//         GeoCodeGoogle.init();
//        GeoCodeGoogle.codeAddress();
//        GeoCodeGoogle.init(); 
//        GeoCodeGoogle.codeAddress();
         diveSitesFunction.goClickedHere();
         activate_subpage("#DiveSpotSelect"); 
    });
     
    $(document).on("click", "#back", function(evt)
    { 
        var backpage = "#StartPage";
        var location = window.location.href;
        switch(location.substring(location.indexOf("#")+1))
        {
            case "#page_100_31":
                backpage="#StartPage"; 
                break;
            case "#DiveSpotSelect":
                backpage="#page_100_31"; 
                break;
            case "#DiveModeSelect":
                backpage="#DiveSpotSelect"; 
                break;
            case "#PreDive":
                backpage="#DiveModeSelect"; 
                break;
            case "#PostDive":
                backpage="#DiveModeSelect";
                break;
            case "#PostDiveResults":
                backpage="#PostDive"; 
                break;
            case "#fishinfo":
                backpage="#DiveModeSelect"; 
                break;
            default:
                backpage="#StartPage";
        }
        console.log(backpage);
        activate_subpage(backpage);
        
    });
    
    
    $(document).on('click', "#divespot", function(evt){
         console.log($(this).text());
         var str = $(this).text();
         var split_str = str.split(" ");
         /*console.log(split_str);
         var lat1 = (split_str[2].split("="))[1]
         var lng1 = (split_str[3].split("="))[1]
         console.log(lat1)
         console.log(lng1)*/
        
         activate_subpage("#predive");
         
         //populate fishinfo page with relevant info
     });
    
 }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
