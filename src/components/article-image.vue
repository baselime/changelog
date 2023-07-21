<template>
    <div>
        <div class="image">
            <img :src="src" :alt="alt" class="article-image" @click="handleImageClick" />
            <div>
                {{ title }}
                <span v-if="source">| <a href="source" target="_blank" rel="noopener noreferrer">source</a></span>
            </div>
        </div>
        <div class="image-clicked" v-if="clicked" @click="handleImageClick" >
            <div class="bg-gray-900/[.9] p-64">
                <img :src="src" :alt="alt" class="rounded-xl hover:border-2 hover:border-[#94d32e]"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const clicked = ref(false);
defineProps({
    title: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
})

function handleImageClick() {
    clicked.value = !clicked.value;
}
</script>
<style>
.image {
    margin: 15px auto 30px auto;
    text-align: center;
    color: #a7a9b1;

    img {
        border-radius: 4px;
        margin: 0 auto 5px auto;
    }

    a {
        color: #94d32e;
        border-bottom: 2px solid transparent;
        transition: 0.15s;

    }

    a:hover {
        border-bottom: 2px solid #94d32e;
    }
}

.image-clicked {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>