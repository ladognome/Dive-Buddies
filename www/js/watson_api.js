//TODO: stem words & removed punctuation
/*var questions = {"what is a white oval shaped sea slug",
"what is a white shell with dark brown nodules and a purplish opening",
"what shell is creamy brown, and patterned with small darker brown spots",
"what slug has irregular black rings and pale yellowish, greenish, or orangish body",
"what squid is small and changes its color",
"what fish is silvery to light blue with a flat body",
"what fish is brownish-red with large white spots all over",
};*/

function PostToWatson(QUESTION){
    var WATSON_URL = "https://watson-wdc01.ihost.com/instance/514/deepqa/v1/question";
    var WATSON_USERNAME = "gt2_administrator";
    var WATSON_PASSWORD = "bCze2OdC";

    var data = {
     "question": {
        "questionText" :  QUESTION
      }   
    };
    
    var authorizationBasic = $.base64.btoa(WATSON_USERNAME + ':' + WATSON_PASSWORD);
    var output;
    $.ajax
        ({
            type: "POST",
            //the url where you want to sent the userName and password to
            url: WATSON_URL,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            //json object to sent to the authentication url
            data: JSON.stringify(data),
            headers: { "Authorization" : "Basic " + authorizationBasic},
            success: function(resultData) {
                console.log(resultData["question"]);
                output = resultData["question"];
            },
            error: function(jqXHR, textStatus, errorThrown) {
            },
            timeout: 120000        
        });
    return output;
}


