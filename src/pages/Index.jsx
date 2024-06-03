import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Box, Text, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "This is a bot response.", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" border="1px solid #ccc" borderRadius="md" overflowY="auto" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} justify={message.sender === "user" ? "flex-end" : "flex-start"}>
              <Box bg={message.sender === "user" ? "blue.500" : "gray.300"} color={message.sender === "user" ? "white" : "black"} px={4} py={2} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSend} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
