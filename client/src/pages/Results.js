import React from 'react';

// Getting results from SearchBar and it will render here
class Results extends React.Component {
    state = {
        results: []
    }
    render(){
        return (
            <div> 
                {this.state.results.map}
            </div>
        );
    }
}
export default Results;