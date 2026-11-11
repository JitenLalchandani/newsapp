import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    const articles = [
      { title: "My Title", description: "My description" },
      { title: "Breaking News", description: "A simple React news card." },
      { title: "Tech Update", description: "New updates from the developer world." }
    ];

    return (
      <div className="container my-3">
        <div className="row">
          {articles.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default News;
