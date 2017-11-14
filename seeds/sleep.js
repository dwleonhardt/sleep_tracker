
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sleep').del()
    .then(function () {
      return knex('sleep').insert([
        {
          id: 1,
          start: new Date('2016-06-26T14:26:16.000Z'),
          end: new Date ('2016-06-26T14:26:16.000Z')
        },
        {
          id: 2,
          start: new Date('2017-07-26T14:26:16.000Z'),
          end: new Date ('2017-06-26T14:26:16.000Z')
        },
        {
          id: 3,
          start: new Date('2017-07-26T14:26:16.000Z'),
          end: new Date ('2017-07-26T14:26:16.000Z')
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('sleep_id_seq', (SELECT MAX(id) FROM sleep))");
    });
};
