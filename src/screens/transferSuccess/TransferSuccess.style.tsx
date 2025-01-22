import { StyleSheet } from "react-native";
import {
  ALIGNMENT,
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  scrollContent: {
    flexGrow: 1,
    padding: SPACING.MEDIUM,
    alignItems: ALIGNMENT.CENTER,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: BORDER_RADIUS.FULL,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: ALIGNMENT.CENTER,
    alignItems: ALIGNMENT.CENTER,
    marginTop: SPACING.LARGE,
  },
  checkmark: {
    color: COLORS.WHITE,
    fontSize: 80,
  },
  successTitle: {
    fontSize: FONT_SIZE.LARGE,
    fontWeight: FONT_WEIGHT.BOLD,
    marginTop: SPACING.LARGE,
    marginBottom: SPACING.XLARGE,
    color: COLORS.WHITE,
  },
  detailsCard: {
    backgroundColor: COLORS.WHITE,
    borderRadius: BORDER_RADIUS.SMALL,
    paddingHorizontal: SPACING.MEDIUM,
    paddingVertical: SPACING.SMALL,
    width: "100%",
    marginBottom: SPACING.LARGE,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  detailLabel: {
    fontSize: FONT_SIZE.MEDIUM,
    color: COLORS.GRAY,
  },
  detailValue: {
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: COLORS.BLACK,
  },
  shareButton: {
    backgroundColor: COLORS.PRIMARY,
    paddingVertical: SPACING.MEDIUM,
    paddingHorizontal: SPACING.LARGE,
    borderRadius: BORDER_RADIUS.FULL,
    marginBottom: SPACING.LARGE,
    width: "100%",
  },
  shareButtonText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.BOLD,
    textAlign: ALIGNMENT.CENTER,
  },
  doneButton: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: SPACING.MEDIUM,
    paddingHorizontal: SPACING.LARGE,
    borderRadius: BORDER_RADIUS.FULL,
    width: "100%",
  },
  doneButtonText: {
    color: COLORS.PRIMARY,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    textAlign: ALIGNMENT.CENTER,
  },
});

export default styles;
