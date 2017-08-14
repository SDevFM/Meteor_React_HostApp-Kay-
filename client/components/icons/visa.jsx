let { PureRenderMixin } = React.addons;
let { SvgIcon, Mixins } = mui;
let { StylePropable } = Mixins;

Visa = React.createClass({

  propTypes: {
    size: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  mixins: [StylePropable, PureRenderMixin],

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
    const rootStyles = this.mergeAndPrefix(styles.root, this.props.style);
    return (
      <SvgIcon  viewBox="0 0 48 48" style={rootStyles}>
        <path fill="#1565C0"
              d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,
                1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z" />
        <g>
          <path fill="#FFFFFF"
                d="M15.186,19l-2.626,7.832c0,
                0-0.667-3.313-0.733-3.729c-1.495-3.411
                -3.701-3.221-3.701-3.221L10.726,30 v-0.002h3.161L18.258,
                19H15.186z"/>
          <polygon fill="#FFFFFF"
                   points="17.689,30 20.56,30 22.296,19 19.389,19"/>
          <path fill="#FFFFFF"
                d="M38.008,19h-3.021l-4.71,11h2.852l0.588-1.571h3.596L37.619,
                  30h2.613L38.008,19z M34.513,26.328 l1.563-4.157l0.818,
                  4.157H34.513z" />
          <path fill="#FFFFFF"
                d="M26.369,22.206c0-0.606,0.498-1.057,1.926-1.057c0.928,0,1.991,
                0.674,1.991,0.674l0.466-2.309 c0,
                0-1.358-0.515-2.691-0.515c-3.019,0-4.576,1.444-4.576,3.272c0,
                3.306,3.979,2.853,3.979,4.551c0,0.291-0.231,0.964-1.888,
                0.964 c-1.662,0-2.759-0.609-2.759-0.609l-0.495,2.216c0,0,1.063,
                0.606,3.117,0.606c2.059,0,4.915-1.54,4.915-3.752 C30.354,23.586,
                26.369,23.394,26.369,22.206z" />
        </g>
        <path fill="#FFC107"
              d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,
                0-4.44,0-4.44,0 S10.894,20.84,12.212,24.945z" />
      </SvgIcon>
    );
  },

});
