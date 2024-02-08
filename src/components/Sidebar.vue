<template>
    <div>
        <aside class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" style="height: 100vh"
            x-show="asideOpen">
            <a href="#"
                class="flex items-center space-x-1 rounded-md px-2 py-3 cursor-pointer">
                <span class="text-3xl"><i class="bx bx-shopping-bag"></i></span>
                <span class="text-3xl font-bold py-2">heylink.</span>
            </a>

            <RouterLink to="/dashboard"
                class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-blue-100 hover:bg-opacity-80 focus:bg-blue-100 focus:bg-opacity-80 active:bg-blue-100 active:bg-opacity-80">
                <span class="text-2xl"><i class="bx bx-heart"></i></span>
                <span>Dashboard</span>
            </RouterLink>

            <RouterLink to="/overview"
                class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-blue-100 hover:bg-opacity-80 focus:bg-blue-100 focus:bg-opacity-80 active:bg-blue-100 active:bg-opacity-80">
                <span class="text-2xl"><i class="bx bx-user"></i></span>
                <span>Overview</span>
            </RouterLink>
        </aside>
    </div>
</template>

<script>
import {RouterLink} from 'vue-router'
export default {

}
</script>