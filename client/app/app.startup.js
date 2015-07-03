Session.setDefault('resize', null);

Meteor.startup(function(){
  $(window).resize(function(evt) {
    Session.set("resize", new Date());
  });

  bowser = BrowserObserver.init();

});

   scrollMagicController = new ScrollMagic();

        Template.StartAnimation.onRendered({
        // Create Animation for 0.5s
        animation: function () {
           var tween = TweenMax.to($('#animation'), 0.5,
                {
                    backgroundColor: 'rgb(255, 39, 46)',
                    scale: 5,
                    rotation: 360
                })                                
        }


});

