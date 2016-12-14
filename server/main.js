import { Meteor } from 'meteor/meteor';

PlayersList = new Mongo.Collection('players');

Meteor.startup(() => {
  // code to run on server at startup

});
