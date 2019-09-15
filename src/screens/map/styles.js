import {StyleSheet, Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // // flexDirection: 'column-reverse',
    // alignItems: 'flex-end',
    // position: 'absolute',
    // bottom: 0,
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default styles;
