import React from 'react';
import {Text} from 'react-native'
import { API_HOST } from './config';
import config from 'react-native-config'


const Hello = () => {
    return <Text>Base URL2 = {__DEV__.toString()} {API_HOST} {config.API_HOST}</Text>;
}
export default Hello;