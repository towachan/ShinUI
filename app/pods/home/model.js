import DS from 'ember-data';

export default DS.Model.extend({
  staffName: DS.attr('String'),
  staffId: DS.attr('number')
});
