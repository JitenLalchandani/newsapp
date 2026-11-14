/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async (pageNo = 1) => {
    props.setProgress(0);
    setLoading(true);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${pageNo}&pageSize=${props.pageSize}&apiKey=68c074ae99704f1c9e5571e39ecb2f54`;
    const data = await fetch(url);
    const parseData = await data.json();

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setPage(pageNo);
    setLoading(false);

    props.setProgress(0);
  };

  useEffect(() => {
    updateNews(1);
  }, [props.category, props.country]);

  const handlePreviousClick = async () => {
    if (page > 1) {
      await updateNews(page - 1);
    }
  };

  const handleNextClick = async () => {
    const lastPage = Math.ceil(totalResults / props.pageSize);
    if (page + 1 <= lastPage) {
      await updateNews(page + 1);
    }
  };

  // Infinite scroll reference (not active in this app):
  // import Infinite from "react-infinite-scroll-component";
  // fetchMoreData = async () => {
  //   const nextPage = page + 1;
  //   setLoading(true);
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${nextPage}&pageSize=${props.pageSize}&apiKey=68c074ae99704f1c9e5571e39ecb2f54`;
  //   const data = await fetch(url);
  //   const parseData = await data.json();
  //   setArticles((prev) => [...prev, ...parseData.articles]);
  //   setTotalResults(parseData.totalResults);
  //   setPage(nextPage);
  //   setLoading(false);
  // };

  return (
    <div className="container my-3">
      <h2 className="text-center mb-5 my-4">
        NewsMonkey - Top {props.category} Headlines
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description ? element.description.slice(0, 88) : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source?.name || "Unknown Source"}
                  />
                </div>
              );
            })}
          </div>

          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-primary mx-3 my-2"
              onClick={handlePreviousClick}
              disabled={page <= 1}
            >
              ← Previous
            </button>
            <button
              type="button"
              className="btn btn-outline-primary mx-3 my-2"
              onClick={handleNextClick}
              disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 5,
  category: "general",
};

export default News;
