import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 64,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#262626',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 8,
  },
  taskContainer: {
    marginLeft: 3.27,
    alignItems: 'center',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDescription: {
    fontSize: 14,
    marginLeft: 11.27,
    width: '90%',
   
  },
  taskCheckbox: {
    borderWidth: 2,
    borderRadius: 10,
  },
});