import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Api request body: ', req.body);
  console.log('Api username: ', req.body.username);
  console.log('Api request cookies: ', req.cookies);
  res.statusCode = 200; // you can set HTTP response code this way
  res.json({ name: 'Ramit Sharma' });
}
