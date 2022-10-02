import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import Search from "./Search";
import JobsList from "./JobsList";
import PaginationButtons from "./Pagination";
import { JobContext } from "../context/JobContext";
function Home() {
  const { t } = useTranslation();

  const { page, setPage, itemQuery, setItemQuery } = useContext(JobContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItemQuery((prevParams) => {
      return { ...prevParams, [name]: value };
    });
  };
  const handleSearch = (e) => {};
  return (
    <div>
      <h1></h1>
      <Search handleChange={handleChange} handleSearch={handleSearch} />
      <JobsList />
      <PaginationButtons page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
