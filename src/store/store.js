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
        duration: 1
      },
      course2: {
        course: '',
        duration: 1
      },
      course3: {
        course: '',
        duration: 1
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
