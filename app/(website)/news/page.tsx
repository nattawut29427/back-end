import React from "react";
import newdb from "./db";
import Link from "next/link";

async function getAllNews() {
  return newdb;
}

export default async function Newspage() {
  const new_list = await getAllNews();

  return (
    <>
      <div className="m-auto text-center">
        <div className="text-xl font-bold">หน้าข่าวใหม่</div>

        <div>
          <ul className="z-10">
            {new_list.map((item) => (
              <li key={item.id}>
                <Link href={`/news/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
