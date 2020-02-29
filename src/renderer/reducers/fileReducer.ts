import { Reducer } from 'redux';

import { SET_FOLDER, FileAction } from '../actions/fileActions';

export interface FileState {
    readonly value: any;
}

const defaultState: FileState = {
    value: []
};

export const counterReducer: Reducer<FileState> = (state = defaultState, action: FileAction) => {
    switch (action.type) {
        case SET_FOLDER:
            return {
                ...state,
                value: state.value + 1
            };
        default:
            return state;
    }
};
