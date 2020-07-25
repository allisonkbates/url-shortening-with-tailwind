import { urlObjectKeys } from "next/dist/next-server/lib/utils"

export default function Intro() {
	return (
    <section className="flex flex-col items-center md:flex md:flex-row-reverse md:justify-end md:pl-2">
       {/*  <img className="" src="/illustration-working.svg"></img> Still need to make offset */}
        <div className="container h-96 w-full bg-local mr-0 self-end" style={{backgroundImage: "url(/illustration-working.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "left 25%"}}></div>
        <div className="p-8 md:py-16 md:px-20 lg:px-40 flex flex-col items-center">
          <h1 className="text-4xl lg:text-6xl leading-tight text-center text-dark-purple font-bold">More than just shorter links</h1>
          <p className="leading-relaxed text-center text-light-gray text-base lg:text-lg font-medium py-2">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button className="text-white font-bold text-center text-lg bg-bright-teal py-2 px-6 rounded-full my-8">Get Started</button>
        </div>
    </section>
  )
}