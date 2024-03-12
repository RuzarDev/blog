import React from 'react';
import MyButton from "../UI/Button/MyButton";
import {usePagArray} from "../utils/pages";

const Pagination = ({totalPages,page,setPage}) => {
    const pagArray =usePagArray(totalPages)

    return (
        <div style={{marginTop: '20px', textAlign: "center"}}>
            {pagArray.map(item =>
                <MyButton className={item === page ? 'current' : ''} onClick={() => setPage(item)}>{item}</MyButton>
            )}
        </div>
    );
};

export default Pagination;