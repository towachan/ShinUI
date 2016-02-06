import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  leaveId: DS.attr('string'),
  status: DS.attr('string'),
  type: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date')
});
