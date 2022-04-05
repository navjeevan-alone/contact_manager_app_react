import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function ErrorPage() {
  return (
    <header className="error-page text-center py-2">
      <h1>404! Not found</h1>
      <p>
        Go To
        <Link to="/">
          <Button variant="primary">Home</Button>
        </Link>
      </p>
    </header>
  );
}
export default ErrorPage;
