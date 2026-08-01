module.exports = {
  theme: {
    extend: {
      keyframes: {
        trace: {
          '0%':   { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-100' },
        },
      },
      animation: {
        trace: 'trace 1.8s linear infinite',
      },
    },
  },
}