import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import { Latest } from "../components/Latest";
import { Navbar } from "../components/Navbar";
import { Categories } from "../components/Categories";
import { RightAside } from "../components/RightAside";

export const HomeLayout = () => {
  return (
    <div className="flex justify-center flex-col items-center px-4  mx-auto">
      <header>
        <Header />
      </header>
      <section className="latest ">
        <Latest />
      </section>
      <section className="w-full">
        <Navbar />
      </section>
      <main className=" w-full grid grid-cols-12 gap-4">
        <section className="left col-span-3 ">
          <aside className="sticky top-0 z-50">
            <Categories />
          </aside>
        </section>
        <section className="mid col-span-6 flex justify-center">
          <Outlet></Outlet>
        </section>
        <section className="right col-span-3">
          <RightAside />
        </section>
      </main>
    </div>
  );
};
