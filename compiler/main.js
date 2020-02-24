const matter = require('gray-matter');
const fs   = require('fs');
const showdown = require('showdown');
const converter = new showdown.Converter();
const path = ["projects/","blog/"] // the directories where the files generally are

//#region (basically the index.html template.)
const beforeCurrentProjects = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>andythepie.github.io</title>

    <link rel="stylesheet" href="this is a stylesheet.css">
    <script src="https://kit.fontawesome.com/04e2e57db2.js" crossorigin="anonymous"></script>
</head>
<body class="body">
    <img src="assets/XtriC.svg" title="hey look, it's my icon thing" alt="this is where my logo would go." style="margin-right:2em;width:auto;box-shadow: 0 0 0;">
    <h1 style="display:inline;">
        my name is <span class="accent">andy chan</span>
    </h1> <br>
    <div id="top-buttons"> <!-- buttons that open sections of my blog. woot. -->
        <a href="#" id="about-button"> /about</a> 
        <a href="#" id="projects-button">/projects</a> 
        <a href="#" id="blog-button">/blog</a>  
    </div>
    <script> // the code that actually does the display thing. coolio.
        document.getElementById("about-button").onclick = function() {
            document.getElementById("about").style.display = "block";
            document.getElementById("projects").style.display = "none";
            document.getElementById("blog").style.display = "none";
        }
        document.getElementById("projects-button").onclick = function() {
            document.getElementById("about").style.display = "none";
            document.getElementById("projects").style.display = "block";
            document.getElementById("blog").style.display = "none";
        }
        document.getElementById("blog-button").onclick = function() {
            document.getElementById("about").style.display = "none";
            document.getElementById("projects").style.display = "none";
            document.getElementById("blog").style.display = "block";
        }
    /* that was probably a horrible way to do this, 
    and i apologize to anyone actually taking the time to read the code.
    if this deeply offended you, know that i deeply respect you. kthx */
    </script>
    <div id="about" style="display:none;">
        <h1>/about</h1>
        <p class="subtitle">oh hello there!</p>
        <p>My name is Andy Chan, a self-described "wannabe stuff maker".</p>
        <p>Sometimes I make videos, sometimes I write code for programs, and sometimes other things happen. I don't know.</p>
        <p>On this website, you can find... some things. 
        Some projects under <code>/projects</code>, some ramblings under <code>/blog</code>, and... that's about it.
        If you want to torture yourself, you can also find the source code for this site<a class="coollink" href="https://github.com/AndyThePie/AndyThePie.github.io">here</a>(I am a very bad programmer).</p>
        <div id='media-buttons'>
            <h2>socials</h2>
            <p class="subtitle"> follow me in places</p>
            <div>
                <a href="https://twitter.com/andzcliv3">
                    <span class="fab fa-twitter"></span> 
                    @andzcliv3
                </a>
            </div>
            <div>
                <a href="https://youtube.com/andychanpineapples">
                    <span class="fab fa-youtube"></span>
                    andy chan
                </a> 
            </div>
            <div>
                <a href="https://github.com/andythepie">
                    <span class="fab fa-github-alt"></span>
                    andythepie
                </a>
            </div>
            <div>
                <a href="">
                    <span class="fab fa-discord"></span>
                    @andzcliv3#7664
                </a>
            </div>        
        </div>

    </div>
    <div id="projects" style="display:none;">
        <h1>/projects</h1>
        <p class="subtitle">the really big things that i played a major part in. mostly personal projects.</p>
        <h2>current projects</h2>
        <p class="subtitle">the things i'm working on now.</p>
        <div id="currentprojectlist">`

const beforePastProjects = `</div>
        <h2>previous projects</h2>
        <p class="subtitle">anything i've finished or scrapped.</p>
        <div id="pastprojectarray" style="display:flex;flex-wrap: wrap;justify-content: center;">`;
            
const beforeBlogPosts =        `</div>
    </div>
    <div id="blog" style="display:none;">
        <h1>/blog</h1>
        <p class="subtitle">word vomit and that's it</p>
        <div id="bloglist">`;

const endOfSite =         `</div>
    </div>
