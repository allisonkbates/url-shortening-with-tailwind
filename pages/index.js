import Nav from '../components/nav';
import Intro from '../components/intro';

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <Intro />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  )
}
