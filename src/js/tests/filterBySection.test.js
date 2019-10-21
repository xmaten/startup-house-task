import mockData from './mockData';
import Model from '../model';

test('It filters by section', () => {
  const model = new Model(mockData);
  const section = 'sport';

  const filtered = model.filterBySection(section).map(item => ({ webTitle: item.webTitle }));

  expect(filtered).toEqual([
    {
      webTitle: 'Hansen and Jones show respect – and confidence they can overcome | Gerard Meagher',
    },
    {
      webTitle: 'Dan Biggar urges Wales to ‘change rest of our lives’ against South Africa',
    },
  ]);
});
