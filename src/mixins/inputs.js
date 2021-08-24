export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: [String, null],
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    error: {
      type: [String, null],
      required: false,
      default: null,
    },
    onFocus: {
      type: Function,
      required: false,
      default: () => [],
    },
    onBlur: {
      type: Function,
      required: false,
      default: () => [],
    },
  },

  data() {
    return {
      isFocus: false,
    };
  },

  methods: {
    onFocusEvent(event) {
      this.isFocus = true;
      this.$emit('focus');

      if (this.onFocus) {
        this.onFocus(event);
      }
    },

    onBlurEvent(event) {
      this.isFocus = false;
      this.$emit('blur');

      if (this.onBlur) {
        this.onBlur(event);
      }
    },

    onInputEvent() {
      this.$emit('input');
    },
  },
};
