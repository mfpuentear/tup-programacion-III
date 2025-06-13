import theme from "https://esm.sh/@shikijs/themes@1/material-theme-darker";
import html from "https://esm.sh/@shikijs/langs@1/html";
import css from "https://esm.sh/@shikijs/langs@1/css";
import js from "https://esm.sh/@shikijs/langs@1/js";
import jsx from "https://esm.sh/@shikijs/langs@1/jsx";
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

mermaid.initialize({ theme: "dark", startOnLoad: true });
window.mermaid = mermaid;

window.$docsify = {
  name: "Programación III",
  loadSidebar: true,
  subMaxLevel: 2,
  search: { placeholder: "Escribe para buscar" },
  shiki: { theme, langs: [html, css, js, jsx] },
  copyCode: { buttonText: "Copiar", successText: "Copiado" },
  mermaidConfig: { querySelector: ".mermaid" },
};
