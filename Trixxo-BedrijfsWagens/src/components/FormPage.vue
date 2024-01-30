<template>
    <div>
      <header>
        <router-link style="text-decoration: none" to="/">
          <p><i class="fa-solid fa-chevron-left"></i>Terug</p>
        </router-link>
      </header>
      <main id="inleveren">
        <h1>Inleveringsformulier</h1>
        <form @submit.prevent>
          <ul id="inleveren__form__basicInfo">
            <li>
              <label for="werknemer">Werknemer:</label>
              <input id="werknemer" type="text" v-model="employerName" />
            </li>
            <li>
              <label for="nummerplaat">Nummerplaat:</label>
              <input id="nummerplaat" type="text" v-model="carLP" />
            </li>
            <li>
              <label for="model">Merk en model:</label>
              <input id="model" type="text" v-model="carBrand" />
            </li>
            <li>
              <label for="kilometerstand">Kilometerstand:</label>
              <input id="kilometerstand" type="text" v-model="mileage" />
            </li>
            <li>
              <label for="datum">Datum:</label>
              <input id="datum" type="date" v-model="currentDate" />
            </li>
          </ul>
          <div class="whitespace"></div>
          <ul id="inleveren__form__netheid">
            <li>
              <label for="netheid__interieur">Netheid Interieur</label>
              <div>
                <label>1</label>
                <label>2</label>
                <label>3</label>
                <label>4</label>
                <label>5</label>
              </div>
              <input
                id="netheid__interieur"
                type="range"
                step="1"
                min="1"
                max="5"
                v-model="cleanlinessIn"
              />
            </li>
            <li>
              <label for="netheid__exterieur">Netheid Exterieur</label>
              <div>
                <label>1</label>
                <label>2</label>
                <label>3</label>
                <label>4</label>
                <label>5</label>
              </div>
              <input
                id="netheid__exterieur"
                type="range"
                step="1"
                min="1"
                max="5"
                v-model="cleanlinessOut"
              />
            </li>
          </ul>
          <div class="whitespace"></div>
          <div id="inleveren__form__schade">
            <h2>Schade</h2>
            <CarSidesContainer />
            <p @click="changePage('damage')"><i class="fa-solid fa-plus"></i>Nieuwe schade toevoegen</p>
            <hr />
            <ul id="schade__lijst">
              <li class="schade__li">
                <div class="schade">1</div>
                Kleine kras<i class="fa-solid fa-file-circle-plus"></i>
              </li>
            </ul>
          </div>
          <div class="whitespace"></div>
          <div id="opmerkingen">
            <label for="extraOpmInterieur"><h2>Bijzondere Opmerkingen Interieur</h2></label>
            <textarea
              name="extraOpmInterieur"
              cha
              id="extraOpmInterieur"
              cols="30"
              rows="7"
            ></textarea>

            <label for="extraOpmExterieur">
              <h2>Bijzondere Opmerkingen Exterieur</h2>
            </label>
            <textarea name="extraOpmExterieur" id="extraOpmExterieur" cols="30" rows="7"></textarea>
          </div>
          <div class="whitespace"></div>
          <div id="checklist">
            <h2>Aanwezige benodigdheden</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="sleutels"
                  name="benodigdheden__list"
                  v-model="sleutels"
                />
                <label for="sleutels">Sleutels</label>
                <div id="sleutels__count__container" v-if="sleutels">
                  <div class="sleutels__button" id="sleutels__minus" @click="removeSleutel">
                    <i class="fa-solid fa-minus"></i>
                  </div>
                  <div id="sleutels__count">{{ sleutelsCount }}</div>
                  <div class="sleutels__button" id="sleutels__plus" @click="addSleutel">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </li>
              <li>
                <input type="checkbox" id="tankkaart" name="benodigdheden__list" />
                <label for="tankkaart">Tankkaart</label>
              </li>
              <li>
                <input type="checkbox" id="inschrijvingsbewijs" name="benodigdheden__list" />
                <label for="inschrijvingsbewijs">Inschrijvingsbewijs</label>
              </li>
              <li>
                <input type="checkbox" id="gelijksvormigheidsattest" name="benodigdheden__list" />
                <label for="gelijksvormigheidsattest">Gelijksvormigheidsattest</label>
              </li>
              <li>
                <input type="checkbox" id="verzekeringsbewijs" name="benodigdheden__list" />
                <label for="verzekeringsbewijs">Verzekeringsbewijs</label>
              </li>
              <li>
                <input type="checkbox" id="aanrijdingsformulier" name="benodigdheden__list" />
                <label for="aanrijdingsformulier">Aanrijdingsformulier</label>
              </li>
              <li>
                <input type="checkbox" id="onderhoudsboekje" name="benodigdheden__list" />
                <label for="onderhoudsboekje">Onderhoudsboekje</label>
              </li>
              <li>
                <input type="checkbox" id="handleiding" name="benodigdheden__list" />
                <label for="handleiding">Handleiding</label>
              </li>
              <li>
                <input type="checkbox" id="parkeerschijf" name="benodigdheden__list" />
                <label for="parkeerschijf">Parkeerschijf</label>
              </li>
              <li>
                <input type="checkbox" id="EHBOset" name="benodigdheden__list" />
                <label for="EHBOset">EHBO-set</label>
              </li>
              <li>
                <input type="checkbox" id="brandblusser" name="benodigdheden__list" />
                <label for="brandblusser">Brandblusser</label>
              </li>
              <li>
                <input type="checkbox" id="fluovest" name="benodigdheden__list" />
                <label for="fluovest">Fluovest</label>
              </li>
              <li>
                <input type="checkbox" id="reservewiel" name="benodigdheden__list" />
                <label for="reservewiel">Reservewiel</label>
              </li>
              <li>
                <input type="checkbox" id="banden_herstel_kit" name="benodigdheden__list" />
                <label for="banden_herstel_kit">Banden herstel kit</label>
              </li>
              <li>
                <input type="checkbox" id="vloermatten_voor" name="benodigdheden__list" />
                <label for="vloermatten_voor">Vloermatten voor</label>
              </li>
              <li>
                <input type="checkbox" id="vloermatten_achter" name="benodigdheden__list" />
                <label for="vloermatten_achter">Vloermatten achter</label>
              </li>
              <li>
                <input type="checkbox" id="hoedenplank" name="benodigdheden__list" />
                <label for="hoedenplank">Hoedenplank</label>
              </li>
            </ul>
          </div>
          <div class="whitespace"></div>
          <div id="extraOpmerkingen">
            <label for="extraOpm"><h2>Bijkomende Opmerkingen</h2></label>
            <textarea name="extraOpm" id="extraOpm" cols="30" rows="7"></textarea>
          </div>
          <div class="whitespace"></div>
          <div class="whitespace"></div>
          <div id="signatures">
            <div class="signature">
              <h2>Handtekening Werkgever</h2>
              <canvas ref="employerSPCanvas"></canvas>
              <button type="button" @click="undoEmployerSP">
                <i class="fa-solid fa-arrow-rotate-left"></i>
              </button>
              <button type="button" @click="clearEmployerSP">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>

            <div class="signature">
              <h2>Handtekening Gebruiker</h2>
              <canvas ref="userSPCanvas"></canvas>
              <button type="button" @click="undoUserSP">
                <i class="fa-solid fa-arrow-rotate-left"></i>
              </button>
              <button type="button" @click="clearUserSP">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>

          <div class="whitespace"></div>
          
          <router-link to="/">
            <button class="primaryButton" type="submit">Inleveren</button>
          </router-link>
        </form>
      </main>
    </div>
