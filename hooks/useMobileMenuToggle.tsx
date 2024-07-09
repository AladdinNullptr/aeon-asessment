"use client";

import { useState } from "react";
import { List, X } from "phosphor-react";

const useMobileMenuToggle = () => {
  const [open, setOpen] = useState(false);

  return {
    open,
    Component: () =>
      open ? (
        <X
          className="cursor-pointer"
          size={20}
          onClick={() => setOpen(false)}
        />
      ) : (
        <List
          className="cursor-pointer"
          size={20}
          onClick={() => setOpen(true)}
        />
      ),
  };
};

export default useMobileMenuToggle;
