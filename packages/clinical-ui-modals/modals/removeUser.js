<<<<<<< HEAD


Template.removeUserModal.events({
  'click #confirmRemoveUserButton':function(){
    console.log('removing user ', Session.get('selectedUser'));
    var user = Meteor.users.findOne({_id: Session.get('selectedUser')})
    if($('#removeUserModalInput').val() === user.username){
      Meteor.call('removeUser', Session.get('selectedUser'), function(error, result){
        if(result){
          Session.set('selectedUser', null);
          Router.go('/users');
        }
      })
    }
  }
});
=======


Template.removeUserModal.events({
  'click #confirmRemoveUserButton':function(){
    console.log('removing user ', Session.get('selectedUser'));
    var user = Meteor.users.findOne({_id: Session.get('selectedUser')})
    if($('#removeUserModalInput').val() === user.username){
      Meteor.call('removeUser', Session.get('selectedUser'), function(error, result){
        if(result){
          Session.set('selectedUser', null);
          Router.go('/users');
        }
      })
    }
  }
});
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
