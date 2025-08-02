import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { styles } from '../../assets/styles/plans.style.js';
import { COLORS } from '../../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';
import { usePlansQuery } from '../../services/apiService.js';
import LinearGradient from 'react-native-linear-gradient';
import { ROUTES } from '../../constants/routes.js';
import LoadingSpinner from '../../components/LoadingSpinner.jsx';

const PlansScreen = ({ navigation }) => {
  const { data: plans, isLoading } = usePlansQuery();

  const onPlanClicked = planID => {
    navigation.navigate(ROUTES.PAYMENT_METHOD, { planId: planID });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

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

        <Text style={styles.headerTitle}>Subscription Plans</Text>

        <TouchableOpacity style={styles.iconCircle}>
          <Icon name="notifications-outline" size={20} color={COLORS.shadow} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        <Text style={[styles.title && { ...styles.title, marginBottom: 30 }]}>
          Choose the right plan for your learning journey.
        </Text>

        {plans &&
          plans.map(item => (
            <PlanItem key={item.id} plan={item} onClick={onPlanClicked} />
          ))}
      </ScrollView>
    </View>
  );
};

export default PlansScreen;

const PlanItem = ({ plan, onClick }) => {
  if (plan.name === 'Premium Plan') {
    const features = plan.description.split(',').map(f => f.trim());
    console.log(features);
    return (
      <LinearGradient
        colors={['#087E8B', '#0B3954']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.premumContainer}
      >
        <View style={styles.dataRow}>
          <Text
            style={[
              styles.headerTitle && { ...styles.headerTitle, color: 'white' },
            ]}
          >
            {plan.name}
          </Text>
          <Text
            style={[
              styles.priceTitle && { ...styles.priceTitle, color: 'white' },
            ]}
          >
            ${plan.price}
          </Text>
        </View>
        <View style={styles.dataRow}>
          <Text
            style={[
              styles.description && {
                ...styles.description,
                color: 'white',
                marginBottom: 30,
              },
            ]}
          >
            {features[0]}
          </Text>
          <Text
            style={[
              styles.duration && {
                ...styles.duration,
                color: 'white',
                alignSelf: 'flex-start',
              },
            ]}
          >
            {plan.duration == 'monthly' ? 'Monthly' : plan.duration}
          </Text>
        </View>
        {features &&
          features.map((feature, index) => (
            <Feature key={`${feature}-${index}`} txt={feature} />
          ))}

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => {
            onClick(plan.id);
          }}
        >
          <Text style={styles.buttonText}>Subscribe Now</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
  return (
    <TouchableOpacity
      style={styles.cardUserContainer}
      activeOpacity={0.8}
      onPress={() => {
        onClick(plan.id);
      }}
    >
      <View style={styles.dataRow}>
        <Text style={styles.headerTitle}>{plan.name}</Text>
        <Text style={styles.priceTitle}>${plan.price}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.description}>{plan.description}</Text>
        <Text style={styles.duration}>
          {plan.duration == 'monthly' ? 'Monthly' : plan.duration}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Feature = ({ txt }) => {
  return (
    <View style={styles.rowFeature}>
      <Icon
        name="checkmark-sharp"
        size={18}
        color="black"
        style={styles.iconCirclePremum}
      />
      <Text style={styles.premiumFeatureTxt}>{txt}</Text>
    </View>
  );
};
