(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    var backpage="#StartPage";
     
     /* button  #mainButton */
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
    
   
      $(document).on("load", "#page_100_31", function(evt)
    {
         /*global activate_subpage */

         backpage="#StartPage"; 
          console.log(backpage);
    });
      $(document).on("load", "#DiveSpotSelect", function(evt)
    {
         /*global activate_subpage */

         backpage="#page_100_31"; 
          console.log(backpage);
    });
      $(document).on("load", "#DiveModeSelect", function(evt)
    {
         /*global activate_subpage */

         backpage="#DiveSpotSelect"; 
          console.log(backpage);
    });
      $(document).on("load", "#PreDive", function(evt)
    {
         /*global activate_subpage */

         backpage="#DiveModeSelect"; 
    });
      $(document).on("load", "#PostDive", function(evt)
    {
         /*global activate_subpage */

         backpage="#DiveModeSelect"; 
    });
       $(document).on("load", "#PostDiveResults", function(evt)
    {
         /*global activate_subpage */

         backpage="#PostDive"; 
    });
      $(document).on("load", "#fishinfo", function(evt)
    {
         /*global activate_subpage */

         backpage="#DiveModeSelect"; 
    });

     
    $(document).on("click", "#Go", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveSpotSelect"); 
    });
    
        /* button  Go */
    
      $(document).on("click", "#UseCurrent", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveSpotSelect"); 
    });
    
    
        /* button  #predive */
    $(document).on("click", "#predive", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#PreDive"); 
    });
    
        /* button  #postdive */
    $(document).on("click", "#postdive", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#PostDive"); 
    });
    
     //POST DIVE SUBMIT
    $(document).on("click", ".uib_w_45", function(evt)
    {
        var inputText = document.getElementById("input").value.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        var splitText = inputText.split(" ");
        var composedVector = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];

        
        //CONVERT QUERY INTO WORD-TO-VEC VECTOR, WORDS SUMMED
        for (var i =0; i < splitText.length; i++){
            [].forEach.call(Word2VecUtils.findSimilarWords(1,splitText[i]), function(element, index, array){
                if (element[0] == "fin"){
                    composedVector = Word2VecUtils.addVecs(composedVector, wordVecs["limb"]); //change all instances of fin to limb
                }
                else{
                    composedVector = Word2VecUtils.addVecs(composedVector, wordVecs[element[0]]);
                }
                //console.log(element[0]); //the word
                //console.log(element[1]); //the confidence
            });
        }
        console.log(composedVector);
        

        var winningQuestion = "";       
        var winningConfidence = 0;
        
        //************************************************************
        
        //CODE FOR FINDING THE VECTORS FOR THE QUESTIONS
       /* var winningVector = [];
        
        var QUESTIONS = [
            "what fish is silver to white blue on back and yellow towards the tail",
            "what fish has a narrow bronze line along middle of body becoming yellow towards the tail",
            "what fish is black with big white spots",
            "what fish lives in shallow rocky and coral reef and the common name is double head",
            "what fish has lots of limbs which fan out from its body",
            "what fish has long spine coming out the side of the body",
            "what fish looks like a turkey",
            "what fish has gold brown bands stretch across a light yellow or white background"
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
                    composedVector_question = Word2VecUtils.addVecs(composedVector_question, wordVecs[element[0]]);
                    
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
        var WatsonResults = new PostToWatson(winningQuestion);
        var WatsonAnswers = WatsonResults["answers"];
        var WatsonDocuments = WatsonResults["evidencelist"];
        
        //DISPLAY THE RESULTS
        activate_subpage("#PostDiveResults");
        var filler = "";
        for (var i = 0; i < WatsonAnswers.length; i++) {
            var imageHTML = "";
            console.log(WatsonAnswers[i]);
            var opt = WatsonAnswers[i].text;
            if (opt == "${noAnswer}" || opt.indexOf("undefined") > -1) {continue;}
            var split = opt.split(" - ");
            console.log(opt);
            if (split[1] !== undefined){
                var imageDoc = WatsonDocuments[i].document;
                imageDoc = imageDoc.replace("http://10.110.88.131:8080", "https://watson-wdc01.ihost.com");
                imageHTML = IMAGE(imageDoc);
                if (imageHTML == ""){
                    var word = split[1].split(" ").join("_")
                    imageHTML = wiki(word);
                }
                filler += "<li class=\"widget uib_w_"+String(48+i)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+imageHTML+"<p>"+split[1]+" - <i>"+split[2]+"</i></a></li>\n";
                console.log(filler);
            }
        }
        document.getElementById("watson_results").innerHTML = filler;
    });
     $(document).on("click", ".uib_w_59", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
     $(document).on("click", ".uib_w_58", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
     $(document).on("click", ".uib_w_57", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
     $(document).on("click", ".uib_w_56", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    $(document).on("click", ".uib_w_55", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
        /* listitem  Result Item */
    $(document).on("click", ".uib_w_50", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fishinfo"); 
    });
    
        /* listitem  Result Item */
    $(document).on("click", ".uib_w_49", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fishinfo"); 
    });
    
        /* listitem  Result Item */
    $(document).on("click", ".uib_w_48", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fishinfo"); 
    });
    
        /* listitem  List Item */
    $(document).on("click", ".uib_w_41", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fishinfo"); 
    });
    
        /* listitem  List Item */
    $(document).on("click", ".uib_w_40", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fishinfo"); 
    });
    
        /* listitem  List Item */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#fishinfo"); 
    });    
    
        /* graphic button  #StartPageGraphic */
    $(document).on("click", "#StartPageGraphic", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_100_31"); 
    });
    
        /* listitem  Dive Spot 1 */
    $(document).on("click", ".uib_w_56", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
        /* listitem  Dive Spot 2 */
    $(document).on("click", ".uib_w_57", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
        /* listitem  Dive Spot 3 */
    $(document).on("click", ".uib_w_58", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
        /* button  Use Current Location */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveSpotSelect"); 
    });
    
        /* button  Go */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_subpage */
         GeoCode.init();
         GeoCode.codeAddress();
         activate_subpage("#DiveModeSelect"); 
    });
     
    $(document).on("click", "#back", function(evt)
    {
        /* your code goes here */ 
        activate_subpage(backpage);
        
    });
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
