const matter = require('gray-matter');
const fs   = require('fs');
const showdown = require('showdown');
const converter = new showdown.Converter();
const path = ["../blog/","../projects/"] // the directories where the files generally are


fs.readdirSync(path[0] + "/md/").forEach(file =>{
    var inputPath = path[0] + "/md/" + file; // input file: path/md/filename.md
    var outputPath = path[0] + file;
    outputPath = outputPath.slice(0,-3) + ".html"; // for output: path/filename.html
    console.log("one");

    var contentOfFile = fs.readFileSync(inputPath,'utf8'); // reading the file...
    var formattedContent = matter(contentOfFile); // uses gray-matter to seperate YAML and content
    console.log(formattedContent);

    var htmlOutput = converter.makeHtml(formattedContent.content);
    htmlOutput = `
<!-- If this HTML looks sloppy... blame it on showdownjs. Or my unwillingless to actually clean this up.-->
<html>
    <head>
        <link rel="stylesheet" href="../this is a stylesheet.css">
        <link rel="stylesheet" href="../special post stylesheet.css">
    </head>
    <body>
        <br>
        <span>
            <a href="../index.html" class="body" style="margin-right:0%;">andythepie.github.io</a>/blog/sample.html
        </span>
    <header style="background: linear-gradient(to right,rgba(0,0,0,.74) 0%,rgba(0,0,0,0) 70%),url(`+ formattedContent.data.headerImage+`);background-size:cover;">
        <div>
            <h1>`+ formattedContent.data.title +`</h1>
            <p class="subtitle">`+ formattedContent.data.description +`</p>
        </div>
    </header>
    <div class="body">
` + htmlOutput + `
</div>
</body>
</html>`;
    fs.writeFileSync(outputPath,htmlOutput);
});