import { Card, CardBody, Container } from "@chakra-ui/react";
import SignInForm from "./components/SignInForm";

export default async function Home() {
  return (
    <>
      <Container>
        <Card>
          <CardBody>
            <SignInForm />
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
