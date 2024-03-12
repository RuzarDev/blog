import {useMemo} from "react";

export const getPageCount = ((totalPages,limit)=> Math.ceil(totalPages/ limit))

export function usePagArray(totalPages) {
    return useMemo(() => {
        let res = [];
        for (let i = 1; i <= totalPages; i++) {
            res.push(i);
        }
        return res;
    }, [totalPages]);
}