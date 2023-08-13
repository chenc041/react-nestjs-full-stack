import { exec } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repositoryUrl = 'https://github.com/chenc041/nestjs-starter';

const exist = existsSync(join(__dirname, '../packages/api'));
if (exist) {
  console.log('api folder already exists');
} else {
  exec(`cd ./packages && git clone ${repositoryUrl} api && cd api && rm -rf .git && rm -rf .github`, (err, stdout, stderr) => {
    if (err) {
      console.error(`git clone ${repositoryUrl} error ==>`, err)
    }
    console.log('stdout ==>', stdout);
  })
}
export {}
