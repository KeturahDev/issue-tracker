"use client";
import { Flex } from "@radix-ui/themes";
import classNames from "classnames";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const searchParams = useSearchParams();
  const pageCount: number = Math.ceil(itemCount / pageSize);
  let pages = [];

  for (let p = 1; p <= pageCount; p++) {
    const params = new URLSearchParams();
    if (searchParams.get("status"))
      params.append("status", searchParams.get("status")!);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    pages.push(
      <div
        key={p}
        className={classNames({
          "font-bold": p === currentPage,
        })}
      >
        <Link
          href={`/issues${
            params ? "?" + params.toString() + `&page=${p}` : `?page=${p}`
          }`}
        >
          {p}
        </Link>
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
