import React from 'react';
import 'styles/About.css';

export default class About extends React.Component{
    render(){
        return (
        <div>
            <br/>

            <div className="developer-info-container">
                <b>Developed by Shyam Patel</b> <br/>

                <p>Thank you for using the text summarizer tool! The tool was developed as an experiment and serves its purpose to not only demonstrate the <br/>
                    different summarization algorithms, but also to showcase itself as a neat little React web app. Stay tuned for updates!
                </p>
            </div>
            
        </div>
    )};
}