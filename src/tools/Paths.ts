import * as path from 'path';

const rel = (x: string): string => path.resolve(__dirname, x);

const PATHS = {
  main: rel('../../src/main'),
  test: rel('../../src/test'),
  nodeModules: rel('../../node_modules'),

  buildNode: rel('../../build_node'),
  buildBrowser: rel('../../build_browser'),
};

// Normalizing since having `//` in the path can be bad in some machines.
Object.keys(PATHS).forEach(key => (PATHS[key] = path.normalize(PATHS[key])));

export { PATHS };
