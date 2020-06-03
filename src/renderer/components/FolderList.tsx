import * as React from 'react';
import * as fs from 'fs-extra';
import { readDir } from '../../utils';
import { Folder } from '../types/Folder';
import { addFolder, delFolder } from '../actions/folderActions';

type FolderProps = {
    folder: Folder;
    selectedFolder: Folder[];
    setFolder: (folder: Folder) => void;
    addFolder: (folder: Folder) => void;
    delFolder: (folder: Folder) => void;
};

const FolderList = ({ folder, selectedFolder, addFolder, delFolder }: FolderProps) => {
    const fileList = readDir(folder);
    const dirList = fileList.filter(file => fs.lstatSync(`${folder}/${file}`).isDirectory());

    const dirClicked = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        console.log(
            event.currentTarget.value,
            selectedFolder,
            selectedFolder.indexOf(event.currentTarget.value)
        );
        selectedFolder.indexOf(event.currentTarget.value) === -1
            ? addFolder(event.currentTarget.value)
            : delFolder(event.currentTarget.value);
    };

    return (
        <>
            {dirList.map((file, index) => (
                <React.Fragment key={file}>
                    <input type="checkbox" onClick={dirClicked} value={file} />
                    <p key={file + index}>{file}</p>
                </React.Fragment>
            ))}
            <button type="button">모두 선택</button>
            <button type="button">모두 해제</button>
        </>
    );
};

export default FolderList;
