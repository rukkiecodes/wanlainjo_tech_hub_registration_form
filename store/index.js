import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { db } from '../plugins/firebase'
import uuid from 'uuid-random'

export const state = () => ({
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
    course1: '',
    course2: '',
    course3: '',
    agrement: ''
  },
  loading: false,
  image: null,
  snackbar: false,
  text: ''
})

export const getters = {}

export const mutations = {}

export const actions = {
  async submitForm ({ commit }) {
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
              displayPicture: downloadURL
            })
            this.state.loading = false
            this.state.snackbar = true
            this.state.text = 'Post saved'
          })
      }
    )
  }
}

export const strict = false