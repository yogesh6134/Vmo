import { StyleSheet } from "react-native";
import Colors from "../../themes/Colors";
import { SPACING, FONT_SIZE, HEIGHT, WIDTH } from "../../themes/Constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    notificationView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.v15,
        borderBottomColor: Colors.txtDark,
        borderBottomWidth: 0.5,
        paddingVertical: SPACING.v8,
        alignItems: 'center',
        width: '100%'
    },
    nameText: {
        fontSize: FONT_SIZE.f12,
        color: Colors.txtDark,
    },

    leftSideNotification: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "70%",
    },
    icon: {
        height: HEIGHT.h40,
        width: WIDTH.w45, 
        marginRight: SPACING.v20
    },
    rightSideView: {
        width: "25%",
        alignItems: 'flex-end',
    
    },
    button: {
        borderWidth: 1,
        paddingHorizontal: SPACING.v15,
        paddingVertical: SPACING.v2,
        borderColor: Colors.txtDark,
        borderRadius: SPACING.v5
    }
})
