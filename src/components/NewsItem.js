import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl,newsUrl} = this.props;

    return (
      <div className="col-md-4 mb-3">
        <section className="card h-100" style={{ width: "320px" }}>
          <img src={!imageUrl?"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800":imageUrl} className="card-img-top" alt="Sorry" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn-solid theme-primary">
              Read More
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default NewsItem;
