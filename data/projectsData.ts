interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  placeholderImgSrc?: string
  tags?: Array<string>
}

const projectsData: Project[] = [
  {
    title: 'CMS Platform with tips & methods for achieving personal goals',
    description: `A private project featuring a platform where thousands of methods from books are generated by ChatGPT and systematically categorized to efficiently achieve goals.`,
    imgSrc: '/static/images/projects/clueties/clueties.jpg',
    placeholderImgSrc: '/static/images/projects/clueties/blurry-clueties.jpg',
    href: 'https://www.clueties.com',
    tags: ['Kirby CMS', 'AI Content'],
  },
  {
    title: 'Interactive Webflow Website for a Food Industry Company',
    description: `Condio develops and produces innovative stabilizers for the food industry. The aim was to transform a static design into an interactive one. It was important that the animations could also be reused in other areas. `,
    imgSrc: '/static/images/projects/condio/condio.jpg',
    placeholderImgSrc: '/static/images/projects/condio/blurry-condio.jpg',
    href: 'https://www.condio.com/de/',
    tags: ['Webflow', 'Animation'],
  },
  {
    title: 'Interactive Webflow Website for a Financial Service Provider',
    description: `Cap-on provides innovative financing solutions for production and acts as both a technology provider and a financing partner. The challenge was to present the company's concept as animatedly as possible in order to make it as understandable as possible for the user. A blog was also implemented.`,
    imgSrc: '/static/images/projects/cap-on/cap-on.jpg',
    placeholderImgSrc: '/static/images/projects/cap-on/blurry-cap-on.jpg',
    href: 'https://www.cap-on.de/',
    tags: ['Webflow', 'Animation'],
  },
  {
    title: 'Interactive Website for a Design & Development Agency',
    description: `BWS is a Düsseldorf agency that specializes in web design, web development and app development. The aim was to create a simple layout with detailed micro-animations. A blog was also integrated into the website.`,
    imgSrc: '/static/images/projects/bws/bws.jpg',
    placeholderImgSrc: '/static/images/projects/bws/blurry-bws.jpg',
    href: 'https://blueworld.studio/',
    tags: ['Webflow', 'Animation'],
  },
  {
    title: 'Webflow Website for a Personnel Service Provider',
    description: `For 30 years, the company has been placing professions and part-time jobs, regardless of whether they are project-based or long-term positions. The website was modernized and divided into the sections "Applicants" and "Companies". The aim was to create reusable components, multilingualism and the integration of a blog and a job board. `,
    imgSrc: '/static/images/projects/lenz-gomez/lenz-gomez.jpg',
    placeholderImgSrc: '/static/images/projects/lenz-gomez/blurry-lenz-gomez.jpg',
    href: 'https://www.lenz-gomez.de/',
    tags: ['Webflow', 'Animation'],
  },
  {
    title: 'Wordpress Website for the Health Resort Lanserhof',
    description: `The project was to create a WordPress website for Lanserhof, a renowned health resort with over 35 years of history. The task involved transitioning from Kirby CMS to WordPress, incorporating a fresh design and new animations to elevate the user experience and showcase Lanserhof's luxurious services.`,
    imgSrc: '/static/images/projects/lanserhof/lanserhof.jpg',
    placeholderImgSrc: '/static/images/projects/lanserhof/blurry-lanserhof.jpg',
    href: 'https://lanserhof.com/',
    tags: ['Wordpress'],
  },
  {
    title: 'Headless CMS for Industrie 4.0 Award',
    description: `The project was to build a headless CMS for the 'Industrie 4.0 Award', an accolade presented by ROI-EFESO to honor pioneers in industrial digitalization. It involved using Frontity, a React framework, to connect with WordPress, thereby creating a seamless and dynamic web presence for the award.`,
    imgSrc: '/static/images/projects/industrie40award/industrie40award.jpg',
    placeholderImgSrc: '/static/images/projects/industrie40award/blurry-industrie40award.jpg',
    href: 'https://www.industrie40award.com/',
    tags: ['Headless CMS', 'Wordpress', 'Animation'],
  },
  {
    title: 'Interactive Animations for Amiea',
    description: `For Amiea, a leader in micropigmentation and permanent makeup, the project entailed designing interactive animations. This involved crafting an innovative menu navigation coupled with parallax scrolling effects, elevating the website's dynamic and engaging user experience.`,
    imgSrc: '/static/images/projects/amiea/amiea.jpg',
    placeholderImgSrc: '/static/images/projects/amiea/blurry-amiea.jpg',
    href: 'https://amiea.com/de',
    tags: ['Webflow', 'Animation'],
  },
  {
    title: 'Wordpress Website for Blacksheep Festival',
    description: `The project entailed developing a WordPress website for the Blacksheep Festival, an annual music event in Bonfeld celebrated for indie, rock, and pop music, attracting thousands of fans. This redesign focused on creating new artist pages and an event timeline, enhancing the festival's digital presence and user interaction.`,
    imgSrc: '/static/images/projects/blacksheep-festival/blacksheep-festival.jpg',
    placeholderImgSrc: '/static/images/projects/blacksheep-festival/blurry-blacksheep-festival.jpg',
    href: 'https://www.blacksheep-kultur.de/',
    tags: ['Wordpress', 'ACF'],
  },
  {
    title: 'Wordpress Website for Hanno Rinke',
    description: `
    The task was to design a WordPress website and blog for Hanno Rinke, highlighting his contributions in literature, film, and music. The website's development focused on incorporating an extensive blog with organized categories, tags, and a comments feature for enhanced user interaction and content navigation.`,
    imgSrc: '/static/images/projects/hanno-rinke/hanno-rinke.jpg',
    placeholderImgSrc: '/static/images/projects/hanno-rinke/blurry-hanno-rinke.jpg',
    href: 'https://hanno-rinke.de/',
    tags: ['Wordpress', 'ACF'],
  },
  {
    title: 'Women energize Women',
    description: `The "Women Energize Women" project focused on a campaign and conference highlighting women's significant role in the global energy transition. The client opted to use Elementor, a user-friendly tool for WordPress, to enable quick and efficient theme development for the website.`,
    imgSrc: '/static/images/projects/wew/wew.jpg',
    placeholderImgSrc: '/static/images/projects/wew/blurry-wew.jpg',
    href: 'https://www.womenenergize.org/',
    tags: ['Wordpress', 'Elementor'],
  },
]

export default projectsData
