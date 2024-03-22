import dynamic from 'next/dynamic'

const ClientSideLottie = dynamic(() => import('./StartAnimation'), {
  ssr: false,
})

export default function StartHeader() {
  return (
    <>
      <div className="space-y-2 pb-8 pt-3 md:space-y-5 md:pt-6">
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <div>
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-left lg:text-6xl">
              <span>Hi, I'm Eugen 👋</span> <br />
              <span className="block text-gray-500 dark:text-gray-400">
                Digital Creator & <br />
                Frontend Engineer
              </span>
            </h1>
          </div>
          <div className="w-80">
            <div className="min-h-80">
              <ClientSideLottie />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
