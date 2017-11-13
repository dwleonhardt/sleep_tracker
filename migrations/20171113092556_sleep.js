
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('sleep', (table) => {
    table.increments('id').primary().unsigned();
    table.timestamp('start').notNullable().defaultTo(knex.fn.now());
    table.timestamp('end').notNullable().defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('daily_items');
};
