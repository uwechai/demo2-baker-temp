<template>
  <Menu :model="items" class="navbar" />

</template>

<script>
import Menu from 'primevue/menu';

export default {
    components:{
        Menu
    },
  data() {
    return {
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {
            this.$toast.add({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          command: () => {
            this.$toast.add({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
        {
          label: "Vue Website",
          icon: "pi pi-external-link",
          url: "https://vuejs.org/",
        },
        {
          label: "Router",
          icon: "pi pi-upload",
          to: "/fileupload",
        },
      ],
    };
  },
};
</script>

<style scoped>

.navbar {
  width: 100%;
  border: 2px 0px;
}

.p-menu{
  background: #adadad;
}

</style>