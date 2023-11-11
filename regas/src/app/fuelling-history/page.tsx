import { Card, CardBody, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FuellingHistoryTable from "../components/FuellingHistoryTable";

export default function FuellingHistory() {
  return (
    <>
      <Container>
        <Card>
          <CardBody>
            <FuellingHistoryTable />
          </CardBody>
        </Card>
      </Container>
      <Footer path={"fuelling-history"} />
    </>
  );
}
