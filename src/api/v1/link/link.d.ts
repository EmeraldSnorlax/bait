interface Link {
  content: {
    title: string,
    description?: string,
    image?: string,
    color?: string
  },
  destination: string,
}

export default Link;
