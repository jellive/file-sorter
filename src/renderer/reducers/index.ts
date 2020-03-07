import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { folderReducer } from './folderReducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    folder: folderReducer
});

export type RootState = ReturnType<typeof rootReducer>;
