const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { withTamagui } = require('@tamagui/metro-plugin');

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});
config.resolver.sourceExts.push('mjs');

module.exports = withNativeWind(config, {
  input: './global.css',
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
});
