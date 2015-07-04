Meteor.methods({
  removeVisitFromStudy: function(payload){
    console.log(payload);
    return Books.update({_id: payload.studyId}, {$pull:{
      visits: payload.label
    }});
  }
})
