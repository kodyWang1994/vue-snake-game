webpackJsonp([1],{BceC:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("7+uW"),o={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},a=e("VU/8")({name:"app"},o,!1,function(n){e("pj9E")},null,null).exports,c=e("/ocq"),s=e("rdLu"),r=e.n(s),d={name:"Snake",data:function(){return{snakeBody:[1],food:0,direction:"RIGHT"}},created:function(){this.init()},mounted:function(){var n=this;document.onkeydown=function(t){n.keyUp(t)}},methods:{isSnake:function(n){return r.a.indexOf(this.snakeBody,n)>-1},changeDirection:function(n){this.direction=n},touch:function(n){n.clientY<168?this.direction="TOP":n.clientY>328&&n.clientY<488?this.direction="DOWN":n.clientX>window.innerWidth/2?this.direction="RIGHT":n.clientX<window.innerWidth/2&&(this.direction="LEFT")},move:function(){var n=this;setInterval(function(){var t=r.a.last(n.snakeBody),e=[];if(t===n.food?(e=n.snakeBody,n.food=n.random(1,1536)):e=r.a.rest(n.snakeBody),t>1536)e.push(t-1536);else if(t<1)e.push(1536+t);else switch(n.direction){case"LEFT":e.push(t-1);break;case"TOP":e.push(t-32);break;case"RIGHT":e.push(t+1);break;case"DOWN":e.push(t+32);break;default:e.push(t+1)}n.snakeBody=e},100)},random:function(n,t){var e=t-n,i=Math.random();return n+Math.round(i*e)},keyUp:function(n){37===n.keyCode?this.direction="LEFT":38===n.keyCode?this.direction="TOP":39===n.keyCode?this.direction="RIGHT":40===n.keyCode&&(this.direction="DOWN")},init:function(){this.food=this.random(1,1536),this.move()}}},u={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"game-panel"},n._l(1536,function(t){return e("div",{key:t,staticClass:"col-item",class:{snake:n.isSnake(t),food:n.food==t}})})),n._v(" "),e("div",{staticClass:"operation"},[e("div",{staticClass:"operation-item operation-top-down",on:{click:function(t){n.changeDirection("TOP")}}},[n._v("上")]),n._v(" "),e("div",{staticClass:"operation-left-right-col"},[e("div",{staticClass:"operation-item",on:{click:function(t){n.changeDirection("LEFT")}}},[n._v("左")]),n._v(" "),e("div",{staticClass:"operation-item",on:{click:function(t){n.changeDirection("RIGHT")}}},[n._v("右")])]),n._v(" "),e("div",{staticClass:"operation-item operation-top-down",on:{click:function(t){n.changeDirection("DOWN")}}},[n._v("下")])])])},staticRenderFns:[]},l=e("VU/8")(d,u,!1,function(n){e("BceC"),e("bEYc")},"data-v-549c6d76",null).exports;i.a.use(c.a);var p=new c.a({routes:[{path:"/",name:"snake",component:l}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:p,template:"<App/>",components:{App:a}})},bEYc:function(n,t){},pj9E:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.29e1f30027080a40dfb8.js.map