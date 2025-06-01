<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faArrowUpRightFromSquare,
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUpRightFromSquare, faArrowUp);
</script>

<template>
    <section class="section-contact">
        <p class="section-title">GET IN TOUCH</p>

        <div class="all-contact">
            <div class="contact">
                <p class="title">CONTACT</p>
                <ul class="list">
                    <li class="list-item">Instagram</li>
                    <li class="list-item">LinkedIn</li>
                    <li class="list-item">GitHub</li>
                    <li class="list-item">Email: rares_famuntean@yahoo.com</li>
                </ul>
            </div>

            <div class="pages">
                <p class="title">PAGES</p>
                <ul class="list">
                    <li class="list-item">About</li>
                    <li class="list-item">Work</li>
                    <li class="list-item">Shop</li>
                    <li class="list-item">What I Use</li>
                </ul>
            </div>

            <div class="links">
                <p class="title">QUICK LINKS</p>
                <ul class="list">
                    <li class="list-item">
                        <div class="link-div">
                            <p>Support Me</p>
                            <FontAwesomeIcon
                                class="link-icon"
                                icon="fa-solid fa-arrow-up-right-from-square"
                            />
                        </div>
                    </li>

                    <li class="list-item">
                        <div class="link-div">
                            <p>Developer Portfolio</p>
                            <FontAwesomeIcon
                                class="link-icon"
                                icon="fa-solid fa-arrow-up-right-from-square"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="go-top">
            <p>TO TOP</p>
            <FontAwesomeIcon icon="arrow-up" class="icon" />
        </div>
    </section>
    <Footer />
</template>

<style scoped lang="scss">
@use "/assets/styles/contactPage.scss";
</style>
