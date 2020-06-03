import * as fs from 'fs-extra';
import { Mode, SelectResult, Result } from '../renderer/types/mode';
import { File } from '../renderer/types/folder';
import * as path from 'path';

export const readDir = (dir: string) => {
    return fs.readdirSync(dir);
};

export const execute = async (
    dir: string,
    mode: Mode,
    isExecute: boolean = false
): Promise<SelectResult> => {
    if (!dir) {
        return {
            result: Result.error,
            msg: '폴더부터 골라보시는 게 어때요?'
        };
    }
    switch (mode) {
        case Mode.DIVIDE_CHAR:
            return {
                result: Result.error,
                msg: '해당 기능이 없으요..'
            };
        case Mode.POP_LARGEST_FILE_IN_DIR:
            const list = readDir(dir);
            const sizeArr = list.map(
                (file: string): File => {
                    return {
                        name: file,
                        size: fs.statSync(`${dir}/${file}`).size
                    };
                }
            );
            const compareSize = (a: File, b: File): number => {
                if (a.size < b.size) {
                    return 1;
                }
                if (a.size > b.size) {
                    return -1;
                }
                return 0;
            };
            sizeArr.sort(compareSize);
            return !isExecute
                ? {
                    result: Result.success,
                    msg: JSON.stringify({ dir: path.join(dir, '..'), arr: sizeArr })
                }
                : fs
                      .rename(
                          `${dir}/${sizeArr[0].name}`,
                          `${path.join(dir, '..')}/${sizeArr[0].name}`
                      )
                      .then(() => {
                          return fs.remove(dir);
                      })
                      .then(() => {
                          return {
                              result: Result.success,
                              msg: `${sizeArr[0].name} 파일을 ${path.join(dir, '..')}로 옮겼습니다!`
                          };
                      })
                      .catch(e => {
                          return {
                              result: Result.error,
                              msg: e.message
                          };
                      });

        default:
            return {
                result: Result.error,
                msg: '타입을 안고르셨네요?'
            };
    }
};
