<template>
    <div>
        <div class="flex justify-between">
            <!-- Card 1 -->
            <div class="bg-white shadow-lg rounded-lg w-1/3 border border-gray-200 ">
                <div class="flex flex-col h-full">
                    <div class="h-2/3 rounded-t-lg">
                        <p class="text-lg font-semibold text-gray-600 p-4">Pending</p>
                    </div>
                    <div class="flex justify-between items-center bg-customGray2 rounded-b-lg h-1/3">
                        <div class="p-4">
                            <p class="text-xs text-gray-400">Last Month</p>
                        </div>
                        <div class="p-4">
                            <p class="text-xs text-gray-600">View More</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-1/3 ml-4 border border-gray-200">
                <div class="mb-4">
                    <p class="text-lg font-semibold text-green-500">Paid</p>
                    <hr class="my-2 border-t border-gray-300">
                    <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <p class="text-xs text-gray-500">Last Month</p>
                    <p class="text-xs text-green-500">View More</p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white shadow-lg rounded-lg p-6 w-1/3 ml-4 border border-gray-200">
                <div class="mb-4">
                    <p class="text-lg font-semibold text-red-500">Rejected</p>
                    <hr class="my-2 border-t border-gray-300">
                    <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <p class="text-xs text-gray-500">Last Month</p>
                    <p class="text-xs text-red-500">View More</p>
                </div>
            </div>
        </div>
    </div>

    <div class="outer-container bg-white shadow-lg rounded-lg mt-4 border border-gray-200">
        <h1 class="text-3xl font-bold mb-4">User List</h1>
        <div class="inner-container">
            <table class="w-full border-collapse text-sm">
                <thead>
                    <tr class="bg-gray-100">
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
    }
}
</script>
  