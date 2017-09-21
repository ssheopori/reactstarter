import React from 'react';

class SearchBar extends React.Component {    

    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
    }

    render(){
        return(
            <div className="container">     
            <br/><br/>       
                <div className="input=group">
                    <input 
                        placeholder="search video"
                        className="form-control"
                        value={this.state.term} 
                        onChange={(event) => this.onSearchChange(event.target.value) } />
                    {this.state.term}
                </div>
                <br/><br/>
            </div>
        );
    }

    onSearchChange(term) {
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }

}


export default SearchBar;