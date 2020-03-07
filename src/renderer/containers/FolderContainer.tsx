import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { Folder } from '../types/folder';
import Select from '../components/Select';
import { setFolder } from '../actions/folderActions';

const FolderContainer = (): JSX.Element => {
    const folder = useSelector((state: RootState) => state.folder.folder);
    const dispatch = useDispatch();

    const onSetFolder = (folder: Folder) => {
        dispatch(setFolder(folder));
    };

    return <Select folder={folder} setFolder={onSetFolder} />;
};

export default FolderContainer;
