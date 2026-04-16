import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' });
