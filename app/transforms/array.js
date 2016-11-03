// import Transform from 'ember-data/transform';
// import DS from 'ember-data';
// import Ember from 'ember-data';
// import app from 'ember-data';
// DS.ArrayTransform = DS.Transform.extend({
//   deserialize: function(serialized) {
//     return (Ember.typeOf(serialized) == "array")
//         ? serialized
//         : [];
//   },
//
//   serialize: function(deserialized) {
//     var type = Ember.typeOf(deserialized);
//     if (type == 'array') {
//         return deserialized
//     } else if (type == 'string') {
//         return deserialized.split(',').map(function(item) {
//             return jQuery.trim(item);
//         });
//     } else {
//         return [];
//     }
//   }
// });
//
// App.register("transform:array", DS.ArrayTransform);
