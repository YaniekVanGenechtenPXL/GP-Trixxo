<template>
  <div>
    <FormPage v-if="visiblePage === 'form'" @change-page="updatePage" />
    <DamagePage v-else-if="visiblePage === 'damage'" @change-page="updatePage" />
    <DamageFrontSide v-else-if="visiblePage === 'DamageFrontSide'" @change-page="updatePage" />
  </div>
</template>

<script>
import FormPage from '@/components/FormPage.vue'
import DamagePage from '@/components/DamagePage.vue'
import DamageFrontSide from '@/components/DamageFrontSide.vue';

export default {
  components: {
    FormPage,
    DamagePage,
    DamageFrontSide
},
  data() {
    return {
      visiblePage: 'form'
    };
  },
  methods: {
    updatePage(newPage) {
      this.visiblePage = newPage;
    }
  }
};
</script>