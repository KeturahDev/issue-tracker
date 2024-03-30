import { Badge } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Button, Card, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { FaRegEdit } from "react-icons/fa";

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
      <Box>
        <Heading my="2">{issue.title}</Heading>
        <div className="flex flex-row space-x-2 align-center mb-5">
          <Badge status={issue.status} />
          <Text size="2">{issue.createdAt.toDateString()}</Text>
        </div>
        <Card className="prose">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <FaRegEdit />
          Edit Issue
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
