"use client";

import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

const Search = ({ alwaysOpen }: { alwaysOpen?: boolean }) => {
  const [open, setOpen] = useState(false);

  if (alwaysOpen || open)
    return (
      <form>
        <input
          className="rounded bg-gray-100 px-2 py-1 text-xs"
          type="text"
          placeholder="Search documentation..."
        />
      </form>
    );

  return (
    <MagnifyingGlass
      className="cursor-pointer"
      onClick={() => setOpen(true)}
      weight="bold"
      size={20}
    />
  );
};

export default Search;
