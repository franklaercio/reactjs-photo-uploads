import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUrl, setSelectedUrl] = useState<string>();

  function handleViewImage(url: string) {
    setSelectedUrl(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={8}>
        {cards.map((card: Card) => {
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={() => handleViewImage(card.url)}
            />
          );
        })}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage
          isOpen={isOpen}
          onClose={onClose}
          imgUrl={selectedUrl}
        />
      )}
    </>
  );
}
