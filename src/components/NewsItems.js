import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } =props;
  return (
    <div>
      <div className="card" style={{ margin: "25px" }}>
        <img
          src={
            !imageUrl
              ? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZDMSOE3HO5UUB7ABMTJQ263JJU_size-normalized.jpg&w=1440"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
