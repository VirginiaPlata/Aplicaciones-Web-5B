import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import { signIn, signUp } from './controllers/AuthController';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Parra's Dev</Text>
        </View>

        <View style={styles.formsWrapper}>
          <View style={[styles.formContainer, styles.signInContainer]}>
            <Text style={styles.sectionTitle}>Iniciar Sesión</Text>
            <View style={styles.divider} />
            <SignInForm onSignIn={signIn} />
          </View>

          <View style={[styles.formContainer, styles.signUpContainer]}>
            <Text style={styles.sectionTitle}>Crear Cuenta</Text>
            <View style={styles.divider} />
            <SignUpForm onSignUp={signUp} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 12,
    tintColor: '#4a6fa5',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  formsWrapper: {
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,              
    marginBottom: 16,         
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.02)',
    maxWidth:500,
  },
  signInContainer: {
    borderTopWidth: 3,
    borderTopColor: '#4a6fa5',
  },
  signUpContainer: {
    borderTopWidth: 3,
    borderTopColor: '#6c5ce7',
  },
  sectionTitle: {
    fontSize: 18,              
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 6,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#ecf0f1',
    marginVertical: 12,       
  },
});
