"use client";

import React from "react";
import { useActionState, useEffect } from "react";
import { friday } from "../../actions/friday";

const initialState = {
  message: "" as string,
};

export default function page() {
  const [state, formAction] = useActionState(friday, initialState);

  useEffect(() => {
    console.log("state", state);
  }, [state]);

  return (
    <>
    <div className="flex justify-center ">

      <form action={formAction} className="p-3 ">
        <div className="flex flex-row">
          <input
            className="bordered-1"
            type="date"
            name="date"
            id="date"
            required
            />
        </div>

        <button className="text-white">Submit</button>
        <p aria-live="polite" className="text-white">
        {state?.message}
      </p>
      </form>
    </div>
    </>
  );
}
