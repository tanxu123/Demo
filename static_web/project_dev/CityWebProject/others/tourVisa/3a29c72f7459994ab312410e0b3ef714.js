/*
Cache: isotope, jquery-timepicker, iphorm-jquery-ui-datepicker, iphorm-jquery-ui-core, bitcommerce-addons, accounting, jquery-zoom, revslider-jquery.themepunch.revolution.min, themepunchtools
*/
/* themepunchtools: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.plugins.min.js?rev=4.1.4) */


/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 09.10.2013
*********************************************/

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);




/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e=t.GreenSockGlobals||t;if(!e.TweenLite){var i,s,r,n,a,o=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},l=o("com.greensock"),h=1e-10,_=[].slice,u=function(){},m=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e}}(),f={},p=function(i,s,r,n){this.sc=f[i]?f[i].sc:[],f[i]=this,this.gsClass=null,this.func=r;var a=[];this.check=function(l){for(var h,_,u,m,c=s.length,d=c;--c>-1;)(h=f[s[c]]||new p(s[c],[])).gsClass?(a[c]=h.gsClass,d--):l&&h.sc.push(this);if(0===d&&r)for(_=("com.greensock."+i).split("."),u=_.pop(),m=o(_.join("."))[u]=this.gsClass=r.apply(r,a),n&&(e[u]=m,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+i.split(".").join("/"),[],function(){return m}):"undefined"!=typeof module&&module.exports&&(module.exports=m)),c=0;this.sc.length>c;c++)this.sc[c].check()},this.check(!0)},c=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},d=l._class=function(t,e,i){return e=e||function(){},c(t,[],function(){return e},i),e};c.globals=e;var v=[0,0,1,1],g=[],T=d("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),w=T.map={},P=T.register=function(t,e,i,s){for(var r,n,a,o,h=e.split(","),_=h.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=h[_],r=s?d("easing."+n,null,!0):l.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(r=T.prototype,r._calcEnd=!1,r.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},i=["Linear","Quad","Cubic","Quart","Quint,Strong"],s=i.length;--s>-1;)r=i[s]+",Power"+s,P(new T(null,null,1,s),r,"easeOut",!0),P(new T(null,null,2,s),r,"easeIn"+(0===s?",easeNone":"")),P(new T(null,null,3,s),r,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=d("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});r=y.prototype,r.addEventListener=function(t,e,i,s,r){r=r||0;var o,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)o=h[l],o.c===e&&o.s===i?h.splice(l,1):0===_&&r>o.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==n||a||n.wake()},r.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},r.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var b=t.requestAnimationFrame,k=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},S=A();for(i=["ms","moz","webkit","o"],s=i.length;--s>-1&&!b;)b=t[i[s]+"RequestAnimationFrame"],k=t[i[s]+"CancelAnimationFrame"]||t[i[s]+"CancelRequestAnimationFrame"];d("Ticker",function(t,e){var i,s,r,o,l,h=this,_=A(),m=e!==!1&&b,f=function(t){S=A(),h.time=(S-_)/1e3;var e,n=h.time-l;(!i||n>0||t===!0)&&(h.frame++,l+=n+(n>=o?.004:o-n),e=!0),t!==!0&&(r=s(f)),e&&h.dispatchEvent("tick")};y.call(h),h.time=h.frame=0,h.tick=function(){f(!0)},h.sleep=function(){null!=r&&(m&&k?k(r):clearTimeout(r),s=u,r=null,h===n&&(a=!1))},h.wake=function(){null!==r&&h.sleep(),s=0===i?u:m&&b?b:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===n&&(a=!0),f(2)},h.fps=function(t){return arguments.length?(i=t,o=1/(i||60),l=this.time+o,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),m=t,h.fps(i),void 0):m},h.fps(t),setTimeout(function(){m&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),r=l.Ticker.prototype=new l.events.EventDispatcher,r.constructor=l.Ticker;var x=d("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,Q){a||n.wake();var i=this.vars.useFrames?G:Q;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});n=x.ticker=new l.Ticker,r=x.prototype,r._dirty=r._gc=r._initted=r._paused=!1,r._totalTime=r._time=0,r._rawPrevTime=-1,r._next=r._last=r._onUpdate=r._timeline=r.timeline=null,r._paused=!1;var C=function(){a&&A()-S>2e3&&n.wake(),setTimeout(C,2e3)};C(),r.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},r.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},r.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},r.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},r.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},r.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},r.render=function(){},r.invalidate=function(){return this},r.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},r._enabled=function(t,e){return a||n.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},r._kill=function(){return this._enabled(!1,!1)},r.kill=function(t,e){return this._kill(t,e),this},r._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},r._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},r.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=m(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},r.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},r.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},r.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},r.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},r.totalTime=function(t,e,i){if(a||n.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&this.render(t,e,!1)}return this},r.progress=r.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},r.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},r.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||h,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},r.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},r.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){a||t||n.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=d("core.SimpleTimeline",function(t){x.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});r=R.prototype=new x,r.constructor=R,r.kill()._gc=!1,r._first=r._last=null,r._sortChildren=!1,r.add=r.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},r._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},r.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},r.rawTime=function(){return a||n.wake(),this._totalTime};var D=d("TweenLite",function(e,i,s){if(x.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?j[D.defaultOverwrite]:"number"==typeof l?l>>0:j[l],(o||e instanceof Array||e.push&&m(e))&&"number"!=typeof e[0])for(this._targets=a=_.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(_.call(n,0))):(this._siblings[r]=B(n,this,!1),1===l&&this._siblings[r].length>1&&q(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=B(e,this,!1),1===l&&this._siblings.length>1&&q(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),E=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},I=function(t,e){var i,s={};for(i in t)F[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!N[i]||N[i]&&N[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};r=D.prototype=new x,r.constructor=D,r.kill()._gc=!1,r.ratio=0,r._firstPT=r._targets=r._overwrittenProps=r._startAt=null,r._notifyPluginsOfEnabled=!1,D.version="1.11.2",D.defaultEase=r._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=n,D.autoSleep=!0,D.selector=t.$||t.jQuery||function(e){return t.$?(D.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var O=D._internals={isArray:m,isSelector:E},N=D._plugins={},L=D._tweenLookup={},U=0,F=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},j={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=x._rootFramesTimeline=new R,Q=x._rootTimeline=new R;Q._startTime=n.time,G._startTime=n.frame,Q._active=G._active=!0,x._updateRoot=function(){if(Q.render((n.time-Q._startTime)*Q._timeScale,!1,!1),G.render((n.frame-G._startTime)*G._timeScale,!1,!1),!(n.frame%120)){var t,e,i;for(i in L){for(e=L[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete L[i]}if(i=Q._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===n._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||n.sleep()}}},n.addEventListener("tick",x._updateRoot);var B=function(t,e,i){var s,r,n=t._gsTweenID;if(L[n||(t._gsTweenID=n="t"+U++)]||(L[n]={target:t,tweens:[]}),e&&(s=L[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return L[n].tweens},q=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var _,u=e._startTime+h,m=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(_=_||$(e,0,p),0===$(o,_,p)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+h>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)o=m[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},$=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*h>n-e?h:(n+=t.totalDuration()/t._timeScale/r)>e+h?0:n-e-h};r._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,l=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=D.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else{i={};for(s in r)F[s]&&"autoCSS"!==s||(i[s]=r[s]);if(i.overwrite=0,i.data="isFromStart",this._startAt=D.to(this.target,0,i),r.immediateRender){if(0===this._time)return}else this._startAt.render(-1,!0)}if(this._ease=l?l instanceof T?r.easeParams instanceof Array?l.config.apply(l,r.easeParams):l:"function"==typeof l?new T(l,r.easeParams):w[l]||D.defaultEase:D.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&D._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},r._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&N.css&&this.vars.autoCSS!==!1&&I(this.vars,e);for(n in this.vars){if(_=this.vars[n],F[n])_&&(_ instanceof Array||_.push&&m(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(N[n]&&(l=new N[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&q(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},r.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(a=this._rawPrevTime,(0===t||0>a||a===h)&&a!==t&&(i=!0,a>h&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t?t:h);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&this._rawPrevTime>h)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===l&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=a=!e||t?t:h)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,m=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===m?_*=_:2===m?_*=_*_:3===m?_*=_*_*_:4===m&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:.5>t/l?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||g))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||i&&0===this._time&&0===o||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||g)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||g),0===l&&this._rawPrevTime===h&&a!==h&&(this._rawPrevTime=0)))}},r._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var i,s,r,n,a,o,l,h;if((m(e)||E(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){l=t||a,h=t!==s&&"all"!==s&&t!==a&&("object"!=typeof t||!t._tempKill);for(r in l)(n=a[r])&&(n.pg&&n.t._kill(l)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),h&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},r.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},r._enabled=function(t,e){if(a||n.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=B(s[i],this,!0);else this._siblings=B(this.target,this,!0)}return x.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((m(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=B(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var M=d("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=M.prototype},!0);if(r=M.prototype,M.version="1.10.1",M.API=2,r._firstPT=null,r._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},r.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},r._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},r._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},M.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===M.API&&(N[(new t[e])._propName]=t[e]);return!0},c.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=d("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){M.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new M(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,M.activate([a]),a},i=t._gsQueue){for(s=0;i.length>s;s++)i[s]();for(r in f)f[r].func||t.console.log("GSAP encountered missing dependency: com.greensock."+r)}a=!1}})(window);
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),window._gsDefine&&window._gsQueue.pop()();
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},l=a.prototype=new t("css");l.constructor=a,a.version="1.11.2",a.API=2,a.defaultTransformPerspective=0,l="px",a.suffixMap={top:l,right:l,bottom:l,left:l,width:l,height:l,fontSize:l,padding:l,margin:l,perspective:l};var h,u,_,p,f,c,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,m=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,x=/opacity:([^;]*)/,w=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,k=function(t,e){return e.toUpperCase()},C=/(?:Left|Right|Width)/i,A=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,L=180/Math.PI,N={},X=document,F=X.createElement("div"),I=X.createElement("img"),E=a._internals={_specialProps:o},Y=navigator.userAgent,z=function(){var t,e=Y.indexOf("Android"),i=X.createElement("div");return _=-1!==Y.indexOf("Safari")&&-1===Y.indexOf("Chrome")&&(-1===e||Number(Y.substr(e+8,1))>3),f=_&&6>Number(Y.substr(Y.indexOf("Version/")+8,1)),p=-1!==Y.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),U=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},B=function(t){window.console&&console.log(t)},j="",V="",q=function(t,e){e=e||F;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(V=3===s?"ms":i[s],j="-"+V.toLowerCase()+"-",V+t):null},W=X.defaultView?X.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return z||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||W(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},Z=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=C.test(e),o=t,l=F.style,h=0>i;return h&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(l.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==s&&o.appendChild?l[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||X.body,l[a?"width":"height"]=i+s),o.appendChild(F),n=parseFloat(F[a?"offsetWidth":"offsetHeight"]),o.removeChild(F),0!==n||r||(n=Z(t,e,i,s,!0))),h?-n:n},H=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-(Z(t,e,parseFloat(r),r.replace(y,""))||0)},$=function(t,e){var i,s,r={};if(e=e||W(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(S,k)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0!==r[i]&&(r[i.replace(S,k)]=e[i]);return z||(r.opacity=U(t)),s=be(t,e,!1),r.rotation=s.rotation,r.skewX=s.skewX,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,we&&(r.z=s.z,r.rotationX=s.rotationX,r.rotationY=s.rotationY,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},G=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:H(t,a),void 0!==h[a]&&(o=new _e(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||W(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,l=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?1:L)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),l>o&&o>-l&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(d),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(d)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},le="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(l in ne)le+="|"+l+"\\b";le=RegExp(le+")","gi");var he=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(le)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",u=a.length,_=u>0?a[0].replace(d,""):"";return u?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(le)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,u>f--)for(;u>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=_;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,u>p--)for(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(h)+l}:function(t){return t}},ue=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},_e=(E._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(E._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,u,_=s,p={},f={},c=i._transform,d=N;for(i._transform=null,N=e,s=u=i.parse(t,e,s,r),N=d,n&&(i._transform=c,_&&(_._prev=null,_._prev&&(_._prev._next=null)));s&&s!==_;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(h=new _e(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],p[o]=s[l],n||(h=new _e(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:p,end:f,firstMPT:h,pt:u}},E.CSSPropTween=function(t,e,s,r,a,o,l,h,u,_,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof pe||n.push(this.n),this.r=h,this.type=o||0,u&&(this.pr=u,i=!0),this.b=void 0===_?s:_,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,l,u){i=i||n||"",a=new pe(t,e,0,0,a,u?2:1,null,!1,o,i,s),s+="";var _,p,f,c,g,v,y,T,x,w,P,S,R=i.split(", ").join(",").split(" "),k=s.split(", ").join(",").split(" "),C=R.length,A=h!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(R=R.join(" ").replace(D,", ").split(" "),k=k.join(" ").replace(D,", ").split(" "),C=R.length),C!==k.length&&(R=(n||"").split(" "),C=R.length),a.plugin=l,a.setRatio=u,_=0;C>_;_++)if(c=R[_],g=k[_],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(m,""),A&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))S=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),x=c.length+g.length>6,x&&!z&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(k[_]).join("transparent")):(z||(x=!1),a.appendXtra(x?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],x?",":S,!0),x&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,S,!1)));else if(v=c.match(d)){if(y=g.match(m),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],w=c.indexOf(P,f),a.appendXtra(c.substr(f,w-f),Number(P),ie(y[p],P),"",A&&"px"===c.substr(w+P.length,2),0===p),f=w+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(S=a.xs0+a.data.s,_=1;a.l>_;_++)S+=a["xs"+_]+a.data["xn"+_];a.e=S+a["xs"+_]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(l=pe.prototype,l.l=l.pr=0;--ce>0;)l["xn"+ce]=0,l["xs"+ce]="";l.xs0="",l._next=l._prev=l.xfirst=l.data=l.plugin=l.setRatio=l.rxp=null,l.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var de=function(t,e){e=e||{},this.p=e.prefix?q(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||he(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},me=E._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new de(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";me(t,{parser:function(t,i,s,r,n,a,l){var h=(window.GreenSockGlobals||window).com.greensock.plugins[e];return h?(h._cssRegister(),o[s].parse(t,i,s,r,n,a,l)):(B("Error: "+e+" js file not loaded."),n)}})}};l=de.prototype,l.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,u,_,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),l=i.replace(D,"|").split("|")):p&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,p&&(u=e.indexOf(p),_=i.indexOf(p),u!==_&&(i=-1===_?l:o,i[a]+=" "+p));e=o.join(", "),i=l.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},l.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){me(t,{parser:function(t,s,r,n,a,o){var l=new pe(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=q("transform"),Te=j+"transform",xe=q("transformOrigin"),we=null!==q("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,l,h,u,_,p,f,c,d,m,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,x=1e5,w=179.99,b=w*M,P=we?parseFloat(Q(t,xe,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=Q(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(A),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)l=Number(n[o]),n[o]=(h=l-(l|=0))?(0|h*x+(0>h?-.5:.5))/x+l:l;if(16===n.length){var S=n[8],R=n[9],k=n[10],C=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,C=S*D-n[12],O=R*D-n[13],D=k*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var N,X,F,I,E,Y,z,U=n[0],B=n[1],j=n[2],V=n[3],q=n[4],W=n[5],Z=n[6],H=n[7],$=n[11],G=Math.atan2(Z,k),K=-b>G||G>b;v.rotationX=G*L,G&&(I=Math.cos(-G),E=Math.sin(-G),N=q*I+S*E,X=W*I+R*E,F=Z*I+k*E,S=q*-E+S*I,R=W*-E+R*I,k=Z*-E+k*I,$=H*-E+$*I,q=N,W=X,Z=F),G=Math.atan2(S,U),v.rotationY=G*L,G&&(Y=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),N=U*I-S*E,X=B*I-R*E,F=j*I-k*E,R=B*E+R*I,k=j*E+k*I,$=V*E+$*I,U=N,B=X,j=F),G=Math.atan2(B,W),v.rotation=G*L,G&&(z=-b>G||G>b,I=Math.cos(-G),E=Math.sin(-G),U=U*I+q*E,X=B*I+W*E,W=B*-E+W*I,Z=j*-E+Z*I,B=X),z&&K?v.rotation=v.rotationX=0:z&&Y?v.rotation=v.rotationY=0:Y&&K&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(U*U+B*B)*x+.5)/x,v.scaleY=(0|Math.sqrt(W*W+R*R)*x+.5)/x,v.scaleZ=(0|Math.sqrt(Z*Z+k*k)*x+.5)/x,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=C,v.y=O,v.z=D}}else if(!(we&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===Q(t,"display",e))){var J=n.length>=6,te=J?n[0]:1,ee=n[1]||0,ie=n[2]||0,se=J?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,u=Math.sqrt(te*te+ee*ee),_=Math.sqrt(se*se+ie*ie),p=te||ee?Math.atan2(ee,te)*L:v.rotation||0,f=ie||se?Math.atan2(ie,se)*L+p:v.skewX||0,c=u-Math.abs(v.scaleX||0),d=_-Math.abs(v.scaleY||0),Math.abs(f)>90&&270>Math.abs(f)&&(y?(u*=-1,f+=0>=p?180:-180,p+=0>=p?180:-180):(_*=-1,f+=0>=f?180:-180)),m=(p-v.rotation)%180,g=(f-v.skewX)%180,(void 0===v.skewX||c>T||-T>c||d>T||-T>d||m>-w&&w>m&&false|m*x||g>-w&&w>g&&false|g*x)&&(v.scaleX=u,v.scaleY=_,v.rotation=p,v.skewX=f),we&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation*M,n=r+s.skewX*M,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,u=(0|Math.cos(n)*s.scaleY*a)/a,_=this.t.style,p=this.t.currentStyle;if(p){i=l,l=-h,h=-i,e=p.filter,_.filter="";var f,d,m=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,x="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+u,w=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*m*s.ox:s.ox)-m/2,d=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+d*l),b+=d-(f*h+d*u)),v?(f=m/2,d=g/2,x+=", Dx="+(f-(f*o+d*l)+w)+", Dy="+(d-(f*h+d*u)+b)+")"):x+=", sizingMethod='auto expand')",_.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&_.removeAttribute("filter")),!v){var P,S,R,k=8>c?1:-1;for(f=s.ieOffsetX||0,d=s.ieOffsetY||0,s.ieOffsetX=Math.round((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),ce=0;4>ce;ce++)S=J[ce],P=p[S],i=-1!==P.indexOf("px")?parseFloat(P):Z(this.t,S,parseFloat(P),P.replace(y,""))||0,R=i!==s[S]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:d-s.ieOffsetY,_[S]=(s[S]=Math.round(i-R*(0===ce||2===ce?1:k)))+"px"}}},Se=function(){var t,e,i,s,r,n,a,o,l,h,u,_,f,c,d,m,g,v,y,T,x,w,b,P,S,R,k=this.data,C=this.t.style,A=k.rotation*M,O=k.scaleX,D=k.scaleY,L=k.scaleZ,N=k.perspective;if(p&&(P=C.top?"top":C.bottom?"bottom":parseFloat(Q(this.t,"top",null,!1))?"bottom":"top",T=Q(this.t,P,null,!1),S=parseFloat(T)||0,R=T.substr((S+"").length)||"px",k._ffFix=!k._ffFix,C[P]=(k._ffFix?S+.05:S-.05)+R,S=1e-4,S>O&&O>-S&&(O=L=2e-5),S>D&&D>-S&&(D=L=2e-5)),A||k.skewX)v=Math.cos(A),y=Math.sin(A),t=v,r=y,k.skewX&&(A-=k.skewX*M,v=Math.cos(A),y=Math.sin(A)),e=-y,n=v;else{if(!(k.rotationY||k.rotationX||1!==L||N))return C[ye]="translate3d("+k.x+"px,"+k.y+"px,"+k.z+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;t=n=1,e=r=0}u=1,i=s=a=o=l=h=_=f=c=0,d=N?-1/N:0,m=k.zOrigin,g=1e5,A=k.rotationY*M,A&&(v=Math.cos(A),y=Math.sin(A),l=u*-y,f=d*-y,i=t*y,a=r*y,u*=v,d*=v,t*=v,r*=v),A=k.rotationX*M,A&&(v=Math.cos(A),y=Math.sin(A),T=e*v+i*y,x=n*v+a*y,w=h*v+u*y,b=c*v+d*y,i=e*-y+i*v,a=n*-y+a*v,u=h*-y+u*v,d=c*-y+d*v,e=T,n=x,h=w,c=b),1!==L&&(i*=L,a*=L,u*=L,d*=L),1!==D&&(e*=D,n*=D,h*=D,c*=D),1!==O&&(t*=O,r*=O,l*=O,f*=O),m&&(_-=m,s=i*_,o=a*_,_=u*_+m),s=(T=(s+=k.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=k.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,_=(T=(_+=k.z)-(_|=0))?(0|T*g+(0>T?-.5:.5))/g+_:_,C[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|l*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|h*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|u*g)/g,(0|d*g)/g,s,o,_,N?1+-_/N:1].join(",")+")"},Re=function(){var t,e,i,s,r,n,a,o,l,h=this.data,u=this.t,_=u.style;p&&(t=_.top?"top":_.bottom?"bottom":parseFloat(Q(u,"top",null,!1))?"bottom":"top",e=Q(u,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",h._ffFix=!h._ffFix,_[t]=(h._ffFix?i+.05:i-.05)+s),h.rotation||h.skewX?(r=h.rotation*M,n=r-h.skewX*M,a=1e5,o=h.scaleX*a,l=h.scaleY*a,_[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-l)/a+","+(0|Math.cos(n)*l)/a+","+h.x+","+h.y+")"):_[ye]="matrix("+h.scaleX+",0,0,"+h.scaleY+","+h.x+","+h.y+")"};me("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var l,h,u,_,p,f,c,d=s._transform=be(t,r,!0,o.parseTransform),m=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)u=m.cssText,m[ye]=y.transform,m.display="block",l=be(t,null,!1),m.cssText=u;else if("object"==typeof y){if(l={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,d.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,d.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,d.scaleZ),x:se(y.x,d.x),y:se(y.y,d.y),z:se(y.z,d.z),perspective:se(y.transformPerspective,d.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(u in c)y[u]=c[u];else y.rotation=c;l.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:d.rotation,d.rotation,"rotation",T),we&&(l.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":d.rotationX||0,d.rotationX,"rotationX",T),l.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":d.rotationY||0,d.rotationY,"rotationY",T)),l.skewX=null==y.skewX?d.skewX:re(y.skewX,d.skewX),l.skewY=null==y.skewY?d.skewY:re(y.skewY,d.skewY),(h=l.skewY-d.skewY)&&(l.skewX+=h,l.rotation+=h)}for(null!=y.force3D&&(d.force3D=y.force3D,f=!0),p=d.force3D||d.z||d.rotationX||d.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,p||null==y.scale||(l.scaleZ=1);--v>-1;)i=ve[v],_=l[i]-d[i],(_>g||-g>_||null!=N[i])&&(f=!0,n=new pe(d,i,d[i],_,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return _=y.transformOrigin,(_||we&&p&&d.zOrigin)&&(ye?(f=!0,i=xe,_=(_||Q(t,i,r,!1,"50% 50%"))+"",n=new pe(m,i,0,0,n,-1,"transformOrigin"),n.b=m[i],n.plugin=a,we?(u=d.zOrigin,_=_.split(" "),d.zOrigin=(_.length>2&&(0===u||"0px"!==_[2])?parseFloat(_[2]):u)||0,n.xs0=n.e=m[i]=_[0]+" "+(_[1]||"50%")+" 0px",n=new pe(d,"zOrigin",0,0,n,-1,n.n),n.b=u,n.xs0=n.e=d.zOrigin):n.xs0=n.e=m[i]=_):ee(_+"",d)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),me("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),me("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,u,_,p,f,c,d,m,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(d=parseFloat(t.offsetWidth),m=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=q(b[l])),_=u=Q(t,b[l],r,!1,"0px"),-1!==_.indexOf(" ")&&(u=_.split(" "),_=u[0],u=u[1]),p=h=o[l],f=parseFloat(_),v=_.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=Z(t,"borderLeft",f,v),x=Z(t,"borderTop",f,v),"%"===g?(_=100*(T/d)+"%",u=100*(x/m)+"%"):"em"===g?(w=Z(t,"borderLeft",1,"em"),_=T/w+"em",u=x/w+"em"):(_=T+"px",u=x+"px"),y&&(p=parseFloat(_)+c+g,h=parseFloat(u)+c+g)),a=fe(P,b[l],_+" "+u,p+" "+h,!1,"0px",a);return a},prefix:!0,formatter:he("0px 0px 0px 0px",!1,!0)}),me("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,u,_,p,f="background-position",d=r||W(t,null),m=this.format((d?c?d.getPropertyValue(f+"-x")+" "+d.getPropertyValue(f+"-y"):d.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==m.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=Q(t,"backgroundImage").replace(R,""),p&&"none"!==p)){for(o=m.split(" "),l=g.split(" "),I.setAttribute("src",p),h=2;--h>-1;)m=o[h],u=-1!==m.indexOf("%"),u!==(-1!==l[h].indexOf("%"))&&(_=0===h?t.offsetWidth-I.width:t.offsetHeight-I.height,o[h]=u?parseFloat(m)/100*_+"px":100*(parseFloat(m)/_)+"%");m=o.join(" ")}return this.parseComplex(t.style,m,g,n,a)},formatter:ee}),me("backgroundSize",{defaultValue:"0 0",formatter:ee}),me("perspective",{defaultValue:"0px",prefix:!0}),me("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),me("transformStyle",{prefix:!0}),me("backfaceVisibility",{prefix:!0}),me("userSelect",{prefix:!0}),me("margin",{parser:ue("marginTop,marginRight,marginBottom,marginLeft")}),me("padding",{parser:ue("paddingTop,paddingRight,paddingBottom,paddingLeft")}),me("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>c?(l=t.currentStyle,h=8>c?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),me("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),me("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),me("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(le)||["#000"])[0]}}),me("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var ke=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(w,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};me("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),z?n=new pe(l,"opacity",o,e-o,n):(n=new pe(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=ke),h&&(n=new pe(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ce=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ae=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ce(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};me("className",{parser:function(t,e,s,n,a,o,l){var h,u,_,p,f,c=t.className,d=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ae,a.pr=-11,i=!0,a.b=c,u=$(t,r),_=t._gsClassPT){for(p={},f=_.data;f;)p[f.p]=1,f=f._next;_.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,h=G(t,u,$(t),l,p),t.className=c,a.data=h.firstMPT,t.style.cssText=d,a=a.xfirst=n.parse(t,h.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?xe:o[i].p),Ce(n,i);r&&(Ce(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(me("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),l="bezier,throwProps,physicsProps,physics2D".split(","),ce=l.length;ce--;)ge(l[ce]);l=a.prototype,l._firstPT=null,l._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,h=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=W(t,""),n=this._overwriteProps;var l,p,c,d,m,g,v,y,T,w=t.style;if(u&&""===w.zIndex&&(l=Q(t,"zIndex",r),("auto"===l||""===l)&&(w.zIndex=0)),"string"==typeof e&&(d=w.cssText,l=$(t,r),w.cssText=d+";"+e,l=G(t,l,$(t)).difs,!z&&x.test(e)&&(l.opacity=parseFloat(RegExp.$1)),e=l,w.cssText=d),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?_&&(u=!0,""===w.zIndex&&(v=Q(t,"zIndex",r),("auto"===v||""===v)&&(w.zIndex=0)),f&&(w.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):w.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&we?Se:ye?Re:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=d;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:m)?p._prev._next=p:d=p,(p._next=c)?c._prev=p:m=p,p=g}this._firstPT=d}return!0},l.parse=function(t,e,i,n){var a,l,u,_,p,f,c,d,m,g,v=t.style;for(a in e)f=e[a],l=o[a],l?i=l.parse(t,f,a,this,i,n,e):(p=Q(t,a,r)+"",m="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||m&&b.test(f)?(m||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!m||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(u=parseFloat(p),c=u||0===u?p.substr((u+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(u=te(t,a,r),c="px"):"left"===a||"top"===a?(u=H(t,a,r),c="px"):(u="opacity"!==a?0:1,c="")),g=m&&"="===f.charAt(1),g?(_=parseInt(f.charAt(0)+"1",10),f=f.substr(2),_*=parseFloat(f),d=f.replace(y,"")):(_=parseFloat(f),d=m?f.substr((_+"").length)||"":""),""===d&&(d=s[a]||c),f=_||0===_?(g?_+u:_)+d:e[a],c!==d&&""!==d&&(_||0===_)&&(u||0===u)&&(u=Z(t,a,u,c),"%"===d?(u/=Z(t,a,100,"%")/100,u>100&&(u=100),e.strictUnits!==!0&&(p=u+"%")):"em"===d?u/=Z(t,a,1,"em"):(_=Z(t,a,_,d),d="px"),g&&(_||0===_)&&(f=_+u+d)),g&&(_+=u),!u&&0!==u||!_&&0!==_?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,_||u||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):B("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,u,_-u,i,0,a,h!==!1&&("px"===d||"zIndex"===a),0,p,f),i.xs0=d)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},l.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},l._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},l._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},l._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push($(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),l=[o],h=[],u=[],_=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,h,_),o.render(i,!0),De(t,u),o.render(0,!0),o._enabled(!0),r=_.length;--r>-1;)if(n=G(_[r],h[r],u[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);l.push(e.to(_[r],i,n))}return l},t.activate([a]),a},!0)}),window._gsDefine&&window._gsQueue.pop()();

// WAIT FOR IMAGES
/*
 * waitForImages 1.4
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};
		e.fn.swipe=function(t){if(!this)return false;var n={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var r="left";var i="right";var s="up";var o="down";var u="none";var f="horizontal";var l="vertical";var c="auto";var h="start";var p="move";var d="end";var v="cancel";var m="ontouchstart"in window,g=m?"touchstart":"mousedown",y=m?"touchmove":"mousemove",b=m?"touchend":"mouseup",w="touchcancel";var E="start";if(t.allowPageScroll==undefined&&(t.swipe!=undefined||t.swipeStatus!=undefined))t.allowPageScroll=u;if(t)e.extend(n,t);return this.each(function(){function t(){var e=S();if(e<=45&&e>=0)return r;else if(e<=360&&e>=315)return r;else if(e>=135&&e<=225)return i;else if(e>45&&e<135)return o;else return s}function S(){var e=H.x-B.x;var t=B.y-H.y;var n=Math.atan2(t,e);var r=Math.round(n*180/Math.PI);if(r<0)r=360-Math.abs(r);return r}function x(){return Math.round(Math.sqrt(Math.pow(B.x-H.x,2)+Math.pow(B.y-H.y,2)))}function T(e,t){if(n.allowPageScroll==u){e.preventDefault()}else{var a=n.allowPageScroll==c;switch(t){case r:if(n.swipeLeft&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case i:if(n.swipeRight&&a||!a&&n.allowPageScroll!=f)e.preventDefault();break;case s:if(n.swipeUp&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break;case o:if(n.swipeDown&&a||!a&&n.allowPageScroll!=l)e.preventDefault();break}}}function N(e,t){if(n.swipeStatus)n.swipeStatus.call(_,e,t,direction||null,distance||0);if(t==v){if(n.click&&(P==1||!m)&&(isNaN(distance)||distance==0))n.click.call(_,e,e.target)}if(t==d){if(n.swipe){n.swipe.call(_,e,direction,distance)}switch(direction){case r:if(n.swipeLeft)n.swipeLeft.call(_,e,direction,distance);break;case i:if(n.swipeRight)n.swipeRight.call(_,e,direction,distance);break;case s:if(n.swipeUp)n.swipeUp.call(_,e,direction,distance);break;case o:if(n.swipeDown)n.swipeDown.call(_,e,direction,distance);break}}}function C(e){P=0;H.x=0;H.y=0;B.x=0;B.y=0;F.x=0;F.y=0}function L(e){e.preventDefault();distance=x();direction=t();if(n.triggerOnTouchEnd){E=d;if((P==n.fingers||!m)&&B.x!=0){if(distance>=n.threshold){N(e,E);C(e)}else{E=v;N(e,E);C(e)}}else{E=v;N(e,E);C(e)}}else if(E==p){E=v;N(e,E);C(e)}M.removeEventListener(y,A,false);M.removeEventListener(b,L,false)}function A(e){if(E==d||E==v)return;var r=m?e.touches[0]:e;B.x=r.pageX;B.y=r.pageY;direction=t();if(m){P=e.touches.length}E=p;T(e,direction);if(P==n.fingers||!m){distance=x();if(n.swipeStatus)N(e,E,direction,distance);if(!n.triggerOnTouchEnd){if(distance>=n.threshold){E=d;N(e,E);C(e)}}}else{E=v;N(e,E);C(e)}}function O(e){var t=m?e.touches[0]:e;E=h;if(m){P=e.touches.length}distance=0;direction=null;if(P==n.fingers||!m){H.x=B.x=t.pageX;H.y=B.y=t.pageY;if(n.swipeStatus)N(e,E)}else{C(e)}M.addEventListener(y,A,false);M.addEventListener(b,L,false)}var M=this;var _=e(this);var D=null;var P=0;var H={x:0,y:0};var B={x:0,y:0};var F={x:0,y:0};try{this.addEventListener(g,O,false);this.addEventListener(w,C)}catch(I){}})}
})(jQuery)
;

/* revslider-jquery.themepunch.revolution.min: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/js/jquery.themepunch.revolution.min.js?rev=4.1.4) */


/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.1.2 (12.12.2013)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/


(function(jQuery,undefined){

	
	////////////////////////////////////////
	// THE REVOLUTION PLUGIN STARTS HERE //
	///////////////////////////////////////

	jQuery.fn.extend({

		// OUR PLUGIN HERE :)
		revolution: function(options) {



				////////////////////////////////
				// SET DEFAULT VALUES OF ITEM //
				////////////////////////////////
				jQuery.fn.revolution.defaults = {
					delay:9000,
					startheight:500,
					startwidth:960,
					fullScreenAlignForce:"off",
					autoHeight:"off",

					hideThumbs:200,

					thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
					thumbHeight:50,
					thumbAmount:3,

					navigationType:"bullet",				// bullet, thumb, none
					navigationArrows:"solo",			// nextto, solo, none
					navigation_arrows_style:'defalut',
					hideThumbsOnMobile:"off",
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResoluition:0,

					navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item),

					navigationHAlign:"center",				// Vertical Align top,center,bottom
					navigationVAlign:"bottom",					// Horizontal Align left,center,right
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					keyboardNavigation:"on",

					touchenabled:"on",						// Enable Swipe Function : on/off
					onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off


					stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
					stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

					hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
					hideAllCaptionAtLimit:0,				// Hide all The Captions if Width of Browser is less then this value
					hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value

					shadow:0,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
					fullWidth:"off",						// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
					fullScreen:"off",
					minFullScreenHeight:0,					// The Minimum FullScreen Height
					fullScreenOffsetContainer:"",
					dottedOverlay:"none",					//twoxtwo, threexthree, twoxtwowhite, threexthreewhite

					forceFullWidth:"off"						// Force The FullWidth

				};

					options = jQuery.extend({}, jQuery.fn.revolution.defaults, options);





					return this.each(function() {

						var opt=options;

						if (opt.fullWidth!="on" && opt.fullScreen!="on") opt.autoHeight = "off";
						if (opt.fullScreen=="on") opt.autoHeight = "on";
						if (opt.fullWidth!="on" && opt.fullScreen!="on") forceFulWidth="off";

						var container=jQuery(this);
					
						if (opt.fullWidth=="on" && opt.autoHeight=="off")
							container.css({maxHeight:opt.startheight+"px"});

						if (is_mobile() && opt.hideThumbsOnMobile=="on" && opt.navigationType=="thumb")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="bullet")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideBulletsOnMobile=="on" && opt.navigationType=="both")
						   opt.navigationType = "none"

						if (is_mobile() && opt.hideArrowsOnMobile=="on")
						   opt.navigationArrows = "none"

						if (opt.forceFullWidth=="on") {

							var loff = container.parent().offset().left;
							var mb = container.parent().css('marginBottom');
							var mt = container.parent().css('marginTop');
							if (mb==undefined) mb=0;
							if (mt==undefined) mt=0;

							container.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:'+mt+';margin-bottom:'+mb+'" class="forcefullwidth_wrapper_tp_banner"></div>');
							container.closest('.forcefullwidth_wrapper_tp_banner').append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+container.height()+'px"></div>');
							container.css({'backgroundColor':container.parent().css('backgroundColor'),'backgroundImage':container.parent().css('backgroundImage')});
							//container.parent().css({'position':'absolute','width':jQuery(window).width()});
							container.parent().css({'left':(0-loff)+"px",position:'absolute','width':jQuery(window).width()});
							opt.width=jQuery(window).width();
						}

						// HIDE THUMBS UNDER RESOLUTION
						try{
							if (opt.hideThumbsUnderResolution>jQuery(window).width() && opt.hideThumbsUnderResolution!=0) {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"none"});
							} else {
								container.parent().find('.tp-bullets.tp-thumbs').css({display:"block"});
							}
						} catch(e) {}

						if (!container.hasClass("revslider-initialised")) {

									container.addClass("revslider-initialised");
									if (container.attr('id')==undefined) container.attr('id',"revslider-"+Math.round(Math.random()*1000+5));

									// CHECK IF FIREFOX 13.mp4 IS ON WAY.. IT HAS A STRANGE BUG, CSS ANIMATE SHOULD NOT BE USED



									opt.firefox13 = false;
									opt.ie = !jQuery.support.opacity;
									opt.ie9 = (document.documentMode == 9);


									// CHECK THE jQUERY VERSION
									var version = jQuery.fn.jquery.split('.'),
										versionTop = parseFloat(version[0]),
										versionMinor = parseFloat(version[1]),
										versionIncrement = parseFloat(version[2] || '0');

									if (versionTop==1 && versionMinor < 7) {
										container.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+version+' <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>');
									}

									if (versionTop>1) opt.ie=false;


									// Delegate .transition() calls to .animate()
									// if the browser can't do CSS transitions.
									if (!jQuery.support.transition)
										jQuery.fn.transition = jQuery.fn.animate;

									// CATCH THE CONTAINER


									 // LOAD THE YOUTUBE API IF NECESSARY

									container.find('.caption').each(function() { jQuery(this).addClass('tp-caption')});

									if (is_mobile()) {
										container.find('.tp-caption').each(function() {
											if (jQuery(this).data('autoplay')==true)
												 jQuery(this).data('autoplay',false);
											// && jQuery(this).data('forcecover')!=1)
										})
									}


									var addedyt=0;
									var addedvim=0;
									var addedvid=0;
									var httpprefix = "http";

									if (location.protocol === 'https:') {
											httpprefix = "https";
									}
									container.find('.tp-caption iframe').each(function(i) {
										try {

												if (jQuery(this).attr('src').indexOf('you')>0 && addedyt==0) {
													addedyt=1;
													var s = document.createElement("script");
													s.src = httpprefix+"://www.youtube.com/player_api"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];
													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix+"://www.youtube.com/iframe_api")
														   loadit = false;
													});
													if (loadit)
														before.parentNode.insertBefore(s, before);
												}
											} catch(e) {}
									});



									 // LOAD THE VIMEO API
									 container.find('.tp-caption iframe').each(function(i) {
										try{
												if (jQuery(this).attr('src').indexOf('vim')>0 && addedvim==0) {
													addedvim=1;
													var f = document.createElement("script");
													f.src = httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];

													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == httpprefix+"://a.vimeocdn.com/js/froogaloop2.min.js")
														   loadit = false;
													});
													if (loadit)
														before.parentNode.insertBefore(f, before);
												}
											} catch(e) {}
									});





									// LOAD THE VIDEO.JS API IF NEEDED
									container.find('.tp-caption video').each(function(i) {
										try{
												if (jQuery(this).hasClass('video-js') && addedvid==0) {
													addedvid=1;
													var f = document.createElement("script");
													f.src = opt.videoJsPath+"video.js"; /* Load Player API*/
													var before = document.getElementsByTagName("script")[0];

													var loadit = true;
													jQuery('head').find('*').each(function(){
														if (jQuery(this).attr('src') == opt.videoJsPath+"video.js")
														   loadit = false;
													});
													if (loadit) {
														before.parentNode.insertBefore(f, before);
														jQuery('head').append('<link rel="stylesheet" type="text/css" href="'+opt.videoJsPath+'video-js.min.css" media="screen" />');
														jQuery('head').append('<script> videojs.options.flash.swf = "'+opt.videoJsPath+'video-js.swf";</script>');
													}
												}
											} catch(e) {}
									});

									// SHUFFLE MODE
									if (opt.shuffle=="on") {
										for (var u=0;u<container.find('>ul:first-child >li').length;u++) {
											var it = Math.round(Math.random()*container.find('>ul:first-child >li').length);
											container.find('>ul:first-child >li:eq('+it+')').prependTo(container.find('>ul:first-child'));
										}
									}


									// CREATE SOME DEFAULT OPTIONS FOR LATER
									opt.slots=4;
									opt.act=-1;
									opt.next=0;

									// IF START SLIDE IS SET
									if (opt.startWithSlide !=undefined) opt.next=opt.startWithSlide;
									
									// IF DEEPLINK HAS BEEN SET
									var deeplink = getUrlVars("#")[0];
									if (deeplink.length<9) {
										if (deeplink.split('slide').length>1) {
											var dslide=parseInt(deeplink.split('slide')[1],0);
											if (dslide<1) dslide=1;
											if (dslide>container.find('>ul:first >li').length) dslide=container.find('>ul:first >li').length;
											opt.next=dslide-1;
										}
									}


									opt.origcd=opt.delay;
									opt.firststart=1;

									// BASIC OFFSET POSITIONS OF THE BULLETS
									if (opt.navigationHOffset==undefined) opt.navOffsetHorizontal=0;
									if (opt.navigationVOffset==undefined) opt.navOffsetVertical=0;


									container.append('<div class="tp-loader"></div>');

									// RESET THE TIMER
									if (container.find('.tp-bannertimer').length==0) container.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
									var bt=container.find('.tp-bannertimer');
									if (bt.length>0) {
										bt.css({'width':'0%'});
									};


									// WE NEED TO ADD A BASIC CLASS FOR SETTINGS.CSS
									container.addClass("tp-simpleresponsive");
									opt.container=container;

									//if (container.height()==0) container.height(opt.startheight);

									// AMOUNT OF THE SLIDES
									opt.slideamount = container.find('>ul:first >li').length;


									// A BASIC GRID MUST BE DEFINED. IF NO DEFAULT GRID EXIST THAN WE NEED A DEFAULT VALUE, ACTUAL SIZE OF CONAINER
									if (container.height()==0) container.height(opt.startheight);
									if (opt.startwidth==undefined || opt.startwidth==0) opt.startwidth=container.width();
									if (opt.startheight==undefined || opt.startheight==0) opt.startheight=container.height();

									// OPT WIDTH && HEIGHT SHOULD BE SET
									opt.width=container.width();
									opt.height=container.height();


									// DEFAULT DEPENDECIES
									opt.bw= opt.startwidth / container.width();
									opt.bh = opt.startheight / container.height();

									// IF THE ITEM ALREADY IN A RESIZED FORM
									if (opt.width!=opt.startwidth) {

										opt.height = Math.round(opt.startheight * (opt.width/opt.startwidth));

										container.height(opt.height);

									}

									// LETS SEE IF THERE IS ANY SHADOW
									if (opt.shadow!=0) {
										container.parent().append('<div class="tp-bannershadow tp-shadow'+opt.shadow+'"></div>');
										var loff=0;
										if (opt.forceFullWidth=="on"){
											var offset = opt.container.parent().offset();
											if(offset){
												loff = 0-offset.left;
											}
										}
										container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
									}


									container.find('ul').css({'display':'none'});

									var fliparent = container;

									// CHECK IF LAZY LOAD HAS BEEN ACTIVATED
									if (opt.lazyLoad=="on") {
										var fli = container.find('ul >li >img').first();
										if (fli.data('lazyload')!=undefined) fli.attr('src',fli.data('lazyload'));
										fli.data('lazydone',1);
										fliparent = fli.parent();
									}


									// IF IMAGES HAS BEEN LOADED
									fliparent.waitForImages(function() {
												// PREPARE THE SLIDES
												container.find('ul').css({'display':'block'});
												prepareSlides(container,opt);

												// CREATE BULLETS
												if (opt.slideamount >1) createBullets(container,opt);
												if (opt.slideamount >1) createThumbs(container,opt);
												if (opt.slideamount >1) createArrows(container,opt);
												if (opt.keyboardNavigation=="on") createKeyboard(container,opt);

												swipeAction(container,opt);

												if (opt.hideThumbs>0) hideThumbs(container,opt);


												container.waitForImages(function() {
													// START THE FIRST SLIDE

													container.find('.tp-loader').fadeOut(600);
													setTimeout(function() {

														swapSlide(container,opt);
														// START COUNTDOWN
														if (opt.slideamount >1) countDown(container,opt);
														container.trigger('revolution.slide.onloaded');
													},600);

												});
									});



									// IF RESIZED, NEED TO STOP ACTUAL TRANSITION AND RESIZE ACTUAL IMAGES
									jQuery(window).resize(function() {
										if (jQuery('body').find(container)!=0)
											if (opt.forceFullWidth=="on" ) {
												var offset = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset();
												if(offset){
													var loff = opt.container.closest('.forcefullwidth_wrapper_tp_banner').offset().left;
													//opt.container.parent().css({'width':jQuery(window).width()});
													opt.container.parent().css({'left':(0-loff)+"px",'width':jQuery(window).width()});
												}
											}

											if (container.outerWidth(true)!=opt.width || opt.forceFullWidth=="on") {
													
													containerResized(container,opt);
											}
									});

									// HIDE THUMBS UNDER SIZE...
									try{
										if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
											if (opt.hideThumbsUnderResoluition>jQuery(window).width())
												jQuery('.tp-bullets').css({display:"none"});
											 else
											 	jQuery('.tp-bullets').css({display:"block"});
										}
									} catch(e) {}



									// CHECK IF THE CAPTION IS A "SCROLL ME TO POSITION" CAPTION IS
									//if (opt.fullScreen=="on") {
										container.find('.tp-scrollbelowslider').on('click',function() {
												var off=0;
												try{
												 	off = jQuery('body').find(opt.fullScreenOffsetContainer).height();
												 } catch(e) {}
												try{
												 	off = off - jQuery(this).data('scrolloffset');
												 } catch(e) {}

												jQuery('body,htmlStudy').animate(
													{scrollTop:(container.offset().top+(container.find('>ul >li').height())-off)+"px"},{duration:400});
											});
									//}
						}

					})
				},


		// METHODE PAUSE
		revscroll: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						jQuery('body,htmlStudy').animate(
							{scrollTop:(container.offset().top+(container.find('>ul >li').height())-oy)+"px"},{duration:400});
					})
				},
				
		// METHODE PAUSE
		revredraw: function(oy) {
					return this.each(function() {
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						containerResized(container,opt);

					})
				},
		revRefresh: function(obj) {
					
					if(obj.bitAction == "changePostion") {
						
						var s =jQuery(this).find("[data-slideid="+obj.slideid+"] .tp-caption[bitslidetextindex="+obj.textIndex+"]");
						s.data('x',obj.left);
						s.data('y',obj.top);
						s.attr("dataleft",obj.left);
						s.attr("datatop",obj.top);
						s.attr('dataalignhor',"left");
						s.attr('dataalignvert',"top");
						s.attr("data-x",obj.left);
						s.attr("data-y",obj.top);
						s.attr("changePostion",1);
					}
		},
		// METHODE PAUSE
		revpause: function(options) {

					return this.each(function() {
						var container=jQuery(this);
						container.data('conthover',1);
						container.data('conthover-changed',1);
						container.trigger('revolution.slide.onpause');
						var bt = container.parent().find('.tp-bannertimer');
						bt.stop();

					})


				},

		// METHODE RESUME
		revresume: function(options) {
					return this.each(function() {
						var container=jQuery(this);
						container.data('conthover',0);
						container.data('conthover-changed',1);
						container.trigger('revolution.slide.onresume');
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						var t=0;
						if(opt){
							t =((opt.delay-opt.cd)-100);
						}
						bt.animate({'width':"100%"},{duration:t,queue:false, easing:"linear"});
					})

				},

		// METHODE NEXT
		revnext: function(options) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.parent().find('.tp-rightarrow').click();


					})

				},

		// METHODE RESUME
		revprev: function(options) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.parent().find('.tp-leftarrow').click();
					})

				},

		// METHODE LENGTH
		revmaxslide: function(options) {
						// CATCH THE CONTAINER
						return jQuery(this).find('>ul:first-child >li').length;
				},


		// METHODE CURRENT
		revcurrentslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						return opt.act;
				},

		// METHODE CURRENT
		revlastslide: function(options) {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						var bt = container.parent().find('.tp-bannertimer');
						var opt = bt.data('opt');
						return opt.lastslide;
				},


		// METHODE JUMP TO SLIDE
		revshowslide: function(slide) {
					return this.each(function() {
						// CATCH THE CONTAINER
						var container=jQuery(this);
						container.data('showus',slide);
						container.parent().find('.tp-rightarrow').click();
					})

				}


})


		///////////////////////////
		// GET THE URL PARAMETER //
		///////////////////////////
		function getUrlVars(hashdivider)
			{
				var vars = [], hash;
				var hashes = window.location.href.slice(window.location.href.indexOf(hashdivider) + 1).split('_');
				for(var i = 0; i < hashes.length; i++)
				{
					hashes[i] = hashes[i].replace('%3D',"=");
					hash = hashes[i].split('=');
					vars.push(hash[0]);
					vars[hash[0]] = hash[1];
				}
				return vars;
			}

		//////////////////////////
		//	CONTAINER RESIZED	//
		/////////////////////////
		function containerResized(container,opt) {

			// HIDE THUMBS UNDER SIZE...
			try{
				if (opt.hideThumbsUnderResoluition!=0 && opt.navigationType=="thumb") {
					if (opt.hideThumbsUnderResoluition>jQuery(window).width())
						jQuery('.tp-bullets').css({display:"none"});
					 else
					 	jQuery('.tp-bullets').css({display:"block"});
				}
			} catch(e) {}


			container.find('.defaultimg').each(function(i) {
					setSize(jQuery(this),opt);
			});

			var loff=0;
			if (opt.forceFullWidth=="on")
				var offset = opt.container.parent().offset();
				if(offset){
					loff = 0-offset.left;
				}
			try{
				container.parent().find('.tp-bannershadow').css({'width':opt.width,'left':loff});
			} catch(e) {}

			var actsh = container.find('>ul >li:eq('+opt.act+') .slotholder');
			var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
			removeSlots(container,opt);
			nextsh.find('.defaultimg').css({'opacity':0});
			actsh.find('.defaultimg').css({'opacity':1});

			nextsh.find('.defaultimg').each(function() {
				var dimg = jQuery(this);
				if (dimg.data('kenburn')!=undefined)
				   dimg.data('kenburn').restart();
			});

			var nextli = container.find('>ul >li:eq('+opt.next+')');
	
			animateTheCaptions(nextli, opt,true);
			restartBannerTimer(opt,container);
			setBulPos(container,opt);

		}


		//////////////////
		// IS MOBILE ?? //
		//////////////////
		function is_mobile() {
		    var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
			var ismobile=false;
		    for(i in agents) {

			    if (navigator.userAgent.split(agents[i]).length>1) {
		            ismobile = true;

		          }
		    }
		    return ismobile;
		}

		/*********************************
			-	CHECK IF BROWSER IS IE	-
		********************************/
		function isIE( version, comparison ){
		    var $div = jQuery('<div style="display:none;"/>').appendTo(jQuery('body'));
		    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
		    var ieTest = $div.find('a').length;
		    $div.remove();
		    return ieTest;
		}

		////////////////////////////////
		//	RESTART THE BANNER TIMER //
		//////////////////////////////
		function restartBannerTimer(opt,container) {
						opt.cd=0;

						if (opt.videoplaying !=true) {
							var bt=	container.find('.tp-bannertimer');
								if (bt.length>0) {
									bt.stop();
									bt.css({'width':'0%'});
									bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
								}
							clearTimeout(opt.thumbtimer);

							opt.thumbtimer = setTimeout(function() {
								moveSelectedThumb(container);
								setBulPos(container,opt);
							},200);
						}
		}

		////////////////////////////////
		//	RESTART THE BANNER TIMER //
		//////////////////////////////
		function killBannerTimer(opt,container) {
						opt.cd=0;

							var bt=	container.find('.tp-bannertimer');
								if (bt.length>0) {
									bt.stop(true,true);
									bt.css({'width':'0%'});
								}
							clearTimeout(opt.thumbtimer);

		}

		function callingNewSlide(opt,container) {
						opt.cd=0;
						swapSlide(container,opt);
						// STOP TIMER AND RESCALE IT
							var bt=	container.find('.tp-bannertimer');
							if (bt.length>0) {
								bt.stop();
								bt.css({'width':'0%'});

								if (opt.videoplaying!=true) bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
							}
		}


		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		function createThumbs(container,opt) {

			var cap=container.parent();

			if (opt.navigationType=="thumb" || opt.navsecond=="both") {
						cap.append('<div class="tp-bullets tp-thumbs '+opt.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
			}
			var bullets = cap.find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
			var bup = bullets.parent();

			bup.width(opt.thumbWidth*opt.thumbAmount);
			bup.height(opt.thumbHeight);
			bup.parent().width(opt.thumbWidth*opt.thumbAmount);
			bup.parent().height(opt.thumbHeight);

			container.find('>ul:first >li').each(function(i) {
							var li= container.find(">ul:first >li:eq("+i+")");
							if (li.data('thumb') !=undefined)
								var src= li.data('thumb')
							else
								var src=li.find("img:first").attr('src');
							bullets.append('<div class="bullet thumb" style="width:'+opt.thumbWidth+'px;height:'+opt.thumbHeight+'px;"><img src="'+src+'"></div>');
							var bullet= bullets.find('.bullet:first');
				});
			//bullets.append('<div style="clear:both"></div>');
			var minwidth=10;


			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);

				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');
				bul.width(opt.thumbWidth);
				bul.height(opt.thumbHeight);

				if (minwidth<bul.outerWidth(true)) minwidth=bul.outerWidth(true);
				bul.click(function() {
					if (opt.transition==0 && bul.index() != opt.act) {
						opt.next = bul.index();
						callingNewSlide(opt,container);
					}
				});
			});


			var max=minwidth*container.find('>ul:first >li').length;

			var thumbconwidth=bullets.parent().width();
			opt.thumbWidth = minwidth;



				////////////////////////
				// SLIDE TO POSITION  //
				////////////////////////
				if (thumbconwidth<max) {
					jQuery(document).mousemove(function(e) {
						jQuery('body').data('mousex',e.pageX);
					});



					// ON MOUSE MOVE ON THE THUMBNAILS EVERYTHING SHOULD MOVE :)
					/*
					bullets.parent().mouseenter(function() {
							var $this=jQuery(this);
							$this.addClass("over");
							var offset = $this.offset();
							var x = jQuery('body').data('mousex')-offset.left;
							var thumbconwidth=$this.width();
							var minwidth=$this.find('.bullet:first').outerWidth(true);
							var max=minwidth*container.find('>ul:first >li').length;
							var diff=(max- thumbconwidth)+15;
							var steps = diff / thumbconwidth;
							x=x-30;
							//if (x<30) x=0;
							//if (x>thumbconwidth-30) x=thumbconwidth;

							//ANIMATE TO POSITION
							var pos=(0-((x)*steps));
							if (pos>0) pos =0;
							if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
							moveThumbSliderToPosition($this,pos,200);
					});

					bullets.parent().mousemove(function() {

									var $this=jQuery(this);

									//if (!$this.hasClass("over")) {
											var offset = $this.offset();
											var x = jQuery('body').data('mousex')-offset.left;
											var thumbconwidth=$this.width();
											var minwidth=$this.find('.bullet:first').outerWidth(true);
											var max=minwidth*container.find('>ul:first >li').length-1;
											var diff=(max- thumbconwidth)+15;
											var steps = diff / thumbconwidth;
											x=x-3;
											if (x<6) x=0;
											if (x+3>thumbconwidth-6) x=thumbconwidth;

											//ANIMATE TO POSITION
											var pos=(0-((x)*steps));
											if (pos>0) pos =0;
											if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
											moveThumbSliderToPosition($this,pos,0);
									//} else {
										//$this.removeClass("over");
									//}

					});

					bullets.parent().mouseleave(function() {
									var $this=jQuery(this);
									$this.removeClass("over");
									moveSelectedThumb(container);
					});*/
				}


		}


		///////////////////////////////
		//	SelectedThumbInPosition //
		//////////////////////////////
		function moveSelectedThumb(container) {

									var bullets=container.parent().find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');
									var $this=bullets.parent();
									var offset = $this.offset();
									var minwidth=$this.find('.bullet:first').outerWidth(true);

									var x = $this.find('.bullet.selected').index() * minwidth;
									var thumbconwidth=$this.width();
									var minwidth=$this.find('.bullet:first').outerWidth(true);
									var max=minwidth*container.find('>ul:first >li').length;
									var diff=(max- thumbconwidth);
									var steps = diff / thumbconwidth;

									//ANIMATE TO POSITION
									var pos=0-x;

									if (pos>0) pos =0;
									if (pos<0-max+thumbconwidth) pos=0-max+thumbconwidth;
									if (!$this.hasClass("over")) {
										moveThumbSliderToPosition($this,pos,200);
									}
		}


		////////////////////////////////////
		//	MOVE THUMB SLIDER TO POSITION //
		///////////////////////////////////
		function moveThumbSliderToPosition($this,pos,speed) {
			//$this.stop();
			//$this.find('.tp-thumbcontainer').animate({'left':pos+'px'},{duration:speed,queue:false});
			TweenLite.to($this.find('.tp-thumbcontainer'),0.2,{left:pos,ease:Power3.easeOut,overwrite:"auto"});
		}



		////////////////////////////////
		//	-	CREATE THE BULLETS -  //
		////////////////////////////////
		function createBullets(container,opt) {

			if (opt.navigationType=="bullet"  || opt.navigationType=="both") {
						container.parent().append('<div class="tp-bullets simplebullets '+opt.navigationStyle+'"></div>');
			}
			var bullets = container.parent().find('.tp-bullets');

			container.find('>ul:first >li').each(function(i) {
							var src=container.find(">ul:first >li:eq("+i+") img:first").attr('src');
							bullets.append('<div class="bullet"></div>');
							var bullet= bullets.find('.bullet:first');


				});

			// ADD THE BULLET CLICK FUNCTION HERE
			bullets.find('.bullet').each(function(i) {
				var bul = jQuery(this);
				if (i==opt.slideamount-1) bul.addClass('last');
				if (i==0) bul.addClass('first');

				bul.click(function() {
					var sameslide = false;
					if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
						if (bul.index()-1 == opt.act) sameslide=true;
					} else {
						if (bul.index() == opt.act) sameslide=true;
					}

					if (opt.transition==0 && !sameslide) {

					if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
							opt.next = bul.index()-1;
					} else {
							opt.next = bul.index();
					}

						callingNewSlide(opt,container);
					}
				});

			});

			bullets.append('<div class="tpclear"></div>');



			setBulPos(container,opt);





		}

		//////////////////////
		//	CREATE ARROWS	//
		/////////////////////
		function createArrows(container,opt) {

						var bullets = container.find('.tp-bullets');

						var hidden="";
						var arst= opt.navigationStyle;
						if (opt.navigationArrows=="none") hidden="visibility:hidden;display:none";
						opt.soloArrowStyle = "default";
						
						if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") arst = opt.soloArrowStyle;
						if(opt.navigation_arrows_style=="default2"){
							arst = "default2";
						}else if(opt.navigation_arrows_style=="new1"){
							arst = "new1";
						}else if(opt.navigation_arrows_style=="new2"){
							arst = "new2";
						}
						container.parent().append('<div style="'+hidden+'" class="tp-leftarrow tparrows '+arst+'"></div>');
						container.parent().append('<div style="'+hidden+'" class="tp-rightarrow tparrows '+arst+'"></div>');

						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						container.parent().find('.tp-rightarrow').click(function() {

							if (opt.transition==0) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;

									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}
						});

						container.parent().find('.tp-leftarrow').click(function() {
							if (opt.transition==0) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);

		}

		//////////////////////
		//	CREATE ARROWS	//
		/////////////////////
		function createKeyboard(container,opt) {

						/*
						// 	THE LEFT / RIGHT BUTTON CLICK !	 //
						jQuery(document).keydown(function(e){
							if (opt.transition==0 && e.keyCode == 39) {
									if (container.data('showus') !=undefined && container.data('showus') != -1)
										opt.next = container.data('showus')-1;
									else
										opt.next = opt.next+1;
									container.data('showus',-1);
									if (opt.next >= opt.slideamount) opt.next=0;
									if (opt.next<0) opt.next=0;

									if (opt.act !=opt.next)
										callingNewSlide(opt,container);
							}

							if (opt.transition==0 && e.keyCode == 37) {
									opt.next = opt.next-1;
									opt.leftarrowpressed=1;
									if (opt.next < 0) opt.next=opt.slideamount-1;
									callingNewSlide(opt,container);
							}
						});

						setBulPos(container,opt);*/

		}

		////////////////////////////
		// SET THE SWIPE FUNCTION //
		////////////////////////////
		function swipeAction(container,opt) {
			// TOUCH ENABLED SCROLL
				
				if (opt.touchenabled=="on")
						container.swipe( {data:container,
										swipeRight:function()
												{

													if (opt.transition==0) {
															opt.next = opt.next-1;
															opt.leftarrowpressed=1;
															if (opt.next < 0) opt.next=opt.slideamount-1;
															callingNewSlide(opt,container);
													}
												},
										swipeLeft:function()
												{

													if (opt.transition==0) {
															opt.next = opt.next+1;
															if (opt.next == opt.slideamount) opt.next=0;
															callingNewSlide(opt,container);
													}
												},
										  swipeUp:function(event, direction, distance, duration) {
												if (opt.transition==0) {
															opt.next = opt.next-1;
															opt.leftarrowpressed=1;
															if (opt.next < 0) opt.next=opt.slideamount-1;
															callingNewSlide(opt,container);
												}
										  },
										  swipeDown:function(event, direction, distance, duration) {
												if (opt.transition==0) {
															opt.next = opt.next+1;
															if (opt.next == opt.slideamount) opt.next=0;
															callingNewSlide(opt,container);
													}
										  },
									allowPageScroll:"auto"} );
		}




		////////////////////////////////////////////////////////////////
		// SHOW AND HIDE THE THUMBS IF MOUE GOES OUT OF THE BANNER  ///
		//////////////////////////////////////////////////////////////
		function hideThumbs(container,opt) {

			var bullets = container.parent().find('.tp-bullets');
			var ca = container.parent().find('.tparrows');

			if (bullets==null) {
				container.append('<div class=".tp-bullets"></div>');
				var bullets = container.parent().find('.tp-bullets');
			}

			if (ca==null) {
				container.append('<div class=".tparrows"></div>');
				var ca = container.parent().find('.tparrows');
			}


			//var bp = (thumbs.parent().outerHeight(true) - opt.height)/2;

			//	ADD THUMBNAIL IMAGES FOR THE BULLETS //
			container.data('hidethumbs',opt.hideThumbs);

			bullets.addClass("hidebullets");
			ca.addClass("hidearrows");

			bullets.hover(function() {
				bullets.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");
			},
			function() {

				bullets.removeClass("hovered");
				if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
					container.data('hidethumbs', setTimeout(function() {
					bullets.addClass("hidebullets");
					ca.addClass("hidearrows");
					},opt.hideThumbs));
			});


			ca.hover(function() {
				bullets.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");

			},
			function() {

				bullets.removeClass("hovered");
				});



			container.on('mouseenter', function() {
				container.addClass("hovered");
				clearTimeout(container.data('hidethumbs'));
				bullets.removeClass("hidebullets");
				ca.removeClass("hidearrows");
			});

			container.on('mouseleave', function() {
				container.removeClass("hovered");
				if (!container.hasClass("hovered") && !bullets.hasClass("hovered"))
					container.data('hidethumbs', setTimeout(function() {
							bullets.addClass("hidebullets");
							ca.addClass("hidearrows");
					},opt.hideThumbs));
			});

		}







		//////////////////////////////
		//	SET POSITION OF BULLETS	//
		//////////////////////////////
		function setBulPos(container,opt) {
			var topcont=container.parent();
			var bullets=topcont.find('.tp-bullets');

			if (opt.navigationType=="thumb") {
				bullets.find('.thumb').each(function(i) {
					var thumb = jQuery(this);

					thumb.css({'width':opt.thumbWidth * opt.bw+"px", 'height':opt.thumbHeight*opt.bh+"px"});

				})
				var bup = bullets.find('.tp-mask');

				bup.width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.height(opt.thumbHeight * opt.bh);
				bup.parent().width(opt.thumbWidth*opt.thumbAmount * opt.bw);
				bup.parent().height(opt.thumbHeight * opt.bh);
			}


			var tl = topcont.find('.tp-leftarrow');
			var tr = topcont.find('.tp-rightarrow');

			if (opt.navigationType=="thumb" && opt.navigationArrows=="nexttobullets") opt.navigationArrows="solo";
			// IM CASE WE HAVE NAVIGATION BULLETS TOGETHER WITH ARROWS
			if (opt.navigationArrows=="nexttobullets") {
				tl.prependTo(bullets).css({'float':'left'});
				tr.insertBefore(bullets.find('.tpclear')).css({'float':'left'});
			}
			var loff=0;
			if (opt.forceFullWidth=="on"){
					
				var offset = opt.container.parent().offset();
				if(offset){
					loff = 0-offset.left;
				}
			}

			if (opt.navigationArrows!="none" && opt.navigationArrows!="nexttobullets") {

				tl.css({'position':'absolute'});
				tr.css({'position':'absolute'});


				if (opt.soloArrowLeftValign=="center")	tl.css({'top':'50%','marginTop':(opt.soloArrowLeftVOffset-Math.round(tl.innerHeight()/2))+"px"});
				if (opt.soloArrowLeftValign=="bottom")	tl.css({'top':'auto','bottom':(0+opt.soloArrowLeftVOffset)+"px"});
				if (opt.soloArrowLeftValign=="top")	 	tl.css({'bottom':'auto','top':(0+opt.soloArrowLeftVOffset)+"px"});
				if (opt.soloArrowLeftHalign=="center")	tl.css({'left':'50%','marginLeft':(loff+opt.soloArrowLeftHOffset-Math.round(tl.innerWidth()/2))+"px"});
				if (opt.soloArrowLeftHalign=="left")	tl.css({'left':(0+opt.soloArrowLeftHOffset+loff)+"px"});
				if (opt.soloArrowLeftHalign=="right")	tl.css({'right':(0+opt.soloArrowLeftHOffset-loff)+"px"});

				if (opt.soloArrowRightValign=="center")	tr.css({'top':'50%','marginTop':(opt.soloArrowRightVOffset-Math.round(tr.innerHeight()/2))+"px"});
				if (opt.soloArrowRightValign=="bottom")	tr.css({'top':'auto','bottom':(0+opt.soloArrowRightVOffset)+"px"});
				if (opt.soloArrowRightValign=="top")	tr.css({'bottom':'auto','top':(0+opt.soloArrowRightVOffset)+"px"});
				if (opt.soloArrowRightHalign=="center")	tr.css({'left':'50%','marginLeft':(loff+opt.soloArrowRightHOffset-Math.round(tr.innerWidth()/2))+"px"});
				if (opt.soloArrowRightHalign=="left")	tr.css({'left':(0+opt.soloArrowRightHOffset+loff)+"px"});
				if (opt.soloArrowRightHalign=="right")	tr.css({'right':(0+opt.soloArrowRightHOffset-loff)+"px"});


				//if (tl.position()!=null)
					//tl.css({'top':Math.round(parseInt(tl.position().top,0))+"px"});

				//if (tr.position()!=null)
					//tr.css({'top':Math.round(parseInt(tr.position().top,0))+"px"});
			}

			if (opt.navigationArrows=="none") {
				tl.css({'visibility':'hidden'});
				tr.css({'visibility':'hidden'});
			}

			// SET THE POSITIONS OF THE BULLETS // THUMBNAILS


			if (opt.navigationVAlign=="center")	 bullets.css({'top':'50%','marginTop':(opt.navigationVOffset-Math.round(bullets.innerHeight()/2))+"px"});
			if (opt.navigationVAlign=="bottom")	 bullets.css({'bottom':(0+opt.navigationVOffset)+"px"});
			if (opt.navigationVAlign=="top")	 bullets.css({'top':(0+opt.navigationVOffset)+"px"});

			if (opt.navigationHAlign=="center")	bullets.css({'left':'50%','marginLeft':(loff+opt.navigationHOffset-Math.round(bullets.innerWidth()/2))+"px"});
			if (opt.navigationHAlign=="left")	bullets.css({'left':(0+opt.navigationHOffset+loff)+"px"});
			if (opt.navigationHAlign=="right")	bullets.css({'right':(0+opt.navigationHOffset-loff)+"px"});



		}



		//////////////////////////////////////////////////////////
		//	-	SET THE IMAGE SIZE TO FIT INTO THE CONTIANER -  //
		////////////////////////////////////////////////////////
		function setSize(img,opt) {
				
				
				opt.container.closest('.forcefullwidth_wrapper_tp_banner').find('.tp-fullwidth-forcer').css({'height':opt.container.height()});
				opt.container.closest('.rev_slider_wrapper').css({'height':opt.container.height()});


				opt.width=parseInt(opt.container.width(),0);
				opt.height=parseInt(opt.container.height(),0);


				//opt.height= opt.startheight * opt.bh;
				opt.height = Math.round(opt.startheight * (opt.width/opt.startwidth));
				if (opt.height>opt.startheight && opt.autoHeight!="on") opt.height=opt.startheight;
				
				
				
				opt.bw= (opt.width / opt.startwidth);
				opt.bh = (opt.height / opt.startheight);
				
			

				if (opt.bh>opt.bw) opt.bh=opt.bw;
				if (opt.bh<opt.bw) opt.bw = opt.bh;
				if (opt.bw<opt.bh) opt.bh = opt.bw;
				if (opt.bh>1) { opt.bw=1; opt.bh=1; }
				if (opt.bw>1) {opt.bw=1; opt.bh=1; }

				
			

				



				



				if (opt.fullScreen=="on") {
						opt.height = opt.bw * opt.startheight;
						var cow = opt.container.parent().width();
						var coh = jQuery(window).height();
						if (opt.fullScreenOffsetContainer!=undefined) {
							try{
								var offcontainers = opt.fullScreenOffsetContainer.split(",");
								jQuery.each(offcontainers,function(index,searchedcont) {
									coh = coh - jQuery(searchedcont).outerHeight(true);
									if (coh<opt.minFullScreenHeight) coh=opt.minFullScreenHeight;
								});
							} catch(e) {}
						}

						opt.container.parent().height(coh);
						opt.container.css({'height':'100%'});

						opt.height=coh;

				} else {
										opt.container.height(opt.height);
				}


				opt.slotw=Math.ceil(opt.width/opt.slots);

				if (opt.fullSreen=="on")
					opt.sloth=Math.ceil(jQuery(window).height()/opt.slots);
				else
					opt.sloth=Math.ceil(opt.height/opt.slots);

				if (opt.autoHeight=="on")
				 	opt.sloth=Math.ceil(img.height()/opt.slots);




		}




		/////////////////////////////////////////
		//	-	PREPARE THE SLIDES / SLOTS -  //
		///////////////////////////////////////
		function prepareSlides(container,opt) {

			container.find('.tp-caption').each(function() { jQuery(this).addClass(jQuery(this).data('transition')); jQuery(this).addClass('start') });

			// PREPARE THE UL CONTAINER TO HAVEING MAX HEIGHT AND HEIGHT FOR ANY SITUATION
			container.find('>ul:first').css({overflow:'hidden',width:'100%',height:'100%',maxHeight:container.parent().css('maxHeight')});
			if (opt.autoHeight=="on") {
			   container.find('>ul:first').css({overflow:'hidden',width:'100%',height:'100%',maxHeight:"none"});
			   container.css({'maxHeight':'none'});
			   container.parent().css({'maxHeight':'none'});
			 }

			container.find('>ul:first >li').each(function(j) {
				var li=jQuery(this);

				// MAKE LI OVERFLOW HIDDEN FOR FURTHER ISSUES
				li.css({'width':'100%','height':'100%','overflow':'hidden'});

				if (li.data('link')!=undefined) {
					var link = li.data('link');
					var target="_self";
					var zindex=2;
					if (li.data('slideindex')=="back") zindex=0;

					var linktoslide=li.data('linktoslide');
					if (li.data('target')!=undefined) target=li.data('target');

					if (link=="slide") {
						li.append('<div class="tp-caption sft slidelink" style="z-index:'+zindex+';" data-x="0" data-y="0" data-linktoslide="'+linktoslide+'" data-start="0"><a><div></div></a></div>');
					} else {
						linktoslide="no";
						li.append('<div class="tp-caption sft slidelink" style="z-index:'+zindex+';" data-x="0" data-y="0" data-linktoslide="'+linktoslide+'" data-start="0"><a target="'+target+'" href="'+link+'"><div></div></a></div>');
					}

				}
			});

			// RESOLVE OVERFLOW HIDDEN OF MAIN CONTAINER
			container.parent().css({'overflow':'visible'});


			container.find('>ul:first >li >img').each(function(j) {

				var img=jQuery(this);

				img.addClass('defaultimg');
				if (img.data('lazyload')!=undefined && img.data('lazydone') != 1) {

				} else {
					setSize(img,opt);
				}



				img.wrap('<div class="slotholder" style="width:100%;height:100%;"'+
						  'data-duration="'+img.data('duration')+'"'+
						  'data-zoomstart="'+img.data("zoomstart")+'"'+
						  'data-zoomend="'+img.data("zoomend")+'"'+
						  'data-rotationstart="'+img.data("rotationstart")+'"'+
						  'data-rotationend="'+img.data("rotationend")+'"'+
						  'data-ease="'+img.data("ease")+'"'+
						  'data-duration="'+img.data("duration")+'"'+
						  'data-bgpositionend="'+img.data("bgpositionend")+'"'+
						  'data-bgposition="'+img.data("bgposition")+'"'+
						  'data-duration="'+img.data("duration")+'"'+
						  'data-kenburns="'+img.data("kenburns")+'"'+
						  'data-easeme="'+img.data("ease")+'"'+
						  'data-bgfit="'+img.data("bgfit")+'"'+
						  'data-bgfitend="'+img.data("bgfitend")+'"'+
						  'data-owidth="'+img.data("owidth")+'"'+
						  'data-oheight="'+img.data("oheight")+'"'+
						  '></div>');

				if (opt.dottedOverlay!="none" && opt.dottedOverlay!=undefined)
						img.closest('.slotholder').append('<div class="tp-dottedoverlay '+opt.dottedOverlay+'"></div>');

				var src=img.attr('src');
				var ll = img.data('lazyload');
				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');


				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center"


				var pari = img.closest('.slotholder');
				img.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="'+img.data('lazyload')+'" data-bgfit="'+bgfit+'"data-bgposition="'+bgposition+'" data-bgrepeat="'+bgrepeat+'" data-lazydone="'+img.data('lazydone')+'" data-src="'+src+'" style="background-color:'+img.css("backgroundColor")+';background-repeat:'+bgrepeat+';background-image:url('+src+');background-size:'+bgfit+';background-position:'+bgposition+';width:100%;height:100%;"></div>');

				if (isIE(8)) {
					pari.find('.tp-bgimg').css({backgroundImage:"none",'background-image':'none'});
					pari.find('.tp-bgimg').append('<img class="ieeightfallbackimage defaultimg" src="'+src+'" style="width:100%">');
				}




				img.css({'opacity':0});
				img.data('li-id',j);

			});
		}





		///////////////////////
		// PREPARE THE SLIDE //
		//////////////////////
		function prepareOneSlideSlot(slotholder,opt,visible,vorh) {
				

				var sh=slotholder;
				var img = sh.find('.defaultimg')

				var scalestart = sh.data('zoomstart');
				var rotatestart = sh.data('rotationstart');

				if (img.data('currotate')!=undefined)
					rotatestart = img.data('currotate');
				if (img.data('curscale')!=undefined)
					scalestart = img.data('curscale');
				setSize(img,opt)
				var src = img.data('src');
				var bgcolor=img.css('background-color');

				var w = opt.width;
				var h = opt.height;
				if (opt.autoHeight=="on")
				  h = opt.container.height();

				var fulloff = img.data("fxof");
				if (fulloff==undefined) fulloff=0;

				fullyoff=0;

				var off=0;

				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');

				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center";



				if (sh.data('kenburns')=="on") {
				   bgfit=scalestart;
				   if (bgfit.toString().length<4)
					   bgfit = calculateKenBurnScales(bgfit,sh,opt);
				 }

			   if (isIE(8)) {
					var imgsrc=src;
			    	src="";
				}

				if (vorh == "horizontal") {

					if (!visible) var off=0-opt.slotw;

					for (var i=0;i<opt.slots;i++) {
							sh.append('<div class="slot" style="position:absolute;'+
															'top:'+(0+fullyoff)+'px;'+
															'left:'+(fulloff+i*opt.slotw)+'px;'+
															'overflow:hidden;width:'+opt.slotw+'px;'+
															'height:'+h+'px">'+
							'<div class="slotslide" style="position:absolute;'+
															'top:0px;left:'+off+'px;'+
															'width:'+opt.slotw+'px;'+
															'height:'+h+'px;overflow:hidden;">'+
							'<div style="background-color:'+bgcolor+';'+
															'position:absolute;top:0px;'+
															'left:'+(0-(i*opt.slotw))+'px;'+
															'width:'+w+'px;height:'+h+'px;'+
															'background-image:url('+src+');'+
															'background-repeat:'+bgrepeat+';'+
															'background-size:'+bgfit+';background-position:'+bgposition+';">'+
							'</div></div></div>');
							if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
							if (isIE(8)) {
							   sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="'+imgsrc+'" style="width:100%">');
							   ieimgposition(sh,opt);

						}
					}
				} else {

					if (!visible) var off=0-opt.sloth;

					for (var i=0;i<opt.slots+2;i++) {
						sh.append('<div class="slot" style="position:absolute;'+
												 'top:'+(fullyoff+(i*opt.sloth))+'px;'+
												 'left:'+(fulloff)+'px;'+
												 'overflow:hidden;'+
												 'width:'+w+'px;'+
												 'height:'+(opt.sloth)+'px">'+

									 '<div class="slotslide" style="position:absolute;'+
														 'top:'+(off)+'px;'+
														 'left:0px;width:'+w+'px;'+
														 'height:'+opt.sloth+'px;'+
														 'overflow:hidden;">'+
									'<div style="background-color:'+bgcolor+';'+
															'position:absolute;'+
															'top:'+(0-(i*opt.sloth))+'px;'+
															'left:0px;'+
															'width:'+w+'px;height:'+h+'px;'+
															'background-image:url('+src+');'+
															'background-repeat:'+bgrepeat+';'+
															'background-size:'+bgfit+';background-position:'+bgposition+';">'+

									'</div></div></div>');
							if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
							if (isIE(8)) {
						    	sh.find('.slot ').last().find('.slotslide').append('<img class="ieeightfallbackimage" src="'+imgsrc+'" style="width:100%">');
						    	ieimgposition(sh,opt);
							}
					}
				}




		}



		///////////////////////
		// PREPARE THE SLIDE //
		//////////////////////
		function prepareOneSlideBox(slotholder,opt,visible) {

				var sh=slotholder;
				var img = sh.find('.defaultimg');

				var scalestart = sh.data('zoomstart');
				var rotatestart = sh.data('rotationstart');

				if (img.data('currotate')!=undefined)
					rotatestart = img.data('currotate');
				if (img.data('curscale')!=undefined)
					scalestart = img.data('curscale')*100;

				setSize(img,opt)
				var src = img.data('src');
				var bgcolor=img.css('backgroundColor');

				var w = opt.width;
				var h = opt.height;
				if (opt.autoHeight=="on")
				  h = opt.container.height();

				var fulloff = img.data("fxof");
				if (fulloff==undefined) fulloff=0;

				fullyoff=0;



				var off=0;


				if (isIE(8)) {
					var imgsrc=src;
			    	src="";
				}

				// SET THE MINIMAL SIZE OF A BOX
				var basicsize = 0;
				if (opt.sloth>opt.slotw)
					basicsize=opt.sloth
				else
					basicsize=opt.slotw;


				if (!visible) {
					var off=0-basicsize;
				}

				opt.slotw = basicsize;
				opt.sloth = basicsize;
				var x=0;
				var y=0;

				var bgfit = img.data('bgfit');
				var bgrepeat = img.data('bgrepeat');
				var bgposition = img.data('bgposition');

				if (bgfit==undefined) bgfit="cover";
				if (bgrepeat==undefined) bgrepeat="no-repeat";
				if (bgposition==undefined) bgposition="center center";

				if (sh.data('kenburns')=="on") {
				   bgfit=scalestart;
				   
				   if (bgfit.toString().length<4)
					   bgfit = calculateKenBurnScales(bgfit,sh,opt);
				 }

				for (var j=0;j<opt.slots;j++) {

					y=0;
					for (var i=0;i<opt.slots;i++) 	{


						sh.append('<div class="slot" '+
								  'style="position:absolute;'+
											'top:'+(fullyoff+y)+'px;'+
											'left:'+(fulloff+x)+'px;'+
											'width:'+basicsize+'px;'+
											'height:'+basicsize+'px;'+
											'overflow:hidden;">'+

								  '<div class="slotslide" data-x="'+x+'" data-y="'+y+'" '+
								  			'style="position:absolute;'+
											'top:'+(0)+'px;'+
											'left:'+(0)+'px;'+
											'width:'+basicsize+'px;'+
											'height:'+basicsize+'px;'+
											'overflow:hidden;">'+

								  '<div style="position:absolute;'+
											'top:'+(0-y)+'px;'+
											'left:'+(0-x)+'px;'+
											'width:'+w+'px;'+
											'height:'+h+'px;'+
											'background-color:'+bgcolor+';'+
											'background-image:url('+src+');'+
											'background-repeat:'+bgrepeat+';'+
											'background-size:'+bgfit+';background-position:'+bgposition+';">'+
								  '</div></div></div>');
						y=y+basicsize;

						if (isIE(8)) {

							sh.find('.slot ').last().find('.slotslide').append('<img src="'+imgsrc+'">');
							ieimgposition(sh,opt);
						}

						if (scalestart!=undefined && rotatestart!=undefined)
								TweenLite.set(sh.find('.slot').last(),{rotationZ:rotatestart});
					}
					x=x+basicsize;
				}
		}

		/***********************************************
			-	MOVE IE8 IMAGE IN RIGHT POSITION	-
		***********************************************/

		function ieimgposition(nextsh,opt) {

			if (isIE(8)) {
					var ie8img = nextsh.find('.ieeightfallbackimage');
					if (opt.startwidth/opt.startheight <nextsh.data('owidth')/nextsh.data('oheight'))
						ie8img.css({width:"auto",height:"100%"})
					else
						ie8img.css({width:"100%",height:"auto"})



					var ie8w = ie8img.width(),
					    ie8h = ie8img.height();

					if (nextsh.data('bgposition')=="center center")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", left:opt.width/2-ie8w/2+"px"});

					if (nextsh.data('bgposition')=="center top" || nextsh.data('bgposition')=="top center")
						ie8img.css({position:"absolute",top:"0px", left:opt.width/2-ie8w/2+"px"});

					if (nextsh.data('bgposition')=="center bottom" || nextsh.data('bgposition')=="bottom center")
						ie8img.css({position:"absolute",bottom:"0px", left:opt.width/2-ie8w/2+"px"});


					if (nextsh.data('bgposition')=="right top" || nextsh.data('bgposition')=="top right")
						ie8img.css({position:"absolute",top:"0px", right:"0px"});

					if (nextsh.data('bgposition')=="right bottom" || nextsh.data('bgposition')=="bottom right")
						ie8img.css({position:"absolute",bottom:"0px", right:"0px"});

					if (nextsh.data('bgposition')=="right center" || nextsh.data('bgposition')=="center right")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", right:"0px"});

					if (nextsh.data('bgposition')=="left bottom" || nextsh.data('bgposition')=="bottom left")
						ie8img.css({position:"absolute",bottom:"0px", left:"0px"});

					if (nextsh.data('bgposition')=="left center" || nextsh.data('bgposition')=="center left")
						ie8img.css({position:"absolute",top:opt.height/2 - ie8h/2+"px", left:"0px"});
				}
		}




		///////////////////////
		//	REMOVE SLOTS	//
		/////////////////////
		function removeSlots(container,opt,time) {
			if (time==undefined)
				time==80

			setTimeout(function() {
				container.find('.slotholder .slot').each(function() {
					clearTimeout(jQuery(this).data('tout'));
					jQuery(this).remove();
				});
				opt.transition = 0;
			},time);
		}





		//////////////////////////////
		//                         //
		//	-	SWAP THE SLIDES -  //
		//                        //
		////////////////////////////
		function swapSlide(container,opt) {
			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}
			opt.lastslide=opt.act;
			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');

			var defimg= nextli.find('.defaultimg');

			if (defimg.data('lazyload') !=undefined && defimg.data('lazyload') !="undefined" && defimg.data('lazydone') !=1 ) {

				defimg.css({backgroundImage:'url("'+nextli.find('.defaultimg').data('lazyload')+'")'});
				defimg.data('src',nextli.find('.defaultimg').data('lazyload'));
				defimg.data('lazydone',1);
				defimg.data('orgw',0);
				nextli.data('loadeddone',1);
				container.find('.tp-loader').css({'display':'block'}).animate({opacity:1,duration:300});
				var limg = new Image();
				limg.onload = function() {
						setTimeout(function() { killBannerTimer(opt,container)},180);

							nextli.waitForImages(function() {

									defimg.data('lazydone',1);
									nextli.data('owidth',limg.width);
									nextli.data('oheight',limg.height);
									nextli.find('.slotholder').data('owidth',limg.width);
									nextli.find('.slotholder').data('oheight',limg.height);


									setTimeout(function() {restartBannerTimer(opt,container)},190);
									setSize(defimg,opt);
									setBulPos(container,opt);
									setSize(defimg,opt);
									swapSlideProgress(container,opt);
									container.find('.tp-loader').animate({opacity:0,duration:300});

									setTimeout(function() {
										container.find('.tp-loader').css({'display':'none'});

									},2200)
														});
						}
				limg.src=nextli.find('.defaultimg').data('lazyload');

			} else {
				if (nextli.data('loadeddone')==undefined) {
						var limg = new Image();
						limg.onload = function() {
									nextli.data('loadeddone',1);
									nextli.data('owidth',limg.width);
									nextli.data('oheight',limg.height);
									nextli.find('.slotholder').data('owidth',limg.width);
									nextli.find('.slotholder').data('oheight',limg.height);


									nextli.waitForImages(function() {
											setSize(defimg,opt);
											setBulPos(container,opt);
											setSize(defimg,opt);
											swapSlideProgress(container,opt);
										});
								}
						limg.src=nextli.find('.defaultimg').data('src');
				} else {
				   	swapSlideProgress(container,opt);
				 }
			}
		}

		/******************************
			-	SWAP SLIDE PROGRESS	-
		********************************/
		/*!SWAP SLIDE*/
		function swapSlideProgress(container,opt) {


	
			container.trigger('revolution.slide.onbeforeswap');

			opt.transition = 1;
			opt.videoplaying = false;
			//konsole.log("VideoPlay set to False due swapSlideProgress");

			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');
		

			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');
			actli.css({'visibility':'visible'});
			nextli.css({'visibility':'visible'});

			if (nextsh.data('kenburns')=="on")
				stopKenBurn(container,opt);


			if (opt.ie) {
				if (comingtransition=="boxfade") comingtransition = "boxslide";
				if (comingtransition=="slotfade-vertical") comingtransition = "slotzoom-vertical";
				if (comingtransition=="slotfade-horizontal") comingtransition = "slotzoom-horizontal";
			}


			// IF DELAY HAS BEEN SET VIA THE SLIDE, WE TAKE THE NEW VALUE, OTHER WAY THE OLD ONE...
			if (nextli.data('delay')!=undefined) {
						opt.cd=0;
						opt.delay=nextli.data('delay');
			} else {
				opt.delay=opt.origcd;
			}

			// RESET POSITION AND FADES OF LI'S
			actli.css({'left':'0px','top':'0px'});
			nextli.css({'left':'0px','top':'0px'});


			// IF THERE IS AN OTHER FIRST SLIDE START HAS BEED SELECTED
			if (nextli.data('differentissplayed') =='prepared') {
				nextli.data('differentissplayed','done');
				nextli.data('transition',nextli.data('savedtransition'));
				nextli.data('slotamount',nextli.data('savedslotamount'));
				nextli.data('masterspeed',nextli.data('savedmasterspeed'));
			}


			if (nextli.data('fstransition') != undefined && nextli.data('differentissplayed') !="done") {
				nextli.data('savedtransition',nextli.data('transition'));
				nextli.data('savedslotamount',nextli.data('slotamount'));
				nextli.data('savedmasterspeed',nextli.data('masterspeed'));

				nextli.data('transition',nextli.data('fstransition'));
				nextli.data('slotamount',nextli.data('fsslotamount'));
				nextli.data('masterspeed',nextli.data('fsmasterspeed'));

				nextli.data('differentissplayed','prepared');
			}

			///////////////////////////////////////
			// TRANSITION CHOOSE - RANDOM EFFECTS//
			///////////////////////////////////////
			var nexttrans = 0;


			var transtext = nextli.data('transition').split(",");
			var curtransid = nextli.data('nexttransid');
			if (curtransid == undefined) {
			  curtransid=0;
			  nextli.data('nexttransid',curtransid);
			} else {
				curtransid=curtransid+1;
				if (curtransid==transtext.length) curtransid=0;
				nextli.data('nexttransid',curtransid);

			}



			var comingtransition = transtext[curtransid];
			if(jQuery(window).width()<768 && opt.forceFullWidth=="on"){
				comingtransition = "slideup";		
			}
			
			var specials = 0;

			/*if (opt.ffnn == undefined) opt.ffnn=0;
			comingtransition=opt.ffnn;
			opt.ffnn=opt.ffnn+1;
			if (opt.ffnn>46) opt.ffnn=0;*/


			/* Transition Name ,
			   Transition Code,
			   Transition Sub Code,
			   Max Slots,
			   MasterSpeed Delays,
			   Preparing Slots (box,slideh, slidev),
			   Call on nextsh (null = no, true/false for visibility first preparing),
			   Call on actsh (null = no, true/false for visibility first preparing),
			*/

			if (comingtransition=="slidehorizontal") {
						comingtransition = "slideleft"
					if (opt.leftarrowpressed==1)
						comingtransition = "slideright"
				}

			if (comingtransition=="slidevertical") {
						comingtransition = "slideup"
					if (opt.leftarrowpressed==1)
						comingtransition = "slidedown"
				}


			var transitionsArray = [ ['boxslide' , 0, 1, 10, 0,'box',false,null,0],
									 ['boxfade', 1, 0, 10, 0,'box',false,null,1],
									 ['slotslide-horizontal', 2, 0, 0, 200,'horizontal',true,false,2],
									 ['slotslide-vertical', 3, 0,0,200,'vertical',true,false,3],
									 ['curtain-1', 4, 3,0,0,'horizontal',true,true,4],
									 ['curtain-2', 5, 3,0,0,'horizontal',true,true,5],
									 ['curtain-3', 6, 3,25,0,'horizontal',true,true,6],
									 ['slotzoom-horizontal', 7, 0,0,400,'horizontal',true,true,7],
									 ['slotzoom-vertical', 8, 0,0,0,'vertical',true,true,8],
									 ['slotfade-horizontal', 9, 0,0,500,'horizontal',true,null,9],
									 ['slotfade-vertical', 10, 0,0 ,500,'vertical',true,null,10],
									 ['fade', 11, 0, 1 ,300,'horizontal',true,null,11],
									 ['slideleft', 12, 0,1,0,'horizontal',true,true,12],
									 ['slideup', 13, 0,1,0,'horizontal',true,true,13],
									 ['slidedown', 14, 0,1,0,'horizontal',true,true,14],
									 ['slideright', 15, 0,1,0,'horizontal',true,true,15],
									 ['papercut', 16, 0,0,600,'',null,null,16],
									 ['3dcurtain-horizontal', 17, 0,20,100,'vertical',false,true,17],
									 ['3dcurtain-vertical', 18, 0,10,100,'horizontal',false,true,18],
									 ['cubic', 19, 0,20,600,'horizontal',false,true,19],
									 ['cube',19,0,20,600,'horizontal',false,true,20],
									 ['flyin', 20, 0,4,600,'vertical',false,true,21],
									 ['turnoff', 21, 0,1,1600,'horizontal',false,true,22],
									 ['incube', 22, 0,20,600,'horizontal',false,true,23],
									 ['cubic-horizontal', 23, 0,20,500,'vertical',false,true,24],
									 ['cube-horizontal', 23, 0,20,500,'vertical',false,true,25],
									 ['incube-horizontal', 24, 0,20,500,'vertical',false,true,26],
									 ['turnoff-vertical', 25, 0,1,1600,'horizontal',false,true,27],
									 ['fadefromright', 12, 1,1,0,'horizontal',true,true,28],
									 ['fadefromleft', 15, 1,1,0,'horizontal',true,true,29],
									 ['fadefromtop', 14, 1,1,0,'horizontal',true,true,30],
									 ['fadefrombottom', 13, 1,1,0,'horizontal',true,true,31],
									 ['fadetoleftfadefromright', 12, 2,1,0,'horizontal',true,true,32],
									 ['fadetorightfadetoleft', 15, 2,1,0,'horizontal',true,true,33],
									 ['fadetobottomfadefromtop', 14, 2,1,0,'horizontal',true,true,34],
									 ['fadetotopfadefrombottom', 13, 2,1,0,'horizontal',true,true,35],
									 ['parallaxtoright', 12, 3,1,0,'horizontal',true,true,36],
									 ['parallaxtoleft', 15, 3,1,0,'horizontal',true,true,37],
									 ['parallaxtotop', 14, 3,1,0,'horizontal',true,true,38],
									 ['parallaxtobottom', 13, 3,1,0,'horizontal',true,true,39],
									 ['scaledownfromright', 12, 4,1,0,'horizontal',true,true,40],
									 ['scaledownfromleft', 15, 4,1,0,'horizontal',true,true,41],
									 ['scaledownfromtop', 14, 4,1,0,'horizontal',true,true,42],
									 ['scaledownfrombottom', 13, 4,1,0,'horizontal',true,true,43],
									 ['zoomout', 13, 5,1,0,'horizontal',true,true,44],
									 ['zoomin', 13, 6,1,0,'horizontal',true,true,45],
									 ['notransition',26,0,1,0,'horizontal',true,null,46]
								   ];


			var flatTransitions = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
			var premiumTransitions = [16,17,18,19,20,21,22,23,24,25,26,27]

			var nexttrans =0;
			var specials = 1;
			var STAindex = 0;
			var indexcounter =0;
			var STA = new Array;
			

			// RANDOM TRANSITIONS
			if (comingtransition == "random") {
				comingtransition = Math.round(Math.random()*transitionsArray.length-1);
				if (comingtransition>transitionsArray.length-1) comingtransition=transitionsArray.length-1;
			}

			// RANDOM FLAT TRANSITIONS
			if (comingtransition == "random-static") {
				comingtransition = Math.round(Math.random()*flatTransitions.length-1);
				if (comingtransition>flatTransitions.length-1) comingtransition=flatTransitions.length-1;
				comingtransition = flatTransitions[comingtransition];
			}

			// RANDOM PREMIUM TRANSITIONS
			if (comingtransition == "random-premium") {
				comingtransition = Math.round(Math.random()*premiumTransitions.length-1);
				if (comingtransition>premiumTransitions.length-1) comingtransition=premiumTransitions.length-1;
				comingtransition = premiumTransitions[comingtransition];
			}

			findTransition();

			// CHECK IF WE HAVE IE8 AND THAN FALL BACK ON FLAT TRANSITIONS
			if (isIE(8) && nexttrans>15 && nexttrans<28) {
				comingtransition = Math.round(Math.random()*flatTransitions.length-1);
				if (comingtransition>flatTransitions.length-1) comingtransition=flatTransitions.length-1;
				comingtransition = flatTransitions[comingtransition];
				indexcounter =0;
				findTransition();
			}

			function findTransition() {
				// FIND THE RIGHT TRANSITION PARAMETERS HERE
				jQuery.each(transitionsArray,function(inde,trans) {
					if (trans[0] == comingtransition || trans[8] == comingtransition) {
						nexttrans = trans[1];
						specials = trans[2];
						STAindex = indexcounter;
					}
					indexcounter = indexcounter+1;
				})
			}



		    var direction=-1;
			if (opt.leftarrowpressed==1 || opt.act>opt.next) direction=1;



			opt.leftarrowpressed=0;

			if (nexttrans>26) nexttrans = 26;
			if (nexttrans<0) nexttrans = 0;


			// DEFINE THE MASTERSPEED FOR THE SLIDE //
			var masterspeed=300;
			if (nextli.data('masterspeed')!=undefined && nextli.data('masterspeed')>99 && nextli.data('masterspeed')<4001)
				masterspeed = nextli.data('masterspeed');

			// PREPARED DEFAULT SETTINGS PER TRANSITION
			STA = transitionsArray[STAindex];





			/////////////////////////////////////////////
			// SET THE BULLETS SELECTED OR UNSELECTED  //
			/////////////////////////////////////////////


			container.parent().find(".bullet").each(function() {
				var bul = jQuery(this);
				bul.removeClass("selected");

				if (opt.navigationArrows=="withbullet" || opt.navigationArrows=="nexttobullets") {
					if (bul.index()-1 == opt.next) bul.addClass('selected');

				} else {

					if (bul.index() == opt.next)  bul.addClass('selected');

				}
			});



			//////////////////////////////////////////////////////////////////
			// 		SET THE NEXT CAPTION AND REMOVE THE LAST CAPTION		//
			//////////////////////////////////////////////////////////////////

					container.find('>li').each(function() {
						var li = jQuery(this);
						if (li.index!=opt.act && li.index!=opt.next) li.css({'z-index':16});
					});

					actli.css({'z-index':18});
					nextli.css({'z-index':20});
					nextli.css({'opacity':0});


			///////////////////////////
			//	ANIMATE THE CAPTIONS //
			///////////////////////////

			if (actli.index() != nextli.index() && opt.firststart!=1) {
				removeTheCaptions(actli,opt);

			}
		
			animateTheCaptions(nextli, opt);




			/////////////////////////////////////////////
			//	SET THE ACTUAL AMOUNT OF SLIDES !!     //
			//  SET A RANDOM AMOUNT OF SLOTS          //
			///////////////////////////////////////////
						if (nextli.data('slotamount')==undefined || nextli.data('slotamount')<1) {
							opt.slots=Math.round(Math.random()*12+4);
							if (comingtransition=="boxslide")
								opt.slots=Math.round(Math.random()*6+3);
							else
							if (comingtransition=="flyin")
								opt.slots=Math.round(Math.random()*4+1);
						 } else {
							opt.slots=nextli.data('slotamount');

						}

			/////////////////////////////////////////////
			//	SET THE ACTUAL AMOUNT OF SLIDES !!     //
			//  SET A RANDOM AMOUNT OF SLOTS          //
			///////////////////////////////////////////
						if (nextli.data('rotate')==undefined)
							opt.rotate = 0
						 else
							if (nextli.data('rotate')==999)
								opt.rotate=Math.round(Math.random()*360);
							 else
							    opt.rotate=nextli.data('rotate');
						if (!jQuery.support.transition  || opt.ie || opt.ie9) opt.rotate=0;



			//////////////////////////////
			//	FIRST START 			//
			//////////////////////////////

			if (opt.firststart==1) {
					actli.css({'opacity':0});
					opt.firststart=0;
			}


			// HERE COMES THE TRANSITION ENGINE

			// ADJUST MASTERSPEED
			masterspeed = masterspeed + STA[4];

			if ((nexttrans==4 || nexttrans==5 || nexttrans==6) && opt.slots<3 ) opt.slots=3;

			// ADJUST SLOTS
			if (STA[3] != 0) opt.slots = Math.min(opt.slots,STA[3]);
			if (nexttrans==9) opt.slots = opt.width/20;
			if (nexttrans==10) opt.slots = opt.height/20;




			// PREPAREONESLIDEBOX
			if (STA[5] == "box") {
				if (STA[7] !=null) prepareOneSlideBox(actsh,opt,STA[7]);
				if (STA[6] !=null) prepareOneSlideBox(nextsh,opt,STA[6]);
			} else

			if (STA[5] == "vertical" || STA[5] == "horizontal") {
				if (STA[7] !=null) prepareOneSlideSlot(actsh,opt,STA[7],STA[5]);
				if (STA[6] !=null) prepareOneSlideSlot(nextsh,opt,STA[6],STA[5]);
			}

			// SHOW FIRST LI
			if (nexttrans<12 || nexttrans>16)  nextli.css({'opacity':1});


			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==0) {								// BOXSLIDE
						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						var maxz = Math.ceil(opt.height/opt.sloth);
						var curz = 0;
						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							curz=curz+1;
							if (curz==maxz) curz=0;

							TweenLite.fromTo(ss,(masterspeed)/600,
												{opacity:0,top:(0-opt.sloth),left:(0-opt.slotw),rotation:opt.rotate},
												{opacity:1,transformPerspective:600,top:0,left:0,scale:1,rotation:0,delay:((j)*15 + (curz)*30)/1500, ease:Power2.easeOut,onComplete:function() {
																if (j==(opt.slots*opt.slots)-1) {
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
																	}

												}});
						});
			}
			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==1) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						var maxtime;

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							rand=Math.random()*masterspeed+300;
							rand2=Math.random()*500+200;

							if (rand+rand2>maxtime) maxtime = rand2+rand2;


							TweenLite.fromTo(ss,rand/1000,
										{opacity:0,transformPerspective:600,rotation:opt.rotate},
										{opacity:1, ease:Power2.easeInOut,rotation:0,delay:rand2/1000})



						});

						setTimeout(function() {
											letItFree(container,opt,nextsh,actsh,nextli,actli)
								},masterspeed+300);

			}


			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==2) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

									TweenLite.to(ss,masterspeed/1000,{left:opt.slotw, rotation:(0-opt.rotate),onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)

									}});

						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

								TweenLite.fromTo(ss,masterspeed/1000,
												{left:0-opt.slotw, rotation:opt.rotate,transformPerspective:600},
												{left:0, rotation:0,ease:Power2.easeOut,onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
														}
									});

						});
			}



			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==3) {


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this);
									TweenLite.to(ss,masterspeed/1000,{top:opt.sloth,rotation:opt.rotate,transformPerspective:600,onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
									}});

						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function() {
							var ss=jQuery(this);

								TweenLite.fromTo(ss,masterspeed/1000,
												{top:0-opt.sloth,rotation:opt.rotate,transformPerspective:600},
												{top:0,rotation:0,ease:Power2.easeOut,onComplete:function() {
													letItFree(container,opt,nextsh,actsh,nextli,actli)
								}});

						});
			}



			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==4 || nexttrans==5) {

						//SET DEFAULT IMG UNVISIBLE




						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);



						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						var cspeed = (masterspeed)/1000;
						var ticker = cspeed;



						actsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							var del = (i*cspeed)/opt.slots;
							if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
							TweenLite.to(ss,cspeed*3,{transformPerspective:600,top:0+opt.height,opacity:0.5,rotation:opt.rotate,ease:Power2.easeInOut,delay:del});
						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							var del = (i*cspeed)/opt.slots;
							if (nexttrans==5) del = ((opt.slots-i-1)*cspeed)/(opt.slots)/1.5;
							TweenLite.fromTo(ss,cspeed*3,
											{top:(0-opt.height),opacity:0.5,rotation:opt.rotate,transformPerspective:600},
											{top:0,opacity:1,rotation:0,ease:Power2.easeInOut,delay:del,onComplete:function() {
													if (i==opt.slots-1) {
																letItFree(container,opt,nextsh,actsh,nextli,actli)
													}
							}});

						});


			}




			/////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION I.  //
			////////////////////////////////////
			if (nexttrans==6) {


						if (opt.slots<2) opt.slots=2;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);

						actsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);

							if (i<opt.slots/2)
								var tempo = (i+2)*60;
							else
								var tempo = (2+opt.slots-i)*60;

							TweenLite.to(ss,(masterspeed+tempo)/1000,{top:0+opt.height,opacity:1,rotation:opt.rotate,transformPerspective:600,ease:Power2.easeInOut});


						});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);

							if (i<opt.slots/2)
								var tempo = (i+2)*60;
							else
								var tempo = (2+opt.slots-i)*60;

									TweenLite.fromTo(ss,(masterspeed+tempo)/1000,
													{top:(0-opt.height),opacity:1,rotation:opt.rotate,transformPerspective:600},
													{top:(0),opacity:1,rotation:0,ease:Power2.easeInOut,onComplete:function() {
															if (i==Math.round(opt.slots/2)) {
																letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
									}});




						});
			}


			////////////////////////////////////
			// THE SLOTSZOOM - TRANSITION II. //
			////////////////////////////////////
			if (nexttrans==7) {

						masterspeed = masterspeed *2;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this).find('div');
							TweenLite.to(ss,masterspeed/1000,{
									left:(0-opt.slotw/2)+'px',
									top:(0-opt.height/2)+'px',
									width:(opt.slotw*2)+"px",
									height:(opt.height*2)+"px",
									opacity:0,
									rotation:opt.rotate,
									transformPerspective:600,
									ease:Power2.easeOut});

						});

						//////////////////////////////////////////////////////////////
						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
						///////////////////////////////////////////////////////////////
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this).find('div');

							TweenLite.fromTo(ss,masterspeed/1000,
										{left:0,top:0,opacity:0,transformPerspective:600},
										{left:(0-i*opt.slotw)+'px',
										 ease:Power2.easeOut,
									     top:(0)+'px',
									     width:opt.width,
									     height:opt.height,
										 opacity:1,rotation:0,
										 delay:0.1,
										 onComplete:function() {
												letItFree(container,opt,nextsh,actsh,nextli,actli)
										 }
										});
						});
			}




			////////////////////////////////////
			// THE SLOTSZOOM - TRANSITION II. //
			////////////////////////////////////
			if (nexttrans==8) {

						masterspeed = masterspeed * 3;

						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});


						// ALL OLD SLOTS SHOULD BE SLIDED TO THE RIGHT
						actsh.find('.slotslide').each(function() {
							var ss=jQuery(this).find('div');

									TweenLite.to(ss,masterspeed/1000,
												  {left:(0-opt.width/2)+'px',
												   top:(0-opt.sloth/2)+'px',
												   width:(opt.width*2)+"px",
												   height:(opt.sloth*2)+"px",
												   transformPerspective:600,
												   opacity:0,rotation:opt.rotate

													});

						});


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT //
						///////////////////////////////////////////////////////////////
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this).find('div');

									TweenLite.fromTo(ss,masterspeed/1000,
												  {left:0, top:0,opacity:0,transformPerspective:600},
												  {'left':(0)+'px',
												   'top':(0-i*opt.sloth)+'px',
												   'width':(nextsh.find('.defaultimg').data('neww'))+"px",
												   'height':(nextsh.find('.defaultimg').data('newh'))+"px",
												   opacity:1,rotation:0,
												   onComplete:function() {
															letItFree(container,opt,nextsh,actsh,nextli,actli)
													}});

						});
			}


			////////////////////////////////////////
			// THE SLOTSFADE - TRANSITION III.   //
			//////////////////////////////////////
			if (nexttrans==9 || nexttrans==10) {


						nextsh.find('.defaultimg').css({'opacity':0});

						var ssamount=0;
						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							ssamount++;
							TweenLite.fromTo(ss,masterspeed/1000,{opacity:0,transformPerspective:600,left:0,top:0},{opacity:1,ease:Power2.easeInOut,delay:(i*4)/1000});

						});

						//nextsh.find('.defaultimg').transition({'opacity':1},(masterspeed+(ssamount*4)));

						setTimeout(function() {
									letItFree(container,opt,nextsh,actsh,nextli,actli)
							},(masterspeed+(ssamount*4)));
			}


			///////////////////////////
			// SIMPLE FADE ANIMATION //
			///////////////////////////

			if (nexttrans==11 || nexttrans==26) {


						nextsh.find('.defaultimg').css({'opacity':0,'position':'relative'});

						var ssamount=0;
						if (nexttrans==26) masterspeed=0;

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						nextsh.find('.slotslide').each(function(i) {
							var ss=jQuery(this);
							TweenLite.fromTo(ss,masterspeed/1000,{opacity:0},{opacity:1,ease:Power2.easeInOut});
						});

						setTimeout(function() {
									letItFree(container,opt,nextsh,actsh,nextli,actli)
							},masterspeed+15);
			}






			if (nexttrans==12 || nexttrans==13 || nexttrans==14 || nexttrans==15) {

						//masterspeed = masterspeed * 3;


						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						nextsh.find('.defaultimg').css({'opacity':0});

					//	kill();

						var oow = opt.width;
						var ooh = opt.height;


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						var ssn=nextsh.find('.slotslide')

						if (opt.fullWidth=="on" || opt.fullSreen=="on") {
							oow=ssn.width();
							ooh=ssn.height();
						}
						var twx = 0;
						var twy = 0;

						if (nexttrans==12)
							twx = oow;
						else
						if (nexttrans==15)
							twx = 0-oow;
						else
						if (nexttrans==13)
							twy = ooh;
						else
						if (nexttrans==14)
							twy = 0-ooh;

						// SPECIALS FOR EXTENDED ANIMATIONS
						var op = 1;
						var scal = 1;
						var fromscale = 1;
						var easeitout = Power2.easeInOut;
						var easeitin = Power2.easeInOut;
						var speedy = masterspeed/1000;
						var speedy2 = speedy;

						// DEPENDING ON EXTENDED SPECIALS, DIFFERENT SCALE AND OPACITY FUNCTIONS NEED TO BE ADDED
						if (specials == 1) op = 0;
						if (specials == 2) op = 0;
						if (specials == 3) {
								easeitout = Power2.easeInOut;
								easeitin = Power1.easeInOut;
								actli.css({'position':'absolute','z-index':20});
								nextli.css({'position':'absolute','z-index':15});
								speedy = masterspeed / 1200;
						}

						if (specials==4 || specials==5)
							scal=0.6;
						if (specials==6 )
							scal=1.4;


						if (specials==5 || specials==6) {
						    fromscale=1.4;
						    op=0;
						    oow=0;
						    ooh=0;twx=0;twy=0;
						 }
						if (specials==6) fromscale=0.6;



						TweenLite.fromTo(ssn,speedy,
										{left:twx, top:twy, scale:fromscale, opacity:op,rotation:opt.rotate},
										{opacity:1,rotation:0,left:0,top:0,scale:1,ease:easeitin,onComplete:function() {
														letItFree(container,opt,nextsh,actsh,nextli,actli);
														actli.css({'position':'absolute','z-index':18});
														nextli.css({'position':'absolute','z-index':20});
												}

										});

						var ssa=actsh.find('.slotslide');

						if (specials==4 || specials==5) {
							oow = 0; ooh=0;
						}

						if (specials!=1) {
								if (nexttrans==12)
									TweenLite.to(ssa,speedy2,{'left':(0-oow)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==15)
									TweenLite.to(ssa,speedy2,{'left':(oow)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==13)
									TweenLite.to(ssa,speedy2,{'top':(0-ooh)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
								else
								if (nexttrans==14)
									TweenLite.to(ssa,speedy2,{'top':(ooh)+'px',scale:scal,opacity:op,rotation:opt.rotate,ease:easeitout});
						}
						nextli.css({'opacity':1});

			}


			//////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVI.  //
			//////////////////////////////////////
			if (nexttrans==16) {						// PAPERCUT



					actli.css({'position':'absolute','z-index':20});
					nextli.css({'position':'absolute','z-index':15});


					// PREPARE THE CUTS
					actli.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');

					actli.find('.tp-half-one').clone(true).appendTo(actli).addClass("tp-half-two");
					actli.find('.tp-half-two').removeClass('tp-half-one');

					var oow = opt.width;
					var ooh = opt.height;
					if (opt.autoHeight=="on")
						ooh = container.height();


					actli.find('.tp-half-one .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')

					actli.find('.tp-half-two .defaultimg').wrap('<div class="tp-papercut" style="width:'+oow+'px;height:'+ooh+'px;"></div>')

					actli.find('.tp-half-two .defaultimg').css({position:'absolute',top:'-50%'});

					actli.find('.tp-half-two .tp-caption').wrapAll('<div style="position:absolute;top:-50%;left:0px"></div>');

					TweenLite.set(actli.find('.tp-half-two'),
					                 {width:oow,height:ooh,overflow:'hidden',zIndex:15,position:'absolute',top:ooh/2,left:'0px',transformPerspective:600,transformOrigin:"center bottom"});

					TweenLite.set(actli.find('.tp-half-one'),
					                 {width:oow,height:ooh/2,overflow:'visible',zIndex:10,position:'absolute',top:'0px',left:'0px',transformPerspective:600,transformOrigin:"center top"});



					// ANIMATE THE CUTS
					var img=actli.find('.defaultimg');


					var ro1=Math.round(Math.random()*20-10);
					var ro2=Math.round(Math.random()*20-10);
					var ro3=Math.round(Math.random()*20-10);
					var xof = Math.random()*0.4-0.2;
					var yof = Math.random()*0.4-0.2;
					var sc1=Math.random()*1+1;
					var sc2=Math.random()*1+1;


					TweenLite.fromTo(actli.find('.tp-half-one'),masterspeed/1000,
					                 {width:oow,height:ooh/2,position:'absolute',top:'0px',left:'0px',transformPerspective:600,transformOrigin:"center top"},
					                 {scale:sc1,rotation:ro1,y:(0-ooh-ooh/4),ease:Power2.easeInOut});
					setTimeout(function() {
						TweenLite.set(actli.find('.tp-half-one'),{overflow:'hidden'});
					},50);
					TweenLite.fromTo(actli.find('.tp-half-one'),masterspeed/2000,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:masterspeed/2000});

					TweenLite.fromTo(actli.find('.tp-half-two'),masterspeed/1000,
					                 {width:oow,height:ooh,overflow:'hidden',position:'absolute',top:ooh/2,left:'0px',transformPerspective:600,transformOrigin:"center bottom"},
					                 {scale:sc2,rotation:ro2,y:ooh+ooh/4,ease:Power2.easeInOut});

					TweenLite.fromTo(actli.find('.tp-half-two'),masterspeed/2000,{opacity:1,transformPerspective:600,transformOrigin:"center center"},{opacity:0,delay:masterspeed/2000});

					if (actli.html()!=null)
						TweenLite.fromTo(nextli,(masterspeed-200)/1000,{opacity:0,scale:0.8,x:opt.width*xof, y:ooh*yof,rotation:ro3,transformPerspective:600,transformOrigin:"center center"},{rotation:0,scale:1,x:0,y:0,opacity:1,ease:Power2.easeInOut});

					nextsh.find('.defaultimg').css({'opacity':1});
					setTimeout(function() {


								// CLEAN UP BEFORE WE START
								actli.css({'position':'absolute','z-index':18});
								nextli.css({'position':'absolute','z-index':20});
								nextsh.find('.defaultimg').css({'opacity':1});
								actsh.find('.defaultimg').css({'opacity':0});
								if (actli.find('.tp-half-one').length>0)  {
									actli.find('.tp-half-one .defaultimg').unwrap();
									actli.find('.tp-half-one .slotholder').unwrap();

								}
								actli.find('.tp-half-two').remove();
								opt.transition = 0;
								opt.act = opt.next;

					},masterspeed);
					nextli.css({'opacity':1});

			}

			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVII.  //
			///////////////////////////////////////
			if (nexttrans==17) {								// 3D CURTAIN HORIZONTAL


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,(masterspeed)/800,
											{opacity:0,rotationY:0,scale:0.9,rotationX:-110,transformPerspective:600,transformOrigin:"center center"},
											{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:j*0.06,onComplete:function() {
													if (j==opt.slots-1) letItFree(container,opt,nextsh,actsh,nextli,actli)
											}});

						});
			}



			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XVIII.  //
			///////////////////////////////////////
			if (nexttrans==18) {								// 3D CURTAIN VERTICAL


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});


						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,(masterspeed)/500,
											{opacity:0,rotationY:310,scale:0.9,rotationX:10,transformPerspective:600,transformOrigin:"center center"},
											{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,rotationY:0,ease:Power3.easeOut,delay:j*0.06,onComplete:function() {
													if (j==opt.slots-1)
														letItFree(container,opt,nextsh,actsh,nextli,actli)
											}});

						});



			}


			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XIX.  //
			///////////////////////////////////////


			if (nexttrans==19 || nexttrans==22) {								// IN CUBE


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');

						var rot = 90;
						var op = 1;
						if (direction==1) rot = -90;

						if (nexttrans==19) {
							var torig = "center center -"+opt.height/2;
							op=0;

						} else {
							var torig = "center center "+opt.height/2;

						}

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT

						//if (nexttrans==129) {
							TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-40});
							TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:-40,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(masterspeed/4000)});
							TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-40});
							TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:-40,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(masterspeed/4000)});
						//}

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,masterspeed/1000,
											{left:0,rotationY:opt.rotate,opacity:op,top:0,scale:0.8,transformPerspective:600,transformOrigin:torig,rotationX:rot},
											{left:0,rotationY:0,opacity:1,top:0,z:0, scale:1,rotationX:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/3000});

						});

						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							var rot = -90;
							if (direction==1) rot = 90;

							TweenLite.fromTo(ss,masterspeed/1000,
											{opacity:1,rotationY:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:torig, rotationX:0},
											{opacity:1,rotationY:opt.rotate,top:0, scale:0.8,rotationX:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}




			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==20 ) {								// FLYIN


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');


						if (direction==1) {
						   var ofx = -opt.width
						   var rot  =70;
						   var torig = "left center -"+opt.height/2;
						} else {
							var ofx = opt.width;
							var rot = -70;
							var torig = "right center -"+opt.height/2;
						}


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							//ss.css({overflow:'visible'});
							TweenLite.fromTo(ss,masterspeed/1500,
											{left:ofx,rotationX:40,z:-600, opacity:op,top:0,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0, delay:(j*50)/1000,ease:Power2.easeInOut});

							TweenLite.fromTo(ss,masterspeed/1000,
											{rotationX:40,z:-600, opacity:op,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{rotationX:0,opacity:1,top:0,z:0, scale:1,rotationY:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/2000});

						});



						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							//ss.css({overflow:'visible'});
							if (direction!=1) {
							   var ofx = -opt.width
							   var rot  =70;
							   var torig = "left center -"+opt.height/2;
							} else {
								var ofx = opt.width;
								var rot = -70;
								var torig = "right center -"+opt.height/2;
							}
							TweenLite.fromTo(ss,masterspeed/1000,
											{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0, transformPerspective:600,transformOrigin:torig, rotationY:0},
											{opacity:1,rotationX:40,top:0, z:-600, left:ofx, scale:0.8,rotationY:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																if (j==opt.slots-1)
																	letItFree(container,opt,nextsh,actsh,nextli,actli)																	}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}






			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==21 || nexttrans==25) {								// TURNOFF


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');


						if (direction==1) {
						   var ofx = -opt.width
						   var rot  =110;

						   if (nexttrans==25) {
						   	 var torig = "center top 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "left center 0";
						     rot2 = opt.rotate;
						   }

						} else {
							var ofx = opt.width;
							var rot = -110;
							if (nexttrans==25) {
						   	 var torig = "center bottom 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "right center 0";
						     rot2 = opt.rotate;
						   }
						}


						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);


							TweenLite.fromTo(ss,masterspeed/1500,
											{left:0,rotationX:rot2,z:0, opacity:0,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0,rotationX:0,top:0,z:0, scale:1,rotationY:0, delay:(j*100)/1000+masterspeed/10000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)
															}
											});
							TweenLite.to(ss,0.3,{opacity:1,delay:(j*100)/1000+(masterspeed*0.2)/2000+masterspeed/10000});

						});



						if (direction!=1) {
						   var ofx = -opt.width
						   var rot  = 90;

						   if (nexttrans==25) {
						   	 var torig = "center top 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "left center 0";
						     rot2 = opt.rotate;
						   }

						} else {
							var ofx = opt.width;
							var rot = -90;
							if (nexttrans==25) {
						   	 var torig = "center bottom 0"
						   	 rot2 = -rot;
						   	 rot = opt.rotate;
						   } else {
						     var torig = "right center 0";
						     rot2 = opt.rotate;
						   }
						}

						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);


							TweenLite.fromTo(ss,masterspeed/3000,
											{left:0,rotationX:0,z:0, opacity:1,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:0},
											{left:0,rotationX:rot2,top:0,z:0, scale:1,rotationY:rot, delay:(j*100)/1000,ease:Power1.easeInOut});
							TweenLite.to(ss,0.2,{opacity:0,delay:(j*50)/1000+(masterspeed/3000 - (masterspeed/10000))});


						});
			}



			////////////////////////////////////////
			// THE SLOTSLIDE - TRANSITION XX.  //
			///////////////////////////////////////
			if (nexttrans==23 || nexttrans == 24) {								// cube-horizontal - inboxhorizontal


						//SET DEFAULT IMG UNVISIBLE
						nextsh.find('.defaultimg').css({'opacity':0});
						setTimeout(function() {
							actsh.find('.defaultimg').css({opacity:0});
						},100);
						var chix=nextli.css('z-index');
						var chix2=actli.css('z-index');

						var rot = -90;
						if (direction==1)
							  rot = 90;

						var op = 1;


						if (nexttrans==23) {
							var torig = "center center -"+opt.width/2;
							op=0;

						} else {
							var torig = "center center "+opt.width/2;

						}


						var opx=0;

						// ALL NEW SLOTS SHOULD BE SLIDED FROM THE LEFT TO THE RIGHT
						TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,ease:Power1.easeInOut,z:-90});
						TweenLite.fromTo(nextsh,masterspeed/2000,{transformPerspective:600,z:-90,rotationY:1},{rotationY:0,z:0,ease:Power1.easeInOut,x:0,delay:3*(masterspeed/4000)});
						TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:0,x:0,rotationY:0},{rotationY:1,x:0,ease:Power1.easeInOut,z:-90});
						TweenLite.fromTo(actsh,masterspeed/2000,{transformPerspective:600,z:-90,x:0,rotationY:1},{rotationY:0,z:0,x:0,ease:Power1.easeInOut,delay:3*(masterspeed/4000)});

						nextsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);

							TweenLite.fromTo(ss,masterspeed/1000,
											{left:opx,rotationX:opt.rotate,opacity:op,top:0,scale:1,transformPerspective:600,transformOrigin:torig,rotationY:rot},
											{left:0,rotationX:0,opacity:1,top:0,z:0, scale:1,rotationY:0, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli);

															}
											});
							TweenLite.to(ss,0.1,{opacity:1,delay:(j*50)/1000+masterspeed/3000});

						});

						rot = 90;
						if (direction==1)
							  rot = -90;




						actsh.find('.slotslide').each(function(j) {
							var ss=jQuery(this);
							TweenLite.fromTo(ss,masterspeed/1000,
											{left:0,opacity:1,rotationX:0,top:0,z:0,scale:1,transformPerspective:600,transformOrigin:torig, rotationY:0},
											{left:opx,opacity:1,rotationX:opt.rotate,top:0, scale:1,rotationY:rot, delay:(j*50)/1000,ease:Power2.easeInOut,onComplete: function() {

																	if (j==opt.slots-1)
																		letItFree(container,opt,nextsh,actsh,nextli,actli)

															}
											});
							TweenLite.to(ss,0.1,{opacity:0,delay:(j*50)/1000+(masterspeed/1000 - (masterspeed/10000))});


						});
			}


			var data={};
			data.slideIndex=opt.next+1;
			container.trigger('revolution.slide.onchange',data);
			setTimeout(function() { container.trigger('revolution.slide.onafterswap'); },masterspeed);
			container.trigger('revolution.slide.onvideostop');
		}


		/******************************
			-	STOP KEN BURN	-
		********************************/
		function stopKenBurn(container,opt) {
			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');


			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');

			nextsh.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				if (defimg.data('kenburn')!=undefined)
					defimg.data('kenburn').restart();
				TweenLite.killTweensOf(defimg,false);
				TweenLite.set(defimg,{scale:1,rotationZ:0});

				defimg.data('bgposition',nextsh.data('bgposition'));
				defimg.data('currotate',nextsh.data('rotationstart'));
				defimg.data('curscale',nextsh.data('bgfit'));

				});
			/*actsh.find('.defaultimg').each(function() {
				var defimg = jQuery(this);
				TweenLite.killTweensOf(defimg,false);
				TweenLite.set(defimg,{scale:1,rotationZ:0});
				if (defimg.data('oldbgposition')!=undefined)
					defimg.data('bgposition',defimg.data('oldbgposition'));

				defimg.data('currotate',nextsh.data('rotationstart'));
				defimg.data('curscale',nextsh.data('zoomstart')/100);

				});*/

		}


		/******************************
			-	startKenBurn	-
		********************************/
		function startKenBurn(container,opt) {

			try{
				var actli = container.find('>ul:first-child >li:eq('+opt.act+')');
			} catch(e) {
				var actli=container.find('>ul:first-child >li:eq(1)');
			}

			opt.lastslide=opt.act;

			var nextli = container.find('>ul:first-child >li:eq('+opt.next+')');


			var actsh = actli.find('.slotholder');
			var nextsh = nextli.find('.slotholder');

			var
				bgps = nextsh.data('bgposition'),
				bgpe = nextsh.data('bgpositionend'),
				zos = nextsh.data('zoomstart')/100,
				zoe = nextsh.data('zoomend')/100,
				ros = nextsh.data('rotationstart'),
				roe = nextsh.data('rotationend'),
				bgfs = nextsh.data('bgfit'),
				bgfe = nextsh.data('bgfitend'),
				easeme = nextsh.data('easeme'),
				dur = nextsh.data('duration')/1000;

				if (bgfs==undefined) bgfs=100;
				if (bgfe==undefined) bgfe=100;

				bgfs = calculateKenBurnScales(bgfs,nextsh,opt);
				bgfe = calculateKenBurnScales(bgfe,nextsh,opt);
				bgfe = bgfs;

				if (zos==undefined) zos=1;
				if (zoe==undefined) zoe=1;
				if (ros==undefined) ros=0;
				if (roe==undefined) roe=0;

				if (zos<1) zos=1;
				if (zoe<1) zoe=1;

				nextsh.find('.defaultimg').each(function() {
					var defimg = jQuery(this);
					defimg.data(
						'kenburn',
						TweenLite.fromTo(
								defimg,
								dur,
								{
									transformPerspective:1200, 
									backgroundSize:bgfs, 
									z:0,
									backgroundPosition:bgps,
									//rotationZ:ros,
									scale:zos,
								},
								{
									yoyo:2,
									//rotationZ:roe,
									ease:easeme,
									backgroundSize:bgfe,
									backgroundPosition:bgps,
									scale:zoe,
									onUpdate:function() {
										defimg.data('bgposition',defimg.css('backgroundPosition'));
										if (!isIE(8)) defimg.data('currotate',getRotationDegrees(defimg));
										if (!isIE(8)) defimg.data('curscale',defimg.css('backgroundSize'));
									}
								}
						)
					);
			})
		}


		/***********************************************
			-	KEN BURN BACKGROUND FIT CALCULATOR	-
		***********************************************/
		function calculateKenBurnScales(proc,sloth,opt) {
			var ow = sloth.data('owidth');
			var oh = sloth.data('oheight');

			var factor = (opt.container.width() /ow);
			var nheight = oh * factor;

			var hfactor = (nheight / opt.container.height())*proc;



			return (proc+"% "+hfactor+"%");
		}


		/******************************************************
			-	CALCULATE CURRENT SCALE AND ROTATION	-
		*******************************************************/

		function getMatrix(obj) {
		    var matrix = obj.css("-webkit-transform") ||
		                 obj.css("-moz-transform")    ||
		                 obj.css("-ms-transform")     ||
		                 obj.css("-o-transform")      ||
		                 obj.css("transform");
		    return matrix;
		};

		function parseMatrix(_str) {
			    return _str.replace(/^matrix(3d)?\((.*)\)$/,'$2').split(/, /);
			}

		function getScaleDegrees(obj) {
			    var matrix = parseMatrix(getMatrix(obj)),
			        scale = 1;

			    if(matrix[0] !== 'none') {
			        var a = matrix[0],
			            b = matrix[1],
			            d = 10;
			        scale = Math.round( Math.sqrt( a*a + b*b ) * d ) / d;
			    }

			    return scale;
			};

		function getRotationDegrees(obj) {
			    var matrix = obj.css("-webkit-transform") ||
			    obj.css("-moz-transform")    ||
			    obj.css("-ms-transform")     ||
			    obj.css("-o-transform")      ||
			    obj.css("transform");
			    if(matrix !== 'none') {
			        var values = matrix.split('(')[1].split(')')[0].split(',');
			        var a = values[0];
			        var b = values[1];
			        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
			    } else { var angle = 0; }
			    return (angle < 0) ? angle +=360 : angle;
			}

		/**************************************
			-	GIVE FREE THE TRANSITIOSN	-
		**************************************/
		function letItFree(container,opt,nextsh,actsh,nextli,actli) {
					removeSlots(container,opt);
					nextsh.find('.defaultimg').css({'opacity':1});
					if (nextli.index()!=actli.index()) actsh.find('.defaultimg').css({'opacity':0});
					opt.act=opt.next;
					moveSelectedThumb(container);
					if (nextsh.data('kenburns')=="on")
						startKenBurn(container,opt);
		}


				//////////////////////////////////////////
				// CHANG THE YOUTUBE PLAYER STATE HERE //
				////////////////////////////////////////
				 function onPlayerStateChange(event) {

					 var embedCode = event.target.getVideoEmbedCode();
					 var ytcont = jQuery('#'+embedCode.split('id="')[1].split('"')[0])
					 var container = ytcont.closest('.tp-simpleresponsive');
					 var player = ytcont.parent().data('player');

					if (event.data == YT.PlayerState.PLAYING) {

						var bt = container.find('.tp-bannertimer');
						var opt = bt.data('opt');
						bt.stop();

						if (ytcont.closest('.tp-caption').data('volume')=="mute")
							  player.mute();

						opt.videoplaying=true;
						//konsole.log("VideoPlay set to True due onPlayerStateChange PLAYING");
						opt.videostartednow=1;

					} else {

						var bt = container.find('.tp-bannertimer');
						var opt = bt.data('opt');

						if (event.data!=-1) {
							if (opt.conthover==0)
								bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
							opt.videoplaying=false;
							opt.videostoppednow=1;

						}

					}
					if (event.data==0 && opt.nextslideatend==true)
						opt.container.revnext();


				  }



				 ////////////////////////
				// VIMEO ADD EVENT /////
				////////////////////////
				function addEvent(element, eventName, callback) {

							if (element.addEventListener)  element.addEventListener(eventName, callback, false);
								else
							element.attachEvent(eventName, callback, false);
				}



				/////////////////////////////////////
				// EVENT HANDLING FOR VIMEO VIDEOS //
				/////////////////////////////////////

					function vimeoready_auto(player_id,autoplay) {

						var froogaloop = $f(player_id);
						var vimcont = jQuery('#'+player_id);
						var container = vimcont.closest('.tp-simpleresponsive');


						froogaloop.addEvent('ready', function(data) {
								if(autoplay) froogaloop.api('play');

								froogaloop.addEvent('play', function(data) {
									var bt = container.find('.tp-bannertimer');
									var opt = bt.data('opt');
									bt.stop();
									opt.videoplaying=true;
									if (vimcont.closest('.tp-caption').data('volume')=="mute")
									  froogaloop.api('setVolume',"0");
									//konsole.log("VideoPlay set to True due vimeoready_auto PLAYING");
								});

								froogaloop.addEvent('finish', function(data) {
										var bt = container.find('.tp-bannertimer');
										var opt = bt.data('opt');
										if (opt.conthover==0)
											bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
										opt.videoplaying=false;
									//konsole.log("VideoPlay set to False due vimeoready_auto FINISH");
										opt.videostartednow=1;
										if (opt.nextslideatend==true)
											opt.container.revnext();

								});

								froogaloop.addEvent('pause', function(data) {
										var bt = container.find('.tp-bannertimer');
										var opt = bt.data('opt');
										if (opt.conthover==0)
											bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
										opt.videoplaying=false;
									//konsole.log("VideoPlay set to False due vimeoready_auto PAUSE");
										opt.videostoppednow=1;
								});
						});
					}


					///////////////////////////////////////
					// EVENT HANDLING FOR VIDEO JS VIDEOS //
					////////////////////////////////////////
					function html5vidready(myPlayer,player_id) {

						if (player_id==undefined) player_id = jQuery(myPlayer["b"]).attr('id');
						var player_cont = jQuery('#'+player_id);
						var container = player_cont.closest('.tp-simpleresponsive');

						myPlayer.on("play",function() {

							if (player_cont.closest('.tp-caption').data('volume')=="mute")
								  myPlayer.volume(0);
							var bt = jQuery('body').find('.tp-bannertimer');
							var opt = bt.data('opt');
							bt.stop();
							try{
								opt.videoplaying=true;
							} catch(e) {}


							//konsole.log("VideoPlay set to True due html5vidready PLAYING");
						});

						myPlayer.on("pause",function() {
							    var bt = container.find('.tp-bannertimer');
								var opt = bt.data('opt');
								if (opt.conthover==0)
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								opt.videoplaying=false;
								//konsole.log("VideoPlay set to False due html5vidready pause");
								opt.videostoppednow=1;
						});

						myPlayer.on("ended",function() {
								var bt = container.find('.tp-bannertimer');
								var opt = bt.data('opt');
								if (opt.conthover==0)
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								opt.videoplaying=false;
								//konsole.log("VideoPlay set to False due html5vidready pause");
								opt.videostoppednow=1;
								if (opt.nextslideatend==true)
									opt.container.revnext();
						});


						myPlayer.on('loadedmetadata', function(data) {



								var videoWidth =0;
								var videoHeight=0;

								for(var prop in this) {
										try{
											if(this[prop].hasOwnProperty('videoWidth'))
												videoWidth = this[prop].videoWidth;

											if(this[prop].hasOwnProperty('videoHeight'))
												 videoHeight = this[prop].videoHeight;
										} catch(e) {}
									}


								var mediaAspect = videoWidth/videoHeight;




								if (player_cont.data('mediaAspect') == undefined) player_cont.data('mediaAspect',mediaAspect);
								if (player_cont.closest('.tp-caption').data('forcecover')==1)
									updateHTML5Size(player_cont,container);

						});

					}
				/////////////////////////////////////
				// RESIZE HTML5VIDEO FOR FULLSCREEN//
				/////////////////////////////////////
				function updateHTML5Size(pc,container) {
						var windowW = container.width();
						var windowH = container.height();
						var mediaAspect = pc.data('mediaAspect');

						var windowAspect = windowW/windowH;
						pc.parent().find('.vjs-poster').css({width:"100%",height:"100%"});
						if (windowAspect < mediaAspect) {
							// taller
								pc
									.width(windowH*mediaAspect)
									.height(windowH);
								pc
									.css('top',0)
									.css('left',-(windowH*mediaAspect-windowW)/2)
									.css('height',windowH);
								pc.find('.vjs-tech').css('width',windowH*mediaAspect);

						} else {
							// wider
								pc
									.width(windowW)
									.height(windowW/mediaAspect);
								pc
									.css('top',-(windowW/mediaAspect-windowH)/2)
									.css('left',0)
									.css('height',windowW/mediaAspect);
								pc.find('.vjs-tech').css('width','100%');

						}

					}
					
					
	


				////////////////////////
				// SHOW THE CAPTION  //
				///////////////////////
				function animateTheCaptions(nextli, opt,recalled) {
						
						var offsetx=0;
						var offsety=0;

						nextli.find('.tp-caption').each(function(i) {
								

								offsetx = opt.width/2 - (opt.startwidth*opt.bw)/2;



								var xbw = opt.bw;
								var xbh = opt.bh;


								if (opt.fullScreen=="on")
									  offsety = opt.height/2 - (opt.startheight*opt.bh)/2;

								if (opt.autoHeight=="on")
									  offsety = opt.container.height()/2 - (opt.startheight*opt.bh)/2;;

								if (offsety<0) offsety=0;

								var nextcaption=jQuery(this);//nextli.find('.tp-caption:eq('+i+')');
								

								var handlecaption=0;

								// HIDE CAPTION IF RESOLUTION IS TOO LOW
								if (opt.width<opt.hideCaptionAtLimit && nextcaption.data('captionhidden')=="on") {
									nextcaption.addClass("tp-hidden-caption")
									handlecaption=1;
								} else {
									if (opt.width<opt.hideAllCaptionAtLimit || opt.width<opt.hideAllCaptionAtLilmit)	{
										nextcaption.addClass("tp-hidden-caption")
										handlecaption=1;
									} else {
										nextcaption.removeClass("tp-hidden-caption")
									}
								}

								if (handlecaption==0) {

									// ADD A CLICK LISTENER TO THE CAPTION
									if (nextcaption.data('linktoslide')!=undefined && !nextcaption.hasClass("hasclicklistener")) {
										nextcaption.addClass("hasclicklistener")
										nextcaption.css({'cursor':'pointer'});
										if (nextcaption.data('linktoslide')!="no") {
											nextcaption.click(function() {
												var nextcaption=jQuery(this);
												var dir = nextcaption.data('linktoslide');
												if (dir!="next" && dir!="prev") {
													opt.container.data('showus',dir);
													opt.container.parent().find('.tp-rightarrow').click();
												} else
													if (dir=="next")
														opt.container.parent().find('.tp-rightarrow').click();
												else
													if (dir=="prev")
														opt.container.parent().find('.tp-leftarrow').click();
											});
										}
									}// END OF CLICK LISTENER


									if (offsetx<0) offsetx=0;


									// YOUTUBE AND VIMEO LISTENRES INITIALISATION

									var frameID = "iframe"+Math.round(Math.random()*1000+1);

									if (nextcaption.find('iframe').length>0 || nextcaption.find('video').length>0) {

										if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime')=="true" ) {
											nextcaption.data('autoplay',true);
										}

										nextcaption.find('iframe').each(function() {
												var ifr=jQuery(this);
												

												// START YOUTUBE HANDLING
												opt.nextslideatend = nextcaption.data('nextslideatend');
												if (nextcaption.data('thumbimage')!=undefined && nextcaption.data('thumbimage').length>2 && nextcaption.data('autoplay')!=true && !recalled) {
													nextcaption.find('.tp-thumb-image').remove();
													nextcaption.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+nextcaption.data('thumbimage')+'); background-size:cover"></div>');
												}

													if (ifr.attr('src').toLowerCase().indexOf('youtube')>=0) {

														 if (!ifr.hasClass("HasListener")) {
															try {
																ifr.attr('id',frameID);

																var player;
																if (nextcaption.data('autoplay')==true)
																	player = new YT.Player(frameID, {
																		events: {
																			"onStateChange": onPlayerStateChange,
																			'onReady': function(event) {event.target.playVideo()}
																		}
																	});
																else
																	player = new YT.Player(frameID, {
																		events: {
																			"onStateChange": onPlayerStateChange
																		}
																	});
																ifr.addClass("HasListener");

																nextcaption.data('player',player);

															} catch(e) {}
													 } else {
														if (nextcaption.data('autoplay')==true) {
																var player=nextcaption.data('player');
																nextcaption.data('timerplay',setTimeout(function() {
																	if (nextcaption.data('forcerewind')=="on")
																		player.seekTo(0);
																	player.playVideo();
																},nextcaption.data('start')));
														}
													 } // END YOUTUBE HANDLING

													 // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
															 nextcaption.find('.tp-thumb-image').click(function() {
																 TweenLite.to(jQuery(this),0.3,{opacity:0,ease:Power3.easeInOut,onComplete: function() {
																	 nextcaption.find('.tp-thumb-image').remove();
																	}
																 })
																 var player=nextcaption.data('player');
																 player.playVideo();
															 })
												} else {
													// START VIMEO HANDLING
													if (ifr.attr('src').toLowerCase().indexOf('vimeo')>=0) {

														   if (!ifr.hasClass("HasListener")) {
																ifr.addClass("HasListener");
																ifr.attr('id',frameID);
																var isrc = ifr.attr('src');
																var queryParameters = {}, queryString = isrc,
																re = /([^&=]+)=([^&]*)/g, m;
																// Creates a map with the query string parameters
																while (m = re.exec(queryString)) {
																	queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
																}

																if (queryParameters['player_id']!=undefined)
																	isrc = isrc.replace(queryParameters['player_id'],frameID);
																else
																	isrc=isrc+"&player_id="+frameID;

																try{ isrc = isrc.replace('api=0','api=1'); } catch(e) {}

																isrc=isrc+"&api=1";

																ifr.attr('src',isrc);
																var player = nextcaption.find('iframe')[0];

																$f(player).addEvent('ready', function() {vimeoready_auto(frameID,nextcaption.data('autoplay'))});

															 } else {
																	if (nextcaption.data('autoplay')==true) {

																		var ifr = nextcaption.find('iframe');
																		var id = ifr.attr('id');
																		var froogaloop = $f(id);
																		nextcaption.data('timerplay',setTimeout(function() {
																			if (nextcaption.data('forcerewind')=="on")
																				froogaloop.api("seekTo",0);
																			froogaloop.api("play");
																		},nextcaption.data('start')));
																	}
															 }// END HAS LISTENER HANDLING

															 // PLAY VIDEO IF THUMBNAIL HAS BEEN CLICKED
															 nextcaption.find('.tp-thumb-image').click(function() {
																 TweenLite.to(jQuery(this),0.3,{opacity:0,ease:Power3.easeInOut,onComplete: function() {
																	 nextcaption.find('.tp-thumb-image').remove();
																	}
																 })
																 var ifr = nextcaption.find('iframe');
																 var id = ifr.attr('id');
																 var froogaloop = $f(id);
																 froogaloop.api("play");
															 })


													}  // END OF VIMEO HANDLING
											}  // END OF CHOOSE BETWEEN YOUTUBE AND VIMEO
										}); // END OF LOOP THROUGH IFRAMES

										// START OF VIDEO JS
										if (nextcaption.find('video').length>0) {


															nextcaption.find('video').each(function(i) {
																var html5vid = jQuery(this).parent();

																if (nextcaption.data('dottedoverlay')!="none" && nextcaption.data('dottedoverlay')!=undefined)
																	if (nextcaption.find('.tp-dottedoverlay').length!=1)
																		html5vid.append('<div class="tp-dottedoverlay '+nextcaption.data('dottedoverlay')+'"></div>');

																var mediaaspect=16/9;
																if (nextcaption.data('aspectratio')=="4:3") mediaaspect=4/3;
																html5vid.data('mediaAspect',mediaaspect);



																if (html5vid.closest('.tp-caption').data('forcecover')==1) 
																	updateHTML5Size(html5vid,opt.container);



																if (html5vid.hasClass("video-js")) {
																	opt.nextslideatend = nextcaption.data('nextslideatend');
																	if (!html5vid.hasClass("HasListener")) {
																		html5vid.addClass("HasListener");
																		var videoID = "videoid_"+Math.round(Math.random()*1000+1);
																		html5vid.attr('id',videoID);

																		videojs(videoID).ready(function(){

																			html5vidready(this,videoID)

																		});

																	} else {
																		videoID = html5vid.attr('id');
																	}


																	html5vid.find('.vjs-poster').css({display:"block"});

																	if (nextcaption.data('autoplay')==true) {

																		var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');
																		setTimeout(function(){
																			bt.stop();
																			opt.videoplaying=true;
																		},200);

																		//konsole.log("VideoPlay set to True due HTML5 VIDEO 1st/2nd load AutoPlay");


																		videojs(videoID).ready(function(){
																			var myPlayer = this;
																			try {
																					if (nextcaption.data('forcerewind')=="on")
																						  myPlayer.currentTime(0);
																				} catch(e) {

																				}

																			html5vid.data('timerplay',setTimeout(function() {
																				if (nextcaption.data('forcerewind')=="on")
																				  myPlayer.currentTime(0);

																				if (html5vid.closest('.tp-caption').data('volume')=="mute")
																				  myPlayer.volume(0);

																				setTimeout(function() {
																					myPlayer.play(0);
																					html5vid.find('.vjs-poster').css({display:"none"});
																				},50);
																			},10+nextcaption.data('start')));
																		});
																	}


																	if (html5vid.data('ww') == undefined) html5vid.data('ww',html5vid.width());
																	if (html5vid.data('hh') == undefined) html5vid.data('hh',html5vid.height());

																	videojs(videoID).ready(function(){
																		if (!nextcaption.hasClass("fullscreenvideo")) {
																			var myPlayer = videojs(videoID);

																			try{
																				myPlayer.width(html5vid.data('ww')*opt.bw);
																				myPlayer.height(html5vid.data('hh')*opt.bh);
																			} catch(e) {}
																		}
																	});



																	if (html5vid.closest('.tp-caption').data('forcecover')==1) {
																		updateHTML5Size(html5vid,opt.container);
																		html5vid.addClass("fullcoveredvideo");
																	}



																 }

															});
											} // END OF VIDEO JS FUNCTIONS

											// IF AUTOPLAY IS ON, WE NEED SOME STOP FUNCTION ON
												if (nextcaption.data('autoplay')==true) {
													var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');

													setTimeout(function() {
														bt.stop();
														opt.videoplaying=true;

													},200)
													opt.videoplaying=true;

													if (nextcaption.data('autoplayonlyfirsttime') == true || nextcaption.data('autoplayonlyfirsttime')=="true" ) {
														nextcaption.data('autoplay',false);
														nextcaption.data('autoplayonlyfirsttime',false);
													}
												}
									}




										// NEW ENGINE
										//if (nextcaption.hasClass("randomrotate") && (opt.ie || opt.ie9)) nextcaption.removeClass("randomrotate").addClass("sfb");
										//	nextcaption.removeClass('noFilterClass');



										   var imw =0;
										   var imh = 0;

													if (nextcaption.find('img').length>0) {
														var im = nextcaption.find('img');
														if (im.data('ww') == undefined) im.data('ww',im.width());
														if (im.data('hh') == undefined) im.data('hh',im.height());

														var ww = im.data('ww');
														var hh = im.data('hh');

														if(nextcaption.find('.tp-resizeme').length>0){
															im.width(ww*opt.bw);
															im.height(hh*opt.bh);
															imw = im.width();
															imh = im.height();
														}
													} else {
													if (nextcaption.find('iframe').length>0 || nextcaption.find('.video-js').length>0) {

															var im = nextcaption.find('iframe');
															im.css({display:"block"});
															if (nextcaption.data('ww') == undefined) {
																nextcaption.data('ww',im.width());
															}
															if (nextcaption.data('hh') == undefined) nextcaption.data('hh',im.height());

															var ww = nextcaption.data('ww');
															var hh = nextcaption.data('hh');

															var nc =nextcaption;
																if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
																if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
																if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
																if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
																if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

																if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
																if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
																if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
																if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

																if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTop'),0) || 0);
																if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottom'),0) || 0);
																if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeft'),0) || 0);
																if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRight'),0) || 0);

																//if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);

																var fvwidth=opt.width;
																var fvheight=opt.height;
																if (fvwidth>opt.startwidth) fvwidth=opt.startwidth;
																if (fvheight>opt.startheight) fvheight=opt.startheight;


															
																if (!nextcaption.hasClass('fullscreenvideo'))
																			nextcaption.css({

																				 'font-size': (nc.data('fsize') * opt.bw)+"px",

																				 'padding-top': (nc.data('pt') * opt.bh) + "px",
																				 'padding-bottom': (nc.data('pb') * opt.bh) + "px",
																				 'padding-left': (nc.data('pl') * opt.bw) + "px",
																				 'padding-right': (nc.data('pr') * opt.bw) + "px",

																				 'margin-top': (nc.data('mt') * opt.bh) + "px",
																				 'margin-bottom': (nc.data('mb') * opt.bh) + "px",
																				 'margin-left': (nc.data('ml') * opt.bw) + "px",
																				 'margin-right': (nc.data('mr') * opt.bw) + "px",

																				 'border-top': (nc.data('bt') * opt.bh) + "px",
																				 'border-bottom': (nc.data('bb') * opt.bh) + "px",
																				 'border-left': (nc.data('bl') * opt.bw) + "px",
																				 'border-right': (nc.data('br') * opt.bw) + "px",

																				  //'line-height': (nc.data('lh') * opt.bh) + "px",
																				 'height':(hh*opt.bh)+'px',
																				 'white-space':"nowrap"
																				});
																	else  {
																		   offsetx=0; offsety=0;
																		   nextcaption.data('x',0)
																		   nextcaption.data('y',0)

																		   var ovhh = opt.height
																		   if (opt.autoHeight=="on")
																		   		ovhh = opt.container.height()
																			nextcaption.css({

																				'width':opt.width,
																				'height':ovhh
																			});
																		}


															im.width(ww*opt.bw);
															im.height(hh*opt.bh);
															imw = im.width();
															imh = im.height();
														} else {
															
															
															nextcaption.find('.tp-resizeme, .tp-resizeme *').each(function() {
																	
																	calcCaptionResponsive(jQuery(this),opt);
															});
														
															
															if (nextcaption.hasClass("tp-resizeme")) {
																nextcaption.find('*').each(function() {
																	calcCaptionResponsive(jQuery(this),opt,"first");
																});
																calcCaptionResponsive(nextcaption,opt,"first");
																nextcaption.find('*').each(function() {
																	calcCaptionResponsive(jQuery(this),opt);
																});
																calcCaptionResponsive(nextcaption,opt);
															}

															imh=nextcaption.outerHeight(true);
															imw=nextcaption.outerWidth(true);

															// NEXTCAPTION FRONTCORNER CHANGES
															var ncch = nextcaption.outerHeight();
															var bgcol = nextcaption.css('backgroundColor');
															nextcaption.find('.frontcorner').css({
																			'borderWidth':ncch+"px",
																			'left':(0-ncch)+'px',
																			'borderRight':'0px solid transparent',
																			'borderTopColor':bgcol
															});

															nextcaption.find('.frontcornertop').css({
																			'borderWidth':ncch+"px",
																			'left':(0-ncch)+'px',
																			'borderRight':'0px solid transparent',
																			'borderBottomColor':bgcol
															});

															// NEXTCAPTION BACKCORNER CHANGES
															nextcaption.find('.backcorner').css({
																			'borderWidth':ncch+"px",
																			'right':(0-ncch)+'px',
																			'borderLeft':'0px solid transparent',
																			'borderBottomColor':bgcol
															});

															// NEXTCAPTION BACKCORNER CHANGES
															nextcaption.find('.backcornertop').css({
																			'borderWidth':ncch+"px",
																			'right':(0-ncch)+'px',
																			'borderLeft':'0px solid transparent',
																			'borderTopColor':bgcol
															});

														}


												}

											if (opt.fullScreenAlignForce == "on") {
												xbw = 1;
												xbh = 1;
												offsetx=0;
												offsety=0;
											}

											if (nextcaption.data('voffset')==undefined) nextcaption.data('voffset',0);
											if (nextcaption.data('hoffset')==undefined) nextcaption.data('hoffset',0);

											var vofs= nextcaption.data('voffset')*xbw;
											var hofs= nextcaption.data('hoffset')*xbw;

											var crw = opt.startwidth*xbw;
											var crh = opt.startheight*xbw;

											if (opt.fullScreenAlignForce == "on") {
												crw = opt.container.width();
												crh = opt.container.height();

											}

										

											// CENTER THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="center" || nextcaption.data('xcenter')=='center') {
												nextcaption.data('xcenter','center');
												nextcaption.data('x',(crw/2 - nextcaption.outerWidth(true)/2)/xbw+  hofs);

											}

											// ALIGN LEFT THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="left" || nextcaption.data('xleft')=='left') {
												nextcaption.data('xleft','left');
												nextcaption.data('x',(0)/xbw+hofs);

											}

											// ALIGN RIGHT THE CAPTION HORIZONTALLY
											if (nextcaption.data('x')=="right" || nextcaption.data('xright')=='right') {
												nextcaption.data('xright','right');
												nextcaption.data('x',((crw - nextcaption.outerWidth(true))+hofs)/xbw);
												//konsole.log("crw:"+crw+"  width:"+nextcaption.outerWidth(true)+"  xbw:"+xbw);
												//konsole.log("x-pos:"+nextcaption.data('x'))
											}


											// CENTER THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="center" || nextcaption.data('ycenter')=='center') {
												nextcaption.data('ycenter','center');
												nextcaption.data('y',(crh/2 - nextcaption.outerHeight(true)/2)/xbh + vofs);

											}

											// ALIGN TOP THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="top" || nextcaption.data('ytop')=='top') {
												nextcaption.data('ytop','top');
												nextcaption.data('y',(0)/opt.bh+vofs);

											}

											// ALIGN BOTTOM THE CAPTION VERTICALLY
											if (nextcaption.data('y')=="bottom" || nextcaption.data('ybottom')=='bottom') {
												nextcaption.data('ybottom','bottom');
												nextcaption.data('y',((crh - nextcaption.outerHeight(true))+vofs)/xbw);
											}



											// THE TRANSITIONS OF CAPTIONS
											// MDELAY AND MSPEED
											if (nextcaption.data('start') == undefined) nextcaption.data('start',1000);



											var easedata=nextcaption.data('easing');
											if (easedata==undefined) easedata="Power1.easeOut";


											var mdelay = nextcaption.data('start')/1000;
											var mspeed = nextcaption.data('speed')/1000;
											var d_x = nextcaption.data('x');
											var d_y = nextcaption.data('y');
											if(	nextcaption.attr("changePostion") == "1"){
												d_x =  nextcaption.attr('dataleft');
												d_y =  nextcaption.attr('datatop');
											}
											
											
											var calcx = (xbw*d_x+offsetx);
											
											var calcy = (opt.bh*d_y+offsety);




											if (opt.fullScreenAlignForce == "on")
												calcy = nextcaption.data('y')+offsety;

													TweenLite.killTweensOf(nextcaption,false);
													clearTimeout(nextcaption.data('reversetimer'));


													var tlop = 0,
													 	tlxx = calcx, tlyy = calcy, tlzz = 2,
													    tlsc = 1,tlro = 0,
													    sc=1,scX=1,scY= 1,
													    ro=0,roX=0,roY=0,roZ = 0,
														skwX=0, skwY = 0,
														opa = 0,
														trorig = "center,center",
														tper = 300,
														repeatV = 0,
														yoyoV = false,
													    repeatdelayV = 0;

													if (nextcaption.data('repeat')!=undefined) repeatV = nextcaption.data('repeat');
													if (nextcaption.data('yoyo')!=undefined) yoyoV = nextcaption.data('yoyo');
													if (nextcaption.data('repeatdelay')!=undefined) repeatdelayV = nextcaption.data('repeatdelay');


													if (nextcaption.hasClass("customin")) {

														var customarray = nextcaption.data('customin').split(';');
														jQuery.each(customarray,function(index,param) {

															param = param.split(":")

															var w = param[0],
																v = param[1];


															if (w=="rotationX") roX = parseInt(v,0);
															if (w=="rotationY") roY = parseInt(v,0);
															if (w=="rotationZ") roZ = parseInt(v,0);
															if (w=="scaleX")  scX = parseFloat(v);
															if (w=="scaleY")  scY = parseFloat(v);
															if (w=="opacity") opa = parseFloat(v);
															if (w=="skewX")   skwX = parseInt(v,0);
															if (w=="skewY")   skwY = parseInt(v,0);
															if (w=="x") tlxx = calcx + parseInt(v,0);
															if (w=="y") tlyy = calcy + parseInt(v,0);
															if (w=="z") tlzz = parseInt(v,0);
															if (w=="transformOrigin") trorig = v.toString();
															if (w=="transformPerspective") tper=parseInt(v,0);


														})
													}



													if (nextcaption.hasClass("randomrotate")) {

																sc = Math.random()*3+1;
																ro = Math.round(Math.random()*200-100);
																tlxx = calcx + Math.round(Math.random()*200-100);
																tlyy = calcy + Math.round(Math.random()*200-100);
													}

													if (nextcaption.hasClass('lfr') || nextcaption.hasClass('skewfromright'))
														tlxx = 15+opt.width;



													if (nextcaption.hasClass('lfl') || nextcaption.hasClass('skewfromleft'))
														tlxx = -15-imw;

													if (nextcaption.hasClass('sfl') | nextcaption.hasClass('skewfromleftshort'))
														tlxx = calcx-50;

													if (nextcaption.hasClass('sfr') | nextcaption.hasClass('skewfromrightshort'))
														tlxx = calcx+50;


													if (nextcaption.hasClass('lft'))
														tlyy = -25 - imh;


													if (nextcaption.hasClass('lfb'))
														tlyy = 25 + opt.height;

													if (nextcaption.hasClass('sft'))
														tlyy = calcy-50;

													if (nextcaption.hasClass('sfb'))
														tlyy = calcy+50;

													if (nextcaption.hasClass('skewfromright') || nextcaption.hasClass('skewfromrightshort'))
														skwX = -85

													if (nextcaption.hasClass('skewfromleft') || nextcaption.hasClass('skewfromleftshort'))
														skwX =  85

													if (get_browser().toLowerCase()=="safari") {
														roX=0;roY=0;
													}
													tlxx=Math.round(tlxx);
													tlyy=Math.round(tlyy);
													calcx=Math.round(calcx);
													calcy=Math.round(calcy);
													

													// CHANGE to TweenMax.  if Yoyo and Repeat is used. Dont forget to laod the Right Tools for it !!
													if (nextcaption.hasClass("customin")) {
												
																nextcaption.data('anim',TweenLite.fromTo(nextcaption,mspeed,
																				{ scaleX:scX,
																				  scaleY:scY,
																				  rotationX:roX,
																				  rotationY:roY,
																				  rotationZ:roZ,
																				  x:0,
																				  y:0,
																				  left:tlxx,
																				  top:tlyy,
																				  z:tlzz,
																				  opacity:opa,
																				  transformPerspective:tper,
																				  transformOrigin:trorig,
																				  visibility:'hidden'},

																				{
																				  left:calcx,
																				  top:calcy,
																				  scaleX:1,
																				  scaleY:1,
																				  rotationX:0,
																				  rotationY:0,
																				  rotationZ:0,
																				  skewX:0,
																				  skewY:0,
																				  z:0,
																				  x:0,
																				  y:0,
																				  visibility:'visible',
																				  opacity:1,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"all",

																				  /*yoyo:yoyoV,
																				  repeat:repeatV,
																				  repeatDelay:repeatdelayV*/
																				}));


													} else {
														nextcaption.data('anim',TweenLite.fromTo(nextcaption,mspeed,
																				{ scale:sc,
																				  rotationX:0,
																				  rotationY:0,
																				  skewY:0,
																				  rotation:ro,
																				  left:tlxx+'px',
																				  top:tlyy+"px",
																				  opacity:0,
																				  z:0,
																				  x:0,
																				  y:0,
																				  skewX:skwX,
																				  transformPerspective:600,
																				  visibility:'visible',

																				 },

																				{ left:calcx+'px',
																				  top:calcy+"px",
																				  scale:1,
																				  skewX:0,
																				  rotation:0,
																				  z:0,
																				  visibility:'visible',
																				  opacity:1,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"all",
																				  yoyo:yoyoV,
																				  repeat:repeatV,
																				  repeatDelay:repeatdelayV,


																				}));
													}





											  nextcaption.data('killall',setTimeout(function() {
												   nextcaption.css({transform:"none",'-moz-transform':'none','-webkit-transform':'none'});
											   },(mspeed*1000)+(mdelay*1000)+20))


												nextcaption.data('timer',setTimeout(function() {
													if (nextcaption.hasClass("fullscreenvideo"))
														nextcaption.css({'display':'block'});

												},nextcaption.data('start')));


												// IF THERE IS ANY EXIT ANIM DEFINED
												if (nextcaption.data('end')!=undefined)
																endMoveCaption(nextcaption,opt,nextcaption.data('end')/1000);


											}

						})

						var bt=jQuery('body').find('#'+opt.container.attr('id')).find('.tp-bannertimer');
						bt.data('opt',opt);
				}


				function get_browser(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[0];
				    }
				function get_browser_version(){
				    var N=navigator.appName, ua=navigator.userAgent, tem;
				    var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
				    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
				    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
				    return M[1];
				    }

				/////////////////////////////////////////////////////////////////
				//	-	CALCULATE THE RESPONSIVE SIZES OF THE CAPTIONS	-	  //
				/////////////////////////////////////////////////////////////////
				function calcCaptionResponsive(nc,opt,flag) {
								if (nc.data('fsize') == undefined) nc.data('fsize',parseInt(nc.css('font-size'),0) || 0);
								if (nc.data('pt') == undefined) nc.data('pt',parseInt(nc.css('paddingTop'),0) || 0);
								if (nc.data('pb') == undefined) nc.data('pb',parseInt(nc.css('paddingBottom'),0) || 0);
								if (nc.data('pl') == undefined) nc.data('pl',parseInt(nc.css('paddingLeft'),0) || 0);
								if (nc.data('pr') == undefined) nc.data('pr',parseInt(nc.css('paddingRight'),0) || 0);

								if (nc.data('mt') == undefined) nc.data('mt',parseInt(nc.css('marginTop'),0) || 0);
								if (nc.data('mb') == undefined) nc.data('mb',parseInt(nc.css('marginBottom'),0) || 0);
								if (nc.data('ml') == undefined) nc.data('ml',parseInt(nc.css('marginLeft'),0) || 0);
								if (nc.data('mr') == undefined) nc.data('mr',parseInt(nc.css('marginRight'),0) || 0);

								if (nc.data('bt') == undefined) nc.data('bt',parseInt(nc.css('borderTopWidth'),0) || 0);
								if (nc.data('bb') == undefined) nc.data('bb',parseInt(nc.css('borderBottomWidth'),0) || 0);
								if (nc.data('bl') == undefined) nc.data('bl',parseInt(nc.css('borderLeftWidth'),0) || 0);
								if (nc.data('br') == undefined) nc.data('br',parseInt(nc.css('borderRightWidth'),0) || 0);

								//if (nc.data('lh') == undefined) nc.data('lh',parseInt(nc.css('lineHeight'),0) || 0);
								if (nc.data('minwidth') == undefined) nc.data('minwidth',parseInt(nc.css('minWidth'),0) || 0);
								if (nc.data('minheight') == undefined) nc.data('minheight',parseInt(nc.css('minHeight'),0) || 0);
								if (nc.data('maxwidth') == undefined) nc.data('maxwidth',parseInt(nc.css('maxWidth'),0) || "none");
								if (nc.data('maxheight') == undefined) nc.data('maxheight',parseInt(nc.css('maxHeight'),0) || "none");
								
								if (nc.data('wan') == undefined) nc.data('wan',nc.css("-webkit-transition"));
								if (nc.data('moan') == undefined) nc.data('moan',nc.css("-moz-animation-transition"));
								if (nc.data('man') == undefined) nc.data('man',nc.css("-ms-animation-transition"));
								if (nc.data('ani') == undefined) nc.data('ani',nc.css("transition"));

								if(flag=="first"){
									return;
								}

							    nc.css("-webkit-transition", "none");
							    nc.css("-moz-transition", "none");
							    nc.css("-ms-transition", "none");
							    nc.css("transition", "none");


								TweenLite.set(nc,{
												 fontSize: Math.round((nc.data('fsize') * opt.bw))+"px",

												 paddingTop: Math.round((nc.data('pt') * opt.bh)) + "px",
												 paddingBottom: Math.round((nc.data('pb') * opt.bh)) + "px",
												 paddingLeft: Math.round((nc.data('pl') * opt.bw)) + "px",
												 paddingRight: Math.round((nc.data('pr') * opt.bw)) + "px",

												 marginTop: (nc.data('mt') * opt.bh) + "px",
												 marginBottom: (nc.data('mb') * opt.bh) + "px",
												 marginLeft: (nc.data('ml') * opt.bw) + "px",
												 marginRight: (nc.data('mr') * opt.bw) + "px",

												 borderTopWidth: Math.round((nc.data('bt') * opt.bh)) + "px",
												 borderBottomWidth: Math.round((nc.data('bb') * opt.bh)) + "px",
												 borderLeftWidth: Math.round((nc.data('bl') * opt.bw)) + "px",
												 borderRightWidth: Math.round((nc.data('br') * opt.bw)) + "px",

												 //lineHeight: Math.round((nc.data('lh') * opt.bh)) + "px",
												 whiteSpace:"nowrap",
												 minWidth:(nc.data('minwidth') * opt.bw) + "px",
												 minHeight:(nc.data('minheight') * opt.bh) + "px"
								});
								setTimeout(function() {
									nc.css("-webkit-transition", nc.data('wan'));
								    nc.css("-moz-transition", nc.data('moan'));
								    nc.css("-ms-transition", nc.data('man'));
								    nc.css("transition", nc.data('ani'));

								},30);

								//konsole.log(nc.data('maxwidth')+"  "+nc.data('maxheight'));
								if (nc.data('maxheight')!='none')
									nc.css({'maxHeight':(nc.data('maxheight') * opt.bh) + "px"});


								if (nc.data('maxwidth')!='none')
									nc.css({'maxWidth':(nc.data('maxwidth') * opt.bw) + "px"});
						}


				//////////////////////////
				//	REMOVE THE CAPTIONS //
				/////////////////////////
				function removeTheCaptions(actli,opt) {


						actli.find('.tp-caption').each(function(i) {
							var nextcaption=jQuery(this); //actli.find('.tp-caption:eq('+i+')');

							if (nextcaption.find('iframe').length>0) {
															// VIMEO VIDEO PAUSE
															try {
																var ifr = nextcaption.find('iframe');
																var id = ifr.attr('id');
																var froogaloop = $f(id);
																froogaloop.api("pause");
																clearTimeout(nextcaption.data('timerplay'));
															} catch(e) {}
															//YOU TUBE PAUSE
															try {
																var player=nextcaption.data('player');
																player.stopVideo();
																clearTimeout(nextcaption.data('timerplay'));
															} catch(e) {}
														}

							// IF HTML5 VIDEO IS EMBEDED
							if (nextcaption.find('video').length>0) {
											try{
												nextcaption.find('video').each(function(i) {
													var html5vid = jQuery(this).parent();
													var videoID =html5vid.attr('id');
													clearTimeout(html5vid.data('timerplay'));
													videojs(videoID).ready(function(){
														var myPlayer = this;
														myPlayer.pause();
													});
												})
											}catch(e) {}
										} // END OF VIDEO JS FUNCTIONS
							try {
									endMoveCaption(nextcaption,opt,0);
								} catch(e) {}



						});
				}

				//////////////////////////
				//	MOVE OUT THE CAPTIONS //
				/////////////////////////
				function endMoveCaption(nextcaption,opt,mdelay) {


														var mspeed=nextcaption.data('endspeed');
														if (mspeed==undefined) mspeed=nextcaption.data('speed');

														mspeed = mspeed/1000;

														var easedata=nextcaption.data('endeasing');
														if (easedata==undefined) easedata=Power1.easeInOut;



														if (nextcaption.hasClass('ltr') ||
															nextcaption.hasClass('ltl') ||
															nextcaption.hasClass('str') ||
															nextcaption.hasClass('stl') ||
															nextcaption.hasClass('ltt') ||
															nextcaption.hasClass('ltb') ||
															nextcaption.hasClass('stt') ||
															nextcaption.hasClass('stb') ||
															nextcaption.hasClass('skewtoright') ||
															nextcaption.hasClass('skewtorightshort') ||
															nextcaption.hasClass('skewtoleft') ||
															nextcaption.hasClass('skewtoleftshort'))
														{

															skwX = 0;

															if (nextcaption.hasClass('skewtoright') || nextcaption.hasClass('skewtorightshort'))
																skwX = 35

															if (nextcaption.hasClass('skewtoleft') || nextcaption.hasClass('skewtoleftshort'))
																skwX =  -35

															var xx=0;
															var yy=0;

															if (nextcaption.hasClass('ltr') || nextcaption.hasClass('skewtoright'))
																xx=opt.width+60;
															else if (nextcaption.hasClass('ltl') || nextcaption.hasClass('skewtoleft'))
																xx=0-(opt.width+60);
															else if (nextcaption.hasClass('ltt'))
																yy=0-(opt.height+60);
															else if (nextcaption.hasClass('ltb'))
																yy=opt.height+60;
															else if (nextcaption.hasClass('str') || nextcaption.hasClass('skewtorightshort')) {
																xx=50;oo=0;
															} else if (nextcaption.hasClass('stl') || nextcaption.hasClass('skewtoleftshort')) {
																xx=-50;oo=0;
															} else if (nextcaption.hasClass('stt')) {
																yy=-50;oo=0;
															} else if (nextcaption.hasClass('stb')) {
																yy=50;oo=0;
															}

															if (nextcaption.hasClass('skewtorightshort'))
																xx = xx + 220;

															if (nextcaption.hasClass('skewtoleftshort'))
																xx =  xx -220


															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{
																		  x:xx,
																		  y:yy,
																		  scale:1,
																		  rotation:0,
																		  skewX:skwX,
																		  opacity:0,
																		  delay:mdelay,
																		  z:0,
																		  overwrite:"auto",
																		  ease:easedata,
																		  onStart:function() {
						  													if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		  }
																		 }));

														}

														else

														if ( nextcaption.hasClass("randomrotateout")) {

															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{ left:Math.random()*opt.width,
																		  top:Math.random()*opt.height,
																		  scale:Math.random()*2+0.3,
																		  rotation:Math.random()*360-180,
																		  z:0,
																		  opacity:0,
																		  delay:mdelay,
																		  ease:easedata,
																		  onStart:function() {
																		    if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		  }
																	}));

														}

														else

														if (nextcaption.hasClass('fadeout')) {


	
															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,
																		{ opacity:0,
																		  delay:mdelay,
																		  ease:easedata,
																		  onStart:function() {
																		  if (nextcaption.data('anim') !=undefined)
																			  nextcaption.data('anim').pause();
																		}}));

														}

														else

														if (nextcaption.hasClass("customout")) {
															var tlop = 0,
															 	tlxx = 0, tlyy = 0, tlzz = 2,
															    tlsc = 1,tlro = 0,
															    sc=1,scX=1,scY= 1,
															    ro=0,roX=0,roY=0,roZ = 0,
																skwX=0, skwY = 0,
																opa = 0,
																trorig = "center,center",
																tper = 300;

															var customarray = nextcaption.data('customout').split(';');
															jQuery.each(customarray,function(index,param) {
															//customarray.forEach(function(param) {
																param = param.split(":")

																var w = param[0],
																	v = param[1];


																if (w=="rotationX") roX = parseInt(v,0);
																if (w=="rotationY") roY = parseInt(v,0);
																if (w=="rotationZ") roZ = parseInt(v,0);
																if (w=="scaleX")  scX = parseFloat(v);
																if (w=="scaleY")  scY = parseFloat(v);
																if (w=="opacity") opa = parseFloat(v);
																if (w=="skewX")   skwX = parseInt(v,0);
																if (w=="skewY")   skwY = parseInt(v,0);
																if (w=="x") tlxx = parseInt(v,0);
																if (w=="y") tlyy = parseInt(v,0);
																if (w=="z") tlzz = parseInt(v);
																if (w=="transformOrigin") trorig = v;
																if (w=="transformPerspective") tper=parseInt(v,0);


															})

														
												
															nextcaption.data('outanim',TweenLite.to(nextcaption,mspeed,


																				{
																				  scaleX:scX,
																				  scaleY:scY,
																				  rotationX:roX,
																				  rotationY:roY,
																				  rotationZ:roZ,
																				  x:tlxx,
																				  y:tlyy,
																				  z:tlzz,
																				  opacity:opa,
																				  delay:mdelay,
																				  ease:easedata,
																				  overwrite:"auto",
																				  onStart:function() {

																					  if (nextcaption.data('anim') !=undefined)
																						  nextcaption.data('anim').pause();
																					  TweenLite.set(nextcaption,{
																						  transformPerspective:tper,
																						  transformOrigin:trorig,
																						  overwrite:"auto"
																					  });

																		}}));
														}

														else {
															//TweenLite.to(nextcaption,{delay:mdelay,overwrite:"auto"});
															clearTimeout(nextcaption.data('reversetimer'));
															/*nextcaption.data('reversetimer',setTimeout(function() {
																nextcaption.animate({opacity:"0"});

															},mdelay*1000));*/
														nextcaption.data('reversetimer',setTimeout(function() {

																nextcaption.data('anim').reverse()
															},mdelay*1000));														
	

														}
												}

		///////////////////////////
		//	REMOVE THE LISTENERS //
		///////////////////////////
		function removeAllListeners(container,opt) {
			container.children().each(function() {
			  try{ jQuery(this).die('click'); } catch(e) {}
			  try{ jQuery(this).die('mouseenter');} catch(e) {}
			  try{ jQuery(this).die('mouseleave');} catch(e) {}
			  try{ jQuery(this).unbind('hover');} catch(e) {}
			})
			try{ container.die('click','mouseenter','mouseleave');} catch(e) {}
			clearInterval(opt.cdint);
			container=null;



		}

		///////////////////////////
		//	-	COUNTDOWN	-	//
		/////////////////////////
		function countDown(container,opt) {
			opt.cd=0;
			opt.loop=0;
			if (opt.stopAfterLoops!=undefined && opt.stopAfterLoops>-1)
					opt.looptogo=opt.stopAfterLoops;
			else
				opt.looptogo=9999999;

			if (opt.stopAtSlide!=undefined && opt.stopAtSlide>-1)
					opt.lastslidetoshow=opt.stopAtSlide;
			else
					opt.lastslidetoshow=999;

			opt.stopLoop="off";

			if (opt.looptogo==0) opt.stopLoop="on";



			if (opt.slideamount >1 && !(opt.stopAfterLoops==0 && opt.stopAtSlide==1) ) {
					var bt=container.find('.tp-bannertimer');
					if (bt.length>0) {
						bt.css({'width':'0%'});

						if (opt.videoplaying!=true)
							bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});

					}

					bt.data('opt',opt);


					opt.cdint=setInterval(function() {

						if (jQuery('body').find(container).length==0) removeAllListeners(container,opt);
						if (container.data('conthover-changed') == 1) {
							opt.conthover=	container.data('conthover');
							container.data('conthover-changed',0);
						}

						if (opt.conthover!=1 && opt.videoplaying!=true && opt.width>opt.hideSliderAtLimit) {
							opt.cd=opt.cd+100;
						}


						if (opt.fullWidth!="on")
							if (opt.width>opt.hideSliderAtLimit)
								container.parent().removeClass("tp-hide-revslider")
							else
								container.parent().addClass("tp-hide-revslider")
						// EVENT TRIGGERING IN CASE VIDEO HAS BEEN STARTED
						if (opt.videostartednow==1) {
							container.trigger('revolution.slide.onvideoplay');
							opt.videostartednow=0;
						}

						// EVENT TRIGGERING IN CASE VIDEO HAS BEEN STOPPED
						if (opt.videostoppednow==1) {
							container.trigger('revolution.slide.onvideostop');
							opt.videostoppednow=0;
						}


						if (opt.cd>=opt.delay) {
							opt.cd=0;
							// SWAP TO NEXT BANNER
							opt.act=opt.next;
							opt.next=opt.next+1;
							if (opt.next>container.find('>ul >li').length-1) {
									opt.next=0;
									opt.looptogo=opt.looptogo-1;

									if (opt.looptogo<=0) {
											opt.stopLoop="on";

									}
								}

							// STOP TIMER IF NO LOOP NO MORE NEEDED.

							if (opt.stopLoop=="on" && opt.next==opt.lastslidetoshow-1) {
									clearInterval(opt.cdint);
									container.find('.tp-bannertimer').css({'visibility':'hidden'});
									container.trigger('revolution.slide.onstop');
							}

							// SWAP THE SLIDES
							swapSlide(container,opt);


							// Clear the Timer
							if (bt.length>0) {
								bt.css({'width':'0%'});
								if (opt.videoplaying!=true)
									bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false, easing:"linear"});
							}
						}
					},100);


					container.hover(
						function() {

							if (opt.onHoverStop=="on") {
									opt.conthover=1;
								bt.stop();
								container.trigger('revolution.slide.onpause');
								var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
								nextsh.find('.defaultimg').each(function() {
									var dimg = jQuery(this);
									if (dimg.data('kenburn')!=undefined)
									   dimg.data('kenburn').pause();
								});
							}
						},
						function() {
							if (container.data('conthover')!=1) {
								container.trigger('revolution.slide.onresume');
								opt.conthover=0;
								if (opt.onHoverStop=="on" && opt.videoplaying!=true) {
									bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false, easing:"linear"});
								}
								var nextsh = container.find('>ul >li:eq('+opt.next+') .slotholder');
								nextsh.find('.defaultimg').each(function() {
									var dimg = jQuery(this);
									if (dimg.data('kenburn')!=undefined)
									   dimg.data('kenburn').play();
								});
							}
						});
			}
		}



})(jQuery);


