import React from "react";
import Marquee from "react-fast-marquee";

export const Latest = () => {
  return (
    <div className="lg:max-w-300 bg-base-300 rounded-xl">
      <div className="w-11.5/12 flex flex-col md:flex-row justify-center items-center gap-4 mt-7 mx-auto p-4">
        <p className="btn btn-secondary">Latest</p>
        <Marquee
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={120}
          pauseOnHover={true}
        >
          <p style={{ marginRight: "50px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit
            incidunt provident, magni quidem itaque corporis, delectus vel minus
            praesentium aut voluptatum ad cupiditate consectetur, obcaecati
            asperiores dignissimos voluptates dolore.
          </p>
        </Marquee>
      </div>
    </div>
  );
};
