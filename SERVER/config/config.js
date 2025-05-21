import getPort  from 'get-port';

export const PORT = await getPort({port: [...Array(100).keys()].map(i => 3000 + i)});