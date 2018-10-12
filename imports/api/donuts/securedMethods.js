import {Meteor} from 'meteor/meteor'
import {Donuts} from '/db'
import Security from '/imports/api/security'

Meteor.methods({
	'secured.donut_list' (){
		if(Security.checkLoggedIn(Meteor.userId())){
			return Donuts.find().fetch();
		}
		return [];
	}
});