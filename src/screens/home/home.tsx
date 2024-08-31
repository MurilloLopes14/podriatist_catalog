import Logo from "../../assets/logo.png";
import { Button } from "../../components/Button/button";
//import { SlArrowUp } from "react-icons/sl";

const Home: React.FC = () => {
  return (
    <>
      <div className=" sm-mid:overflow-hidden">
        <section className="flex flex-col h-4/5 ">
          <div className="bio sm-mid:pt-16 items-center flex flex-col flex-grow gap-4">
            <img src={Logo} alt="Logo" className=" sm-mid:size-72" />
            <h2 className=" font-Dancing text-4xl">Seja bem-vindo!</h2>

            <Button content="Serviços" link="/catalog" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

//! Finalize Home Screen adding this button on bottom screen
/* <article className="see more sm-mid:m-16 flex flex-row justify-center">
            <SlArrowUp />
            <h2 className="text-black font-bold text-2xl">
              Meu Lado Profissional
            </h2>
          </article> */
