import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => ({
  title: 'Memphis High Rollers'
})

export default function Index() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center bg-gradient-to-br from-rose-300 via-yellow-500 to-purple-400">
      <h1
        className="text-white text-4xl font-bold mt-[-50px]"
        style={{ textShadow: '2px 4px 3px rgba(0,0,0,0.1)' }}
      >
        Coming Soon
      </h1>
    </div>
  )
}
