import clsx from "clsx";
import React from "react";
import SearchIcon from "@/assets/icons/search.svg";

import useIsMobile from "@/hooks/useIsMobile";

import { ChangeEvent, FC, useCallback, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { parseAsString, useQueryStates } from "next-usequerystate";
import { useRouter } from "next/router";
import { useTabsState } from "@/features/tabs/context/TabsContext";
import { TABS } from "../tabs/constants";

import styles from "./SearchBar.module.scss";

interface ISearchBarProps {
  testId: string;
}

const SearchBar: FC<ISearchBarProps> = ({ testId }) => {
  const [q, setQ] = React.useState<string | null>();
  const [queryStates, updateQueryStates] = useQueryStates({
    q: parseAsString,
    category: parseAsString,
  });

  const isMobile = useIsMobile();
  const debouncedQuery = useDebounce(q, 400);

  const router = useRouter();
  const { setCurrentTab } = useTabsState();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const pushToLanding = () => {
    router.push({ pathname: "/", query: { ...queryStates } });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateQueryStates({ q, category: null });
    router.pathname.includes("/bookmarks") && pushToLanding();
  };

  useEffect(() => {
    if (debouncedQuery && isMobile) {
      setCurrentTab(TABS.FEATURED);
      updateQueryStates({ q: debouncedQuery, category: null });
    }
  }, [debouncedQuery, isMobile, setCurrentTab]);

  return (
    <form
      onSubmit={onSubmit}
      className={styles.container}
      data-testid={`${testId}-bar`}
    >
      <SearchIcon />
      <input
        data-testid={`${testId}-input`}
        onChange={handleOnChange}
        className={styles.input}
        placeholder="Search news"
      />

      <button
        className={clsx("hideOnMobileAndTablet", styles.button)}
        data-testid={`${testId}-submit`}
      >
        <p className={styles.btn}>Search</p>
      </button>
    </form>
  );
};

export default SearchBar;
