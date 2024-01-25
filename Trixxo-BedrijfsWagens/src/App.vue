<template>
  <div id="screen">
    <RouterView />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    this.getDataFromAPI()
  },
  methods: {
    async getDataFromAPI() {
      const apiUrl =
        'https://91080.rest.afas.online/profitrestservices/connectors/Wagenpark?skip=-1&take=-1'
      const headers = {
        Authorization:
          'AfasToken PHRva2VuPjx2ZXJzaW9uPjE8L3ZlcnNpb24+PGRhdGE+MjI2RDVGQkI5RDQ3NDJFODhFODA1OTY1QkFCMTgzOEJCMkRDMjBEMDQ4MzRFRUFBQjcwNjg1QjY1N0EzRDQxNDwvZGF0YT48L3Rva2VuPg=='
      }

      try {
        const response = await axios.get(apiUrl, { headers })
        const data = response.data
        console.log('API Data:', data)

      } catch (error) {
        console.error('API Error:', error)
      }
    }
  }
}
</script>

<style scoped>
  div#screen {
    width: 390;
    height: 844px;
    overflow: scroll;
    margin: auto;
    background-color: #FFFFFF;
  }
</style>