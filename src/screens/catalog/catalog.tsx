import { Card } from "../../components/card/card";

interface ICatalogProps {}

const Catalog: React.FC<ICatalogProps> = () => {
  return (
    <>
      <section>
        <div className="header pt-4 select-none">
          <h1 className="text-5xl text-center sm-mid:leading-tight sm-mid:pb-8">
            Meu catálogo de Serviços 🥰
          </h1>
        </div>
        <div className="services gap-8 mb-5 sm-mid:grid-cols-sm-mid sm-mid:flex sm-mid:flex-col sm-mid:items-center md:grid md:grid-cols-mid lg:grid lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Catalog;
