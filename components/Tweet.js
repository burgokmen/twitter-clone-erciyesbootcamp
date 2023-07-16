import {
  faArrowsRotate,
  faComment,
  faEllipsisVertical,
  faHeart,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/styles";
import Divider from "./Divider";

const Tweet = () => {
  return (
    <>
      <View style={styles.tweetContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri: "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
          }}
        />

        <View style={styles.tweet}>
          <View style={styles.userDetails}>
            <Text style={[styles.name, globalStyles.text]}>Bru Gokmen</Text>
            <Text
              style={[globalStyles.text, { marginLeft: 5, fontWeight: "500" }]}
            >
              @bgkmn . 4h
            </Text>
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              size={15}
              color="lightgrey"
              style={styles.menuIcon}
            />
          </View>

          <Text style={[styles.userTweet, globalStyles.text]}>
            Bootcamp beni React Nativele tanistirdi... ve bu tanisma sonrasi
            gittigim Bootcamle Fullstack dev oldum
          </Text>

          <View style={styles.tweetIcons}>
            <View style={[styles.iconContainer]}>
              <FontAwesomeIcon icon={faComment} color="lightgrey" size={15} />
              <Text style={[styles.iconText]}>10</Text>
            </View>

            <View style={[styles.iconContainer]}>
              <FontAwesomeIcon
                icon={faArrowsRotate}
                color="lightgrey"
                size={15}
              />
              <Text style={[styles.iconText]}>50</Text>
            </View>

            <View style={[styles.iconContainer]}>
              <FontAwesomeIcon icon={faHeart} color="lightgrey" size={15} />
              <Text style={[styles.iconText]}>56</Text>
            </View>

            <View style={[styles.iconContainer]}>
              <FontAwesomeIcon
                icon={faShareNodes}
                color="lightgrey"
                size={15}
              />
            </View>
          </View>
        </View>
      </View>
      <Divider />
    </>
  );
};

export const styles = StyleSheet.create({
  tweetContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 45,
  },
  tweet: {
    marginHorizontal: 10,
  },
  name: {
    fontWeight: "800",
  },
  userDetails: {
    flexDirection: "row",
    width: "90%",
  },
  userTweet: {
    width: "85%",
    fontWeight: "600",
    marginVertical: 1,
    lineHeight: 20,
  },
  menuIcon: {
    marginLeft: "auto",
  },
  tweetIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconText: {
    color: "white",
    marginLeft: 5,
  },
});

export default Tweet;
