import React from "react";
import { Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { searchCountry, setFilterCountry } from "../../redux/actions/index";
const SearchBar = () => {
  const dispatch = useDispatch();
  dispatch(setFilterCountry()); // initialize with initial payload
  return (
    <Input
      fluid
      icon="search"
      placeholder="Search..."
      onChange={(e) => {
        dispatch(searchCountry(e.target.value));
        dispatch(setFilterCountry());
      }}
    />
  );
};
export default SearchBar;
