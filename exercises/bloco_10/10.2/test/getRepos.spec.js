const getRepos = require('../src/getRepos');

describe('Função getRepos', () => {
  const API_URL = 'https://api.github.com/orgs/tryber/repos';
  it('Verifica se o respositório sd-01-week4-5-project-todo-list existe', () => {
    const repos1 = 'sd-01-week4-5-project-todo-list';
    return expect(getRepos(API_URL)).resolves.toContain(repos1);
  });

  it('Verifica se o respositório sd-01-week4-5-project-meme-generator existe', () => {
    const repos2 = 'sd-01-week4-5-project-meme-generator';
    return expect(getRepos(API_URL)).resolves.toContain(repos2);
  });
});