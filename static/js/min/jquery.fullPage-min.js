/*!
 * fullPage 2.7.3
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function($){return n($,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function($,e,n,o,t){"use strict";var i="fullpage-wrapper",a="."+i,s="fp-scrollable",l="."+s,r=".slimScrollBar",c=".slimScrollRail",f="fp-responsive",d="fp-notransition",u="fp-destroyed",h="fp-enabled",p="fp-viewing",v="active",m="."+v,g=".section",S="fp-section",w="."+S,y=w+m,x=w+":first",b=w+":last",T="fp-tableCell",C="."+T,k="fp-auto-height",A=".fp-auto-height",E="fp-nav",L="#"+E,M="fp-tooltip",B="fp-show-active",R=".slide",F="fp-slide",q="."+F,z=q+m,D="fp-slides",P="."+D,I="fp-slidesContainer",H="."+I,O="fp-table",V="fp-slidesNav",Y="."+V,U=Y+" a",W="fp-controlArrow",X="."+W,N="fp-prev",K="."+N,j=W+" "+N,Q=X+K,_="fp-next",G="."+_,J=W+" "+_,Z=X+G,ee=$(e),ne=$(n);$.fn.fullpage=function(A){function W(){A.css3&&(A.css3=ln()),A.anchors.length||(A.anchors=$("[data-anchor]").map(function(){return $(this).data("anchor").toString()}).get()),K(),Cn.setAllowScrolling(!0),Mn=ee.height(),Cn.setAutoScrolling(A.autoScrolling,"internal");var e=$(y).find(z);e.length&&(0!==$(y).index(w)||0===$(y).index(w)&&0!==e.index())&&pn(e),Pe(),sn(),ee.on("load",function(){Me()})}function K(){Ln.css({height:"100%",position:"relative"}),Ln.addClass(i),$("html").addClass(h),Ln.removeClass(u),te(),$(w).each(function(e){var n=$(this),o=n.find(q),t=o.length;G(n,e),oe(n,e),t>0?_(n,o,t):A.verticalCentered&&Qe(n)}),A.fixedElements&&A.css3&&$(A.fixedElements).appendTo(Tn),A.navigation&&ae(),A.scrollOverflow?("complete"===n.readyState&&se(),ee.on("load",se)):le()}function _(e,n,o){var t=100*o,i=100/o;n.wrapAll('<div class="'+I+'" />'),n.parent().wrap('<div class="'+D+'" />'),e.find(H).css("width",t+"%"),o>1&&(A.controlArrows&&ie(e),A.slidesNavigation&&nn(e,o)),n.each(function(e){$(this).css("width",i+"%"),A.verticalCentered&&Qe($(this))});var a=e.find(z);a.length&&(0!==$(y).index(w)||0===$(y).index(w)&&0!==a.index())?pn(a):n.eq(0).addClass(v)}function G(e,n){n||0!==$(y).length||e.addClass(v),e.css("height",Mn+"px"),A.paddingTop&&e.css("padding-top",A.paddingTop),A.paddingBottom&&e.css("padding-bottom",A.paddingBottom),"undefined"!=typeof A.sectionsColor[n]&&e.css("background-color",A.sectionsColor[n]),"undefined"!=typeof A.anchors[n]&&e.attr("data-anchor",A.anchors[n])}function oe(e,n){"undefined"!=typeof A.anchors[n]&&e.hasClass(v)&&Ue(A.anchors[n],n),A.menu&&A.css3&&$(A.menu).closest(a).length&&$(A.menu).appendTo(Tn)}function te(){$(A.sectionSelector).each(function(){$(this).addClass(S)}),$(A.slideSelector).each(function(){$(this).addClass(F)})}function ie(e){e.find(P).after('<div class="'+j+'"></div><div class="'+J+'"></div>'),"#fff"!=A.controlArrowColor&&(e.find(Z).css("border-color","transparent transparent transparent "+A.controlArrowColor),e.find(Q).css("border-color","transparent "+A.controlArrowColor+" transparent transparent")),A.loopHorizontal||e.find(Q).hide()}function ae(){Tn.append('<div id="'+E+'"><ul></ul></div>');var e=$(L);e.addClass(function(){return A.showActiveTooltip?B+" "+A.navigationPosition:A.navigationPosition});for(var n=0;n<$(w).length;n++){var o="";A.anchors.length&&(o=A.anchors[n]);var t='<li><a href="#'+o+'"><span></span></a>',i=A.navigationTooltips[n];"undefined"!=typeof i&&""!==i&&(t+='<div class="'+M+" "+A.navigationPosition+'">'+i+"</div>"),t+="</li>",e.find("ul").append(t)}$(L).css("margin-top","-"+$(L).height()/2+"px"),$(L).find("li").eq($(y).index(w)).find("a").addClass(v)}function se(){$(w).each(function(){var e=$(this).find(q);e.length?e.each(function(){Ke($(this))}):Ke($(this))}),le()}function le(){var e=$(y);re(e),Ae(e),Ee(e),$.isFunction(A.afterLoad)&&A.afterLoad.call(e,e.data("anchor"),e.index(w)+1),$.isFunction(A.afterRender)&&A.afterRender.call(Ln)}function re(e){var n=e.find("SLIDES_WRAPPER"),o=e.find(l);n.length&&(o=n.find(z)),o.mouseover()}function ce(){var e;if(!A.autoScrolling||A.scrollBar){for(var t=ee.scrollTop(),i=0,a=o.abs(t-n.querySelectorAll(w)[0].offsetTop),s=n.querySelectorAll(w),l=0;l<s.length;++l){var r=s[l],c=o.abs(t-r.offsetTop);a>c&&(i=l,a=c)}if(e=$(s).eq(i),!e.hasClass(v)&&!e.hasClass(k)){Kn=!0;var f=$(y),d=f.index(w)+1,u=Xe(e),h=e.data("anchor"),p=e.index(w)+1,m=e.find(z);if(m.length)var g=m.data("anchor"),S=m.index();zn&&(e.addClass(v).siblings().removeClass(v),$.isFunction(A.onLeave)&&A.onLeave.call(f,d,p,u),$.isFunction(A.afterLoad)&&A.afterLoad.call(e,h,p),Ae(e),Ue(h,p-1),A.anchors.length&&(Fn=h,on(S,g,h,p))),clearTimeout(Wn),Wn=setTimeout(function(){Kn=!1},100)}A.fitToSection&&(clearTimeout(Xn),Xn=setTimeout(function(){zn&&A.fitToSection&&($(y).is(e)&&requestAnimFrame(function(){Bn=!0}),ye(e),Bn=!1)},A.fitToSectionDelay))}}function fe(e){return e.find(P).length?e.find(z).find(l):e.find(l)}function de(e,n){if(Hn.m[e]){var o,t;if("down"==e?(o="bottom",t=Cn.moveSectionDown):(o="top",t=Cn.moveSectionUp),n.length>0){if(!We(o,n))return!0;t()}else t()}}function ue(e){var n=e.originalEvent;if(!he(e.target)&&pe(n)){A.autoScrolling&&e.preventDefault();var t=$(y),i=fe(t);if(zn&&!kn){var a=hn(n);_n=a.y,Gn=a.x,t.find(P).length&&o.abs(Qn-Gn)>o.abs(jn-_n)?o.abs(Qn-Gn)>ee.width()/100*A.touchSensitivity&&(Qn>Gn?Hn.m.right&&Cn.moveSlideRight():Hn.m.left&&Cn.moveSlideLeft()):A.autoScrolling&&o.abs(jn-_n)>ee.height()/100*A.touchSensitivity&&(jn>_n?de("down",i):_n>jn&&de("up",i))}}}function he(e,n){n=n||0;var o=$(e).parent();return n<A.normalScrollElementTouchThreshold&&o.is(A.normalScrollElements)?!0:n==A.normalScrollElementTouchThreshold?!1:he(o,++n)}function pe(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function ve(e){var n=e.originalEvent;if(A.fitToSection&&bn.stop(),pe(n)){var o=hn(n);jn=o.y,Qn=o.x}}function me(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function ge(n){var t=(new Date).getTime();if(A.autoScrolling&&!In){n=n||e.event;var i=n.wheelDelta||-n.deltaY||-n.detail,a=o.max(-1,o.min(1,i)),s="undefined"!=typeof n.wheelDeltaX||"undefined"!=typeof n.deltaX,l=o.abs(n.wheelDeltaX)<o.abs(n.wheelDelta)||o.abs(n.deltaX)<o.abs(n.deltaY)||!s;Dn.length>149&&Dn.shift(),Dn.push(o.abs(i)),A.scrollBar&&(n.preventDefault?n.preventDefault():n.returnValue=!1);var r=$(y),c=fe(r),f=t-Jn;if(Jn=t,f>200&&(Dn=[]),zn){var d=me(Dn,10),u=me(Dn,70),h=d>=u;h&&l&&(0>a?de("down",c):de("up",c))}return!1}A.fitToSection&&bn.stop()}function Se(e){var n=$(y),o=n.find(P),t=o.find(q).length;if(!(!o.length||kn||2>t)){var i=o.find(z),a=null;if(a="prev"===e?i.prev(q):i.next(q),!a.length){if(!A.loopHorizontal)return;a="prev"===e?i.siblings(":last"):i.siblings(":first")}kn=!0,ze(o,a)}}function we(){$(z).each(function(){pn($(this),"internal")})}function ye(e,n,o){requestAnimFrame(function(){var t=e.position();if("undefined"!=typeof t){var i=e.hasClass(k)?t.top-Mn+e.height():t.top,a={element:e,callback:n,isMovementUp:o,dest:t,dtop:i,yMovement:Xe(e),anchorLink:e.data("anchor"),sectionIndex:e.index(w),activeSlide:e.find(z),activeSection:$(y),leavingSection:$(y).index(w)+1,localIsResizing:Bn};if(!(a.activeSection.is(e)&&!Bn||A.scrollBar&&ee.scrollTop()===a.dtop&&!e.hasClass(k))){if(a.activeSlide.length)var s=a.activeSlide.data("anchor"),l=a.activeSlide.index();if(A.autoScrolling&&A.continuousVertical&&"undefined"!=typeof a.isMovementUp&&(!a.isMovementUp&&"up"==a.yMovement||a.isMovementUp&&"down"==a.yMovement)&&(a=Te(a)),$.isFunction(A.onLeave)&&!a.localIsResizing){if(A.onLeave.call(a.activeSection,a.leavingSection,a.sectionIndex+1,a.yMovement)===!1)return;Le(a.activeSection)}e.addClass(v).siblings().removeClass(v),Ae(e),zn=!1,on(l,s,a.anchorLink,a.sectionIndex),xe(a),Fn=a.anchorLink,Ue(a.anchorLink,a.sectionIndex)}}})}function xe(e){if(A.css3&&A.autoScrolling&&!A.scrollBar){var n="translate3d(0px, -"+e.dtop+"px, 0px)";Ge(n,!0),A.scrollingSpeed?Yn=setTimeout(function(){ke(e)},A.scrollingSpeed):ke(e)}else{var o=be(e);$(o.element).animate(o.options,A.scrollingSpeed,A.easing).promise().done(function(){ke(e)})}}function be(e){var n={};return A.autoScrolling&&!A.scrollBar?(n.options={top:-e.dtop},n.element=a):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Te(e){return e.isMovementUp?$(y).before(e.activeSection.nextAll(w)):$(y).after(e.activeSection.prevAll(w).get().reverse()),vn($(y).position().top),we(),e.wrapAroundElements=e.activeSection,e.dest=e.element.position(),e.dtop=e.dest.top,e.yMovement=Xe(e.element),e}function Ce(e){e.wrapAroundElements&&e.wrapAroundElements.length&&(e.isMovementUp?$(x).before(e.wrapAroundElements):$(b).after(e.wrapAroundElements),vn($(y).position().top),we())}function ke(e){Ce(e),e.element.find(".fp-scrollable").mouseover(),Cn.setFitToSection(!e.element.hasClass(k)),$.isFunction(A.afterLoad)&&!e.localIsResizing&&A.afterLoad.call(e.element,e.anchorLink,e.sectionIndex+1),Ee(e.element),zn=!0,$.isFunction(e.callback)&&e.callback.call(this)}function Ae(e){var n=e.find(z);n.length&&(e=$(n)),e.find("img[data-src], source[data-src], audio[data-src]").each(function(){$(this).attr("src",$(this).data("src")),$(this).removeAttr("data-src"),$(this).is("source")&&$(this).closest("video").get(0).load()})}function Ee(e){e.find("video, audio").each(function(){var e=$(this).get(0);e.hasAttribute("autoplay")&&"function"==typeof e.play&&e.play()})}function Le(e){e.find("video, audio").each(function(){var e=$(this).get(0);e.hasAttribute("data-ignore")||"function"!=typeof e.pause||e.pause()})}function Me(){var n=e.location.hash.replace("#","").split("/"),o=n[0],t=n[1];o&&(A.animateAnchor?$e(o,t):Cn.silentMoveTo(o,t))}function Be(){if(!Kn&&!A.lockAnchors){var n=e.location.hash.replace("#","").split("/"),o=n[0],t=n[1],i="undefined"==typeof Fn,a="undefined"==typeof Fn&&"undefined"==typeof t&&!kn;o.length&&(o&&o!==Fn&&!i||a||!kn&&qn!=t)&&$e(o,t)}}function Re(e){clearTimeout(Nn);var n=$(":focus");if(!n.is("textarea")&&!n.is("input")&&!n.is("select")&&A.keyboardScrolling&&A.autoScrolling){var o=e.which,t=[40,38,32,33,34];$.inArray(o,t)>-1&&e.preventDefault(),In=e.ctrlKey,Nn=setTimeout(function(){Fe(e)},150)}}function Fe(e){var n=e.shiftKey;switch(e.which){case 38:case 33:Hn.k.up&&Cn.moveSectionUp();break;case 32:if(n&&Hn.k.up){Cn.moveSectionUp();break}case 40:case 34:Hn.k.down&&Cn.moveSectionDown();break;case 36:Hn.k.up&&Cn.moveTo(1);break;case 35:Hn.k.down&&Cn.moveTo($(w).length);break;case 37:Hn.k.left&&Cn.moveSlideLeft();break;case 39:Hn.k.right&&Cn.moveSlideRight();break;default:return}}function qe(e){zn&&(e.pageY<Zn?Cn.moveSectionUp():e.pageY>Zn&&Cn.moveSectionDown()),Zn=e.pageY}function ze(e,n){var t=n.position(),i=n.index(),a=e.closest(w),s=a.index(w),l=a.data("anchor"),r=a.find(Y),c=an(n),f=Bn;if(A.onSlideLeave){var d=a.find(z),u=d.index(),h=Ne(u,i);if(!f&&"none"!==h&&$.isFunction(A.onSlideLeave)&&A.onSlideLeave.call(d,l,s+1,u,h,i)===!1)return void(kn=!1)}n.addClass(v).siblings().removeClass(v),f||Ae(n),!A.loopHorizontal&&A.controlArrows&&(a.find(Q).toggle(0!==i),a.find(Z).toggle(!n.is(":last-child"))),a.hasClass(v)&&on(i,c,l,s);var p=function(){f||$.isFunction(A.afterSlideLoad)&&A.afterSlideLoad.call(n,l,s+1,c,i),kn=!1};if(A.css3){var g="translate3d(-"+o.round(t.left)+"px, 0px, 0px)";Ie(e.find(H),A.scrollingSpeed>0).css(mn(g)),Un=setTimeout(function(){p()},A.scrollingSpeed,A.easing)}else e.animate({scrollLeft:o.round(t.left)},A.scrollingSpeed,A.easing,function(){p()});r.find(m).removeClass(v),r.find("li").eq(i).find("a").addClass(v)}function De(){if(Pe(),An){var e=$(n.activeElement);if(!e.is("textarea")&&!e.is("input")&&!e.is("select")){var t=ee.height();o.abs(t-$n)>20*o.max($n,t)/100&&(Cn.reBuild(!0),$n=t)}}else clearTimeout(Vn),Vn=setTimeout(function(){Cn.reBuild(!0)},350)}function Pe(){var e=A.responsive||A.responsiveWidth,n=A.responsiveHeight;if(e&&Cn.setResponsive(ee.width()<e),n){var o=Ln.hasClass(f);o||Cn.setResponsive(ee.height()<n)}}function Ie(e){var n="all "+A.scrollingSpeed+"ms "+A.easingcss3;return e.removeClass(d),e.css({"-webkit-transition":n,transition:n})}function He(e){return e.addClass(d)}function Oe(e,n){var t=825,i=900;if(t>e||i>n){var a=100*e/t,s=100*n/i,l=o.min(a,s),r=l.toFixed(2);Tn.css("font-size",r+"%")}else Tn.css("font-size","100%")}function Ve(e,n){A.navigation&&($(L).find(m).removeClass(v),e?$(L).find('a[href="#'+e+'"]').addClass(v):$(L).find("li").eq(n).find("a").addClass(v))}function Ye(e){A.menu&&($(A.menu).find(m).removeClass(v),$(A.menu).find('[data-menuanchor="'+e+'"]').addClass(v))}function Ue(e,n){Ye(e),Ve(e,n)}function We(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0}function Xe(e){var n=$(y).index(w),o=e.index(w);return n==o?"none":n>o?"up":"down"}function Ne(e,n){return e==n?"none":e>n?"left":"right"}function Ke(e){e.css("overflow","hidden");var n=e.closest(w),o=e.find(l),t;o.length?t=o.get(0).scrollHeight:(t=e.get(0).scrollHeight,A.verticalCentered&&(t=e.find(C).get(0).scrollHeight));var i=Mn-parseInt(n.css("padding-bottom"))-parseInt(n.css("padding-top"));t>i?o.length?o.css("height",i+"px").parent().css("height",i+"px"):(A.verticalCentered?e.find(C).wrapInner('<div class="'+s+'" />'):e.wrapInner('<div class="'+s+'" />'),e.find(l).slimScroll({allowPageScroll:!0,height:i+"px",size:"10px",alwaysVisible:!0})):je(e),e.css("overflow","")}function je(e){e.find(l).children().first().unwrap().unwrap(),e.find(r).remove(),e.find(c).remove()}function Qe(e){e.addClass(O).wrapInner('<div class="'+T+'" style="height:'+_e(e)+'px;" />')}function _e(e){var n=Mn;if(A.paddingTop||A.paddingBottom){var o=e;o.hasClass(S)||(o=e.closest(w));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=Mn-t}return n}function Ge(e,n){n?Ie(Ln):He(Ln),Ln.css(mn(e)),setTimeout(function(){Ln.removeClass(d)},10)}function Je(e){var n=$(w+'[data-anchor="'+e+'"]');return n.length||(n=$(w).eq(e-1)),n}function Ze(e,n){var o=n.find(P),t=o.find(q+'[data-anchor="'+e+'"]');return t.length||(t=o.find(q).eq(e)),t}function $e(e,n){var o=Je(e);"undefined"==typeof n&&(n=0),e===Fn||o.hasClass(v)?en(o,n):ye(o,function(){en(o,n)})}function en(e,n){if("undefined"!=typeof n){var o=e.find(P),t=Ze(n,e);t.length&&ze(o,t)}}function nn(e,n){e.append('<div class="'+V+'"><ul></ul></div>');var o=e.find(Y);o.addClass(A.slidesNavPosition);for(var t=0;n>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(v)}function on(e,n,o,t){var i="";A.anchors.length&&!A.lockAnchors&&(e?("undefined"!=typeof o&&(i=o),"undefined"==typeof n&&(n=e),qn=n,tn(i+"/"+n)):"undefined"!=typeof e?(qn=n,tn(o)):tn(o)),sn()}function tn(n){if(A.recordHistory)location.hash=n;else if(An||En)history.replaceState(t,t,"#"+n);else{var o=e.location.href.split("#")[0];e.location.replace(o+"#"+n)}}function an(e){var n=e.data("anchor"),o=e.index();return"undefined"==typeof n&&(n=o),n}function sn(){var e=$(y),n=e.find(z),o=an(e),t=an(n),i=e.index(w),a=String(o);n.length&&(a=a+"-"+t),a=a.replace("/","-").replace("#","");var s=new RegExp("\\b\\s?"+p+"-[^\\s]+\\b","g");Tn[0].className=Tn[0].className.replace(s,""),Tn.addClass(p+"-"+a)}function ln(){var o=n.createElement("p"),i,a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};n.body.insertBefore(o,null);for(var s in a)o.style[s]!==t&&(o.style[s]="translate3d(1px,1px,1px)",i=e.getComputedStyle(o).getPropertyValue(a[s]));return n.body.removeChild(o),i!==t&&i.length>0&&"none"!==i}function rn(){n.addEventListener?(n.removeEventListener("mousewheel",ge,!1),n.removeEventListener("wheel",ge,!1),n.removeEventListener("MozMousePixelScroll",ge,!1)):n.detachEvent("onmousewheel",ge)}function cn(){var o="",i;e.addEventListener?i="addEventListener":(i="attachEvent",o="on");var a="onwheel"in n.createElement("div")?"wheel":n.onmousewheel!==t?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?n[i](o+"MozMousePixelScroll",ge,!1):n[i](o+a,ge,!1)}function fn(){if(An||En){var e=un();$(a).off("touchstart "+e.down).on("touchstart "+e.down,ve),$(a).off("touchmove "+e.move).on("touchmove "+e.move,ue)}}function dn(){if(An||En){var e=un();$(a).off("touchstart "+e.down),$(a).off("touchmove "+e.move)}}function un(){var n;return n=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function hn(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,En&&pe(e)&&A.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function pn(e,n){Cn.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(Bn=!0),ze(e.closest(P),e),"undefined"!=typeof n&&(Bn=!1),Cn.setScrollingSpeed(On.scrollingSpeed,"internal")}function vn(e){if(A.scrollBar)Ln.scrollTop(e);else if(A.css3){var n="translate3d(0px, -"+e+"px, 0px)";Ge(n,!1)}else Ln.css("top",-e)}function mn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function gn(e,n,o){switch(n){case"up":Hn[o].up=e;break;case"down":Hn[o].down=e;break;case"left":Hn[o].left=e;break;case"right":Hn[o].right=e;break;case"all":"m"==o?Cn.setAllowScrolling(e):Cn.setKeyboardScrolling(e)}}function Sn(){vn(0),$(L+", "+Y+", "+X).remove(),$(w).css({height:"","background-color":"",padding:""}),$(q).css({width:""}),Ln.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),bn.css({overflow:"",height:""}),$("html").removeClass(h),$.each(Tn.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(p)&&Tn.removeClass(n)}),$(w+", "+q).each(function(){je($(this)),$(this).removeClass(O+" "+v)}),He(Ln),Ln.find(C+", "+H+", "+P).each(function(){$(this).replaceWith(this.childNodes)}),bn.scrollTop(0)}function wn(e,n,o){A[e]=n,"internal"!==o&&(On[e]=n)}function yn(){A.continuousVertical&&(A.loopTop||A.loopBottom)&&(A.continuousVertical=!1,xn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),A.scrollBar&&A.scrollOverflow&&xn("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),A.continuousVertical&&A.scrollBar&&(A.continuousVertical=!1,xn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),$.each(A.anchors,function(e,n){($("#"+n).length||$('[name="'+n+'"]').length)&&xn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function xn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var bn=$("html, body"),Tn=$("body"),Cn=$.fn.fullpage;A=$.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:g,slideSelector:R,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},A),yn(),$.extend($.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),$.extend($.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}}),Cn.setAutoScrolling=function(e,n){wn("autoScrolling",e,n);var o=$(y);A.autoScrolling&&!A.scrollBar?(bn.css({overflow:"hidden",height:"100%"}),Cn.setRecordHistory(On.recordHistory,"internal"),Ln.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&vn(o.position().top)):(bn.css({overflow:"visible",height:"initial"}),Cn.setRecordHistory(!1,"internal"),Ln.css({"-ms-touch-action":"","touch-action":""}),vn(0),o.length&&bn.scrollTop(o.position().top))},Cn.setRecordHistory=function(e,n){wn("recordHistory",e,n)},Cn.setScrollingSpeed=function(e,n){wn("scrollingSpeed",e,n)},Cn.setFitToSection=function(e,n){wn("fitToSection",e,n)},Cn.setLockAnchors=function(e){A.lockAnchors=e},Cn.setMouseWheelScrolling=function(e){e?cn():rn()},Cn.setAllowScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),$.each(n,function(n,o){gn(e,o,"m")})):e?(Cn.setMouseWheelScrolling(!0),fn()):(Cn.setMouseWheelScrolling(!1),dn())},Cn.setKeyboardScrolling=function(e,n){"undefined"!=typeof n?(n=n.replace(/ /g,"").split(","),$.each(n,function(n,o){gn(e,o,"k")})):A.keyboardScrolling=e},Cn.moveSectionUp=function(){var e=$(y).prev(w);e.length||!A.loopTop&&!A.continuousVertical||(e=$(w).last()),e.length&&ye(e,null,!0)},Cn.moveSectionDown=function(){var e=$(y).next(w);e.length||!A.loopBottom&&!A.continuousVertical||(e=$(w).first()),e.length&&ye(e,null,!1)},Cn.silentMoveTo=function(e,n){requestAnimFrame(function(){Cn.setScrollingSpeed(0,"internal")}),Cn.moveTo(e,n),requestAnimFrame(function(){Cn.setScrollingSpeed(On.scrollingSpeed,"internal")})},Cn.moveTo=function(e,n){var o=Je(e);"undefined"!=typeof n?$e(e,n):o.length>0&&ye(o)},Cn.moveSlideRight=function(){Se("next")},Cn.moveSlideLeft=function(){Se("prev")},Cn.reBuild=function(e){if(!Ln.hasClass(u)){requestAnimFrame(function(){Bn=!0});var n=ee.width();Mn=ee.height(),A.resize&&Oe(Mn,n),$(w).each(function(){var e=$(this).find(P),n=$(this).find(q);A.verticalCentered&&$(this).find(C).css("height",_e($(this))+"px"),$(this).css("height",Mn+"px"),A.scrollOverflow&&(n.length?n.each(function(){Ke($(this))}):Ke($(this))),n.length>1&&ze(e,e.find(z))});var o=$(y),t=o.index(w);t&&Cn.silentMoveTo(t+1),requestAnimFrame(function(){Bn=!1}),$.isFunction(A.afterResize)&&e&&A.afterResize.call(Ln),$.isFunction(A.afterReBuild)&&!e&&A.afterReBuild.call(Ln)}},Cn.setResponsive=function(e){var n=Ln.hasClass(f);e?n||(Cn.setAutoScrolling(!1,"internal"),Cn.setFitToSection(!1,"internal"),$(L).hide(),Ln.addClass(f)):n&&(Cn.setAutoScrolling(On.autoScrolling,"internal"),Cn.setFitToSection(On.autoScrolling,"internal"),$(L).show(),Ln.removeClass(f))};var kn=!1,An=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),En="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ln=$(this),Mn=ee.height(),Bn=!1,Rn=!0,Fn,qn,zn=!0,Dn=[],Pn,In,Hn={};Hn.m={up:!0,down:!0,left:!0,right:!0},Hn.k=$.extend(!0,{},Hn.m);var On=$.extend(!0,{},A),Vn,Yn,Un,Wn,Xn,Nn;$(this).length&&W();var Kn=!1;ee.on("scroll",ce);var jn=0,Qn=0,_n=0,Gn=0,Jn=(new Date).getTime();e.requestAnimFrame=function(){return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||e.requestAnimationFrame||function(e){e()}}(),ee.on("hashchange",Be),ne.keydown(Re),ne.keyup(function(e){Rn&&(In=e.ctrlKey)}),$(e).blur(function(){Rn=!1,In=!1});var Nn;Ln.mousedown(function(e){2==e.which&&(Zn=e.pageY,Ln.on("mousemove",qe))}),Ln.mouseup(function(e){2==e.which&&Ln.off("mousemove")});var Zn=0;ne.on("click touchstart",L+" a",function(e){e.preventDefault();var n=$(this).parent().index();ye($(w).eq(n))}),ne.on("click touchstart",U,function(e){e.preventDefault();var n=$(this).closest(w).find(P),o=n.find(q).eq($(this).closest("li").index());ze(n,o)}),A.normalScrollElements&&(ne.on("mouseenter",A.normalScrollElements,function(){Cn.setMouseWheelScrolling(!1)}),ne.on("mouseleave",A.normalScrollElements,function(){Cn.setMouseWheelScrolling(!0)})),$(w).on("click touchstart",X,function(){$(this).hasClass(N)?Hn.m.left&&Cn.moveSlideLeft():Hn.m.right&&Cn.moveSlideRight()}),ee.resize(De);var $n=Mn;Cn.destroy=function(e){Cn.setAutoScrolling(!1,"internal"),Cn.setAllowScrolling(!1),Cn.setKeyboardScrolling(!1),Ln.addClass(u),clearTimeout(Un),clearTimeout(Yn),clearTimeout(Vn),clearTimeout(Wn),clearTimeout(Xn),ee.off("scroll",ce).off("hashchange",Be).off("resize",De),ne.off("click",L+" a").off("mouseenter",L+" li").off("mouseleave",L+" li").off("click",U).off("mouseover",A.normalScrollElements).off("mouseout",A.normalScrollElements),$(w).off("click",X),clearTimeout(Un),clearTimeout(Yn),e&&Sn()}}});