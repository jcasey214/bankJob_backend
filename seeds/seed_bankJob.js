
exports.seed = function(knex, Promise) {
  return knex('thieves').del()
  .then(function(){
    return knex('banks').del();
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "thieves_id_seq" RESTART WITH 1');
  }).then(function(){
    return knex.raw('ALTER SEQUENCE "banks_id_seq" RESTART WITH 1');
  }).then(function(){
    return Promise.all([
      knex('thieves').insert({
      name: 'John Dillinger',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/John_Dillinger_mug_shot.jpg',
      explosives: 4,
      safe_cracking: 6,
      marksmanship: 5,
      stealth: 7,
      charisma: 9,
      driving: 2,
    }),
    knex('thieves').insert({
      name: 'Clyde Barrow',
      image: 'http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE1ODA0OTcxNDIwOTc2NjUz.jpg',
      explosives: 3,
      safe_cracking: 4,
      marksmanship: 8,
      stealth: 2,
      charisma: 7,
      driving: 9,
    }),
    knex('thieves').insert({
      name: 'Bonnie Parker',
      image: 'http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2NDE1NzU1Nzg3.jpg',
      explosives: 7,
      safe_cracking: 3,
      marksmanship: 6,
      stealth: 3,
      charisma: 8,
      driving: 5,
    }),
    knex('thieves').insert({
      name: 'Ma Barker',
      image: 'http://assets.nydailynews.com/polopoly_fs/1.1141890!/img/httpImage/image.jpg_gen/derivatives/landscape_635/barker23n-5-web.jpg',
      explosives: 9,
      safe_cracking: 6,
      marksmanship: 5,
      stealth: 2,
      charisma: 4,
      driving: 5,
    })
  ]);
}).then(function(){
  return Promise.all([
    knex('banks').insert({
      image: 'http://www.ocalabuyersagent.com/wp-content/uploads/2011/11/OcalaNatBank1911.jpg',
      name: 'Northern Bank',
      security: 7,
      reward: 6,
      accessibility: 7
    }),
      knex('banks').insert({
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Banco_Central_argentina.JPG',
      name: 'Banco Central',
      security: 4,
      reward: 4,
      accessibility: 9
    }),
      knex('banks').insert({
      image: 'http://static1.therichestimages.com/cdn/450/304/90/cw/wp-content/uploads/2013/12/knightsbridge-security-deposit-19871.jpg',
      name: 'Knightsbridge Security Deposit',
      security: 3,
      reward: 6,
      accessibility: 4
    }),
      knex('banks').insert({
      image: 'http://media-cdn.tripadvisor.com/media/photo-s/06/f4/e0/ca/museo-del-banco-central.jpg',
      name: 'Cornerstone Bank',
      security: 9,
      reward: 9,
      accessibility: 6
    })
  ]);
});
};
