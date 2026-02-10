import Text from "components/Text";
import Button from "components/Button";
import { CategoryContainer, CategoryList } from "./styles";

const Category = ({ name, options }) => {
  return (
    <CategoryContainer>
      <Text as="h2" variant="heading">
        {name}
      </Text>

      <CategoryList>
        {options.map(option => (
          <Button
            key={option}
            to={`/search/${option}`}
            size="sm"
            variant="category"
          >
            {option}
          </Button>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
};

export default Category;
