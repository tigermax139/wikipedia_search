// This component render all suggestion
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
    setQuery,
    fetchSuggest,
    fetchArticles
}                           from "../../actions";
import './SuggestList.css';

class SuggestList extends Component {
    clickHandler = keyword => {
        const {
            setQuery,
            fetchSuggest,
            fetchArticles
        } = this.props;
        setQuery(keyword);    // dispatch new keyword to store
        fetchSuggest();       // make new fetch
        fetchArticles();
    };
    render(){
        return (
            <section className='suggest'>
                {
                   this.props.suggest.map( (item, index) => {
                        return (
                            <div key={ index }
                            >
                                <h3 className = 'suggestTitle'
                                    tabIndex  = '0'
                                    onClick   = { () => this.clickHandler(item.keyword) }
                                >{item.keyword}</h3>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}

const mapDispatchToProps = {
    setQuery,
    fetchSuggest,
    fetchArticles
};

export default connect(null, mapDispatchToProps)(SuggestList);