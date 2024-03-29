import React from "react";
import IssuesList from "./IssuesList";
import IssueActions from "./IssueActions";

const IssuesPage = () => {
  return (
    <div className="space-y-5">
      <IssueActions />
      <IssuesList />
    </div>
  );
};

export default IssuesPage;
