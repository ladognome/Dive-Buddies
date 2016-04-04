function imageWp() {

    var word = 'cetacae';
    // var word = scientifNameList[i];

    $.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var https = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = https + '//cors-anywhere.herokuapp.com/' + options.url;
  }
});


    $.get(
    'https://de.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=' + word + '&callback=?',
    function (response) {
        var resp = $.parseJSON(response);
        var text = resp.parse.text['*'];
        re = /img.*?src="(.*?)"/g
        while( match = re.exec(text)) { 
           console.log(match[1]); 
        }
});

};

 imageWp();