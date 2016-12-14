import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

$.cloudinary.config
    cloud_name:"nadavofi"

PlayersList = new Mongo.Collection('players');


Template.playersLists.helpers({
    'player': function(){
        return PlayersList.find();
    }
});


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);


	Cloudinary._upload_file("http://res.cloudinary.com/demo/image/upload/sample.jpg", {}, function(err, res) {
		if (err){
			console.log("Error: " , err, err.reason);
			return;
		} else {
			console.log("Success :" + res.url);
			PlayersList.insert({ id: instance.counter.get(), public_id: res.public_id });
			console.log(PlayersList.find().count())
		}
	});



  },
});
