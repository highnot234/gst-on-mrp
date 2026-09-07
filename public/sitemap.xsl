<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — GST on MRP</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #fafafa;
            color: #404040;
            line-height: 1.6;
          }
          header {
            background: #fff;
            border-bottom: 1px solid #ededed;
            padding: 1rem 1.5rem;
          }
          header a {
            font-size: 1.0625rem;
            font-weight: 700;
            color: #0a0a0a;
            text-decoration: none;
          }
          header a span { color: #16a34a; }
          main {
            max-width: 56rem;
            margin: 2.5rem auto;
            padding: 0 1.25rem;
          }
          h1 {
            font-size: 1.375rem;
            font-weight: 700;
            color: #0a0a0a;
            margin-bottom: 0.375rem;
          }
          .meta {
            font-size: 0.875rem;
            color: #a3a3a3;
            margin-bottom: 1.75rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border: 1px solid #ededed;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(10,10,10,.05);
          }
          thead th {
            background: #fafafa;
            padding: 0.75rem 1.25rem;
            font-size: 0.8125rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .06em;
            color: #737373;
            border-bottom: 1px solid #ededed;
            text-align: left;
          }
          tbody tr:not(:last-child) td { border-bottom: 1px solid #ededed; }
          tbody tr:hover td { background: #fafafa; }
          td {
            padding: 0.875rem 1.25rem;
            font-size: 0.9375rem;
            vertical-align: middle;
          }
          td a {
            color: #0f7a37;
            font-weight: 500;
            text-decoration: none;
            word-break: break-all;
          }
          td a:hover { text-decoration: underline; text-underline-offset: 2px; }
          .badge {
            display: inline-block;
            padding: 0.2rem 0.65rem;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 600;
          }
          .prio-high   { background: #f0fdf4; color: #0f7a37; }
          .prio-medium { background: #fafafa; color: #404040; }
          .prio-low    { background: #f4f4f5; color: #737373; }
          footer {
            text-align: center;
            padding: 2rem 1rem 3rem;
            font-size: 0.8125rem;
            color: #a3a3a3;
          }
        </style>
      </head>
      <body>
        <header>
          <a href="/"><span>GST</span> on MRP</a>
        </header>

        <main>
          <h1>XML Sitemap</h1>
          <p class="meta">
            <xsl:value-of select="count(sm:urlset/sm:url)"/> URL(s) —
            submit <strong>https://gstonmrp.com/sitemap.xml</strong> to
            Google Search Console.
          </p>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last modified</th>
                <th>Change frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <xsl:sort select="sm:priority" order="descending" data-type="number"/>
                <tr>
                  <td>
                    <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                  </td>
                  <td><xsl:value-of select="sm:lastmod"/></td>
                  <td><xsl:value-of select="sm:changefreq"/></td>
                  <td>
                    <xsl:variable name="p" select="sm:priority"/>
                    <xsl:choose>
                      <xsl:when test="$p >= 0.8">
                        <span class="badge prio-high"><xsl:value-of select="$p"/></span>
                      </xsl:when>
                      <xsl:when test="$p >= 0.5">
                        <span class="badge prio-medium"><xsl:value-of select="$p"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="badge prio-low"><xsl:value-of select="$p"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>

        <footer>
          Generated by GST on MRP · <a href="/robots.txt">robots.txt</a>
        </footer>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
