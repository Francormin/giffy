import Text from "components/Text";
import { CategoryContainer, CategoryItem, CategoryList } from "./styles";

const Category = ({ name, options }) => {
  return (
    <CategoryContainer>
      <Text as="h2" variant="heading" style={{ marginBottom: "1rem" }}>
        {name}
      </Text>

      <CategoryList>
        {options.map(option => (
          <CategoryItem
            key={option}
            to={`/search/${option}`}
            size="sm"
            variant="secondary"
          >
            {option}
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
};

export default Category;
