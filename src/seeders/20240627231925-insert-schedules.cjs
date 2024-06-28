'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Schedules', [{"schedule_id":1,"start_date":"2024-03-07 03:33:37","end_date":"2023-06-03 10:25:38","location_id":1,"shift_id":1,"guard_id":1},
      {"schedule_id":2,"start_date":"2024-04-26 07:44:33","end_date":"2023-11-10 11:37:24","location_id":2,"shift_id":1,"guard_id":2},
      {"schedule_id":3,"start_date":"2024-05-22 23:37:50","end_date":"2024-06-28 05:06:53","location_id":3,"shift_id":1,"guard_id":3},
      {"schedule_id":4,"start_date":"2024-03-30 12:13:31","end_date":"2024-05-20 00:48:26","location_id":4,"shift_id":2,"guard_id":4},
      {"schedule_id":5,"start_date":"2024-04-26 07:04:41","end_date":"2023-06-06 13:50:17","location_id":5,"shift_id":2,"guard_id":5},
      {"schedule_id":6,"start_date":"2024-03-12 03:11:59","end_date":"2023-08-24 20:39:06","location_id":6,"shift_id":1,"guard_id":6},
      {"schedule_id":7,"start_date":"2024-03-06 22:17:54","end_date":"2023-09-27 09:44:44","location_id":7,"shift_id":3,"guard_id":7},
      {"schedule_id":8,"start_date":"2024-05-18 04:21:05","end_date":"2024-03-27 17:11:12","location_id":8,"shift_id":3,"guard_id":8},
      {"schedule_id":9,"start_date":"2024-04-25 23:59:59","end_date":"2023-09-27 18:34:53","location_id":9,"shift_id":1,"guard_id":9},
      {"schedule_id":10,"start_date":"2024-04-02 20:49:59","end_date":"2023-10-22 14:16:20","location_id":10,"shift_id":1,"guard_id":10},
      {"schedule_id":11,"start_date":"2024-05-22 16:07:30","end_date":"2024-02-06 00:05:58","location_id":11,"shift_id":3,"guard_id":11},
      {"schedule_id":12,"start_date":"2024-03-18 01:19:40","end_date":"2023-10-06 23:59:28","location_id":12,"shift_id":1,"guard_id":12},
      {"schedule_id":13,"start_date":"2024-04-08 04:20:55","end_date":"2023-08-26 21:35:46","location_id":13,"shift_id":3,"guard_id":13},
      {"schedule_id":14,"start_date":"2024-05-11 12:16:28","end_date":"2024-06-11 20:22:38","location_id":14,"shift_id":2,"guard_id":14},
      {"schedule_id":15,"start_date":"2024-04-14 08:38:41","end_date":"2023-12-21 10:06:18","location_id":15,"shift_id":2,"guard_id":15},
      {"schedule_id":16,"start_date":"2024-03-14 01:32:52","end_date":"2023-11-27 07:48:07","location_id":16,"shift_id":3,"guard_id":16},
      {"schedule_id":17,"start_date":"2024-03-18 07:34:31","end_date":"2023-07-19 20:59:59","location_id":17,"shift_id":3,"guard_id":17},
      {"schedule_id":18,"start_date":"2024-03-16 21:30:48","end_date":"2023-08-08 19:44:08","location_id":18,"shift_id":1,"guard_id":18},
      {"schedule_id":19,"start_date":"2024-04-19 10:31:22","end_date":"2023-11-26 02:25:57","location_id":19,"shift_id":3,"guard_id":19},
      {"schedule_id":20,"start_date":"2024-04-13 04:22:42","end_date":"2023-10-18 18:10:36","location_id":20,"shift_id":1,"guard_id":20}], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schedules', null, {});
  }
};