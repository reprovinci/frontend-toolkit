const faker = require('faker');

module.exports = function () {
  const data = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      title: faker.random.words(),
      intro: '<p>' + faker.lorem.paragraphs(1, '</p><p>') + '</p>',
      text: '<p>' + faker.lorem.paragraphs(3, '</p><p>') + '</p>',
      author: faker.name.findName(),
      date: faker.date.recent(),
    });
  }
  return data;
};
