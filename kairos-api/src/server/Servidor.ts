import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import './services/YupService';
import { rotiadorPrivado } from './routes';


const servidor = express();

servidor.use(cors({credentials: true, origin: true}));
servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use('/api/admin', rotiadorPrivado);
servidor.use(express.urlencoded({ extended: true }));

export { servidor };