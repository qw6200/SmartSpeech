const pptText;
const textract = require('textract');
textract.fromFileWithPath("Test.pptx", function( error, text ) {
    pptText = text;
    console.log(text);
})


const pptComposer = require('pptx-compose');

let composer = new pptComposer(); //instantiate

// Parses a PPTX file
composer.parse('/path/to/pptx/file.pptx', (err, content)=>{
    console.log(content);
})


