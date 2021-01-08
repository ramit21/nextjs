import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Api request body: ', req.body);
  console.log('Api request cookies: ', req.cookies);

  if(!req.body){
    res.statusCode = 404
    res.end;
  }

  const {username, password} = req.body;
  console.log('username:', username, ', password', password);
  res.statusCode = 200; // you can set HTTP response code this way
  res.setHeader('Set-Cookie','key=value;');
  res.json({ author: 'Ramit Sharma'});
}
