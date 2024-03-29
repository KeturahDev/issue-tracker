import { Box, Card, Heading } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssueDetailsLoading = () => {
  return (
    <Box className="max-w-xl">
      <Heading my="2">
        <Skeleton />
      </Heading>
      <div className="flex flex-row space-x-2 align-center mb-5">
        <Skeleton width="3rem" />
        <Skeleton width="7rem" />
      </div>
      <Card className="prose">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueDetailsLoading;
