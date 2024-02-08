<template>
    <div>
        <div class="flex justify-between pt-3">
            <Card />
            <Card />
            <Card />

        </div>
    </div>

    <div class="outer-container bg-white shadow-lg rounded-t-xl m-3 mt-6 border border-gray-200">
        <h1 class="text-xl m-4 font-bold mb-4">User List</h1>
        <div class="inner-container">
            <table class="w-full border-collapse text-sm">
                <thead>
                    <tr class="bg-customGray2 text-gray-500">
                        <th class="py-2 px-4 text-left">ID</th>
                        <th class="py-2 px-4 text-left">User</th>
                        <th class="py-2 px-4 text-left">Date Of Birth</th>
                        <th class="py-2 px-4 text-left">Email</th>
                        <th class="py-2 px-4 text-left">Job</th>
                        <th class="py-2 px-4 text-left">Country</th>
                        <th class="py-2 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id" class="shadow-md">
                        <td class="py-2 px-4">{{ user.id }}</td>
                        <td class="py-2 px-4">
                            <div class="flex items-center">
                                <img :src="user.profile_picture" :alt="`${user.first_name} ${user.last_name}`"
                                    class="w-8 h-8 rounded-full mr-2">
                                {{ user.first_name }} {{ user.last_name }}
                            </div>
                        </td>
                        <td class="py-2 px-4">{{ formatDateOfBirth(user.date_of_birth) }}</td>
                        <td class="py-2 px-4">{{ user.email }}</td>
                        <td class="py-2 px-4">{{ user.job }}</td>
                        <td class="py-2 px-4">{{ user.country }}</td>
                        <td class="py-2 px-4">
                            <button @click="selectUser(user)"
                                class="shadow border px-2 py-1 rounded mr-2 hover:bg-blue-100">Select</button>
                            <button @click="viewDetail(user)" class="shadow border px-2 py-1 rounded hover:bg-blue-100">View
                                Detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import formatDateOfBirth from '../helper/formatDate.js'
import Card from '../components/Card.vue'
export default {
    name: 'Dashboard',
    data() {
        return {
            users: [],
            loading: true
        };
    },
    mounted() {
        this.fetchUserData();
    },
    methods: {
        async fetchUserData() {
            try {
                const response = await axios.get('https://api.slingacademy.com/v1/sample-data/users');
                this.users = response.data.users;
                this.loading = false;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
        formatDateOfBirth
    },
    components: {
        Card
    }
}
</script>
  