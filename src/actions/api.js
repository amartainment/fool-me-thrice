import axios from 'axios';


const proxyurl = "https://cors-anywhere.herokuapp.com/";

function authenticate(credentials) {
    let req = axios({
        method: 'POST',
        data: credentials,
        url: proxyurl + 'https://fool-me-thrice.appspot.com/api/authenticate',
        cache: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
          }
    }).then(response => {
        sessionStorage.setItem('token', response.data.auth_token);
        return response;
    })

    return req;
}

function fetchTopics() {

    let token = sessionStorage.getItem('token');

    let req = axios({
        method: 'GET',
        mode: 'cors',
        url: proxyurl + 'https://fool-me-thrice.appspot.com/api/v1/topics',
        cache: false,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
          }
    }).then(response => {
        return response.data;
    })

    return req;
}

function getCards() {
    let token = sessionStorage.getItem('token');

    let req = axios({
        method: 'GET',
        mode: 'cors',
        url: proxyurl + 'https://fool-me-thrice.appspot.com/api/v1/cards',
        cache: false,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
          }
    }).then(response => {
        return response.data;
    })

    return req;
}

function updateScore(data) {
    let token = sessionStorage.getItem('token');

    let req = axios({
        method: 'POST',
        mode: 'cors',
        data: data,
        url: proxyurl + 'https://fool-me-thrice.appspot.com/api/v1/update_score',
        cache: false,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
          }
    }).then(response => {
        return response.data;
    })

    return req;
}

function updateTopics(topics) {

    let token = sessionStorage.getItem('token');

    let req = axios({
        method: 'POST',
        mode: 'cors',
        data: topics,
        url: proxyurl + 'https://fool-me-thrice.appspot.com/api/v1/update_user_topic',
        cache: false,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
          }
    }).then(response => {
        return response;
    })

    return req;
}

export {authenticate, fetchTopics, updateTopics, getCards, updateScore};