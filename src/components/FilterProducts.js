import React, { useState } from 'react';

const FilterProducts = () => {
    const [rangesPrice, setRangesPrice]=useState(0);
    return (
        <div>
            <label htmlFor="range">{rangesPrice}</label>
            <input type="range" min="0" max="10" onChange={(e)=>setRangesPrice(e.target.value)}/>
        </div>
    );
};

export default FilterProducts;