import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/styles/payment.style';
import { COLORS } from '../../constants/color';
import VisaIcon from '../../assets/images/visa.svg';
import PaypalIcon from '../../assets/images/paypal.svg';
import GooglePayIcon from '../../assets/images/googlepay.svg';
import Check from '../../assets/images/checked.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { useSubscribePlanMutation } from '../../services/apiService';
import { ROUTES } from '../../constants/routes';

const PaymentMethod = ({ navigation, route }) => {
  const { profile } = useSelector(state => state.profile);

  const planID = route.params.planId;
  const [selected, setSelected] = useState('visa');
  const [visible, setVisible] = useState(false);

  const subscribePlanMutation = useSubscribePlanMutation();

  const paymentOptions = [
    { id: 'visa', Icon: VisaIcon, width: 56, height: 25 },
    { id: 'paypal', Icon: PaypalIcon, width: 92, height: 32 },
    { id: 'googlepay', Icon: GooglePayIcon, width: 63, height: 63 },
  ];

  const handlePayment = async () => {
    subscribePlanMutation.mutate(
      { planId: planID, userId: profile.user_id },
      {
        onSuccess: () => {
          setVisible(true);
        },
        onError: error => {
          console.log(error);
        },
      },
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconCircle}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" size={20} color={COLORS.shadow} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Payment Method</Text>

        <TouchableOpacity style={styles.iconCircle}>
          <Icon name="notifications-outline" size={20} color={COLORS.shadow} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        <Text style={styles.title}>Add Payment Method</Text>
        <Text
          style={[
            styles.description && { ...styles.description, marginBottom: 30 },
          ]}
        >
          Provide Your Payment Method Details Below
        </Text>
        {/* payment type */}
        <Text style={styles.typeTitle}>Payment Type </Text>
        <View style={styles.optionsContainer}>
          {paymentOptions.map(({ id, Icon, width, height }) => (
            <TouchableOpacity
              key={id}
              style={styles.option}
              onPress={() => setSelected(id)}
              activeOpacity={0.7}
            >
              <View
                style={[styles.radio, selected === id && styles.radioSelected]}
              />
              <Icon width={width} height={height} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="credit-card"
            size={20}
            color={COLORS.textLight}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Card Number "
            placeholderTextColor={COLORS.textLight}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="person-outline" size={20} color={COLORS.textLight} />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Card Holder Name "
            placeholderTextColor={COLORS.textLight}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="calendar-outline" size={20} color={COLORS.textLight} />

          <TextInput
            style={styles.textInput}
            placeholder="Enter Expiry Date "
            placeholderTextColor={COLORS.textLight}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="calendar-outline" size={20} color={COLORS.textLight} />

          <TextInput
            style={styles.textInput}
            placeholder="Enter CVV "
            placeholderTextColor={COLORS.textLight}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          onPress={handlePayment}
          disabled={subscribePlanMutation.isLoading}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#087E8B', '#0B3954']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.authButton,
              subscribePlanMutation.isLoading && styles.buttonDisabled,
            ]}
          >
            <Text style={styles.buttonText}>
              {subscribePlanMutation.isLoading
                ? 'Proceeding ...'
                : 'Proceed to Payment'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.overlay}>
            <View style={styles.dialog}>
              <Check width={84} height={84} />
              <Text style={styles.message}>
                Your subscription is successful! Enjoy unlimited access.
              </Text>

              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  navigation.replace(ROUTES.HOME);
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Go to Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default PaymentMethod;
