import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import IssuesList from "./IssuesList";

const IssuesPage = () => {
  return (
    <div className="space-y-5">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <IssuesList />
    </div>
  );
};

export default IssuesPage;
