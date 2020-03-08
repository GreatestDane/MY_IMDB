import React, {Component} from 'react'; 
import FontAwesome from 'react-fontawesome';
import './SearchBar.css'; 

class SearchBar extends Component {
    state = {
        value: ''
    }

    /* I need to look more into how and why this Time Out event works
    I know it waits half a second before firing off the onChange event, but how and why? */ 
    timeout = null;

    doSearch = (event) => {
        this.setState({ value: event.target.value })
        clearTimeout(this.timeout);

        this.timeout = setTimeout( () => {
            this.props.callback(this.state.value)
        }, 500); 
    }

    render() {
        return (
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                    <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
                    <input
                        type="text"
                        className="rmdb-searchbar-input"
                        placeHolder="search"
                        onChange={this.doSearch}
                        value={this.state.value}
                        />
                </div>
            </div>
        )
    }
}

export default SearchBar;
