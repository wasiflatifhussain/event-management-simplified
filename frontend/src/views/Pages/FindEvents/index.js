// Chakra imports
import { Box, Flex, IconButton, Input, InputGroup, InputLeftElement, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { allEvents } from "./allEvents"; // Assuming this is the list of events
import { SearchIcon } from "@chakra-ui/icons";
import EventSearched from "./components/EventSearched"; // Import the EventSearched component
import EventSlideCard from "./components/EventSlideCard";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper.js
import { Navigation } from "swiper/modules"; 
import "swiper/css"; // import Swiper's base styles
import "swiper/css/navigation"; // import Swiper's navigation styles

function FindEvents() {
  const [allCurrEvents, setAllCurrEvents] = useState(allEvents);
  const [searchQuery, setSearchQuery] = useState("eid");
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.800");

  // filter the events based on the search query
  const filteredEvents = allCurrEvents.filter(event =>
    event.event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // handle RSVP In:set attendStatus to true
  const handleRSVPIn = (eventId) => {
    const updatedEvents = allCurrEvents.map(event => {
      if (event.event.eventId === eventId) {
        return {
          ...event,
          attendStatus: true, // RSVP in
        };
      }
      return event;
    });
    setAllCurrEvents(updatedEvents);
  };

  // handle RSVP Out: Set attendStatus to false
  const handleRSVPOut = (eventId) => {
    const updatedEvents = allCurrEvents.map(event => {
      if (event.event.eventId === eventId) {
        return {
          ...event,
          attendStatus: false, // RSVP out
        };
      }
      return event;
    });
    setAllCurrEvents(updatedEvents);
  };

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {/* Search Bar Start */}
      <Flex justifyContent="center">
        <InputGroup
          bg={inputBg}
          borderRadius="15px"
          w="800px"
          mb={4}
          _focus={{
            borderColor: { mainTeal },
          }}
          _active={{
            borderColor: { mainTeal },
          }}
        >
          <InputLeftElement
            children={
              <IconButton
                bg="inherit"
                borderRadius="inherit"
                _hover="none"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                icon={<SearchIcon color={searchIconColor} w="15px" h="15px" />}
              />
            }
          />
          <Input
            fontSize="xs"
            py="11px"
            placeholder="Search events..."
            borderRadius="inherit"
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
        </InputGroup>
      </Flex>
      {/* search Bar Ends */}
      <Text fontWeight="bold" mb={0} fontSize="lg" color="#1e0a3c">
        Search Results/Most Liked Event:
      </Text>

      {/* display search results */}
      {searchQuery && (
        <Box mt={4} bg="gray.50" p={0} borderRadius="md">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventSearched
                key={event.event.eventId}
                event={event.event}
                attendStatus={event.attendStatus}
                onRSVPIn={handleRSVPIn}
                onRSVPOut={handleRSVPOut}
              />
            ))
          ) : (
            <Flex justifyContent="center" mb={4}>
              <Text color="#dd6633" fontWeight="bold">No events found 🥺. Search something else?</Text>
            </Flex>
          )}
        </Box>
      )}
      {!searchQuery && (
        <Flex justifyContent="center" mb={4}>
              <Text color="#dd6633" fontWeight="bold">It's quite in here....Search for an event!</Text>
        </Flex> 
      )}
      

      {/* Explore More Section */}
      <Text fontWeight="bold" mb={0} fontSize="2xl" color="#dd6633" mt={5} ml={3}>
        Explore More Events:
      </Text>

      {/* Swiper Carousel for Events */}
      <Box mt={4} bg="gray.50" p={0} borderRadius="md">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          navigation={true} // Enable navigation
          modules={[Navigation]} // Pass in the navigation module
          style={{
            padding: "0 45px" // Add padding to the Swiper to give space for navigation buttons
          }}
        >
          {allCurrEvents.map((event, index) => (
            <SwiperSlide key={index}>
            <EventSlideCard 
              event={event.event} 
              attendStatus={event.attendStatus} // Pass attendStatus here
              onRSVPIn={handleRSVPIn} // Pass the handler
              onRSVPOut={handleRSVPOut} // Pass the handler
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
}

export default FindEvents;
