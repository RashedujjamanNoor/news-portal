import React from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import { LoginWith } from "../components/LoginWith";
import { FindUsOn } from "../components/FindUsOn";
import { QZone } from "../components/QZone";

export const NewsPage = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singleNews = data.find((news) => news.id == id);
  //console.log(singleNews);
  return (
    <div className="max-w-300 mx-auto">
      <Header />
      <main className="mt-10 grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <h2 className="text-accent font-semibold text-xl">News Detail's</h2>
          <div>
            <img
              src={singleNews.image_url}
              alt="News Image Not Found"
              className="rounded-sm object-cover"
            />
            <h3 className="text-accent text-2xl font-semibold mt-5 max-w-4/5">
              {singleNews.title}
            </h3>
            <p className="text-accent text-justify mt-3">
              {singleNews.details}
            </p>
          </div>
        </div>
        <div className="col-span-3">
          <LoginWith />
          <FindUsOn />
          <QZone />
        </div>
      </main>
    </div>
  );
};
