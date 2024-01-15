import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
  text_only?: boolean
  projects?: boolean
  active?: boolean
}

const Tag = ({ text, text_only, projects, active }: Props) => {
  const fixedSlug = projects ? '/projects' : '/blog/tags'
  const activeClass = active ? 'underline' : ''

  return text_only ? (
    <span className="mr-3 text-sm font-medium uppercase text-primary-500 ">
      {text.split(' ').join('-')}
    </span>
  ) : (
    <Link
      href={`${fixedSlug}/${slug(text)}`}
      className={`mr-3 ${activeClass} whitespace-nowrap text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400`}
    >
      {text.split(' ').join('-')} {active}
    </Link>
  )
}

export default Tag
