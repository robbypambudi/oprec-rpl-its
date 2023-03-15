module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn typecheck',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': () => [`yarn lint:strict `, `yarn format:write`],

  // Jest test only changed files
  '**/*.(spec|test).(ts|tsx|js)': () => ['yarn test'],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': () => `yarn format:write`,
};
