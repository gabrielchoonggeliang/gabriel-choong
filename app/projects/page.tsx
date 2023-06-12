import './page.css'
import React from 'react';

const Projects = () => {
    return (
        <div>
            <div className="projects-header">
                <h1>Projects</h1>
            </div>

            <div className="projects-introduction">
                <p>Here are my current projects, check them out!</p>
            </div>

            <div className="projects-literal-projects">
                <div className="project-lists">
                    <ol>
                        <li>
                            <a href="/projects/sudoku-solver">
                                Sudoku Solver
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Coming Soon
                            </a>
                        </li>

                        <li>
                            <a href='#'>
                                Coming Soon
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Projects;