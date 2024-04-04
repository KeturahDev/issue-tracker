import { Badge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Box, Card, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetails = async ({ issue }: { issue: Issue }) => {
  return (
    <Box>
      <Heading my="2">{issue.title}</Heading>
      <div className="flex flex-row space-x-2 align-center mb-5">
        <Badge status={issue.status} />
        <Text size="2">{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose max-w-full">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Box>
  );
};

export default IssueDetails;
