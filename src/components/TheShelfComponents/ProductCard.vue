<template>
         <Card>
    <template #header>
        <img alt="user header" src="https://primefaces.org/primevue/showcase/demo/images/usercard.png">
    </template>
    <template #title>
        Advanced Card
    </template>
    <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
    </template>
    </Card>
</template>

<script>
import Button from 'primevue/button';
import Card from 'primevue/card';
export default {
    components:{
        Button,
        Card
    }
}
</script>

<style scoped>

</style>