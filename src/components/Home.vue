<template>
  <div class="msg1">
    <h1>{{ msg1text }}</h1>
    <p><strong>Daily Takings input for 'Meet at 903'</strong></p>
    <br><br>
    <p>Note that this is a personal project being worked on during spare time.
    <br>Small progressive changes are being made every few days.</p>
    <p><u>This uses the following technologies:</u></p>
    <ul>Frontend:
        <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
    </ul>
    <ul>Backend:
      <li>
        <a href="https://nodejs.org/en/" target="_blank">Node.js</a>,
        <a href="https://expressjs.com/" target="_blank">Express.js</a>
      </li>
    </ul>
    <ul>DB:
      <li>
        <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
      </li>
    </ul>
    <ul>Tools:
      <li>
        <a href="https://atom.io/" target="_blank">ATOM (Editor)</a>,
        <a href="https://www.getpostman.com/" target="_blank">Postman (Testing)</a>
      </li>
    </ul>
    <ul>Services Used:
      <li>
        <a href="https://mlab.com/" target="_blank">mLab (DB host)</a>,
        <a href="https://github.com/" target="_blank">Github (Repo & CI)</a>,
        <a href="https://www.heroku.com/" target="_blank">Heroku (CD host)</a>
      </li>
    </ul>
    <p><sup>Created by Edmond Tang (2017)</sup></p>
  </div>
</template>

<script>
export default {
  name: 'msg1',
  data () {
    return {
      msg1text: 'Welcome!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
