import axios from "axios";
import React from "react";
import { createIssueSchema } from "../validationSchemas";
import { z } from "zod";

type Issue = z.infer<typeof createIssueSchema>;

const IssuesList = async () => {
  const response = await fetch("http://localhost:3000/api/issues", {
    method: "GET",
    next: { revalidate: 1000, tags: ["issues"] },
  });
  const issues = await response.json();
  console.log();
  return (
    <>
      <h2>Issues:</h2>
      <ul>
        {issues.map((is: Issue) => {
          return (
            <li>
              {is.title} {is.description}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default IssuesList;
