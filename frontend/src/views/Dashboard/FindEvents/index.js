// Chakra imports
import { Box, Flex, IconButton, Input, InputGroup, InputLeftElement, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { allEvents } from "./allEvents"; // Assuming this is the list of events
import { SearchIcon } from "@chakra-ui/icons";
import EventSearched from "./components/EventSearched"; // Import the EventSearched component

function FindEvents() {
  const [allCurrEvents, setAllCurrEvents] = useState(allEvents);
  const [searchQuery, setSearchQuery] = useState("eid");
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");
  const inputBg = useColorModeValue("white", "gray.800");

  // Filter the events based on the search query
  const filteredEvents = allCurrEvents.filter(event =>
    event.event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle RSVP In: Set attendStatus to true
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

  // Handle RSVP Out: Set attendStatus to false
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
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
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
      {/* Search Bar Ends */}
      <Text fontWeight="bold" mb={0} fontSize="lg" color="#1e0a3c">
            Search Results/Most Liked Event:
      </Text>
      {/* Display search results using EventSearched */}
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
              <Text color="#dd6633" fontWeight="bold">No events found / Search something else</Text>
            </Flex>
          )}
        </Box>
      )}
    </Flex>
  );
}

export default FindEvents;
