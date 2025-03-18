import express from 'express';
import { protectRoute } from '../middlewares/auth.middleware.js';
import { getUsersForSidebar , getMessages , sendMessages } from '../controllers/message.controller.js';

const messageRoute = express.Router();

messageRoute.get("/users",protectRoute,getUsersForSidebar);
messageRoute.get("/:id",protectRoute,getMessages);

messageRoute.post("/send/:id",protectRoute,sendMessages)

export default  messageRoute;