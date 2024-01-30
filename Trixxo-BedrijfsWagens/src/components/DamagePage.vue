<template>
    <div>
      <header></header>
      <main id="schade">
        <h1>Schade</h1>
        <ul>
          <li>
            <div>
              <h2>Voorzijde</h2>
              <i @click="changePage('DamageFrontSide')" class="fa-solid fa-plus"></i>
            </div>
          </li>
          <li>
            <div>
              <h2>Linkerzijde</h2>
              <i class="fa-solid fa-plus"></i>
            </div>
          </li>
          <li>
            <div>
              <h2>Rechterzijde</h2>
              <i class="fa-solid fa-plus"></i>
            </div>
            <ul>
              <li>
                <div class="schade">1</div>
                <p>Kleine kras</p>
                <i class="fa-solid fa-file-circle-plus"></i>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h2>Achterzijde</h2>
              <i class="fa-solid fa-plus"></i>
            </div>
          </li>
          <li>
            <div>
              <h2>Bovenzijde</h2>
              <i class="fa-solid fa-plus"></i>
            </div>
          </li>
        </ul>

        <div class="whitespace"></div>

        <CarSidesContainer />

        <div class="whitespace"></div>

        <button class="primaryButton" @click="changePage('form')">Opslaan en Terug</button>
      </main>
    </div>
</template>

<script>
import CarSidesContainer from './CarSidesContainer.vue';

export default {
    components: {
        CarSidesContainer
    },
    methods: {
        changePage(page) {
            this.$emit('change-page', page)
        }
    }
}
</script>