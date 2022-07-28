import CardItem from "../../app/cards/CardItem";
import Meta from "../../app/utils/Meta";
import Link from "next/link";

const Card = ({ card }) => {
  return (
    <div>
      <Meta title="About card" description="" />
      <main className="w-96 mx-auto mt-20">
        <CardItem card={card} />
        <Link href="/">
          <a>
            <button
              className="rounded-xl p-3 text-white"
              style={{ background: card.color }}
            >
              go back
            </button>
          </a>
        </Link>
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/cards");
  const cards = await response.json();

  const paths = cards.map((c) => ({
    params: {
      id: c._id,
    },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/api/cards/${params.id}`);
  const card = await response.json();

  return {
    props: { card },
    revalidate: 10,
  };
};

export default Card;
