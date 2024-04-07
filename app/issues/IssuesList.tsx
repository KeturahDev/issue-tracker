import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { Flex, Table } from "@radix-ui/themes";
import classNames from "classnames";
import NextLink from "next/link";
import { BsArrowUp } from "react-icons/bs";
import { Badge, Link } from "../components";

const IssuesList = async ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue };
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
  // const filter = searchParams.orderBy === keyof;
  const issues = await prisma.issue.findMany({
    where: { status },
    // filter: {},
  });

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          {columns.map((column, i) => {
            return (
              <Table.ColumnHeaderCell
                key={i}
                className={classNames({
                  "hidden md:table-cell": i > 0,
                })}
              >
                <NextLink
                  href={{
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  <Flex align="center">
                    {column.label}
                    {column.value === searchParams.orderBy && <BsArrowUp />}
                  </Flex>
                </NextLink>
              </Table.ColumnHeaderCell>
            );
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((is) => {
          return (
            <Table.Row key={is.id}>
              <Table.RowHeaderCell>
                <Link href={`/issues/${is.id}`}>{is.title}</Link>
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
