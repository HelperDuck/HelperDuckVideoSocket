import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('🦆🦆🦆🦆🦆Quack Quack Quack🦆🦆🦆🦆🦆');
});

export default router;
