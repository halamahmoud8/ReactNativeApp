import reactDom from "react-dom";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    marginBottom: 40,
    marginVertical: 10,
    borderWidth: 3,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    borderColor: "#aba6a6",
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: "center",
    textAlign: "center",
  },
  cardImage: {
    height: hp("40%"),
    width: wp("80%"),
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  descText: {
    fontSize: 16,
    alignSelf: "center",
    textAlign: "left",
    width: wp("80%"),
    marginBottom: 10,
  },
});
