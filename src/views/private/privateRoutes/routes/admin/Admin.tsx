import { useState, lazy } from "react";

import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Search = lazy(() => import("./searchProduct"));
const Delete = lazy(() => import("./deleteProduct"));
const Change = lazy(() => import("./updateProduct"));
const Create = lazy(() => import("./createProduct"));

const enum View {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
}

export default function AdminView() {
  const [view, setView] = useState(View.CREATE);
  return (
    <div className="flex flex-col items-center w-full justify-start bg-slate-300 h-full"> 
    <Search/>
      <div className="flex m-10 gap-x-60 gap-y-10 flex-wrap items-center justify-center w-full ">
       
        <div
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          onClick={() => setView(View.CREATE)}
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 ">
            <MdOutlineCreateNewFolder />
          </span>
          <span>
            <h3 className="font-medium leading-tight">create product</h3>
          </span>
        </div>
        <div
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          onClick={() => setView(View.UPDATE)}
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 ">
            <GrUpdate />
          </span>
          <span>
            <h3 className="font-medium leading-tight">update product</h3>
          </span>
        </div>
        <div
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          onClick={() => setView(View.DELETE)}
        >
          <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 ">
            <MdDeleteForever />
          </span>
          <span>
            <h3 className="font-medium leading-tight">delete product</h3>
          </span>
        </div>
      </div>
      <div className="rounded-lg">
        {view === View.CREATE && <Create />}
        {view === View.UPDATE && <Change />}
        {view === View.DELETE && <Delete />}
      </div>
    </div>
  );
}
