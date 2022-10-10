import express from 'express';
import dotenv from 'dotenv';
import {Response , Request} from 'express';
import defaultNameRouter from './routes/index';
import mustache from 'mustache-express';
import path from 'path';
dotenv.config();

const server = express();
server.use(express.static(path.join(__dirname , '../public')));
server.use(express.urlencoded({extended:true}));

server.set('view engine' , 'mustache');
server.set('views' , path.join(__dirname , 'views'));
server.engine('mustache' , mustache());

server.use(defaultNameRouter);

server.use((req: Request , res: Response)=>{
    res.render('pages/404');
})

server.listen(process.env.PORT);