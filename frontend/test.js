const fetchData = userId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject('Fetch failed!');
      }
      const fakeData = {
        id: userId,
        name: 'George',
      };
      resolve(fakeData);
    }, 300);
  });
};

fetchData(5)
  .then(user => {
    console.log("Here's your data:", user);
  })
  .catch(err => {
    console.error(err);
  });