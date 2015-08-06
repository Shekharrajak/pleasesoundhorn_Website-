<<<<<<< HEAD
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Meteor.startup(function() {
  return AccountsEntry.config({
    privacyUrl: '/privacy-policy',
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: '/',
    profileRoute: 'profile',
    showSignupCode: true
  });
});
=======
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Meteor.startup(function() {
  return AccountsEntry.config({
    privacyUrl: '/privacy-policy',
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: '/',
    profileRoute: 'profile',
    showSignupCode: true
  });
});
>>>>>>> 5618854daf14009ec2accbd7cab722fba5e35d52
