import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { filterTitleThunk } from "../redux/actions";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const SearchProducts = (e) => {
    e.preventDefault();

    dispatch(filterTitleThunk(title));
  };
  return (
    <div className="container-search">
      <form action="" onSubmit={SearchProducts} className="search-item">
        <input
          className="searchInput"
          placeholder="Search..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button id="searchButtom">
          <FontAwesomeIcon icon={faMagnifyingGlass} id="iconGlass" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
