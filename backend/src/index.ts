import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import reportRoutes from './presentation/routes/reportRoutes';
import { connectDB } from './config/db';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/reports', reportRoutes);



const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

export default app;