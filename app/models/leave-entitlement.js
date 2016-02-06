import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  unit: DS.attr('string'),
  entitlement: DS.attr('number'),
  pending: DS.attr('number'),
  taken: DS.attr('number'),
  balance: DS.attr('number'),
  expirationDate: DS.attr('date')
});
