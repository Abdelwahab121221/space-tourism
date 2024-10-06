import React from "react";
import '../style/NotFoundPage.css'
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="bellefair-regular">404 - Page Not Found</h1>
      <p className="barlow-regular">Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
