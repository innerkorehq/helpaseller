(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{312:function(e,t,r){var content=r(516);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("f5e310da",content,!0,{sourceMap:!1})},515:function(e,t,r){"use strict";var o=r(312);r.n(o).a},516:function(e,t,r){(t=r(45)(!1)).push([e.i,".codesandbox[data-v-7c79f742],.codesandbox iframe[data-v-7c79f742]{width:100%;border-radius:.375rem;overflow:hidden;height:16rem;height:100%}",""]),e.exports=t},563:function(e,t,r){"use strict";r.r(t);var o={props:{src:{type:String,required:!0}},data:function(){return{isIntersecting:!1}},mounted:function(){var e=this;window.IntersectionObserver?(this.__observer=new window.IntersectionObserver((function(t){t.forEach((function(t){var r=t.intersectionRatio;t.target;r>0&&(e.isIntersecting=!0,e.__observer.disconnect(),delete e.__observer)}))})),this.__observer.observe(this.$el)):this.isIntersecting=!0},beforeDestroy:function(){this.__observer&&(this.__observer.disconnect(),delete this.__observer)}},n=(r(515),r(5)),component=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"codesandbox w-full mb-6 mx-auto bg-black text-white text-3xl text-center flex items-center justify-center overflow-hidden rounded"},[this.isIntersecting&&this.src?t("iframe",{staticClass:"w-full overflow-hidden",attrs:{src:this.src,title:"CodeSandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}):t("span",[this._v("Loading CodeSandbox...")])])}),[],!1,null,"7c79f742",null);t.default=component.exports}}]);