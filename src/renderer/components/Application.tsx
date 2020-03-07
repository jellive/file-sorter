import { hot } from 'react-hot-loader/root';
import * as React from 'react';

// import CounterContainer from '../containers/CounterContainer';
import FolderContainer from '../containers/FolderContainer';
// import Sort from './sort';

const Application = () => (
    <div>
        <p>Hello!</p>
        <br />
        {/* <CounterContainer /> */}
        <p>정렬 기준입니다.</p>
        {/* <Sort /> */}
        <p>정렬할 디렉토리를 선택해주세요.</p>
        <Folder />
    </div>
);

export default hot(Application);
