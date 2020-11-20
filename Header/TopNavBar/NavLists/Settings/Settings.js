import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable, faCube, faCogs } from "@fortawesome/free-solid-svg-icons";

const Settings = (props) => {
  return (
    <div>
      <span onClick={props.showSettingMenu}>
        <FontAwesomeIcon
          icon={faCogs}
          title='Settings'
          className='font_color ml-2 cursor-pointer'
        />
      </span>
      {props.showSettingMenu ? (
        <div
          className='menu '
          ref={(element) => {
            this.dropdownSettingMenu = element;
          }}
        >
          <ul className='settingChildDropdown'>
            <li>
              <a href='#/processBuilder' className='notification'>
                <span>
                  <FontAwesomeIcon icon={faCube} title='Process Creation' />
                  Process Creation
                </span>
              </a>
            </li>
            <li>
              <a href='#/applicationManager' className='notification'>
                <span>
                  <FontAwesomeIcon icon={faTable} title='Application Table' />
                  Application Manager
                </span>
              </a>
            </li>
            <li>
              <a href='#/formBuilder' className='notification'>
                <span>
                  <FontAwesomeIcon icon={faTable} title='FormBuilder' />
                  Form Builder
                </span>
              </a>
            </li>
            <li>
              <a href='#/formRenderer' className='notification'>
                <span>
                  <FontAwesomeIcon icon={faTable} title='FormRenderer' />
                  Form Renderer
                </span>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Settings;
