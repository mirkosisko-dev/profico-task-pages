import clsx from "clsx";
import Image from "next/image";

import useQueryParams from "@/hooks/useQueryParams";

import { ChangeEvent, FC, useCallback, useEffect } from "react";

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

  const onClick = () => {
    if (!isMobile) setQueryParams({ q: debouncedQuery });
  };

  useEffect(() => {
    if (debouncedQuery && isMobile) {
      setQueryParams({ q: debouncedQuery });
    }
  }, [debouncedQuery, isMobile, setQueryParams]);

  return (
    <div className={styles.container}>
      <Image alt="search icon" src="/icons/search.svg" height={16} width={16} />

      <input
        onChange={handleOnChange}
        className={styles.input}
        placeholder="Search news"
      />

      <button className={clsx("hideOnMobile", styles.button)} onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
