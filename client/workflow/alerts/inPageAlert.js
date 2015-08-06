<<<<<<< HEAD

//-------------------------------------------------------

Template.inPageAlert.inPageAlertType = function(){
  return "success";
};
Template.inPageAlert.inPageAlertText = function(){
  return Session.get('inPageAlertText');
};
Session.setDefault('inPageAlertType', false);
Session.setDefault('inPageAlertText', "Success!");
Template.inPageAlert.inPageAlertVisibility = function(){
  if(Session.get('inPageAlertType')){
    return 'visible';
  }else{
    return "hidden";
  }
};
Template.inPageAlert.events({
  'click #inPageAlert':function(){
    Session.set('inPageAlertType', false);
  }
});
=======

//-------------------------------------------------------

Template.inPageAlert.inPageAlertType = function(){
  return "success";
};
Template.inPageAlert.inPageAlertText = function(){
  return Session.get('inPageAlertText');
};
Session.setDefault('inPageAlertType', false);
Session.setDefault('inPageAlertText', "Success!");
Template.inPageAlert.inPageAlertVisibility = function(){
  if(Session.get('inPageAlertType')){
    return 'visible';
  }else{
    return "hidden";
  }
};
Template.inPageAlert.events({
  'click #inPageAlert':function(){
    Session.set('inPageAlertType', false);
  }
});
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
