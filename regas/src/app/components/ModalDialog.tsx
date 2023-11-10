"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import React from "react";
import SignInForm from "./SignInForm";

export default function ModalDialog() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Modal
      closeOnOverlayClick={false}
      size={"xs"}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign In</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SignInForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
