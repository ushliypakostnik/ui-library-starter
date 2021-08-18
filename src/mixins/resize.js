import ScreenHelper from '../utils/screen-helper.js';

export default {
  data() {
    return {
      isMobile: null,
      isTablet: null,
      isDesktop: null,
    };
  },

  mounted() {
    window.addEventListener('resize', this.onWindowResizeCommon, false);
    this.onWindowResizeCommon();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResizeCommon, false);
  },

  methods: {
    onWindowResizeCommon() {
      // console.log('onWindowResizeCommon!!!!');

      this.isMobile = ScreenHelper.isMobile();
      this.isTablet = ScreenHelper.isTablet();
      this.isDesktop = ScreenHelper.isDesktop();
    },
  },
};
