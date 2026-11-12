import { cp, mkdir, rm } from 'node:fs/promises';

const source = new URL('../brotex-os/', import.meta.url);
const destination = new URL('../www/', import.meta.url);
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
console.log('BROTEX OS web app copied into www/');
