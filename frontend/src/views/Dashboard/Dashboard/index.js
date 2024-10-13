// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/friends2.jpg";

import highlightEventImage from "assets/img/diwali.jpg";

import React, { useState } from "react";
import HighligthEventThisMonth from "./components/HighligthEventThisMonth";
import YourPerfectEventMatch from "./components/YourPerfectEventMatch";
import CustomCalendar from "./components/CustomCalender";
import {events as initialEvents} from "./events";

export default function Home() {
  const iconBoxInside = useColorModeValue("white", "white");
  const [events, setEvents] = useState(initialEvents);

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing=''>
        <Box gridColumn="span 4" textAlign="celeftnter">
          <Text fontSize="3xl" fontWeight="bold" color="#dd6633">
            Events Dashboard
          </Text>
          <Text fontSize="lg" fontWeight="" color="#28271F" mb="4">
            Find events near you from our exclusive calendar. Sign up to help in our events and be at the top of our leaderboards! 
          </Text>
        </Box>
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        style={{marginBottom: "12px"}}
        gap='24px'>
        <HighligthEventThisMonth
          title={"Highligth Event This Month"}
          name={"Gatherly's Highlights"}
          description={
            "Find out about the most treending, hot event according to Gatherly's statistics. You can't miss this one out!"
          }
          image={
            <Image
              src={highlightEventImage}
              alt='highlight'
              minWidth={{ md: "300px", lg: "auto" }}
              borderRadius="15px"
            />
          }
          highlightEvent={events[0]}
        />
        <YourPerfectEventMatch
          backgroundImage={peopleImage}
          title={"We have found the perfect event for YOU!"}
          description={
            "Our AI-matching tool has found events which match your interests and can help you meet people with similar interests."
          }
          perfectMatchEvent={events[1]}
          
        />
      </Grid>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing=''>
        <Box gridColumn="span 4" textAlign="celeftnter">
          <Flex alignItems="center" justifyContent="space-between" mt={1} border="#dd6633 1px solid" borderRadius={12} pl={3} pr={5} pt={2} pb={2}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="#dd6633">
                Month: August 2024
              </Text>
            </Box>
            <Flex alignItems="center">
              <Box display="flex" alignItems="center" mr={4}>
                <Box width="15px" height="15px" bg="green.300" mr={2} borderRadius="md"></Box>
                <Text color="#dd6633" fontWeight="bold">Attending</Text>
              </Box>
              <Box display="flex" alignItems="center">
                <Box width="15px" height="15px" bg="blue.300" mr={2} borderRadius="md"></Box>
                <Text color="#dd6633" fontWeight="bold">Open</Text>
              </Box>
            </Flex>
            <Flex>
              <Box
                as="button"
                p={2}
                borderRadius={12}
                bg="#dd6633"
                color="white"
                mr={2}
                minW={40}
                fontWeight="bold"
              >
                ← Previous
              </Box>
              <Box
                as="button"
                p={2}
                borderRadius={12}
                bg="#dd6633"
                color="white"
                minW={40}
                fontWeight="bold"
              >
                Next →
              </Box>
            </Flex>
          </Flex>
        </Box>
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="-55px"
        gap="24px"
      >
        <Box width="100%" height="auto" paddingBottom={10}>
          <CustomCalendar
            events={events.map(event => ({
              ...event,
              updateAttendStatus: (newStatus) => handleUpdateAttendStatus(event.eventId, newStatus),
            }))}
          />
        </Box>
      </Grid>
      {/* <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"Active Users"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Sales Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Projects"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={dashboardTableData}
        />
        <OrdersOverview
          title={"Orders Overview"}
          amount={30}
          data={timelineData}
        />
      </Grid> */}
    </Flex>
  );
}
