import React from "react";
import * as S from "./styles";

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <S.SearchBar
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;
