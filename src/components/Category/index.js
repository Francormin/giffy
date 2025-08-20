import { Link } from "wouter";
import "./styles.css";

const Category = ({ name, options }) => {
  return (
    <div className="Category-container">
      <h3>{name}</h3>
      <div className="category-list-container">
        {options.map(option => (
          <span key={option}>
            -<Link to={`/search/${option}`}>{option}</Link>-
          </span>
        ))}
      </div>
    </div>
  );
};

export default Category;
