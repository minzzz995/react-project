import React from 'react';

const Box = (props) => {
  let resultClass = "";

  if (props.result === "win") {
    resultClass = "win";
  } else if (props.result === "lose") {
    resultClass = "lose";
  } else if (props.result === "tie") {
    resultClass = "tie";
  }

  return (
    <div className={`box ${resultClass}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} alt={props.item && props.item.name}/>
      <h2>{props.result}</h2>
    </div>
  );
}

export default Box;
