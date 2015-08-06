<<<<<<< HEAD
Session.setDefault('campaignSearchFilter', '');
Session.setDefault('selectedCampaign', null);

Template.studySearchModal.helpers({
  studysList: function(){
    return Campaigns.find({name: {
      $regex: Session.get('studySearchFilter'),
      $options: 'i',
      $ne: "Default Deployment"
    }});
  },
  getCampaignCount: function(){
    return Campaigns.find().count();
  },
  getSearchTerm: function(){
    return Session.get('studySearchFilter');
  }
});


Template.studySearchModal.events({
  'click .list-group-item':function(){
    Session.set('selectedCampaign', {
      _id: this._id,
      name: this.name
    });
  },
  'keyup #studySearchModalInput':function(){
    Session.set('studySearchFilter', $('#studySearchModalInput').val());
  }
});
=======
Session.setDefault('campaignSearchFilter', '');
Session.setDefault('selectedCampaign', null);

Template.studySearchModal.helpers({
  studysList: function(){
    return Campaigns.find({name: {
      $regex: Session.get('studySearchFilter'),
      $options: 'i',
      $ne: "Default Deployment"
    }});
  },
  getCampaignCount: function(){
    return Campaigns.find().count();
  },
  getSearchTerm: function(){
    return Session.get('studySearchFilter');
  }
});


Template.studySearchModal.events({
  'click .list-group-item':function(){
    Session.set('selectedCampaign', {
      _id: this._id,
      name: this.name
    });
  },
  'keyup #studySearchModalInput':function(){
    Session.set('studySearchFilter', $('#studySearchModalInput').val());
  }
});
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
