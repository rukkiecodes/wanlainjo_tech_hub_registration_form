import {
  createStore
} from 'vuex'
import {
  addDoc,
  collection,
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
      agrement: true
    },
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
    evenFormLoading: false
  },

  getters: {

  },

  mutations: {
    next: state => {
      if (state.step < 3) state.step += 1
    },

    prev: state => {
      if (state.step == 0) return
      state.step -= 1
    },

    closeSnackbar: state => state.snackbar = false
  },

  actions: {
    async submitForm({
      commit
    }) {
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
        snapshot => {},
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

    async submitEventForm({
      commit
    }) {
      this.state.evenFormLoading = true

      await addDoc(collection(db, 'evenRegistration'), {
        ...this.state.evenForm,
        timestamp: serverTimestamp()
      })

      this.state.evenFormLoading = false
    }
  },
})
