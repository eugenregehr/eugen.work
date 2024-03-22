import { MotionDiv } from './MotionDiv'
import StartHeader from './StartHeader'
import Link from 'next/link'

export default function ProjectsLayout({ projectTitle, resetFilter = false, children }) {
  return (
    <>
      <MotionDiv
        initial={{ opacity: !resetFilter ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StartHeader />
        <div className="container py-12">
          <div className="flex items-center ">
            <span className="mb-2 block text-xl font-bold text-secondary-400">
              [ {projectTitle} ]
            </span>
            {resetFilter && (
              <Link href={'/'}>
                <span className="mb-1 block px-2 text-lg font-bold text-yellow-400 hover:text-yellow-200">
                  ← back
                </span>
              </Link>
            )}
          </div>

          {children}
        </div>
      </MotionDiv>
    </>
  )
}
