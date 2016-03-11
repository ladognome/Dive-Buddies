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
        var composedVectors = [];
        
        [].forEach.call(Word2VecUtils.findSimilarWords(1,splitText[0]), function(element, index, array){
            composedVectors = wordVecs[element[0]];
        });
        
        for (var i =1; i < splitText.length; i++){
            [].forEach.call(Word2VecUtils.findSimilarWords(1,splitText[i]), function(element, index, array){
                composedVectors = Word2VecUtils.addVecs(composedVectors, wordVecs[element[0]]);
                //console.log(composedVectors);
                //console.log(element[0]); //the word
                //console.log(element[1]); //the confidence
            });
        }
        //TODO: compare composedVectors to a composed vector of questions we trained on
        

        activate_subpage("#PostDiveResults");
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
    
        /* graphic button  StartPageGraphic */
    
    
        /* graphic button  #StartPageGraphic */
    
    
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
    
        /* button  Go */
    
    
        /* button  Use Current Location */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveSpotSelect"); 
    });
    
        /* button  Go */
    
    
        /* button  Go */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
