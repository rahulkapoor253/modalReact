import React from "react";
import App from './App';

class Sample extends React.Component {

constructor() {
super();

this.handleClick = this.handleClick.bind(this);
this.handleClear = this.handleClear.bind(this);

this.state = {
    data : {}
}

}

handleClear() {
    const obj = {
        Id : 0,
        Name : '',
        Email : ''
    }
    this.setState({
        data : obj
    })
}

handleClick() {
    const obj = {
        Id : 501,
        Name : 'Rahul Kapoor',
        Email : 'rahul.kapoor@Fiserv.com' 
    }
    this.setState({
        data : obj
    })
}


render() {
    return(

        <div>
            <button onClick={this.handleClick}>Set Data</button>
            <button onClick={this.handleClear}>Clear Data</button>
<App  value={this.state.data}/>
        </div>
    );

}

}

export default Sample;