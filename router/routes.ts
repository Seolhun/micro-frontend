export default [
  /**
   * @Auth
   */
  {
    page: '/auth',
    routePath: '/login',
  },
  {
    page: '/auth/join',
    routePath: '/join',
  },
  /**
   * @MusicianList
   */
  {
    page: '/musicians',
    routePath: '/musicians',
  },
  /**
   * @Sounds
   */
  {
    page: '/sounds',
    routePath: '/sounds',
  },
  /**
   * @Videos
   */
  {
    page: '/videos',
    routePath: '/videos',
  },
  /**
   * @Tours
   */
  {
    page: '/tours',
    routePath: '/tours',
  },
  /**
   * @Community
   */
  {
    page: '/community',
    routePath: '/community',
  },
  /**
   * @Notice
   */
  {
    page: '/notice',
    routePath: '/notice',
  },
  /**
   * @Musician
   * @description All pathes matched /:musicianName, So this routes is at the back.
   */
  {
    page: '/musician',
    routePath: '/:musicianName',
  },
  {
    page: '/musician/albums',
    routePath: '/:musicianName/albums',
  },
  {
    page: '/musician/albums/_id',
    routePath: '/:musicianName/albums/:albumName',
  },
];
