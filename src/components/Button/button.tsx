interface IButtonProps {
  content: string;
  link: string;
}

export const Button: React.FC<IButtonProps> = ({ content, link }) => {
  return (
    <>
      <button className=" rounded-lg bg-purplePink p-3 w-1/2 border-creamWhite border-2 lg:w-1/5 lg:hover:brightness-105">
        <a href={link} className=" text-creamWhite font-semibold text-xl ">
          {" "}
          {content}
        </a>
      </button>
    </>
  );
};
