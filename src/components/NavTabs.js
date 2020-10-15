import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavTabs(props) {
  const tabs = ['About', 'Contact', 'Portfolio', 'Resume'];
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handleTabChange(tab)}
            className={
              props.currentTab === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