// SOME ERROR MESSAGES IN CASE THE PLUGIN CAN NOT BE LOADED
function revslider_showDoubleJqueryError(sliderID) {
	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
		jQuery(sliderID).show().html(errorMessage);
}

;

/* jquery-zoom: (http://58745a1972c6f.t73.qifeiye.com/qfy-includes/js/jquery/jquery.elevateZoom.min.js) */
/*
 *	jQuery elevateZoom 3.0.8
 *	Demo's and documentation:
 *	www.elevateweb.co.uk/image-zoom
 *
 *	Copyright (c) 2012 Andrew Eades
 *	www.elevateweb.co.uk
 *
 *	Dual licensed under the GPL and MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 *

/*
 *	jQuery elevateZoom 3.0.3
 *	Demo's and documentation:
 *	www.elevateweb.co.uk/image-zoom
 *
 *	Copyright (c) 2012 Andrew Eades
 *	www.elevateweb.co.uk
 *
 *	Dual licensed under the GPL and MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


if ( typeof Object.create !== 'function' ) {
	Object.create = function( obj ) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function( $, window, document, undefined ) {
	var ElevateZoom = {
			init: function( options, elem ) {
				var self = this;

				self.elem = elem;
				self.$elem = $( elem );

				self.imageSrc = self.$elem.data("zoom-image") ? self.$elem.data("zoom-image") : self.$elem.attr("src");

				self.options = $.extend( {}, $.fn.elevateZoom.options, options );

				//TINT OVERRIDE SETTINGS
				if(self.options.tint) {
					self.options.lensColour = "none", //colour of the lens background
					self.options.lensOpacity =  "1" //opacity of the lens
				}
				//INNER OVERRIDE SETTINGS
				if(self.options.zoomType == "inner") {self.options.showLens = false;}


				//Remove alt on hover

				self.$elem.parent().removeAttr('title').removeAttr('alt');

				self.zoomImage = self.imageSrc;

				self.refresh( 1 );



				//Create the image swap from the gallery 
				$('#'+self.options.gallery + ' a').click( function(e) { 

					//Set a class on the currently active gallery image
					if(self.options.galleryActiveClass){
						$('#'+self.options.gallery + ' a').removeClass(self.options.galleryActiveClass);
						$(this).addClass(self.options.galleryActiveClass);
					}
					//stop any link on the a tag from working
					e.preventDefault();

					//call the swap image function            
					if($(this).data("zoom-image")){self.zoomImagePre = $(this).data("zoom-image")}
					else{self.zoomImagePre = $(this).data("image");}
					self.swaptheimage($(this).data("image"), self.zoomImagePre);
					return false;
				});

			},

			refresh: function( length ) {
				var self = this;

				setTimeout(function() {
					self.fetch(self.imageSrc);

				}, length || self.options.refresh );
			},

			fetch: function(imgsrc) {
				//get the image
				var self = this;
				var newImg = new Image();
				newImg.onload = function() {
					//set the large image dimensions - used to calculte ratio's
					self.largeWidth = newImg.width;
					self.largeHeight = newImg.height;
					//once image is loaded start the calls
					self.startZoom();
					self.currentImage = self.imageSrc;
					//let caller know image has been loaded
					self.options.onZoomedImageLoaded(self.$elem);
				}
				newImg.src = imgsrc; // this must be done AFTER setting onload

				return;

			},

			startZoom: function( ) {
				var self = this;
				//get dimensions of the non zoomed image
				self.nzWidth = self.$elem.width();
				self.nzHeight = self.$elem.height();

				//activated elements
				self.isWindowActive = false;
				self.isLensActive = false;
				self.isTintActive = false;
				self.overWindow = false;    

				//CrossFade Wrappe
				if(self.options.imageCrossfade){
					self.zoomWrap = self.$elem.wrap('<div style="height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;" class="zoomWrapper" />');        
					self.$elem.css('position', 'absolute'); 
				}

				self.zoomLock = 1;
				self.scrollingLock = false;
				self.changeBgSize = false;
				self.currentZoomLevel = self.options.zoomLevel;


				//get offset of the non zoomed image
				self.nzOffset = self.$elem.offset();
				//calculate the width ratio of the large/small image
				self.widthRatio = (self.largeWidth/self.currentZoomLevel) / self.nzWidth;
				self.heightRatio = (self.largeHeight/self.currentZoomLevel) / self.nzHeight; 


				//if window zoom        
				if(self.options.zoomType == "window") {
					self.zoomWindowStyle = "overflow: hidden;"
						+ "background-position: 0px 0px;text-align:center;"  
						+ "background-color: " + String(self.options.zoomWindowBgColour)            
						+ ";width: " + String(self.options.zoomWindowWidth) + "px;"
						+ "height: " + String(self.options.zoomWindowHeight)
						+ "px;float: left;"
						+ "background-size: "+ self.largeWidth/self.currentZoomLevel+ "px " +self.largeHeight/self.currentZoomLevel + "px;"
						+ "display: none;z-index:100;"
						+ "border: " + String(self.options.borderSize) 
						+ "px solid " + self.options.borderColour 
						+ ";background-repeat: no-repeat;"
						+ "position: absolute;";
				}    


				//if inner  zoom    
				if(self.options.zoomType == "inner") {
					//has a border been put on the image? Lets cater for this

					var borderWidth = self.$elem.css("border-left-width");

					self.zoomWindowStyle = "overflow: hidden;"
						+ "margin-left: " + String(borderWidth) + ";" 
						+ "margin-top: " + String(borderWidth) + ";"         
						+ "background-position: 0px 0px;"
						+ "width: " + String(self.nzWidth) + "px;"
						+ "height: " + String(self.nzHeight) + "px;"
						+ "px;float: left;"
						+ "display: none;"
						+ "cursor:"+(self.options.cursor)+";"
						+ "px solid " + self.options.borderColour 
						+ ";background-repeat: no-repeat;"
						+ "position: absolute;";
				}    



				//lens style for window zoom
				if(self.options.zoomType == "window") {


					// adjust images less than the window height

					if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
						lensHeight = self.nzHeight;              
					}
					else{
						lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
					}
					if(self.largeWidth < self.options.zoomWindowWidth){
						lensWidth = self.nzWidth;
					}       
					else{
						lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
					}


					self.lensStyle = "background-position: 0px 0px;width: " + String((self.options.zoomWindowWidth)/self.widthRatio) + "px;height: " + String((self.options.zoomWindowHeight)/self.heightRatio)
					+ "px;float: right;display: none;"
					+ "overflow: hidden;"
					+ "z-index: 999;"   
					+ "-webkit-transform: translateZ(0);"               
					+ "opacity:"+(self.options.lensOpacity)+";filter: alpha(opacity = "+(self.options.lensOpacity*100)+"); zoom:1;"
					+ "width:"+lensWidth+"px;"
					+ "height:"+lensHeight+"px;"
					+ "background-color:"+(self.options.lensColour)+";"					
					+ "cursor:"+(self.options.cursor)+";"
					+ "border: "+(self.options.lensBorderSize)+"px" +
					" solid "+(self.options.lensBorderColour)+";background-repeat: no-repeat;position: absolute;";
				} 


				//tint style
				self.tintStyle = "display: block;"
					+ "position: absolute;"
					+ "background-color: "+self.options.tintColour+";"	
					+ "filter:alpha(opacity=0);"		
					+ "opacity: 0;"	
					+ "width: " + self.nzWidth + "px;"
					+ "height: " + self.nzHeight + "px;"

					;

				//lens style for lens zoom with optional round for modern browsers
				self.lensRound = '';

				if(self.options.zoomType == "lens") {

					self.lensStyle = "background-position: 0px 0px;"
						+ "float: left;display: none;"
						+ "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour+";"
						+ "width:"+ String(self.options.lensSize) +"px;"
						+ "height:"+ String(self.options.lensSize)+"px;"
						+ "background-repeat: no-repeat;position: absolute;";


				}


				//does not round in all browsers
				if(self.options.lensShape == "round") {
					self.lensRound = "border-top-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
					+ "border-top-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
					+ "border-bottom-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
					+ "border-bottom-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;";

				}

				//create the div's                                                + ""
				//self.zoomContainer = $('<div/>').addClass('zoomContainer').css({"position":"relative", "height":self.nzHeight, "width":self.nzWidth});

				self.zoomContainer = $('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+self.nzOffset.left+'px;top:'+self.nzOffset.top+'px;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;"></div>');
				$('body').append(self.zoomContainer);	


				//this will add overflow hidden and contrain the lens on lens mode       
				if(self.options.containLensZoom && self.options.zoomType == "lens"){
					self.zoomContainer.css("overflow", "hidden");
				}
				if(self.options.zoomType != "inner") {
					self.zoomLens = $("<div class='zoomLens' style='" + self.lensStyle + self.lensRound +"'>&nbsp;</div>")
					.appendTo(self.zoomContainer)
					.click(function () {
						self.$elem.trigger('click');
					});


					if(self.options.tint) {
						self.tintContainer = $('<div/>').addClass('tintContainer');	
						self.zoomTint = $("<div class='zoomTint' style='"+self.tintStyle+"'></div>");


						self.zoomLens.wrap(self.tintContainer);


						self.zoomTintcss = self.zoomLens.after(self.zoomTint);	

						//if tint enabled - set an image to show over the tint

						self.zoomTintImage = $('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+self.nzWidth+'px; height: '+self.nzHeight+'px;" src="'+self.imageSrc+'">')
						.appendTo(self.zoomLens)
						.click(function () {

							self.$elem.trigger('click');
						});

					}          

				}







				//create zoom window 
				if(isNaN(self.options.zoomWindowPosition)){
					self.zoomWindow = $("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
					.appendTo('body')
					.click(function () {
						self.$elem.trigger('click');
					});
					
				}else{
					self.zoomWindow = $("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
					.appendTo(self.zoomContainer)
					.click(function () {
						self.$elem.trigger('click');
					});
				}      

				self.zoomWindowContainer = $('<div/>').addClass('zoomWindowContainer').css("width",self.options.zoomWindowWidth);
				self.zoomWindow.wrap(self.zoomWindowContainer);


				//  self.captionStyle = "text-align: left;background-color: black;color: white;font-weight: bold;padding: 10px;font-family: sans-serif;font-size: 11px";                                                                                                                                                                                                                                          
				// self.zoomCaption = $('<div class="elevatezoom-caption" style="'+self.captionStyle+'display: block; width: 280px;">INSERT ALT TAG</div>').appendTo(self.zoomWindow.parent());

				if(self.options.zoomType == "lens") {
					self.zoomLens.css({ backgroundImage: "url('" + self.imageSrc + "')" }); 
				}
				if(self.options.zoomType == "window") {
					self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" }); 
				}
				if(self.options.zoomType == "inner") {
					self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" }); 
				}
				/*-------------------END THE ZOOM WINDOW AND LENS----------------------------------*/
				//touch events
				self.$elem.bind('touchmove', function(e){    
					e.preventDefault();
					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  
					self.setPosition(touch);

				});  
				self.zoomContainer.bind('touchmove', function(e){ 
					if(self.options.zoomType == "inner") {
						self.showHideWindow("show");

					}
					e.preventDefault();
					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  
					self.setPosition(touch); 

				});  	
				self.zoomContainer.bind('touchend', function(e){ 
					self.showHideWindow("hide");
					if(self.options.showLens) {self.showHideLens("hide");}
					if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}
				});  	

				self.$elem.bind('touchend', function(e){ 
					self.showHideWindow("hide");
					if(self.options.showLens) {self.showHideLens("hide");}
					if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}
				});  	
				if(self.options.showLens) {
					self.zoomLens.bind('touchmove', function(e){ 

						e.preventDefault();
						var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];  
						self.setPosition(touch); 
					});    


					self.zoomLens.bind('touchend', function(e){ 
						self.showHideWindow("hide");
						if(self.options.showLens) {self.showHideLens("hide");}
						if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}
					});  
				}
				//Needed to work in IE
				self.$elem.bind('mousemove', function(e){   
					if(self.overWindow == false){self.setElements("show");}
					//make sure on orientation change the setposition is not fired
					if(self.lastX !== e.clientX || self.lastY !== e.clientY){
						self.setPosition(e);
						self.currentLoc = e;
					}   
					self.lastX = e.clientX;
					self.lastY = e.clientY;    

				});  	

				self.zoomContainer.bind('mousemove', function(e){ 
					if(self.overWindow == false){self.setElements("show");} 

					//make sure on orientation change the setposition is not fired 
					if(self.lastX !== e.clientX || self.lastY !== e.clientY){
						self.setPosition(e);
						self.currentLoc = e;
					}   
					self.lastX = e.clientX;
					self.lastY = e.clientY;    
				});  	
				if(self.options.zoomType != "inner") {
					self.zoomLens.bind('mousemove', function(e){      
						//make sure on orientation change the setposition is not fired
						if(self.lastX !== e.clientX || self.lastY !== e.clientY){
							self.setPosition(e);
							self.currentLoc = e;
						}   
						self.lastX = e.clientX;
						self.lastY = e.clientY;    
					});
				}
				if(self.options.tint && self.options.zoomType != "inner") {
					self.zoomTint.bind('mousemove', function(e){ 
						//make sure on orientation change the setposition is not fired
						if(self.lastX !== e.clientX || self.lastY !== e.clientY){
							self.setPosition(e);
							self.currentLoc = e;
						}   
						self.lastX = e.clientX;
						self.lastY = e.clientY;    
					});

				}
				if(self.options.zoomType == "inner") {
					self.zoomWindow.bind('mousemove', function(e) {
						//self.overWindow = true;
						//make sure on orientation change the setposition is not fired
						if(self.lastX !== e.clientX || self.lastY !== e.clientY){
							self.setPosition(e);
							self.currentLoc = e;
						}   
						self.lastX = e.clientX;
						self.lastY = e.clientY;    
					});

				}


				//  lensFadeOut: 500,  zoomTintFadeIn
				self.zoomContainer.add(self.$elem).mouseenter(function(){

					if(self.overWindow == false){self.setElements("show");} 


				}).mouseleave(function(){
					if(!self.scrollLock){
						self.setElements("hide");
            self.options.onDestroy(self.$elem);
					}
				});
				//end ove image





				if(self.options.zoomType != "inner") {
					self.zoomWindow.mouseenter(function(){
						self.overWindow = true;   
						self.setElements("hide");                  
					}).mouseleave(function(){

						self.overWindow = false;
					});
				}
				//end ove image



