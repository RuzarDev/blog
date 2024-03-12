import React from 'react';
import MyButton from "../Button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages,page,changePage}) => {
    let pagesArray =getPagesArray(totalPages)

    return (

            <div style={{marginTop: 30}}>
                {
                    pagesArray.map(p => <MyButton key={p} onClick={() => changePage(p)}
                                                  className={page === p ? 'page__current' : ''}>{p}</MyButton>)
                }
            </div>

    );
};

export default Pagination;