import * as React from 'react';
import { readDir } from '../../utils';
import { Folder } from '../types/folder';

type FolderProps = {
    folder: Folder;
    setFolder: (folder: Folder) => void;
};

const select = ({ folder, setFolder }: FolderProps) => {
    const [dir, setDir] = React.useState('');

    const changeFolder = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFolderNode: HTMLInputElement | null = document.getElementById(
            'selectedfile'
        ) as HTMLInputElement;
        let path;
        if (selectedFolderNode.files) {
            path = selectedFolderNode.files[0].path;
            setDir(path);
        }
        let files;
        if (path) {
            setFolder(path);
            files = readDir(dir);

            files.forEach(file => console.log(file));
        }
    };

    return (
        <>
            <input
                id="selectedfile"
                type="file"
                webkitdirectory=""
                directory=""
                onChange={changeFolder}
            />
            <p>현재 폴더 : {folder}</p>
        </>
    );
};

export default select;
