import { SET_FOLDER, ADD_FOLDER, DEL_FOLDER, FolderAction } from '../actions/folderActions';

import { Folder } from '../types/folder';

export type FolderState = {
    readonly folder: Folder;
    readonly selectedFolder: Folder[];
};

export const initialState: FolderState = {
    folder: '',
    selectedFolder: [],
};

export const folderReducer = (state = initialState, action: FolderAction): FolderState => {
    console.log('action', action);
    switch (action.type) {
        case SET_FOLDER:
            return {
                ...state,
                folder: action.folder,
            };
        case ADD_FOLDER:
            return {
                ...state,
                selectedFolder: state.selectedFolder.concat(action.folder),
            };
        case DEL_FOLDER:
            return {
                ...state,
                selectedFolder: state.selectedFolder.filter((f) => f !== action.folder),
            };
        default:
            return state;
    }
};
