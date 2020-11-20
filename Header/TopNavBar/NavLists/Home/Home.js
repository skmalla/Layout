import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <a href='#/Home' className='notification'>
        <span>
          <FontAwesomeIcon
            icon={faHome}
            title='Home'
            className='font_color ml-2 cursor-pointer'
          />
        </span>
      </a>
    </div>
  );
};

export default Home;
