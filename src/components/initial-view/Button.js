import React from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../actions";
const Button = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(getNews())}>Press to see news</button>;
};
export default Button;
