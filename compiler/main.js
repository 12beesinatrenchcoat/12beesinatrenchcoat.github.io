const matter = require('gray-matter');
const fs   = require('fs');
const showdown = require('showdown');
const converter = new showdown.Converter();
const path = ["../projects/","../blog/"] // the directories where the files generally are

//#region (const appendHtml; used in all compilations)
const appendHtml = `
</div>
</body>
</html>`;
//#endregion

for(var i = 0; i < path.length; i++){
    fs.readdirSync(path[i] + "md/").forEach(file =>{
        var inputPath = path[i] + "md/" + file; // input file: path/md/filename.md
        var outputPath = path[i] + file;
        outputPath = outputPath.slice(0,-3) + ".html"; // for output: path/filename.html
        console.log("files obtained!");
        console.log("in:"+inputPath)
        console.log("out:"+outputPath)
    
        var contentOfFile = fs.readFileSync(inputPath,'utf8'); // reading the file...
        var formattedContent = matter(contentOfFile); // uses gray-matter to seperate YAML and content
        console.log(formattedContent);
        console.log(formattedContent.data.title);
        //#region (var prependHtml; for each thing)
        console.log(i);
        if(i === 1){ // for blog posts
                var prependHtml = `    
    <!-- If this HTML looks sloppy... blame it on showdownjs. Or my unwillingless to actually clean this up.-->
    <html>
        <head>
            <link rel="stylesheet" href="../this is a stylesheet.css">
            <link rel="stylesheet" href="../special post stylesheet.css">
        </head>
        <body>
            <br>
            <span>
                <a href="../index.html" class="body" style="margin-right:0%;">andythepie.github.io</a>`+outputPath.slice(2)+`
            </span>
        <header style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 70%),url(`+ formattedContent.data.headerImage +`);background-size:cover;">
            <div>
                <h1>`+ formattedContent.data.title +`</h1>
                <p class="subtitle">`+ formattedContent.data.description +`</p>
            </div>
        </header>
        <div class="body">`;
        } else if(i===0) { // for project posts
            console.log(formattedContent.data.progress);
            var progressValue = (formattedContent.data.progress*100) + "%";
            console.log(progressValue);
            switch(formattedContent.data.status){
                case 'complete':    
                    var barColor = "rgba(182, 255, 178, 0.6)";
                    break;
                case 'wip':
                    var barColor = "rgba(151, 207, 232, 0.6)";
                    break;
                case 'planning':
                    var barColor = "rgba(220, 166, 255, 0.6)";
                    break;
                case 'onHold':
                    var barColor = "rgba(255, 241, 189, 0.6)";
                    break;
                case 'scrapped':
                    var barColor = "rgba(255, 153, 153, 0.6)";
                    break;
            } // :D
            var prependHtml = `    
            <!-- If this HTML looks sloppy... blame it on showdownjs. Or my unwillingless to actually clean this up.-->
            <html>
                <head>
                    <link rel="stylesheet" href="../this is a stylesheet.css">
                    <link rel="stylesheet" href="../special post stylesheet.css">
                </head>
                <body>
                    <br>
                    <span>
                        <a href="../index.html" class="body" style="margin-right:0%;">andythepie.github.io</a>`+outputPath.slice(2)+`
                    </span>
                <header style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 70%),url(`+ formattedContent.data.headerImage +`);background-size:cover;margin-bottom:-1.45em;">
                    <div>
                        <h1>`+ formattedContent.data.title +`</h1>
                        <p class="subtitle">`+ formattedContent.data.description +`</p>
                    </div>
                </header>
                <!-- progress bar -->
                <div style="background: linear-gradient(90deg, `+barColor+` 0%, `+barColor+" "+progressValue+`, rgba(0,0,0,0.5) `+progressValue+`, rgba(0,0,0,0.5) 100%);color: white;">
                    <p style="margin-top: 0%;text-align: center;">`+ progressValue +` complete</p>
                </div>
                <div class="body">`;    
        }
        //#endregion
        console.log(prependHtml);
        var htmlOutput = converter.makeHtml(formattedContent.content);
        htmlOutput = prependHtml + htmlOutput + appendHtml;
        fs.writeFileSync(outputPath,htmlOutput);
        console.log("converted file at " + inputPath + " to" + outputPath + "\n")
    });
};
