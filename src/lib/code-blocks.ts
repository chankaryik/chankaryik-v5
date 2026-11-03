import type { ShikiTransformer, ThemeRegistration } from 'shiki'

/*
 * Code in Posts is highlighted at build time by Shiki, in the site's two colours: keywords are
 * bold and comments are italic, and everything is ink. The transformer then drops the theme's
 * colours so the stylesheet sets them, and hangs each listing from a label naming its language.
 */

export const inkTheme: ThemeRegistration = {
    name: 'ink',
    type: 'light',
    colors: { 'editor.foreground': '#1a1a1a', 'editor.background': '#f2f2f2' },
    tokenColors: [
        {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { fontStyle: 'italic' },
        },
        {
            scope: ['keyword', 'storage', 'keyword.operator.new', 'keyword.operator.expression'],
            settings: { fontStyle: 'bold' },
        },
    ],
}

// How each language is named on its listing's label; others show the name the Post gives
const languageNames: Record<string, string> = {
    astro: 'Astro',
    bash: 'Shell',
    css: 'CSS',
    diff: 'Diff',
    html: 'HTML',
    javascript: 'JavaScript',
    js: 'JavaScript',
    json: 'JSON',
    jsx: 'JSX',
    markdown: 'Markdown',
    md: 'Markdown',
    php: 'PHP',
    scss: 'Sass',
    sh: 'Shell',
    shell: 'Shell',
    sql: 'SQL',
    ts: 'TypeScript',
    tsx: 'TSX',
    typescript: 'TypeScript',
    vue: 'Vue',
    yaml: 'YAML',
    yml: 'YAML',
    zsh: 'Shell',
}

/** Removes the colour declarations from a hast style string, keeping weight and slant. */
function withoutColours(style: unknown): string | undefined {
    const kept = String(style ?? '')
        .split(';')
        .map((declaration) => declaration.trim())
        .filter((declaration) => declaration && !/^(background-)?color\s*:/i.test(declaration))
    return kept.length ? kept.join(';') : undefined
}

export const inkTransformer: ShikiTransformer = {
    name: 'ink',
    pre(node) {
        // Colours, background and overflow come from the stylesheet
        delete node.properties.style
    },
    span(node) {
        const style = withoutColours(node.properties.style)
        if (style) node.properties.style = style
        else delete node.properties.style
    },
    root(root) {
        const pre = root.children[0]
        const language = this.options.lang
        if (pre?.type !== 'element' || language === 'plaintext' || language === 'text') return
        root.children = [
            {
                type: 'element',
                tagName: 'figure',
                properties: { className: ['code'] },
                children: [
                    {
                        type: 'element',
                        tagName: 'figcaption',
                        properties: {},
                        children: [{ type: 'text', value: languageNames[language] ?? language }],
                    },
                    pre,
                ],
            },
        ]
    },
}
