(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"./assets/images/Andorian.jpg",clicked:!1},{id:2,image:"./assets/images/Balok.jpg",clicked:!1},{id:3,image:"./assets/images/Gorn.jpg",clicked:!1},{id:4,image:"./assets/images/Keeper.jpg",clicked:!1},{id:5,image:"./assets/images/Melkotion.jpg",clicked:!1},{id:6,image:"./assets/images/Vina.jpg",clicked:!1},{id:7,image:"./assets/images/obedience.jpg",clicked:!1},{id:8,image:"./assets/images/Ruk.jpg",clicked:!1},{id:9,image:"./assets/images/Scotty.jpg",clicked:!1},{id:10,image:"./assets/images/Kor.jpg",clicked:!1},{id:11,image:"./assets/images/Spock-Good.jpg",clicked:!1},{id:12,image:"./assets/images/Uhura.jpg",clicked:!1}]},,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(2),n=a.n(i),r=a(3),o=a(4),l=a(7),m=a(5),d=a(8),g=(a(15),function(e){return c.a.createElement("div",{onClick:function(){return e.setClicked(e.id)},className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),u=(a(17),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),k=(a(19),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),h=a(6),f=(a(21),0),p=0,S="Click on an image to earn points, but don't click on any of them more than once!",j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={matches:h,correctGuesses:f,bestScore:p,clickMessage:S},a.setClicked=function(e){var t=a.state.matches,s=t.filter(function(t){return t.id===e});if(s[0].clicked){console.log("Correct Guesses: "+f),console.log("Best Score: "+p),f=0,S="Dang! You already clicked on that one! Now you have to start over!";for(var c=0;c<t.length;c++)t[c].clicked=!1;a.setState({clickMessage:S}),a.setState({correctGuesses:f}),a.setState({matches:t})}else if(f<11)s[0].clicked=!0,S="Great! You haven't click on that one yet! Keep going!",++f>p&&(p=f,a.setState({bestScore:p})),t.sort(function(e,t){return.5-Math.random()}),a.setState({matches:t}),a.setState({correctGuesses:f}),a.setState({clickMessage:S});else{s[0].clicked=!0,f=0,S="WOW!!! You got ALL of them!!! Now, let's see if you can do it again!",p=12,a.setState({bestScore:p});for(var i=0;i<t.length;i++)t[i].clicked=!1;t.sort(function(e,t){return.5-Math.random()}),a.setState({matches:t}),a.setState({correctGuesses:f}),a.setState({clickMessage:S})}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(k,null,"To boldly click where no one has clicked before!"),c.a.createElement("h3",{className:"scoreSummary"},this.state.clickMessage),c.a.createElement("h3",{className:"scoreSummary"},"Correct Guesses: ",this.state.correctGuesses,c.a.createElement("br",null),"Best Score: ",this.state.bestScore),this.state.matches.map(function(t){return c.a.createElement(g,{setClicked:e.setClicked,id:t.id,key:t.id,image:t.image})}))}}]),t}(s.Component);a(23);n.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.704f54f7.chunk.js.map