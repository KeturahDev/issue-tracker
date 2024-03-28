"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuAlertCircle } from "react-icons/lu";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuesPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");

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
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            setError("");
            router.push("/issues");
          } catch (error) {
            setError("An unexpected error occured.");
          }
        })}
        className=" space-y-3"
      >
        <TextField.Root>
          <TextField.Input
            placeholder="New Issue Title"
            {...register("title")}
          />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuesPage;
