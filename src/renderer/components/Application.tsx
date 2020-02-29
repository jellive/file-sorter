import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import CounterContainer from '../containers/CounterContainer';
import Select from './Select';

const Application = () => (
    <div>
        <p>Hello!</p>
        <br />
        {/* <CounterContainer /> */}
        <p>정렬할 디렉토리를 선택해주세요.</p>
        <Select />
    </div>
);

export default hot(Application);
