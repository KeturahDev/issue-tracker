"use client";
import { Button, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams();
  if (searchParams.get("status"))
    params.append("status", searchParams.get("status")!);
  if (searchParams.get("orderBy"))
    params.append("orderBy", searchParams.get("orderBy")!);

  const getHref = (p: number | "forward" | "back") => {
    let pageValue;
    if (p === "forward") pageValue = currentPage + 1;
    if (p === "back") pageValue = currentPage - 1;

    return `/issues${
      params
        ? "?" + params.toString() + `&page=${pageValue || p}`
        : `?page=${pageValue || p}`
    }`;
  };

  const pageCount: number = Math.ceil(itemCount / pageSize);
  let pages = [];

  for (let p = 1; p <= pageCount; p++) {
    pages.push(
      <div
        key={p}
        className={classNames({
          "font-bold": p === currentPage,
        })}
      >
        <Link href={getHref(p)}>{p}</Link>
      </div>
    );
  }

  return (
    <Flex align="center" gap="3">
      <div>
        <Button
          variant="soft"
          disabled={currentPage === 1}
          onClick={() => router.push(getHref("back"))}
        >
          <RxCaretLeft />
        </Button>
      </div>
      {pages.map((page) => page)}
      <div>
        <Button
          variant="soft"
          disabled={currentPage === pages.length}
          onClick={() => router.push(getHref("forward"))}
        >
          <RxCaretRight />
        </Button>
      </div>
    </Flex>
  );
};

export default Pagination;
