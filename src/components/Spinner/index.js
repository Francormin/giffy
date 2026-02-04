import { Dot, Loader, LoaderContainer } from "./styles";

const Spinner = () => (
  <LoaderContainer>
    <Loader>
      <Dot />
      <Dot />
      <Dot />
    </Loader>
  </LoaderContainer>
);

export default Spinner;
