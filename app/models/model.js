import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    type: DS.belongTo('type'),
    //type: DS.attr('string'),
    producer: DS.attr('string'),
    price: DS.attr('number')
});
