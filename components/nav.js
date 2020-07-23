export default function Nav() {
	return (
    <nav className="flex p-8 md:py-16 md:px-20 lg:px-40 space-x-4 justify-between">
      <ul className="flex space-x-4">	
        <img src="/logo.svg" className="mr-4 object-contain"></img>
        <li className="hidden md:flex items-center text-light-gray font-bold"><a>Features</a></li>
        <li className="hidden md:flex items-center text-light-gray font-bold"><a>Pricing</a></li>
        <li className="hidden md:flex items-center text-light-gray font-bold"><a>Resources</a></li>
      </ul>
      <ul className="flex space-x-4">
        <li className="hidden md:flex items-center text-light-gray font-bold"><a>Login</a></li>
        <li className="hidden md:flex items-center text-white font-bold bg-bright-teal py-2 px-6 rounded-full"><a>Sign Up</a></li>
      </ul>
    </nav>
  )
}
