import { Status } from "@prisma/client";
import { Suspense } from "react";
import IssueActions from "./IssueActions";
import IssuesList, { IssueQuery } from "./IssuesList";
import IssuesListSkeleton from "./IssuesListSkeleton";
import Pagination from "../components/Pagination";
import prisma from "@/prisma/client";
import { columnNames } from "./IssuesList";
import { Metadata } from "next";

const IssuesPage = async ({ searchParams }: { searchParams: IssueQuery }) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const currentPage = parseInt(searchParams.page)
    ? parseInt(searchParams.page)
    : 1;
  const where = { status };
  const pageSize = 7;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
  });
  const paginatedIssues = await prisma.issue.findMany({
    where,
    orderBy,
    take: pageSize,
    skip: currentPage * pageSize - pageSize,
  });

  return (
    <div className="space-y-5">
      <IssueActions />
      <Suspense fallback={<IssuesListSkeleton />}>
        <IssuesList issues={paginatedIssues} searchParams={searchParams} />
      </Suspense>
      <Pagination
        itemCount={issues.length}
        pageSize={pageSize}
        currentPage={currentPage || 1}
      />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;

export const metadata: Metadata = {
  title: "Issue Tracker - Issues List",
  description: "View a sortable list of all project issues.",
};
//add open graph and twitter properties
//add dynamic description based on search params
