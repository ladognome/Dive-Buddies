(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
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
    
        /* button  Use Current Location */
    
    
        /* button  Use Current Location */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
        /* button  Go */
    
    
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
    
        /* button  Find */
    $(document).on("click", ".uib_w_45", function(evt)
    {
        var inputText = document.getElementById("input").value.toLowerCase();
        var splitText = inputText.split(" ");
        var composedVector = [];
        
        [].forEach.call(Word2VecUtils.findSimilarWords(1,splitText[0]), function(element, index, array){
            composedVector = wordVecs[element[0]];
        });
        
        for (var i =1; i < splitText.length; i++){
            [].forEach.call(Word2VecUtils.findSimilarWords(1,splitText[i]), function(element, index, array){
                composedVector = Word2VecUtils.addVecs(composedVector, wordVecs[element[0]]);
                //console.log(composedVector);
                //console.log(element[0]); //the word
                //console.log(element[1]); //the confidence
            });
        }
        console.log(composedVector);
        
        /*var QUESTIONS = ["what is a white round shaped sea slug",
        "what is a white shell with dark brown lump and a purple opening",
        "what shell is cream brown and pattern with small darker brown spots",
        "what slug has odd black rings and pale yellow green or orange body",
        "what squid is small and changes its color",
        "what fish is silver to light blue with a flat body",
        "what fish is brown red with large white spots all over",
        ];*/
        
        
        
        
        var winningQuestion = "";
       //var winningVector = [];
        var winningConfidence = 0;
        
        /*for (var i = 0; i < QUESTIONS.length; i++){
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
        
        for (var key in QUESTION_VECTORS){
            if (QUESTION_VECTORS.hasOwnProperty(key)) {
                var similarity = Word2VecUtils.getCosSim(composedVector, QUESTION_VECTORS[key])
                console.log(similarity);
                if (winningConfidence < similarity){
                    winningQuestion = key;
                    winningConfidence = similarity;
                }
                console.log("Most similar question so far: "+winningQuestion);
            }
        }
        
        
        var WatsonAnswers = PostToWatson(winningQuestion);
        
        activate_subpage("#PostDiveResults");
        var filler = "";
        for (var i = 0; i < WatsonAnswers.length; i++) {
            var opt = WatsonAnswers[i].text;
            if (opt == "${noAnswer}" || opt.indexOf("undefined") > -1) {continue;}
            var split = opt.split(" - ");
            console.log(opt);
            filler += "<li class=\"widget uib_w_"+String(48+i)+"\" data-uib=\"app_framework/listitem\" data-ver=\"1\"><a>"+split[1]+" - <i>"+split[2]+"</i></a></li>\n";
        }
        document.getElementById("watson_results").innerHTML = filler;
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
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
