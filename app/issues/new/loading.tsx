import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingNewIssue = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton className="mb-3" height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssue;
