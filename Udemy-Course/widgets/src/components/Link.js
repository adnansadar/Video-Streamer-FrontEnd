import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    // adds an entry to the browser's session history stack.
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <div>
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    </div>
  );
};

export default Link;
