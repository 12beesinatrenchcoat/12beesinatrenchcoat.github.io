using System;
using Markdig;

namespace compiler
{
    class Program
    {
        
        static void Main(string[] args)
        {
            string thing = System.IO.File.ReadAllText("../blog/md/02.20.2020 - a first post.md");
            // Finally writing the contents to a file...
            System.IO.File.WriteAllText("../blog/thing.html",Markdig.Markdown.ToHtml(thing));
            Console.WriteLine("hey, it maybe worked!");
            
        }
    }
}
