import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const BellNotifications = () => {
  return (
    <div>
      <a href='#/taskList' className='notification'>
        <span>
          <FontAwesomeIcon
            icon={faBell}
            title='notification'
            className='font_color ml-2 cursor-pointer'
          />
        </span>
        <span className='badge'>3</span>
      </a>
    </div>
  );
};

export default BellNotifications;
