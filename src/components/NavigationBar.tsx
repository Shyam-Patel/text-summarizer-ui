import React from 'react';

import { Menubar } from 'primereact/components/menubar/Menubar';
/* import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css'; */
import 'primeicons/primeicons.css';
import { withRouter } from 'react-router';

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
                label: "Details",
                icon: "pi pi-sitemap"
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
                <Menubar model={this.state.navbarItems}>
                </Menubar>
            </div>
        );
    }
}

export default withRouter(NavigationBar);