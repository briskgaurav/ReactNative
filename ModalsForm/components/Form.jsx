import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Form = ({handleModal}) => {
  //schema
  const schema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email('Invalid Email').required('Email is required!'),
    password: Yup.number(),
  });

  //HandleSubmit
  const onSubmit = (values, {resetForm}) => {
    handleModal();
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        checkBox: false,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}>
      {({
        handleChange,
        values,
        handleBlur,
        touched,
        resetForm,
        handleSubmit,
        errors,
        setFieldValue,
      }) => (
        <View style={styles.viewcontainer}>
          <Text style={styles.headingText}>Form</Text>
          <View style={styles.ViewSecond}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.textInput}
              name="name"
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              value={values.name}
              placeholder="Enter your name"
            />
            {errors.name && touched.name && <Text>{errors.name}</Text>}
          </View>

          <View style={styles.ViewSecond}>
            <Text style={styles.text}>Email Id</Text>
            <TextInput
              style={styles.textInput}
              name="email"
              onChangeText={handleChange('email')}
              value={values.email}
              onBlur={handleBlur('email')}
              placeholder="Enter your email id"
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}
          </View>

          <View style={styles.ViewSecond}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.textInput}
              name="password"
              onChangeText={handleChange('password')}
              value={values.password}
              onBlur={handleBlur('password')}
              placeholder="Enter your password"
            />
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}
          </View>

          <View style={styles.viewCheckbox}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => {
                setFieldValue('checkBox', !values.checkBox);
              }}>
              <Text>{values.checkBox ? '✔️' : ''}</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Remember Me!</Text>
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit Form</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => resetForm()}
            style={styles.buttonreset}>
            <Text style={styles.buttonText}>Reset Form</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  headingText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3C329A',
    fontSize: 25,
  },
  viewcontainer: {
    height: '100%',
    width: '100%',
    padding: 20,
    paddingTop: 40,
  },
  ViewSecond: {
    marginBottom: 10,
  },
  text: {
    fontWeight: 'semibold',
    marginBottom: 5,
  },
  textInput: {
    paddingHorizontal: 10,
    backgroundColor: '#60B7D0',
    borderRadius: 10,
  },
  button: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#3C329A',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  buttonreset: {
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F03C1E',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderColor: '#3C329A',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCheckbox: {
    width: '100%',
    marginTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default Form;
