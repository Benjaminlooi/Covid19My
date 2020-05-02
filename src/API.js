import axios from 'axios';

// const http = axios.create({
//   baseURL: 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series'
// });

// export default {
//   async getData() {
//     const { data } = await http.get('/time_series_19-covid-Confirmed.csv');
//     return data;
//   }
// };

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwwPzOTAgEiLIw01183OReG91A2LUopRY",
  authDomain: "covid-19-my-api-firebase.firebaseapp.com",
  databaseURL: "https://covid-19-my-api-firebase.firebaseio.com",
  projectId: "covid-19-my-api-firebase",
  storageBucket: "covid-19-my-api-firebase.appspot.com",
  messagingSenderId: "741882795537",
  appId: "1:741882795537:web:9663352caf5abee279c3b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default {
  async getDataCsv() {
    const { data } = await axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv');
    return data;
  },

  async getCovidMyCasesMk() {
    const apiUrl = 'https://us-central1-covid-19-my-api-firebase.cloudfunctions.net/getCovid19MyCases/mk'
    const { data } = await axios.get(apiUrl);
    return data;
  },

  async getCovidMyCasesOb() {
    const apiUrl = 'https://us-central1-covid-19-my-api-firebase.cloudfunctions.net/getCovid19MyCases/ob'
    const { data } = await axios.get(apiUrl);
    return data;
  },

  async getCovidMyCaseObFirestore() {
    const ObFirestoreRef = db.collection('outbreakmy').doc('cases-data');
    const data = await ObFirestoreRef.get()

    if (data.exists) {
      let updatedTime = data.data().updatedTime.toDate();
      let docData = data.data();
      docData.updatedTime = updatedTime;
      return docData;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
};