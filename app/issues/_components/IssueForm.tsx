"use client";
import { Callout, TextField, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LuAlertCircle } from "react-icons/lu";
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../components/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "../../validationSchemas";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { z } from "zod";
import { Issue } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

export type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({
  // onFormSuccess,
  issue,
}: {
  // onFormSuccess: (data: IssueFormData) => void;
  issue?: Issue;
}) => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      // onFormSuccess(data);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occured.");
    }
  });
  console.log(issue);
  return (
    <div className="max-w-xl">
      {error ? (
        <Callout.Root color="red" className="mb-3">
          <Callout.Icon>
            <LuAlertCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      ) : null}
      <form onSubmit={onSubmit} className="space-y-3">
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            placeholder="New Issue Title"
            {...register("title")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit Issue {isSubmitting ? <Spinner /> : null}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
