const ALL_SPEAKERS = `
  query {
    allSpeakers(orderBy: id_ASC) {
        id
        name
        description
        subject
        picture {
          url
        }    
      }
  }
`;

export { ALL_SPEAKERS };
