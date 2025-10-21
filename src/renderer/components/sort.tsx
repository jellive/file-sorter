import { useState, ChangeEvent } from 'react';

const Sort = () => {
    const [char, setChar] = useState('');

    const changeChar = (event: ChangeEvent<HTMLInputElement>) => {
        setChar(event.target.value);
    };
    return (
        <>
            <p>정렬 기준: {char}</p>
            <input type="text" onChange={changeChar} />
        </>
    );
};

export default Sort;
