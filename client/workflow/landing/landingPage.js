Template.landingPage.getUserCount = function(){
  var count = Meteor.users.find().count();
  return count;
};

Template.landingPage.events({
  'click #screenshotTileBlue, tap #screenshotTileBlue':function(){

    Session.set('overlay_image_path', $('#screenshotBlue').attr('src'));
    Session.set('show_reactive_overlay', true);
    Session.set('show_overlay_image', true);

  },

  'click #saveBookButton':function(){
    console.count('click #saveBookButton');

    //var sponsor = Session.get('selectedSponsor');

    var formObject = {
      inputName: $('#bookNameInput').val(),
      inputLoad: $('#inputLoad').val(),
      inputNumber: $('#inputNumber').val(),
      inputEmail: $('#inputEmail').val(),
      inputTo: $('#inputTo').val(),
      inputFrom: $('#inputFrom').val(),
      inputBookDate: $('#inputBookDate').val(),
      inputVehicleNumbers: $('#inputVehicleNumbers').val(),
      inputVehicleSelected: $('#inputVehicleSelected').val(),
      createdAt: new Date(),
     // owner: Meteor.user().profile.name,
      //owner_id: Meteor.userId(),
      //sponsor: sponsor.name,
      //sponsor_id: sponsor._id
    };

    if(this._id){
      console.count('this._id: ' + this._id);

      var recordId = Books.update({_id: this._id},{$set:{
        inputName: formObject.inputName,
        inputLoad: formObject.inputLoad,
        inputFrom: formObject.inputFrom,
        inputTo: formObject.inputTo,
        inputEmail: formObject.inputEmail,
        inputNumber: formObject.inputNumber,
        inputVehicleSelected: formObject.inputVehicleSelected,
        inputVehicleNumbers: formObject.inputVehicleNumbers,
        inputBookDate: formObject.inputBookDate,

        inputLoad: formObject.in,
        inputName: formObject.inputName,
        inputLoad: formObject.inputLoad,
        url: formObject.url,
        //owner: formObject.owner,
        //owner_id: formObject.owner_id,
        //sponsor: formObject.sponsor,
        //sponsor_id: formObject.sponsor_id
      }});
      // console.log('Studies updated.  Now trying to rename other collections.')
      // Meteor.call('renameStudy', formObject, function(error, result){
      //   if(error){
      //     console.error(error);
      //   }
      //   if(result){
      //     console.log(result);
      //   }
      // });

    }else{
      if(confirm('Are you sure you want to Book ,Please check informations once again !')){
        var recordId = Books.insert({
       inputName: formObject.inputName,
        inputLoad: formObject.inputLoad,
        inputFrom: formObject.inputFrom,
        inputTo: formObject.inputTo,
        inputEmail: formObject.inputEmail,
        inputNumber: formObject.inputNumber,
        inputVehicleSelected: formObject.inputVehicleSelected,
        inputVehicleNumbers: formObject.inputVehicleNumbers,
        inputBookDate: formObject.inputBookDate,

        url: formObject.url,
        //owner: formObject.owner,
        //owner_id: formObject.owner_id,
        //creator: Meteor.user().profile.name,
        //creator_id: Meteor.userId(),
        //sponsor: formObject.sponsor,
        //sponsor_id: formObject.sponsor_id,
        forms: [],
        timestamp: new Date(),
        active: false
      });
    }
      
      console.log(recordId);
      confirm('Book added !')

    }
    Router.go('/');
  }

});

Session.setDefault('screenshotIndex', 0);
Meteor.startup(function () {
  var displayedScreenshotIndex = 0;
  Meteor.setInterval(function () {
    if(displayedScreenshotIndex === 1){
      displayedScreenshotIndex = 0;
    }else{
      displayedScreenshotIndex = displayedScreenshotIndex + 1;
    }
    Session.set('screenshotIndex', displayedScreenshotIndex);
  }, 3000);
});

Template.landingPage.getScreenshotPath = function(){
  switch(Session.get('screenshotIndex')){
    case 0:
      return "/Dermatomes_Female_Double_Medium.png";
      break;
    case 1:
      return "/Dermatomes_Male_Double_Medium.png";
      break;
    case 2:
      return "/Dermatomes_Female_Double_Medium.png";
      break;
  }
};

Template.landingPage.firstImageTransition = function(){
  if(Session.get('screenshotIndex') === 0){
    return 'in';
  }else{
    return 'out';
  }
}
Template.landingPage.secondImageTransition = function(){
  if(Session.get('screenshotIndex') === 1){
    return 'in';
  }else{
    return 'out';
  }
}

Template.landingPage.rendered = function(){
     $('.datetimepicker').each(function(){
           $(this).datetimepicker(); 
     });
}

Template.landingPage.helpers({
  vehicleSelect: function() {
    var fFArray = [
      { v: "Mini-truck ", vId: 0 },
      { v: "truck", vId: 1 },
      { v: " Mini-Van", vId: 2 }, 
      { v: "Construction Equipment", vId: 3 },
       { v: "Other", vId: 4 },
    ];
    return fFArray;
  }
});

Template.landingPage.rendered =function(){
  new WOW().init();
};

