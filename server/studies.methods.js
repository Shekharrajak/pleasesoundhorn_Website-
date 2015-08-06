<<<<<<< HEAD
Meteor.methods({
  removeVisitFromStudy: function(payload){
    console.log(payload);
    return Books.update({_id: payload.studyId}, {$pull:{
      visits: payload.label
    }});
  }
})
=======
Meteor.methods({
  removeVisitFromStudy: function(payload){
    console.log(payload);
    return Books.update({_id: payload.studyId}, {$pull:{
      visits: payload.label
    }});
  }
})
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
