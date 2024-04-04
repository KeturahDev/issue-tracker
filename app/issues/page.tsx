import IssueActions from "./IssueActions";
import IssuesList from "./IssuesList";

const IssuesPage = () => {
  return (
    <div className="space-y-5">
      <IssueActions />
      <IssuesList />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
