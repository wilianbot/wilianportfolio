function Header() {
  return (
    <div className="h-11 p-6 bg-neutral-100 fixed top-0 left-0 right-0 z-10 max-lg:h-24">
        <nav className="flex align-middle justify-between items-center fixed top-0 left-44 right-44 p-4 max-lg:flex-col">
          <div className="flex gap-1">
            <p className="font-poppins font-bold text-xl cursor-pointer titlenamewilian">Wilian</p>
            <p className="font-poppins font-bold text-xl cursor-pointer titlenamerobal">Robal</p>
          </div>
          <ul className="flex align-middle justify-between gap-5 font-mono font-semibold cursor-pointer">
            <li className="nav colortext"><a href="#home">Home</a></li>
            <li className="nav colortext"><a href="#projects">Projects</a></li>
            <li className="nav colortext"><a href="#expertise">Expertise</a></li>
            <li className="nav colortext"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header

