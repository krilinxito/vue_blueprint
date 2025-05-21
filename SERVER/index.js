import express from 'express';
import cors from 'cors';
import {PORT} from './config/config.js';
import indexRoutes from './routes/index.routes.js';
import paisRoutes from './routes/pais.routes.js';
import ciudadRoutes from './routes/ciudad.routes.js';


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(indexRoutes);
app.use(paisRoutes);
app.use(ciudadRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});