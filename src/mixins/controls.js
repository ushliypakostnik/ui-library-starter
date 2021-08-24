export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
  },

  computed: {
    control: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
        this.$emit('change', value);
      },
    },
  },

  methods: {
    click(event) {
      this.$emit('click');
      if (this.onClick) this.onClick(event);
    },
  },
};
