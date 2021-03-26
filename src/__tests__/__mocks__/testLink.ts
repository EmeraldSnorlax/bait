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

export default link;
