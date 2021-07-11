import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const rootPath = path.join(fileURLToPath(import.meta.url), '..', '..');
const outputFolderPath = path.join(rootPath, 'output');

const fileNames = {};

export default async function saveHistory(name, history) {
	if (!fileNames[name]) {
		fileNames[name] = `${name} - ${Date.now()}.tsv`;
	}
	const fileText = history.map(row => row.join('\t')).join('\n');
	await fs.mkdir(outputFolderPath, {recursive: true});
	await fs.writeFile(path.join(outputFolderPath, fileNames[name]), fileText, 'utf8');
}
