import React from "react";

const MyNames = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This are My Titles,{props.name}</h1>;
    </div>
  );
};
export default MyNames;
