(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=a(8),l=a.n(o),s=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onTermSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"search-bar ui segment",style:{backgroundColor:"lightblue"}},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field ui fluid icon input"},i.a.createElement("input",{className:"prompt",type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})},placeholder:"Search video"}),i.a.createElement("i",{className:"search icon"}))))}}]),t}(i.a.Component),f=a(17),h=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyCDNehlUlLpqeoF06RQOJXPb3FdGo3XUvY"}}),E=(a(45),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),g=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(E,{onVideoSelect:a,key:e.id.videoId,video:e})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)},w=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{style:{backgroundColor:"#e8f3ff"},className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(s.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("buildings")}},{key:"render",value:function(){return i.a.createElement("div",{style:{marginTop:10,backgroundColor:"aliceblue"},className:"ui container"},i.a.createElement(b,{onTermSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui two column doubling stackable grid container"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(w,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(g,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.47eccb0f.chunk.js.map