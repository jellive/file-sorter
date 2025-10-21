import { folderReducer, initialState } from '../../src/renderer/reducers/folderReducer';
import * as folderActions from '../../src/renderer/actions/folderActions';

describe('folderReducer', () => {
    it('should return the initial state', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(folderReducer(undefined, { type: 'UNKNOWN_ACTION' } as any)).toEqual(initialState);
    });

    it('should handle ADD_FOLDER', () => {
        const action = folderActions.addFolder('/test/path');
        const newState = folderReducer(initialState, action);

        expect(newState.selectedFolder).toHaveLength(1);
        expect(newState.selectedFolder[0]).toBe('/test/path');
    });

    it('should handle DEL_FOLDER', () => {
        const stateWithFolder = {
            folder: '/root',
            selectedFolder: ['/test/path'],
        };

        const action = folderActions.delFolder('/test/path');
        const newState = folderReducer(stateWithFolder, action);

        expect(newState.selectedFolder).toHaveLength(0);
    });
});
