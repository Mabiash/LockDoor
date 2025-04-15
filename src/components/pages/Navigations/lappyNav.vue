<script setup>

</script>

<template>
    <nav class="h-screen w-40 bg-emerald-950 md:block hidden p-0">
        <div class="w-full h-auto text-center mt-3 px-2">
            <h1 class="text-white py-3 font-bold border-b-2 border-amber-300">Logo</h1>
        </div>
        <ul class="w-full h-auto mt-10 text-white">
            <li
                class="py-4 relative cursor-pointer px-3 active">
                <p>Dashboard</p>
                <div class="na-r-t"></div>
                <div class="na-r-b"></div>
            </li>
            <li
                class="py-4 relative cursor-pointer hover:text-emerald-950 hover:font-bold hover:bg-stone-200 px-3 transition-all">
                <p>Rooms</p>
                <div class="na-r-t"></div>
                <div class="na-r-b"></div>
            </li>
            <li
                class="py-4 relative cursor-pointer hover:text-emerald-950 hover:font-bold hover:bg-stone-200 px-3 transition-all ">
                <p>Logs</p>
                <div class="na-r-t"></div>
                <div class="na-r-b"></div>
            </li>
            <li></li>
        </ul>
    </nav>
</template>
  

  
<style scoped>
li:hover .na-r-t,
li:hover .na-r-b {
    height: 1rem;
    width: 1rem;
    right: 0rem;
    position: absolute;
    z-index: 100;
    transition: all 250ms;
}

li.active .na-r-t,
li.active .na-r-b {
    height: 1rem;
    width: 1rem;
    right: 0rem;
    position: absolute;
    z-index: 100;
    transition: all 200ms;
}

li:hover .na-r-t {
    border-radius: 0 0 15px 0;
    top: -1rem;
    box-shadow: 3.3px 5px 0px #e7e5e4;
}

li:hover .na-r-b {
    bottom: -1rem;
    border-radius: 0 15px 0 0;
    box-shadow: 3.3px -5px 0px #e7e5e4;
}

li.active .na-r-t {
    border-radius: 0 0 15px 0;
    top: -1rem;
    box-shadow: 3.3px 5px 0px #e7e5e4;
}

li.active .na-r-b {
    bottom: -1rem;
    border-radius: 0 15px 0 0;
    box-shadow: 3.3px -5px 0px #e7e5e4;
}

li.active {
    background: #e7e5e4;
    color: oklch(26.2% 0.051 172.552);
    font-weight: bold;
}
</style>
  