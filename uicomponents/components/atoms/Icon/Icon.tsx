import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "./icon.module.css";

interface iconProps {
  type: "search" | "globe" | "menu" | "userCircle" | "users";
}

/**
 * Primary UI component for user interaction
 */
export const Icon = ({ type }: iconProps) => {
  switch (type) {
    case "search":
      return <SearchIcon className="icon" />;
    case "globe":
      return <GlobeAltIcon className="icon" />;
    case "menu":
      return <MenuIcon className="icon" />;
    case "userCircle":
      return <UserCircleIcon className="icon" />;
    case "users":
      return <UsersIcon className="icon" />;
  }
};
