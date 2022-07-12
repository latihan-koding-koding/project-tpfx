// import

import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

// vars

const filename = './index.php';

// export

const api = async (_: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(await fs.readFileSync(filename, 'utf-8'));
  res.end();
};

export default api;