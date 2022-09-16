import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'


export class News extends Component {

  static defaultProps = {
country : "in",
pageSize : "8",
category : "general"

  }

  static propTypes = {
country : PropTypes.string,
category :PropTypes.string

   }

  capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
this.state = {
  articles: [],
  loading : true,
  page : 1,
  totalResults : 0
}
document.title = `NewsMoney - ${this.capitalizeFirstLetter(this.props.category)}`;
    }

    


    updateNews = async ()=>{
      this.props.setProgress(0);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ba20c68db1a436d9a00db227711a7b8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      this.props.setProgress(30);
      let data = await fetch(url);
      this.props.setProgress(50);
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({totalResults:parsedData.totalResults, articles : parsedData.articles, loading : false});
      this.props.setProgress(100);
    }

    async componentDidMount(){
      this.updateNews();
    }

    prevClickHandler =async ()=>{

      this.setState({page : this.state.page-1})
      this.updateNews();
    }
    nextClickHandler =async ()=>{

      this.setState({page : this.state.page+1})
      this.updateNews();
      
    
    }

    fetchMoreData = async () =>{
      this.setState({page : this.state.page + 1});
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ba20c68db1a436d9a00db227711a7b8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles : this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults, loading : false});
    }


  render() {
   
    
    return (
      <>
          <h1 className="text-center m-4">Top {this.capitalizeFirstLetter(this.props.category)} Headlines - NewsMonkey!</h1>
         {this.state.loading && <Spinner />}

         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((e)=>{
              return <div className="col md-4 my-3" key={e.url}>
              <NewsItem title ={e.title?e.title.slice(0, 45):""} description={e.description?e.description.slice(0, 88):""} author={e.author?e.author:"Unknown"} time={e.publishedAt} source={e.source.name} imageUrl={e.urlToImage?e.urlToImage:"data:image/jpeg;base64,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"} url={e.url}/>
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className ="d-flex justify-content-between m-4">        
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevClickHandler}>&laquo; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextClickHandler}>Next &raquo;</button>
          </div> */}
        
 </>
    )
  }
}

export default News