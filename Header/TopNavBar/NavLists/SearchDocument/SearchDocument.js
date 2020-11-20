import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchDocument = () => {
  return (
    <div>
      <a href='#/searchDocument' className='notification'>
        <span>
          <FontAwesomeIcon
            icon={faSearch}
            title='SearchDocument'
            className='font_color ml-2 cursor-pointer'
          />
        </span>
      </a>
    </div>
  );
};

export default SearchDocument;
