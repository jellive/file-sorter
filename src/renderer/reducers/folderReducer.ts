import { Reducer } from 'redux';

import { SET_FOLDER, FolderAction } from '../actions/folderActions';

import { Folder } from '../types/folder';

export type FolderState = {
    readonly folder: Folder;
};

const defaultState: FolderState = {
    folder: ''
};

export const folderReducer = (state = defaultState, action: FolderAction) => {
    switch (action.type) {
        case SET_FOLDER:
            return {
                ...state,
                folder: action.folder
            };
        default:
            return state;
    }
};
