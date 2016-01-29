
exports.up = function(knex, Promise) {
  return knex.schema.createTable('thieves',
function(table){
  table.increments();
  table.string('name');
  table.string('image');
  table.integer('explosives');
  table.integer('safe_cracking');
  table.integer('marksmanship');
  table.integer('stealth');
  table.integer('charisma');
  table.integer('driving');
}).then(function(){
  return knex.schema.createTable('banks', function(table){
    table.increments();
    table.string('image');
    table.string('name');
    table.integer('security');
    table.integer('reward');
    table.integer('accessibility');
  });
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('thieves')
  .then(function(){
    return knex.schema.dropTable('banks');
  });
};
