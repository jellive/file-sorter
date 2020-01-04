import * as React from 'react';

const select = () => {
    const [dir, setDir] = React.useState('');
    return (
        <>
            <input type="file" webkitdirectory="" directory="" />
        </>
    );
};

export default select;
