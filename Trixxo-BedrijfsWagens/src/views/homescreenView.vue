<template>
  <div>
    <header>
      <img src="../assets/LogoTrixxo.png" alt="Logo Trixxo" />
    </header>
    <main id="home">
      <img id="carIcon" src="../assets/carIcon.png" alt="Car" />
      <div id="idInput">
        <label for="identification">E-mailadres:</label>
        <input id="identification" type="email" />
      </div>
      <button class="primaryButton" id="Button__Inleveren">
        <router-link to="/inleveren">Inleveren</router-link>
      </button>
    </main>
  </div>
</template>

<script>
export default {}
</script>