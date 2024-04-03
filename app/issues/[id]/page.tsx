import prisma from "@/prisma/client";
import { Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}
const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <IssueDetails issue={issue} />
      <EditIssueButton issueId={issue.id} />
    </Grid>
  );
};

export default IssueDetailsPage;
