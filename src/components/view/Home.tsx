import { CardType } from "../../types";
import { Card } from "../common";

interface CardListProps {
  loading: boolean;
  error: string | null;
  cards: CardType[];
  handleDelete: (id: string) => void;
  fetchMore: () => void;
}

export const HomeView: React.FC<CardListProps> = ({
  loading,
  error,
  cards,
  handleDelete,
  fetchMore,
}) => {
  return (
    <div className="flex-1 p-4 h-[calc(100vh-116px)] overflow-auto">
      <div className="w-full pb-3 flex flex-col items-center">
        {error && <p>Error fetching data</p>}
        {cards.map((item: CardType) => (
          <Card card={item} handleDelete={handleDelete} key={item.objectID} />
        ))}
        {loading && <p>Loading...</p>}
        <button
          className="bg-luxuryGold text-luxuryGray mt-4 p-2"
          onClick={fetchMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};
