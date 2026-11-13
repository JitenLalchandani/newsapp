import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    const formattedDate = date ? new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }) : 'No date';

    return (
      <div className="col-md-4 mb-3">
        <section className="card h-100 shadow-sm border-0" style={{ width: "320px" }}>
          <div className="position-relative">
            <img
              src={!imageUrl ? "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800" : imageUrl}
              className="card-img-top"
              alt="Sorry"
              style={{ height: "180px", objectFit: "cover" }}
            />
            <span className="position-absolute top-0 start-0 m-2 badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <div className="card-body d-flex flex-column">
            <h4 className="card-title">{title}</h4>
            <p className="card-text flex-grow-1">{description}</p>
            <p className="card-text mb-3">
              <small className="text-muted">
                By {author || 'Unknown'} on {formattedDate}
              </small>
            </p>
            <a href={newsUrl} className="btn-solid theme-primary mt-auto">
              Read More
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default NewsItem;
