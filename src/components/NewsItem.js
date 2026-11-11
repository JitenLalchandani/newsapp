import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title = "My Title", description = "My description" } = this.props;

    return (
      <div className="col-md-4 mb-3">
        <section className="card h-100" style={{ width: "320px" }}>
          <img src="" className="card-img-top" alt="Sorry" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <a href="/newsDetail" className="btn-solid theme-primary">
              Go somewhere
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default NewsItem;
