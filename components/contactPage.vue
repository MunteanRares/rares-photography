<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { scrollToAbtMe, scrollToHeader } from "../utils/scrollTo";
import {
    faArrowUpRightFromSquare,
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import ExternalLink from "~/assets/icons/externalLink.vue";
import ArrowUp from "~/assets/icons/arrowUp.vue";

library.add(faArrowUpRightFromSquare, faArrowUp);

onMounted(() => {
    const children = document.querySelectorAll(".basicStaggerOnScroll");
    const buttons = document.querySelectorAll(".hoverLowOpacity");
    basicStaggerOnScroll(children);
    hoverOverLowOpacityAnim(buttons);
});
</script>

<template>
    <section class="section-contact basicStaggerOnScroll">
        <p class="section-title">GET IN TOUCH</p>

        <div class="all-contact">
            <div class="contact">
                <p class="title">CONTACT</p>
                <ul class="list">
                    <li class="list-item">
                        <a class="hoverLowOpacity">Instagram</a>
                    </li>
                    <li class="list-item">
                        <a class="hoverLowOpacity">LinkedIn</a>
                    </li>
                    <li class="list-item">
                        <a class="hoverLowOpacity" href="">Github</a>
                    </li>
                    <li class="list-item">Email: rares_famuntean@yahoo.com</li>
                </ul>
            </div>

            <div class="pages basicStaggerOnScroll">
                <p class="title">PAGES</p>
                <ul class="list">
                    <li class="list-item">
                        <a
                            class="hoverLowOpacity"
                            @click.prevent="scrollToAbtMe"
                            href=""
                            >About</a
                        >
                    </li>
                    <li class="list-item">
                        <a
                            class="hoverLowOpacity"
                            href=""
                            @click.prevent="goToWorkPage"
                            >Work</a
                        >
                    </li>
                    <li class="list-item">
                        <a class="hoverLowOpacity" href="">Shop</a>
                    </li>
                    <li class="list-item">
                        <a class="hoverLowOpacity" href="">What I Use</a>
                    </li>
                </ul>
            </div>

            <div class="links basicStaggerOnScroll">
                <p class="title">QUICK LINKS</p>
                <ul class="list">
                    <li class="list-item">
                        <div class="link-div">
                            <a
                                class="hoverLowOpacity"
                                href=""
                                @click.prevent="goToWorkInProgress"
                                >Support Me</a
                            >
                            <ExternalLink />
                        </div>
                    </li>

                    <li class="list-item">
                        <div class="link-div">
                            <a
                                class="hoverLowOpacity"
                                href=""
                                @click.prevent="goToWorkInProgress"
                                >Developer Portfolio</a
                            >
                            <ExternalLink />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div
            @click.prevent="scrollToHeader"
            class="go-top basicStaggerOnScroll"
        >
            <a>TO TOP</a>
            <ArrowUp />
        </div>
    </section>
    <Footer />
</template>

<style scoped lang="scss">
@use "/assets/styles/contactPage.scss";
</style>
