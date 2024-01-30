<template>
  <div>
    <header>
      <img src="../assets/LogoTrixxo.png" alt="Logo Trixxo" />
    </header>
    <main id="home">
      <img id="carIcon" src="../assets/carIcon.png" alt="Car" />
      <div id="idInput">
        <label for="identification">Naam werknemer:</label>
        <input id="identification" type="email"  autocomplete="off" placeholder="Naam + Voornaam" />
      </div>
      <button class="primaryButton" id="Button__Inleveren">
        <router-link to="/inleveren">Start inleveren</router-link>
      </button>
    </main>
  </div>
</template>

<script>
export default {}
</script>