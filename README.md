# PS RESTful Documentation

[**Live Site →**](https://docs.psrestful.com)

## Local Development

- install `pnpm`

- run `pnpm i` to install the dependencies.

- run `pnpm dev` to start the development server and visit http://localhost:3000.

## Hints

- use [playgroud](https://mdxjs.com/playground/) to test your mdx

## Generate sitemap.xml

- run pnpm postbuild
- check result on http://localhost:3000/sitemap.xml, http://localhost:3000/robots.txt

## How to generate the markdown and diagrams

- use https://word2md.com/ to convert from docx to markdown(be careful with {} we need to scape them, to generate a new line inside a table use <br/>)
- in order to generate the UML diagrams use chatgpt add the docx file, ask chat to generate mermaid class diagrams based on the attached document
