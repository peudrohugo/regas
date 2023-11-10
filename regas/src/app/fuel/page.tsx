import { Card, CardBody, Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FuellingForm from "../components/FuellingForm";

async function create(formData: FormData) {
  "use server";
  const name = formData.get("name")?.valueOf();

  const response = await fetch(`http://localhost:3333/driver`, {
    method: "POST",
    body: JSON.stringify({
      name,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
}

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
