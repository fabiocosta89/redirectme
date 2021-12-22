import Container from "@material-ui/core/Container";

import PolicyContent from "../../components/policyContent/PolicyContent";
import Scroll2Top from "../../components/scrollTop/Scroll2Top";

const Policy = () => {
  return (
    <Container maxWidth="md">
        <PolicyContent />
        <Scroll2Top />
    </Container>
  );
};

export default Policy;
