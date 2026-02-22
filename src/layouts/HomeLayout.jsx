import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import { Latest } from "../components/Latest";
import { Navbar } from "../components/Navbar";
import { Categories } from "../components/Categories";

export const HomeLayout = () => {
  return (
    <div className="flex justify-center flex-col items-center px-4 max-w-300 mx-auto">
      <header>
        <Header />
      </header>
      <section className="latest ">
        <Latest />
      </section>
      <section className="w-full">
        <Navbar />
      </section>
      <section className="left">
        <aside>
          <Categories />
        </aside>
      </section>
      <section className="mid">
        <Outlet></Outlet>
      </section>
      <section className="right"></section>
    </div>
  );
};
