import { Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";

const IssuesList = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="hidden md:table-cell">
          Status
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell className="hidden md:table-cell">
          Created at
        </Table.ColumnHeaderCell>
      </Table.Header>
      <Table.Body>
        {issues.map((is: any) => {
          return (
            <Table.Row>
              <Table.RowHeaderCell>
                {is.title}
                <div className="block md:hidden">{is.status}</div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                {is.status}
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
