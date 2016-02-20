import DS from 'ember-data';

export default DS.Model.extend({
  infoId: DS('number'),
  infoMsg: DS('string')
});
