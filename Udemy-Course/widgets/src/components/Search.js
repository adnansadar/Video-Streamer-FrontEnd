import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // shorter way
    // (async ()=>{
    //   await axios.get('asda')
    // })();
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    // First search
    if (term && !results.length) {
      search();
    } else {
      // if no term is present initially, search wont be done
      const timeoutID = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      // Cleanup function, it returns directly after second time component is rendered
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [term, results.length]);

  const renderedList = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Visit
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Search Term</label>
        <input
          className=" input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <div className="ui celled list">{renderedList}</div>
      </div>
    </div>
  );
};

export default Search;
