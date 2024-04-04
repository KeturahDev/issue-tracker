import { Suspense } from "react";
import IssueActions from "./IssueActions";
import IssuesList from "./IssuesList";
import IssuesListSkeleton from "./IssuesListSkeleton";

const IssuesPage = () => {
  return (
    <div className="space-y-5">
      <IssueActions />
      <Suspense fallback={<IssuesListSkeleton />}>
        <IssuesList />
      </Suspense>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
