import { SET_FOLDER, ADD_FOLDER, DEL_FOLDER, FolderAction } from '../actions/folderActions';

import { Folder } from '../types/folder';

export type FolderState = {
    readonly folder: Folder;
    readonly selectedFolder: Folder[];
};

const defaultState: FolderState = {
    folder: '',
    selectedFolder: []
};

export const folderReducer = (state = defaultState, action: FolderAction) => {
    console.log('action', action);
    switch (action.type) {
        case SET_FOLDER:
            return {
                ...state,
                folder: action.folder
            };
        case ADD_FOLDER:
            return {
                ...state,
                selectedFolder: state.selectedFolder.concat(action.folder)
            };
        case DEL_FOLDER:
            const index = state.selectedFolder.indexOf(action.folder);
            console.log('index', index);
            return {
                ...state,
                selectedFolder: state.selectedFolder.splice(index, 0)
            };
        default:
            return state;
    }
};
