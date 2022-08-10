import React from "react";

function InputSearch(props) {
    return (
        <div className="Input">
            <input value={props.search} onChange={props.setSearch} placeholder='Search...'></input>
        </div>
    )
}

export default InputSearch;