// General Application component
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import SearchField          from '../../components/SearchField/SearchField';
import ArticlesList         from '../../components/ArticlesList/ArticlesList';
import SuggestList          from '../../components/SuggestList/SuggestList';
import './App.css';
class App extends Component {
    render(){
        const {
            articles,
            suggest,
        } = this.props;
        return (
            <div className='app'>
                <h1 className='appTitle'>
                    <a href='https://en.wikipedia.org/wiki/Special:Random'
                       className='linkReset'
                       target='_blank'
                    >
                        Click <i>here</i> for a random page
                    </a>
                </h1>
                <SearchField/>
                {
                    suggest.isLoad && !suggest.isError
                        ? <SuggestList  suggest = { suggest.suggest }

                        />
                        : null
                }
                {
                    articles.isLoad && !suggest.isError
                        ? <ArticlesList pages   = { articles.pages }/>
                        : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
   articles: {
       pages   : state.wiki.pages,
       isLoad  : state.wiki.isLoad,
       isError : state.wiki.isError,
   },
   suggest : {
       suggest : state.google.suggest,
       isLoad  : state.google.isLoad,
       isError : state.google.isError,
   }
});

export default connect(mapStateToProps, null)(App);