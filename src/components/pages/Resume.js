import React, {useState} from 'react';
import resume_pdf from '../../documents/Elyssa_Leal_Resume_21.PDF'
import Wrapper from '../Wrapper/index';



function Resume(){
    return(
        <Wrapper>
            <div className="container">
            <h2>Resume</h2>
            <p>Download my <a href={resume_pdf}>resume</a></p>
            </div>
            <br />
            <div className="container">
            <h3>Languages</h3>
            <ul>
                <li>ReactJS</li>
                <li>Node</li>
                <li>Express</li>
                <li>Java</li>
                <li>C#</li>
                <li>MYSQL/No SQL/ &amp; SQL</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            </div>
            <br />
            <div className="container">
            <h3>Other Skills</h3>
            <ul>
                <li>Software Documentation</li>
                <li>System development and administration</li>
                <li>New Employee Mentoring</li>
                <li>Unix/Linux</li>
                <li>Git</li>
            </ul>
            </div>
        </Wrapper>
    );
}

export default Resume;