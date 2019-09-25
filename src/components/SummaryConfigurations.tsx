import React from 'react';
import {Slider} from 'primereact/slider';
import 'styles/SummaryConfigurations.css';


interface SummaryConfigProps{
    summaryRatio: number;
    onSummaryRatioChange: Function;
}
interface SummaryConfigState{
}

export default class SummaryConfigurations extends React.Component<SummaryConfigProps,SummaryConfigState>{
    constructor(props: SummaryConfigProps){
        super(props);

        this.handleRatioChange = this.handleRatioChange.bind(this);
    }

    handleRatioChange(e: any){
        this.props.onSummaryRatioChange(e.value as number);
    }

    render(){
        return(
            <div className="ratio-slider-container">
                <p>Ratio: {this.props.summaryRatio}%</p>

                <Slider value={this.props.summaryRatio} onChange={this.handleRatioChange}  />
            </div>
        );
    }
}