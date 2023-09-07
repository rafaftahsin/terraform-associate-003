"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3920],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var a=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||n;return t?a.createElement(f,i(i({ref:r},l),{},{components:t})):a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},509:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const n={layout:"default",title:"2. Introduction to IaC documentation",parent:"Learn about Infrustructure as Code (IaC)"},i=void 0,s={unversionedId:"1 Study Guide/1 Learn about Infrastructure as Code (IaC)/2 Introduction to IaC documentation",id:"1 Study Guide/1 Learn about Infrastructure as Code (IaC)/2 Introduction to IaC documentation",title:"2. Introduction to IaC documentation",description:"https://developer.hashicorp.com/terraform/intro",source:"@site/docs/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/2 Introduction to IaC documentation.md",sourceDirName:"1 Study Guide/1 Learn about Infrastructure as Code (IaC)",slug:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/2 Introduction to IaC documentation",permalink:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/2 Introduction to IaC documentation",draft:!1,tags:[],version:"current",frontMatter:{layout:"default",title:"2. Introduction to IaC documentation",parent:"Learn about Infrustructure as Code (IaC)"},sidebar:"tutorialSidebar",previous:{title:"1. Infrastructure as Code introduction video",permalink:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/1 Infrastructure as Code introduction video"},next:{title:"4. Infrastructure as Code in a Private or Public Cloud blog post",permalink:"/1 Study Guide/1 Learn about Infrastructure as Code (IaC)/4 Infrastructure as Code in a Private or Public Cloud blog post"}},u={},c=[{value:"What is Terraform?",id:"what-is-terraform",level:2},{value:"How does Terraform work?",id:"how-does-terraform-work",level:2},{value:"Why Terraform?",id:"why-terraform",level:2},{value:"Manage any infrastructure",id:"manage-any-infrastructure",level:3},{value:"Track your infrastructure",id:"track-your-infrastructure",level:3},{value:"Automate changes",id:"automate-changes",level:3},{value:"Standardize configurations",id:"standardize-configurations",level:3},{value:"Collaborate",id:"collaborate",level:3},{value:"Community",id:"community",level:2}],l={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/intro"},"https://developer.hashicorp.com/terraform/intro")),(0,o.kt)("h2",{id:"what-is-terraform"},"What is Terraform?"),(0,o.kt)("p",null,"Terraform is an infrastructure as code tool that lets you build, change, and version cloud and on-prem resources safely and efficiently."),(0,o.kt)("p",null,"HashiCorp Terraform is an infrastructure as code tool that lets you define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share. You can then use a consistent workflow to provision and manage all of your infrastructure throughout its lifecycle. Terraform can manage low-level components like compute, storage, and networking resources, as well as high-level components like DNS entries and SaaS features."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hands On: Try the Get Started tutorials to start managing infrastructure on popular cloud providers: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started"},"Amazon Web Services"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/azure-get-started"},"Azure"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/gcp-get-started"},"Google Cloud Platform"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/oci-get-started"},"Oracle Cloud Infrastructure"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/tutorials/docker-get-started"},"Docker"),".")),(0,o.kt)("h2",{id:"how-does-terraform-work"},"How does Terraform work?"),(0,o.kt)("p",null,"Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs). Providers enable Terraform to work with virtually any platform or service with an accessible API."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://developer.hashicorp.com/_next/image?url=https%3A%2F%2Fcontent.hashicorp.com%2Fapi%2Fassets%3Fproduct%3Dterraform%26version%3Dv1.5.4%26asset%3Dwebsite%252Fimg%252Fdocs%252Fintro-terraform-apis.png%26width%3D2048%26height%3D644&w=2048&q=75",alt:"alter text"})),(0,o.kt)("p",null,"HashiCorp and the Terraform community have already written thousands of providers to manage many different types of resources and services. You can find all publicly available providers on the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/"},"Terraform Registry"),", including Amazon Web Services (AWS), Azure, Google Cloud Platform (GCP), Kubernetes, Helm, GitHub, Splunk, DataDog, and many more."),(0,o.kt)("p",null,"The core Terraform workflow consists of three stages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Write"),": You define resources, which may be across multiple cloud providers and services. For example, you might create a configuration to deploy an application on virtual machines in a Virtual Private Cloud (VPC) network with security groups and a load balancer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Plan"),": Terraform creates an execution plan describing the infrastructure it will create, update, or destroy based on the existing infrastructure and your configuration.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Apply"),": On approval, Terraform performs the proposed operations in the correct order, respecting any resource dependencies. For example, if you update the properties of a VPC and change the number of virtual machines in that VPC, Terraform will recreate the VPC before scaling the virtual machines."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://developer.hashicorp.com/_next/image?url=https%3A%2F%2Fcontent.hashicorp.com%2Fapi%2Fassets%3Fproduct%3Dterraform%26version%3Dv1.5.4%26asset%3Dwebsite%252Fimg%252Fdocs%252Fintro-terraform-workflow.png%26width%3D2038%26height%3D1773&w=2048&q=75",alt:"Write Plan Apply"})),(0,o.kt)("h2",{id:"why-terraform"},"Why Terraform?"),(0,o.kt)("h3",{id:"manage-any-infrastructure"},"Manage any infrastructure"),(0,o.kt)("p",null,"Find providers for many of the platforms and services you already use in the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/"},"Terraform Registry"),". You can also ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/plugin"},"write your own"),". Terraform takes an ",(0,o.kt)("a",{parentName:"p",href:"https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure"},"immutable approach to infrastructure"),", reducing the complexity of upgrading or modifying your services and infrastructure."),(0,o.kt)("h3",{id:"track-your-infrastructure"},"Track your infrastructure"),(0,o.kt)("p",null,"Terraform generates a plan and prompts you for your approval before modifying your infrastructure. It also keeps track of your real infrastructure in a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/state"},"state file"),", which acts as a source of truth for your environment. Terraform uses the state file to determine the changes to make to your infrastructure so that it will match your configuration"),(0,o.kt)("h3",{id:"automate-changes"},"Automate changes"),(0,o.kt)("p",null,"Terraform configuration files are declarative, meaning that they describe the end state of your infrastructure. You do not need to write step-by-step instructions to create resources because Terraform handles the underlying logic. Terraform builds a resource graph to determine resource dependencies and creates or modifies non-dependent resources in parallel. This allows Terraform to provision resources efficiently."),(0,o.kt)("h3",{id:"standardize-configurations"},"Standardize configurations"),(0,o.kt)("p",null,"Terraform supports reusable configuration components called ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/language/modules"},"modules")," that define configurable collections of infrastructure, saving time and encouraging best practices. You can use publicly available modules from the Terraform Registry, or write your own."),(0,o.kt)("h3",{id:"collaborate"},"Collaborate"),(0,o.kt)("p",null,"Since your configuration is written in a file, you can commit it to a Version Control System (VCS) and use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/intro/terraform-editions#terraform-cloud"},"Terraform Cloud")," to efficiently manage Terraform workflows across teams. Terraform Cloud runs Terraform in a consistent, reliable environment and provides secure access to shared state and secret data, role-based access controls, a private registry for sharing both modules and providers, and more."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tip"),": Learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/intro/use-cases"},"Terraform use cases")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform/intro/vs"},"how Terraform compares to alternatives"),"."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"We welcome questions, suggestions, and contributions from the community."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ask questions in ",(0,o.kt)("a",{parentName:"li",href:"https://discuss.hashicorp.com/c/terraform-core/27"},"HashiCorp Discuss"),"."),(0,o.kt)("li",{parentName:"ul"},"Read our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform/blob/main/.github/CONTRIBUTING.md"},"contributing guide"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform/issues/new/choose"},"Submit an issue")," for bugs and feature requests.")))}m.isMDXComponent=!0}}]);