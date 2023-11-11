import { Card, CardBody, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FuellingForm from "../components/FuellingForm";

export default async function Fuel() {
  return (
    <>
      <Container>
        <Card>
          <CardBody>
            <FuellingForm />
          </CardBody>
        </Card>
      </Container>
      <Footer path={""} />
    </>
  );
}
