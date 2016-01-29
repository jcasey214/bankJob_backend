
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
      description: 'An infamous American gangster in the Depression-era United States, who operated with a group of men known by some as the Dillinger Gang or Terror Gang that were, among other activities, accused of robbing 24 banks and four police stations.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/John_Dillinger_mug_shot.jpg',
      explosives: 3,
      safe_cracking: 2,
      marksmanship: 5,
      stealth: 10,
      charisma: 9,
      driving: 2,
    }),
    knex('thieves').insert({
      name: 'Clyde Barrow',
      description: 'Paroled in February 2, 1932, Barrow emerged from Eastham a hardened and bitter criminal. His sister Marie said, "Something awful sure must have happened to him in prison, because he wasn\'t the same person when he got out."',
      image: 'http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE1ODA0OTcxNDIwOTc2NjUz.jpg',
      explosives: 3,
      safe_cracking: 2,
      marksmanship: 9,
      stealth: 2,
      charisma: 5,
      driving: 9,
    }),
    knex('thieves').insert({
      name: 'Bonnie Parker',
      description: 'Along with Clyde Barrow, she traveled the central United States with their gang during the Great Depression, robbing and killing people. ',
      image: 'http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2NDE1NzU1Nzg3.jpg',
      explosives: 6,
      safe_cracking: 4,
      marksmanship: 6,
      stealth: 4,
      charisma: 7,
      driving: 3,
    }),
    knex('thieves').insert({
      name: 'Ma Barker',
      description: 'After Barker was killed during a shoot-out with the FBI, she gained a reputation as a ruthless crime matriarch who controlled and organized her sons\' crimes',
      image: 'http://assets.nydailynews.com/polopoly_fs/1.1141890!/img/httpImage/image.jpg_gen/derivatives/landscape_635/barker23n-5-web.jpg',
      explosives: 9,
      safe_cracking: 3,
      marksmanship: 7,
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
      description: 'A commercial bank in Northern Ireland. Northern Bank was one of the oldest banks in Ireland having been formed in 1809, and formed part of one of the Big Four banks in Ireland.',
      security: 7,
      reward: 6,
      accessibility: 7
    }),
      knex('banks').insert({
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Banco_Central_argentina.JPG',
      name: 'Banco Central',
      description: 'Brazil\'s central bank. It was established on December 31, 1964.',
      security: 4,
      reward: 4,
      accessibility: 9
    }),
      knex('banks').insert({
      image: 'http://static1.therichestimages.com/cdn/450/304/90/cw/wp-content/uploads/2013/12/knightsbridge-security-deposit-19871.jpg',
      name: 'Knightsbridge Security Deposit',
      description: 'A large wealthy bank in Knightsbridge, England, part of the City of Westminster in London.',
      security: 3,
      reward: 6,
      accessibility: 4
    }),
      knex('banks').insert({
      image: 'http://media-cdn.tripadvisor.com/media/photo-s/06/f4/e0/ca/museo-del-banco-central.jpg',
      name: 'Cornerstone Bank',
      description: 'A small town bank in Waco, TX stocked with oil money.',
      security: 9,
      reward: 9,
      accessibility: 6
    })
  ]);
});
};
