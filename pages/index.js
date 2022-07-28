import Meta from "../app/utils/Meta";
import CardItem from "../app/cards/CardItem";

export default function Home({ cards }) {
  return (
    <div>
      <Meta title="Next JS" description="page about next js" />
      <main className="w-96 mx-auto mt-20">
        {cards.map((card) => (
          <CardItem key={card._id} card={card} />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/cards");
  const cards = await response.json();

  return {
    props: { cards },
    revalidate: 10,
  };
};
