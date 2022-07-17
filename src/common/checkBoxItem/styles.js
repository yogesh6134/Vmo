import Color from "@theme/colors";
import { SPACING, WIDTH } from "@theme/constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    boxView: {
        width: WIDTH.w300,
        borderRadius: SPACING.v12,
        backgroundColor: Color.white,
        paddingVertical: SPACING.v12
    },
    boxViews: {
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.v15,
        paddingVertical: SPACING.v12
    },
    border: {
        height: 1,
        backgroundColor: Color.text_dark4
    }
})