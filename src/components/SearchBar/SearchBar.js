import React from "react";
import "./SearchBar.scss";
import SearchIcon from "../../assets/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="search">
      <img className="search__icon" src={SearchIcon} alt="search icon" />
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
