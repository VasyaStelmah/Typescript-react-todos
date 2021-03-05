import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        voluptate aliquam aut iure quae maiores sit suscipit commodi magnam
        necessitatibus perferendis neque voluptatibus, veniam repellendus.
        Sapiente non molestiae eos odio!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Move to list items
      </button>
    </>
  );
};
