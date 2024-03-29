import React, { ReactNode } from "react";
import { Badge as RadixBadge } from "@radix-ui/themes";
import { Status } from "@prisma/client";

const getBadge: Record<Status, ReactNode> = {
  OPEN: <RadixBadge color="orange">Open</RadixBadge>,
  IN_PROGRESS: <RadixBadge color="blue">In Progress</RadixBadge>,
  CLOSED: <RadixBadge color="green">Closed</RadixBadge>,
};

const Badge = ({ status }: { status: Status }) => {
  return getBadge[status];
};

export default Badge;
