"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Button,
  Spinner,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { fuelSchema } from "../../schema/fuel";

type FormData = z.infer<typeof fuelSchema>;

export default function FuellingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>();
  const toast = useToast();

  async function onSubmit(data: FormData) {
    const driver = JSON.parse(localStorage.getItem("driver") || "");

    const response = await fetch("http://localhost:3333/refuelling", {
      method: "post",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: parseInt(`${data.amount}`),
        fuelType: data.type,
        driverId: driver?.id,
      }),
    });

    if (response.status == 201) {
      toast({
        title: `Registered fuelling`,
        description: "Fuelling registred successfully!",
        status: "success",
        duration: 3000,
      });
    }
    if (response.status == 400 || response.status == 500) {
      toast({
        title: `Could not sign in`,
        description:
          "Something went wrong when trying to register your fuelling!",
        status: "error",
        duration: 3000,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="amount">Quantity(in liters): </FormLabel>
        <NumberInput id="amount" defaultValue={1} min={1} max={100}>
          <NumberInputField {...register("amount", { required: true })} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>
          {errors.amount && errors.amount.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mt={4}>
        <FormLabel htmlFor="type">Type: </FormLabel>
        <Select
          id="type"
          placeholder="Select fuel type"
          {...register("type", { required: true })}
        >
          <option value="GASOLINE">Gasoline</option>
          <option value="ETANOL">Etanol</option>
          <option value="DIESEL">Diesel</option>
        </Select>
        <FormErrorMessage>
          {errors.type && errors.type.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        mt={4}
        disabled={!isDirty || isValid || isSubmitting}
        colorScheme="yellow"
        width="100%"
        isLoading={isSubmitting}
        type="submit"
      >
        {isSubmitting ? <Spinner /> : "Register"}
      </Button>
    </form>
  );
}
