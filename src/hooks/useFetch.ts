import { useState, useEffect } from 'react';
import { CardType } from '../types';

export const useFetch = () => {
  const [data, setData] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async (pageNumber: number) => {
      setLoading(true);
      try {
        const response = await fetch(`https://hn.algolia.com/api/v1/search?tags=front_page&page=${pageNumber}&hitsPerPage=10`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(prevData => {
          return [...prevData, ...result.hits]
        });
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData(page);
  }, [page]);


  const fetchMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return { data, setData, loading, error, fetchMore };
};
