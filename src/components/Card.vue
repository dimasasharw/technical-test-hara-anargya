<template>
    <div class="bg-white shadow-lg rounded-xl w-1/3 ml-3 mr-3 border border-gray-200 ">
        <div class="flex flex-col h-full">
            <div class="flex justify-between h-2/3 rounded-t-lg">
                <div class="flex">
                    <p class="text-lg font-semibold text-gray-600 p-4">Pending</p>
                </div>
                <div class="flex m-5 30px bg-customGray2 rounded-sm h-34 w-34">
                    <Icon icon="solar:square-transfer-horizontal-broken" width="28" height="28" style="color: #3c3c3c" />
                </div>
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
</template>

<script>
export default {
    data() {
        return {

        };
    },
    component: {
    }
}
</script>