import { Button } from "../Button/button";

interface NavBarProps {
  title: string;
  navLinks: { label: any; url: string; alt: string }[];
}

export const NavBar: React.FC<NavBarProps> = ({ /*title*/ navLinks }) => {
  return (
    <>
      <nav className="w-100 bg-purplePink flex flex-row gap-2 items-center justify-between sm-mid:h-16 pl-3 pr-3">
        <Button content="Me Conheça 🤗" link="/aboutMe" />
        <div className="social-media flex gap-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className=" text-4xl">
                <img src={link.label} alt={link.alt} />
              </a>
            </li>
          ))}
        </div>
      </nav>
    </>
  );
};
