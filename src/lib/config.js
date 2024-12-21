export const server =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.deeniinfotech.com';

// export const receiverEmail = "info@deeniinfotech.com"; / TODO: Fix Webmail
export const receiverEmail = "deeniinfotech@gmail.com";
export const emailSenderName = "DIT Web Client";
