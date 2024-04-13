import prisma from "@/prisma/client";
import IssuesSummary from "./IssuesSummary";
import LatestIssues from "./LatestIssues";
import IssuesBarChart from "./IssuesBarChart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <Grid gap="5" columns={{ initial: "1", md: "2" }}>
      <Flex gap="5" direction="column">
        <IssuesSummary
          open={openIssues}
          inProgress={inProgressIssues}
          closed={closedIssues}
        />
        <IssuesBarChart
          open={openIssues}
          inProgress={inProgressIssues}
          closed={closedIssues}
        />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues.",
};
//add open graph and twitter properties
