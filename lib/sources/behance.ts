const getProjectsList = async () => {
  const url = `http://www.behance.net/v2/users/${process.env.BEHANCE_USERNAME}/projects?callback=%3F&per_page=12&api_key=${process.env.BEHANCE_API_KEY}`;
  console.log(url);
};
