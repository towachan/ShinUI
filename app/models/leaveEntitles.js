import DS from 'ember-data';

export default DS.Model.extend({
	Annual: DS.belongsTo('leaveEntitlement'),
	Sick: DS.belongsTo('leaveEntitlement')
});
