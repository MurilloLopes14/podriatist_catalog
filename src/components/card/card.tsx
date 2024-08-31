import Mock from "../../assets/mock.avif";

export const Card = () => {
  return (
    <>
      <article className="card flex flex-col justify-center items-center ml-4 mr-4 pt-4 pb-4 rounded-lg shadow-shiny sm-mid:max-w-sm select-none">
        <img src={Mock} alt="IMG" className=" sm-mid:size-60 rounded-full" />
        <div className=" flex flex-col gap-4 justify-center items-center text-center sm-mid:pl-2 sm-mid:pr-2">
          <h2 className=" text-3xl font-bold">Pintar Unhas</h2>
          <p className="font-semibold ">
            Serviço para pintar unhas. Esmalte próprio opcional para este
            serviço
          </p>
          <p className=" text-2xl font-bold underline text-creamWhite">
            Valor: R$ 40,00
          </p>
        </div>
      </article>
    </>
  );
};
