import { StatusBar, StyleSheet, Platform } from "react-native";
import Colors from "../../themes/Colors";
import { SPACING, FONT_SIZE } from "../../themes/Constants";



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        justifyContent: 'space-around',
        paddingBottom: SPACING.v25,
        paddingTop: SPACING.v200
    },
    box: {
        paddingHorizontal: SPACING.v15,
        paddingVertical: SPACING.v10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: SPACING.v10,
        marginHorizontal: SPACING.v15,
        marginVertical: SPACING.v5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    uncheckIcon: {
        height: 40,
        width: 40,
        marginRight: SPACING.v15
    },
    boxText: {
        fontSize: FONT_SIZE.f18,
        color: Colors.black,
        fontFamily: "Roboto-Regular"

    },
    bottomView: {
        height: 100,
    },
    instructions: {
        fontSize: FONT_SIZE.f12,
        color: Colors.white,
        marginHorizontal: SPACING.v15,
        textAlign: 'center',
        marginBottom: SPACING.v15,
        fontFamily: "Roboto-Regular"
    },
    button: {
        backgroundColor: Colors.white,
        marginHorizontal: SPACING.v15,
        paddingVertical: SPACING.v8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: SPACING.v8
    },
    buttonText: {
        fontSize: FONT_SIZE.f15,
        color: Colors.black,
        fontFamily: "AkayaTelivigala-Regular"
    }

})