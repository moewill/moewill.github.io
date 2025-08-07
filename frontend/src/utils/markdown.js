import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import matter from 'gray-matter'

const processor = remark()
  .use(remarkGfm)
  .use(remarkHtml, { sanitize: false })

export const parseMarkdown = async (content) => {
  try {
    const { data: frontmatter, content: markdown } = matter(content)
    const result = await processor.process(markdown)
    
    return {
      frontmatter,
      html: result.toString(),
      content: markdown
    }
  } catch (error) {
    console.error('Markdown parsing error:', error)
    throw new Error('Failed to parse markdown content')
  }
}

export const processTailwindClasses = (html) => {
  return html
    .replace(/<p class="([^"]*)">/g, '<p class="$1">')
    .replace(/<div class="([^"]*)">/g, '<div class="$1">')
    .replace(/<span class="([^"]*)">/g, '<span class="$1">')
    .replace(/<h([1-6]) class="([^"]*)">/g, '<h$1 class="$2">')
}

export const validateMarkdownStructure = (frontmatter) => {
  const required = ['title', 'description']
  const missing = required.filter(field => !frontmatter[field])
  
  if (missing.length > 0) {
    throw new Error(`Missing required frontmatter fields: ${missing.join(', ')}`)
  }
  
  return true
}

export const loadContent = async (contentPath) => {
  try {
    const response = await fetch(contentPath)
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.statusText}`)
    }
    
    const content = await response.text()
    const parsed = await parseMarkdown(content)
    
    validateMarkdownStructure(parsed.frontmatter)
    
    return {
      ...parsed,
      html: processTailwindClasses(parsed.html)
    }
  } catch (error) {
    console.error('Content loading error:', error)
    throw error
  }
}