//				var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

				//      $(this).empty();    
				//    return false;

				//fix for initial zoom setting
				if (self.options.zoomLevel != 1){
					//	self.changeZoomLevel(self.currentZoomLevel);
				}
				//set the min zoomlevel
				if(self.options.minZoomLevel){
					self.minZoomLevel = self.options.minZoomLevel;
				}
				else{
					self.minZoomLevel = self.options.scrollZoomIncrement * 2;
				}


				if(self.options.scrollZoom){


					self.zoomContainer.add(self.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e){


//						in IE there is issue with firing of mouseleave - So check whether still scrolling
//						and on mouseleave check if scrolllock          
						self.scrollLock = true;
						clearTimeout($.data(this, 'timer'));
						$.data(this, 'timer', setTimeout(function() {
							self.scrollLock = false;
							//do something
						}, 250));

						var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail*-1


						//this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
						//   e.preventDefault();


						e.stopImmediatePropagation();
						e.stopPropagation();
						e.preventDefault();


						if(theEvent /120 > 0) {
							//scrolling up
							if(self.currentZoomLevel >= self.minZoomLevel){ 
								self.changeZoomLevel(self.currentZoomLevel-self.options.scrollZoomIncrement);        
							}

						}
						else{
							//scrolling down


							if(self.options.maxZoomLevel){
								if(self.currentZoomLevel <= self.options.maxZoomLevel){           
									self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);
								}
							}
							else{
								//andy 

								self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);
							}

						}
						return false;
					});
				}


			},
			setElements: function(type) {
				var self = this;
        if(!self.options.zoomEnabled){return false;}
				if(type=="show"){
					if(self.isWindowSet){
						if(self.options.zoomType == "inner") {self.showHideWindow("show");}
						if(self.options.zoomType == "window") {self.showHideWindow("show");}
						if(self.options.showLens) {self.showHideLens("show");}
						if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("show");
						}
					}
				}

				if(type=="hide"){
					if(self.options.zoomType == "window") {self.showHideWindow("hide");}
					if(!self.options.tint) {self.showHideWindow("hide");}
					if(self.options.showLens) {self.showHideLens("hide");}
					if(self.options.tint) {	self.showHideTint("hide");}
				}   
			},
			setPosition: function(e) {
      
				var self = this;
        
        if(!self.options.zoomEnabled){return false;}

				//recaclc offset each time in case the image moves
				//this can be caused by other on page elements
				self.nzHeight = self.$elem.height();
				self.nzWidth = self.$elem.width();
				self.nzOffset = self.$elem.offset();

				if(self.options.tint && self.options.zoomType != "inner") {
					self.zoomTint.css({ top: 0});
					self.zoomTint.css({ left: 0});
				}
				//set responsive       
				//will checking if the image needs changing before running this code work faster?
				if(self.options.responsive && !self.options.scrollZoom){
					if(self.options.showLens){ 
						if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
							lensHeight = self.nzHeight;              
						}
						else{
							lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
						}
						if(self.largeWidth < self.options.zoomWindowWidth){
							lensWidth = self.nzWidth;
						}       
						else{
							lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
						}
						self.widthRatio = self.largeWidth / self.nzWidth;
						self.heightRatio = self.largeHeight / self.nzHeight;        
						if(self.options.zoomType != "lens") {


							//possibly dont need to keep recalcalculating
							//if the lens is heigher than the image, then set lens size to image size
							if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
								lensHeight = self.nzHeight;  

							}
							else{
								lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
							}

							if(self.nzWidth < self.options.zoomWindowHeight/self.heightRatio){
								lensWidth = self.nzWidth;
							}       
							else{
								lensWidth =  String((self.options.zoomWindowWidth/self.widthRatio));
							}            

							self.zoomLens.css('width', lensWidth);    
							self.zoomLens.css('height', lensHeight); 

							if(self.options.tint){    
								self.zoomTintImage.css('width', self.nzWidth);    
								self.zoomTintImage.css('height', self.nzHeight); 
							}

						}                     
						if(self.options.zoomType == "lens") {  

							self.zoomLens.css({ width: String(self.options.lensSize) + 'px', height: String(self.options.lensSize) + 'px' })      


						}        
						//end responsive image change
					}
				}

				//container fix
				self.zoomContainer.css({ top: self.nzOffset.top});
				self.zoomContainer.css({ left: self.nzOffset.left});
				self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);
				self.mouseTop = parseInt(e.pageY - self.nzOffset.top);
				//calculate the Location of the Lens

				//calculate the bound regions - but only if zoom window
				if(self.options.zoomType == "window") {
					self.Etoppos = (self.mouseTop < (self.zoomLens.height()/2));
					self.Eboppos = (self.mouseTop > self.nzHeight - (self.zoomLens.height()/2)-(self.options.lensBorderSize*2));
					self.Eloppos = (self.mouseLeft < 0+((self.zoomLens.width()/2))); 
					self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.zoomLens.width()/2)-(self.options.lensBorderSize*2)));  
				}
				//calculate the bound regions - but only for inner zoom
				if(self.options.zoomType == "inner"){ 
					self.Etoppos = (self.mouseTop < ((self.nzHeight/2)/self.heightRatio) );
					self.Eboppos = (self.mouseTop > (self.nzHeight - ((self.nzHeight/2)/self.heightRatio)));
					self.Eloppos = (self.mouseLeft < 0+(((self.nzWidth/2)/self.widthRatio)));
					self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.nzWidth/2)/self.widthRatio-(self.options.lensBorderSize*2)));  
				}

				// if the mouse position of the slider is one of the outerbounds, then hide  window and lens
				if (self.mouseLeft < 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight ) {				          
					self.setElements("hide");
					return;
				}
				//else continue with operations
				else {


					//lens options
					if(self.options.showLens) {
						//		self.showHideLens("show");
						//set background position of lens
						self.lensLeftPos = String(Math.floor(self.mouseLeft - self.zoomLens.width() / 2));
						self.lensTopPos = String(Math.floor(self.mouseTop - self.zoomLens.height() / 2));


					}
					//adjust the background position if the mouse is in one of the outer regions 

					//Top region
					if(self.Etoppos){
						self.lensTopPos = 0;
					}
					//Left Region
					if(self.Eloppos){
						self.windowLeftPos = 0;
						self.lensLeftPos = 0;
						self.tintpos=0;
					}     
					//Set bottom and right region for window mode
					if(self.options.zoomType == "window") {
						if(self.Eboppos){
							self.lensTopPos = Math.max( (self.nzHeight)-self.zoomLens.height()-(self.options.lensBorderSize*2), 0 );
						} 
						if(self.Eroppos){
							self.lensLeftPos = (self.nzWidth-(self.zoomLens.width())-(self.options.lensBorderSize*2));
						}  
					}  
					//Set bottom and right region for inner mode
					if(self.options.zoomType == "inner") {
						if(self.Eboppos){
							self.lensTopPos = Math.max( ((self.nzHeight)-(self.options.lensBorderSize*2)), 0 );
						} 
						if(self.Eroppos){
							self.lensLeftPos = (self.nzWidth-(self.nzWidth)-(self.options.lensBorderSize*2));
						}  

					}
					//if lens zoom
					if(self.options.zoomType == "lens") {  
						self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));   
						self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));

						self.zoomLens.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });

						if(self.changeBgSize){  

							if(self.nzHeight>self.nzWidth){  
								if(self.options.zoomType == "lens"){       
									self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
								}   

								self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
							}
							else{     
								if(self.options.zoomType == "lens"){       
									self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
								}   
								self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            
							}
							self.changeBgSize = false;
						}    

						self.setWindowPostition(e);  
					}
					//if tint zoom   
					if(self.options.tint && self.options.zoomType != "inner") {
						self.setTintPosition(e);

					}
					//set the css background position 
					if(self.options.zoomType == "window") {
						self.setWindowPostition(e);   
					}
					if(self.options.zoomType == "inner") {
						self.setWindowPostition(e);   
					}
					if(self.options.showLens) {

						if(self.fullwidth && self.options.zoomType != "lens"){
							self.lensLeftPos = 0;

						}
						self.zoomLens.css({ left: self.lensLeftPos + 'px', top: self.lensTopPos + 'px' })  
					}

				} //end else



			},
			showHideWindow: function(change) {
				var self = this;              
				if(change == "show"){      
					if(!self.isWindowActive){
						if(self.options.zoomWindowFadeIn){
							self.zoomWindow.stop(true, true, false).fadeIn(self.options.zoomWindowFadeIn);
						}
						else{self.zoomWindow.show();}
						self.isWindowActive = true;
					}            
				}
				if(change == "hide"){
					if(self.isWindowActive){
						if(self.options.zoomWindowFadeOut){
							self.zoomWindow.stop(true, true).fadeOut(self.options.zoomWindowFadeOut, function () {
								if (self.loop) {
									//stop moving the zoom window when zoom window is faded out
									clearInterval(self.loop);
									self.loop = false;
								}
							});
						}
						else{self.zoomWindow.hide();}
						self.isWindowActive = false;        
					}      
				}
			},
			showHideLens: function(change) {
				var self = this;              
				if(change == "show"){      
					if(!self.isLensActive){
						if(self.options.lensFadeIn){
							self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
						}
						else{self.zoomLens.show();}
						self.isLensActive = true;
					}            
				}
				if(change == "hide"){
					if(self.isLensActive){
						if(self.options.lensFadeOut){
							self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
						}
						else{self.zoomLens.hide();}
						self.isLensActive = false;        
					}      
				}
			},
			showHideTint: function(change) {
				var self = this;              
				if(change == "show"){      
					if(!self.isTintActive){

						if(self.options.zoomTintFadeIn){
							self.zoomTint.css({opacity:self.options.tintOpacity}).animate().stop(true, true).fadeIn("slow");
						}
						else{
							self.zoomTint.css({opacity:self.options.tintOpacity}).animate();
							self.zoomTint.show();


						}
						self.isTintActive = true;
					}            
				}
				if(change == "hide"){      
					if(self.isTintActive){ 

						if(self.options.zoomTintFadeOut){
							self.zoomTint.stop(true, true).fadeOut(self.options.zoomTintFadeOut);
						}
						else{self.zoomTint.hide();}
						self.isTintActive = false;        
					}      
				}
			},
			setLensPostition: function( e ) {


			},
			setWindowPostition: function( e ) {
				//return obj.slice( 0, count );
				var self = this;

				if(!isNaN(self.options.zoomWindowPosition)){

					switch (self.options.zoomWindowPosition) { 
					case 1: //done         
						self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
						self.windowOffsetLeft =(+self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;
					case 2:
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin

							self.windowOffsetTop = ((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);
							self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						}
						else{ //negative margin

						}
						break;
					case 3: //done        
						self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize*2)); //DONE 3,9
						self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;      
					case 4: //done  
						self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
						self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;
					case 5: //done  
						self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
						self.windowOffsetLeft =(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2)); //DONE - 5,15
						break;
					case 6: 
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
							self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8

							self.windowOffsetLeft =((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);  
						}
						else{ //negative margin

						}


						break;
					case 7: //done  
						self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8
						self.windowOffsetLeft = 0; //DONE 7, 13.mp4
						break;
					case 8: //done  
						self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 9:  //done  
						self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize*2)); //DONE 3,9
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 10: 
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin

							self.windowOffsetTop = ((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);
							self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						}
						else{ //negative margin

						}
						break;
					case 11: 
						self.windowOffsetTop = (self.options.zoomWindowOffety);
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 12: //done  
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13.mp4,14,15,16
						self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
						break;
					case 13: //done  
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13.mp4,14,15,16
						self.windowOffsetLeft =(0); //DONE 7, 13.mp4
						break;
					case 14: 
						if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
							self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13.mp4,14,15,16

							self.windowOffsetLeft =((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);  
						}
						else{ //negative margin

						}

						break;
					case 15://done   
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13.mp4,14,15,16
						self.windowOffsetLeft =(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2)); //DONE - 5,15
						break;
					case 16:  //done  
						self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13.mp4,14,15,16
						self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
						break;            
					default: //done  
						self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
					self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
					} 
				} //end isNAN
				else{
					//WE CAN POSITION IN A CLASS - ASSUME THAT ANY STRING PASSED IS
					self.externalContainer = $('#'+self.options.zoomWindowPosition);
					self.externalContainerWidth = self.externalContainer.width();
					self.externalContainerHeight = self.externalContainer.height();
					self.externalContainerOffset = self.externalContainer.offset();

					self.windowOffsetTop = self.externalContainerOffset.top;//DONE - 1
					self.windowOffsetLeft =self.externalContainerOffset.left; //DONE 1, 2, 3, 4, 16

				}
				self.isWindowSet = true;
				self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffety;
				self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffetx;

				self.zoomWindow.css({ top: self.windowOffsetTop});
				self.zoomWindow.css({ left: self.windowOffsetLeft});

				if(self.options.zoomType == "inner") {
					self.zoomWindow.css({ top: 0});
					self.zoomWindow.css({ left: 0});

				}   


				self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));   
				self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
				if(self.Etoppos){self.windowTopPos = 0;}
				if(self.Eloppos){self.windowLeftPos = 0;}     
				if(self.Eboppos){self.windowTopPos = (self.largeHeight/self.currentZoomLevel-self.zoomWindow.height())*(-1);  } 
				if(self.Eroppos){self.windowLeftPos = ((self.largeWidth/self.currentZoomLevel-self.zoomWindow.width())*(-1));}    

				//stops micro movements
				if(self.fullheight){
					self.windowTopPos = 0;

				}
				if(self.fullwidth){
					self.windowLeftPos = 0;

				}
				//set the css background position 


				if(self.options.zoomType == "window" || self.options.zoomType == "inner") {

					if(self.zoomLock == 1){
						//overrides for images not zoomable
						if(self.widthRatio <= 1){

							self.windowLeftPos = 0;
						}
						if(self.heightRatio <= 1){ 
							self.windowTopPos = 0;
						}
					}
					// adjust images less than the window height

					if (self.options.zoomType == "window") {
						if (self.largeHeight < self.options.zoomWindowHeight) {

							self.windowTopPos = 0;
						}
						if (self.largeWidth < self.options.zoomWindowWidth) {
							self.windowLeftPos = 0;
						}
					}

					//set the zoomwindow background position
					if (self.options.easing){

						//     if(self.changeZoom){
						//           clearInterval(self.loop);
						//           self.changeZoom = false;
						//           self.loop = false;

						//            }
						//set the pos to 0 if not set
						if(!self.xp){self.xp = 0;}
						if(!self.yp){self.yp = 0;}  
						//if loop not already started, then run it 
						if (!self.loop){           
							self.loop = setInterval(function(){                
								//using zeno's paradox    

								self.xp += (self.windowLeftPos  - self.xp) / self.options.easingAmount; 
								self.yp += (self.windowTopPos  - self.yp) / self.options.easingAmount;
								if(self.scrollingLock){


									clearInterval(self.loop);
									self.xp = self.windowLeftPos;
									self.yp = self.windowTopPos            

									self.xp = ((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1);
									self.yp = (((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));                         

									if(self.changeBgSize){    
										if(self.nzHeight>self.nzWidth){  
											if(self.options.zoomType == "lens"){      
												self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
											}   
											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
										}
										else{   
											if(self.options.zoomType != "lens"){      
												self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
											}            
											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            

										}

										/*
             if(!self.bgxp){self.bgxp = self.largeWidth/self.newvalue;}
						if(!self.bgyp){self.bgyp = self.largeHeight/self.newvalue ;}  
                 if (!self.bgloop){   
                 	self.bgloop = setInterval(function(){   

                 self.bgxp += (self.largeWidth/self.newvalue  - self.bgxp) / self.options.easingAmount; 
								self.bgyp += (self.largeHeight/self.newvalue  - self.bgyp) / self.options.easingAmount;

           self.zoomWindow.css({ "background-size": self.bgxp + 'px ' + self.bgyp + 'px' });


                  }, 16);

                 }
										 */
										self.changeBgSize = false;
									}

									self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
									self.scrollingLock = false;
									self.loop = false;

								}
								else if (Math.round(Math.abs(self.xp - self.windowLeftPos) + Math.abs(self.yp - self.windowTopPos)) < 1) {
									//stops micro movements
									clearInterval(self.loop);
									self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
									self.loop = false;
								}
								else{
									if(self.changeBgSize){    
										if(self.nzHeight>self.nzWidth){ 
											if(self.options.zoomType == "lens"){      
												self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
											}         
											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
										}
										else{                 
											if(self.options.zoomType != "lens"){     
												self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
											}      
											self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            
										}
										self.changeBgSize = false;
									}                   

									self.zoomWindow.css({ backgroundPosition: self.xp + 'px ' + self.yp + 'px' });
								}       
							}, 16);
						}
					}   
					else{    
						if(self.changeBgSize){  
							if(self.nzHeight>self.nzWidth){  
								if(self.options.zoomType == "lens"){      
									self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
								} 

								self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
							}
							else{     
								if(self.options.zoomType == "lens"){      
									self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
								} 
								if((self.largeHeight/self.newvaluewidth) < self.options.zoomWindowHeight){ 

									self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });            
								}
								else{

									self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });   
								}

							}
							self.changeBgSize = false;
						}     

						self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });       
					}
				} 
			},
			setTintPosition: function(e){
				var self = this;
				self.nzOffset = self.$elem.offset();
				self.tintpos = String(((e.pageX - self.nzOffset.left)-(self.zoomLens.width() / 2)) * (-1)); 
				self.tintposy = String(((e.pageY - self.nzOffset.top) - self.zoomLens.height() / 2) * (-1));	
				if(self.Etoppos){
					self.tintposy = 0;
				}
				if(self.Eloppos){
					self.tintpos=0;
				}     
				if(self.Eboppos){
					self.tintposy = (self.nzHeight-self.zoomLens.height()-(self.options.lensBorderSize*2))*(-1);
				} 
				if(self.Eroppos){
					self.tintpos = ((self.nzWidth-self.zoomLens.width()-(self.options.lensBorderSize*2))*(-1));
				}    
				if(self.options.tint) {
					//stops micro movements
					if(self.fullheight){
						self.tintposy = 0;

					}
					if(self.fullwidth){ 
						self.tintpos = 0;

					}   
					self.zoomTintImage.css({'left': self.tintpos+'px'});
					self.zoomTintImage.css({'top': self.tintposy+'px'});
				}
			},

			swaptheimage: function(smallimage, largeimage){
				var self = this;
				var newImg = new Image(); 

				if(self.options.loadingIcon){
					self.spinner = $('<div style="background: url(\''+self.options.loadingIcon+'\') no-repeat center;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>');
					self.$elem.after(self.spinner);
				}

				self.options.onImageSwap(self.$elem);
				if(!self.zoomWindow || self.zoomWindow == 'undefined'){
					self.startZoom();
				}
				
				newImg.onload = function() {
					self.largeWidth = newImg.width;
					self.largeHeight = newImg.height;
					self.zoomImage = largeimage;
					self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });
					self.swapAction(smallimage, largeimage);
					return;              
				}
				
				newImg.src = largeimage; // this must be done AFTER setting onload
			},
			swapAction: function(smallimage, largeimage){


				var self = this;    

				var newImg2 = new Image(); 
				newImg2.onload = function() {
					//re-calculate values
					self.nzHeight = newImg2.height;
					self.nzWidth = newImg2.width;
					self.options.onImageSwapComplete(self.$elem);

					self.doneCallback();  
					return;      
				}          
				newImg2.src = smallimage; 

				//reset the zoomlevel to that initially set in options
				self.currentZoomLevel = self.options.zoomLevel;
				self.options.maxZoomLevel = false;

				//swaps the main image
				//self.$elem.attr("src",smallimage);
				//swaps the zoom image     
				if(self.options.zoomType == "lens") {
					self.zoomLens.css({ backgroundImage: "url('" + largeimage + "')" }); 
				}
				if(self.options.zoomType == "window") {
					self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" }); 
				}
				if(self.options.zoomType == "inner") {
					self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" }); 
				} 



				self.currentImage = largeimage;

				if(self.options.imageCrossfade){
					var oldImg = self.$elem;
					var newImg = oldImg.clone();         
					self.$elem.attr("src",smallimage)
					self.$elem.after(newImg);
					newImg.stop(true).fadeOut(self.options.imageCrossfade, function() {
						$(this).remove();         
					});

					//       				if(self.options.zoomType == "inner"){
					//remove any attributes on the cloned image so we can resize later
					self.$elem.width("auto").removeAttr("width");
					self.$elem.height("auto").removeAttr("height");
					//   }

					oldImg.fadeIn(self.options.imageCrossfade);

					if(self.options.tint && self.options.zoomType != "inner") {

						var oldImgTint = self.zoomTintImage;
						var newImgTint = oldImgTint.clone();         
						self.zoomTintImage.attr("src",largeimage)
						self.zoomTintImage.after(newImgTint);
						newImgTint.stop(true).fadeOut(self.options.imageCrossfade, function() {
							$(this).remove();         
						});



						oldImgTint.fadeIn(self.options.imageCrossfade);


						//self.zoomTintImage.attr("width",elem.data("image"));

						//resize the tint window
						self.zoomTint.css({ height: self.$elem.height()});
						self.zoomTint.css({ width: self.$elem.width()});
					}    

					self.zoomContainer.css("height", self.$elem.height());
					self.zoomContainer.css("width", self.$elem.width());

					if(self.options.zoomType == "inner"){ 
						if(!self.options.constrainType){
							self.zoomWrap.parent().css("height", self.$elem.height());
							self.zoomWrap.parent().css("width", self.$elem.width());

							self.zoomWindow.css("height", self.$elem.height());
							self.zoomWindow.css("width", self.$elem.width());
						}
					} 

					if(self.options.imageCrossfade){  
						self.zoomWrap.css("height", self.$elem.height());
						self.zoomWrap.css("width", self.$elem.width());
					} 
				}
				else{
					self.$elem.attr("src",smallimage); 
					if(self.options.tint) {
						self.zoomTintImage.attr("src",largeimage);
						//self.zoomTintImage.attr("width",elem.data("image"));
						self.zoomTintImage.attr("height",self.$elem.height());
						//self.zoomTintImage.attr('src') = elem.data("image");
						self.zoomTintImage.css({ height: self.$elem.height()}); 
						self.zoomTint.css({ height: self.$elem.height()});

					}
					self.zoomContainer.css("height", self.$elem.height());
					self.zoomContainer.css("width", self.$elem.width());

					if(self.options.imageCrossfade){  
						self.zoomWrap.css("height", self.$elem.height());
						self.zoomWrap.css("width", self.$elem.width());
					} 
				}              
				if(self.options.constrainType){     

					//This will contrain the image proportions
					if(self.options.constrainType == "height"){ 

						self.zoomContainer.css("height", self.options.constrainSize);
						self.zoomContainer.css("width", "auto");

						if(self.options.imageCrossfade){  
							self.zoomWrap.css("height", self.options.constrainSize);
							self.zoomWrap.css("width", "auto"); 
							self.constwidth = self.zoomWrap.width();


						}
						else{                  
							self.$elem.css("height", self.options.constrainSize);
							self.$elem.css("width", "auto");
							self.constwidth = self.$elem.width();
						} 

						if(self.options.zoomType == "inner"){

							self.zoomWrap.parent().css("height", self.options.constrainSize);
							self.zoomWrap.parent().css("width", self.constwidth);   
							self.zoomWindow.css("height", self.options.constrainSize);
							self.zoomWindow.css("width", self.constwidth);    
						}        
						if(self.options.tint){
							self.tintContainer.css("height", self.options.constrainSize);
							self.tintContainer.css("width", self.constwidth);
							self.zoomTint.css("height", self.options.constrainSize);
							self.zoomTint.css("width", self.constwidth);
							self.zoomTintImage.css("height", self.options.constrainSize);
							self.zoomTintImage.css("width", self.constwidth); 
						} 

					}
					if(self.options.constrainType == "width"){       
						self.zoomContainer.css("height", "auto");
						self.zoomContainer.css("width", self.options.constrainSize);

						if(self.options.imageCrossfade){
							self.zoomWrap.css("height", "auto");
							self.zoomWrap.css("width", self.options.constrainSize);
							self.constheight = self.zoomWrap.height();
						}
						else{            
							self.$elem.css("height", "auto");
							self.$elem.css("width", self.options.constrainSize); 
							self.constheight = self.$elem.height();              
						} 
						if(self.options.zoomType == "inner"){
							self.zoomWrap.parent().css("height", self.constheight);
							self.zoomWrap.parent().css("width", self.options.constrainSize);   
							self.zoomWindow.css("height", self.constheight);
							self.zoomWindow.css("width", self.options.constrainSize);    
						} 
						if(self.options.tint){
							self.tintContainer.css("height", self.constheight);
							self.tintContainer.css("width", self.options.constrainSize);
							self.zoomTint.css("height", self.constheight);
							self.zoomTint.css("width", self.options.constrainSize);
							self.zoomTintImage.css("height", self.constheight);
							self.zoomTintImage.css("width", self.options.constrainSize); 
						}   

					}        


				}

			},
			doneCallback: function(){

				var self = this;
				if(self.options.loadingIcon){
					self.spinner.hide();     
				}   

				self.nzOffset = self.$elem.offset();
				self.nzWidth = self.$elem.width();
				self.nzHeight = self.$elem.height();

				// reset the zoomlevel back to default
				self.currentZoomLevel = self.options.zoomLevel;

				//ratio of the large to small image
				self.widthRatio = self.largeWidth / self.nzWidth;
				self.heightRatio = self.largeHeight / self.nzHeight; 

				//NEED TO ADD THE LENS SIZE FOR ROUND
				// adjust images less than the window height
				if(self.options.zoomType == "window") {

					if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
						lensHeight = self.nzHeight;  

					}
					else{
						lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
					}

					if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){
						lensWidth = self.nzWidth;
					}       
					else{
						lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
					}


					if(self.zoomLens){

						self.zoomLens.css('width', lensWidth);    
						self.zoomLens.css('height', lensHeight); 


					}
				}
			},
			getCurrentImage: function(){
				var self = this;  
				return self.zoomImage; 
			}, 
			getGalleryList: function(){
				var self = this;   
				//loop through the gallery options and set them in list for fancybox
				self.gallerylist = [];
				if (self.options.gallery){ 


					$('#'+self.options.gallery + ' a').each(function() {

						var img_src = '';
						if($(this).data("zoom-image")){
							img_src = $(this).data("zoom-image");
						}
						else if($(this).data("image")){
							img_src = $(this).data("image");
						}			
						//put the current image at the start
						if(img_src == self.zoomImage){
							self.gallerylist.unshift({
								href: ''+img_src+'',
								title: $(this).find('img').attr("title")
							});	
						}
						else{
							self.gallerylist.push({
								href: ''+img_src+'',
								title: $(this).find('img').attr("title")
							});
						}


					});
				}                                                       
				//if no gallery - return current image
				else{
					self.gallerylist.push({
						href: ''+self.zoomImage+'',
						title: $(this).find('img').attr("title")
					}); 
				}
				return self.gallerylist;

			},
			changeZoomLevel: function(value){
				var self = this;   

				//flag a zoom, so can adjust the easing during setPosition     
				self.scrollingLock = true;   

				//round to two decimal places
				self.newvalue = parseFloat(value).toFixed(2);
				newvalue = parseFloat(value).toFixed(2);




				//maxwidth & Maxheight of the image
				maxheightnewvalue = self.largeHeight/((self.options.zoomWindowHeight / self.nzHeight) * self.nzHeight);     
				maxwidthtnewvalue = self.largeWidth/((self.options.zoomWindowWidth / self.nzWidth) * self.nzWidth);   	




				//calculate new heightratio
				if(self.options.zoomType != "inner")
				{
					if(maxheightnewvalue <= newvalue){
						self.heightRatio = (self.largeHeight/maxheightnewvalue) / self.nzHeight;
						self.newvalueheight = maxheightnewvalue;
						self.fullheight = true;

					}
					else{
						self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight; 
						self.newvalueheight = newvalue;
						self.fullheight = false;

					}


//					calculate new width ratio

					if(maxwidthtnewvalue <= newvalue){
						self.widthRatio = (self.largeWidth/maxwidthtnewvalue) / self.nzWidth;
						self.newvaluewidth = maxwidthtnewvalue;
						self.fullwidth = true;

					}
					else{
						self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 
						self.newvaluewidth = newvalue;
						self.fullwidth = false;

					}
					if(self.options.zoomType == "lens"){
						if(maxheightnewvalue <= newvalue){
							self.fullwidth = true;
							self.newvaluewidth = maxheightnewvalue;

						} else{
							self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 
							self.newvaluewidth = newvalue;

							self.fullwidth = false;
						}}
				}



				if(self.options.zoomType == "inner")
				{
					maxheightnewvalue = parseFloat(self.largeHeight/self.nzHeight).toFixed(2);     
					maxwidthtnewvalue = parseFloat(self.largeWidth/self.nzWidth).toFixed(2);      
					if(newvalue > maxheightnewvalue){
						newvalue = maxheightnewvalue;
					}
					if(newvalue > maxwidthtnewvalue){
						newvalue = maxwidthtnewvalue;
					}      


					if(maxheightnewvalue <= newvalue){


						self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight; 
						if(newvalue > maxheightnewvalue){
							self.newvalueheight = maxheightnewvalue;
						}else{
							self.newvalueheight = newvalue;
						}
						self.fullheight = true;


					}
					else{



						self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight; 

						if(newvalue > maxheightnewvalue){

							self.newvalueheight = maxheightnewvalue;
						}else{
							self.newvalueheight = newvalue;
						}
						self.fullheight = false;
					}




					if(maxwidthtnewvalue <= newvalue){   

						self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 
						if(newvalue > maxwidthtnewvalue){

							self.newvaluewidth = maxwidthtnewvalue;
						}else{
							self.newvaluewidth = newvalue;
						}

						self.fullwidth = true;


					}
					else{  

						self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth; 
						self.newvaluewidth = newvalue;
						self.fullwidth = false;
					}        


				} //end inner
				scrcontinue = false;

				if(self.options.zoomType == "inner"){

					if(self.nzWidth >= self.nzHeight){
						if( self.newvaluewidth <= maxwidthtnewvalue){
							scrcontinue = true;
						}
						else{

							scrcontinue = false;
							self.fullheight = true;
							self.fullwidth = true;
						}
					}
					if(self.nzHeight > self.nzWidth){     
						if( self.newvaluewidth <= maxwidthtnewvalue){
							scrcontinue = true;
						}
						else{
							scrcontinue = false;  

							self.fullheight = true;
							self.fullwidth = true;
						}
					}
				}

				if(self.options.zoomType != "inner"){
					scrcontinue = true;
				}

				if(scrcontinue){



					self.zoomLock = 0;
					self.changeZoom = true;

					//if lens height is less than image height


					if(((self.options.zoomWindowHeight)/self.heightRatio) <= self.nzHeight){


						self.currentZoomLevel = self.newvalueheight; 
						if(self.options.zoomType != "lens" && self.options.zoomType != "inner") {
							self.changeBgSize = true;

							self.zoomLens.css({height: String((self.options.zoomWindowHeight)/self.heightRatio) + 'px' }) 
						}
						if(self.options.zoomType == "lens" || self.options.zoomType == "inner") {  
							self.changeBgSize = true;  
						}	


					} 




					if((self.options.zoomWindowWidth/self.widthRatio) <= self.nzWidth){



						if(self.options.zoomType != "inner"){
							if(self.newvaluewidth > self.newvalueheight)   {
								self.currentZoomLevel = self.newvaluewidth;                 

							}
						}

						if(self.options.zoomType != "lens" && self.options.zoomType != "inner") {
							self.changeBgSize = true;

							self.zoomLens.css({width: String((self.options.zoomWindowWidth)/self.widthRatio) + 'px' })
						}
						if(self.options.zoomType == "lens" || self.options.zoomType == "inner") {  
							self.changeBgSize = true;
						}	

					}
					if(self.options.zoomType == "inner"){
						self.changeBgSize = true;  

						if(self.nzWidth > self.nzHeight){
							self.currentZoomLevel = self.newvaluewidth;
						}
						if(self.nzHeight > self.nzWidth){
							self.currentZoomLevel = self.newvaluewidth;
						}
					}

				}      //under

				//sets the boundry change, called in setWindowPos
				self.setPosition(self.currentLoc);
				//
			},
			closeAll: function(){
				if(self.zoomWindow){self.zoomWindow.hide();}
				if(self.zoomLens){self.zoomLens.hide();}
				if(self.zoomTint){self.zoomTint.hide();}
			},
			changeState: function(value){
      	var self = this;
				if(value == 'enable'){self.options.zoomEnabled = true;}
				if(value == 'disable'){self.options.zoomEnabled = false;}

			}

	};




	$.fn.elevateZoom = function( options ) {
		return this.each(function() {
			var elevate = Object.create( ElevateZoom );

			elevate.init( options, this );

			$.data( this, 'elevateZoom', elevate );

		});
	};

	$.fn.elevateZoom.options = {
			zoomActivation: "hover", // Can also be click (PLACEHOLDER FOR NEXT VERSION)
			zoomEnabled: true, //false disables zoomwindow from showing
			preloading: 1, //by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)
			zoomLevel: 1, //default zoom level of image
			scrollZoom: false, //allow zoom on mousewheel, true to activate
			scrollZoomIncrement: 0.1,  //steps of the scrollzoom
			minZoomLevel: false,
			maxZoomLevel: false,
			easing: true,
			easingAmount: 12,
			lensSize: 200,
			zoomWindowWidth: 420,
			zoomWindowHeight: 420,
			zoomWindowOffetx: 0,
			zoomWindowOffety: 0,
			zoomWindowPosition: 1,
			zoomWindowBgColour: "#fff",
			lensFadeIn: false,
			lensFadeOut: false,
			debug: false,
			zoomWindowFadeIn: true,
			zoomWindowFadeOut: true,
			zoomWindowAlwaysShow: false,
			zoomTintFadeIn: false,
			zoomTintFadeOut: false,
			borderSize: 1,
			showLens: true,
			borderColour: "#888",
			lensBorderSize: 1,
			lensBorderColour: "#ccc",
			lensShape: "square", //can be "round"
			zoomType: "window", //window is default,  also "lens" available -
			containLensZoom: false,
			lensColour: "white", //colour of the lens background
			lensOpacity: 0.4, //opacity of the lens
			lenszoom: false,
			tint: false, //enable the tinting
			tintColour: "#ccc", //default tint color, can be anything, red, #ccc, rgb(0,0,0)
			tintOpacity: 0.4, //opacity of the tint
			gallery: false,
			galleryActiveClass: "zoomGalleryActive",
			imageCrossfade: false,
			constrainType: false,  //width or height
			constrainSize: false,  //in pixels the dimensions you want to constrain on
			loadingIcon: false, //http://www.example.com/spinner.gif
			cursor:"default", // user should set to what they want the cursor as, if they have set a click function
			responsive:true,
			onComplete: $.noop,
			onDestroy: function() {},
			onZoomedImageLoaded: function() {},
			onImageSwap: $.noop,
			onImageSwapComplete: $.noop
	};

})( jQuery, window, document );


