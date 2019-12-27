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
export const communities = () => ({
  as: `/communities`,
  href: `/communities`,
});

export const communityIncommunities = () => ({
  as: `/communities/community`,
  href: `/communities/:communityName`,
});
