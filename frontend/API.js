import axios from 'axios'
import { db } from '@/firebase'

// const http = axios.create({
//   baseURL: 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series'
// });

// export default {
//   async getData() {
//     const { data } = await http.get('/time_series_19-covid-Confirmed.csv');
//     return data;
//   }
// };

export default {
  async getDataCsv() {
    const { data } = await axios.get(
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv'
    )
    return data
  },

  async getCovidMyCasesMk() {
    const apiUrl =
      'https://us-central1-covid-19-my-api-firebase.cloudfunctions.net/getCovid19MyCases/mk'
    const { data } = await axios.get(apiUrl)
    return data
  },

  async getCovidMyCasesOb() {
    const apiUrl =
      'https://us-central1-covid-19-my-api-firebase.cloudfunctions.net/getCovid19MyCases/ob'
    const { data } = await axios.get(apiUrl)
    return data
  },

  async getCovidMyCaseObFirestore() {
    // var docRef = db.collection('cities').doc('Latest')

    // docRef
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log('Document data:', doc.data())
    //     } else {
    //       // doc.data() will be undefined in this case
    //       console.log('No such document!')
    //     }
    //   })
    //   .catch((error) => {
    //     console.log('Error getting document:', error)
    //   })

    const ObFirestoreRef = db
      .collection('outbreakmy')
      .orderBy('updatedTime', 'desc')
      .limit(1)
    const querySnapshot = await ObFirestoreRef.get()

    let docData = {}
    let updatedTime

    querySnapshot.forEach((doc) => {
      updatedTime = doc.data().updatedTime.toDate()
      docData = doc.data()
      docData.updatedTime = updatedTime
    })
    return docData
  },
}
