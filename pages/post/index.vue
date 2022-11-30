<template>
  <v-container style="margin-top: 40vh;">
    <h1>Add a new post</h1>
    <v-card
      width="600"
      max-height="350"
      flat
      class="overflow-hidden my-5"
    >
      <img
        id="output"
        style="width: 100%; height: 100%; object-fit: cover;"
      />
    </v-card>
    <input
      type="file"
      accept="image/*"
      @change="loadFile"
      class="d-none fileInput"
    >
    <v-btn
      @click="clickInput"
      color="deep-purple accent-4"
      class="mb-5 text-capitalize"
      dark
      depressed
    >
      <v-icon class="mr-2">mdi-folder-image</v-icon>
      Set cover photo
    </v-btn>

    <v-text-field v-model="title" placeholder="Title" label="Title" class="my-5" hide-details solo flat outlined />

    <client-only>
      <quill-editor
        ref="editor"
        v-model="editedContent"
        :options="editorOption"
        class="editor--border relative"
        @change="debounceTextChange"
      />
    </client-only>

    <v-btn
      @click="newPost"
      :loadavg="loading"
      class="text-capitalize mt-5"
      color="deep-purple accent-4"
      block
      dark
      depressed
    >
      Save post
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      top
      right
      color="white"
      dark
    >
      <span class="grey--text text-darken-4">{{ text }}</span>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="deep=purple accent-4"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import './quill.css'
import './bubble.css'
import { debounce } from 'vue-debounce'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { db } from '../../plugins/firebase'
import uuid from 'uuid-random'

export default {
  data: () => ({
    showImageButton: true,
    editedContent: '',
    uploadProgress: '',
    text: '',
    title: '',
    snackbar: '',
    downloadURL: '',
    image: null,
    loading: false,
    editorOption: {
      theme: 'bubble',
      modules: {
        toolbar: {
          container: [
            ['bold', 'italic', 'underline', 'strike', 'code'],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link'],
          ]
        }
      }
    }
  }),

  mounted () {
    this.$nextTick(() => {
      const toolTip = document.querySelector('.ql-tooltip')

      setInterval(() => {
        if (toolTip) {
          toolTip.style.left = '0'
          toolTip.style.maxWidth = '90%'
        }
      }, 1000)
    })
  },

  methods: {
    debounceTextChange: debounce(function () {
      this.$emit('text-change', this.editedContent)
    }, 3000),

    clickInput () {
      let input = document.querySelector('.fileInput')
      input.click()
    },

    loadFile (e) {
      var output = document.getElementById('output')

      const image = e.target?.files[0]

      if (!image) return

      output.src = URL.createObjectURL(image)

      this.image = image
    },

    async newPost () {
      if (!this.image) return
      if (this.editedContent == '') return
      if (this.title == '') return

      this.loading = true

      const storage = getStorage()

      let link = `blog/${uuid()}/${this.image.name}`

      const uploadTask = uploadBytesResumable(ref(storage, link), this.image)

      uploadTask.on('state_changed',
        snapshot => {},
        error => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async downloadURL => {
              await addDoc(collection(db, 'blog'), {
                cover: downloadURL,
                post: JSON.stringify(this.editedContent),
                title: this.title
              })
              this.loading = false
              this.snackbar = true
              this.text = 'Post saved'

              this.editedContent = ''
              this.title = ''
              this.image = null
            })
        }
      )
    }
  },
}
</script>

<style lang="scss" scoped>
.quill-editor {
  min-height: 200px;
  max-height: 70vh;
  overflow-y: auto;
  .ql-toolbar {
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 10;
  }
  .ql-editor {
    min-height: 300px;
    font-family: Roboto;
    font-size: 1rem;
  }
}
.editor--border {
  border: 1px solid #ccc;
}
</style>