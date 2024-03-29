import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import delay from "delay";
import { Card, Heading, Text } from "@radix-ui/themes";
import Badge from "@/app/components/Badge";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}
const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  await delay(2000);

  if (!issue) notFound();
  return (
    <div>
      <Heading my="2">{issue.title}</Heading>
      <div className="flex flex-row space-x-2 align-center mb-5">
        <Badge status={issue.status} />
        <Text size="2">{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
