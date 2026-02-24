import React, { Suspense } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import postLogo from "../assets/nav-logo.png";
import star from "../assets/star.png";

export const CategoryNews = () => {
  const news = useLoaderData();
  const { id } = useParams();
  const categoryData = news.filter(
    (filterNews) => filterNews.category_id == id,
  );
  //console.log(categoryData);
  return (
    <Suspense
      fallback={<span className="loading loading-dots loading-xl"></span>}
    >
      {categoryData == 0 ? (
        <p>No Post Availeable</p>
      ) : (
        <div className=" grid gap-4">
          {categoryData.map((newsData) => (
            <div
              key={newsData.id}
              className="card bg-base-100 w-full shadow-sm"
            >
              <div className="flex justify-between items-center bg-base-200 p-4">
                <div className="flex gap-4">
                  <img
                    src={newsData.author.img}
                    alt="author img"
                    className="w-10 object-cover rounded-full"
                  />
                  <div>
                    <p className="text-base font-semibold">
                      {newsData.author.name}
                    </p>
                    <p className="text-sm text-accent">
                      {newsData.author.published_date.split("T")[0]}
                    </p>
                  </div>
                </div>
                <div>
                  <img src={postLogo} alt="postLogo" className="w-6" />
                </div>
              </div>
              <p className="p-4 font-bold">{newsData.title}</p>
              <figure className="px-4 pt-4">
                <img
                  src={newsData.image_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                {newsData.details.length > 200 ? (
                  <>
                    <p>{newsData.details.slice(0, 200)}...</p>
                    <Link
                      to={`/news/${newsData.id}`}
                      className="text-orange-500"
                    >
                      Read More
                    </Link>
                  </>
                ) : (
                  newsData.details
                )}

                <hr className="border-0" />
                <div className="flex justify-between items-center text-accent text-xl ml-1">
                  <div className="flex justify-center items-center gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p>{newsData.rating.number}</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm">
                      View: {newsData.total_view}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Suspense>
  );
};
