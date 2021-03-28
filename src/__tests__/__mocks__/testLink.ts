import Link from '../../api/v1/link/link';

const link: Link = {
  content: {
    title: 'Bill Gates to buy FSF for $4.20bn',
    description: 'The retired multi-billionaire is embracing open-source.',
    color: '#f9a825',
  },
  destination: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
};

export const notAllowedLink: Link = {
  content: {
    title: 'Bill Gates to buy FSF for $4.20bn',
    description: 'The retired multi-billionaire is embracing open-source.',
    color: '#f9a825',
  },
  destination: 'https://this-domain-is-not-allowed',
};

export const redirectLink: Link = {
  content: {
    title: 'Bill Gates to buy FSF for $4.20bn',
    description: 'The retired multi-billionaire is embracing open-source.',
    color: '#f9a825',
  },
  destination: 'https://youtube.com/redirect?q=snorlax.cc/',
};

export const encodedRedirectLink: Link = {
  content: {
    title: 'Bill Gates to buy FSF for $4.20bn',
    description: 'The retired multi-billionaire is embracing open-source.',
    color: '#f9a825',
  },
  destination: 'https://youtube.com/%72edirect?q=snorlax.cc/',
};

export const badImageLink: Link = {
  content: {
    title: 'Bill Gates to buy FSF for $4.20bn',
    description: 'The retired multi-billionaire is embracing open-source.',
    color: '#f9a825',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/800px-Cat_August_2010-4.jpg',
  },
  destination: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
};

export const goodImageLink: Link = {
  content: {
    title: 'Bill Gates to buy FSF for $4.20bn',
    description: 'The retired multi-billionaire is embracing open-source.',
    color: '#f9a825',
    image: 'https://i.imgur.com/9mNYg9X.png',
  },
  destination: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
};
export default link;
