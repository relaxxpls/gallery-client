import Image from "next/image";
import styled, { css } from "styled-components";

import { GalleryItem } from "../types";

interface NavBarItemProps {
  item: GalleryItem;
  isActive: boolean;
  makeActive: () => void;
}

const NavBarItem = ({ item, isActive, makeActive }: NavBarItemProps) => {
  const title = item.title.replace(/ /g, "\u00a0");

  return (
    <NavItemContainer onClick={makeActive} isActive={isActive}>
      <Image
        src={item.previewImage}
        style={{ aspectRatio: 1 }}
        width={48}
        height={48}
      />
      <NavItemTitle>
        <TitleFirstPart>{title.slice(0, -7)}</TitleFirstPart>
        <TitleLastPart>{title.slice(-7).replace(/ /g, "\u00a0")}</TitleLastPart>
      </NavItemTitle>
    </NavItemContainer>
  );
};

export default NavBarItem;

const Active = css`
  background-color: #1f56bb;
  color: #ffffff;
`;

const NavItemContainer = styled.li`
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;

  ${(props: NavBarItemProps) => props.isActive && Active}
`;

const NavItemTitle = styled.div`
  display: flex;
  margin-left: 0.5rem;
  position: relative;
  width: 100%;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
`;

const TitleFirstPart = styled.span`
  display: inline-block;
  overflow: hidden;
  max-width: calc(100% - 4rem);
  text-overflow: ellipsis;
`;

const TitleLastPart = styled.span`
  display: inline-block;
  overflow: hidden;
  max-width: 4rem;
`;
