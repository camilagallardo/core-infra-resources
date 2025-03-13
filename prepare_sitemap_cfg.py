#!/usr/bin/env python
import os

STARTING_PATH = "./pages"
 

def is_page(filename: str) -> bool:
    return filename.endswith(".md") or filename.endswith(".mdx")


def remove_ext(x: str):
    lst = x.split('.')
    return '.'.join(lst[:-1])


def gen_path_name(filename: str, root: str):
    starting = root[7:]
    return os.path.join(starting, remove_ext(filename))

def prepare_file(additional_paths: str):
    header = """
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://docs.psrestful.com',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false,
    additionalPaths: async (config) => ["""
    footer = """
      ],
    
  }"""
    with open('next-sitemap.config.js', 'w') as f:
        f.write(header)
        f.write(additional_paths)
        f.write(footer)


def main():
    lst = []
    for (root, _, file) in os.walk(STARTING_PATH):
        for f in file:
            if is_page(f):
                path = gen_path_name(f, root)
                if path != 'index':
                    lst.append(f"await config.transform(config, '{path}')")
    print(prepare_file(',\n'.join(lst)))


if __name__ == "__main__":
    main()
