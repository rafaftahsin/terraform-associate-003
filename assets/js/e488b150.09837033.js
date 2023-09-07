"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4672],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),c=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},l=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,u=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=c(a),p=n,f=d["".concat(u,".").concat(p)]||d[p]||h[p]||o;return a?r.createElement(f,i(i({ref:e},l),{},{components:a})):r.createElement(f,i({ref:e},l))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[d]="string"==typeof t?t:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},356:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={layout:"default",title:"1. Infrastructure as Code introduction video",parent:"Learn about Infrustructure as Code (IaC)"},i=void 0,s={unversionedId:"1 Study Guide/1 Learn about Infrastructure as Code (IaC)/1 Infrastructure as Code introduction video",id:"1 Study Guide/1 Learn about Infrastructure as Code (IaC)/1 Infrastructure as Code introduction video",title:"1. Infrastructure as Code introduction video",description:"https://www.hashicorp.com/resources/what-is-infrastructure-as-code",source:"@site/docs/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/1 Infrastructure as Code introduction video.md",sourceDirName:"1 Study Guide/1 Learn about Infrastructure as Code (IaC)",slug:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/1 Infrastructure as Code introduction video",permalink:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/1 Infrastructure as Code introduction video",draft:!1,tags:[],version:"current",frontMatter:{layout:"default",title:"1. Infrastructure as Code introduction video",parent:"Learn about Infrustructure as Code (IaC)"},sidebar:"tutorialSidebar",previous:{title:"Learn about Infrustructure as Code (IaC)",permalink:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/"},next:{title:"2. Introduction to IaC documentation",permalink:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/2 Introduction to IaC documentation"}},u={},c=[{value:"Transcript",id:"transcript",level:3},{value:"Why is Terraform important?",id:"why-is-terraform-important",level:3}],l={toc:c},d="wrapper";function h(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.hashicorp.com/resources/what-is-infrastructure-as-code"},"https://www.hashicorp.com/resources/what-is-infrastructure-as-code")),(0,n.kt)("h1",{id:"infrastructure-as-code-what-is-it-why-is-it-important"},"Infrastructure as Code: What Is It? Why Is It Important?"),(0,n.kt)("p",null,'Learn why "infrastructure as code" is the answer to managing large-scale, distributed systems, cloud-native applications, and service-based architectures.'),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=RO7VcUAsf-I"},(0,n.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/RO7VcUAsf-I/default.jpg",alt:"Watch the video"}))),(0,n.kt)("h3",{id:"transcript"},"Transcript"),(0,n.kt)("p",null,"It really starts by looking at: How is infrastructure traditionally managed?"),(0,n.kt)("p",null,"We look at traditional infrastructure, say VMware, running inside of a private data center. The classic approach was: If I'm a consumer of infrastructure, I would file a ticket, and then someone on the other end of this ticketing queue is pulling it off, logging it into a management portal or an administrative console, and pointing and clicking to provision that piece of infrastructure."),(0,n.kt)("p",null,"This was okay if I didn't have to manage a lot of infrastructure. Or if the churn of my infrastructure was relatively minimal. And this was true for many private data centers. A VM would live for months to years, there was a relatively limited scale of deployment, and so it was possible to manually point and click and administer these systems."),(0,n.kt)("p",null,"Now, as we're making a transition, we're saying there are a few key changes: ",(0,n.kt)("em",{parentName:"p"}," One: We're going to a cloud environment, which is predominantly API-driven. That's one big change. ")," The second change is: There's a much higher elasticity of infrastructure, where instead of months to years, it's now days to weeks in terms of how long a resource might live."),(0,n.kt)("p",null,"The scale of infrastructure is much, much higher, because instead of a handful of large instances, we might have many smaller instances, so there are many more things we need to provision, and this infrastructure tends to be cyclic. We might scale up to handle a load during a peak day, and then scale down at night to save on cost, because it's not a fixed cost. Unlike owning hardware that we can depreciate, we're now paying by the hour. So, it makes sense to only use the infrastructure you need, and you have to have this elasticity."),(0,n.kt)("p",null,"So as you start making these changes, all of a sudden. The thought of, \"I'm going to file a thousand tickets every morning to spin up to our peak capacity and then file another thousand tickets at night to spin back down, and then manually manage all of this,\" clearly starts to become challenging\u2014in terms of: How do we begin to operationalize this in a way that's reliable and robust, and not prone to human error?"),(0,n.kt)("p",null,"There's a change, in terms of the dynamism of our infrastructure. So the real idea behind infrastructure as code is: How do we take the process\u2014in some sense, the things that we were pointing and clicking to achieve\u2014how do we take that and capture that in a codified way? So if I need to do it one time, ten times, or a thousand times, I can automate that. Every morning, I can hit a script that brings up a thousand machines, and every evening, hit the same script to bring it back down to whatever our evening size is."),(0,n.kt)("p",null,"I can begin to both automate that, but also now that I've captured it as a codified form, I can check it into version control and I get versioning. Now I can see an incremental history of who changed what, how is my infrastructure actually defined at any given point of time, and I have this transparency of documentation that I lack in a traditional point-and-click environment. It's really an oral tradition in terms of: What is the configuration? What are the things that you need to point and click and set up?"),(0,n.kt)("p",null,"That really becomes the value. It's really the versioning of it, the reusability of the code, and the ability to then do automation on top of it."),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"notes"},"Notes"),(0,n.kt)("h3",{id:"why-is-terraform-important"},"Why is Terraform important?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/docs/enterprise/guides/recommended-practices/part3.html"},"Automation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.hashicorp.com/resources/terraform-adoption-journey"},"Versioning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.hashicorp.com/resources/build-reusable-composable-terraform-modules"},"Reusability of the codes"))))}h.isMDXComponent=!0}}]);