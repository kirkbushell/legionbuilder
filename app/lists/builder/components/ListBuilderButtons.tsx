import React from "react";
import Link from "next/link";
import { listState } from "../state";
import SaveListButton from "./SaveListButton";

const ListBuilderButtons = () => {
  const { clearList } = listState();

  return (
    <div className="w-full flex flex-wrap gap-4 justify-center text-center mt-2">
      <SaveListButton className="bg-backgrounds-950 text-backgrounds-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-tertiary-700">
        Save
      </SaveListButton>
      <Link
        href="/lists/view"
        className=" bg-primary-950 text-primary-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-tertiary-700"
      >
        View
      </Link>
      <button
        onClick={clearList}
        className=" bg-primary-950 text-primary-50 px-2 py-1 font-bold font-graduate rounded-lg hover:text-tertiary-700"
      >
        Clear
      </button>
    </div>
  );
};

export default ListBuilderButtons;
