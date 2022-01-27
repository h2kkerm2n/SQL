import express, { Request, Response } from 'express';
import Post from '../../entities/Post';
import { v4 as uuidV4 } from 'uuid';
import User from '../../entities/user';
const router = express.Router();

interface PostInPut {
  autorId: string;
  title: string;
  summary: string;
  content: string;
}

router.post('/', async (req: Request, res: Response) => {
  const { authorId, title, summary, content } = req.body;
  const user = await User.findOne({ id: authorId });
  if (!user) {
    return res.send({ message: 'no such user found' });
  }

  const post = Post.create({
    id: uuidV4(),
    authorId: authorId,
    title: title,
    summary: summary,
    content: content,
    published: false
  });

  const newPost = await post.save();
  if (!newPost) {
    throw new Error();
    return res.send();
  }
});

export default router;
