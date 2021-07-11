import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const rootPath = path.join(fileURLToPath(import.meta.url), '..', '..');
const infuraPath = path.join(rootPath, 'secrets', 'crucibleId');

let crucibleId;

export default function getCrucibleId() {
	if (!crucibleId) {
		crucibleId = fs.readFileSync(infuraPath, 'utf8').trim();
	}
	return crucibleId;
}
