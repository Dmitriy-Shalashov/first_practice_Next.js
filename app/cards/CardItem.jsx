import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";

const CardItem = ({ card }) => {
  console.log(card);
  return (
    <div
      className="rounded-xl p-5 mb-3 text-white shadow-xl  "
      style={{ background: card.color }}
    >
      <Link href={`/card/${card._id}`}>
        <a>
          <Image
            src={logo}
            alt="Picture of the author"
            width={60}
            height={40}
          />
          <div className="opacity-50 text-sm mt-6 mb-1">Current Balance</div>
          <div className="text-base">
            {card.balance.toLocaleString("uk-UA", {
              currency: "UAH",
              style: "currency",
            })}
          </div>

          <div className="mt-4 text-sm">{card.number}</div>
        </a>
      </Link>
    </div>
  );
};

export default CardItem;
