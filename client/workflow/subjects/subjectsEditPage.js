Session.setDefault('selectedSubjectId', false);
Session.setDefault('selectedSponsor', {_id: "---", name: "---"});
Session.setDefault('isDeletingFormFromSubject', false);
Session.setDefault('selectedFileIdBuy', false);
Session.setDefault('urlBuy', null);

Meteor.subscribe('uploadsVehicle');
Meteor.subscribe('subjects');


Router.map(function(){
  this.route('newSubjectRoute', {
    path: '/new/subject',
    template: 'subjectsEditPage',
    onBeforeAction: function(){
      setPageTitle("New Vehicle");
      
    },
    waitOn: function(){
       return [ Meteor.subscribe('subjects'),
       Meteor.subscribe('uploadsVehicle'),
       Meteor.subscribe('uploadsVehicle2'),
       Meteor.subscribe('uploads')
       ]
    },
    onAfterAction:function(){
      Session.set('selectedSubjectId', this.params.id);
    }
   
  });


  this.route('subjectsEditRoute', {
    path: '/edit/subjects/:id',
    template: 'subjectsEditPage',
    onBeforeAction: function(){
      setPageTitle("Edit Vehicle");
      Session.set('selectedSubjectId', this.params.id);
    },
    waitOn: function(){
      return [ Meteor.subscribe('subjects'),
       Meteor.subscribe('uploadsVehicle'),
       Meteor.subscribe('uploadsVehicle2'),
       Meteor.subscribe('uploads')
       ]
    },
    data: function () {
      return Subjects.findOne({_id: this.params.id });
    }
  });
});








  Template.uploadImageVehicle.helpers({
    uploadsVehicle: function() {
      return UploadsVehicle.find();
    },
    uploads: function() {
      return Uploads.find();
    }
   /* urlImgVehicle:function(){
      Session.set('imgurl', this.url);
       Subjects.update({_id:'selectedSubject' },{$set:{
        url: this.url
  }});*/
      /*Meteor.call('urlImgVehicleMethod','selectedSubjectId',this.url);
    */
 
  });

  Template.uploadImageVehicle.events({
    'change input[type="file"]': function(evt) {
      console.log('changed');

      FS.Utility.eachFile(evt, function(file) {
        var fileObj = new FS.File(file);
        fileObj.customProperty = 'hmmm';
        UploadsVehicle.insert(fileObj, function(err) {
          console.log(err);
         // Session.set('urlBuy', this.params.url);
           Session.set('urlBuy', this.params.url);
        });
         console.log(this.id);
       // Session.set('urlBuy', this.params.url);
     
      });
      
    }
  });

//------------------------------------------------
// EVENTS

