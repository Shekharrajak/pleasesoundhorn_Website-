<<<<<<< HEAD
Session.setDefault('sponsorSearchFilter', '');
Session.setDefault('selectedSponsor', null);

Template.sponsorSearchModal.sponsorList = function(){
  return Sponsors.find({name: {
    $regex: Session.get('sponsorSearchFilter'),
    $options: 'i',
    $ne: 'Default Sponsor'
  }});
};


Template.sponsorSearchModal.getSearchTerm = function(){
  return Session.get('sponsorSearchFilter');
};
Template.sponsorSearchModal.events({
  'click .list-group-item':function(){
    Session.set('selectedSponsor', {
      _id: this._id,
      name: this.name
    });
  },
  'keyup #sponsorSearchModalInput':function(){
    Session.set('sponsorSearchFilter', $('#sponsorSearchModalInput').val());
  }
});
=======
Session.setDefault('sponsorSearchFilter', '');
Session.setDefault('selectedSponsor', null);

Template.sponsorSearchModal.sponsorList = function(){
  return Sponsors.find({name: {
    $regex: Session.get('sponsorSearchFilter'),
    $options: 'i',
    $ne: 'Default Sponsor'
  }});
};


Template.sponsorSearchModal.getSearchTerm = function(){
  return Session.get('sponsorSearchFilter');
};
Template.sponsorSearchModal.events({
  'click .list-group-item':function(){
    Session.set('selectedSponsor', {
      _id: this._id,
      name: this.name
    });
  },
  'keyup #sponsorSearchModalInput':function(){
    Session.set('sponsorSearchFilter', $('#sponsorSearchModalInput').val());
  }
});
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
