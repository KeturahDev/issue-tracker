import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaRegEdit } from "react-icons/fa";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Box>
      <Button>
        <FaRegEdit />
        <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
      </Button>
    </Box>
  );
};

export default EditIssueButton;
