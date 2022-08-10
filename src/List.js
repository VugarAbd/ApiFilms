import React from "react";
import "./App.css";

function List(props) {
  return (
    <div className="Lists">
      {props.list
        .filter(
          (item) =>
            `${item.Title} ${item.Year}`
              .toLowerCase()
              .includes(props.search.toLowerCase()) || props.search === ""
        )
        .map((item) => (
          <div className="List" key={item.id}>
            <div className="title">
              <p>{`${item.Title} `}</p>
              <p>{`${item.Awards}`}</p>
            </div>
            <img src={item.Images} alt="" />
          </div>
        ))}
    </div>
  );
}

export default List;
