import { Action, ActionCreator } from 'redux';

export const SET_FOLDER = 'SET_FOLDER';

export interface SetFolderAction extends Action {
    type: 'SET_FOLDER';
}

export const setFolder: ActionCreator<SetFolderAction> = () => ({
    type: SET_FOLDER
});

export type FileAction = SetFolderAction;
