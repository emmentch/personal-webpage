#pragma checksum "C:\Users\emmen\source\repos\ElijahsPortfolioWebsite\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "91a3dc6bf77905c35280bbba492f61b192560e42"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(ElijahsPortfolioWebsite.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
namespace ElijahsPortfolioWebsite.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\emmen\source\repos\ElijahsPortfolioWebsite\Pages\_ViewImports.cshtml"
using ElijahsPortfolioWebsite;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"91a3dc6bf77905c35280bbba492f61b192560e42", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"baabedddb73ccfff57ac5a6827a954ec77ec9c92", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "C:\Users\emmen\source\repos\ElijahsPortfolioWebsite\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"<h1 class=""display-4 text-center mb-3"">Welcome to my page</h1>
<div class=""card mb-3"">
    <h2 class=""card-header"">About Me</h2>
    
    <p class=""card-body"">
        <img src=""images/uwlogo.PNG"" alt=""Image of UW logo"" class=""img-fluid float-left rounded border border-dark mr-2"" style=""width:30vmin; height:auto;"">
        My name is Elijah Mentch, and I am a recent graduate from University of
        Wisconsin-Madison with a major in Computer Science and a minor in Physics. 
        I have programming experience in Java, JS, C, and Python
        through my undergrad. I am a Software Developer
        in the greater Milwaukee Area. This website
        has been built in order to begin to document some of my coding projects and also includes links to my
        LinkedIn and GitHub. Most importantly it showcases that I enjoy learning to code and practicing my skills.
        <br /><br />
        My main current area of interest is the Microsoft stack, such as learning C#,.NET Core, ASP.NET Core, ");
            WriteLiteral(@"and Azure.
        On the side, I also have been improving my HTML/CSS/JavaScript by reading material on the first two, learning 
        Bootstrap, as well as better understanding ES6 additions/features. The end goal for all of this is to start 
        learning React.
    </p>

</div>
<div class=""card-deck mb-3"">
    <div class=""card"">
        <h2 class=""card-header"">Skills</h2>
        <ul class=""card-body ml-2"">
            <li><b>Languages: </b>C#, Java, Python, JavaScript/CSS/HTML, SQL, C</li>
            <li><b>Platforms: </b>Windows 10, Linux/Ubuntu</li>
            <li><b>Technologies: </b>Azure, Git, Bash</li>
            <li><b>Frameworks/Libraries: </b>Spring Boot, Angular, ASP.NET Core, .NET 5.0, Bootstrap, sqlite3</li>
            <li><b>Soft Skills: </b>Goal Oriented, Self-Learner, Analytically Driven, Verbal and Written Communication</li>
            <li>Well-versed in applications/programming langauges</li>
            <li>Reliable and positive team-player</li>
            <");
            WriteLiteral(@"li>Enthusiastic, self-driven, fast-learner</li>
            <li>Analytically-oriented and observant</li>
        </ul>
    </div>

    <div class=""card"">
        <h2 class=""card-header""><a target=""_blank"" rel=""noopener noreferrer"" href=""https://guide.wisc.edu/courses/comp_sci/"">Relevant Coursework</a></h2>
        <ul class=""card-body ml-2"">
            <li>Introduction to Networks</li>
            <li>Introduction to Operating Systems</li>
            <li>Introduction to Compilers</li>
            <li>Computer Graphics</li>
            <li>Machine Organization and Programming</li>
            <li>Introduction to Algorithms</li>
            <li>Introduction to Artificial Intelligence</li>
            <li>Introduction to Information Security</li>
        </ul>
    </div>
</div>
");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
