import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, Button, useDisclosure, Hoverable } from "@chakra-ui/react";
import { descriptors } from "chart.js/dist/core/core.defaults";

function ItemPopover({ isOpen, onOpen, onClose, image, desc }) {

    return (
        <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement="top">
            <Hoverable>
                <PopoverTrigger>
                    <Button>Hover to View Image</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>Image Title</PopoverHeader>
                    <PopoverBody>
                        <Image
                            src={image}
                            borderRadius='lg'
                        />
                        <Text>{desc}</Text>
                    </PopoverBody>
                </PopoverContent>
            </Hoverable>
        </Popover>
    );
}

export default ItemPopover;
