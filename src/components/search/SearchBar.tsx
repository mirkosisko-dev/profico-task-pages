"use client";

import clsx from "clsx";
import Image from "next/image";

import useQueryParams from "@/hooks/useQueryParams";

import { ChangeEvent, FC, useCallback } from "react";

import styles from "./SearchBar.module.scss";

interface ISearchBarProps {}

const SearchBar: FC<ISearchBarProps> = ({}) => {
  const { setQueryParams } = useQueryParams<{
    q: string;
  }>();

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setQueryParams({ q: e.target.value });
    },
    [setQueryParams]
  );

  return (
    <div className={styles.container}>
      <Image alt="search icon" src="/icons/search.svg" height={16} width={16} />

      <input
        onChange={handleOnChange}
        className={styles.input}
        placeholder="Search news"
      />

      <button className={clsx("hideOnMobile", styles.button)}>Search</button>
    </div>
  );
};

export default SearchBar;
