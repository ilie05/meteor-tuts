import {Meteor} from 'meteor/meteor'
import {Donuts} from '/db';

Meteor.methods({
    'donut.create'(donut) {
        Donuts.insert(donut);
    },

    'donut.list' () {
        return Donuts.find().fetch();
    },

    'donut.edit' (_id, donut) {
        Donuts.update(_id, {
            $set: {
                dimension: donut.dimension,
                bitten: donut.bitten
            }
        });
    },

    'donut.remove' (_id){
        Donuts.remove(_id);
    },

    'donut.get' (_id) {
        return Donuts.findOne(_id);
    }
});