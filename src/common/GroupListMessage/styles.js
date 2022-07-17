import { StyleSheet } from "react-native";
import Color from "@theme/colors";
import { HEIGHT, SPACING, WIDTH } from "@theme/constants";

export default StyleSheet.create({
    button: {
        backgroundColor: Color.lightSkin,
        paddingVertical: SPACING.v4,
        paddingHorizontal: SPACING.v12,
        borderTopLeftRadius: SPACING.v20,
        borderTopRightRadius: SPACING.v20,
        borderBottomRightRadius: SPACING.v20,
        maxWidth: WIDTH.w170,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: HEIGHT.h24,
        width: WIDTH.w24,
        marginRight: SPACING.v8
    },
    textStyle: {
        marginRight: SPACING.v8,
        letterSpacing: 0.2,
        maxWidth: WIDTH.w150
    }
})