(function($) {
	$(function() {
		// Lightbox
		is_edit_model = false;
		try{
			if( parent.jQuery("#vc-inline-frame").length==1 ){
				is_edit_model = true;
			}
		}catch(e){
		}
		$(".bitcommerce-main-image .thumbnails a.zoom").click(function (event){
			var big_image = $(this).attr("data-product-src");
			if(!big_image || big_image==null){
				big_image = $(this).find("img").attr("src");
			}
			var bigger_image = $(this).attr("src-img");
			$('.bitcommerce-main-image .product_img').trigger('zoom.destroy');
			var p = $(this).closest(".bitcommerce-main-image");
			p.find(".attachment-shop_single").attr("src",big_image).attr("src-img",bigger_image).data("zoom-image",bigger_image);
			if($(window).width()>760  &&!is_edit_model){
				if($('.bitcommerce-main-image .product_img.usezoom').length>0){
					$('.bitcommerce-main-image .product_img.usezoom').each(function(){
						var type = $(this).attr("data-zoom-type");
						var image_obj = $(this).find('.attachment-shop_single');
						var big_image = $.trim(image_obj.data("zoom-image"));
						if(big_image){
							if(type=="2"){
								image_obj.elevateZoom({zoomType: "inner",cursor: "crosshair"});
							}else{
								image_obj.elevateZoom();
							}
						}
					})
				}
			}
		});
		
		if($(window).width()>760 &&!is_edit_model){
			if($('.bitcommerce-main-image .product_img.usezoom').length>0){
				$('.bitcommerce-main-image .product_img.usezoom').each(function(){
					var type = $(this).attr("data-zoom-type");
					var image_obj = $(this).find('.attachment-shop_single');
					var big_image = $.trim(image_obj.attr("src-img"));
					image_obj.attr("data-zoom-image",big_image);
					if(big_image){
						if(type=="2"){
							image_obj.elevateZoom({zoomType: "inner",cursor: "crosshair"});
						}else{
							image_obj.elevateZoom();
						}
					}
				})
			}
		}
	});
})(jQuery);

