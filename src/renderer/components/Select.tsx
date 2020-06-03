import * as React from 'react';
import { readDir, execute } from '../../utils';
import { Folder } from '../types/folder';
import Sort from './Sort';
import { Mode, SelectResult, Result } from '../types/mode';
import FolderList from './FolderList';
import FolderListContainer from '../containers/FolderListContainer';

type FolderProps = {
    folder: Folder;
    selectedFolder: Folder[];
    setFolder: (folder: Folder) => void;
};

const select = ({ folder, selectedFolder, setFolder }: FolderProps) => {
    const [dir, setDir] = React.useState<string | undefined>(undefined);
    const [mode, setMode] = React.useState(Mode.DEFAULT);
    const [prev, setPrev] = React.useState('');

    const [rootDir, setRootDir] = React.useState<string | undefined>(undefined);

    const onModeChanged = (e: React.SyntheticEvent<HTMLSelectElement, Event>) => {
        setMode(parseInt(e.currentTarget.value, 10));
    };

    const changeFolder = () => {
        const selectedFolderNode: HTMLInputElement | null = document.getElementById(
            'selectedfile'
        ) as HTMLInputElement;
        let path;
        if (selectedFolderNode.files && selectedFolderNode.files[0]) {
            path = selectedFolderNode.files[0].path;
            setRootDir(path);
        }
        let files;
        if (path) {
            setFolder(path);
            files = readDir(path);

            files.forEach(file => console.log(file));
        }
    };

    const onPreview = async () => {
        // const result = await execute(dir!!, mode, true);
        const result = await execute(`${folder}/${selectedFolder[0]}`!!, mode);
        if (result.result !== Result.success) {
            alert(result.msg);
            return;
        }
        setPrev(result.msg);
    };

    const onExecute = async () => {
        const promiseArr: Promise<SelectResult>[] = [];
        selectedFolder.forEach(target => {
            promiseArr.push(execute(`${folder}/${target}`, mode, true));
        });
        Promise.all(promiseArr).then(result => {
            result.forEach(selectResult => {
                if (selectResult.result !== Result.success) {
                    alert(selectResult.msg);
                    return;
                }
                setPrev(selectResult.msg);
            });
        });
    };

    return (
        <>
            <div>
                모드를 정해주세요.
                <br />
                <select onChange={onModeChanged} defaultValue={Mode.DEFAULT}>
                    <option defaultChecked={true} value={Mode.DEFAULT}>
                        NONE
                    </option>
                    <option value={Mode.DIVIDE_CHAR}>쪼개기</option>
                    <option value={Mode.POP_LARGEST_FILE_IN_DIR}>제일 큰 파일만 빼기</option>
                </select>
            </div>
            {mode === Mode.DIVIDE_CHAR && (
                <>
                    <p>정렬 기준입니다.</p>
                    <Sort />
                </>
            )}
            <p>정렬할 디렉토리를 선택해주세요.</p>
            <input
                id="selectedfile"
                type="file"
                webkitdirectory=""
                directory=""
                onChange={changeFolder}
            />
            <p>현재 폴더 : {rootDir}</p>
            {JSON.stringify(selectedFolder)}
            <p>
                선택한 폴더 :{' '}
                {selectedFolder.map((fold, index) => (
                    <React.Fragment key={index}>{fold}</React.Fragment>
                )) || ''}
            </p>
            {rootDir && (
                <>
                    <FolderListContainer />
                    <br />
                </>
            )}
            <button type="button" onClick={onPreview}>
                미리보기
            </button>
            <button type="button" onClick={onExecute}>
                실행
            </button>

            <div>{prev}</div>
        </>
    );
};

export default select;
