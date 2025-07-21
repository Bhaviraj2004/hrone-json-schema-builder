import React from "react";
import SchemaBuilder from "../components/builder/SchemaBuilder";

const Home: React.FC = () => (
  <div className="max-w-7xl mx-auto p-6 bg-white rounded-2xl">
    <h1 className=" font-bold text-left text-3xl">JSON Schema Builder</h1>
    <SchemaBuilder />
  </div>
);
export default Home;
