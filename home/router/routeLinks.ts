/**
 * @Index
 */
export const root = () => ({
  as: `/`,
  href: `/`,
});

/**
 * @Notices
 */
export const notices = () => ({
  as: `/notices`,
  href: `/notices`,
});

export const noticeInnotices = () => ({
  as: `/notices/notice`,
  href: `/notices/:noticeName`,
});
