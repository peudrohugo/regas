"use client";
import { Card, CardBody, Container } from "@chakra-ui/react";
import SignInForm from "./components/SignInForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  let containsDriver: boolean = true;

  useEffect(() => {
    const driver = localStorage.getItem("driver");
    if (!driver) {
      containsDriver = false;
    }

    if (containsDriver) {
      router.push("/fuel");
    }
  }, []);

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
