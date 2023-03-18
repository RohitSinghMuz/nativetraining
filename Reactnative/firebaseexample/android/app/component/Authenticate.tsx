import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

const Authenticate=(props:any)=> {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Google OAuth</Text>
            <GoogleSigninButton onPress={props.handleGoogleButtonPress} />
        </View>
    )
}

export default Authenticate;
const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        marginBottom: 30
    }
})