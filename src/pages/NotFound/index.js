import { Helmet } from "react-helmet-async";
import SearchForm from "components/SearchForm";
import ResourceNotFound from "components/ResourceNotFound";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
        <meta name="description" content="Page not found - Giffy" />
      </Helmet>

      <SearchForm />

      <ResourceNotFound />
    </>
  );
};

export default NotFound;
