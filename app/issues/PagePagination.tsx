import React from "react";
import Pagination from "../components/Pagination";
import prisma from "@/prisma/client";

const PagePagination = async ({ page }: { page: number }) => {
  const itemCount = (await prisma.issue.findMany()).length;
  const currentPage = page ? page : 0;

  return (
    <div>
      <Pagination
        itemCount={itemCount}
        pageSize={7}
        currentPage={currentPage | 0}
      />
    </div>
  );
};

export default PagePagination;
