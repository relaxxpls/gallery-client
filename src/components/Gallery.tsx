import { useState } from "react";
import styled from "styled-components";

import data from "../data/data.json";

import NavBar from "./NavBar";
import Preview from "./Preview";

import type { GalleryItem } from "../types";

const Gallery = () => {
  const [items, setItems] = useState<Array<GalleryItem>>(data);
  const [activeId, setActiveId] = useState<number>(0);

  const setTitle = (title: string) => {
    setItems((_items) =>
      _items.map((item) => (item.id === activeId ? { ...item, title } : item))
    );
  };

  return (
    <Container>
      <NavBar items={items} activeItem={activeId} setActiveItem={setActiveId} />
      <Preview
        item={items.find((item) => item.id === activeId)}
        setTitle={setTitle}
      />
    </Container>
  );
};

export default Gallery;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem auto;
  max-width: 800px;
  padding: 0.5rem;
  border-radius: 0.25rem;

  @media screen and (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;
