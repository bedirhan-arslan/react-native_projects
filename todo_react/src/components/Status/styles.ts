import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginTop: 33,
  },
  status: {
    flexDirection: 'row',
  },
  title: {
    marginRight: 8,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4EA8DE',
  },
  count: {
    backgroundColor: '#333333',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 10,
  },
  countText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
});