import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

import '../styles/SharedLayout.css';

export default class SharedLayout extends React.Component{

    componentDidMount(){
        //this fires when we navigate the app
    }

    //this.props.children renders the child components [//codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891]
    render(){
        return(
            <div>
                <NavigationBar/>
                <div className="child-container">{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}