import React from "react";
import { Link } from "gatsby";
import useSiteMetadata from "../useSiteMetadata";

export function Head() {
  const { title } = useSiteMetadata();
  return (
    <>
      <title>Page not found | {title}</title>
    </>
  );
}

export default function NotFoundPage() {
  return (
    <main>
      <header>
        <h1>Page not found</h1>
      </header>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
}
