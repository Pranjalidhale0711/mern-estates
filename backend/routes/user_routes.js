import express from 'express'
import { test,updateUser,deleteUser,getUserListings } from '../controller/user_controller.js';
import {verifyToken} from '../utilis/verifyUser.js'


const router=express.Router();

router.get('/test',test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/listings/:id',verifyToken,getUserListings)

export default router;