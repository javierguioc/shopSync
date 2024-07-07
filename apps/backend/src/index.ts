import express from 'express';
import cartRoutes from './adapters/routes/cartRoutes';
import productRoutes from './adapters/routes/productRoutes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', cartRoutes);
app.use('/api', productRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
