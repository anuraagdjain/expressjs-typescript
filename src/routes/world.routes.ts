import { Router } from 'express';

const router = Router();

router.get('/world', (req, res) => {
  return res.json({ success: true, message: 'hello world 🚀' });
});

export default router;
