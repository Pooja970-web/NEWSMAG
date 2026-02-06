const NewsItem = ({ title, description, image, url }) => {
  return (
    <div className="card shadow h-100 news-card">
      <img
        src={image || "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt="news"
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {title ? title.slice(0, 60) : "No title available"}
        </h5>

        <p className="card-text">
          {description
            ? description.slice(0, 100) + "..."
            : "No description available"}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
