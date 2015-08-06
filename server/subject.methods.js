<<<<<<< HEAD

Meteor.methods({
  urlImgVehicleMethod: function(id,url){
    console.log(url +" adding into Subjects db");
    
    Subjects.update({_id: id},{$set:{
        url: url
  }});
  }
=======

Meteor.methods({
  urlImgVehicleMethod: function(id,url){
    console.log(url +" adding into Subjects db");
    
    Subjects.update({_id: id},{$set:{
        url: url
  }});
  }
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
})