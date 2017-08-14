let { PureRenderMixin } = React.addons;
let { SvgIcon } = mui;

Towel = React.createClass({

  propTypes: {
    size: React.PropTypes.number,
  },

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      size: 48,
    };
  },

  getStyles() {
    return {
      root: {
        width: 'auto',
        height: this.props.size,
      },
    };
  },

  render() {
    const styles = this.getStyles();
    return (
      <SvgIcon  viewBox="0 0 48 48" style={styles.root}>
        <g>
          <circle fill="#B0BEC5" cx="9" cy="9" r="3"></circle>
          <circle fill="#B0BEC5" cx="39" cy="9" r="3"></circle>
        </g>
        <path fill="#327BBD"
              d="M35,8c0-0.931-0.639-1.706-1.5-1.929C32.639,
                6.294,32,7.069,32,8v26h3V8z" />
        <polygon fill="#1061AA"
                 points="32.728,22.343 32.727,22.343 29.898,25.171 29,
                        24.271 29,27.101 29.898,28 31.111,26.787 32.728,
                        25.171 35,27.444 35,24.615 " />
        <path fill="#546E7A"
              d="M39,10H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h30c0.553,0,1,0.447,
                1,1S39.553,10,39,10z" />
        <path fill="#A8CEF0"
              d="M33,6h-1c-4.552,0-15.426,0-17,0c-2,0-2,2-2,
                2v34h19v-8V8c0-0.931,0.639-1.706,1.5-1.929 C33.339,6.029,
                33.174,6,33,6z" />
        <polygon fill="#5193CF"
                 points="32,35.444 32,32.615 29.728,30.343 29.728,30.343 29.727,
                        30.343 26.898,33.171 24.071,30.343 24.07,30.343 24.07,
                        30.343 21.242,33.171 18.415,30.343 18.414,30.343 18.414,
                        30.343 15.585,33.171 13,30.585 13,33.414 15.585,
                        36 16.191,35.394 18.414,33.171 19.828,34.585 19.828,
                        34.585 20.394,35.151 21.243,36 22.657,34.585 22.657,
                        34.585 24.07,33.171 26.898,36 28.111,34.787 29.728,
                        33.171 " />
      </SvgIcon>
    );
  },

});
