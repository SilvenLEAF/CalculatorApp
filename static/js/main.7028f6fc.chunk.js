(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},,,,,,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(22),c=t.n(r),m=(t(31),t(32),t(1)),i=t(3),s=t.n(i),o=t(8),u=Object(l.createContext)();var E=function(e){var a=e.children,t=Object(l.useState)({user:"I am logged in"}),r=Object(o.a)(t,2),c=r[0],m=r[1];return n.a.createElement(u.Provider,{value:{userData:c,setUserData:m}},a)},f=t(2),d=function(e){var a=e.setUserData,t=Object(f.f)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(m.c,{to:"/",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-home"}),"Home")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/allUsers",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-users"}),"All Users")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/contact",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-envelope"}),"Contact Me")),n.a.createElement("li",{onClick:function(){a({user:void 0}),t.push("/")}},n.a.createElement(m.c,{to:"/",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-sign-out"}),"Log out")),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://silvenleaf.github.io",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-info"}),"About Me")))},v=function(e){var a=e.setUserData,t=Object(f.f)();return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(m.c,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/allUsers"},"All Users")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/contact"},"Contact Me")),n.a.createElement("li",{onClick:function(){a({user:void 0}),t.push("/")}},n.a.createElement(m.c,{to:"/",className:"sidenav-close"},"Log out")),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://silvenleaf.github.io"},"About Me")))},N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(m.c,{to:"/",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-home"}),"Home")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/login",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-user"}),"Log in")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/signup",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-user-plus"}),"Sign up")),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://silvenleaf.github.io",className:"sidenav-close"},n.a.createElement("i",{className:"fa fa-info"}),"About Me")))},p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,n.a.createElement(m.c,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/login"},"Log in")),n.a.createElement("li",null,n.a.createElement(m.c,{to:"/signup"},"Sign up")),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://silvenleaf.github.io"},"About Me")))};var y=function(){Object(l.useEffect)((function(){s.a.AutoInit()}),[]);var e=Object(l.useContext)(u),a=e.userData,t=e.setUserData,r=a.user?n.a.createElement(d,{setUserData:t}):n.a.createElement(N,null),c=a.user?n.a.createElement(v,{setUserData:t}):n.a.createElement(p,null);return n.a.createElement("nav",{id:"myNavbar",className:"nav nav-wrapper scrollspy"},n.a.createElement("div",{className:"container"},n.a.createElement(m.b,{to:"/",className:"brand-logo"},"Soul"),n.a.createElement("div",{className:"sidenav-trigger hide-on-large-only","data-target":"mobilenav",id:"myHam"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)),n.a.createElement("ul",{className:"sidenav",id:"mobilenav"},r),n.a.createElement("ul",{className:"right hide-on-med-and-down"},c,n.a.createElement("li",{style:{marginLeft:"20px"}},a.user&&n.a.createElement(m.b,{to:"/profile",className:"btn-floating center pulse myProfileNavIcon"},"ZG"))),n.a.createElement("ul",{className:"right hide-on-large-only"},n.a.createElement("li",null,a.user&&n.a.createElement(m.b,{to:"/profile",className:"btn-floating center pulse myProfileNavIcon"},"ZG")))))};t(12);var h=function(){return Object(l.useEffect)((function(){s.a.AutoInit()})),n.a.createElement("div",{className:"container myAuthDoor"},n.a.createElement("div",{className:"myAuthAppName"},"Soul"),n.a.createElement("div",{className:"myAuthTitle"},"Log in to your account"),n.a.createElement("form",null,n.a.createElement("div",{className:"myOauthButtonsHolder"},n.a.createElement(m.b,{to:"/loginForm"},n.a.createElement("div",{className:"myOauthBtn myLocalAuth"},n.a.createElement("i",{className:"fa fa-key"})," Log in with Email")),n.a.createElement("div",{className:"myOauthBtn myDemoAuth"},n.a.createElement("i",{className:"fa fa-key"})," Log in for DEMO"),n.a.createElement("div",{className:"myOauthDividingOR"},"OR"),n.a.createElement("hr",{className:"myOauthDividingHR"}),n.a.createElement("div",{className:"myOauthBtn myOauthGoogle"},n.a.createElement("i",{className:"fa fa-google"})," Continue with Google"),n.a.createElement("div",{className:"myOauthBtn myOauthLinkedin"},n.a.createElement("i",{className:"fa fa-linkedin"})," Continue with LinkedIN"),n.a.createElement("div",{className:"myOauthBtn myOauthGithub"},n.a.createElement("i",{className:"fa fa-github"})," Continue with Github"),n.a.createElement("div",{className:"myOauthBtn myOauthTwitter"},n.a.createElement("i",{className:"fa fa-twitter"})," Continue with Twitter"),n.a.createElement("div",{className:"myOauthBtn myOauthInstagram"},n.a.createElement("i",{className:"fa fa-instagram"})," Continue with Instagram"),n.a.createElement("div",{className:"myOauthBtn myOauthFacebook"},n.a.createElement("i",{className:"fa fa-facebook"})," Continue with Facebook")),n.a.createElement("div",{className:"myAuthFormFooter"},"Need an account? ",n.a.createElement(m.b,{to:"/signup"},"Sign up"))))};var g=function(){return Object(l.useEffect)((function(){s.a.AutoInit()})),n.a.createElement("div",{className:"container myAuthDoor"},n.a.createElement("div",{className:"myAuthAppName"},"Soul"),n.a.createElement("div",{className:"myAuthTitle"},"Sign up a new account"),n.a.createElement("form",null,n.a.createElement("div",{className:"myOauthButtonsHolder"},n.a.createElement(m.b,{to:"/signupForm"},n.a.createElement("div",{className:"myOauthBtn myLocalAuth"},n.a.createElement("i",{className:"fa fa-key"})," Sign up with Email")),n.a.createElement("div",{className:"myOauthBtn myDemoAuth"},n.a.createElement("i",{className:"fa fa-key"})," Log in for DEMO"),n.a.createElement("div",{className:"myOauthDividingOR"},"OR"),n.a.createElement("hr",{className:"myOauthDividingHR"}),n.a.createElement("div",{className:"myOauthBtn myOauthGoogle"},n.a.createElement("i",{className:"fa fa-google"})," Continue with Google"),n.a.createElement("div",{className:"myOauthBtn myOauthLinkedin"},n.a.createElement("i",{className:"fa fa-linkedin"})," Continue with LinkedIN"),n.a.createElement("div",{className:"myOauthBtn myOauthGithub"},n.a.createElement("i",{className:"fa fa-github"})," Continue with Github"),n.a.createElement("div",{className:"myOauthBtn myOauthTwitter"},n.a.createElement("i",{className:"fa fa-twitter"})," Continue with Twitter"),n.a.createElement("div",{className:"myOauthBtn myOauthInstagram"},n.a.createElement("i",{className:"fa fa-instagram"})," Continue with Instagram"),n.a.createElement("div",{className:"myOauthBtn myOauthFacebook"},n.a.createElement("i",{className:"fa fa-facebook"})," Continue with Facebook")),n.a.createElement("div",{className:"myAuthFormFooter"},"Already have an account? ",n.a.createElement(m.b,{to:"/login"},"Log in"))))};t(19);var b=function(){return Object(l.useEffect)((function(){s.a.AutoInit()})),n.a.createElement("div",{className:"container myAuthForm"},n.a.createElement("div",{className:"myAuthAppName"},"Soul"),n.a.createElement("div",{className:"myAuthTitle"},"Log in to your account"),n.a.createElement("form",null,n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"prefix fa fa-envelope"}),n.a.createElement("input",{type:"email",required:!0}),n.a.createElement("label",{htmlFor:"email"},"Email ",n.a.createElement("span",{className:"red-text"},"(*required)"))),n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"prefix material-icons"},"memory"),n.a.createElement("input",{type:"password",required:!0,autoComplete:"off"}),n.a.createElement("label",{htmlFor:"password"},"Password ",n.a.createElement("span",{className:"red-text"},"(*required) ")," ")),n.a.createElement("div",{className:"input-field right-align"},n.a.createElement("button",{className:"btn myBtn waves-effect waves-light"},"Log in")),n.a.createElement("div",{className:"myAuthFormFooter"},n.a.createElement("p",null,"Forgot password? ",n.a.createElement(m.b,{to:"/signup"},"Reset password")),n.a.createElement("p",null,"Need an account? ",n.a.createElement(m.b,{to:"/signup"},"Sign up")))))};var A=function(){return Object(l.useEffect)((function(){s.a.AutoInit()})),n.a.createElement("div",{className:"container myAuthForm"},n.a.createElement("div",{className:"myAuthAppName"},"Soul"),n.a.createElement("div",{className:"myAuthTitle"},"Sign up a new account"),n.a.createElement("form",null,n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"prefix fa fa-envelope"}),n.a.createElement("input",{type:"email",required:!0}),n.a.createElement("label",{htmlFor:"email"},"Email ",n.a.createElement("span",{className:"red-text"},"(*required)"))),n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"prefix fa fa-user-plus"}),n.a.createElement("input",{type:"text",required:!0}),n.a.createElement("label",{htmlFor:"username"},"Your Username ",n.a.createElement("span",{className:"red-text"},"(*required)"))),n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"prefix material-icons"},"memory"),n.a.createElement("input",{type:"password",required:!0,autoComplete:"off",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters long"}),n.a.createElement("label",{htmlFor:"password"},"Password ",n.a.createElement("span",{className:"red-text"},"(*required) ")," ")),n.a.createElement("div",{className:"input-field"},n.a.createElement("i",{className:"prefix material-icons"},"memory"),n.a.createElement("input",{type:"password",autoComplete:"off",required:!0}),n.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password ",n.a.createElement("span",{className:"red-text"},"(*required)")," ")),n.a.createElement("p",{className:"myAgreeTermsAndConditions"},"By signing up you confirm that you've read and agreed our ",n.a.createElement("a",{href:"#"},"User Notice")," and ",n.a.createElement("a",{href:"#"},"Privacy Policy")),n.a.createElement("div",{className:"input-field right-align"},n.a.createElement("button",{className:"btn myBtn waves-effect waves-light"},"Sign up")),n.a.createElement("div",{className:"myAuthFormFooter"},"Already have an account? ",n.a.createElement(m.b,{to:"/login"},"Log in"))))};t(37);var w=function(){return Object(l.useEffect)((function(){s.a.AutoInit()}),[]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"myLandingIcon"}),n.a.createElement("div",{className:"myLandingContentHolder"},n.a.createElement("h2",{id:"myLandingTitle",className:"pageTitle"},"Whadyawanna eat?"),n.a.createElement("div",{className:"myLandingDescription"},"Wanna eat something delicious? I'm the magical book with all the secrets of the world's delicacies!"),n.a.createElement("h6",{className:"red-text myWithLoveFromSilvenLEAF"},"--------With LOVE from SilvenLEAF")))};t(16),t(24),t(20);var O=function(){return Object(l.useEffect)((function(){s.a.AutoInit()}),[]),Object(l.useContext)(u).userData,Object(f.f)(),n.a.createElement("div",{className:"container myProfilePage"},n.a.createElement("div",{className:"mainProfileIcon",style:{background:'url("/Soul/Logo.png") center/cover'}}),n.a.createElement("div",{className:"myProfileMainHeader"},n.a.createElement("div",{className:"myProfileUserName"},"SilvenLEAF SilvenLEAF"),n.a.createElement("div",{className:"myProfileTitle"},"Fullstack Developer"),n.a.createElement("div",{className:"myProfileLocation red-text"}," Mt View, California, USA ")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"myProfileInfoHolder col s12 m6"},n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-home"})," Lives in"),n.a.createElement("div",{className:"myProfileInfoAnswer"},"Mt View, California, USA")),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-medkit"})," Working at"),n.a.createElement("div",{className:"myProfileInfoAnswer"},"home due to coronavirus")),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-graduation-cap"})," Career status"),n.a.createElement("div",{className:"myProfileInfoAnswer"},"Fullstack Developer at SilvenLEAF ORG")),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-share-alt"})," Website link"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("a",{href:"#",target:"silvenleaf.github.io"},"silvenleaf.github.io"))),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-twitter"})," Connect on Twitter"),n.a.createElement("div",{className:"myProfileInfoAnswer"},"@SilvenLEAF"))),n.a.createElement("div",{className:"myProfileAboutHolder col s12 m5 offset-m1"},n.a.createElement("p",{className:"myProfileAbout"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sunt a quae tenetur iure? Sit repellendus necessitatibus unde iusto. Dignissimos quisquam consectetur vel velit rerum tempore, a accusamus saepe modi tempora sit quo? Laudantium nihil eligendi quidem. Enim nulla odit ad tenetur molestias perferendis? Culpa obcaecati voluptatum harum debitis id?"),n.a.createElement("div",{className:"myProfileBtnsHolder myBtnsHolder right-align"},n.a.createElement(m.b,{to:"/updateProfile",className:"btn myBtn waves-effect waves-light"},n.a.createElement("i",{className:"fa fa-edit"})," Update Account"),n.a.createElement("button",{className:"btn myRedBtn waves-effect waves-light"},n.a.createElement("i",{className:"fa fa-trash"})," Delete Account")))))},F=(t(39),t(25)),I=t.n(F);var P=function(){Object(l.useEffect)((function(){s.a.AutoInit()}));var e=Object(l.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(""),m=Object(o.a)(c,2),i=m[0],u=m[1];return n.a.createElement("div",{className:"container"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(""),u(""),I()("Sent","Your message is sent. Thanks for contacting!","success")},className:"myDefaultForm"},n.a.createElement("h3",{className:"myDefaultFormName"},"Contact Me"),n.a.createElement("div",{className:"myInputHolder"},n.a.createElement("label",{htmlFor:"title"},"Title ",n.a.createElement("span",{className:"red-text"},"(Required)")),n.a.createElement("div",null,n.a.createElement("i",{className:"myPrefix fa fa-address-card-o"}),n.a.createElement("input",{type:"text",name:"contactTitle",value:t,onChange:function(e){return r(e.target.value)},required:!0}))),n.a.createElement("div",{className:"myInputHolder"},n.a.createElement("label",{htmlFor:"content"},"Content ",n.a.createElement("span",{className:"red-text"},"(Required)")),n.a.createElement("div",null,n.a.createElement("i",{className:"myPrefix fa fa-edit"}),n.a.createElement("textarea",{name:"content",className:"materialize-textarea",value:i,onChange:function(e){return u(e.target.value)},required:!0}))),n.a.createElement("div",{className:"input-field right-align"},n.a.createElement("button",{type:"submit",className:"btn myBtn waves-effect waves-light",id:"myDownloadBtn"},n.a.createElement("i",{className:"fa fa-send"})," Send"))))};t(42);var L=function(){return n.a.createElement("li",null,n.a.createElement("div",{className:"myUserProfileIcon",style:{background:"url(/Soul/Logo.png) center/cover"}}),n.a.createElement("div",null,n.a.createElement("div",{className:"myUserName"},"SilvenLEAF SilvenLEAF"),n.a.createElement("p",{className:"grey-text"},"Fullstack Developer")),n.a.createElement("div",{className:"fa fa-eye"}))};var S=function(){Object(l.useEffect)((function(){s.a.AutoInit()}),[]);var e=Object(l.useContext)(u),a=(e.userData,e.setUserData,Object(l.useState)([1,2,3,4,5,6,7,8,9])),t=Object(o.a)(a,2),r=t[0];return t[1],Object(f.f)(),n.a.createElement("div",{className:"container myUserListPage"},n.a.createElement("h6",{className:"blue-text"},"All users"),n.a.createElement("ul",null,r[0]&&r.map((function(e,a){return n.a.createElement(m.b,{to:"/userProfile/"+a,key:a},n.a.createElement(L,null))}))))};t(43);var k=function(){return Object(l.useEffect)((function(){s.a.AutoInit()}),[]),Object(l.useContext)(u).userData,Object(f.f)(),n.a.createElement("div",{id:"myUpdateProfilePage",className:"container myProfilePage"},n.a.createElement("div",{className:"mainProfileIcon",style:{background:'url("/Soul/Logo.png") center/cover'}}),n.a.createElement("div",{className:"myProfileMainHeader"},n.a.createElement("div",{className:"myProfileUserName"},"SilvenLEAF SilvenLEAF"),n.a.createElement("div",{className:"myProfileTitle"},"Fullstack Developer"),n.a.createElement("div",{className:"myProfileLocation red-text"}," Mt View, California, USA ")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"myProfileInfoHolder col s12 m6"},n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-address-card-o"})," Username"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("input",{type:"text",placeholder:"SilvenLEAF SilvenLEAF"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-cogs"})," is a/an"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("input",{type:"text",placeholder:"Fullstack Developer"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-home"})," Lives in"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("input",{type:"text",placeholder:"Mt View, California, USA"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-medkit"})," Working at"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("input",{type:"text",placeholder:"home due to coronavirus"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-graduation-cap"})," Career status"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("input",{type:"text",placeholder:"Fullstack Developer at SilvenLEAF ORG"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-share-alt"})," Website link"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("input",{type:"text",placeholder:"silvenleaf.github.io"}))),n.a.createElement("div",null,n.a.createElement("div",{className:"myProfileInfoTitle"},n.a.createElement("i",{className:"fa fa-twitter"})," Connect on Twitter"),n.a.createElement("div",{className:"myProfileInfoAnswer"},n.a.createElement("input",{type:"text",placeholder:"@SilvenLEAF"})))),n.a.createElement("div",{className:"col s12 m5 offset-m1"},n.a.createElement("div",{className:"myUpdateProfileAbout Holder"},n.a.createElement("textarea",{name:"about",className:"myUpdateProfileAbout",placeholder:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque necessitatibus consectetur laborum odio distinctio aut. Alias, eos neque. Odit itaque exercitationem aut neque. Amet dolorum iusto autem aliquid eius, eaque voluptate ullam atque dignissimos eum accusantium praesentium accusamus pariatur nesciunt asperiores odit? Maxime temporibus, ullam dicta beatae blanditiis hic adipisci."})),n.a.createElement("div",{className:"myBtnsHolder right-align"},n.a.createElement("button",{className:"btn myBtn waves-effect waves-light"},n.a.createElement("i",{className:"fa fa-edit"})," Update"),n.a.createElement(m.b,{to:"/profile",className:"btn myRedBtn waves-effect waves-light"},n.a.createElement("i",{className:"fa fa-remove"})," Cancel")))))};var x=function(){return n.a.createElement("div",{id:"myWrapper"},n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",component:w}),n.a.createElement(f.a,{path:"/login",component:h}),n.a.createElement(f.a,{path:"/signup",component:g}),n.a.createElement(f.a,{path:"/loginForm",component:b}),n.a.createElement(f.a,{path:"/signupForm",component:A}),n.a.createElement(f.a,{path:"/profile",component:O}),n.a.createElement(f.a,{path:"/updateProfile",component:k}),n.a.createElement(f.a,{path:"/allUsers",component:S}),n.a.createElement(f.a,{path:"/contact",component:P})))};var C=function(){return Object(l.useEffect)((function(){window.addEventListener("scroll",(function(){var e=document.getElementById("myBackToTopButton");window.pageYOffset>300?e.style.display="flex":e.style.display="none"}))})),n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"#myNavbar",id:"myBackToTopButton"},n.a.createElement("i",{className:"fa fa-arrow-up"})))};t(44);var D=function(e){return n.a.createElement("div",{id:"myFooter"},n.a.createElement("div",{className:"container"},n.a.createElement("h6",{className:"center white-text lighten-5"},"Developed by SilvenLEAF"),n.a.createElement("div",{className:"mySocialIconsHolder"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/SilvenLEAF?s=20",className:"mySocialIcon"},n.a.createElement("i",{className:"fa fa-twitter"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SilvenLEAF",className:"mySocialIcon"},n.a.createElement("i",{className:"fa fa-github"})),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"#",className:"mySocialIcon"},n.a.createElement("i",{className:"fa fa-linkedin"}))),n.a.createElement("div",{id:"myFooterCopyright"},n.a.createElement("div",{className:"center-align"},"\xa9 SilvenLEAF all rights reserved 2020"))))};t(45);var B=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("div",{className:"myFooterIcons"},n.a.createElement(m.b,{to:"/"},n.a.createElement("i",{className:"fa fa-home"})," Home"))),n.a.createElement("div",null,n.a.createElement("div",{className:"myFooterIcons"},n.a.createElement(m.b,{to:"/allUsers"},n.a.createElement("i",{className:"fa fa-users"})," All Users"))),n.a.createElement("div",null,n.a.createElement("div",{className:"myFooterIcons"},n.a.createElement(m.b,{to:"/contact"},n.a.createElement("i",{className:"fa fa-envelope"})," Contact"))))};var T=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("div",{className:"myFooterIcons"},n.a.createElement(m.b,{to:"/"},n.a.createElement("i",{className:"fa fa-home"})," Home"))),n.a.createElement("div",null,n.a.createElement("div",{className:"myFooterIcons"},n.a.createElement(m.b,{to:"/login"},n.a.createElement("i",{className:"fa fa-user"})," Log in"))),n.a.createElement("div",null,n.a.createElement("div",{className:"myFooterIcons"},n.a.createElement(m.b,{to:"/signup"},n.a.createElement("i",{className:"fa fa-user-plus"})," Sign up"))))};var U=function(){var e=Object(l.useContext)(u).userData.user?n.a.createElement(B,null):n.a.createElement(T,null);return n.a.createElement("div",{id:"myMobileFooterNav",className:"container hide-on-large-only"},e)};var j=function(){return n.a.createElement("div",null,n.a.createElement(y,null),n.a.createElement(x,null),n.a.createElement(C,null),n.a.createElement(D,null),n.a.createElement(U,null))};var q=function(e){var a=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(E,null,a))};var H=function(){return n.a.createElement(m.a,{basename:"/Soul"},n.a.createElement(q,null,n.a.createElement("div",{className:"App"},n.a.createElement(j,null))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(H,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.7028f6fc.chunk.js.map