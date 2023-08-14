import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/Button/Button";

export const SearchForm = () => {
  return (
    <form className="w-full md:max-w-[400px] relative flex">
      <label className="sr-only" htmlFor="search-input">
        Szukaj produktów
      </label>
      <input
        type="text"
        placeholder="Szukaj produktów..."
        className="h-11 pr-11 w-full rounded-lg border bg-white dark:bg-neutral-800 px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-400"
        id="search-input"
      />
      <div className="absolute right-0">
        <Button type="submit" size="icon" variant="search">
          <span className="sr-only">szukaj</span>
          <FaSearch />
        </Button>
      </div>
    </form>
  );
};
