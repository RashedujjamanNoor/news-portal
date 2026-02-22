import React, { use, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router";

export const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-1 text-accent ">
        <div>
          <p className="font-semibold text-xl">All Category</p>
        </div>
        {category.map((data) => (
          <NavLink className="px-4 py-2" to={`category/${data.id}`}>
            <p key={data.id} className=" px-4 py-2 ">
              {data.name}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
