// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Portal,
  Spacer,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const YourPerfectEventMatch = ({ title, description, backgroundImage, perfectMatchEvent }) => {
  const overlayRef = React.useRef();
  const startDate = new Date(perfectMatchEvent.dateTimeStart);
  const endDate = new Date(perfectMatchEvent.dateTimeEnd);

  const eventDay = startDate.getDate();
  const eventMonth = startDate.toLocaleString('default', { month: 'long' });
  const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const eventDateString = `${eventDay} ${eventMonth}, ${startTime} - ${endTime}`;

  return (
    <Card maxHeight='290.5px' p='1rem'>
      <CardBody
        p='0px'
        backgroundImage={backgroundImage}
        bgPosition='center'
        bgRepeat='no-repeat'
        w='100%'
        h={{ sm: "200px", lg: "100%" }}
        bgSize='cover'
        position='relative'
        borderRadius='15px'
        opacity='0.9'
        >
        <Box
          bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, #dd6633 110%)'
          w='100%'
          position='absolute'
          h='inherit'
          borderRadius='inherit'
          ref={overlayRef}
          ></Box>
        <Portal containerRef={overlayRef}>
          <Flex
            flexDirection='column'
            color='white'
            p='1.5rem 1.2rem 0.3rem 1.2rem'
            lineHeight='1.6'
            h="100%" alignItems="stretch"
            >
            <Text fontSize='xl' fontWeight='bold' pb='.3rem'>
              {title}
            </Text>
            <Text fontSize='sm' fontWeight='normal' w={{ lg: "92%" }}>
              {description}
            </Text>

            <Text pt={7} fontSize='lg' fontWeight='bold'>
              Current Match:
            </Text>
            <Text fontSize='md' fontWeight='bold'>
              {perfectMatchEvent.eventName}
            </Text>
            <Text fontSize='md' fontWeight='bold'>
              {eventDateString}
            </Text>

            <Flex align='center'>
              <Button p='0px' variant='no-hover' bg='transparent' mt='0px'>
                <Text
                  fontSize='sm'
                  fontWeight='bold'
                  _hover={{ me: "4px" }}
                  transition='all .5s ease'>
                  Attend Event
                </Text>
                <Icon
                  as={BsArrowRight}
                  w='20px'
                  h='20px'
                  fontSize='xl'
                  transition='all .5s ease'
                  mx='.3rem'
                  cursor='pointer'
                  _hover={{ transform: "translateX(20%)" }}
                  pt='4px'
                />
              </Button>
            </Flex>
          </Flex>
        </Portal>
      </CardBody>
    </Card>
  );
};

export default YourPerfectEventMatch;
