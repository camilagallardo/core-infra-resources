import React, { useEffect, useState } from 'react'
import { DocsThemeConfig, useTheme } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Script from 'next/script'

const isDarkMode = (theme, systemTheme) => {
  return theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
}
const darkLogo = '/logos/ps-restful-dark.svg'
const lightLogo = '/logos/ps-restful.svg'

const gtag_style="display:none;visibility:hidden"

const config: DocsThemeConfig = {
  logo: () => {
    const { theme, systemTheme } = useTheme()
    const [color, setColor] = useState('dark')
    const [csystemColor, setSystemColor] = useState('dark')

    useEffect(() => {
      setColor(theme), setSystemColor(systemTheme)
    }, [])

    useEffect(() => {
      setColor(theme)
      setSystemColor(systemTheme)
    }, [theme, systemTheme])

    return (
      <>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54HFXCG5"
          height="0" width="0"></iframe>
        </noscript>
        <Script src="/scripts/ga.js" />
        <Script src="/scripts/gtm.js" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-0BDS2DNG2F" />
        <Image
          src={isDarkMode(color, csystemColor) ? darkLogo : lightLogo}
          alt="PS RESTful Logo"
          width={160}
          height={46}
        />
      </>
      
    )
  },
  footer: {
    text: (
      <span>
        <a href="https://psrestful.com" target="_blank">
          PS RESTful © {new Date().getFullYear()}
        </a>
        &nbsp; All rights reserved.
      </span>
    ),
  },
  editLink: {
    text: '',
  },
  feedback: {
    content: () => null,
  },
  head: () => {
    const { frontMatter, darkMode } = useConfig()
    const title = frontMatter.title || "PSRESTful API"
    return (
      <>
        <title>{title}</title>
        <meta
          name="keywords"
          content={frontMatter.keywords || 'PromoStandards, RESTful, API'}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            'From PromoStandards to JSON Proxy!'
          }
        />
        <meta property="og:image" content="https://psrestful.com/static/images/ps-restful.svg"/>
        <meta property="og:type" content="website"/>
        <link rel="shortcut icon" type="image/ico" href="/logos/favicon.ico"></link>
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – PS RESTful API",
    }
  },
}

export default config
