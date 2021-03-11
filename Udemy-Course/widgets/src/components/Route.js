import { useEffect, useState } from "react";
const Route = ({ path, children }) => {
  const [currentPath, setcurrentPath] = useState(window.location.pathname);
  // components(Accordion, Search, Translate) are passed as children to Route
  // window.location.pathname returns the path in the search bar("/","/list","/translate")
  useEffect(() => {
    const onLocationChange = () => {
      setcurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
