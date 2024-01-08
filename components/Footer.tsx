import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex items-center space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
        </div>
        <div className="mb-2 space-x-2 text-center text-sm text-gray-500 dark:text-gray-400 md:flex">
          <Link href="/">{siteMetadata.title}</Link>
          <div>{` • `}</div>
          <Link href="/imprint">Imprint</Link>
          <div>{` • `}</div>
          <div>
            {siteMetadata.author} {`© ${new Date().getFullYear()}`}
          </div>
        </div>
      </div>
    </footer>
  )
}
