(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i.n(s),r=i(12),n=i.n(r),o=i(4),c=[{title:"Github",icon:"img/icons/github.svg",url:"https://github.com/JoseMiralles"},{title:"StackOverflow",icon:"img/icons/stackoverflow.svg",url:"https://stackoverflow.com/users/2895137/jose-miralles"},{title:"CodePen",icon:"img/icons/codepen.svg",url:"https://codepen.io/JoseGMiralles/pens/showcase"}],l=(i(20),i(1));function d(){var e=c.map((function(e,t){return Object(l.jsx)("a",{href:e.url,target:"blank",className:"footer-link",children:e.title})}));return Object(l.jsx)("div",{className:"footer",children:e})}i(22),i(23);function u(){var e=c.map((function(e,t){return Object(l.jsx)("a",{target:"blank",href:e.url,title:e.title,children:Object(l.jsx)("img",{src:e.icon})},t)}));return Object(l.jsx)("div",{className:"icon-links",children:e})}var h=function(){return Object(l.jsxs)("div",{id:"hero-section",className:"center column",children:[Object(l.jsx)("h1",{id:"hero-title",children:"Jose Miralles"}),Object(l.jsx)(u,{}),Object(l.jsx)("div",{id:"hero-jobtitle",children:"Systems Engineer"}),Object(l.jsx)("div",{id:"hero-company",children:"Bank of America"})]})},p=(i(24),[{title:"Completed Projects",description:"Some of my finished projects.",projects:[{name:"CHAOS VR",description:"A web VR game built using Three.js and JavaScript. Optimized to run on Quest. VR headset required.",images:["/img/chaos_vr.gif"],YTVideos:["https://www.youtube.com/embed/sgtoEU0PioA","https://www.youtube.com/embed/KXy4ktaRr2o"],highlights:[{text:"Created asset pools to recycle actors such as enemies, projectiles, and sounds.",url:"https://github.com/JoseMiralles/Chaos-VR/blob/9cda4fc5c56e392c9530317b46c4c70ed2c36442/src/scripts/enemy_spawner.js#L87"},{text:"Simulated physics manually inside tick() functions without a physics engine.",url:"https://github.com/JoseMiralles/Chaos-VR/blob/main/src/scripts/enemy_robot.js#L171"},{text:"Modeled all assets using Blender.",url:"https://github.com/JoseMiralles/Chaos-VR#using-a-single-gltf-file-for-all-3d-assets"}],links:[{title:"Game",url:"https://josem.dev/Chaos-VR/"},{title:"Gameplay Videos",url:"https://www.youtube.com/playlist?list=PLghWRYpL5zyWu1HgNfVpOLBVNuiOC8svX"},{title:"GitHub",url:"https://github.com/JoseMiralles/Chaos-VR"}],technologies:["JavaScript","ThreeJS","Blender","Webpack","VR"]},{name:"TS Test Generator",description:"A CLI test generator wich creates a set of typescript problems and Jasmine.js tests from a popular curated list of 75 leetcode problems to facilitate learning algorithms and data structures.",images:["/img/ts_test_gen.jpg"],highlights:[{text:"Built generator with TypeScript and Node.",url:"https://github.com/JoseMiralles/CuratedListTestGenerator/blob/main/generator.ts#L25"},{text:"Wrote all Jasmine tests using TypeScript.",url:"https://github.com/JoseMiralles/CuratedListTestGenerator/blob/main/data/spec/linkedList.spec.ts"}],links:[{title:"GitHub",url:"https://github.com/JoseMiralles/CuratedListTestGenerator#curatedlisttestgenerator"}],technologies:["TypeScript","Node","Jasmine","Unit-Tests"]},{name:"Run Chart",description:"A React app that allows users to plan, share, and search for running routes.",images:["/img/runchart.png","/img/runchart1.png","/img/runchart2.png","/img/runchart3.png"],highlights:[{text:"Built CRUD API using Rails and PostgreSQL including an index route to filter routes by keywords and map view bounds.",url:"https://github.com/JoseMiralles/RunChart/blob/main/app/controllers/api/routes_controller.rb"},{text:"Used the Google Maps API to implement a React component which allows users to create or edit running routes, as well as components to view routes and to find routes using an interactive map.",url:"https://github.com/JoseMiralles/RunChart/blob/main/frontend/components/route_builder/route_builder.jsx"},{text:"Utilized the Google Maps Geometry library to encode and decode running routes to and from strings to facilitate storage in a SQL database.",url:"https://github.com/JoseMiralles/RunChart/blob/main/frontend/components/route_builder/route_builder.jsx"}],links:[{title:"Live Site",url:"https://run-chart.herokuapp.com/#/"},{title:"GitHub",url:"https://github.com/JoseMiralles/RunChart/"}],technologies:["React","Redux","JavaScript","SQL","API","REST","Ruby","Rails","SCSS","Asynchronous","CSS","CRUD"]},{name:"Minesweeper App",description:"A Minesweeper mobile app made with React Native and Typescript.",links:[{title:"Try with Expo",url:"https://expo.dev/@josemiralles/minesweeper"},{title:"GitHub",url:"https://github.com/JoseMiralles/Minesweeper-React-Native"}],technologies:["React-Native","TypeScript","Recoil","React","iOS","Android","Mobile-Development","JavaScript"],images:["/img/mine1.png","/img/mine2.png"]},{name:"Eurolamy Website",description:"Created site using React and three.js",images:["/img/eurolamy/logo.png","/img/eurolamy/screenshot.png","/img/eurolamy/blender.png"],highlights:[{text:"Used three.js to render and animate background 3d wireframe scene.",url:"https://github.com/JoseMiralles/Eurolamy/blob/master/src/components/Top3DScene.tsx"},{text:"Used mouse and device orientation events to control the position of the 3d scene camera.",url:"https://github.com/JoseMiralles/Eurolamy/blob/master/src/components/Top3DScene.tsx#L82"},{text:"Use Blender to model 3d assets."}],links:[{title:"Live Site",url:"https://eurolamy.com/"},{title:"GitHub",url:"https://github.com/JoseMiralles/Eurolamy"}],technologies:["TypeScript","ThreeJS","React","SCSS","Blender","CSS","JavaScript"]},{name:"Location Score",description:"A Node.js app that merges different datasets into a single one, and also assings a score to each datapoint. The goal is to make it easier to find an optimal location to open a new office based on a few metrics.",technologies:["TypeScript","Node","JavaScript"],highlights:[{text:"Implemented 4 methods to parse each file, to then return a dictionary like object were each key is a county code, and each value an object with a metric, and a coefficient score.",url:"https://github.com/JoseMiralles/LocationScore/blob/master/src/DataLoaders.ts#L18"},{text:"Implemented a method that merges all of the dictionaries into a single array which contains relevant metrics, as well as a newly generated aggregate scores for each location.",url:"https://github.com/JoseMiralles/LocationScore/blob/master/src/DataLoaders.ts#L216"}],links:[],images:["/img/locationscore/graph.png","/img/locationscore/output.png"]},{name:"Gifaroo",description:"A mobile app that allowed users to fetch, edit, and export gifs from any website.",images:["/img/gifaroo1.jpg","/img/gifaroo.png","/img/gifaroo2.jpg","/img/gifaroo3.jpg","/img/gifaroo4.jpg","/img/gifaroo5.jpg"],highlights:[{text:"Built with C#/.NET and Xamarin.Android."},{text:"Created Java Bindings libraries to call existing Java libraries from C#."},{text:"Implemented Google play in-app purchasing.",url:"https://github.com/JoseMiralles/GifarooApp/blob/master/Gifaroo.Android/Classes/PremiumInterface.cs"},{text:"Used FFMPEG to process gifs",url:"https://github.com/JoseMiralles/GifarooApp/blob/master/Gifaroo.Android/SaveActivity.cs"}],links:[{title:"GitHub",url:"https://github.com/JoseMiralles/GifarooApp/"}],technologies:["Xamarin","C#","DotNet","Mobile-Development","Android"]}]},{title:"Other Projects",description:"Projects that are small, unfinished, or unpublished. And were created for the purpose of learning.",projects:[{name:"InTalk",description:"A Discord style app that I decided to build after reading 'ASP.NET Core 5 and React' by Carl Rippon. It includes a custom identity provider built with ASP.net.",highlights:[{text:"Frontend built using React, TypeScript, and Redux."},{text:"Backend built using ASP.NET, PostgreSQL, SignalR, and Entity Framework."},{text:"Custom identity provider built using ASP.net and C#.",url:"https://github.com/JoseMiralles/InTalk/blob/main/backend/Controllers/AuthManagmentController.cs"},{text:"Handled JWTs and Refresh Tokens in the front end by using Axios middleware.",url:"https://github.com/JoseMiralles/InTalk/blob/main/frontend/src/Util/SessionUtil.ts"},{text:"Implemented realtime chat rooms / servers using SignalR Hub in the back end.",url:"https://github.com/JoseMiralles/InTalk/blob/main/backend/Hub/InTalkHub.cs"},{text:"Handled front-end real time connectivity using custom Redux middleware.",url:"https://github.com/JoseMiralles/InTalk/blob/main/frontend/src/Middleware/SignalRMiddleware.ts"},{text:"Created API unit tests.",url:"https://github.com/JoseMiralles/InTalk/blob/main/api-tests/ServerApiTests.cs"},{text:"Used dependency injection to separate data access from controllers by using repositories.",url:"https://github.com/JoseMiralles/InTalk/blob/main/backend/Data/ServerRepository.cs"}],links:[{title:"Github repo",url:"https://github.com/JoseMiralles/InTalk"}],technologies:["React","Redux","TypeScript","ASP","C#","SQL","Postgress","Custom-Redux-Middleware","SignalR","JWT","Refresh Tokens","Identity Provider","HTML","CSS","SCSS","Asynchronous","JavaScript","Unit-Tests"]},{name:"Splunk React Dashboard App",description:"A React app that can run in a Splunk dashboard. Built using Typescript and Redux.",highlights:[{text:"Modified Webpack to output a single bundle.js file as required by Splunk."},{text:"Created asynchronous method wich requests an SPL search from Splunk",url:"https://github.com/JoseMiralles/Splunk-React-TypeScript-Demo/blob/main/appserver/static/client/src/util/searchUtil.ts#L24"}],YTVideos:["https://www.youtube.com/embed/gPja51_O0Z4"],links:[{title:"Video Demo",url:"https://www.youtube.com/watch?v=gPja51_O0Z4&t=12s"}],technologies:["React","TypeScript","Redux","Webpack","SCSS","Asynchronous"]},{name:"Instavel",description:"Instagram clone built using Laravel, PHP, and SQL.",links:[{title:"GitHub",url:"https://github.com/JoseMiralles/Instavel"}],images:["/img/instavel/logo.png"],technologies:["PHP","Laravel","API","REST","CSS","JavaScript"],highlights:[{text:"Followed the MVC design pattern."},{text:"Followed RESTful routing to perform CRUD operations on an SQL database."},{text:"Used Bootstrap and flexbox for styling"}]}]}]),m={};p.forEach((function(e){e.projects.forEach((function(e){m[e.name]=e}))}));var b=i(3),g=(i(25),function(e){var t=e.url;return Object(l.jsx)("iframe",{width:"560",height:"315",src:t,title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),j=function(e){var t=e.YTVideos,i=e.images,a=Object(s.useState)(),r=Object(b.a)(a,2),n=r[0],o=r[1],c=Object(s.useState)(0),d=Object(b.a)(c,2),u=d[0],h=d[1];Object(s.useEffect)((function(){var e=[];t&&t.forEach((function(t,i){e.push({type:"YTVIDEO",url:t})})),i&&i.forEach((function(t,i){e.push({type:"IMAGE",url:t})})),o(e)}),[]);var p=n?n.map((function(e,t){switch(e.type){case"YTVIDEO":return Object(l.jsx)(g,{url:e.url},t);case"IMAGE":return Object(l.jsx)("img",{src:e.url},t)}})):[Object(l.jsx)("span",{})],m=n?n.map((function(e,t){var i="";switch(e.type){case"YTVIDEO":i="/img/yticon.png";break;case"IMAGE":i=e.url}return Object(l.jsx)("img",{className:"thumbnail",src:i,"data-index":t},t)})):[Object(l.jsx)("span",{})];return Object(l.jsxs)("div",{className:"slideshow",children:[p[u],m.length>1&&Object(l.jsx)("div",{onClick:function(e){var t=e.target.getAttribute("data-index");t&&h(t)},className:"thumbnails",children:m})]})},f=function(){var e=Object(o.f)(),t=Object(o.g)().projectName;if(!t)return Object(l.jsx)("span",{});var i=m[t];if(!i)return Object(l.jsx)("span",{});return Object(l.jsx)("div",{className:"modal-wrapper",children:void 0!==i?Object(l.jsx)("div",{onClick:function(t){"close-modal"===t.target.getAttribute("click-action")&&e("/")},className:"modal-background","click-action":"close-modal",children:Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"close-modal-button","click-action":"close-modal",children:"X"}),Object(l.jsx)("div",{id:"modal-title",children:Object(l.jsx)("h1",{children:i.name})}),Object(l.jsx)(j,{YTVideos:i.YTVideos,images:i.images}),Object(l.jsx)("div",{className:"tech-list",children:i.technologies.map((function(e,t){return Object(l.jsx)("div",{className:"tech-item",children:e},t)}))}),Object(l.jsx)("p",{className:"project-description",children:i.description}),Object(l.jsx)("div",{className:"project-links",children:i.links.map((function(e,t){return Object(l.jsx)("a",{href:e.url,target:"_blank",children:e.title},t)}))}),i.highlights&&Object(l.jsx)("ul",{className:"highlights",children:i.highlights.map((function(e,t){return Object(l.jsx)("li",{children:e.url?Object(l.jsx)("a",{target:"_blank",href:e.url,children:e.text}):e.text},t)}))})]})}):""})},x=i(7),v=i(6),O=(Object(v.b)({key:"modalState",default:""}),Object(v.b)({key:"techFiltersState",default:[]})),S=(i(26),function(e){var t=e.technologies,i=Object(v.c)(O),s=Object(b.a)(i,2),a=s[0],r=s[1],n=t.map((function(e,t){var i=a.includes(e)?"selected":"";return Object(l.jsx)("div",{className:"tech "+i,children:e},t)}));return Object(l.jsxs)("div",{id:"tech-list",onClick:function(e){var t=e.target.innerHTML;a.includes(t)?r(a.filter((function(e){return e!==t}))):r(a.concat([t]))},children:[Object(l.jsx)("div",{id:"sort-text",children:"Sort:"}),n]})}),y=function(e){var t=e.pl,i=Object(v.d)(O),s=new Set;t.projects.forEach((function(e){var t=0;e.technologies.forEach((function(e){s.add(e),i.includes(e)&&t++})),e.techMatchRating=t}));return Object(l.jsxs)("div",{className:"project-section",children:[t.description&&Object(l.jsx)("div",{className:"p-list-description-wrapper",children:Object(l.jsx)("div",{className:"p-list-description",children:t.description})}),Object(l.jsx)(S,{technologies:Array.from(s).sort((function(e,t){var s=i.includes(e)?1:-1;return(i.includes(t)?1:-1)-s}))}),Object(l.jsx)("div",{className:"project-list",children:t.projects.sort((function(e,t){var s,a;return i.length<1?0:(null!==(s=e.techMatchRating)&&void 0!==s?s:0)>=(null!==(a=t.techMatchRating)&&void 0!==a?a:0)?-1:1})).map((function(e,t){return Object(l.jsxs)(x.b,{to:"project/".concat(e.name),"data-index":e.name,className:"project-item-card",children:[void 0!==e.techMatchRating&&e.techMatchRating>0&&Object(l.jsx)("span",{className:"rating",children:"matches: "+e.techMatchRating}),e.images&&e.images[0]&&Object(l.jsx)("img",{className:"project-card-image",src:e.images[0]}),Object(l.jsxs)("div",{className:"project-card-info",children:[Object(l.jsxs)("div",{className:"project-top-bar",children:[Object(l.jsx)("span",{className:"project-name",children:e.name}),e.technologies.map((function(e,t){return Object(l.jsx)("span",{className:"tech-pill",children:e},t)}))]}),Object(l.jsx)("div",{className:"project-description",children:e.description})]}),Object(l.jsx)("div",{"data-index":e.name,className:"foreground-gradient"})]},t)}))})]})},w=(i(27),function(){var e=Object(s.useState)(p[0].title),t=Object(b.a)(e,2),i=t[0],a=t[1],r=p.find((function(e){return e.title===i}));return Object(l.jsxs)("div",{id:"projects-section",className:"center",children:[Object(l.jsx)("div",{className:"tabs",children:p.map((function(e,t){return Object(l.jsx)("div",{onClick:(s=e.title,function(){a(s)}),className:"tab ".concat(i===e.title?"selected":""),children:e.title},t);var s}))}),r&&Object(l.jsx)(y,{pl:r})]})});var k=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o.c,{children:Object(l.jsx)(o.a,{path:"project/:projectName",element:Object(l.jsx)(f,{})})}),Object(l.jsx)(h,{}),Object(l.jsx)(w,{}),Object(l.jsx)(d,{})]})};i(28),i(29);n.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v.a,{children:Object(l.jsx)(x.a,{children:Object(l.jsx)(k,{})})})}))}},[[30,1,2]]]);
//# sourceMappingURL=main.40238022.chunk.js.map