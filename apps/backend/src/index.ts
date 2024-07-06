import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true, 
}));
app.use('/products', productRoutes);
// app.use('/cart', cartRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
