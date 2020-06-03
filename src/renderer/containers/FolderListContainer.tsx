import * as React from 'react';
import FolderList from '../components/FolderList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { Folder } from '../types/folder';
import { setFolder, addFolder, delFolder } from '../actions/folderActions';

const FolderListContainer = (): JSX.Element => {
    const folder = useSelector((state: RootState) => state.folder);
    const dispatch = useDispatch();

    const onSetFolder = (folder: Folder) => dispatch(setFolder(folder));

    const onAddFolder = (folder: Folder) => {
        console.log('folder', folder);
        dispatch(addFolder(folder));
    };

    const onDelFolder = (folder: Folder) => {
        dispatch(delFolder(folder));
    };

    return (
        <FolderList
            folder={folder.folder}
            selectedFolder={folder.selectedFolder}
            setFolder={onSetFolder}
            addFolder={onAddFolder}
            delFolder={onDelFolder}
        />
    );
};

export default FolderListContainer;
