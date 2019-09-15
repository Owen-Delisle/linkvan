import {StyleSheet, Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default styles;
