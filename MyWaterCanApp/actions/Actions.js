import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';
  import { connect } from 'react-redux';
  
export function counterIncrementer() {
  return { type: 'INCREMENT' }
}
export function counterDecrementer() {
    return { type: 'DECREMENT' }
}

export function isLoading(mIsLoading) {
    return { type: 'ISLOADING',
            isloading: mIsLoading
    }
}

export function counterFetchingSucess(value) {
    return { type: 'COUNTERSUCESS',
            isLoading: false,
            value: value
    }
}

export function fetchCounter() {
    return (dispatch) => {
        dispatch(isLoading(true));
        fetch("https://private-8f060a-mileupapidocument.apiary-mock.com/getValue")
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
                // return response;
            })
            .then((value) => dispatch(counterFetchingSucess(value)))
            .catch(() => dispatch(isLoading(false)));
    };
}
