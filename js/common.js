
!function(a){
  a.fn.preloadinator=function(e){
    "use strict";
    var o=a.extend({
      scroll:!1,
      minTime:0,
      animation:"fadeOut",
      animationDuration:400,
      afterDisableScroll:function(){
      },
      afterEnableScroll:function(){
      },
      afterRemovePreloader:function(){
      }
    },e),n=this,r=(new Date).getTime();
    return a.fn.preloadinator.disableScroll=function(){
      a('.wrapper').css("opacity", "0"),"function"==typeof o.afterDisableScroll&&o.afterDisableScroll.call(this)
    },a.fn.preloadinator.enableScroll=function(){
      a('.wrapper').css("opacity", "1"),"function"==typeof o.afterEnableScroll&&o.afterEnableScroll.call(this)
    },a.fn.preloadinator.removePreloader=function(){
      a(n)[o.animation](o.animationDuration,function(){!1===o.scroll&&a.fn.preloadinator.enableScroll(),"function"==typeof o.afterRemovePreloader&&o.afterRemovePreloader.call(this)})
    },a.fn.preloadinator.minTimeElapsed=function(){
      return(new Date).getTime()-r>=o.minTime
    },!1===o.scroll&&a.fn.preloadinator.disableScroll(),a(window).on("load",function(){
      if(a.fn.preloadinator.minTimeElapsed())a.fn.preloadinator.removePreloader();
      else{
        var e=(new Date).getTime()-r;
        setTimeout(a.fn.preloadinator.removePreloader,o.minTime-e)
      }
    }),this
  }
}(jQuery);


$(function() {
  $('.wrap-card').click(function() {
      $('.wrap-card').each(function() {
        $(this).css('z-index', 0);
      });
        $(this).css('z-index', 99);
        $(this).toggleClass('open');
  })
})

// $(function () { // wait for document ready
//   var flightpath = {
//     entry : {
//       curviness: 1.25,
//       autoRotate: true,
//       values: [
//           {x: 100,	y: -20},
//           {x: 300,	y: 10}
//         ]
//     },
//     looping : {
//       curviness: 1.25,
//       autoRotate: true,
//       values: [
//           {x: 510,	y: 60},
//           {x: 620,	y: -60},
//           {x: 500,	y: -100},
//           {x: 380,	y: 20},
//           {x: 500,	y: 60},
//           {x: 580,	y: 20},
//           {x: 620,	y: 15}
//         ]
//     },
//     leave : {
//       curviness: 1.25,
//       autoRotate: true,
//       values: [
//           {x: 660,	y: 20},
//           {x: 800,	y: 130},
//           {x: $(window).width() + 300,	y: -100},
//         ]
//     }
//   };
//   // init controller
//   var controller = new ScrollMagic.Controller();

//   // create tween
//   var tween = new TimelineMax()
//     .add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
//     .add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
//     .add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

//   // build scene
//   var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
//           .setPin("#target")
//           .setTween(tween)
//           .addIndicators() // add indicators (requires plugin)
//           .addTo(controller);
// })
