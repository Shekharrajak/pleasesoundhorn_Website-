
Meteor.subscribe('uploads');

  Template.uploadImage.helpers({
    uploads: function() {
      return Uploads.find({});
    },
    notEmpty: function(){
    if(Session.get(uploads.find().count() > 0)){
      return "active";
    }
    
  },
 /*  selectedSubject: function(){
    console.log(Session.get(this._id));
    if(Session.get(this._id){
      return Subjects.findOne({_id: Session.get(this._id });
    }else{
      return {};
    }
  },*/
  urlImg :function(){
      return this.url;
    }

  });

  Template.uploadImage.events({
    'change input[type="file"]': function(evt) {
      console.log('changed');
      FS.Utility.eachFile(evt, function(file) {
        var fileObj = new FS.File(file);
        fileObj.customProperty = 'hmmm';
        Uploads.insert(fileObj, function(err) {
          console.log(err);
        });
      });
    }
  });


 /* if (Meteor.isServer) {
  Uploads.allow({
    insert: function(userId, doc) {
      //TODO validate if user can insert a file
      return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
      //TODO validate if user can update a file
      return true;
    },
    remove: function(userId, doc) {
      //TODO validate if user can remove a file
      return true;
    },
    //you would get access denied without this download allow option
    //http://stackoverflow.com/questions/26136850/collectionfs-access-denied-403-error-meteor-js
    download: function(userId, doc) {
      //TODO validate if user can download a file
      return true;
    }
  });
}*/