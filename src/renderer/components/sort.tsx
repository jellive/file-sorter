import * as React from 'react';

const sorter = () => {
    const [char, setChar] = React.useState('');

    const changeChar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChar(event.target.value);
    };
    return (
        <>
            <p>정렬 기준: {char}</p>
            <input type="text" onChange={changeChar} />
        </>
    );
};

export default sorter;
