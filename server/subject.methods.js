
Meteor.methods({
  urlImgVehicleMethod: function(id,url){
    console.log(url +" adding into Subjects db");
    
    Subjects.update({_id: id},{$set:{
        url: url
  }});
  }
})