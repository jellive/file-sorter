import * as React from 'react';

const select = () => {
    const [dir, setDir] = React.useState('');

    const changeFolder = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFolderNode: HTMLInputElement | null = document.getElementById(
            'selectedfile'
        ) as HTMLInputElement;
        let path;
        if (selectedFolderNode) {
            path = selectedFolderNode.files[0].path;
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
