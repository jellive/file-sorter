import * as React from 'react';
import * as fs from 'fs-extra';
import { readDir } from '../../utils';
import { Folder } from '../types/Folder';
import { Checkbox, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';

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

    const dirClicked = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>체크</TableCell>
                    <TableCell>디렉토리 이름</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {dirList.map((file, index) => (
                    <TableRow key={file}>
                        <TableCell>
                            <Checkbox onClick={dirClicked} value={file} />
                        </TableCell>
                        <TableCell>
                            <p key={file + index}>{file}</p>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <button type="button">모두 선택</button>
            <button type="button">모두 해제</button>
        </Table>
    );
};

export default FolderList;
