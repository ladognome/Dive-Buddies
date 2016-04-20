//TODO: stem?

function PostToWatson(QUESTION, callback){
    var WATSON_URL = "https://watson-wdc01.ihost.com/instance/514/deepqa/v1/question";
    var WATSON_USERNAME = "gt2_administrator";
    var WATSON_PASSWORD = "bCze2OdC";

    var data = {
     "question": {
        "questionText" :  QUESTION,
         "items" : 10
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
            //json object to sent to the authentication url
            data: JSON.stringify(data),
            headers: { "Authorization" : "Basic " + authorizationBasic},
            success: function(resultData){
                    console.log(resultData["question"]);
                    output = resultData["question"];
                    callback(output);
            },
            error: function(jqXHR, textStatus, errorThrown) {
            },
            timeout: 120000        
        });
}


