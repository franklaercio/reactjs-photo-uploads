import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
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
  const { isOpen, onClose } = useDisclosure();

  function handleViewImage(url: string) {
    return <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={url} />;
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={8}>
        {cards.map((card: Card) => {
          return (
            <Card
              data={card}
              viewImage={() => {
                handleViewImage(card.url);
              }}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
}
