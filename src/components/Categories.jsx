import React, { use, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router";

export const Categories = () => {
  const [category, setCategory] = useState([]);
  const news = useLoaderData();
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {category.map((data) => (
        <div key={data.id}>
          <NavLink to={`category/${data.id}`}>{data.name}</NavLink>
        </div>
      ))}
    </div>
  );
};
