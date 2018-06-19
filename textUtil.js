const pptText;
const textract = require('textract');
textract.fromFileWithPath("text.pptx", function( error, text ) {
    pptText = text;
});

const composer = require('pptx-compose');

//get the title of current slide and next slide

function getText(slideNum) {
    composer.parse('text.pptx', function (err, json) {
  var json = (JSON.stringify(json, null, 2);
});



}

