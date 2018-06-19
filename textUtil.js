const pptText;
const textract = require('textract');
textract.fromFileWithPath("Test.pptx", function( error, text ) {
    pptText = text;
    console.log(text);
})


const pptComposer = require('pptx-compose');

let Composer = new pptComposer(); //instantiate

// Parses a PPTX file
Composer.parse('Test.pptx', (err, content)=>{
    console.log(content);
})


