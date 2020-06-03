import { Folder } from '../types/folder';

export const SET_FOLDER = 'folder/SET_FOLDER';

export const ADD_FOLDER = 'folder/ADD_FOLDER';
export const DEL_FOLDER = 'folder/DEL_FOLDER';

export const setFolder = (folder: Folder) => {
    console.log('setFolder', folder);
    return <const>{
        folder,
        type: SET_FOLDER
    };
};

export const addFolder = (folder: Folder) => {
    console.log('addFolder', folder);
    return <const>{
        folder,
        type: ADD_FOLDER
    };
};

export const delFolder = (folder: Folder) => {
    return <const>{
        folder,
        type: DEL_FOLDER
    };
};

export type FolderAction = ReturnType<typeof setFolder | typeof addFolder | typeof delFolder>;
