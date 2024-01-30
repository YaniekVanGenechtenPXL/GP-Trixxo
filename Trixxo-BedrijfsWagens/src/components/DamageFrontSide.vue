<template>
    <div>
        <header>
          <p @click="changePage('damage')" style="cursor: pointer;"><i class="fa-solid fa-chevron-left"></i>Terug</p>
        </header>
        <main id="addDamage">
            <h1>Schade aanduiden</h1>
            <p>Voorzijde - Deuk</p>

            <div class="whitespace"></div>

            <FrontSide @click="handleClick" style="position: relative;" />

            <div class="whitespace"></div>

            <p class="desc">Duid de schade aan.</p>

            <div class="whitespace"></div>


            <button v-if="buttonsVisible" class="secondaryButton">Foto toevoegen</button>
            <button v-if="buttonsVisible" class="primaryButton" @click="changePage('damage')">Schade opslaan</button>
        </main>
    </div>
</template>

<script>
import FrontSide from './FrontSide.vue';

export default {
    data() {
        return {
            buttonsVisible: false
        }
    },
    components: {
        FrontSide
    },
    methods: {
        changePage(page) {
            this.$emit('change-page', page)
        },
        handleClick(event) {
            const element = event.currentTarget;
            const rect = element.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            this.buttonsVisible = true;

            console.log(`Geklikt op X: ${offsetX}, Y: ${offsetY}`);
        }
    }
}
</script>