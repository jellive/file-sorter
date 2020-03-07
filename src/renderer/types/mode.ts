export enum Mode {
    DEFAULT = 0,
    DIVIDE_CHAR = 1,
    POP_LARGEST_FILE_IN_DIR = 2
}

export enum Result {
    success = 0,
    error = 1
}

export type SelectResult = {
    result: Result;
    msg: string;
};
