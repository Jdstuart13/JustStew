import React from 'react';
import ReactDOM from 'react-dom';
import questromStudyAbroad from './studentBlog.PNG';
import logo from './logo.svg';
import tools from './QuestromTools.PNG';
import dataMining from './dataMining.png';
import ClassRoomTech from './ClassroomTech.jpg';
import js from './Javascript.png';
import genzyme from './genzyme.jpg';
import css from './css3.png';
import HTML from './HTML.png';
import Stata from './stata.jpg';
import SQL from './SQL.png';
import Python from './Python.png';
import react from './react.png';
import headphones from './headphones.jpg'


var tree =[
                         //render Array ID
      {name:"Projects",               //0
       parent: "None",
       type:"Cloud",
       class: "Projects"
       
      },
        {name:"About Me",              //1
        parent: "None",
        type:"Cloud",
        class: "About"
      },
       {
        name:"Skills",                 //2
        parent: "None",
         type:"Gallery",
        class: "Skills",
        gallery:
           [<img src = {HTML}></img>,<img src={css}></img>,<img src={js}></img>,<img src ={react}></img>,<img src={SQL}></img>,<img src={Python}></img>],
        
      },
         {
        name:"Experience",             //3
        parent: "None",
         type:"Cloud",
        class: "Experience"
        
      },
         
      {
        name:"Questrom Study Abroad",  //4
        parent: "Projects",
        type:"story",
        class: "Projects",
        column1:

          <div>
             <h2> The Issue </h2>
<p> The Questrom Study Abroad site was set up on an outdated theme in WordPress. The sites owner with the Undergraduate Development Center 
wanted the site moved to the new theme and get a face lift in the process.</p>
<h2> Key Considerations </h2>
<ul>
<li>The design has to be adventurous (pun intended)</li>
<li>It had to contain a sortable blog</li>
<li>The site has to contain a quiz application</li>
<li>The site must be easily usable by all staff</li>
</ul>
<h2>Solution</h2>
<ul>
    <li> Background used images from students abroad which were edited in photoshop to not dominate content</li>
    <li> Blog was contructed using a mosiac feature with tags</li>
    <li> The quiz was pulled from a plugin </li>
    <li> The site was set up so content that required frequent updates could be done without code for easy maintence</li>
</ul>
</div>,
    column2:          

<a href="http://questromworld.bu.edu/studyabroad/blog/">
 <img src= {questromStudyAbroad}></img>
</a>
 ,
          
        
      },
         {
        name:"Questrom Tools",         //5
        parent: "Projects",
        type:"story",
        class: "Projects", 
        column1:
          <div>
             <h2> The Issue </h2>
<p> The Questrom Tools Front page aims to provide a quick news page for students logging in to view their classes. However, the current javascript app only displays one image at a time and thus does not efficiently deliver content.</p>
<h2> Key Considerations </h2>
<ul>
<li>The application must read news posters from the eSignage API</li>
<li>The design must support posters of various color scheme and size (A LOT of white or black)</li>
<li>The application must allow for content to cycle, but still be seen</li>
<li>Tthe design must meet questrom design standards</li>
</ul>
<h2>Solution (In Developement)</h2>
<ul>
    <li> The background used white with minimal questrom teal provide a non-obstrusive background</li>
    <li> The application stores the api images in an array of urls which is called upon when the images are about to be inserted into the DOM</li>
    <li> Uses slow moving images to attract attention and allow for images to cycle in and out of the appication </li>
    <li> The site implements a pause and zoom on-click function to allow for a closer look at interesting content </li>
</ul>
</div>,
    column2:          
    
 <img src= {tools}></img>,
         },
         {
        name:"This Site",              //6
        parent: "Projects",
        type:"story",
        class: "Projects",
          column1:
          <div>
             <h2> The Issue </h2>
<p> The first assignment for a Web Applications Development course I took at Boston University was to handcode a website. I decided, as I already knew HTML/CSS/JS, I would try something new and learn react.js</p>
<h2> Key Considerations </h2>
<ul>
<li>Must be built using react.js</li>
<li>The WebPage, in the words of Proffessor Chen, must "look good" </li>
<li> The site should feel easy and comfortable to navigate</li>
<li>I wanted the website to be as easy maintain as possible.</li>
</ul>
<h2>Solution (In Developement)</h2>
<ul>
    <li> The sites imagery was edited using illustrator and photoshop</li>
    <li> The color scheme is derived from the background image. I pulled some colors from it and others from the compliments of these colors</li>
    <li> The application uses react states to manage which content is visible, eliminating the need for scrolling and keeping content on one page</li>
    <li> Using React compotents allows for me to make templates (components) for different kinds of content, eliminating repititive coding </li>
</ul>
</div>,
    column2:          
 
 <img src= {logo}></img>,
             
      },
    {name:"Books I've Read 3+ Times",                //8
        parent: "About Me",
        type:"story",
        class: "About  ",
        column1: 
        <div>
        
        </div>
      },
    {name:"Music I'll Admit I Listen To",                //8
        parent: "About Me",
        type:"story",
        class: "About  ",
        column1: 
         <iframe src="https://open.spotify.com/embed/user/1218194513/playlist/1RJ1izsVDYxyRwh3dMe4Jh" width="300px" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      },
        {name:"Questrom: Front-End Developement",
     parent:"Experience",
     type:"story",
     class:"Experience",
     column1:<div>
         <h2>Front-End Developement Intern</h2>
         <p><b>Boston Unversity</b>, Boston Massachussets </p>
         <i>  January 2017 - Present</i>
         <h2>Desciption</h2>
         <ul>
         <li> Hand code mock-ups for sites using HTML, CSS, and Javascript </li>
         <li>Program Javascript Applications to work incontext with APIs</li>
         <li>Use Photoshop and Illustrator to design imagery for sites</li>
         <li>Design and teach basic HTML and CSS workshops for students with no prior experience</li>
         </ul>
         </div>,
     column2:
      <img src = {js}></img>
         },
    {name:"Questrom: Teaching Assistant",
     parent:"Experience",
     type:"story",
     class:"Experience",
     column1:<div>
         <h2>Qaulitative Methods Teaching Assistant</h2>
         <p><b>Boston Unversity</b>, Boston Massachussets </p>
         <i>  September 2017 - December 2017</i>
         <h2>Desciption</h2>
         <ul>
         <li>Covers research methods, significance testing, multiple regression modeling, and correlations</li>
<li>Teach students data analytics functions related to the course in excel and in Stata as well as visualization techniques such as graphs and pivot tables</li>
 <li>Assist students with cleaning data and merging data sets in Excel and Stata</li>
 <li>Assist students in conducting independent research and constructing a data driven final report.
 </li>
         </ul>
         </div>,
    column2:
     <img src={dataMining}></img>
         },
     {name:"Sanofi, ITS Service Delivery: Databases",
     parent:"Experience",
     type:"story",
     class:"Experience",
     column1:<div>
         <h2>Front-End Developement Intern</h2>
         <p><b>Boston Unversity</b>, Boston Massachussets </p>
         <i>  May 2017- August 2017</i>
         <h2>Desciption</h2>
         <ul>
          <li>Participated on a team of 10 other interns to produce a multipage inward facing site for the RDP program. Used color theory and process flow diagrams to improve user experience.</li>
         <li>Merged three databases into one database containing information on over 160,000 assets</li>
         <li>Ran Queries for management using Access Interface and SQL ranging from computer age, encryption software, cyberattack vulnerability, to asset ownership</li>
         <li>Assisted managing onboarding by researching and creating an operations report to improve the accuracy of the IT portion of the onboarding process</li>

         </ul>
         </div>,
         column2:
     <img src={genzyme}></img>
         },
          {name:"Questrom: ITS Consultant Intern",
     parent:"Experience",
     type:"story",
     class:"Experience",
     column1:<div>
         <h2>Information Technology Consultant Itern</h2>
         <p><b>Boston Unversity</b>, Boston Massachussets </p>
         <i>  September 2016-May 2017</i>
         <h2>Desciption</h2>
         <ul>
         <li> Uses techniques such as parallax, color theory and the Golden Ratio to design and implement attractive and functional sites via WordPress. Projects include the Questrom Study Abroad site.</li>
         <li>Operate Zoom Virtual Classroom for the executive MBA program during remote seminars</li>
         <li>Designed, updated and ran beginner and advanced Stata workshops for MBA and undergraduate students. Workshops occurred 5 times per semester.</li>
         </ul>
         </div>,
   
      column2:
     <img src={ClassRoomTech}></img>
         },
     {name: "Contact Me",
      parent:"About Me",
      type:"story",
    class:"About",
      column1:
      <div>
      <h1>jdstuart@bu.edu</h1>
    </div>,
    },
    
       ];
export {tree };
