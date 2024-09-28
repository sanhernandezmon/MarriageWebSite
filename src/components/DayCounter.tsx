// components/DayCounter.tsx
import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const weddingDate = new Date("2025-05-24"); // Replace with your wedding date

const DayCounter = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const updateDaysLeft = () => {
      const now = new Date();
      const timeDifference = weddingDate.getTime() - now.getTime();
      const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
      setDaysLeft(days);
    };
    updateDaysLeft();
    const interval = setInterval(updateDaysLeft, 1000 * 3600 * 24); // Update every day
    return () => clearInterval(interval);
  }, []);

  return (
    <Box textAlign="center" p={5}>
      <Text fontSize="2xl">Days until the wedding</Text>
      <Text fontSize="4xl" fontWeight="bold">
        {daysLeft}
      </Text>
    </Box>
  );
};

export default DayCounter;
