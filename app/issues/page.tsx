import { Issue, Status } from "@prisma/client";
import { Suspense } from "react";
import IssueActions from "./IssueActions";
import IssuesList from "./IssuesList";
import IssuesListSkeleton from "./IssuesListSkeleton";

const IssuesPage = ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue };
}) => {
  return (
    <div className="space-y-5">
      <IssueActions />
      <Suspense fallback={<IssuesListSkeleton />}>
        <IssuesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
