<script setup>
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('../components/pages/header.vue'));
const DashboardContent = defineAsyncComponent(() => import('../components/pages/dashboard.vue'));
const LappyNav = defineAsyncComponent(() => import('../components/pages/Navigations/lappyNav.vue'));
</script>

<template>
    <section class="h-screen w-screen flex">
        <LappyNav />
        <div class="dash-container">
            <Header />
            <DashboardContent />



            <div class="curve-t hidden md:block">

            </div>
            <div class="curve-b hidden md:block">

            </div>
        </div>
    </section>
</template>

<style scoped>

.dash-container{
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    border: 5px solid oklch(26.2% 0.051 172.552);
    border-left: none;
    overflow: auto;
    background:  #e7e5e4;

}
.curve-t,
.curve-b {
    position: fixed;
    height: 5rem;
    width: 10rem;
}

.curve-t {
    top: 5px;
    left: 10rem;
    border-radius: 30px 0 0 0;
    box-shadow: -0px -40px 0px oklch(26.2% 0.051 172.552);
}

.curve-b {
    bottom: 5px;
    left: 10rem;
    border-radius: 0 0 0 30px;
    box-shadow: -1px 40px 0px oklch(26.2% 0.051 172.552);
}
</style>
