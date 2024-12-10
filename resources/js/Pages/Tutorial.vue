<script setup>
import { Link } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import Footer from '@/Components/Footer.vue';
</script>

<template>
    <div class="h-screen w-full flex flex-col">
        <Header />

        <div class="margin-top"></div>
        <h1 class="main-heading">LANDING PAGE</h1>
        <main class="content-box flex-grow flex justify-center items-center">
            <div>
            <iframe
                width="890"
                height="572"
                src="https://www.youtube.com/embed/QGMCQRZPhOs"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            </div>
        </main>

        <h1 class="main-heading">DOCTOR PAGE</h1>
        <main class="content-box flex-grow flex justify-center items-center">
            <div>
            <iframe
                width="890"
                height="572"
                src="https://www.youtube.com/embed/exkLffk4kUY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            </div>
        </main>

        <h1 class="main-heading">PATIENT PAGE</h1>
        <main class="content-box flex-grow flex justify-center items-center">
            <div>
            <iframe
                width="890"
                height="572"
                src="https://www.youtube.com/embed/c3c7L-PfI_g"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            </div>
        </main>

        <h1 class="main-heading">USER MANUAL</h1>
        <main class="content-box flex-grow flex justify-center items-center">
        <iframe
            src="/[USER MANUAL] Cancer Surveillance System.pdf"
            type="application/pdf"
            width="60%"
            height="1050px"
            class="pdf-viewer"
        >
            Your browser does not support iframes.
            <a href="/functionalities.pdf" target="_blank">Download the PDF</a>
        </iframe>
        </main>

        <Footer />
    </div>
</template>

<style scoped>
    @import '../../css/Details.css';

    .pdf-viewer {
        border: none;
    }

    .main-heading {
        font-weight: 900;
        font-size: 35px;
        color: #a02123;
        text-align: center;
    }

    .margin-top {
        margin-top: 50px;
    }
</style>
