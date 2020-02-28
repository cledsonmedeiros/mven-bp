<template>
  <div>
    <v-navigation-drawer app dark :mini-variant="estadoMenu" hide-overlay permanent :value="estadoMenu" class="primary">
      <v-list dense nav class="py-1">
        <v-list-item @click="navegarPara(item.rota)" v-for="item in itensMenu" :key="item.rota">
          <v-list-item-icon>
            <v-icon>{{ item.icone }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav class="py-1">
        <v-list-item @click="refresh()">
          <v-list-item-icon>
            <v-icon>mdi-refresh</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Atualizar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dense dark>
      <v-app-bar-nav-icon @click.stop="alterarMenu()"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <span class="font-weight-bold">
          MVEN
          <span class="font-weight-light">BP</span>
        </span>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      itensMenu: [
        { rota: "/", icone: "mdi-home", titulo: "Home" },
      ]
    };
  },
  methods: {
    navegarPara(rota) {
      if (this.$route.path !== rota) {
        this.$router.push(rota);
        if (!this.estadoMenu && this.isMobile()) {
          this.alterarMenu();
        }
      }
    },
    refresh() {
      window.location.reload(true);
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    alterarMenu() {
      this.$store.commit("alternarEstadoMenu");
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  computed: {
    estadoMenu() {
      return this.$store.state.estadoMenu;
    }
  }
};
</script>
