import React from "react";
import { LoginWith } from "./LoginWith";
import { FindUsOn } from "./FindUsOn";
import { QZone } from "./QZone";

export const RightAside = () => {
  return (
    <div className="sticky top-0">
      <LoginWith />
      <FindUsOn />
      <QZone />
    </div>
  );
};
