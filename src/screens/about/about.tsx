import HeartGif from "../../assets/emojis/heartGif.gif";
import SoloGraduacao from "../../assets/img_personal/soloGraduacao.jpeg";
import Diploma from "../../assets/img_personal/diploma.jpeg";

const AboutMe = () => {
  return (
    <>
      <div className="heading flex flex-col items-center justify-center pt-10">
        <h1 className=" sm-mid:text-5xl  sm-mid:text-center  sm-mid:font-bold">
          Meu lado Profissional!
        </h1>
        <div className="sub-heading flex flex-col justify-center items-center gap-5">
          <p className=" sm-mid:text-lg text-center text-creamWhite font-semibold">
            Conheça um pouco mais sobre mim!
          </p>
          <img src={HeartGif} alt="Heart" className=" size-20" />
        </div>
      </div>
      <article className="bio m-3 flex flex-col justify-center items-center">
        <h3 className="text-4xl text-center">Maria Aparecida Martins 🌠</h3>
        <h3 className="text-3xl font-semibold p-3">31 Anos</h3>
        <h2 className=" ext-2xl text-center leading-relaxed">
          MAMÃE DA VALENTHINA E O THIAGO
        </h2>
        <h4 className="text-5xl text-center leading-relaxed">👧🧒</h4>

        <img
          src={SoloGraduacao}
          alt="Foto de Graduação"
          className="rounded-3xl border-black border-4"
        />
        <p className=" leading-relaxed pt-3 pb-3">
          Estudante e empreendedora na área da estética; Finalmente eu consegui.
          Eu sou a Aparecida Martins, mas você pode me chamar de Cida que é
          costumam me chamar. Atualmente tenho 31 anos, você achou que eu tinha
          menos né 🤭!!. Sou casada e tenho 2 filhos, um chamado Thiago e outra
          chamada Valenthina, que além de ser nossa prioridade são os anjinhos
          que me dão motivo para nunca desistir. Em resumo: mulher, esposa, mãe
          e empreendedora. Em busca de construir um negócio que me permitita
          cada vez mais estar perto dos meus filhos e sonhos 💖.
        </p>
        <img
          src={Diploma}
          alt="Foto de Graduação"
          className="rounded-3xl border-black border-4"
        />
      </article>
    </>
  );
};

export default AboutMe;
