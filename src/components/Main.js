import { useState } from "react";
import useFetch from "./functions_hooks/useFetch";
import Home from "./Home";

const Main = ({ baseURL, homePage }) => {
  const [blogs, setBlogs] = useState([]);
  const fetchProps = useFetch(baseURL, setBlogs);

  return (
    <>
      {homePage ? (
        <Home
          fetchProps={fetchProps}
          blogs={blogs}
          setBlogs={setBlogs}
          head="All Blogs"
          baseURL={baseURL}
        />
      ) : (
        <Home
          fetchProps={fetchProps}
          blogs={blogs.filter(({ bookmarked }) => bookmarked)}
          setBlogs={setBlogs}
          head="Bookmarked Blogs"
          baseURL={baseURL}
        />
      )}
    </>
  );
};

export default Main;
