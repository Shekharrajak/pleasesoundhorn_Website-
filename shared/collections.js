<<<<<<< HEAD
Data =  new Meteor.Collection("data");
Data.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Forms =  new Meteor.Collection("forms");
Forms.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

//replacing book from studied
Books =  new Meteor.Collection("books");
Books.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Sponsors =  new Meteor.Collection("sponsors");
Sponsors.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Subjects =  new Meteor.Collection("subjects");
Subjects.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Comments =  new Meteor.Collection("comments");
Comments.allow({
  insert: function(){

    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});


// TODO:  refactor Items to FormItems
Items = new Meteor.Collection("items");
Items.allow({
  update: function(){
    return true;
  },
  insert: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

//for uploading images in sell section
Uploads = new FS.Collection("uploads", {
  stores: [
    //this will store files in ~/uploads folder on your filesystem
    new FS.Store.FileSystem("uploads", { path: "~/uploads" })
  ]
});

Uploads.allow({
    insert: function() {
      // validate if user can insert a file
     // alert('Submitted!');
      return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
      // validate if user can update a file
      return true;
    },
    remove: function(userId, doc) {
      // validate if user can remove a file
      return true;
    },
    //you would get access denied without this download allow option
    //http://stackoverflow.com/questions/26136850/collectionfs-access-denied-403-error-meteor-js
    download: function(userId, doc) {
      // validate if user can download a file
      return true;
    }

});

UploadsVehicle = new FS.Collection("uploadsVehicle", {
  stores: [
    //this will store files in ~/uploads folder on your filesystem
    new FS.Store.FileSystem("uploadsVehicle", { path: "~/uploadsVehicle" })
  ]
});

UploadsVehicle.allow({
    insert: function() {
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

UploadsVehicle2 = new FS.Collection("uploadsVehicle2",{
  stores:[
      new FS.Store.FileSystem("uploadsVehicle2",{path: "~/uploadsVehicle2"})
  ]
});
UploadsVehicle2.allow({
    insert: function() {
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


if (Meteor.isServer) {
  if (Items.find().count() === 0) {
    _.each(
      ["penecillin", "vitamin d", "tetracycline", "epinephrine", "peptol bismol", "claritin", "dihydrogen monoxide", "asprin"],
      function (text, index) {
        Items.insert({
          text: text,
          rank: index,
          labelText: text,
          inputValue: "",
          inputType: "text",
          inputPlaceholder: "...",
          elementType: 'input'
        });
      });
  }
  if(Sponsors.find().count() === 0){
    Sponsors.insert({
      name: "ACME Pharmaceuticals",
      createdAt: new Date()
    });
    Sponsors.insert({
      name: "Big Pharma, Inc",
      createdAt: new Date()
    });
  }


}
=======
Data =  new Meteor.Collection("data");
Data.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Forms =  new Meteor.Collection("forms");
Forms.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

//replacing book from studied
Books =  new Meteor.Collection("books");
Books.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Sponsors =  new Meteor.Collection("sponsors");
Sponsors.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Subjects =  new Meteor.Collection("subjects");
Subjects.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});

Comments =  new Meteor.Collection("comments");
Comments.allow({
  insert: function(){

    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});


// TODO:  refactor Items to FormItems
Items = new Meteor.Collection("items");
Items.allow({
  update: function(){
    return true;
  },
  insert: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

//for uploading images in sell section
Uploads = new FS.Collection("uploads", {
  stores: [
    //this will store files in ~/uploads folder on your filesystem
    new FS.Store.FileSystem("uploads", { path: "/uploads" })
  ]
});

Uploads.allow({
    insert: function() {
      //TODO validate if user can insert a file
     // alert('Submitted!');
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

UploadsVehicle = new FS.Collection("uploadsVehicle", {
  stores: [
    //this will store files in ~/uploads folder on your filesystem
    new FS.Store.FileSystem("uploadsVehicle", { path: "/uploadsVehicle" })
  ]
});

UploadsVehicle.allow({
    insert: function() {
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

UploadsVehicle2 = new FS.Collection("uploadsVehicle2",{
  stores:[
      new FS.Store.FileSystem("uploadsVehicle2",{path: "/uploadsVehicle2"})
  ]
});
UploadsVehicle2.allow({
    insert: function() {
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


if (Meteor.isServer) {
  if (Items.find().count() === 0) {
    _.each(
      ["penecillin", "vitamin d", "tetracycline", "epinephrine", "peptol bismol", "claritin", "dihydrogen monoxide", "asprin"],
      function (text, index) {
        Items.insert({
          text: text,
          rank: index,
          labelText: text,
          inputValue: "",
          inputType: "text",
          inputPlaceholder: "...",
          elementType: 'input'
        });
      });
  }
  if(Sponsors.find().count() === 0){
    Sponsors.insert({
      name: "ACME Pharmaceuticals",
      createdAt: new Date()
    });
    Sponsors.insert({
      name: "Big Pharma, Inc",
      createdAt: new Date()
    });
  }


}
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
