import React from 'react';
import 'styles/Background.css';

export default class Background extends React.Component{
    
    render(){
        return(
            <div>
                <br/>
                <div className="discussion-container">
                    <b>Purpose</b>
                    <p>This project was undertaken to demonstrate the capabilities of different popular summarization algorithms. <br/>
                       This website communicates with an API to perform the majority of the work. Refer to 
                    </p>

                    <b>Summarization Techniques</b>
                    <p>There are currently 2 techniques available to play with: Text Rank and the Luhn Summarization algorithm <br/>
                        1) Text Rank <br/>
                        "Text Rank" is based on the Page Rank algorithm, which is used by Google Search to rank web pages in search engine results.

                        Refer to <a href="https://web.eecs.umich.edu/~mihalcea/papers/mihalcea.emnlp04.pdf">TextRank</a> for more information.
                        2) Luhn Summarizer <br/>
                        This is a heurestic method named after its creator, the IBM scientist Hans Peter Luhn. Published in 1958, 
                        it was one of the first text summarization algorithms. The basic idea is that authors will repeat important words throughout a paper.
                        Thus, sentences with more repetition of the keywords would be extracted to create a summary. <br/>
                        Refer to this link for more information: <a href="http://people.uncw.edu/tagliarinig/Courses/380/F2017%20papers%20and%20presentations/TextCompressionGroup6--Frazier%20and%20Perrier/Final%20Paper%20and%20Questions.pdf">Luhn's Algorithm</a>
                    </p>
                    
                </div>
            </div>
        );
    }
}