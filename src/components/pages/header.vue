<script setup>

</script>

<template>
    <header class="py-4 md:px-10 sm:px-4 flex items-center justify-between sticky top-0 bg-stone-200">
        <h1 class="font-bold text-2xl text-emerald-950">Dashboard</h1>
        <div class="input-container w-90 flex justify-between gap-5 h-9">
           <div class="ipt">
            <input type="text" placeholder="Search rooms..." class="search-room">
            <i class="fa-solid fa-magnifying-glass"></i>
           </div>

           <div class="profile-container">

           </div>
        </div>
    </header>
</template>

<style scoped>

.ipt{
    width: 90%;
    display: flex;
    position: relative;
    align-items: center;
}

.ipt i{
    position: absolute;
    right: 10px;
    color: oklch(26.2% 0.051 172.552);
    cursor: pointer;
}
.search-room{
    border: 2px solid oklch(26.2% 0.051 172.552);
    border-radius: 10px;
    font-size: 12px;
    padding: 6px 12px;
    width: 100%;
    height: 100%;
}

.profile-container{
    height: 95%;
    aspect-ratio: 1;
    border-radius: 50rem;
    border: 2px solid black;
}
</style>