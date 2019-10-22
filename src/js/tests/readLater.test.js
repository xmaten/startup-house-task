import mockData from './mockData';
import Model from '../model';

test('It adds to read later', () => {
  const model = new Model(mockData);
  const chosenNews = mockData[0];

  model.addToReadLater(chosenNews);

  expect(model.getReadLater()).toEqual([chosenNews]);
});

test('It adds and removes from read later', () => {
  const model = new Model(mockData);
  const chosenNews = mockData[0];

  model.addToReadLater(chosenNews);
  model.removeFromReadLater(chosenNews);

  expect(model.getReadLater()).toEqual([]);
});
