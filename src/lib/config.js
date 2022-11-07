export const server =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.deeniinfotech.com';
