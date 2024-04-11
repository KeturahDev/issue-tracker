import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssuesSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; issueCount: number; status: Status }[] = [
    { label: "Open Issues", issueCount: open, status: "OPEN" },
    {
      label: "In-progress Issues",
      issueCount: inProgress,
      status: "IN_PROGRESS",
    },
    { label: "Closed Issues", issueCount: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="3">
      {containers.map((container) => (
        <Card>
          <Flex gap="2" direction="column">
            <Link
              className="text-sm font-medium"
              href={`/issues/?status=${container.status}`}
            >
              {container.label}
            </Link>
            <Text size="5" weight="bold">
              {container.issueCount}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssuesSummary;
