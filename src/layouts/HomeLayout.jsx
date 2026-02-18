import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import { Latest } from "../components/Latest";

export const HomeLayout = () => {
  return (
    <div className="flex justify-center flex-col items-center px-4">
      <header>
        <Header />
      </header>
      <section className="latest ">
        <Latest />
      </section>
      <section className="left"></section>
      <section className="mid">
        <Outlet></Outlet>
      </section>
      <section className="right"></section>
    </div>
  );
};
