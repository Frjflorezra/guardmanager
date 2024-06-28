'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{"user_id":1,"username":"gbuddle0","password":"sT0\\OSqEN","role":"guard","created_date":"2023-11-21 16:48:17"},
      {"user_id":2,"username":"abollin1","password":"vA5!+sYfHS#+","role":"admin","created_date":"2023-10-22 01:31:28"},
      {"user_id":3,"username":"alydden2","password":"nT5={Vgv@AzQ","role":"admin","created_date":"2024-03-21 14:30:15"},
      {"user_id":4,"username":"afoulds3","password":"iV8/6<yp","role":"admin","created_date":"2024-02-21 00:34:25"},
      {"user_id":5,"username":"ahorwell4","password":"cJ2/)ggG","role":"admin","created_date":"2023-11-13 11:23:53"},
      {"user_id":6,"username":"acoales5","password":"wI4`*auk`/%","role":"admin","created_date":"2024-02-24 08:01:47"},
      {"user_id":7,"username":"gchampkin6","password":"tG4.&{tm2KL","role":"guard","created_date":"2024-06-01 14:46:38"},
      {"user_id":8,"username":"grickcord7","password":"kK9}8P\\jiF=W","role":"guard","created_date":"2024-04-13 09:31:36"},
      {"user_id":9,"username":"astains8","password":"xV9\"XM0rnotW\\2K","role":"admin","created_date":"2023-12-04 17:11:50"},
      {"user_id":10,"username":"guttermare9","password":"gO7\"lGMX&+Dl","role":"guard","created_date":"2023-09-02 02:51:50"},
      {"user_id":11,"username":"gosullivana","password":"mW0\"~K=WfcQdX","role":"guard","created_date":"2024-03-04 14:06:50"},
      {"user_id":12,"username":"aminchib","password":"xU8~IAu(m87&wKM","role":"admin","created_date":"2024-03-06 10:23:11"},
      {"user_id":13,"username":"adruittc","password":"yN8|%kc\"'","role":"admin","created_date":"2024-03-08 14:58:58"},
      {"user_id":14,"username":"abrothertond","password":"fI8*{LEX)o=","role":"admin","created_date":"2024-06-09 06:32:51"},
      {"user_id":15,"username":"aupcotte","password":"fO1{0yVz","role":"admin","created_date":"2023-12-27 14:29:56"},
      {"user_id":16,"username":"gcogglesf","password":"aZ9'MWOkL06O`jL","role":"guard","created_date":"2024-01-15 17:18:50"},
      {"user_id":17,"username":"achampkeng","password":"jE6!o$h|&d","role":"admin","created_date":"2023-11-30 14:41:31"},
      {"user_id":18,"username":"gfostonh","password":"qE1?AQn|zWioc,","role":"guard","created_date":"2024-03-18 14:54:58"},
      {"user_id":19,"username":"abeasleyi","password":"sN6\"S=w!N","role":"admin","created_date":"2024-01-16 20:23:00"},
      {"user_id":20,"username":"aswiggj","password":"hC2*U,dw2uM.mh<1","role":"admin","created_date":"2024-02-22 03:48:37"}], {})
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
