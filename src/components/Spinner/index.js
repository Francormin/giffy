import { Dot, Loader, LoaderContainer } from "./styles";

const Spinner = () => (
  <LoaderContainer role="status" aria-label="Loading">
    <Loader>
      <Dot />
      <Dot />
      <Dot />
    </Loader>
  </LoaderContainer>
);

export default Spinner;
