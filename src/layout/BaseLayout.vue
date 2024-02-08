<script>
import { RouterView } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
    data() {
        return {}
    },
    components: {
        RouterView,
        Navbar,
        Sidebar
    }
}
</script>

<template>
    <div class="flex">
        <!-- Sidebar -->
        <div class="flex shadow-lg">
            <Sidebar></Sidebar>
        </div>
        <!-- Konten -->
        <div class="flex flex-col flex-1">
            <!-- Navbar -->
            <div class="h-16 items-center justify-between shadow-lg border-b-2" >
                <Navbar></Navbar>
            </div>
            <!-- Konten lainnya -->
            <div class="flex-1 overflow-y-auto shadow bg-customGray p-3">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
