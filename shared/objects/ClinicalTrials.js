<<<<<<< HEAD
ClinicalTrials = {
  isAdminedBy: function(userId){
    var user = Meteor.users.findOne(userId);
    // we need to use == instead of === because we're comparing a String to an array value
    if((user.profile.roles[0] == "Admin") || (user.profile.roles[0] == "SysAdmin")){
      return true;
    }else{
      return false;
    }
  },
  checkForHexCode: new RegExp("^[0-9a-fA-F]{24}$")
};
=======
ClinicalTrials = {
  isAdminedBy: function(userId){
    var user = Meteor.users.findOne(userId);
    // we need to use == instead of === because we're comparing a String to an array value
    if((user.profile.roles[0] == "Admin") || (user.profile.roles[0] == "SysAdmin")){
      return true;
    }else{
      return false;
    }
  },
  checkForHexCode: new RegExp("^[0-9a-fA-F]{24}$")
};
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
