import Image from './Image'
import Link from './Link'
import Tag from './Tag'

const Card = ({ title, description, imgSrc, placeholderImgSrc, href, tags }) => (
  <div
    className={`${
      imgSrc && 'h-full'
    }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
  >
    {imgSrc &&
      (href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-top md:h-40 lg:h-56"
            width={1600}
            height={750}
            placeholder="blur"
            blurDataURL={placeholderImgSrc}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-top md:h-40 lg:h-56"
          width={1600}
          height={750}
          placeholder="blur"
          blurDataURL={placeholderImgSrc}
        />
      ))}
    <div className="p-6">
      {tags && tags.map((tag) => <Tag text={tag} key={tag} text_only />)}
      <h2 className="mb-3 text-2xl font-bold leading-7 tracking-tight text-black  hover:text-opacity-80 dark:text-white dark:hover:text-opacity-80">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      {href && (
        <Link
          href={href}
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link to ${title}`}
        >
          Visit Site &rarr;
        </Link>
      )}
    </div>
  </div>
)

export default Card
