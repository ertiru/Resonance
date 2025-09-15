import React from "react";
import SpecsData from "./SpecsData";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const Specs = () => {
  return (
    <div className="container">
      {SpecsData.map((item, index) => (
        <div className="infos">
          <h1>{item.title}</h1>

          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.desc}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default Specs;
