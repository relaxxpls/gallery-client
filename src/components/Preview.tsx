import Image from "next/image";
import styled from "styled-components";

import type { GalleryItem } from "../types";

interface PreviewProps {
  item: GalleryItem;
  setTitle: (title: string) => void;
}

const Preview = ({ item, setTitle }: PreviewProps) => (
  <PreviewContainer>
    <Image
      src={item.previewImage}
      alt="Gallery Preview"
      width={500}
      height={632}
    />

    <StyledInput
      type="text"
      value={item.title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </PreviewContainer>
);

export default Preview;

const PreviewContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  width: 100%;
  aspect-ratio: 3/4;
`;

const StyledInput = styled.input`
  text-align: center;
  width: 100%;
  font-size: 1.25rem;
  margin: 0.5rem 0;
  border: none;
`;
