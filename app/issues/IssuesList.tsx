import { Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import Badge from "../components/Badge";
import delay from "delay";

const IssuesList = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Created at
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((is) => {
          return (
            <Table.Row key={is.id}>
              <Table.RowHeaderCell>
                {is.title}
                <div className="block md:hidden">
                  <Badge status={is.status} />
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <Badge status={is.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {is.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesList;
