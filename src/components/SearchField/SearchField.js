// This component include form for enter search query
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
    fetchArticles,
    fetchSuggest,
    setQuery
}                           from '../../actions/index';
import './SearchField.css';
class SearchField extends Component {
    constructor(props){
        super(props);
        this.searchInput = React.createRef();
    }
    submitHandler = (evt) => {
        evt.preventDefault();
        const {
            fetchArticles,
            fetchSuggest,
            query
        }               = this.props;
        if(query.length < 1) return false; // if query is empty don't make a fetch
        fetchArticles();
        fetchSuggest ();
        this.searchInput.current.focus(); // set input as focused after fetch
    };
    inputHandler = (evt) => {
        const value = evt.target.value;
        this.props.setQuery(value);       // dispatch new value to store
    };
    render(){
        return (
            <form onSubmit ={ this.submitHandler }
                  className='searchForm'
            >
                <input type='search'
                       onInput={ this.inputHandler }
                       className={
                           this.props.query.length > 0
                               ? 'searchInput--focused searchInput'
                               : 'searchInput'
                       }
                       value={this.props.query}
                       ref={this.searchInput}
                />
                <span className='searchInputPen'
                >.</span>
                <button type='submit'
                        onClick={ this.submitHandler }
                        className='searchButton'
                >
                    Search
                </button>
                <h2 className='appTitle'> Click on the icon for start search </h2>
            </form>
        )
    }
}
const mapStateToProps = state => ({
    query: state.query.query
});
const mapDispatchToProps = {
    fetchArticles,
    fetchSuggest,
    setQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
