import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";

export default async function DisplaybyId({
  params,
}: {
  params: { id: number };
}) {
  params = await params;

  return (
    <>
      <div>หน้าข่าวใหม่{params.id} </div>
      <div></div>
    </>
  );
}
