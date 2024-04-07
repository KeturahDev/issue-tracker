"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: Status.OPEN },
  { label: "In Progress", value: Status.IN_PROGRESS },
  { label: "Closed", value: Status.CLOSED },
];

const IssueStatusFilter = () => {
  const router = useRouter();

  return (
    <Select.Root
      defaultValue=""
      onValueChange={(status) =>
        router.push(`/issues${status ? "?status=" + status : ""}`)
      }
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Issue Status</Select.Label>
          {statuses.map((status, i) => (
            <Select.Item key={i} value={status.value || ""}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
