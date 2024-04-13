import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}
const IssueDetailsPage = async ({ params: { id } }: Props) => {
  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session ? (
        <Box>
          <Flex gap="2" direction="column">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      ) : null}
    </Grid>
  );
};

export default IssueDetailsPage;

export async function generateMetadata({ params: { id } }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });
  return {
    title: `"${issue?.title}" Issue`,
    description: `Details of issue ${issue?.id}`,
  };
}
//add open graph and twitter properties
