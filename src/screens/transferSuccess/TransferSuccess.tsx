import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ALIGNMENT, BORDER_RADIUS, COLORS, FONT_SIZE, FONT_WEIGHT, SPACING } from "../../theme";

type TransferConfirmationRouteProp = RouteProp<
  RootStackParamList,
  "TransferSuccess"
>;

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TransferSuccess"
>;

const TransferSuccess = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<TransferConfirmationRouteProp>();
  const { transactionId, amount, recipientName } = route.params;
  const handleDone = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "Home",
        },
      ],
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.successIcon}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
        <Text style={styles.successTitle}>Transfer Successful!</Text>
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Amount</Text>
            <Text style={styles.detailValue}>${amount.toFixed(2)}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Recipient</Text>
            <Text style={styles.detailValue}>{recipientName}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Transaction ID</Text>
            <Text style={styles.detailValue}>{transactionId}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferSuccess;

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
    fontWeight: FONT_WEIGHT.BOLD,
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
