(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{564:function(e,t,n){"use strict";n.r(t);n(35),n(7),n(34),n(33),n(20),n(29),n(30);var r=n(13);n(6),n(4),n(132);function o(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={props:{questions:{type:Array,required:!0}},data:function(){return{score:null,answers:{},showQuiz:!1}},computed:{isSubmitted:function(){var e=Object.entries(this.answers)||[];return null!==this.score&&e.length===this.questions.length},buttonDisabled:function(){return(Object.entries(this.answers)||[]).length!==this.questions.length}},watch:{$route:function(e,t){this.score=null,this.answers={}}},methods:{calcScore:function(){var e,t=0,n=o(Object.entries(this.answers)||[]);try{for(n.s();!(e=n.n()).done;){var c=Object(r.a)(e.value,2),l=c[0];c[1]===this.shuffleQuestions[l].correctAnswer&&(t+=1)}}catch(e){n.e(e)}finally{n.f()}return t},showScore:function(){this.score=this.calcScore()},resetScore:function(){this.score=null,this.answers={}}}},d=n(5),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showQuiz?n("div",[n("h2",[e._v(e._s(e.$t("quiz.title")))]),e._v(" "),n("ul",e._l(e.questions,(function(t,r){return n("li",{key:r,staticClass:"list-none mb-2 font-medium"},[n("span",[e._v(e._s(r+1)+") "+e._s(t.question))]),e._v(" "),n("ul",{staticClass:"list-none"},e._l(t.answers,(function(o,i){return n("li",{key:i,staticClass:"list-none ml-6 pb-1",class:{"text-red-500":e.isSubmitted&&o!==t.correctAnswer&&e.answers[r]===o}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[r],expression:"answers[index]"}],attrs:{id:"answer-"+r+"-"+i,type:"radio",name:"answer-"+r+"-"+i,disabled:e.isSubmitted?"disabled":null},domProps:{value:o,checked:e._q(e.answers[r],o)},on:{change:function(t){return e.$set(e.answers,r,o)}}}),e._v(" "),n("label",{staticClass:"cursor-pointer",attrs:{for:"answer-"+r+"-"+i}},[e._v("\n              "+e._s(o)+"\n              "),e.isSubmitted&&o===t.correctAnswer?n("span",[e._v("\n                ✅\n              ")]):e._e()])])})),0)])})),0),e._v(" "),n("button",{staticClass:"disabled:opacity-50 text-white bg-green-500 rounded hover:bg-green-400 py-1 px-2",attrs:{disabled:e.buttonDisabled},on:{click:e.showScore}},[e._v("\n      Send\n    ")]),e._v(" "),n("button",{staticClass:"text-white bg-green-500 rounded hover:bg-green-400 py-1 px-2",on:{click:e.resetScore}},[e._v("\n      Reset\n    ")]),e._v(" "),null!==e.score?n("div",[e._v("\n"+e._s(e.score)+" / "+e._s(e.questions.length)+"\n")]):e._e()]):e._e()}),[],!1,null,"0aa92312",null);t.default=component.exports}}]);