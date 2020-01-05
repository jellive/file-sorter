import * as React from 'react';
import { readDir } from '../../utils';

const select = () => {
    const [dir, setDir] = React.useState('');

    const changeFolder = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFolderNode: HTMLInputElement | null = document.getElementById(
            'selectedfile'
        ) as HTMLInputElement;
        let path;
        if (selectedFolderNode.files) {
            path = selectedFolderNode.files[0].path;
        }
        if (path) {
            path = readDir(path);
        }
        alert(path);
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
        </>
    );
};

export default select;
