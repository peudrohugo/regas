"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Spinner,
  Select,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { fuelSchema } from "../../schema/fuel";

type FormData = z.infer<typeof fuelSchema>;

export default function FuellingForm() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(fuelSchema),
  });

  async function onSubmit(data: FormData) {
    console.log(isSubmitting);
    console.log(data);
    // Replace this with a server action or fetch an API endpoint to authenticate
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // 2 seconds in milliseconds
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="amount">Quantity(in liters): </FormLabel>
        <Input
          id="amount"
          placeholder="Enter fuel amount"
          {...register("amount", { required: true })}
        />
        <FormErrorMessage>
          {errors.amount && errors.amount.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="type">Type: </FormLabel>
        <Select id="type" placeholder="Select fuel type">
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
