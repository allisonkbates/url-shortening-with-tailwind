export default function Intro() {
	return (
    <section className="h-24">
        <div className="ml-20 h-64" style={{backgroundImage: "url(/illustration-working.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div className="p-8 md:py-16 md:px-20 lg:px-40 flex-col items-center">
          <h1 className="text-4xl leading-tight text-center text-dark-purple font-bold">More than just shorter links</h1>
          <p className="text-base leading-relaxed text-center text-light-gray">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <a className="text-white font-bold text-center text-lg bg-bright-teal py-2 px-6 rounded-full m-auto">Get Started</a>
        </div>
    </section>
  )
}