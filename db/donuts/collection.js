import {Mongo} from "meteor/mongo";
import DonutSchema from './schema'

const Donuts = new Mongo.Collection('donuts');

Donuts.attachSchema(DonutSchema);

export default Donuts;