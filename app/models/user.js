import Model from 'ember-data/model';
import DS from 'ember-data';
export default DS.Model.extend({
    game: DS.belongsTo('game')
});
