import { Table } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssuesListSkeleton = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <div className="space-y-5">
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
              <Table.Row key={is}>
                <Table.RowHeaderCell>
                  <Skeleton />
                  <div className="block md:hidden"></div>
                </Table.RowHeaderCell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <Skeleton />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesListSkeleton;
