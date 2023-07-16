import {
  faBell,
  faEnvelope,
  faHouseUser,
  faMicrophone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text, StyleSheet, Image } from "react-native";

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <FontAwesomeIcon icon={faHouseUser} color="blue" size={25} />
      <FontAwesomeIcon icon={faSearch} color="blue" size={25} />
      <FontAwesomeIcon icon={faMicrophone} color="blue" size={25} />
      <FontAwesomeIcon icon={faBell} color="blue" size={25} />
      <FontAwesomeIcon icon={faEnvelope} color="blue" size={25} />
    </View>
  );
};

export const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Menu;
