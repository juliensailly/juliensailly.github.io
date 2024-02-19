import{_ as f}from"./project-card-component-OTDLrUfh.js";import{t as s,r as x,o,c as a,a as e,b as r,u as t,F as u,d as m,e as b,f as d,w,g as v,h as k}from"./index--yl4veMa.js";import{i as $}from"./index-uDkZO-2W.js";import{_}from"./markdown-converter-component-AY9cVTg4.js";const y={class:"flex flex-col gap-4 p-4 md:p-8"},j={class:"mb-2 text-3xl font-sans font-semibold"},L={class:"flex flex-col md:flex-row gap-4"},M=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})],-1),B={__name:"project-selection-component",setup(g){const n=s.fr.pages.homepage.projects.map(p=>s.fr.pages.projects.values[p]);return(p,h)=>{const l=x("router-link");return o(),a("section",y,[e("h2",j,r(t(s).fr.pages.homepage.projectsTitle),1),e("div",L,[(o(!0),a(u,null,m(t(n),c=>(o(),b(f,{key:c.id,project:c,class:"flex-1"},null,8,["project"]))),128))]),d(l,{to:"/projects",class:"flex items-center justify-center flex-1 gap-2 px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-blue-400 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg"},{default:w(()=>[e("p",null,r(t(s).fr.pages.homepage.projectsViewMore),1),M]),_:1})])}}},H={class:"flex flex-col gap-4 p-4 md:p-8"},A={class:"mb-2 text-3xl font-sans font-semibold"},C={class:"flex flex-col gap-2 md:gap-4"},V={class:"p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl"},D={class:"mb-2 md:mb-4 text-xl font-sans font-semibold"},E={class:"flex flex-col md:flex-row gap-2 md:gap-4 items-stretch"},I={id:"hard-skills-tab","data-tabs-toggle":"#hard-skills-tab-content",role:"tablist",class:"flex flex-row flex-wrap md:flex-col gap-2 md:gap-4 text-sm font-medium text-gray-900 dark:text-gray-400"},N=["aria-selected","data-tabs-target"],S=["src","alt"],F={class:"text-start"},T=e("div",{class:"flex-[40%] hidden xs:block"},null,-1),q={id:"hard-skills-tab-content",class:"flex-1 bg-blue-500 dark:bg-blue-400 rounded-lg"},J=["id"],K=["href"],U=["src","alt"],Z={class:"pt-2 border-t border-blue-700 w-full text-center"},R={class:"flex flex-col md:flex-row justify-between gap-2 md:gap-4"},W={class:"flex-1 p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl"},Y={class:"mb-2 md:mb-4 text-xl font-sans font-semibold"},z={class:"flex flex-wrap gap-2"},G={class:"flex-1 p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl"},O={class:"mb-2 md:mb-4 text-xl font-sans font-semibold"},P={class:"flex flex-wrap gap-2"},Q={__name:"skills-component",setup(g){const i=s.fr.pages.homepage.skills.hard.list;var n={};return i.forEach(p=>{p.id=p.title.replaceAll(" ","-").replaceAll("é","e").toLowerCase(),p.list.forEach(h=>{n[h]=s.fr.assets.technologies[h]})}),v(()=>{$()}),(p,h)=>(o(),a("section",H,[e("h2",A,r(t(s).fr.pages.homepage.skillsTitle),1),e("div",C,[e("div",V,[e("h3",D,r(t(s).fr.pages.homepage.skills.hard.title),1),e("div",E,[e("ul",I,[(o(!0),a(u,null,m(t(i),l=>(o(),a("li",{key:l.id,class:"flex-1 min-w-[170px] xs:min-w-0 xs:flex-[40%] flex md:flex-none"},[e("button",{"aria-selected":l.id===t(i)[0].id,"data-tabs-target":"#"+l.id,type:"button",role:"tab",class:"inline-flex items-center px-4 py-3 bg-blue-700 hover:bg-blue-600 hover:text-gray-900 dark:text-gray-900 text-gray-900 rounded-lg active w-full dark:bg-blue-600 dark:hover:bg-blue-500 aria-selected:bg-blue-500 aria-selected:md:translate-x-7 aria-selected:md:rounded-r-none transition-all duration-200 aria-selected:hover:bg-blue-500 aria-selected:hover:text-gray-900 hover:dark:text-gray-900 aria-selected:dark:bg-blue-400 aria-selected:dark:hover:bg-blue-400 aria-selected:dark:hover:text-gray-900"},[e("img",{src:l.iconURL,alt:l.title+" illustration icon",class:"w-4 h-4 me-2"},null,8,S),e("p",F,r(l.title),1)],8,N)]))),128)),T]),e("div",q,[(o(!0),a(u,null,m(t(i),l=>(o(),a("div",{role:"tabpanel",id:l.id,key:l.id,class:"grid grid-cols-[repeat(auto-fit,minmax(auto,150px))] gap-4 justify-around p-6 mx-auto text-medium text-gray-700 w-full"},[(o(!0),a(u,null,m(l.list,c=>(o(),a("div",{class:"flex-1 flex bg-white-500 p-4 rounded shadow-lg min-w-28",key:c},[e("a",{href:t(n)[c].url,class:"flex-1 flex flex-col items-center justify-between gap-4",target:"_blank"},[e("img",{src:t(n)[c].src,alt:t(n)[c].title+" icon",class:"flex-1"},null,8,U),e("p",Z,r(t(n)[c].title),1)],8,K)]))),128))],8,J))),128))])])]),e("div",R,[e("div",W,[e("h3",Y,r(t(s).fr.pages.homepage.skills.soft.title),1),e("ul",z,[(o(!0),a(u,null,m(t(s).fr.pages.homepage.skills.soft.list,l=>(o(),a("li",{key:l,class:"bg-white border border-gray-800 dark:border-white-600 text-gray-900 px-1 py-0.5 rounded-md hover:shadow-md transition-shadow duration-200 cursor-default"},r(l),1))),128))])]),e("div",G,[e("h3",O,r(t(s).fr.pages.homepage.skills.both.title),1),e("ul",P,[(o(!0),a(u,null,m(t(s).fr.pages.homepage.skills.both.list,l=>(o(),a("li",{key:l,class:"bg-white border border-gray-800 dark:border-white-600 text-gray-900 px-1 py-0.5 rounded-md hover:shadow-md transition-shadow duration-200 cursor-default"},r(l),1))),128))])])])])]))}},X={class:"flex flex-col gap-4 p-4 md:p-8"},ee={class:"mb-2 text-3xl font-sans font-semibold"},te={class:"flex flex-col items-stretch md:items-stretch lg:flex-row gap-2 md:gap-4"},se={class:"p-2 md:p-4 relative bg-blue-900 dark:bg-blue-100 rounded-xl aspect-[16/4] lg:aspect-square min-h-0 lg:max-w-[320px]"},oe=["src","alt"],le={class:"bottom-4 md:bottom-8 right-4 md:right-8 absolute px-2 py-0.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"},ae={class:"p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl"},re={class:"mb-2 md:mb-4 text-xl font-semibold"},ne={__name:"studies-component",setup(g){return(i,n)=>(o(),a("section",X,[e("h2",ee,r(t(s).fr.pages.homepage.studiesTitle),1),e("div",te,[e("div",se,[e("img",{class:"rounded-lg object-cover w-full h-full",src:t(s).fr.pages.homepage.studiesIllustration,alt:t(s).fr.pages.homepage.studiesTitle+" illustration"},null,8,oe),e("span",le,r(t(s).fr.pages.homepage.studiesDates),1)]),e("div",ae,[e("h3",re,r(t(s).fr.pages.homepage.studiesName+" - "+t(s).fr.pages.homepage.studiesLocation+" - "+t(s).fr.pages.homepage.studiesLevel),1),d(_,{md:t(s).fr.pages.homepage.studiesDescription},null,8,["md"])])])]))}},ie={class:"flex flex-col justify-between items-center gap-4 p-4 md:p-8 min-h-[calc(100vh-6rem)]"},ce=e("div",null,null,-1),de={class:"flex flex-col items-center justify-between gap-4 md:gap-8 md:flex-row"},pe=["src"],ue={class:"flex flex-col justify-center items-start gap-2"},me={class:"flex gap-2 mb-4"},ge={class:"text-5xl font-extrabold dark:text-white"},he=["src"],_e={class:"text-3xl font-bold dark:text-white mb-2"},fe=["innerHTML"],xe={class:"text-blue-400 dark:text-blue-600"},be=["innerHTML"],we=["innerHTML"],ve={href:"/CV_Julien_SAILLY.pdf",class:"group inline-flex items-center px-3 py-2 mx-auto md:mx-0 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300 dark:focus:ring-blue-600",target:"_blank"},ke=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"ml-2 w-6 h-6 transition-transform group-hover:translate-x-1 group-focus:translate-x-1"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})],-1),$e={class:"text-black dark:text-white hidden md:block"},ye={onclick:"document.getElementById('studies').scrollIntoView({ behavior: 'smooth', block: 'center' })",viewBox:"0 0 247 390",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"1.5"},class:"cursor-pointer h-full min-w-10"},je=e("path",{id:"wheel",d:"M123.359,79.775l0,72.843",style:{fill:"none",stroke:"currentColor","stroke-width":"20px"}},null,-1),Le=e("path",{id:"mouse",d:"M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z",style:{fill:"none",stroke:"currentColor","stroke-width":"20px"}},null,-1),Me=[je,Le],Be={__name:"welcome-component",setup(g){return(i,n)=>(o(),a("section",ie,[ce,e("div",de,[e("img",{src:t(s).fr.pages.homepage.welcome.img,alt:"Julien Sailly's profile picture",class:"object-cover aspect-square max-w-64 w-48 md:w-64 rounded-full shadow-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out ring ring-blue-400"},null,8,pe),e("div",ue,[e("div",me,[e("h2",ge,r(t(s).fr.pages.homepage.welcome.title),1),e("img",{src:t(s).fr.pages.homepage.welcome.waveEmoji,alt:"Waving hand emoji",class:"max-h-12"},null,8,he)]),e("p",_e,[e("span",{innerHTML:t(s).fr.pages.homepage.welcome.line1A},null,8,fe),e("span",xe,r(t(s).fr.app_author),1),e("span",{innerHTML:t(s).fr.pages.homepage.welcome.line1B},null,8,be)]),e("p",{class:"text-2xl dark:text-white mb-2",innerHTML:t(s).fr.pages.homepage.welcome.line2},null,8,we),e("a",ve,[k(r(t(s).fr.pages.homepage.welcome.cvBtn)+" ",1),ke])])]),e("div",$e,[(o(),a("svg",ye,Me))])]))}},He={class:"flex flex-col gap-4 p-4 md:p-8"},Ae={class:"mb-2 text-3xl font-sans font-semibold"},Ce={class:"flex flex-col gap-2 md:gap-4"},Ve={class:"p-2 md:p-4 bg-blue-900 dark:bg-blue-100 rounded-xl"},De=e("div",{class:"flex flex-col md:flex-row gap-2 md:gap-4 items-stretch"},[e("div",{class:"flex-1 flex flex-col xs:flex-row justify-center gap-4"})],-1),Ee={__name:"contact-component",setup(g){return(i,n)=>(o(),a("section",He,[e("h2",Ae,r(t(s).fr.pages.homepage.contactTitle),1),e("div",Ce,[e("div",Ve,[d(_,{md:t(s).fr.pages.homepage.contactDescription,disableHash:!0},null,8,["md"]),De])])]))}},Ie={class:"flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white bg-[url(/background/topography-light.svg)] dark:bg-[url(/background/topography-dark.svg)]"},Ne={class:"max-w-screen-xl m-auto py-4 md:py-8"},Je={__name:"HomeView",setup(g){return(i,n)=>(o(),a("div",Ie,[e("div",Ne,[d(Be),d(ne,{id:"studies"}),d(B),d(Q),d(Ee)])]))}};export{Je as default};