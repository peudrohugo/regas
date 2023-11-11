"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signInSchema } from "../../schema/sign-in";

type FormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const router = useRouter();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  async function onSubmit(data: FormData) {
    const response = await fetch("http://localhost:3333/driver", {
      method: "post",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
      }),
    });

    const result = await response.json();

    if (response.status == 201) {
      toast({
        title: `Welcome ${result?.name}`,
        description: "You've signed in",
        status: "success",
        duration: 3000,
      });
    }
    if (response.status == 400 || response.status == 500) {
      toast({
        title: `Could not sign in`,
        description: "Something went wrong when trying to sign you in!",
        status: "error",
        duration: 3000,
      });
    }

    localStorage.setItem("driver", JSON.stringify(result));

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
