import { Text, View, StyleSheet, Image } from "react-native";
import { styles } from "./Header";

constDivider = () => {
    return (
        <View style={styles.divider}>

        </View>
    )
}

export const styles = StyleSheet.create({
    divider: {
        backgroundColor: 'grey',
        width: '100%'
        height: 0.7,
        marginVertical:10
    }
})

export default Divider;