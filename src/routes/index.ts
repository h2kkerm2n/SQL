import express from 'express';
import fs from 'fs';
import createUser from './user/createUser';
import getUser from './user/getUser';
import getUsers from './user/getUsers';
const router = express.Router();
// var userRoutes: string[] = [];

// fs.readdirSync(__dirname + '/user').forEach(function (file) {
//   router.use('/users', async () => {
//     return await import(__dirname.concat('\\user\\').concat(file));
//   });
// });
// console.log(userRoutes.toString());

router.use('/users', [createUser, getUser, getUsers]);

export default router;
