<script setup>

</script>

<template>
    <section class="dash-content-con md:px-10 sm:px-4">
        <div class="content">

        </div>
        <div class="content">

        </div>
        <div class="content">

        </div>


    </section>
</template>

<style scoped>
.dash-content-con {
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding-bottom: 10px;
    padding-top: 5px;
}

.content {
    background-color: rgba(255, 166, 0, 0.418);
    border-radius: 20px;
    min-height: 15rem;
    min-width: 300px;
    flex: 1;
}

.content:nth-child(2) {
    background-color: rgba(0, 110, 49, 0.308);
}
.content:nth-child(3) {
    min-width: 100%;
    grid-column: span 2;
    grid-row: span 1;
    background-color: rgba(66, 0, 110, 0.247);
}
</style>