import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // do something
});
//code_review: still have to update Userquery in order to get read query to be reactive
Meteor.methods({
  "doSomething": function () {
    
    return 'hello'
  }

  
});