
Meteor.subscribe('uploads');
Meteor.subscribe('sponsors');

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
 /* urlImg :function(){
      Sponsors.update({_id: this._id},{$set : {inputImgUrl:this.url}});
      
    }*/

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
      Session.set('selectedFileId', this._id);
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


Template.sell.events({
  'click #saveSellButton':function(){
    console.count('click #saveSellButton');
    
      console.count('this._id: ' + this._id);

     /* var formObject = {
        
        //owner: Meteor.user().profile.name,
        //owner_id: Meteor.userId()
      };*/
/*
      console.log('Sponsors updated.  Now trying to rename other collections.')
      Meteor.call('renameSponsor', formObject, function(error, result){
        if(error){
          console.error(error);
        }
        if(result){
          console.log(result);
        }
      });*/

    if(confirm('Are you sure you want to Sell ,Please check informations once again !')){
      var recordId = Sponsors.insert({

      _id: this._id,
       
        inputPrice:$('#inputPrice').val(),
        inputDesc:$('#inputDesc').val(),
        inputSpecification:$('#inputSpecification').val(),
        inputVehicleReg:$('#inputVehicleReg').val(),
        inputEmail:$('#inputEmail').val(),
        inputNumber:$('#inputNumber').val(),
        inputName:$('#inputName').val(),
        inputImgUrl: Uploads.file.findOne({ _id: 'selectedFileId' }).url,
        createdAt: new Date(),
        //owner: Meteor.user().profile.name,
        //owner_id: Meteor.userId(),
        //creator: Meteor.user().profile.name,
        //creator_id: Meteor.userId(),
        //imestamp: new Date()
      });
      console.log(recordId);

       Router.go('/sell/');
    }
   }

  
});
