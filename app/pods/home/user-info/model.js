import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  leaveEntitlements: DS.hasMany('leaveEntitlement'),
  totalLeave: DS.attr('number')
});
