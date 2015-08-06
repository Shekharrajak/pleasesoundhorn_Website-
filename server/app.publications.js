<<<<<<< HEAD
Meteor.publish('items', function(){
  return Items.find();
});
Meteor.publish('forms', function(){
  return Forms.find();
});
Meteor.publish('data', function(){
  return Data.find();
});

Meteor.publish('books', function(){
  return Books.find();
});
Meteor.publish('sponsors', function(){
  return Sponsors.find();
});
Meteor.publish('subjects', function(){
  return Subjects.find();
});
Meteor.publish('comments', function(){
  return Comments.find();
});
Meteor.publish('usersDirectory', function(){
  return Meteor.users.find();
});
Meteor.publish('userProfile', function(userId){
  return Meteor.users.find({_id: userId});
});


Meteor.publish(null, function (){
  return Meteor.roles.find();
});

Meteor.publish('uploads', function(){
  return Uploads.find();
});

Meteor.publish('uploadsVehicle', function(){
  return UploadsVehicle.find();
});

Meteor.publish('uploadsVehicle2', function(){
  return UploadsVehicle2.find();
=======
Meteor.publish('items', function(){
  return Items.find();
});
Meteor.publish('forms', function(){
  return Forms.find();
});
Meteor.publish('data', function(){
  return Data.find();
});

Meteor.publish('books', function(){
  return Books.find();
});
Meteor.publish('sponsors', function(){
  return Sponsors.find();
});
Meteor.publish('subjects', function(){
  return Subjects.find();
});
Meteor.publish('comments', function(){
  return Comments.find();
});
Meteor.publish('usersDirectory', function(){
  return Meteor.users.find();
});
Meteor.publish('userProfile', function(userId){
  return Meteor.users.find({_id: userId});
});


Meteor.publish(null, function (){
  return Meteor.roles.find();
});

Meteor.publish('uploads', function(){
  return Uploads.find();
});

Meteor.publish('uploadsVehicle', function(){
  return UploadsVehicle.find();
});

Meteor.publish('uploadsVehicle2', function(){
  return UploadsVehicle2.find();
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
});