;

/* accounting: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/bitcommerce-product-addons/assets/js/accounting.min.js) */
/*!
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */
!function(a,b){function c(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function d(a){return l?l(a):"[object Array]"===m.call(a)}function e(a){return a&&"[object Object]"===m.call(a)}function f(a,b){var c;a=a||{},b=b||{};for(c in b)b.hasOwnProperty(c)&&null==a[c]&&(a[c]=b[c]);return a}function g(a,b,c){var d,e,f=[];if(!a)return f;if(k&&a.map===k)return a.map(b,c);for(d=0,e=a.length;e>d;d++)f[d]=b.call(c,a[d],d,a);return f}function h(a,b){return a=Math.round(Math.abs(a)),isNaN(a)?b:a}function i(a){var b=j.settings.currency.format;return"function"==typeof a&&(a=a()),c(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:a&&a.pos&&a.pos.match("%v")?a:c(b)?j.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:b}var j={};j.version="0.3.2",j.settings={currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}};var k=Array.prototype.map,l=Array.isArray,m=Object.prototype.toString,n=j.unformat=j.parse=function(a,b){if(d(a))return g(a,function(a){return n(a,b)});if(a=a||0,"number"==typeof a)return a;b=b||j.settings.number.decimal;var c=new RegExp("[^0-9-"+b+"]",["g"]),e=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return isNaN(e)?0:e},o=j.toFixed=function(a,b){b=h(b,j.settings.number.precision);var c=Math.pow(10,b);return(Math.round(j.unformat(a)*c)/c).toFixed(b)},p=j.formatNumber=function(a,b,c,i){if(d(a))return g(a,function(a){return p(a,b,c,i)});a=n(a);var k=f(e(b)?b:{precision:b,thousand:c,decimal:i},j.settings.number),l=h(k.precision),m=0>a?"-":"",q=parseInt(o(Math.abs(a||0),l),10)+"",r=q.length>3?q.length%3:0;return m+(r?q.substr(0,r)+k.thousand:"")+q.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+k.thousand)+(l?k.decimal+o(Math.abs(a),l).split(".")[1]:"")},q=j.formatMoney=function(a,b,c,k,l,m){if(d(a))return g(a,function(a){return q(a,b,c,k,l,m)});a=n(a);var o=f(e(b)?b:{symbol:b,precision:c,thousand:k,decimal:l,format:m},j.settings.currency),r=i(o.format),s=a>0?r.pos:0>a?r.neg:r.zero;return s.replace("%s",o.symbol).replace("%v",p(Math.abs(a),h(o.precision),o.thousand,o.decimal))};j.formatColumn=function(a,b,k,l,m,o){if(!a)return[];var q=f(e(b)?b:{symbol:b,precision:k,thousand:l,decimal:m,format:o},j.settings.currency),r=i(q.format),s=r.pos.indexOf("%s")<r.pos.indexOf("%v")?!0:!1,t=0,u=g(a,function(a,b){if(d(a))return j.formatColumn(a,q);a=n(a);var c=a>0?r.pos:0>a?r.neg:r.zero,e=c.replace("%s",q.symbol).replace("%v",p(Math.abs(a),h(q.precision),q.thousand,q.decimal));return e.length>t&&(t=e.length),e});return g(u,function(a,b){return c(a)&&a.length<t?s?a.replace(q.symbol,q.symbol+new Array(t-a.length+1).join(" ")):new Array(t-a.length+1).join(" ")+a:a})},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports.accounting=j):"function"==typeof define&&define.amd?define([],function(){return j}):(j.noConflict=function(c){return function(){return a.accounting=c,j.noConflict=b,j}}(a.accounting),a.accounting=j)}(this);;

