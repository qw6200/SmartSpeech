const pptText;
const textract = require('textract');
textract.fromFileWithPath("Test.pptx", function( error, text ) {
    pptText = text;
    console.log(text);
})


const composer = require('pptx-compose');

let composer = new pptComposer(); //instantiate

//get the title of current slide and next slide

composer.parse('Test.pptx', function (err, json) {
  console.log(JSON.stringify(json, null, 2));
});



