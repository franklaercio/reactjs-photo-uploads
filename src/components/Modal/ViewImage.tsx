import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="md">
          <ModalBody padding="0">
            <Image src={imgUrl} w="full" alt={'Imagem aberta pelo modal'} />
          </ModalBody>

          <ModalFooter
            bg="pGray.800"
            color="pGray.50"
            justifyContent="left"
            alignItems="left"
          >
            <Link href={imgUrl} mr={3} onClick={onClose} isExternal>
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
