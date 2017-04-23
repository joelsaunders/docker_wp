import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
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