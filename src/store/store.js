import {
  createStore
} from 'vuex'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp
} from 'firebase/firestore'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from "firebase/storage"
import {
  db
} from '../plugins/firebase'
import uuid from 'uuid-random'

export default createStore({
  state: {
    step: 1,
    formCredential: {
      studentsname: '',
      sex: '',
      address: '',
      dob: '',
      state: '',
      phone: '',
      email: '',
      sponsorName: '',
      sponsorAddress: '',
      sponsorPhone: '',
      course1: {
        course: '',
        duration: 1,
        price: 30000
      },
      course2: {
        course: '',
        duration: 1,
        price: 30000
      },
      course3: {
        course: '',
        duration: 1,
        price: 30000
      },
      agrement: true,
      verified: false
    },
    activeCardOne: false,
    activeCardTwo: false,
    activeCardThree: false,
    loading: false,
    image: null,
    snackbar: false,
    text: '',
    color: 'green',
    textColor: 'white',
    evenForm: {
      name: '',
      email: '',
      phone: ''
    },
    evenFormLoading: false,
    registration: [],
    viewStudent: null,
    eventRegistration: []
  },

  getters: {
    registration: state => state.registration,
    eventRegistration: state => state.eventRegistration
  },

  mutations: {
    next: state => {
      if (state.step < 4) state.step += 1
    },

    prev: state => {
      if (state.step == 0) return
      state.step -= 1
    },

    closeSnackbar: state => state.snackbar = false,

    getStudent: (state, student) => state.viewStudent = student,

    toggleActiveCardOne: state => state.activeCardOne = !state.activeCardOne,

    toggleActiveCardTwo: state => state.activeCardTwo = !state.activeCardTwo,

    toggleActiveCardThree: state => state.activeCardThree = !state.activeCardThree,

    setCourseOnePrice: (state) => {
      function percentage(percent, total) {
        return ((percent / 100) * total).toFixed(0);
      }

      switch (state.formCredential.course1.duration) {
        case 1: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(5, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 2: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(10, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 3: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(15, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 4: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(20, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 5: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(25, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 6: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(30, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 7: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(35, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 8: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(40, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 9: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(45, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 10: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(50, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 10: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(55, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 10: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(60, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 11: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(65, 30000)) + parseInt(state.formCredential.course1.price);
        }
        break;
        case 12: {
          state.formCredential.course1.price = 30000
          state.formCredential.course1.price = parseInt(percentage(70, 30000)) + parseInt(state.formCredential.course1.price);
        }
      }

      console.log(state.formCredential.course1.price)
    }
  },

  actions: {
    async submitForm() {
      let data = this.state.formCredential

      if (!data.image && data.studentsname == '' && data.sex == '' && data.address == '' && data.dob == '' && data.state == '' && data.phone == '' && data.email == '' && data.sponsorName == '' && data.sponsorAddress == '' && data.sponsorPhone == '') {
        this.state.loading = false
        this.state.snackbar = true
        this.state.color = 'red'
        this.state.snackbar = 'white'
        this.state.text = 'Please complete the form and try again'
      }

      if (!this.state.image) return

      this.state.loading = true

      const storage = getStorage()

      let link = `students/${uuid()}/${this.state.image.name}`

      const uploadTask = uploadBytesResumable(ref(storage, link), this.state.image)

      uploadTask.on('state_changed',
        snapshot => { },
        error => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async downloadURL => {
              await addDoc(collection(db, 'registration'), {
                ...this.state.formCredential,
                displayPicture: downloadURL,
                timestamp: serverTimestamp()
              })
              this.state.loading = false
              this.state.snackbar = true
              this.state.color = 'green'
              this.state.snackbar = 'white'
              this.state.text = 'Registration completed'
            })
        }
      )
    },

    async submitEventForm() {
      this.state.evenFormLoading = true

      await addDoc(collection(db, 'evenRegistration'), {
        ...this.state.evenForm,
        timestamp: serverTimestamp()
      })

      this.state.evenFormLoading = false
    },

    async getRegistrationForms() {
      this.state.registration = []
      let querySnapshot = await getDocs(collection(db, "registration"))
      querySnapshot.forEach((doc) => {
        this.state.registration.push({
          id: doc.id,
          ...doc.data()
        })
      })
    },

    async getStudent({
      commit
    }, id) {
      const student = await (await getDoc(doc(db, 'registration', id))).data()
      commit('getStudent', student)
    },

    async getRegistrationForms() {
      this.state.eventRegistration = []
      let querySnapshot = await getDocs(collection(db, "evenRegistration"))
      querySnapshot.forEach((doc) => {
        this.state.eventRegistration.push({
          id: doc.id,
          ...doc.data()
        })
      })
    },
  },
})