</template>

<script>
import SignaturePad from 'signature_pad';
import CarSidesContainer from './CarSidesContainer.vue';

export default {
  components: {
    CarSidesContainer
  },
  data() {
    return {
      employerName: 'Jan Janssens',
      carLP: '2-ABC-001',
      carBrand: 'SEAT IBIZA',
      mileage: 73297,
      currentDate: null,
      cleanlinessIn: 3,
      cleanlinessOut: 3,

      sleutels: false,
      sleutelsCount: 2,

      employerSignaturePad: null,
      userSignaturePad: null
    }
  },
  methods: {
    changePage(page) {
        this.$emit('change-page', page);
    },
    undoEmployerSP() {
      let data = this.employerSignaturePad.toData()
      if (data) {
        data.pop()
        this.employerSignaturePad.fromData(data)
      }
    },
    clearEmployerSP() {
      this.employerSignaturePad.clear()
    },
    undoUserSP() {
      let data = this.userSignaturePad.toData()
      if (data) {
        data.pop()
        this.userSignaturePad.fromData(data)
      }
    },
    clearUserSP() {
      this.userSignaturePad.clear()
    },
    removeSleutel() {
      if (this.sleutelsCount > 1) {
        this.sleutelsCount--
      }
    },
    addSleutel() {
      this.sleutelsCount++
    }
  },
  mounted() {
    this.employerSignaturePad = new SignaturePad(this.$refs.employerSPCanvas)
    this.userSignaturePad = new SignaturePad(this.$refs.userSPCanvas)

    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const day = currentDate.getDate().toString().padStart(2, '0')
    this.currentDate = `${year}-${month}-${day}`
  }
}
</script>