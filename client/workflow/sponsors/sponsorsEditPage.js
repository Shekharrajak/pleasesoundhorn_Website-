Session.setDefault('selectedSponsorId', false);


Router.map(function(){
  this.route('newSponsorRoute', {
    path: '/newsponsor',
    template: 'sponsorsEditPage',
    onBeforeAction: function(){
      setPageTitle("New Sponsor");
    }
  });


  this.route('sponsorsEditRoute', {
    path: '/editsponsor/:id',
    template: 'sponsorsEditPage',
    onBeforeAction: function(){
      setPageTitle("Edit Selling Object");
    },
    waitOn: function(){
      return Meteor.subscribe('sponsors');
    },
    data: function () {
      return Sponsors.findOne({_id: this.params.id });
    }
  });
});


//------------------------------------------------
// DATA LAYER

Template.sponsorsEditPage.selectedSponsor = function(){
  console.log(Session.get('selectedSponsorId'));
  if(Session.get('selectedSponsorId')._id){
    return Sponsors.findOne({_id: Session.get('selectedSponsorId')._id });
  }else{
    return {};
  }
};

//------------------------------------------------
// EVENTS

Template.sponsorsEditPage.events({
  'click #saveSponsorButton':function(){
    console.count('click #saveSponsorButton');
    if(this._id){
      console.count('this._id: ' + this._id);

      var formObject = {
         _id: this._id,
       
        inputPrice:$('#inputPrice').val(),
        inputDesc:$('#inputDesc').val(),
        inputSpecification:$('#inputSpecification').val(),
        inputVehicleReg:$('#inputVehicleReg').val(),
        inputEmail:$('#inputEmail').val(),
        inputNumber:$('#inputNumber').val(),
        inputName:$('#inputName').val(),
        inputImgUrl:$('#inputImgUrl').val(),
        createdAt: new Date()
      };
/*
      console.log('Sponsors updated.  Now trying to rename other collections.')
      Meteor.call('renameSponsor', formObject, function(error, result){
        if(error){
          console.error(error);
        }
        if(result){
          console.log(result);
        }
      });*/
      
      var recordId = Sponsors.update({_id: this._id},{$set:{
        inputName: formObject.inputPrice,
        inputLoad: formObject.inputDesc,
        inputFrom: formObject.inputSpecification,
        inputTo: formObject.inputVehicleReg,
        inputEmail: formObject.inputEmail,
        inputNumber: formObject.inputName,
        inputVehicleSelected: formObject.inputNumber,
        inputVehicleNumbers: formObject.inputName,
        inputBookDate: formObject.inputImgUrl,
        createdAt :formObject.createdAt
        
      }});


    }else{
        var recordId = Sponsors.insert({
        inputPrice: formObject.inputPrice,
        inputDesc: formObject.inputDesc,
        inputSpecification: formObject.inputSpecification,
        inputVehicleReg: formObject.inputVehicleReg,
        inputEmail: formObject.inputEmail,
        inputName: formObject.inputName,
        inputNumber: formObject.inputNumber,
        //inputVehicleNumbers: formObject.inputName,
        inputImgUrl: formObject.inputImgUrl,
        createdAt :formObject.createdAt
        
      });
      console.log(recordId);


    }
    Router.go('/sponsors/');
  }
});

Template.sponsorsEditPage.getSponsorName = function(){
  if(this.name){
    return this.name;
  }else{
    return "New Sponsor";
  }
};
