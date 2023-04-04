import React from "react";
import useSiteMetadata from "../useSiteMetadata";

export function Head() {
  const { title } = useSiteMetadata();
  return (
    <>
      <title>{title}</title>
    </>
  );
}

export default function IndexPage() {
  const { title, description, emoji } = useSiteMetadata();
  return (
    <main>
      <header>
        <h1>
          {title} {emoji}
        </h1>
        <p>{description}</p>
      </header>
      <p>
        <a href="/api/hello">Go to Gatsby Function `hello`</a>
      </p>
    </main>
  );
}
