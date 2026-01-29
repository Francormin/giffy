import Button from "components/Button";
import Text from "components/Text";
import "./styles.css";

const Category = ({ name, options }) => {
  return (
    <div className="category-container">
      <Text as="h2" variant="heading" style={{ marginBottom: "1rem" }}>
        {name}
      </Text>

      <div className="category-list-container">
        {options.map(option => (
          <Button to={`/search/${option}`} key={option} className="category-item">
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Category;
