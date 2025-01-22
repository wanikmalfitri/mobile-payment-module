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
    padding: SPACING.MEDIUM,
  },
  balanceCard: {
    backgroundColor: COLORS.PRIMARY,
    padding: SPACING.LARGE,
    paddingTop: 0,
    borderBottomLeftRadius: BORDER_RADIUS.LARGE,
    borderBottomRightRadius: BORDER_RADIUS.LARGE,
    marginHorizontal: -SPACING.MEDIUM,
    marginTop: -SPACING.MEDIUM,
    marginBottom: SPACING.MEDIUM,
    borderWidth: BORDER_WIDTH.THICK,
    borderColor: COLORS.PRIMARY,
  },
  balanceLabel: {
    color: COLORS.MUTED_WHITE,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: FONT_SIZE.MEDIUM,
  },
  balanceAmount: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.XLARGE,
    fontWeight: FONT_WEIGHT.BOLD,
    marginTop: SPACING.SMALL,
  },
  transferButton: {
    borderWidth: BORDER_WIDTH.MEDIUM,
    borderColor: COLORS.PRIMARY,
    paddingHorizontal: SPACING.LARGE,
    paddingVertical: SPACING.SMALL,
    borderRadius: BORDER_RADIUS.FULL,
    alignItems: ALIGNMENT.CENTER,
    marginBottom: SPACING.LARGE,
  },
  transferButtonText: {
    color: COLORS.PRIMARY,
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
  },
  recentSection: {
    flex: 1,
  },
  sectionTitle: {
    color: COLORS.BLACK,
    fontSize: FONT_SIZE.LARGE,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    marginBottom: SPACING.LARGE,
  },
  transactionItem: {
    marginBottom: SPACING.MEDIUM,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  transactionMain: {
    flex: 1,
    marginRight: 16,
  },
  transactionName: {
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    marginBottom: SPACING.XSMALL,
  },
  transactionAccount: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.GRAY,
    marginBottom: SPACING.XSMALL,
  },
  transactionDate: {
    fontSize: FONT_SIZE.SMALL,
    color: COLORS.GRAY,
  },
  transactionAmount: {
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: COLORS.PRIMARY,
    alignSelf: 'flex-start',
  },
  emptyText: {
    textAlign: ALIGNMENT.CENTER,
    color: COLORS.GRAY,
    marginTop: SPACING.LARGE,
  },
});

export default styles;
