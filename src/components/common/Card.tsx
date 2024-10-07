import { useState } from "react";
import { CardType } from "../../types";
import { formatTimestamp } from "../../utils";

export interface CardProps {
  card: CardType;
  handleDelete: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({ card, handleDelete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-luxuryDark rounded-lg p-4 mb-4 w-full">
      <div onClick={() => setExpanded(!expanded)} className="cursor-pointer">
        <div className="flex justify-between items-center">
          <h3 className="text-lg">{card.title}</h3>
          <span className="text-sm text-gray-400">{card.author}</span>
        </div>
        {expanded && (
          <div className="mt-4 w-full flex flex-col">
            <div className="w-full flex flex-col">
              <label>Expanded Content</label>
              <label>Created At: {formatTimestamp(card.created_at_i)}</label>
              <label>
                URL: <span className="text-blue-500">{card.url}</span>
              </label>
            </div>
            <div className="w-full flex justify-end">
              <button
                className="bg-red-500 text-white py-1 px-2 w-min rounded"
                onClick={() => handleDelete(card.objectID)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