/* bitcommerce-addons: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/bitcommerce-product-addons/assets/js/addons.js) */
jQuery( document ).ready( function($) {

	$.fn.init_addon_totals = function() {

		$(this).on( 'keyup change', '.product-addon input, .product-addon textarea', function() {

			if ( $(this).attr('maxlength') > 0 ) {

				var value = $(this).val();
				var remaining = $(this).attr('maxlength') - value.length;

				$(this).next('.chars_remaining').find('span').text( remaining );
			}

		} );
		$(this).on( 'click','.upload_ocr_image',function(){
			var p = jQuery(this).closest(".ocr_outer");
			p.find(".ocr_upload input").click();
		})
		$(this).on( 'change','.ocr_upload input',function(){
			var p = jQuery(this).closest(".ocr_outer");
			var fullPath = jQuery(this).val();
			if(!fullPath) return;
			var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
		    var filename = fullPath.substring(startIndex);
		    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
		        filename = filename.substring(1);
		    }
			var form = jQuery(this).closest("form");
			form.block({
                message: '<img src="/FeiEditor/bitSite/images/loading.gif" /><br><span style="color:#666;font-size:14px;">正在分析图片'+filename+'，请稍等...</span>',
                css: { border: '0',background: 'transparent' },
                overlayCSS:  { 
                    backgroundColor: '#000', 
                    opacity:         0.1, 
                    cursor:          'normal' 
                },
            });	
		
			//创建FormData对象
			var data = new FormData();
			$.each(jQuery(this)[0].files, function(i, file) {
			           data.append('upload_file', file);
			 });
			data.append('action', "bit_ocr");
			if(p.hasClass("ocr2")){
				data.append('flag', "2");
			}
			p.find(".ocr_upload_info").html("");
			p.find("[name='ship_address']").val("");
			p.find("[name='ship_name']").val("");
			p.find("[name='ship_phone']").val("");

			 $.ajax({
				url:'/admin/admin-ajax.php',
				type:'POST',
				data:data,
				cache: false,
				contentType: false,    
				processData: false,
				complete:function(){
					form.unblock(); 
				},
				success:function(data){
					var result = $.parseJSON(data);
					if(result){
						if(result.text){
							//p.find(".ocr_upload_info").htmlStudy("<div style='font-size:12px;color:#999;padding-top:10px;'>图片所有文字：:"+result.text+"</div>");
							p.find("[name='ship_address']").val(result.text);
						}
						/*if(result.address){
							p.find("[name='ship_address']").val(result.address);
						}
						if(result.name){
							p.find("[name='ship_name']").val(result.name);
						}
						if(result.phone){
							p.find("[name='ship_phone']").val(result.phone);
						}*/
					}else{
						p.find(".ocr_upload_info").html("<span style='font-size:12px;padding:10px 0;color:red'>返回异常，请检查上传的图片。</span>");
					}
				}
			 });
		})
	
		$(this).find(' .addon-custom, .addon-custom-textarea' ).each( function() {

			if ( $(this).attr('maxlength') > 0 ) {

				$(this).after('<small class="chars_remaining"><span>' + $(this).attr('maxlength') + '</span> ' + bitcommerce_addons_params.i18n_remaining + '</small>' );

			}

		} );

		$(this).on( 'change', '.product-addon input, .product-addon textarea, .product-addon select, input.qty', function() {

			$(this).trigger( 'bitcommerce-product-addons-update' );
		} );

		$(this).on( 'found_variation', function( event, variation ) {

			var $variation_form = $(this);
			var $totals         = $variation_form.find( '#product-addons-total' );

			if ( typeof( variation.display_price ) !== 'undefined' ) {

				$totals.data( 'price', variation.display_price );

			} else if ( $( variation.price_html ).find('.amount:last').size() ) {

				product_price = $( variation.price_html ).find('.amount:last').text();
				product_price = product_price.replace( bitcommerce_addons_params.currency_format_symbol, '' );
				product_price = product_price.replace( bitcommerce_addons_params.currency_format_thousand_sep, '' );
				product_price = product_price.replace( bitcommerce_addons_params.currency_format_decimal_sep, '.' );
				product_price = product_price.replace(/[^0-9\.]/g, '');
				product_price = parseFloat( product_price );

				$totals.data( 'price', product_price );
			}

			$variation_form.trigger( 'bitcommerce-product-addons-update' );
		} );

		$(this).on( 'bitcommerce-product-addons-update', function(e) {

			var total         = 0;
			var total_independent = 0;
			var $cart         = $(this);
			var $totals       = $cart.find( '#product-addons-total' );
			var product_price = $totals.data( 'price' );
			var product_type  = $totals.data( 'type' );

			// Move totals
			if ( product_type == 'variable' || product_type == 'variable-subscription' || product_type == 'qfbook' ) {
				$cart.find('.single_variation').after( $totals );
			}
			$cart.find( '.addon' ).each( function() {
				var addon_cost = 0;

				if ( $(this).is('.addon-custom-price') ) {
					addon_cost = $(this).val();
				} else if ( $(this).is('.addon-input_multiplier') ) {
					if( isNaN( $(this).val() ) || $(this).val() == "" ) { // Number inputs return blank when invalid
						$(this).val('');
						$(this).closest('p').find('.addon-alert').show();
					} else {
						if( $(this).val() != "" ){
							$(this).val( Math.ceil( $(this).val() ) );
						}
						$(this).closest('p').find('.addon-alert').hide();
					}
					addon_cost = $(this).data('price') * $(this).val();
				} else if ( $(this).is('.addon-checkbox, .addon-radio') ) {
					if ( $(this).is(':checked') )
						addon_cost = $(this).data('price');
				} else if ( $(this).is('.addon-select') ) {
					if ( $(this).val() )
						addon_cost = $(this).find('option:selected').data('price');
				} else {
					if ( $(this).val() )
						addon_cost = $(this).data('price');
				}

				if ( ! addon_cost )
					addon_cost = 0;
				if( $(this).closest('.independent-product-addon').length>0){
					total_independent =  parseFloat( total_independent ) + parseFloat( addon_cost );
				}else{
					total = parseFloat( total ) + parseFloat( addon_cost );
				}
				
				
			} );

			if ( $cart.find('input.qty').size() ) {
				var qty = parseFloat( $cart.find('input.qty').val() );
			} else {
				var qty = 1;
			}

			if ( (total || total_independent)&& qty > 0 ) {

				total = parseFloat( total * qty ) +  parseFloat( total_independent );

				var formatted_addon_total = accounting.formatMoney( total, {
					symbol 		: bitcommerce_addons_params.currency_format_symbol,
					decimal 	: bitcommerce_addons_params.currency_format_decimal_sep,
					thousand	: bitcommerce_addons_params.currency_format_thousand_sep,
					precision 	: bitcommerce_addons_params.currency_format_num_decimals,
					format		: bitcommerce_addons_params.currency_format
				} );

				if ( product_price ) {

					product_total_price = parseFloat( product_price * qty );

					var formatted_grand_total = accounting.formatMoney( product_total_price + total, {
						symbol 		: bitcommerce_addons_params.currency_format_symbol,
						decimal 	: bitcommerce_addons_params.currency_format_decimal_sep,
						thousand	: bitcommerce_addons_params.currency_format_thousand_sep,
						precision 	: bitcommerce_addons_params.currency_format_num_decimals,
						format		: bitcommerce_addons_params.currency_format
					} );

				}

				var subscription_details = false;

				if ( $('.single_variation_wrap .subscription-details').length ) {
					subscription_details = $('.single_variation_wrap .subscription-details').clone().wrap('<p>').parent().html();
				} else if ( $('.product-type-subscription .subscription-details').length ) {
					subscription_details = $('.product-type-subscription .subscription-details').clone().wrap('<p>').parent().html();
				}

				if ( subscription_details ) {
					formatted_addon_total += subscription_details;
					if ( formatted_grand_total ) {
						formatted_grand_total += subscription_details;
					}
				}

				html = '<dl class="product-addon-totals"><dt>' + bitcommerce_addons_params.i18n_addon_total + '</dt><dd><strong><span class="amount">' + formatted_addon_total + '</span></strong></dd>';

				if ( formatted_grand_total && '1' == $totals.data( 'show-grand-total' ) ) {
					html = html + '<dt>' + bitcommerce_addons_params.i18n_grand_total + '</dt><dd><strong><span class="amount">' + formatted_grand_total + '</span></strong></dd>';
				}

				html = html + '</dl>';

				$totals.html( html );

			} else {
				$totals.empty();
			}

			$( 'body' ).trigger( 'updated_addons' );

		} );

		$(this).find( '.addon-custom, .addon-custom-textarea, .product-addon input, .product-addon textarea, .product-addon select, input.qty' ).change();

		// When default variation exists, 'found_variation' must be triggered
		$(this).find( '.variations select' ).change();
	}

	// Quick view
	$( 'body' ).on( 'quick-view-displayed', function() {
		$(this).find( '.cart:not(.cart_group)' ).each( function() {
			$(this).init_addon_totals();
		} );
	} );

	// Composites
	$( 'body .component' ).on( 'wc-composite-component-loaded', function() {
		$(this).find( '.cart' ).each( function() {
			$(this).init_addon_totals();
		} );
	} );

	// Initialize
	if($( 'body' ).find( '.cart .group_outnner').length==0 ){
		$( 'body' ).find( '.cart:not(.cart_group)' ).each( function() {
			$(this).init_addon_totals();
		} );
	}else{
		$( 'body' ).find( '.cart .group_outnner' ).each( function() {
			$(this).init_addon_totals();
		} );
	
	}

} );
;

