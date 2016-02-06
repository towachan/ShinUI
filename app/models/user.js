import DS from 'ember-data';

export default DS.Model.extend({
  staffId: DS.attr('string'),
  password: DS.attr('string'),
  staffName: DS.attr('string'),
  userType: DS.attr('number'),
  title: DS.attr('string'),
  leaves: DS.hasMany('leave')
});
