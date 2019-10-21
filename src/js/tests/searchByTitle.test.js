import mockData from './mockData';
import Model from '../model';

test('It filters by title', () => {
  const model = new Model(mockData);
  const value = 'she';

  const filtered = model.getSearchItem(value).map(item => ({ webTitle: item.webTitle }));

  expect(filtered).toEqual([
    {
      webTitle: 'Sheffield United v Arsenal: Premier League – live!',
    },
    {
      webTitle: 'Brexit: full text of withdrawal agreement bill published - live news',
    },
  ]);
});

test('It filters by title if value is in mixed case', () => {
  const model = new Model(mockData);
  const value = 'ShE';

  const filtered = model.getSearchItem(value).map(item => ({ webTitle: item.webTitle }));

  expect(filtered).toEqual([
    {
      webTitle: 'Sheffield United v Arsenal: Premier League – live!',
    },
    {
      webTitle: 'Brexit: full text of withdrawal agreement bill published - live news',
    },
  ]);
});
