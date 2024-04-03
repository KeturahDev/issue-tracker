import IssueForm, { IssueFormData } from "@/app/issues/_components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  if (!issue) notFound();
  return (
    <div>
      <IssueForm
        issue={issue}
        // onFormSuccess={(data: IssueFormData) => console.log(data)}
      />
    </div>
  );
};

export default EditIssuePage;
