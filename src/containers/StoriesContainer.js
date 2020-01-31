import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, [count]);

  return (
    <>
      <h1>Hacker News Stories</h1>
      {storyIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};
