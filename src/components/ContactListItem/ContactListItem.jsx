import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Notify } from 'notiflix';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { ListItem, Text, Button, Flex } from '@chakra-ui/react';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    Notify.success(`${name} has been removed from your contacts`);
    dispatch(deleteContact(id));
  };
  return (
    <ListItem key={id} minW='500px'>
      <Flex justifyContent='space-between' alignItems='center'>
                <Text >
          Name: 
          <Text color="white" display="inline-block" ml="2" mr='4'>
            {name}
          </Text>
          Number: 
          <Text color="white" display="inline-block" ml="2">
            {number}
          </Text>
        </Text>
        <Button variant="outline" colorScheme='black' size='xs' _hover={{ color: 'white' }} bg='teal.400' fontWeight='normal' transition='color 250ms cubic-bezier(0.4, 0, 0.2, 1)' ml='auto' type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </Button>
      </Flex>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};