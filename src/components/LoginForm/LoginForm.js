import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Flex,
  FormLabel,
  Text,
  Box,
  Input,
  Link,
} from '@chakra-ui/react';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        minW="400px"
        minH="380px"
        boxShadow="dark-lg"
        p="5"
        borderRadius="lg"
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel m="0">
            <Text display="block" py="2" fontSize={['lg', null, '3xl', null]}>
              Email
            </Text>
            <Input
              variant="filled"
              autoComplete="on"
              size="lg"
              type="email"
              name="email"
              placeholder="Enter your email"
            ></Input>
          </FormLabel>
          <FormLabel m="0">
            <Text display="block" py="2" fontSize={['lg', null, '3xl', null]}>
              Password
            </Text>
            <Input
              variant="filled"
              autoComplete="on"
              size="lg"
              type="password"
              name="password"
              placeholder="Enter your password"
            ></Input>
          </FormLabel>
          <Flex justifyContent="center" mt="12">
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
              LogIn
            </Button>
          </Flex>
          <Flex justifyContent="center" alignItems="center" mt="4">
            <Text textAlign="center" fontSize={['lg', null, '3xl', null]}>
              Don't have an account?
            </Text>
            <Link
              as={NavLink}
              to="/register"
              ml="2"
              fontSize={['lg', null, '3xl', null]}
              _hover={{ color: 'white' }}
              transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
            >
              Sign up
            </Link>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};