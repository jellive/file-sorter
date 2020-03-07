import { Action, ActionCreator } from 'redux';
import { Folder } from '../types/folder';

export const SET_FOLDER = 'folder/SET_FOLDER';

export const setFolder = (folder: Folder) => {
    return <const>{
        folder,
        type: SET_FOLDER
    };
};

type SetFolderAction = ReturnType<typeof setFolder>;

export type FolderAction = SetFolderAction;
