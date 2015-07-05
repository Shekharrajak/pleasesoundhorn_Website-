Template.buy.events({
  
  
});


  Template.buy.helpers({
    uploadsVehicle: function() {
      return UploadsVehicle.find();
    },
    uploads: function() {
      return Uploads.find();
    },
    
    subjectsList: function() {
      return Subjects.find();
    }
    


  });