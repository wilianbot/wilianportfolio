const Project = () => {
  return (
   <div className="flex flex-col items-center h-screen mt-5 max-sm:h-full" id="projects">
        <h1 className="align-top flex justify-center font-poppins font-semibold text-6xl colortext titlenamerobal cursor-default max-sm:text-4xl">My Projects</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-5 mt-5 max-lg:grid-cols-2 max-md:grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-subgrid">
            <div className="rounded-md h-80 w-auto max-w-80 bg-slate-500 grid grid-cols-1 grid-rows-3">
                <img src="https://c4.wallpaperflare.com/wallpaper/999/599/785/programmers-orange-background-code-html-wallpaper-preview.jpg" className="row-span-2 h-full rounded-t-md" alt="Imagem do Projeto" />
                <div className="bgproject rounded-b-md text-white flex flex-col align-middle justify-center pl-4 font-poppins">
                    <p className="font-semibold text-xl">Em breve...</p>
                    <p className="font-light">Web Development</p>
                </div>
            </div>
            <div className="rounded-md h-80 w-auto max-w-80 bg-slate-500 grid grid-cols-1 grid-rows-3">
                <img src="https://c4.wallpaperflare.com/wallpaper/999/599/785/programmers-orange-background-code-html-wallpaper-preview.jpg" className="row-span-2 h-full rounded-t-md" alt="Imagem do Projeto" />
                <div className="bgproject rounded-b-md text-white flex flex-col align-middle justify-center pl-4 font-poppins">
                    <p className="font-semibold text-xl">Em breve...</p>
                    <p className="font-light">Web Development</p>
                </div>
            </div>  
            <div className="rounded-md h-80 w-auto max-w-80 bg-slate-500 grid grid-cols-1 grid-rows-3">
                <img src="https://c4.wallpaperflare.com/wallpaper/999/599/785/programmers-orange-background-code-html-wallpaper-preview.jpg" className="row-span-2 h-full rounded-t-md" alt="Imagem do Projeto" />
                <div className="bgproject rounded-b-md text-white flex flex-col align-middle justify-center pl-4 font-poppins">
                    <p className="font-semibold text-xl">Em breve...</p>
                    <p className="font-light">Web Development</p>
                </div>
            </div>      
            <div className="rounded-md h-80 w-auto max-w-80 bg-slate-500 grid grid-cols-1 grid-rows-3">
                <img src="https://c4.wallpaperflare.com/wallpaper/999/599/785/programmers-orange-background-code-html-wallpaper-preview.jpg" className="row-span-2 h-full rounded-t-md" alt="Imagem do Projeto" />
                <div className="bgproject rounded-b-md text-white flex flex-col align-middle justify-center pl-4 font-poppins">
                    <p className="font-semibold text-xl">Em breve...</p>
                    <p className="font-light">Web Development</p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Project