const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@common': path.resolve(__dirname, 'src/components/common/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@views': path.resolve(__dirname, 'src/views/'),
    },
  },
}
