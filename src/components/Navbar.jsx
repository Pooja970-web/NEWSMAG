const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand fw-bold">NewsMag</span>

      <ul className="navbar-nav ms-auto gap-3">
        {[
          "top",
          "business",
          "technology",
          "health",
          "science",
          "sports",
          "entertainment",
        ].map((cat) => (
          <li
            key={cat}
            className="nav-link text-white"
            style={{ cursor: "pointer" }}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
