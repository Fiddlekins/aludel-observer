import {ethers} from 'ethers';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const rootPath = path.join(fileURLToPath(import.meta.url), '..', '..', '..');
const infuraPath = path.join(rootPath, 'secrets', 'infura.json');

let provider;

export default function getProvider() {
	if (!provider) {
		const infuraConfig = JSON.parse(fs.readFileSync(infuraPath, 'utf8'));
		const url = infuraConfig.endpoints.https;
		provider = new ethers.providers.JsonRpcProvider(url);
	}
	return provider;
}
