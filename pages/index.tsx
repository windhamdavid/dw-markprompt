import Head from 'next/head'
import { Markprompt } from '@/components/Markprompt'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourcegraph + Markprompt</title>
        <meta name="description" content="Sourcegraph search powered by Markprompt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="w-[720px] h-[480px] border rounded-xl border-neutral-900 p-8">
        <Markprompt onDark
        projectKey="3K9vHrh2Si4DOHTzGWjFxrHJiK4QZJqy" /></div></div>
      </main>
    </>
  )
}
