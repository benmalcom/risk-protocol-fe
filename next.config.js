/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CircularDependencyPlugin = require('circular-dependency-plugin');
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  /*headers: () => [
    {
      source: '/builder/builder',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],*/
  webpack: (config, op) => {
    // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
    config.plugins = [
      ...config.plugins,
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /a\.js|node_modules/,
        // include specific files based on a RegExp
        include: /src/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // allow import cycles that include an asyncronous import,
        // e.g. via import(/* webpackMode: "weak" */ './file.js')
        allowAsyncCycles: false,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;
