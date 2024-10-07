import { HomeView } from "../components/view";
import { useFetch } from "../hooks";

export const HomeContainer: React.FC = () => {
  const { data, setData, loading, error, fetchMore } = useFetch();

  const handleDelete = (id: string) => {
    setData(data.filter((card: any) => card.objectID !== id));
  };

  return (
    <HomeView
      loading={loading}
      error={error}
      cards={data}
      handleDelete={handleDelete}
      fetchMore={fetchMore}
    />
  );
};
