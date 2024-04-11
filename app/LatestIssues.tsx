import prisma from "@/prisma/client";
import { Avatar, Box, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import { Badge, Link } from "./components";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Box>
      <Heading size="4" mb="5">
        Latest Issues
      </Heading>
      <Table.Root variant="surface">
        <Table.Body>
          {issues.map((issue) => {
            return (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Flex justify="between">
                    <Flex direction="column" align="start" gap="1">
                      <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                      <Badge status={issue.status} />
                    </Flex>
                    {issue.assignedToUser ? (
                      <Avatar
                        radius="full"
                        src={issue.assignedToUser.image!}
                        fallback="?"
                        size="2"
                      />
                    ) : null}
                  </Flex>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default LatestIssues;
