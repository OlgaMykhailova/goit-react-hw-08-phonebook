import { useDispatch } from 'react-redux';
import { Button, Flex, FormLabel, Text, Box, Input } from '@chakra-ui/react';
import { register } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });

    form.reset();
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        minW="400px"
        minH="400px"
        boxShadow="dark-lg"
        p="5"
        borderRadius="lg"
      >
        <form onSubmit={handleSubmit} autoComplete="on">
          <FormLabel m="0">
            <Text display="block" py="2" fontSize="3xl">
              Username
            </Text>
            <Input
              variant="filled"
              autoComplete="on"
              size="lg"
              type="text"
              name="name"
              placeholder="Enter your username"
            ></Input>
          </FormLabel>
          <FormLabel m="0">
            <Text display="block" py="2" fontSize="3xl">
              Email
            </Text>
            <Input
              autoComplete="on"
              variant="filled"
              size="lg"
              type="email"
              name="email"
              placeholder="Enter your email"
            ></Input>
          </FormLabel>
          <FormLabel m="0">
            <Text display="block" py="2" fontSize="3xl">
              Password
            </Text>
            <Input
              autoComplete="on"
              variant="filled"
              size="lg"
              type="password"
              name="password"
              placeholder="Enter your password"
            ></Input>
          </FormLabel>
          <Flex justifyContent="center" mt="5">
            <Button
              size="sm"
              variant="outline"
              colorScheme="black"
              fontWeight="normal"
              bg="teal.400"
              fontSize="2xl"
              _hover={{ color: 'white' }}
              transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
              type="submit"
            >
              Register
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};