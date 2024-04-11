import { Flex } from "@radix-ui/themes";
import classNames from "classnames";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount: number = Math.ceil(itemCount / pageSize);
  let pages = [];

  for (let p = 0; p < pageCount; p++) {
    pages.push(
      <div
        key={p}
        className={classNames({
          "font-bold": p === currentPage,
        })}
      >
        {p}
      </div>
    );
  }

  return (
    <Flex gap="3">
      <div>Back</div>
      {pages.map((page) => page)}
      <div>Forward</div>
    </Flex>
  );
};

export default Pagination;
