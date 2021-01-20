---
title: My First Blog Post
slug: My-First-Blog-Post
date: "1/20/2021"
---

# Welcome to my first blog post!

#### Written on 1/20/2021

I created this first post to become familiar with the Markdown editor that I am using called [Typora](https://typora.io/). When it comes to Markdown I find the syntax is easy to understand and I am sure that soon enough it will become second nature to me. I will write more about the purpose of this blog and the content you can expect to see, but at the time of writing I am still early into development and I haven't even begun styling!

I will now add a variety of elements to this post in order to assist me with developing the styling.

Here we have a code block that currently represents the first 25 lines of this very sites index page! (I was pleasantly surprised that jsx was a supported language for code blocks)

```jsx
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
```

Next I would like to list out some things that I like

## Things That I Like

* Computers
* Programming
* JavaScript

Here is a picture of a dog: 

![Dog picture](https://vetstreet.brightspotcdn.com/dims4/default/1d87d20/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F3a%2Fc3%2F424ee1bf4768973966bde73acda8%2Fgerman-shepherd-AP-1S7FRX-645sm12913.jpg)

That will conclude my first written post. I am very excited to see how this progresses!