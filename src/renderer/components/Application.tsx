import { hot } from 'react-hot-loader/root';
import * as React from 'react';

// import CounterContainer from '../containers/CounterContainer';
import FolderContainer from '../containers/FolderContainer';
// import FolderListContainer from '../containers/FolderListContainer'

const Application = () => (
    <div>
        <p>Hello!</p>
        <br />
        {/* <CounterContainer /> */}
        <FolderContainer />
    </div>
);

export default hot(Application);