</body>
</html>`;
//#endregion

//#region (const appendHtml; used in all compilations)
const appendHtml = `
</div>
</body>
</html>`;
//#endregion
var blogIndex = '';
var previousProjectsIndex = '';
var currentProjectsIndex = '';
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
        </head>
        <body>
            <br>
            <span>
                <a href="../index.html" class="body" style="margin-right:0%;color:black;text-decoration:dotted underline;">andythepie.github.io</a>`+outputPath+`
            </span>
        <header style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 70%),url(`+ formattedContent.data.headerImage +`);background-size:cover;">
            <div>
                <h1>`+ formattedContent.data.title +`</h1>
                <p class="subtitle">`+ formattedContent.data.description +`</p>
            </div>
        </header>
        <div class="body">`; 
        // the above goes on the actual blog page. the below goes on index.html.
                blogIndex = `
                <a href="`+outputPath+`">
                    <div class='entry' style="background:linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 70%),url(`+formattedContent.data.headerImage+`)">
                        <p class="smol">`+formattedContent.data.date+`</p>
                         <h2>`+formattedContent.data.title+`</h2>
                       <p class='subtitle'>`+formattedContent.data.description+`</p>
                    </div>
                </a>
                ` + blogIndex;
        } else if(i===0) { // for project posts
            // tags!
            console.log(formattedContent.data.projectType);
            var tags = "";
            for(var t = 0;t < formattedContent.data.projectType.length;t++){
                    var tags = tags + `
                    <span style="margin-right: 1em;">`+formattedContent.data.projectType[t]+`</span>
                    `;
                }
            console.log(tags);
            var progressValue = Math.round((formattedContent.data.progress*1000))/10 + "%"; // number to percentage, rounded to nearest tenth
            console.log(progressValue);
            // status + progress bar colors
            var indexCurrentProject = function(){
                currentProjectsIndex = `
                <a href="`+outputPath+`" style="margin:0">
                    <div style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 70%),url(`+formattedContent.data.headerImage+`);color: white;">
                        <div style="padding: 1em 2em 0em;">
                            <p class="smol">`+formattedContent.data.endDate+`</p>
                            <h2>`+formattedContent.data.title+`</h2>
                            <p class="subtitle">`+formattedContent.data.description+`</p>
                            <div class='tags'>`+
                                tags+
                            `</div>
                    </div>
                    <div style="background: linear-gradient(90deg, `+barColor+` 0%, `+barColor+` `+ progressValue +`, rgba(0,0,0,0.5) `+ progressValue +`, rgba(0,0,0,0.5) 100%);">
                        <p style="text-align: center;">`+ progressValue +` complete`+ status +`</p>
                    </div></div>
                </a>
                ` + currentProjectsIndex
            }
            var indexPreviousProject = function(){
                previousProjectsIndex = `
                <a href="`+outputPath+`">
                    <div style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 70%),url(../assets/websitev4-header.jpg);color: white;width: 24vw;margin: 1em;">
                        <div style="padding: 1em;">
                            <p class="smol">`+formattedContent.data.endDate+`</p>
                            <h2>`+formattedContent.data.title+`</h2>
                            <p class="subtitle">cool description</p>
                        </div>
                        <div style="background: linear-gradient(90deg, `+barColor+` 0%, `+barColor+` `+ progressValue +`, rgba(0,0,0,0.5) `+ progressValue +`, rgba(0,0,0,0.5) 100%);">
                            <p style="text-align: center;margin:0">`+ progressValue +` complete`+ status +`</p>
                        </div>
                    </div>
                </a>
                ` + previousProjectsIndex
            }
            switch(formattedContent.data.status){
                case 'complete':    
                    var barColor = "rgba(182, 255, 178, 0.6)";
                    var status = "! :D";
                    indexPreviousProject();
                    break;
                case 'wip':
                    var barColor = "rgba(151, 207, 232, 0.6)";
                    var status = "";
                    indexCurrentProject();
                    break;
                case 'planning':
                    var barColor = "rgba(220, 166, 255, 0.6)";
                    var status = " [currently planning]";
                    indexCurrentProject();
                    break;
                case 'onHold':
                    var barColor = "rgba(255, 241, 189, 0.6)";
                    var status = " [currently on hold]";
                    indexCurrentProject();
                    break;
                case 'scrapped':
                    var barColor = "rgba(255, 153, 153, 0.6)";
                    var status = "... before being scrapped :(";
                    indexPreviousProject();
                    break;
            } // :D

            var prependHtml = `    
            <!-- If this HTML looks sloppy... blame it on showdownjs. Or my unwillingless to actually clean this up.-->
            <html>
                <head>
                    <link rel="stylesheet" href="../this is a stylesheet.css">
                </head>
                <body>
                    <br>
                    <span>
                        <a href="../index.html" class="body" style="margin-right:0%;color:black;text-decoration:dotted underline;">andythepie.github.io</a>`+outputPath+`
                    </span>
                <header style="background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0) 70%),url(`+ formattedContent.data.headerImage +`);background-size:cover;margin-bottom:-1.45em;">
                    <div>
                        <p>started `+formattedContent.data.startDate+`, finished `+formattedContent.data.endDate+`</p>
                        <h1>`+ formattedContent.data.title +`</h1>
                        <p class="subtitle">`+ formattedContent.data.description +`</p>
                    </div>
                    <div class="tags">
                    `+tags+`
                    </div>
                </header>
                <!-- progress bar -->
                <div style="background: linear-gradient(90deg, `+barColor+` 0%, `+barColor+" "+progressValue+`, rgba(0,0,0,0.5) `+progressValue+`, rgba(0,0,0,0.5) 100%);color: white;">
                    <p style="margin-top: 0%;text-align: center;">`+ progressValue +` complete`+ status +`</p>
                </div>
                <div class="body">`;    
        }
        //#endregion
        console.log(prependHtml);
        var htmlOutput = converter.makeHtml(formattedContent.content);
        htmlOutput = prependHtml + htmlOutput + appendHtml;
        fs.writeFileSync(outputPath,htmlOutput);
        console.log("converted file at " + inputPath + " to" + outputPath + "\n")
        console.log("compiling index.html...");
        var index = beforeCurrentProjects + currentProjectsIndex + beforePastProjects + previousProjectsIndex + beforeBlogPosts + blogIndex + endOfSite;
        fs.writeFileSync("index.html",index);
        console.log("done?");

    });
};
