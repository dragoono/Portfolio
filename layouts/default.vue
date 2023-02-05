<template>
  <v-app id="bg" dark>
    <v-app-bar
      app
      fixed
      color="light-blue darken-4"
      dark
      collapse-on-scroll
      src="/bar-background.jpg"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, #01579b, rgba(25,32,72,.7)"
        />
      </template>
      <v-app-bar-nav-icon icon disabled>
        <v-icon>mdi-code-tags-check</v-icon>
        <span>NG</span>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Niklas Grieger - Developement</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs color="light-blue lighten-4" grow show-arrows>
          <v-tab to="/">
            <v-icon left> mdi-information </v-icon>
            About
          </v-tab>
          <v-tab to="/projects">
            <v-icon left> mdi-code-tags </v-icon>
            Projects
          </v-tab>
          <v-tab to="/timeline">
            <v-icon left> mdi-timeline-text </v-icon>
            Career
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation
      hide-on-scroll
      horizontal
      background-color="light-blue darken-4"
      color="light-blue lighten-2"
    >
      <v-btn href="https://github.com/devonik" target="_blank" text>
        <span>Github</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn
        text
        href="https://www.xing.com/profile/Niklas_Grieger2/"
        target="_blank"
      >
        <span>Xing</span>
        <v-icon>mdi-xing</v-icon>
      </v-btn>

      <v-btn
        text
        href="https://www.linkedin.com/in/niklas-grieger-b98086152"
        target="_blank"
      >
        <span>LinkedIn</span>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn text href="mailto:niklas.grieger@devnik.dev" target="_blank">
        <span>Email</span>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<style>
@font-face {
  font-family: "JetBrainsMono";
  src: url("/JetBrainsMono/web/eot/JetBrainsMono-Medium.eot");
  src: url("/JetBrainsMono/web/woff/JetBrainsMono-Medium.woff") format("woff");
}

.v-application {
  font-family: "JetBrainsMono", serif;
}
#bg {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    225deg,
    rgba(129, 212, 250, 1) 0%,
    rgba(129, 212, 250, 1) 0%,
    rgba(1, 87, 155, 1) 93%
  );
}
</style>
<script>
export default {};
</script>
