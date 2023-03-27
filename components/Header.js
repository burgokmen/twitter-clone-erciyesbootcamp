import { View, Text, StyleSheet, Image } from "react-native"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

export const Header = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                style={styles.userImage}
                source={{
                    uri:'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg'
                }}
                />
                <Image
                style={styles.twitterLogo}
                source={{
                    uri:'https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png'
                }}
                />
                <FontAwesomeIcon icon={faGear} color='white' size={25} />
            </View>
            <Divider />
        </>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15

    },
    userImage: {
        width:30,
        height: 30,
        borderRadius: 20
    },
    twitterLogo: {
        width: 40,
        height: 40,
        borderRadius: 40
        
    }

})

export default Header