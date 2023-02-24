import { Router, Request, Response } from 'express';

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
  res.send({
    message: 'Hello World',
  });
});

export default router;
