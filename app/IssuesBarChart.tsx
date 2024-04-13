"use client";
import { Card } from "@radix-ui/themes";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssuesBarChart = ({ open, inProgress, closed }: Props) => {
  const data: { label: string; count: number }[] = [
    { label: "Open", count: open },
    { label: "In Progress", count: inProgress },
    { label: "Closed", count: closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            dataKey="count"
            barSize={60}
            style={{ fill: "var(--accent-9)" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssuesBarChart;
