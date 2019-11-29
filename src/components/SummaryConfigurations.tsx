import React from 'react';
import {Slider} from 'primereact/slider';
import {RadioButton} from 'primereact/radiobutton';
import { TextOrURL, SummaryAlgorithms } from 'helpers/Constants';

import 'styles/SummaryConfigurations.css';


export interface SummaryConfigProps{
    summaryRatio: number;
    onSummaryRatioChange: Function;

    textOrUrlInput: TextOrURL;
    onTextOrUrlSelectionChange: Function;

    algorithmSelected: SummaryAlgorithms;
    onAlgorithmSelectionChange: Function;
}

export interface SummaryConfigState{
}


export default class SummaryConfigurations extends React.Component<SummaryConfigProps,SummaryConfigState>{
    constructor(props: SummaryConfigProps){
        super(props);

        this.handleRatioChange = this.handleRatioChange.bind(this);
        this.handleAlgorithmSelection = this.handleAlgorithmSelection.bind(this);
        this.handleTextOrUrlSelection = this.handleTextOrUrlSelection.bind(this);
    }


    handleRatioChange(newValue: number){
        this.props.onSummaryRatioChange(newValue);
    }

    handleAlgorithmSelection(newValue: SummaryAlgorithms){
        this.props.onAlgorithmSelectionChange(newValue);
    }

    handleTextOrUrlSelection(newValue: TextOrURL){
        this.props.onTextOrUrlSelectionChange(newValue);
    }


    render(){
        return(
            <div className="configurations-container">

                <div className="configuration">
                    <p>Summary Ratio: {this.props.summaryRatio}%</p>
                    <Slider id="ratio-slider"
                            value={this.props.summaryRatio} 
                            onChange={(e) => this.handleRatioChange(e.value as number)}  />
                </div>
                
                <div className="configuration">
                    <p>Select the type of summary algorithm to use:</p>

                    <div className="rb-option">
                        <RadioButton inputId="gensim-algo-rb" 
                                        value={SummaryAlgorithms.Gensim}
                                        onChange={(e) => this.handleAlgorithmSelection(e.value)} 
                                        checked={this.props.algorithmSelected === SummaryAlgorithms.Gensim} />
                        <label htmlFor="gensim-algo-rb">Gensim</label>
                    </div>

                    <div className="rb-option">
                        <RadioButton inputId="sumy-algo-rb" 
                                        value={SummaryAlgorithms.Sumy}
                                        onChange={(e) => this.handleAlgorithmSelection(e.value)} 
                                        checked={this.props.algorithmSelected === SummaryAlgorithms.Sumy} />
                        <label htmlFor="sumy-algo-rb">Sumy</label>
                    </div>
                </div>

                
                <div className="configuration">
                    <p>Select the type of input provided:</p>

                    <div className="rb-option">
                        <RadioButton inputId="text-rb" 
                                        value={TextOrURL.Text}
                                        onChange={(e) => this.handleTextOrUrlSelection(e.value)} 
                                        checked={this.props.textOrUrlInput === TextOrURL.Text} />
                        <label htmlFor="text-rb">Text</label>
                    </div>

                    <div className="rb-option">
                    <RadioButton inputId="url-rb" 
                                    value={TextOrURL.URL}
                                    onChange={(e) => this.handleTextOrUrlSelection(e.value)} 
                                    checked={this.props.textOrUrlInput === TextOrURL.URL} />
                    <label htmlFor="url-rb">URL</label>
                    </div>
                </div>

            </div>
        );
    }
}