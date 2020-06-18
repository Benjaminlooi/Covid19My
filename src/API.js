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
const firebaseConfig = {
  apiKey: "AIzaSyBh9fPWlAkULKtVKxngMVVGQNEkYOCPauw",
  authDomain: "bensanitymain.firebaseapp.com",
  databaseURL: "https://bensanitymain.firebaseio.com",
  projectId: "bensanitymain",
  storageBucket: "bensanitymain.appspot.com",
  messagingSenderId: "434449604991",
  appId: "1:434449604991:web:06f04d19a1489eaf2afa4a",
  measurementId: "G-02SHCFE8D9"
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
    const ObFirestoreRef = db.collection("outbreakmy")
      .orderBy("updatedTime", "desc").limit(1)
    const querySnapshot = await ObFirestoreRef.get()

    let docData = {},
      updatedTime;

    querySnapshot.forEach(doc => {
      updatedTime = doc.data().updatedTime.toDate();
      docData = doc.data();
      docData.updatedTime = updatedTime;
    })
    return docData;
  }
};