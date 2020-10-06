import React, {useState} from 'react';
import resume_pdf from '../../documents/E-Leal-Resume.PDF'

function Resume(){
    return(
        <div>
            <h2>Resume</h2>
            <p>Download my <a href={resume_pdf}>resume</a></p>

        </div>
    );
}

export default Resume;