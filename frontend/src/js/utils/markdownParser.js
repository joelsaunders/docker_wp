import marked, { Renderer } from 'marked';
import hljs from 'highlight.js';

const renderer = new Renderer();
renderer.code = (code, language) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(language && hljs.getLanguage(language));
  // Highlight only if the language is valid.
  const highlighted = validLang ? hljs.highlight(language, code).value : code;
  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

marked.setOptions({
	renderer: renderer,
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
    highlight: (code) => {
        return hljs.highlightAuto(code).value;
    }
})

export const parseMarkdown =  (content) => {
    const rawHTML = marked(content);
    return {__html: rawHTML};
}