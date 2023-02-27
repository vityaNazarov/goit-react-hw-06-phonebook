import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Phonebook',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Favourites',
    link: '/important-contacts',
  },
];

export default items;