Template.subjectsEditPage.events({
  'click .individualFormRow':function(){
    //alert('row ' + this._id + Session.get('selectedSubjectId'));
    if(Session.get('isDeletingFormFromSubject')){
      Subjects.update({_id: Session.get('selectedSubjectId')},{$pull:{
        forms: this._id
      }});
      Session.set('isDeletingFormFromSubject', false);
    }
  },
  'click #deleteFormFromSubjectButton':function(){
    Session.set('isDeletingFormFromSubject', true);
  },
  'click #addFormToSubjectButton':function(){
    var self = this;
    //alert('add! ' + this._id);
    console.log('addingFormToSubject ' + this._id);

    $('#formSearchModal').modal("show");

    $('#formSearchModal').on('hidden.bs.modal', function (e) {
      console.log('selectedFormId', Session.get('selectedFormId'));
      //var form = Session.get('selectedForm');
      if(self._id){
        console.log(Subjects.update({_id: self._id}, {$addToSet:{
            forms: Session.get('selectedFormId')
        }}));
      }
      Session.set('selectedFormId', null);
    });
    Session.set('isDeletingFormFromSubject', false);
  },
  'click #deleteSubjectButton':function(){
    console.log('deleteSubjectButton.id', this._id);
    if(confirm('Are you sure you want to delete this record?')){
      Subjects.remove({_id: this._id});
      Session.set('selectedSponsor', {_id: "---", name: "---"});
      Router.go('/subjects');
    }
  },
  'click #findSubjectSponsorButton':function(){
    var self = this;
    //console.log('this.id', this._id);
    //if(ClinicalTrials.isAdminedBy(Meteor.userId())){
      Session.set('selectedUser', Meteor.userId());

      $('#sponsorSearchModal').modal("show");

      $('#sponsorSearchModal').on('hidden.bs.modal', function (e) {
        //Session.get('selectedSponsor');


        //Session.set('selectedSponsor', null);
      });

    //}else{
    //  Session.set('promptTitle', 'User Not Assigned to a Sponsor');
    //  Session.set('promptMessage', 'Please contact your administrator and have them set your employer.');
    //  $('#promptModal').modal("show");
    //}
  },
  'click #saveSubjectButton':function(){
    console.count('click #saveSubjectButton');

    var sponsor = Session.get('selectedSponsor');

    var formObject = {
      name: $('#inputNameVehicle').val(),
      description: $('#inputDesc').val(),
      url: '',
      createdAt: new Date(),
     // owner: Meteor.user().profile.name,
      //owner_id: Meteor.userId(),
      //sponsor: sponsor.name,
      //sponsor_id: sponsor._id
    };

    if(this._id){
      console.count('this._id: ' + this._id);
     // var urlVar = urlBuy;
     // Session.set('urlVar','urlBuy'); 
      //var fileObj = new FS.File(UploadsVehicle);
      //fileObj.findOne({ _id: Session.get('selectedFileIdBuy').id }).url;
      var recordId = Subjects.update({_id: this._id},{$set:{
        name: formObject.name,
        description: formObject.description,
        //url: UploadsVehicle.findOne({ _id: 'selectedFileIdBuy'})
         url: Session.get('urlBuy')
        //owner: formObject.owner,
        //owner_id: formObject.owner_id,
        //sponsor: formObject.sponsor,
        //sponsor_id: formObject.sponsor_id
      }});
      // console.log('Subjects updated.  Now trying to rename other collections.')
      // Meteor.call('renameSubject', formObject, function(error, result){
      //   if(error){
      //     console.error(error);
      //   }
      //   if(result){
      //     console.log(result);
      //   }
      // });
      Session.set('selectedFileIdBuy',null); 

    }else{
      var recordId = Subjects.insert({
        name: formObject.name,
        description: formObject.description,
       // url: UploadsVehicle.findOne({ _id: Session.get('selectedFileIdBuy')}),
       url: Session.get('urlBuy'),

        //owner: formObject.owner,
        //owner_id: formObject.owner_id,
       // creator: Meteor.user().profile.name,
       // creator_id: Meteor.userId(),
       // sponsor: formObject.sponsor,
        //sponsor_id: formObject.sponsor_id,
        forms: [],
        timestamp: new Date(),
        active: false
      });
      console.log(recordId);
      alert('record is added !')
       Session.set('selectedFileIdBuy',null); 

    }
    Router.go('/subjects/');
  }
});



//------------------------------------------------
// HELPERS

Template.subjectsEditPage.helpers({
  isDeletingView: function(){
    if(Session.get('isDeletingFormFromSubject')){
      return "danger-striped";
    }
  },
  notNewSubject:function(){
    if(this._id){
      return true;
    }else{
      return false;
    }
  },
  formsList: function(){
    var study = Subjects.findOne({_id: this._id});
    if(study){
      return Forms.find({ _id: {$in: study.forms }});
    }else{
      return [];
    }
  },
  getSubjectSponsor: function(){
    return Session.get('selectedSponsor').name;
  },
  getSubjectName: function(){
    if(this.name){
      return this.name;
    }else{
      return "New Subject";
    }
  },
  selectedSubject: function(){
    console.log(Session.get('selectedSubjectId'));
    if(Session.get('selectedSubjectId')._id){
      return Subjects.findOne({_id: Session.get('selectedSubjectId')._id });
    }else{
      return {};
    }
  }
});

//-------upload image


  Template.hello.helpers({
    uploadsVehicle2: function() {
      return UploadsVehicle2.find();
    },
    uploads: function() {
      return Uploads.find();
    },
    /*Session.set(inputImgURL, this.url);*/
  });

Template.hello.events({
  'change .fileInput':function(event,template){
      FS.Utility.eachFile(event,function(file){
          var fileObj = FS.File(file);
          UploadsVehicle2.insert(fileObj,function(err){
            console.log(err);
          })
      })
  }
});

/*Subjects.update({_id: this._id},{$set:{
        inputImgURL: imgurl
  }});*/