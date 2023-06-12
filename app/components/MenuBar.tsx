import React from 'react';
import ProjectList from '../projects/ProjectList';

const Home = "HOME";
const About = "ABOUT";
const Blog = "BLOG";
const Projects = "PROJECTS";

const MenuBar: React.FC = () => {
  return (
    <ul className="horizontal-list">
      <li>
        <a href="/">{Home}</a>
      </li>
      <li>
        <a href="/about">{About}</a>
      </li>
      <li>
        <a href="/blog">{Blog}</a>
      </li>
      <li className="dropdown">
        <a href="/projects">
          {Projects} <span className="dropdown-symbol">&#9662;</span>
        </a>
        <ProjectList />
      </li>
    </ul>
  );
};

export default MenuBar;