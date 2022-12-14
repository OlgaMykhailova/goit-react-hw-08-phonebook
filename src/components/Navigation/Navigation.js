import { useAuth } from 'hooks';
import { FaAddressBook } from 'react-icons/fa';
import { Flex, Show } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center">
      <Show above='md'><FaAddressBook size='32'/></Show>
      <Link
        as={NavLink}
        ml={['1', null, '5', null]}
        fontSize={['xl', null, '4xl', null]}
        _activeLink={{ color: 'white' }}
        _hover={{ color: 'white' }}
        transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
        to="/"
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          ml={['2', null, '5', null]}
          fontSize={['xl', null, '4xl', null]}
          _activeLink={{ color: 'white' }}
          _hover={{ color: 'white' }}
          transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
          to="/contacts"
        >
          Contacts
        </Link>
      )}
    </Flex>
  );
};
