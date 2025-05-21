import express from 'express';
import cors from 'cors';
import {PORT} from './config/config.js';
import indexRoutes from './routes/index.routes.js';
import autorRoutes from './routes/autor.routes.js';
import libroRoutes from './routes/libro.routes.js';


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(indexRoutes);
app.use(autorRoutes);
app.use(libroRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});