import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { Folder } from '../types/folder';
import Select from '../components/Select';
import { setFolder } from '../actions/folderActions';

const FolderContainer = (): JSX.Element => {
    const folder = useSelector((state: RootState) => state.folder.folder);
    const selectedFolder = useSelector((state: RootState) => state.folder.selectedFolder);
    const dispatch = useDispatch();

    const onSetFolder = (folder: Folder) => {
        console.log('setFolder', folder);
        dispatch(setFolder(folder));
    };

    return <Select folder={folder} selectedFolder={selectedFolder} setFolder={onSetFolder} />;
};

export default FolderContainer;
