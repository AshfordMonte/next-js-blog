import React from "react";
import Link from "next/link";

// This will be the landing page where the blogs will be shown

function IndexPage(props) {
  return (
    <div>
      <h1>Blog list</h1>
      <ul>
        {/* List out the retrieved blogs */}
        {props.blogs.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/blog/${blog.slug}`}>
                  <a>{blog.title}</a>
              </Link>
              <p>{blog.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  // Retrieves all blog files and orders them ascending by date
  var blogFiles = fs.readdirSync(`${process.cwd()}/contents`, "utf-8", function (err, files) {
    files = files.map(function (fileName) {
      return {
        name: fileName,
        time: fs.statSync(`${process.cwd()}` + '/' + fileName).mtime.getTime()
      };
    })
      .sort(function (a, b) {
        return a.time - b.time;
      })
      .map(function (v) {
        return v.name
      })
  });

  // Parse blog markdown file into an object that contains content and front-matter data
  const blogs = blogFiles
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/contents/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}

export default IndexPage;