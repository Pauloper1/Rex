import { useDisclosure, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react";

function ItemModal({ isOpen, onClose, image }) {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Image
                            src={image}
                            borderRadius='lg'
                        />

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ItemModal