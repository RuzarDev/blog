import React from 'react';
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/Select/MySelect";

const PostFilter = ({postFilter,setPostFilter}) => {
    return (
        <div>
            <MyInput value={postFilter.query} onChange={e=>setPostFilter({...postFilter,query: e.target.value})}/>
            <MySelect    options={[
                {value: 'title', name: "По названию"},
                {value: 'body', name: "По описанию"},
            ]} defaultValue="Сортировка по" value={postFilter.body} onChange={selectedSort=>setPostFilter({...postFilter,sort:selectedSort})} />
        </div>

    );
};

export default PostFilter;