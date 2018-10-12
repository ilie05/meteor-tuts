import { Roles } from 'meteor/alanning:roles';

export default class Security {
    static checkRole(userId, role) {
        if (!this.hasRole(userId, role)) {
            throw new Meteor.Error('not-authorized');
        }
    }
    static hasRole(userId, role) {
        return Roles.userIsInRole(userId, role);
    }
    static checkLoggedIn(userId) {
        if (!userId){
            return false;
        }       
        return true;
    }

    // add other business logic checks here that you use throughout the app
    // something like: isUserAllowedToSeeDocument()
    // always keep decoupling your code if this class gets huge.
}