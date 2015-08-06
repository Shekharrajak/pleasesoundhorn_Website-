<<<<<<< HEAD
Session.setDefault('selectedSubject', false);

// ---------------------------------------------------------------
// template events

Template.navbarHeader.events({
  'click #selectedSubjectLink':function(){
    $('#subjectSearchModal').modal("show");
    $('#subjectSearchModal').on('hidden.bs.modal', function (e) {
      Session.set('selectedSubject', Session.get('selectedUser'));
    });
  },
  'click #navbarBrandLink':function(){
    Router.go('/');
  },
  'click #logOutLink':function(){
    Router.go('/sign-out');
  }
});



// ---------------------------------------------------------------
// template helpers

Template.navbarHeader.helpers({
  getSelectedBlock: function(){
    return Session.get('selectedBlockItem');
  },
  getSelectedSubject: function(){
    if(Session.get('selectedSubject')){
      return Session.get('selectedSubject').name;
    }else{
      return "No subject selected.";
    }
  },
  getUserName: function(){
    if(Meteor.userId()){
      if(Meteor.user()){
        if(Meteor.user().profile && Meteor.user().profile.name){
          return Meteor.user().profile.name;
        }else{
          return Meteor.user().username;
        }
      }else{
        return "---";
      }
    }else{
      return "Sign In";
    }
  }
});
=======
Session.setDefault('selectedSubject', false);

// ---------------------------------------------------------------
// template events

Template.navbarHeader.events({
  'click #selectedSubjectLink':function(){
    $('#subjectSearchModal').modal("show");
    $('#subjectSearchModal').on('hidden.bs.modal', function (e) {
      Session.set('selectedSubject', Session.get('selectedUser'));
    });
  },
  'click #navbarBrandLink':function(){
    Router.go('/');
  },
  'click #logOutLink':function(){
    Router.go('/sign-out');
  }
});



// ---------------------------------------------------------------
// template helpers

Template.navbarHeader.helpers({
  getSelectedBlock: function(){
    return Session.get('selectedBlockItem');
  },
  getSelectedSubject: function(){
    if(Session.get('selectedSubject')){
      return Session.get('selectedSubject').name;
    }else{
      return "No subject selected.";
    }
  },
  getUserName: function(){
    if(Meteor.userId()){
      if(Meteor.user()){
        if(Meteor.user().profile && Meteor.user().profile.name){
          return Meteor.user().profile.name;
        }else{
          return Meteor.user().username;
        }
      }else{
        return "---";
      }
    }else{
      return "Sign In";
    }
  }
});
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
