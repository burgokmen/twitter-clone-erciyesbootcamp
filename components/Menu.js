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
      <FontAwesomeIcon icon={faHouseUser} color="white" size={25} />
      <FontAwesomeIcon icon={faSearch} color="white" size={25} />
      <FontAwesomeIcon icon={faMicrophone} color="white" size={25} />
      <FontAwesomeIcon icon={faBell} color="white" size={25} />
      <FontAwesomeIcon icon={faEnvelope} color="white" size={25} />
    </View>
  );
};

export const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Menu;
