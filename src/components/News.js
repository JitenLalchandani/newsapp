import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general',
  };

  constructor(props) {
    super(props);
    console.log("Hello Everyone!");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      pageSize: props.pageSize,
    };
  }

  async fetchNews(pageNo) {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${pageNo}&pageSize=${this.state.pageSize}&apiKey=68c074ae99704f1c9e5571e39ecb2f54`;
    const data = await fetch(url);
    const parseData = await data.json();

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      page: pageNo,
      loading: false,
    });
  }

  async componentDidMount() {
    this.fetchNews(1);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchNews(1);
    }
  }

  handlePreviousClick = async () => {
    if (this.state.page > 1) {
      await this.fetchNews(this.state.page - 1);
    }
  };

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.state.pageSize)) {
      await this.fetchNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center mb-5 my-4">NewsMonkey - Top Headline</h2>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={element.description ? element.description.slice(0, 88) : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
            <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn-outline theme-primary mx-3 my-2"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            ← Previous
          </button>
          <button
            type="button"
            className="btn-outline theme-primary mx-3 my-2"
            onClick={this.handleNextClick}
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)}
          >
            Next →
          </button>
        </div>
          </>
        )}
      </div>
    );
  }
}
export default News;