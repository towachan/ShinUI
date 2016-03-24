import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('sysInfo');

  this.route('leave', function() {
    this.route('details', {path: "details/:leaveId"});
    this.route('create');
    this.route('cancel');
    this.route('approve');
    this.route('list', {path: "list/:category/:type/:status"});
  });
  this.route('quickApprove');
  this.route('dashboard', function() {
    this.route('leave');
  });
  this.route('report');
  this.route('support');
  this.route('config');
});

export default Router;
