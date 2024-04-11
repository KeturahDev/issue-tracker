import { Issue, Status } from "@prisma/client";
import { Suspense } from "react";
import IssueActions from "./IssueActions";
import IssuesList from "./IssuesList";
import IssuesListSkeleton from "./IssuesListSkeleton";
import Pagination from "../components/Pagination";
import prisma from "@/prisma/client";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue; page: string };
}) => {
  const columns: { label: string; value: keyof Issue }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status" },
    { label: "Created At", value: "createdAt" },
  ];

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const orderBy = columns.map((col) => col.value).includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const currentPage = parseInt(searchParams.page)
    ? parseInt(searchParams.page)
    : 1;

  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
  });
  const paginatedIssues = await prisma.issue.findMany({
    where: { status },
    orderBy,
    take: 7,
    skip: currentPage * 7 - 7,
  });

  return (
    <div className="space-y-5">
      <IssueActions />
      <Suspense fallback={<IssuesListSkeleton />}>
        <IssuesList
          issues={paginatedIssues}
          columns={columns}
          searchParams={searchParams}
        />
      </Suspense>
      <Pagination
        itemCount={issues.length}
        pageSize={7}
        currentPage={currentPage || 1}
      />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
