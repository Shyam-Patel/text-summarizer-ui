import React from 'react';
import {withRouter} from 'react-router';
import {Menubar} from 'primereact/components/menubar/Menubar';

export class NavigationBar extends React.Component<any,any>{
    state = {
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

    navigateToPage = (path: string) => {
        this.props.history.push(path);
    }

    render(){
        return(
            <div>
                <Menubar model={this.state.navbarItems} className="menubar">
                </Menubar>
            </div>
        );
    }
}

export default withRouter(NavigationBar);