import { Link } from "wouter";
import "./styles.css";

const Category = ({ name, options }) => {
  return (
    <div className="Category-container">
      <h3>{name}</h3>
      <div className="category-list-container">
        {options.map(option => (
          <Link to={`/search/${option}`} key={option} className="category-item">
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
