import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr('String'),
  userType: DS.attr('boolean')
});
