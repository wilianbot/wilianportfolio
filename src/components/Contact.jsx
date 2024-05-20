import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-top h-96 mt-5" id="contact">
        <h1 className="align-top flex justify-center font-poppins font-semibold text-6xl mb-5 colortext titlenamerobal cursor-default max-sm:text-4xl">Contato</h1>
        <p className="mb-5 max-sm:text-xs">Entre em contato comigo através do Linkedin ou e-mail vou responder assim que possivel.</p>
        <div className="flex flex-col justify-start items-start">       
            <a href="mailto:wiliamrobaldossantos1@gmail.com" className="flex align-middle justify-center items-center hover:text-orange-600 transition-all">
              <MdEmail className="size-7"/> wiliamrobaldossantos1@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/wilianwr/" target="_blank" className="flex align-middle justify-center items-center hover:text-orange-600 transition-all">
              <FaLinkedin className="size-7"/>Linkedin
            </a>
        </div>
    </div>
  )
}

export default Contact