import { useState, lazy } from "react";

import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Search = lazy(() => import("./searchProduct"));
const Delete = lazy(() => import("./deleteProduct"));
const Update = lazy(() => import("./updateProduct"));
const Create = lazy(() => import("./createProduct"));

const enum View {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
}

export default function AdminView() {
  const [view, setView] = useState<View>(View.CREATE);

  return (
    <div className="flex flex-col space-y-5 items-center w-full justify-start  ">
      <Search />
      <div className="flex  gap-x-10 gap-y-10 flex-wrap items-center justify-center w-[60%] rounded-lg bg-slate-300 p-3">
        <div
          className="flex items-center   space-x-2.5"
          onClick={(e) => {e.preventDefault()
            setView(View.CREATE);
          }}
        >
          <span
            className="flex items-center justify-center w-8 h-8 border border-black rounded-full shrink-0 "
            style={{ borderColor: view === "create" ? "red" : "black" }}
          >
            <MdOutlineCreateNewFolder
              style={{ color: view === "create" ? "red" : "black" }}
            />
          </span>
          <span>
            <h3
              className="font-medium leading-tight"
              style={{ color: view === "create" ? "red" : "black" }}
            >
              create product
            </h3>
          </span>
        </div>
        <div
          className="flex items-center   space-x-2.5"
          onClick={(e) => {e.preventDefault()
            setView(View.UPDATE);
          }}
        >
          <span
            className="flex items-center justify-center w-8 h-8 border  border-black rounded-full shrink-0 "
            style={{ borderColor: view === "update" ? "red" : "black" }}
          >
            <RxUpdate
              style={{ color: view === "update" ? "red" : "black" }}
            />
          </span>
          <span>
            <h3
              className="font-medium leading-tight"
              style={{ color: view === "update" ? "red" : "black" }}
            >
              update product
            </h3>
          </span>
        </div>
        <div
          className="flex items-center  space-x-2.5"
          onClick={(e) => {e.preventDefault()
            setView(View.DELETE);
          }}
        >
          <span
            className="flex items-center justify-center w-8 h-8 border border-black rounded-full shrink-0 "
            style={{ borderColor: view === "delete" ? "red" : "black" }}
          >
            <MdDeleteForever
              style={{ color: view === "delete" ? "red" : "black" }}
            />
          </span>
          <span>
            <h3
              className="font-medium leading-tight"
              style={{ color: view === "delete" ? "red" : "black" }}
            >
              delete product
            </h3>
          </span>
        </div>
      </div>
      <div className="rounded-lg mb-10 w-full">
        {view === View.CREATE && <Create />}
        {view === View.UPDATE && <Update />}
        {view === View.DELETE && <Delete />}
      </div>
    </div>
  );
}
