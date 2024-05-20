
const Footer = () => {
  return (
    <div className="h-16 p-4 bg-neutral-100 flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="flex gap-1">
            <p className="font-poppins font-bold text-xl cursor-pointer titlenamewilian"><a href="#home">Wilian</a></p>
            <p className="font-poppins font-bold text-xl cursor-pointer titlenamerobal"><a href="#home">Robal</a></p>
        </div>
        <div className="flex gap-1">
        © 2024 <div className="text-orange-500">Wilian WR</div>- All rights reserved
        </div>
    </div>
  )
}

export default Footer