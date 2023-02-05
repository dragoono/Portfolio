<template>
  <v-app id="bg">
    <v-app-bar
      app
      fixed
      color="light-blue darken-4"
      dark
      collapse-on-scroll
      fade-img-on-scroll
    >
      <template v-slot:image>
        <v-img
        src="/bar-background.jpg"
          gradient="to top right, #01579b, rgba(25,32,72,.7)"
        />
      </template>
      <v-app-bar-nav-icon icon disabled>
        <v-icon>mdi-code-tags-check</v-icon>
        <span>NG</span>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Niklas Grieger - Developement</v-toolbar-title>

      <v-tabs color="light-blue lighten-4" grow show-arrows>
          <v-tab to="/">
            <v-icon icon="mdi-information" left>  </v-icon>
            About
          </v-tab>
          <v-tab to="/projects">
            <v-icon icon="mdi-code-tags" left></v-icon>
            Projects
          </v-tab>
          <v-tab to="/timeline">
            <v-icon icon="mdi-timeline-text" left>  </v-icon>
            Career
          </v-tab>
        </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <v-bottom-navigation
      hide-on-scroll
      horizontal
      class="bg-light-blue-darken-4"
    >
      <v-btn href="https://github.com/devonik" target="_blank" text>
        <span>Github</span>
        <v-icon icon="mdi-github"></v-icon>
      </v-btn>

      <v-btn
        text
        href="https://www.xing.com/profile/Niklas_Grieger2/"
        target="_blank"
      >
        <span>Xing</span>
        <v-icon>
          <v-img
            src="/ic-xing.png"
            alt="John"
          ></v-img>
        </v-icon>
      </v-btn>

      <v-btn
        text
        href="https://www.linkedin.com/in/niklas-grieger-b98086152"
        target="_blank"
      >
        <span>LinkedIn</span>
        <v-icon icon="mdi-linkedin"></v-icon>
      </v-btn>

      <v-btn text href="mailto:niklas.grieger@devnik.dev" target="_blank">
        <span>Email</span>
        <v-icon icon="mdi-email"></v-icon>
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
