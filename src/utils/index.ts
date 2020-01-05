import * as fs from 'fs-extra';

export const readDir = (dir: string) => {
    return fs.readdirSync(dir);
};
