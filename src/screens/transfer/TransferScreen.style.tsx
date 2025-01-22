import { StyleSheet } from "react-native";
import {
  ALIGNMENT,
  BORDER_RADIUS,
  BORDER_WIDTH,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  content: {
    padding: SPACING.MEDIUM,
  },
  label: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginBottom: SPACING.XSMALL,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS.SMALL,
    padding: SPACING.MEDIUM,
    marginBottom: SPACING.LARGE,
    borderWidth: BORDER_WIDTH.THIN,
    borderColor: COLORS.GRAY,
    fontSize: FONT_SIZE.MEDIUM,
  },
  inputText: {
    color: COLORS.GRAY,
    fontSize: FONT_SIZE.MEDIUM,
  },
  transferButton: {
    backgroundColor: COLORS.PRIMARY,
    padding: SPACING.MEDIUM,
    alignItems: ALIGNMENT.CENTER,
    borderRadius: BORDER_RADIUS.FULL,
    borderWidth: BORDER_WIDTH.MEDIUM,
    borderColor: COLORS.WHITE,
  },
  disabledButton: {
    backgroundColor: COLORS.GRAY,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: FONT_WEIGHT.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
  },
  recentList: {
    marginBottom: SPACING.XLARGE,
    marginHorizontal: -SPACING.MEDIUM,
    paddingHorizontal: SPACING.MEDIUM,
  },
  recentCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS.SMALL,
    borderWidth: BORDER_WIDTH.MEDIUM,
    borderColor: COLORS.PRIMARY,
    padding: SPACING.SMALL,
    marginRight: SPACING.MEDIUM,
    minWidth: 150,
  },
  recipientName: {
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: COLORS.PRIMARY,
    marginBottom: SPACING.XSMALL,
  },
  accountNumber: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.GRAY,
    marginBottom: SPACING.XSMALL,
  },
  transactionDate: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.GRAY,
  },
});

export default styles;
