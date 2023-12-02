import clsx from "clsx";
import Image from "next/image";

import useQueryParams from "@/hooks/useQueryParams";

import {
  ChangeEvent,
  FC,
  FormEventHandler,
  useCallback,
  useEffect,
} from "react";

import styles from "./SearchBar.module.scss";
import React from "react";
import { useDebounce } from "@/hooks/useDebounce";
import useIsMobile from "@/hooks/useIsMobile";

interface ISearchBarProps {}

const SearchBar: FC<ISearchBarProps> = ({}) => {
  const [q, setQ] = React.useState<string | undefined>();

  const { setQueryParams } = useQueryParams<{
    q: string;
  }>();
  const isMobile = useIsMobile();
  const debouncedQuery = useDebounce(q, 400);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isMobile) setQueryParams({ q: debouncedQuery });
  };

  useEffect(() => {
    if (debouncedQuery && isMobile) {
      setQueryParams({ q: debouncedQuery });
    }
  }, [debouncedQuery, isMobile, setQueryParams]);

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
