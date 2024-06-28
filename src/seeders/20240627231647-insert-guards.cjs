'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Guards', [{"guard_id":1,"first_name":"Lari","last_name":"Campkin","cellphone":"925 130 5171","email":"lcampkin0@unesco.org","address":"Suite 47","user_id":1},
      {"guard_id":2,"first_name":"Joellyn","last_name":"Pendell","cellphone":"596 201 0572","email":"jpendell1@networksolutions.com","address":"16th Floor","user_id":2},
      {"guard_id":3,"first_name":"Cora","last_name":"Hiddy","cellphone":"135 590 2668","email":"chiddy2@symantec.com","address":"Suite 39","user_id":3},
      {"guard_id":4,"first_name":"Gunther","last_name":"Antonowicz","cellphone":"918 615 1774","email":"gantonowicz3@google.pl","address":"Suite 84","user_id":4},
      {"guard_id":5,"first_name":"Tommy","last_name":"Figures","cellphone":"850 486 6744","email":"tfigures4@census.gov","address":"Room 1087","user_id":5},
      {"guard_id":6,"first_name":"Hermon","last_name":"Swains","cellphone":"285 114 1486","email":"hswains5@nymag.com","address":"Suite 88","user_id":6},
      {"guard_id":7,"first_name":"Maire","last_name":"Sunners","cellphone":"900 288 3226","email":"msunners6@google.com","address":"Apt 882","user_id":7},
      {"guard_id":8,"first_name":"Bertram","last_name":"Seligson","cellphone":"249 716 8919","email":"bseligson7@topsy.com","address":"Room 1227","user_id":8},
      {"guard_id":9,"first_name":"Rancell","last_name":"Hasloch","cellphone":"805 260 6861","email":"rhasloch8@pen.io","address":"11th Floor","user_id":9},
      {"guard_id":10,"first_name":"Vale","last_name":"Jurewicz","cellphone":"884 579 4706","email":"vjurewicz9@github.io","address":"Room 145","user_id":10},
      {"guard_id":11,"first_name":"King","last_name":"Fowler","cellphone":"530 164 3737","email":"kfowlera@fema.gov","address":"Room 1355","user_id":11},
      {"guard_id":12,"first_name":"Heddie","last_name":"Lyver","cellphone":"330 203 5381","email":"hlyverb@latimes.com","address":"Room 1031","user_id":12},
      {"guard_id":13,"first_name":"Estelle","last_name":"Searl","cellphone":"859 366 1736","email":"esearlc@biblegateway.com","address":"Suite 33","user_id":13},
      {"guard_id":14,"first_name":"Miller","last_name":"Fealty","cellphone":"530 162 1178","email":"mfealtyd@redcross.org","address":"PO Box 79151","user_id":14},
      {"guard_id":15,"first_name":"Galven","last_name":"Johnsson","cellphone":"345 204 9671","email":"gjohnssone@google.com.hk","address":"Suite 86","user_id":15},
      {"guard_id":16,"first_name":"Elly","last_name":"Johnsson","cellphone":"103 139 6419","email":"ejohnssonf@sina.com.cn","address":"12th Floor","user_id":16},
      {"guard_id":17,"first_name":"Aleda","last_name":"Laurenzi","cellphone":"535 510 7645","email":"alaurenzig@lycos.com","address":"Apt 218","user_id":17},
      {"guard_id":18,"first_name":"Cletus","last_name":"Simants","cellphone":"451 324 3381","email":"csimantsh@so-net.ne.jp","address":"Suite 6","user_id":18},
      {"guard_id":19,"first_name":"Hortensia","last_name":"Bown","cellphone":"932 138 7626","email":"hbowni@tumblr.com","address":"Apt 813","user_id":19},
      {"guard_id":20,"first_name":"Stacy","last_name":"Endricci","cellphone":"527 475 3495","email":"sendriccij@latimes.com","address":"17th Floor","user_id":20}], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Guards', null, {});
  }
};
