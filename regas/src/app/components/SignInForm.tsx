"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signInSchema } from "../../schema/sign-in";

type FormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
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
    router.push("/fuel");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor="name">Name: </FormLabel>
        <Input
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
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
        {isSubmitting ? <Spinner /> : "Sign In"}
      </Button>
    </form>
  );
}
