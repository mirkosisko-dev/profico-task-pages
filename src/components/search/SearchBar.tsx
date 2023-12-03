import clsx from "clsx";
import Image from "next/image";
import React from "react";

import useIsMobile from "@/hooks/useIsMobile";

import { ChangeEvent, FC, useCallback, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { parseAsString, useQueryStates } from "next-usequerystate";
import { useRouter } from "next/router";

import styles from "./SearchBar.module.scss";

interface ISearchBarProps {}

const SearchBar: FC<ISearchBarProps> = () => {
  const [q, setQ] = React.useState<string | undefined>();

  const [queryStates, updateQueryStates] = useQueryStates({
    q: parseAsString,
    category: parseAsString,
  });

  const isMobile = useIsMobile();
  const debouncedQuery = useDebounce(q, 400);
  const { push, pathname } = useRouter();

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  }, []);

  const pushToLanding = () => {
    if (!pathname.includes("/landing")) push("/landing");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pushToLanding();
    if (!isMobile) updateQueryStates({ q: debouncedQuery, category: null });
  };

  useEffect(() => {
    if (debouncedQuery && isMobile) {
      updateQueryStates({ q: debouncedQuery, category: null });
    }
  }, [debouncedQuery, isMobile]);

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <Image alt="search icon" src="/icons/search.svg" height={16} width={16} />
      <input
        onChange={handleOnChange}
        className={styles.input}
        placeholder="Search news"
      />

      <button className={clsx("hideOnMobile", styles.button)}>
        <p className={styles.btn}>Search</p>
      </button>
    </form>
  );
};

export default SearchBar;