/* iphorm-jquery-ui-core: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/qfy_form/js/jqueryui/jquery.ui.core.min.js) */
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.24",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;

/* iphorm-jquery-ui-datepicker: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/qfy_form/js/jqueryui/jquery.ui.datepicker.min.js) */
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.24"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])})},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.24",window["DP_jQuery_"+dpuuid]=$})(jQuery);;

/* jquery-timepicker: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/simple-fields/js/jquery-ui-timepicker-addon.js) */
/*
 * jQuery timepicker addon
 * By: Trent Richardson [http://trentrichardson.com]
 * Version 1.1.0
 * Last Modified: 11/03/2012
 *
 * Copyright 2012 Trent Richardson
 * You may use this project under MIT or GPL licenses.
 * http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 */

/*jslint evil: true, white: false, undef: false, nomen: false */

(function($) {

	/*
	* Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
	*/
	$.ui.timepicker = $.ui.timepicker || {};
	if ($.ui.timepicker.version) {
		return;
	}

	/*
	* Extend jQueryUI, get it started with our version number
	*/
	$.extend($.ui, {
		timepicker: {
			version: "1.1.0"
		}
	});

	/* 
	* Timepicker manager.
	* Use the singleton instance of this class, $.timepicker, to interact with the time picker.
	* Settings for (groups of) time pickers are maintained in an instance object,
	* allowing multiple different settings on the same page.
	*/
	function Timepicker() {
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[''] = { // Default regional settings
			currentText: 'Now',
			closeText: 'Done',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			timeFormat: 'HH:mm',
			timeSuffix: '',
			timeOnlyTitle: 'Choose Time',
			timeText: 'Time',
			hourText: 'Hour',
			minuteText: 'Minute',
			secondText: 'Second',
			millisecText: 'Millisecond',
			timezoneText: 'Time Zone',
			isRTL: false
		};
		this._defaults = { // Global defaults for all the datetime picker instances
			showButtonPanel: true,
			timeOnly: false,
			showHour: true,
			showMinute: true,
			showSecond: false,
			showMillisec: false,
			showTimezone: false,
			showTime: true,
			stepHour: 1,
			stepMinute: 1,
			stepSecond: 1,
			stepMillisec: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			timezone: null,
			useLocalTimezone: false,
			defaultTimezone: "+0000",
			hourMin: 0,
			minuteMin: 0,
			secondMin: 0,
			millisecMin: 0,
			hourMax: 23,
			minuteMax: 59,
			secondMax: 59,
			millisecMax: 999,
			minDateTime: null,
			maxDateTime: null,
			onSelect: null,
			hourGrid: 0,
			minuteGrid: 0,
			secondGrid: 0,
			millisecGrid: 0,
			alwaysSetTime: true,
			separator: ' ',
			altFieldTimeOnly: true,
			altTimeFormat: null,
			altSeparator: null,
			altTimeSuffix: null,
			pickerTimeFormat: null,
			pickerTimeSuffix: null,
			showTimepicker: true,
			timezoneIso8601: false,
			timezoneList: null,
			addSliderAccess: false,
			sliderAccessArgs: null,
			controlType: 'slider',
			defaultValue: null,
			parse: 'strict'
		};
		$.extend(this._defaults, this.regional['']);
	}

	$.extend(Timepicker.prototype, {
		$input: null,
		$altInput: null,
		$timeObj: null,
		inst: null,
		hour_slider: null,
		minute_slider: null,
		second_slider: null,
		millisec_slider: null,
		timezone_select: null,
		hour: 0,
		minute: 0,
		second: 0,
		millisec: 0,
		timezone: null,
		defaultTimezone: "+0000",
		hourMinOriginal: null,
		minuteMinOriginal: null,
		secondMinOriginal: null,
		millisecMinOriginal: null,
		hourMaxOriginal: null,
		minuteMaxOriginal: null,
		secondMaxOriginal: null,
		millisecMaxOriginal: null,
		ampm: '',
		formattedDate: '',
		formattedTime: '',
		formattedDateTime: '',
		timezoneList: null,
		units: ['hour','minute','second','millisec'],
		control: null,

		/* 
		* Override the default settings for all instances of the time picker.
		* @param  settings  object - the new settings to use as defaults (anonymous object)
		* @return the manager object
		*/
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/*
		* Create a new Timepicker instance
		*/
		_newInst: function($input, o) {
			var tp_inst = new Timepicker(),
				inlineSettings = {},
                fns = {},
		        overrides, i;

			for (var attrName in this._defaults) {
				if(this._defaults.hasOwnProperty(attrName)){
					var attrValue = $input.attr('time:' + attrName);
					if (attrValue) {
						try {
							inlineSettings[attrName] = eval(attrValue);
						} catch (err) {
							inlineSettings[attrName] = attrValue;
						}
					}
				}
			}
		    overrides = {
		        beforeShow: function (input, dp_inst) {
		            if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
		                return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
		            }
		        },
		        onChangeMonthYear: function (year, month, dp_inst) {
		            // Update the time as well : this prevents the time from disappearing from the $input field.
		            tp_inst._updateDateTime(dp_inst);
		            if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
		                tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
		            }
		        },
		        onClose: function (dateText, dp_inst) {
		            if (tp_inst.timeDefined === true && $input.val() !== '') {
		                tp_inst._updateDateTime(dp_inst);
		            }
		            if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
		                tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
		            }
		        }
		    };
		    for (i in overrides) {
		        if (overrides.hasOwnProperty(i)) {
		            fns[i] = o[i] || null;
		        }
		    }
		    tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, overrides, {
		        evnts:fns,
		        timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
		    });
			tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) {
				return val.toUpperCase();
			});
			tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) {
				return val.toUpperCase();
			});

			// controlType is string - key to our this._controls
			if(typeof(tp_inst._defaults.controlType) === 'string'){
				if($.fn[tp_inst._defaults.controlType] === undefined){
					tp_inst._defaults.controlType = 'select';
				}
				tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
			}
			// controlType is an object and must implement create, options, value methods
			else{ 
				tp_inst.control = tp_inst._defaults.controlType;
			}

			if (tp_inst._defaults.timezoneList === null) {
				var timezoneList = ['-1200', '-1100', '-1000', '-0930', '-0900', '-0800', '-0700', '-0600', '-0500', '-0430', '-0400', '-0330', '-0300', '-0200', '-0100', '+0000', 
									'+0100', '+0200', '+0300', '+0330', '+0400', '+0430', '+0500', '+0530', '+0545', '+0600', '+0630', '+0700', '+0800', '+0845', '+0900', '+0930', 
									'+1000', '+1030', '+1100', '+1130', '+1200', '+1245', '+1300', '+1400'];

				if (tp_inst._defaults.timezoneIso8601) {
					timezoneList = $.map(timezoneList, function(val) {
						return val == '+0000' ? 'Z' : (val.substring(0, 3) + ':' + val.substring(3));
					});
				}
				tp_inst._defaults.timezoneList = timezoneList;
			}

			tp_inst.timezone = tp_inst._defaults.timezone;
			tp_inst.hour = tp_inst._defaults.hour;
			tp_inst.minute = tp_inst._defaults.minute;
			tp_inst.second = tp_inst._defaults.second;
			tp_inst.millisec = tp_inst._defaults.millisec;
			tp_inst.ampm = '';
			tp_inst.$input = $input;

			if (o.altField) {
				tp_inst.$altInput = $(o.altField).css({
					cursor: 'pointer'
				}).focus(function() {
					$input.trigger("focus");
				});
			}

			if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
				tp_inst._defaults.minDate = new Date();
			}
			if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
				tp_inst._defaults.maxDate = new Date();
			}

			// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
			if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
				tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
			}
			if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
				tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
			}
			if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
				tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
			}
			if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
				tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
			}
			tp_inst.$input.bind('focus', function() {
				tp_inst._onFocus();
			});

			return tp_inst;
		},

		/*
		* add our sliders to the calendar
		*/
		_addTimePicker: function(dp_inst) {
			var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

			this.timeDefined = this._parseTime(currDT);
			this._limitMinMaxDateTime(dp_inst, false);
			this._injectTimePicker();
		},

		/*
		* parse the time string from input value or _setTime
		*/
		_parseTime: function(timeString, withDate) {
			if (!this.inst) {
				this.inst = $.datepicker._getInst(this.$input[0]);
			}

			if (withDate || !this._defaults.timeOnly) {
				var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
				try {
					var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
					if (!parseRes.timeObj) {
						return false;
					}
					$.extend(this, parseRes.timeObj);
				} catch (err) {
					$.datepicker.log("Error parsing the date/time string: " + err +
									"\ndate/time string = " + timeString +
									"\ntimeFormat = " + this._defaults.timeFormat +
									"\ndateFormat = " + dp_dateFormat);
					return false;
				}
				return true;
			} else {
				var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
				if (!timeObj) {
					return false;
				}
				$.extend(this, timeObj);
				return true;
			}
		},

		/*
		* generate and inject htmlStudy for timepicker into ui datepicker
		*/
		_injectTimePicker: function() {
			var $dp = this.inst.dpDiv,
				o = this.inst.settings,
				tp_inst = this,
				litem = '',
				uitem = '',
				max = {},
				gridSize = {},
				size = null;

			// Prevent displaying twice
			if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
				var noDisplay = ' style="display:none;"',
					html = '<div class="ui-timepicker-div'+ (o.isRTL? ' ui-timepicker-rtl' : '') +'"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' + 
								'<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

				// Create the markup
				for(var i=0,l=this.units.length; i<l; i++){
					litem = this.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);
					// Added by Peter Medeiros:
					// - Figure out what the hour/minute/second max should be based on the step values.
					// - Example: if stepMinute is 15, then minMax is 45.
					max[litem] = parseInt((o[litem+'Max'] - ((o[litem+'Max'] - o[litem+'Min']) % o['step'+uitem])), 10);
					gridSize[litem] = 0;

					html += '<dt class="ui_tpicker_'+ litem +'_label"' + ((o['show'+uitem]) ? '' : noDisplay) + '>' + o[litem +'Text'] + '</dt>' + 
								'<dd class="ui_tpicker_'+ litem +'"><div class="ui_tpicker_'+ litem +'_slider"' + ((o['show'+uitem]) ? '' : noDisplay) + '></div>';

					if (o['show'+uitem] && o[litem+'Grid'] > 0) {
						html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

						if(litem == 'hour'){
							for (var h = o[litem+'Min']; h <= max[litem]; h += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								var tmph = $.datepicker.formatTime(useAmpm(o.pickerTimeFormat || o.timeFormat)? 'hht':'HH', {hour:h}, o);									
								html += '<td data-for="'+litem+'">' + tmph + '</td>';
							}
						}
						else{
							for (var m = o[litem+'Min']; m <= max[litem]; m += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								html += '<td data-for="'+litem+'">' + ((m < 10) ? '0' : '') + m + '</td>';
							}
						}

						html += '</tr></table></div>';
					}
					html += '</dd>';
				}
				
				// Timezone
				html += '<dt class="ui_tpicker_timezone_label"' + ((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
				html += '<dd class="ui_tpicker_timezone" ' + ((o.showTimezone) ? '' : noDisplay) + '></dd>';

				// Create the elements from string
				html += '</dl></div>';
				var $tp = $(html);

				// if we only want time picker...
				if (o.timeOnly === true) {
					$tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
					$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
				}
				
				// add sliders, adjust grids, add events
				for(var i=0,l=tp_inst.units.length; i<l; i++){
					litem = tp_inst.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);
					
					// add the slider
					tp_inst[litem+'_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_'+litem+'_slider'), litem, tp_inst[litem], o[litem+'Min'], max[litem], o['step'+uitem]);

					// adjust the grid and add click event
					if (o['show'+uitem] && o[litem+'Grid'] > 0) {
						size = 100 * gridSize[litem] * o[litem+'Grid'] / (max[litem] - o[litem+'Min']);
						$tp.find('.ui_tpicker_'+litem+' table').css({
							width: size + "%",
							marginLeft: o.isRTL? '0' : ((size / (-2 * gridSize[litem])) + "%"),
							marginRight: o.isRTL? ((size / (-2 * gridSize[litem])) + "%") : '0',
							borderCollapse: 'collapse'
						}).find("td").click(function(e){
								var $t = $(this),
									h = $t.html(),
									n = parseInt(h.replace(/[^0-9]/g),10),
									ap = h.replace(/[^apm]/ig),
									f = $t.data('for'); // loses scope, so we use data-for

								if(f == 'hour'){
									if(ap.indexOf('p') !== -1 && n < 12){
										n += 12;
									}
									else{
										if(ap.indexOf('a') !== -1 && n === 12){
											n = 0;
										}
									}
								}
								
								tp_inst.control.value(tp_inst, tp_inst[f+'_slider'], litem, n);

								tp_inst._onTimeChange();
								tp_inst._onSelectHandler();
							})
						.css({
								cursor: 'pointer',
								width: (100 / gridSize[litem]) + '%',
								textAlign: 'center',
								overflow: 'hidden'
							});
					} // end if grid > 0
				} // end for loop

				// Add timezone options
				this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
				$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
					return $("<option />").val(typeof val == "object" ? val.value : val).text(typeof val == "object" ? val.label : val);
				}));
				if (typeof(this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
					var local_date = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
					var local_timezone = $.timepicker.timeZoneOffsetString(local_date);
					if (local_timezone == this.timezone) {
						selectLocalTimeZone(tp_inst);
					} else {
						this.timezone_select.val(this.timezone);
					}
				} else {
					if (typeof(this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
						this.timezone_select.val(o.defaultTimezone);
					} else {
						selectLocalTimeZone(tp_inst);
					}
				}
				this.timezone_select.change(function() {
					tp_inst._defaults.useLocalTimezone = false;
					tp_inst._onTimeChange();
				});
				// End timezone options
				
				// inject timepicker into datepicker
				var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
				if ($buttonPanel.length) {
					$buttonPanel.before($tp);
				} else {
					$dp.append($tp);
				}

				this.$timeObj = $tp.find('.ui_tpicker_time');

				if (this.inst !== null) {
					var timeDefined = this.timeDefined;
					this._onTimeChange();
					this.timeDefined = timeDefined;
				}

				// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
				if (this._defaults.addSliderAccess) {
					var sliderAccessArgs = this._defaults.sliderAccessArgs,
						rtl = this._defaults.isRTL;
					sliderAccessArgs.isRTL = rtl;
						
					setTimeout(function() { // fix for inline mode
						if ($tp.find('.ui-slider-access').length === 0) {
							$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

							// fix any grids since sliders are shorter
							var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
							if (sliderAccessWidth) {
								$tp.find('table:visible').each(function() {
									var $g = $(this),
										oldWidth = $g.outerWidth(),
										oldMarginLeft = $g.css(rtl? 'marginRight':'marginLeft').toString().replace('%', ''),
										newWidth = oldWidth - sliderAccessWidth,
										newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
										css = { width: newWidth, marginRight: 0, marginLeft: 0 };
									css[rtl? 'marginRight':'marginLeft'] = newMarginLeft;
									$g.css(css);
								});
							}
						}
					}, 10);
				}
				// end slideAccess integration

			}
		},

		/*
		* This function tries to limit the ability to go outside the
		* min/max date range
		*/
		_limitMinMaxDateTime: function(dp_inst, adjustSliders) {
			var o = this._defaults,
				dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

			if (!this._defaults.showTimepicker) {
				return;
			} // No time so nothing to check here

			if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
				var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
					minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null) {
					this.hourMinOriginal = o.hourMin;
					this.minuteMinOriginal = o.minuteMin;
					this.secondMinOriginal = o.secondMin;
					this.millisecMinOriginal = o.millisecMin;
				}

				if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMin = minDateTime.getHours();
					if (this.hour <= this._defaults.hourMin) {
						this.hour = this._defaults.hourMin;
						this._defaults.minuteMin = minDateTime.getMinutes();
						if (this.minute <= this._defaults.minuteMin) {
							this.minute = this._defaults.minuteMin;
							this._defaults.secondMin = minDateTime.getSeconds();
							if (this.second <= this._defaults.secondMin) {
								this.second = this._defaults.secondMin;
								this._defaults.millisecMin = minDateTime.getMilliseconds();
							} else {
								if (this.millisec < this._defaults.millisecMin) {
									this.millisec = this._defaults.millisecMin;
								}
								this._defaults.millisecMin = this.millisecMinOriginal;
							}
						} else {
							this._defaults.secondMin = this.secondMinOriginal;
							this._defaults.millisecMin = this.millisecMinOriginal;
						}
					} else {
						this._defaults.minuteMin = this.minuteMinOriginal;
						this._defaults.secondMin = this.secondMinOriginal;
						this._defaults.millisecMin = this.millisecMinOriginal;
					}
				} else {
					this._defaults.hourMin = this.hourMinOriginal;
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
				}
			}

			if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
				var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
					maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null) {
					this.hourMaxOriginal = o.hourMax;
					this.minuteMaxOriginal = o.minuteMax;
					this.secondMaxOriginal = o.secondMax;
					this.millisecMaxOriginal = o.millisecMax;
				}

				if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMax = maxDateTime.getHours();
					if (this.hour >= this._defaults.hourMax) {
						this.hour = this._defaults.hourMax;
						this._defaults.minuteMax = maxDateTime.getMinutes();
						if (this.minute >= this._defaults.minuteMax) {
							this.minute = this._defaults.minuteMax;
							this._defaults.secondMax = maxDateTime.getSeconds();
						} else if (this.second >= this._defaults.secondMax) {
							this.second = this._defaults.secondMax;
							this._defaults.millisecMax = maxDateTime.getMilliseconds();
						} else {
							if (this.millisec > this._defaults.millisecMax) {
								this.millisec = this._defaults.millisecMax;
							}
							this._defaults.millisecMax = this.millisecMaxOriginal;
						}
					} else {
						this._defaults.minuteMax = this.minuteMaxOriginal;
						this._defaults.secondMax = this.secondMaxOriginal;
						this._defaults.millisecMax = this.millisecMaxOriginal;
					}
				} else {
					this._defaults.hourMax = this.hourMaxOriginal;
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
				}
			}

			if (adjustSliders !== undefined && adjustSliders === true) {
				var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
					minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
					secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
					millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);

				if (this.hour_slider) {
					this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax });
					this.control.value(this, this.hour_slider, 'hour', this.hour);
				}
				if (this.minute_slider) {
					this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax });
					this.control.value(this, this.minute_slider, 'minute', this.minute);
				}
				if (this.second_slider) {
					this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax });
					this.control.value(this, this.second_slider, 'second', this.second);
				}
				if (this.millisec_slider) {
					this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax });
					this.control.value(this, this.millisec_slider, 'millisec', this.millisec);
				}
			}

		},

		/*
		* when a slider moves, set the internal time...
		* on time change is also called when the time is updated in the text field
		*/
		_onTimeChange: function() {
			var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
				minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
				second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
				millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
				timezone = (this.timezone_select) ? this.timezone_select.val() : false,
				o = this._defaults,
				pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
				pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

			if (typeof(hour) == 'object') {
				hour = false;
			}
			if (typeof(minute) == 'object') {
				minute = false;
			}
			if (typeof(second) == 'object') {
				second = false;
			}
			if (typeof(millisec) == 'object') {
				millisec = false;
			}
			if (typeof(timezone) == 'object') {
				timezone = false;
			}

			if (hour !== false) {
				hour = parseInt(hour, 10);
			}
			if (minute !== false) {
				minute = parseInt(minute, 10);
			}
			if (second !== false) {
				second = parseInt(second, 10);
			}
			if (millisec !== false) {
				millisec = parseInt(millisec, 10);
			}

			var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

			// If the update was done in the input field, the input field should not be updated.
			// If the update was done using the sliders, update the input field.
			var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || millisec != this.millisec 
								|| (this.ampm.length > 0 && (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) 
								|| ((this.timezone === null && timezone != this.defaultTimezone) || (this.timezone !== null && timezone != this.timezone)));

			if (hasChanged) {

				if (hour !== false) {
					this.hour = hour;
				}
				if (minute !== false) {
					this.minute = minute;
				}
				if (second !== false) {
					this.second = second;
				}
				if (millisec !== false) {
					this.millisec = millisec;
				}
				if (timezone !== false) {
					this.timezone = timezone;
				}

				if (!this.inst) {
					this.inst = $.datepicker._getInst(this.$input[0]);
				}

				this._limitMinMaxDateTime(this.inst, true);
			}
			if (useAmpm(o.timeFormat)) {
				this.ampm = ampm;
			}

			// Updates the time within the timepicker
			this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
			if (this.$timeObj) {
				if(pickerTimeFormat === o.timeFormat){
					this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
				}
				else{
					this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
				}
			}

			this.timeDefined = true;
			if (hasChanged) {
				this._updateDateTime();
			}
		},

		/*
		* call custom onSelect.
		* bind to sliders slidestop, and grid click.
		*/
		_onSelectHandler: function() {
			var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
			var inputEl = this.$input ? this.$input[0] : null;
			if (onSelect && inputEl) {
				onSelect.apply(inputEl, [this.formattedDateTime, this]);
			}
		},

		/*
		* update our input with the new date time..
		*/
		_updateDateTime: function(dp_inst) {
			dp_inst = this.inst || dp_inst;
			var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
				formatCfg = $.datepicker._getFormatConfig(dp_inst),
				timeAvailable = dt !== null && this.timeDefined;
			this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
			var formattedDateTime = this.formattedDate;

			/*
			* remove following lines to force every changes in date picker to change the input value
			* Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
			* If the user manually empty the value in the input field, the date picker will never change selected value.
			*/
			//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
			//	return;
			//}

			if (this._defaults.timeOnly === true) {
				formattedDateTime = this.formattedTime;
			} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
				formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
			}

			this.formattedDateTime = formattedDateTime;

			if (!this._defaults.showTimepicker) {
				this.$input.val(this.formattedDate);
			} else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
				this.$altInput.val(this.formattedTime);
				this.$input.val(this.formattedDate);
				//this.$input.val(this.formattedDateTime);
			} else if (this.$altInput) {
				this.$input.val(formattedDateTime);
				var altFormattedDateTime = '',
					altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
					altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;

				if (this._defaults.altFormat) altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
				else altFormattedDateTime = this.formattedDate;
				if (altFormattedDateTime) altFormattedDateTime += altSeparator;
				if (this._defaults.altTimeFormat) altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
				else altFormattedDateTime += this.formattedTime + altTimeSuffix;
				this.$altInput.val(altFormattedDateTime);
			} else {
				this.$input.val(formattedDateTime);
			}

			this.$input.trigger("change");
		},

		_onFocus: function() {
			if (!this.$input.val() && this._defaults.defaultValue) {
				this.$input.val(this._defaults.defaultValue);
				var inst = $.datepicker._getInst(this.$input.get(0)),
					tp_inst = $.datepicker._get(inst, 'timepicker');
				if (tp_inst) {
					if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
						try {
							$.datepicker._updateDatepicker(inst);
						} catch (err) {
							$.datepicker.log(err);
						}
					}
				}
			}
		},

		/*
		* Small abstraction to control types
		* We can add more, just be sure to follow the pattern: create, options, value
		*/
		_controls: {
			// slider methods
			slider: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
					return obj.prop('slide', null).slider({
						orientation: "horizontal",
						value: rtl? val*-1 : val,
						min: rtl? max*-1 : min,
						max: rtl? min*-1 : max,
						step: step,
						slide: function(event, ui) {
							tp_inst.control.value(tp_inst, $(this), unit, rtl? ui.value*-1:ui.value);
							tp_inst._onTimeChange();
						},
						stop: function(event, ui) {
							tp_inst._onSelectHandler();
						}
					});	
				},
				options: function(tp_inst, obj, unit, opts, val){
					if(tp_inst._defaults.isRTL){
						if(typeof(opts) == 'string'){
							if(opts == 'min' || opts == 'max'){
								if(val !== undefined)
									return obj.slider(opts, val*-1);
								return Math.abs(obj.slider(opts));
							}
							return obj.slider(opts);
						}
						var min = opts.min, 
							max = opts.max;
						opts.min = opts.max = null;
						if(min !== undefined)
							opts.max = min * -1;
						if(max !== undefined)
							opts.min = max * -1;
						return obj.slider(opts);
					}
					if(typeof(opts) == 'string' && val !== undefined)
							return obj.slider(opts, val);
					return obj.slider(opts);
				},
				value: function(tp_inst, obj, unit, val){
					if(tp_inst._defaults.isRTL){
						if(val !== undefined)
							return obj.slider('value', val*-1);
						return Math.abs(obj.slider('value'));
					}
					if(val !== undefined)
						return obj.slider('value', val);
					return obj.slider('value');
				}
			},
			// select methods
			select: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var sel = '<select class="ui-timepicker-select" data-unit="'+ unit +'" data-min="'+ min +'" data-max="'+ max +'" data-step="'+ step +'">',
						ul = tp_inst._defaults.timeFormat.indexOf('t') !== -1? 'toLowerCase':'toUpperCase',
						m = 0;

					for(var i=min; i<=max; i+=step){						
						sel += '<option value="'+ i +'"'+ (i==val? ' selected':'') +'>';
						if(unit == 'hour' && useAmpm(tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat))
							sel += $.datepicker.formatTime("hh TT", {hour:i}, tp_inst._defaults);
						else if(unit == 'millisec' || i >= 10) sel += i;
						else sel += '0'+ i.toString();
						sel += '</option>';
					}
					sel += '</select>';

					obj.children('select').remove();

					$(sel).appendTo(obj).change(function(e){
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					});

					return obj;
				},
				options: function(tp_inst, obj, unit, opts, val){
					var o = {},
						$t = obj.children('select');
					if(typeof(opts) == 'string'){
						if(val === undefined)
							return $t.data(opts);
						o[opts] = val;	
					}
					else o = opts;
					return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
				},
				value: function(tp_inst, obj, unit, val){
					var $t = obj.children('select');
					if(val !== undefined)
						return $t.val(val);
					return $t.val();
				}
			}
		} // end _controls

	});

	$.fn.extend({
		/*
		* shorthand just to use timepicker..
		*/
		timepicker: function(o) {
			o = o || {};
			var tmp_args = Array.prototype.slice.call(arguments);

			if (typeof o == 'object') {
				tmp_args[0] = $.extend(o, {
					timeOnly: true
				});
			}

			return $(this).each(function() {
				$.fn.datetimepicker.apply($(this), tmp_args);
			});
		},

		/*
		* extend timepicker to datepicker
		*/
		datetimepicker: function(o) {
			o = o || {};
			var tmp_args = arguments;

			if (typeof(o) == 'string') {
				if (o == 'getDate') {
					return $.fn.datepicker.apply($(this[0]), tmp_args);
				} else {
					return this.each(function() {
						var $t = $(this);
						$t.datepicker.apply($t, tmp_args);
					});
				}
			} else {
				return this.each(function() {
					var $t = $(this);
					$t.datepicker($.timepicker._newInst($t, o)._defaults);
				});
			}
		}
	});

	/*
	* Public Utility to parse date and time
	*/
	$.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
		if (parseRes.timeObj) {
			var t = parseRes.timeObj;
			parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
		}

		return parseRes.date;
	};

	/*
	* Public utility to parse time
	*/
	$.datepicker.parseTime = function(timeFormat, timeString, options) {		
		var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});

		// Strict parse requires the timeString to match the timeFormat exactly
		var strictParse = function(f, s, o){

			// pattern for standard and localized AM/PM markers
			var getPatternAmpm = function(amNames, pmNames) {
				var markers = [];
				if (amNames) {
					$.merge(markers, amNames);
				}
				if (pmNames) {
					$.merge(markers, pmNames);
				}
				markers = $.map(markers, function(val) {
					return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
				});
				return '(' + markers.join('|') + ')?';
			};

			// figure out position of time elements.. cause js cant do named captures
			var getFormatPositions = function(timeFormat) {
				var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z|'.*?')/g),
					orders = {
						h: -1,
						m: -1,
						s: -1,
						l: -1,
						t: -1,
						z: -1
					};

				if (finds) {
					for (var i = 0; i < finds.length; i++) {
						if (orders[finds[i].toString().charAt(0)] == -1) {
							orders[finds[i].toString().charAt(0)] = i + 1;
						}
					}
				}
				return orders;
			};

			var regstr = '^' + f.toString()
					.replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[lz]|'.*?')/g, function (match) {
							switch (match.charAt(0).toLowerCase()) {
								case 'h': return '(\\d?\\d)';
								case 'm': return '(\\d?\\d)';
								case 's': return '(\\d?\\d)';
								case 'l': return '(\\d?\\d?\\d)';
								case 'z': return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
								case 't': return getPatternAmpm(o.amNames, o.pmNames);
								default:    // literal escaped in quotes
									return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
							}
						})
					.replace(/\s/g, '\\s?') +
					o.timeSuffix + '$',
				order = getFormatPositions(f),
				ampm = '',
				treg;

			treg = s.match(new RegExp(regstr, 'i'));

			var resTime = {
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0
			};

			if (treg) {
				if (order.t !== -1) {
					if (treg[order.t] === undefined || treg[order.t].length === 0) {
						ampm = '';
						resTime.ampm = '';
					} else {
						ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
						resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
					}
				}

				if (order.h !== -1) {
					if (ampm == 'AM' && treg[order.h] == '12') {
						resTime.hour = 0; // 12am = 0 hour
					} else {
						if (ampm == 'PM' && treg[order.h] != '12') {
							resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
						} else {
							resTime.hour = Number(treg[order.h]);
						}
					}
				}

				if (order.m !== -1) {
					resTime.minute = Number(treg[order.m]);
				}
				if (order.s !== -1) {
					resTime.second = Number(treg[order.s]);
				}
				if (order.l !== -1) {
					resTime.millisec = Number(treg[order.l]);
				}
				if (order.z !== -1 && treg[order.z] !== undefined) {
					var tz = treg[order.z].toUpperCase();
					switch (tz.length) {
					case 1:
						// Z
						tz = o.timezoneIso8601 ? 'Z' : '+0000';
						break;
					case 5:
						// +hhmm
						if (o.timezoneIso8601) {
							tz = tz.substring(1) == '0000' ? 'Z' : tz.substring(0, 3) + ':' + tz.substring(3);
						}
						break;
					case 6:
						// +hh:mm
						if (!o.timezoneIso8601) {
							tz = tz == 'Z' || tz.substring(1) == '00:00' ? '+0000' : tz.replace(/:/, '');
						} else {
							if (tz.substring(1) == '00:00') {
								tz = 'Z';
							}
						}
						break;
					}
					resTime.timezone = tz;
				}


				return resTime;
			}
			return false;
		};// end strictParse

		// First try JS Date, if that fails, use strictParse
		var looseParse = function(f,s,o){
			try{
				var d = new Date('2012-01-01 '+ s);
				return {
					hour: d.getHours(),
					minutes: d.getMinutes(),
					seconds: d.getSeconds(),
					millisec: d.getMilliseconds(),
					timezone: $.timepicker.timeZoneOffsetString(d)
				};
			}
			catch(err){
				try{
					return strictParse(f,s,o);
				}
				catch(err2){
					$.datepicker.log("Unable to parse \ntimeString: "+ s +"\ntimeFormat: "+ f);
				}				
			}
			return false;
		}; // end looseParse
		
		if(typeof o.parse === "function"){
			return o.parse(timeFormat, timeString, o)
		}
		if(o.parse === 'loose'){
			return looseParse(timeFormat, timeString, o);
		}
		return strictParse(timeFormat, timeString, o);
	};

	/*
	* Public utility to format the time
	* format = string format of the time
	* time = a {}, not a Date() for timezones
	* options = essentially the regional[].. amNames, pmNames, ampm
	*/
	$.datepicker.formatTime = function(format, time, options) {
		options = options || {};
		options = $.extend({}, $.timepicker._defaults, options);
		time = $.extend({
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			timezone: '+0000'
		}, time);

		var tmptime = format,
			ampmName = options.amNames[0],
			hour = parseInt(time.hour, 10);

		if (hour > 11) {
			ampmName = options.pmNames[0];
		}

		tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[lz]|('.*?'|".*?"))/g, function(match) {
		switch (match) {
			case 'HH':
				return ('0' + hour).slice(-2);
			case 'H':
				return hour;
			case 'hh':
				return convert24to12(hour).slice(-2);
			case 'h':
				return convert24to12(hour);
			case 'mm':
				return ('0' + time.minute).slice(-2);
			case 'm':
				return time.minute;
			case 'ss':
				return ('0' + time.second).slice(-2);
			case 's':
				return time.second;
			case 'l':
				return ('00' + time.millisec).slice(-3);
			case 'z':
				return time.timezone === null? options.defaultTimezone : time.timezone;
			case 'T': 
				return ampmName.charAt(0).toUpperCase();
			case 'TT': 
				return ampmName.toUpperCase();
			case 't':
				return ampmName.charAt(0).toLowerCase();
			case 'tt':
				return ampmName.toLowerCase();
			default:
				return match.replace(/\'/g, "") || "'";
			}
		});

		tmptime = $.trim(tmptime);
		return tmptime;
	};

	/*
	* the bad hack :/ override datepicker so it doesnt close on select
	// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
	*/
	$.datepicker._base_selectDate = $.datepicker._selectDate;
	$.datepicker._selectDate = function(id, dateStr) {
		var inst = this._getInst($(id)[0]),
			tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			tp_inst._limitMinMaxDateTime(inst, true);
			inst.inline = inst.stay_open = true;
			//This way the onSelect handler called from calendarpicker get the full dateTime
			this._base_selectDate(id, dateStr);
			inst.inline = inst.stay_open = false;
			this._notifyChange(inst);
			this._updateDatepicker(inst);
		} else {
			this._base_selectDate(id, dateStr);
		}
	};

	/*
	* second bad hack :/ override datepicker so it triggers an event when changing the input field
	* and does not redraw the datepicker on every selectDate event
	*/
	$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
	$.datepicker._updateDatepicker = function(inst) {

		// don't popup the datepicker if there is another instance already opened
		var input = inst.input[0];
		if ($.datepicker._curInst && $.datepicker._curInst != inst && $.datepicker._datepickerShowing && $.datepicker._lastInput != input) {
			return;
		}

		if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

			this._base_updateDatepicker(inst);

			// Reload the time control when changing something in the input text field.
			var tp_inst = this._get(inst, 'timepicker');
			if (tp_inst) {
				tp_inst._addTimePicker(inst);

				if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
					var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
					selectLocalTimeZone(tp_inst, date);
					tp_inst._onTimeChange();
				}
			}
		}
	};

	/*
	* third bad hack :/ override datepicker so it allows spaces and colon in the input field
	*/
	$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
	$.datepicker._doKeyPress = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if ($.datepicker._get(inst, 'constrainInput')) {
				var ampm = useAmpm(tp_inst._defaults.timeFormat),
					dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
					datetimeChars = tp_inst._defaults.timeFormat.toString()
											.replace(/[hms]/g, '')
											.replace(/TT/g, ampm ? 'APM' : '')
											.replace(/Tt/g, ampm ? 'AaPpMm' : '')
											.replace(/tT/g, ampm ? 'AaPpMm' : '')
											.replace(/T/g, ampm ? 'AP' : '')
											.replace(/tt/g, ampm ? 'apm' : '')
											.replace(/t/g, ampm ? 'ap' : '') + 
											" " + tp_inst._defaults.separator + 
											tp_inst._defaults.timeSuffix + 
											(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') + 
											(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
											dateChars,
					chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
			}
		}

		return $.datepicker._base_doKeyPress(event);
	};

	/*
	* Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
	*/
	$.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
	/* Update any alternate field to synchronise with the main field. */
	$.datepicker._updateAlternate = function(inst) {
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst){
			var altField = tp_inst._defaults.altField;
			if (altField) { // update alternate field too
				var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
					date = this._getDate(inst),
					formatCfg = $.datepicker._getFormatConfig(inst),
					altFormattedDateTime = '', 
					altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
					altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
					altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
				
				altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
				if(!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly){
					if(tp_inst._defaults.altFormat)
						altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, (date === null ? new Date() : date), formatCfg) + altSeparator + altFormattedDateTime;
					else altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
				}
				$(altField).val(altFormattedDateTime);
			}
		}
		else{
			$.datepicker._base_updateAlternate(inst);
		}
	};

	/*
	* Override key up event to sync manual input changes.
	*/
	$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
	$.datepicker._doKeyUp = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
				try {
					$.datepicker._updateDatepicker(inst);
				} catch (err) {
					$.datepicker.log(err);
				}
			}
		}

		return $.datepicker._base_doKeyUp(event);
	};

	/*
	* override "Today" button to also grab the time.
	*/
	$.datepicker._base_gotoToday = $.datepicker._gotoToday;
	$.datepicker._gotoToday = function(id) {
		var inst = this._getInst($(id)[0]),
			$dp = inst.dpDiv;
		this._base_gotoToday(id);
		var tp_inst = this._get(inst, 'timepicker');
		selectLocalTimeZone(tp_inst);
		var now = new Date();
		this._setTime(inst, now);
		$('.ui-datepicker-today', $dp).click();
	};

	/*
	* Disable & enable the Time in the datetimepicker
	*/
	$.datepicker._disableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = false;
			tp_inst._updateDateTime(inst);
		}
	};

	$.datepicker._enableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = true;
			tp_inst._addTimePicker(inst); // Could be disabled on page load
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create our own set time function
	*/
	$.datepicker._setTime = function(inst, date) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var defaults = tp_inst._defaults;

			// calling _setTime with no date sets time to defaults
			tp_inst.hour = date ? date.getHours() : defaults.hour;
			tp_inst.minute = date ? date.getMinutes() : defaults.minute;
			tp_inst.second = date ? date.getSeconds() : defaults.second;
			tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;

			//check if within min/max times.. 
			tp_inst._limitMinMaxDateTime(inst, true);

			tp_inst._onTimeChange();
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create new public method to set only time, callable as $().datepicker('setTime', date)
	*/
	$.datepicker._setTimeDatepicker = function(target, date, withDate) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			this._setDateFromField(inst);
			var tp_date;
			if (date) {
				if (typeof date == "string") {
					tp_inst._parseTime(date, withDate);
					tp_date = new Date();
					tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
				} else {
					tp_date = new Date(date.getTime());
				}
				if (tp_date.toString() == 'Invalid Date') {
					tp_date = undefined;
				}
				this._setTime(inst, tp_date);
			}
		}

	};

	/*
	* override setDate() to allow setting time too within Date object
	*/
	$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
	$.datepicker._setDateDatepicker = function(target, date) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

		this._updateDatepicker(inst);
		this._base_setDateDatepicker.apply(this, arguments);
		this._setTimeDatepicker(target, tp_date, true);
	};

	/*
	* override getDate() to allow getting time too within Date object
	*/
	$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
	$.datepicker._getDateDatepicker = function(target, noDefault) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			// if it hasn't yet been defined, grab from field
			if(inst.lastVal === undefined){
				this._setDateFromField(inst, noDefault);
			}

			var date = this._getDate(inst);
			if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
				date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
			}
			return date;
		}
		return this._base_getDateDatepicker(target, noDefault);
	};

	/*
	* override parseDate() because UI 1.8.14 throws an error about "Extra characters"
	* An option in datapicker to ignore extra format characters would be nicer.
	*/
	$.datepicker._base_parseDate = $.datepicker.parseDate;
	$.datepicker.parseDate = function(format, value, settings) {
		var date;
		try {
			date = this._base_parseDate(format, value, settings);
		} catch (err) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
			date = this._base_parseDate(format, value.substring(0,value.length-(err.length-err.indexOf(':')-2)), settings);
			$.datepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
		}
		return date;
	};

	/*
	* override formatDate to set date with time to the input
	*/
	$.datepicker._base_formatDate = $.datepicker._formatDate;
	$.datepicker._formatDate = function(inst, day, month, year) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			tp_inst._updateDateTime(inst);
			return tp_inst.$input.val();
		}
		return this._base_formatDate(inst);
	};

	/*
	* override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
	*/
	$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
	$.datepicker._optionDatepicker = function(target, name, value) {
		var inst = this._getInst(target),
	        name_clone;
		if (!inst) {
			return null;
		}

		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var min = null,
				max = null,
				onselect = null,
				overrides = tp_inst._defaults.evnts,
				fns = {},
				prop;
		    if (typeof name == 'string') { // if min/max was set with the string
		        if (name === 'minDate' || name === 'minDateTime') {
		            min = value;
		        } else if (name === 'maxDate' || name === 'maxDateTime') {
		            max = value;
		        } else if (name === 'onSelect') {
		            onselect = value;
		        } else if (overrides.hasOwnProperty(name)) {
		            if (typeof (value) === 'undefined') {
		                return overrides[name];
		            }
		            fns[name] = value;
		            name_clone = {}; //empty results in exiting function after overrides updated
		        }
		    } else if (typeof name == 'object') { //if min/max was set with the JSON
		        if (name.minDate) {
		            min = name.minDate;
		        } else if (name.minDateTime) {
		            min = name.minDateTime;
		        } else if (name.maxDate) {
		            max = name.maxDate;
		        } else if (name.maxDateTime) {
		            max = name.maxDateTime;
		        }
		        for (prop in overrides) {
		            if (overrides.hasOwnProperty(prop) && name[prop]) {
		                fns[prop] = name[prop];
		            }
		        }
		    }
		    for (prop in fns) {
		        if (fns.hasOwnProperty(prop)) {
		            overrides[prop] = fns[prop];
		            if (!name_clone) { name_clone = $.extend({}, name);}
		            delete name_clone[prop];
		        }
		    }
		    if (name_clone && isEmptyObject(name_clone)) { return; }
		    if (min) { //if min was set
		        if (min === 0) {
		            min = new Date();
		        } else {
		            min = new Date(min);
		        }
		        tp_inst._defaults.minDate = min;
		        tp_inst._defaults.minDateTime = min;
		    } else if (max) { //if max was set
		        if (max === 0) {
		            max = new Date();
		        } else {
		            max = new Date(max);
		        }
		        tp_inst._defaults.maxDate = max;
		        tp_inst._defaults.maxDateTime = max;
		    } else if (onselect) {
		        tp_inst._defaults.onSelect = onselect;
		    }
		}
		if (value === undefined) {
			return this._base_optionDatepicker.call($.datepicker, target, name);
		}
		return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
	};
	/*
	* jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
	* it will return false for all objects
	*/
	var isEmptyObject = function(obj) {
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(obj)) {
				return false;
			}
		}
		return true;
	};

	/*
	* jQuery extend now ignores nulls!
	*/
	var extendRemove = function(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] === null || props[name] === undefined) {
				target[name] = props[name];
			}
		}
		return target;
	};

	/*
	* Determine by the time format if should use ampm
	* Returns true if should use ampm, false if not
	*/
	var useAmpm = function(timeFormat){
		return (timeFormat.indexOf('t') !== -1 && timeFormat.indexOf('h') !== -1);
	};

	/*
	* Converts 24 hour format into 12 hour
	* Returns 12 hour with leading 0
	*/
	var convert24to12 = function(hour) {
		if (hour > 12) {
			hour = hour - 12;
		}

		if (hour == 0) {
			hour = 12;
		}

		if (hour < 10) {
			hour = "0" + hour;
		}

		return String(hour);
	};

	/*
	* Splits datetime string into date ans time substrings.
	* Throws exception when date can't be parsed
	* Returns [dateString, timeString]
	*/
	var splitDateTime = function(dateFormat, dateTimeString, dateSettings, timeSettings) {
		try {
			// The idea is to get the number separator occurances in datetime and the time format requested (since time has 
			// fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
			var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator,
				format = timeSettings && timeSettings.timeFormat ? timeSettings.timeFormat : $.timepicker._defaults.timeFormat,
				timeParts = format.split(separator), // how many occurances of separator may be in our format?
				timePartsLen = timeParts.length,
				allParts = dateTimeString.split(separator),
				allPartsLen = allParts.length;

			if (allPartsLen > 1) {
				return [
						allParts.splice(0,allPartsLen-timePartsLen).join(separator),
						allParts.splice(0,timePartsLen).join(separator)
					];
			}

		} catch (err) {
			$.datepicker.log('Could not split the date from the time. Please check the following datetimepicker options' +
					"\nthrown error: " + err +
					"\ndateTimeString" + dateTimeString +
					"\ndateFormat = " + dateFormat +
					"\nseparator = " + timeSettings.separator +
					"\ntimeFormat = " + timeSettings.timeFormat);

			if (err.indexOf(":") >= 0) {
				// Hack!  The error message ends with a colon, a space, and
				// the "extra" characters.  We rely on that instead of
				// attempting to perfectly reproduce the parsing algorithm.
				var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2),
					timeString = dateTimeString.substring(dateStringLength);

				return [$.trim(dateTimeString.substring(0, dateStringLength)), $.trim(dateTimeString.substring(dateStringLength))];

			} else {
				throw err;
			}
		}
		return [dateTimeString, ''];
	};

	/*
	* Internal function to parse datetime interval
	* Returns: {date: Date, timeObj: Object}, where
	*   date - parsed date without time (type Date)
	*   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
	*/
	var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var date;
		var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings, timeSettings);
		date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
		if (splitRes[1] !== '') {
			var timeString = splitRes[1],
				parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);

			if (parsedTime === null) {
				throw 'Wrong time format';
			}
			return {
				date: date,
				timeObj: parsedTime
			};
		} else {
			return {
				date: date
			};
		}
	};

	/*
	* Internal function to set timezone_select to the local timezone
	*/
	var selectLocalTimeZone = function(tp_inst, date) {
		if (tp_inst && tp_inst.timezone_select) {
			tp_inst._defaults.useLocalTimezone = true;
			var now = typeof date !== 'undefined' ? date : new Date();
			var tzoffset = $.timepicker.timeZoneOffsetString(now);
			if (tp_inst._defaults.timezoneIso8601) {
				tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
			}
			tp_inst.timezone_select.val(tzoffset);
		}
	};

	/*
	* Create a Singleton Insance
	*/
	$.timepicker = new Timepicker();

	/**
	 * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
	 * @param  date
	 * @return string
	 */
	$.timepicker.timeZoneOffsetString = function(date) {
		var off = date.getTimezoneOffset() * -1,
			minutes = off % 60,
			hours = (off - minutes) / 60;
		return (off >= 0 ? '+' : '-') + ('0' + (hours * 101).toString()).substr(-2) + ('0' + (minutes * 101).toString()).substr(-2);
	};

	/**
	 * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * n.b. The input value must be correctly formatted (reformatting is not supported)
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the timepicker() call
	 * @return jQuery
	 */
	$.timepicker.timeRange = function(startTime, endTime, options) {
		return $.timepicker.handleRange('timepicker', startTime, endTime, options);
	};

	/**
	 * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.dateTimeRange = function(startTime, endTime, options) {
		$.timepicker.dateRange(startTime, endTime, options, 'datetimepicker');
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.dateRange = function(startTime, endTime, options, method) {
		method = method || 'datepicker';
		$.timepicker.handleRange(method, startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return jQuery
	 */
	$.timepicker.handleRange = function(method, startTime, endTime, options) {
		$.fn[method].call(startTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, endTime, dateText);
			},
			onSelect: function(selectedDateTime) {
				selected(this, endTime, 'minDate');
			}
		}, options, options.start));
		$.fn[method].call(endTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, startTime, dateText);
			},
			onSelect: function(selectedDateTime) {
				selected(this, startTime, 'maxDate');
			}
		}, options, options.end));
		// timepicker doesn't provide access to its 'timeFormat' option, 
		// nor could I get datepicker.formatTime() to behave with times, so I
		// have disabled reformatting for timepicker
		if (method != 'timepicker' && options.reformat) {
			$([startTime, endTime]).each(function() {
				var format = $(this)[method].call($(this), 'option', 'dateFormat'),
					date = new Date($(this).val());
				if ($(this).val() && date) {
					$(this).val($.datepicker.formatDate(format, date));
				}
			});
		}
		checkDates(startTime, endTime, startTime.val());

		function checkDates(changed, other, dateText) {
			if (other.val() && (new Date(startTime.val()) > new Date(endTime.val()))) {
				other.val(dateText);
			}
		}
		selected(startTime, endTime, 'minDate');
		selected(endTime, startTime, 'maxDate');

		function selected(changed, other, option) {
			if (!$(changed).val()) {
				return;
			}
			var date = $(changed)[method].call($(changed), 'getDate');
			// timepicker doesn't implement 'getDate' and returns a jQuery
			if (date.getTime) {
				$(other)[method].call($(other), 'option', option, date);
			}
		}
		return $([startTime.get(0), endTime.get(0)]);
	};

	/*
	* Keep up with the version
	*/
	$.timepicker.version = "1.1.0";

})(jQuery);
;

/* isotope: (http://58745a1972c6f.t73.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/isotope/jquery.isotope.min.js) */
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;

