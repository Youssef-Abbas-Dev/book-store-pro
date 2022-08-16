import { useState } from "react";
import { authors } from "../../data/authors";
import "./authors.css";

const Authors = () => {
  const [search, setSearch] = useState("");

  //console.log(authors.filter(a => a.name.toLowerCase().includes(search)));

  return (
    <section className="authors">
      <div className="authors-search-wrapper">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search in authors"
        />
      </div>
      <div className="authors-wrapper">
        {authors
          .filter(a => a.name.toLowerCase().includes(search))
          .map((author) => (
            <div key={author.id} className="author">
              <img
                src={author.image}
                alt={author.name}
                className="author-img"
              />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Authors;
