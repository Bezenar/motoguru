import * as React from 'react';

interface I_Bikes {}

const Bikes: React.FC<Readonly<I_Bikes>> = ({}) => {
    return(<div>Bikes</div>);
}

export default Bikes;
