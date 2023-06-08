import React from 'react';

const HorizontalList: React.FC = () => {
  return (
    <ul className="horizontal-list">
      <li>
        <a href="/">HOME</a>
      </li>
      <li>
        <a href="/about">ABOUT</a>
      </li>
      <li className="dropdown">
        <a href="/projects">
          PROJECTS <span className="dropdown-symbol">&#9662;</span>
        </a>
        <ul className="submenu">
          <li>
            <a href="/projects/sudoku-solver">SUDOKU SOLVER</a>
          </li>
          <li>
            <a href="#">COMING SOON</a>
          </li>
          <li>
            <a href="#">COMING SOON</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default HorizontalList;