import React from "react";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="container">
      <h1 className="error">404</h1>
      <h2 className="message">Page Not Found</h2>
      <p className="message-text">
        The page you are looking for does not exist or has been moved.
      </p>
      <a href="/" className="link">
        Go Home
      </a>
    </div>
  );
};

export default Page404;
