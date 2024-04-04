import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Box>
        <Skeleton className="mb-3" height="2rem" />
        <Skeleton height="23rem" />
      </Box>
      <Skeleton className="float-right mt-2" width="10rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
