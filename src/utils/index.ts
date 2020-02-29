import * as fs from 'fs-extra';

export const readDir = (dir: string) => {
    return fs.readdirSync(dir);
};

export const readFile = (dir: string, file: string) => {
    return fs.readFileSync(dir + file);
};
