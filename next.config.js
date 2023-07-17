/** @type {import('next').NextConfig} */
module.exports = {
  async headers() {
    return [
      {
        source: '/', // automatically handles all locales
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },
    ];
  },
};
