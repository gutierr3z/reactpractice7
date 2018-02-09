import React from 'react';
import ReactDOM from 'react-dom';
//--------------------------------------------------
import Comp1 from './components/comp1';
//==================================================
class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            color: 'red',
            size: 'tiny'
        };
    }

    render() {
        return (
            <div className="app">
                <h1>hello world2</h1>
                <Comp1 />
            </div>
        );
    }
};
//==================================================
ReactDOM.render( <App />, document.querySelector( '#main' ) );

