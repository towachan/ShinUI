import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('home', function() {
    this.route('userInfo');
    this.route('leaves');
    this.route('leaveDetail',{path:"leaveDetail/:leaveId"});
	this.route('createLeave');
  });
});

export default Router;
