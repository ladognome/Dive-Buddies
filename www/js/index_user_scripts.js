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
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
        /* button  Use Current Location */
    $(document).on("click", ".uib_w_29", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
        /* button  Go */
    $(document).on("click", ".uib_w_32", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#DiveModeSelect"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
