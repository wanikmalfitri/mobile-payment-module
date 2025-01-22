import { StyleSheet } from "react-native";
import { BORDER_WIDTH, BORDER_RADIUS, COLORS, SPACING, FONT_SIZE, FONT_WEIGHT, ALIGNMENT } from "../../theme";

const styles = StyleSheet.create({
    container: {
      marginBottom: SPACING.MEDIUM,
    },
    selector: {
      backgroundColor: COLORS.WHITE,
      borderRadius: BORDER_RADIUS.SMALL,
      padding: SPACING.MEDIUM,
      borderWidth: BORDER_WIDTH.MEDIUM,
      borderColor: COLORS.PRIMARY,
    },
    selectorText: {
      fontSize: FONT_SIZE.MEDIUM,
      color: COLORS.BLACK,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "flex-end",
    },
    searchInput: {
      backgroundColor: COLORS.WHITE,
      padding: SPACING.MEDIUM,
      borderRadius: BORDER_RADIUS.SMALL,
      marginBottom: SPACING.MEDIUM,
      borderWidth: BORDER_WIDTH.MEDIUM,
      borderColor: COLORS.PRIMARY,
      fontSize: FONT_SIZE.MEDIUM,
    },
    recipientItem: {
      paddingVertical: SPACING.MEDIUM,
      borderBottomWidth: BORDER_WIDTH.THIN,
      borderBottomColor: COLORS.LIGHT_GRAY,
    },
    recipientInfo: {
      flex: 1,
    },
    recipientName: {
      fontSize: FONT_SIZE.MEDIUM,
      fontWeight: FONT_WEIGHT.MEDIUM,
    },
    recipientAccount: {
      fontSize: FONT_SIZE.SMALL,
      color: COLORS.GRAY,
      marginTop: SPACING.XSMALL,
    },
    dateText: {
      fontSize: FONT_SIZE.SMALL,
      color: COLORS.GRAY,
      marginLeft: SPACING.XSMALL,
    },
    emptyText: {
      textAlign: ALIGNMENT.CENTER,
      padding: SPACING.MEDIUM,
      color: COLORS.GRAY,
    },
    closeButton: {
      marginTop: SPACING.MEDIUM,
      padding: SPACING.MEDIUM,
      backgroundColor: COLORS.PRIMARY,
      borderRadius: BORDER_RADIUS.FULL,
      alignItems: ALIGNMENT.CENTER,
    },
    closeButtonText: {
      color: COLORS.WHITE,
      fontSize: FONT_SIZE.MEDIUM,
      fontWeight: FONT_WEIGHT.BOLD,
    },
    footerLoader: {
      paddingVertical: SPACING.MEDIUM,
      alignItems: ALIGNMENT.CENTER,
    },
    modalContent: {
      backgroundColor: COLORS.WHITE,
      borderTopLeftRadius: BORDER_RADIUS.MEDIUM,
      borderTopRightRadius: BORDER_RADIUS.MEDIUM,
      padding: SPACING.MEDIUM,
      maxHeight: "80%",
    },
  });
  
export default styles;