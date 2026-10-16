import { cp, mkdir } from 'node:fs/promises';

const source = 'src/assets/images';
const destination = 'dist/src/assets/images';

await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });

console.log(`Copied ${source} -> ${destination}`);
