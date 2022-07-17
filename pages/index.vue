<template>
    <div>
        <p></p>
        <p>{{devices[1]}}</p>
    </div>
</template>

<script setup>


const devices = ref("")
const adbs = await useGetADB();

devices.value = adbs.replace(/(\n\r)+/g, "\\n\\r").replace('List of devices attached','').split('device');


onBeforeMount(() => {
    
});

</script>

<style lang="scss" scoped>
</style>