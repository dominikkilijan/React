import { StyleSheet } from 'react-native';

export const switchColors = {
  trackColor: { false: '#767577', true: '#4CAF50' },
  thumbColorTrue: '#4CAF50',
  thumbColorFalse: '#f4f3f4',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appBar: {
    backgroundColor: '#4CAF50',
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  appBarTitle: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  topRightButtonContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 16,
  },
  navButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30, // Rounded corners similar to the "Generate" button
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
    fontSize: 20, // Match font size with the "Generate" button
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 16,
  },
  numberDisplay: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    marginRight: 10,
  },
  rangeText: {
    fontSize: 22,
    marginVertical: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  inputLabel: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 5,
    color: '#333',
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
});
