export interface HomeState{
    summaryPanelCollapsed: boolean;
    inputText: string;
    summaryRatio: number;
}


export interface SummaryConfigProps{
    summaryRatio: number;
    onSummaryRatioChange: Function;
}

export interface SummaryConfigState{
}