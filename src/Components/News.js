import React, { Component } from "react";
import NewsItem from "./NewsItem.js";
import "./News.css";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 20,
  };
  static propTypes = {
    country: PropTypes.string,
    loading: PropTypes.bool,
    page: PropTypes.number,
    pageSize: PropTypes.number,
  };
  handlePrevious = async () => {
    this.setState({ page: this.state.page - 1, loading: true });
    document.documentElement.scrollTop = 0;
    this.updateNews();
  };
  handleNext = async () => {
    this.setState({ page: this.state.page + 1, loading: true });
    document.documentElement.scrollTop = 0;
    this.updateNews();
  };
  updateNews = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalresults: parsedData.totalresults,
    });
    this.props.setProgress(100);
  };
  constructor() {
    super();
    this.state = {
      articles: [
        {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "iPhone 15 Pro models tipped to get a price hike, ahead of launch; 2 reasons why - HT Tech",
          "description": "The iPhone 15 Pro models are expected to get a price hike owing to two hardware decisions. The last-minute leak reveals the details ahead of the launch of the devices at the Apple event.",
          "url": "https://tech.hindustantimes.com/mobile/news/iphone-15-pro-models-tipped-to-get-a-price-hike-ahead-of-launch-2-reasons-why-71693879567325.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/09/05/1600x900/felix-fischer-1m0BBZpeSUs-unsplash_1689268741940_1693880003097.jpg",
          "publishedAt": "2023-09-05T02:22:36Z",
          "content": "We are just one week away from the Wonderlust' Apple event, which has been confirmed by the company to be held on September 12, at 10:30 PM IST. The event is expected to unveil the new iPhone 15 seri… [+2091 chars]"
          }
      ],
      page: 1,
      articlesCovered: 9,
      loading: false,
    };
  }
  async componentDidMount() {
    this.updateNews();
  }
  render() {
    return (
      <div className="containerNews">
        {this.state.loading && <Spinner />}
        <div className="heading">
          <h1>
            <span className="spanColorB">That's</span>
            <span className="spanColorR">News</span> - Top Headlines
          </h1>
        </div>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url ? element.url : " "}
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imgurl={element.urlToImage}
                  published={element.publishedAt.slice(0, 10)}
                  author={element.author}
                  url ={element.url}
                />
              );
            })}
        </div>
        <div className="handlePages">
          <button disabled={this.state.page <= 1} onClick={this.handlePrevious}>
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalresults / 20)
            }
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
