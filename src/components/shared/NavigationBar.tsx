import React from 'react';
import {withRouter} from 'react-router';
import {Menubar} from 'primereact/components/menubar/Menubar';
import 'styles/NavigationBar.css';
const logo = require('SumItUpLogo.png');

export class NavigationBar extends React.Component<any,any>{
    constructor(props: any){
        super(props);

        this.state = {
            navbarItems: 
            [
                {
                    label: "Home",
                    icon: "pi pi-home",
                    command: () => { this.navigateToPage('/') }
                },
                {
                    label: "Technical Discussion",
                    icon: "pi pi-sitemap",
                    command: () => { this.navigateToPage('/background')}
                },
                {
                    label: "About",
                    icon: "pi pi-info",
                    command: () => { this.navigateToPage('/about') }
                }
            ]
        };
    }
    

    navigateToPage = (path: string) => {
        this.props.history.push(path);
    }

    render(){
        return(
            <div>
                <Menubar model={this.state.navbarItems} className="menubar">
                <img id="logo-img" src={logo} alt="SumItUp!" />
                </Menubar>
            </div>
        );
    }
}

export default withRouter(NavigationBar);