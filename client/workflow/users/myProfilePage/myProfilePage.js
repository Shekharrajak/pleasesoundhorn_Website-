<<<<<<< HEAD
Session.setDefault('isAlertVisible', false);


//==============================================================================
// ROUTER

Router.map(function(){
  this.route('myProfileRoute', {
    path: '/myprofile',
    template: 'myProfilePage',
    onBeforeAction: function(){
      setPageTitle("Your Profile");
    },
    onAfterAction: function() {
      Session.set('isOnListPage', false);
    }
  });
});



//==============================================================================
// TEMPLATE INPUTS

Template.myProfilePage.events({
  'click #editProfileButton':function(){
    Router.go('/user/edit/' + Meteor.userId());
  }
});



//==============================================================================
// TEMPLATE OUTPUTS

Template.myProfilePage.helpers({
  isAlertVisible: function(){
    return Session.get('isAlertVisible');
  },
  user: function(){
    if(Meteor.user()){
      return Meteor.user();
    }else{
      return {};
    }
  }
});
=======
Session.setDefault('isAlertVisible', false);


//==============================================================================
// ROUTER

Router.map(function(){
  this.route('myProfileRoute', {
    path: '/myprofile',
    template: 'myProfilePage',
    onBeforeAction: function(){
      setPageTitle("Your Profile");
    },
    onAfterAction: function() {
      Session.set('isOnListPage', false);
    }
  });
});



//==============================================================================
// TEMPLATE INPUTS

Template.myProfilePage.events({
  'click #editProfileButton':function(){
    Router.go('/user/edit/' + Meteor.userId());
  }
});



//==============================================================================
// TEMPLATE OUTPUTS

Template.myProfilePage.helpers({
  isAlertVisible: function(){
    return Session.get('isAlertVisible');
  },
  user: function(){
    if(Meteor.user()){
      return Meteor.user();
    }else{
      return {};
    }
  }
});
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
