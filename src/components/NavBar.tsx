import styled from "styled-components";

import { GalleryItem } from "../types";

import NavBarItem from "./NavBarItem";

interface NavBarProps {
  items: Array<GalleryItem>;
  activeItem: number;
  setActiveItem: (id: number) => void;
}

const NavBar = ({ items, activeItem, setActiveItem }: NavBarProps) => (
  <Container>
    {items.map((item) => (
      <NavBarItem
        key={item.id}
        item={item}
        isActive={item.id === activeItem}
        makeActive={() => setActiveItem(item.id)}
      />
    ))}
  </Container>
);

export default NavBar;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  width: 300px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
