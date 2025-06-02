<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faArrowUpRightFromSquare,
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUpRightFromSquare, faArrowUp);

onMounted(() => {
    const children = document.querySelectorAll(".basicStaggerOnScroll");
    const buttons = document.querySelectorAll(".hoverLowOpacity");
    basicStaggerOnScroll(children);
    hoverOverLowOpacityAnim(buttons);
});
</script>

<template>
    <section class="section-contact">
        <p class="section-title basicStaggerOnScroll">GET IN TOUCH</p>

        <div class="all-contact">
            <div class="contact">
                <p class="title basicStaggerOnScroll">CONTACT</p>
                <ul class="list">
                    <li class="list-item basicStaggerOnScroll">
                        <a class="hoverLowOpacity href="">Instagram</a>
                    </li>
                    <li class="list-item basicStaggerOnScroll">
                        <a class="hoverLowOpacity href="">LinkedIn</a>
                    </li>
                    <li class="list-item basicStaggerOnScroll ">
                        <a class="hoverLowOpacity" href="">Github</a>
                    </li>
                    <li class="list-item basicStaggerOnScroll">
                        Email: rares_famuntean@yahoo.com
                    </li>
                </ul>
            </div>

            <div class="pages">
                <p class="title basicStaggerOnScroll">PAGES</p>
                <ul class="list">
                    <li class="list-item basicStaggerOnScroll hoverLowOpacity">
                        <a href="">About</a>
                    </li>
                    <li class="list-item basicStaggerOnScroll hoverLowOpacity">
                        <a href="">Work</a>
                    </li>
                    <li class="list-item basicStaggerOnScroll hoverLowOpacity">
                        <a href="">Shop</a>
                    </li>
                    <li class="list-item basicStaggerOnScroll hoverLowOpacity">
                        <a href="">What I Use</a>
                    </li>
                </ul>
            </div>

            <div class="links">
                <p class="title basicStaggerOnScroll">QUICK LINKS</p>
                <ul class="list">
                    <li class="list-item">
                        <div
                            class="link-div basicStaggerOnScroll hoverLowOpacity"
                        >
                            <a href="">Support Me</a>
                            <FontAwesomeIcon
                                class="link-icon"
                                icon="fa-solid fa-arrow-up-right-from-square"
                            />
                        </div>
                    </li>

                    <li class="list-item">
                        <div
                            class="link-div basicStaggerOnScroll hoverLowOpacity"
                        >
                            <a href="">Developer Portfolio</a>
                            <FontAwesomeIcon
                                class="link-icon"
                                icon="fa-solid fa-arrow-up-right-from-square"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="go-top basicStaggerOnScroll">
            <p>TO TOP</p>
            <FontAwesomeIcon icon="arrow-up" class="icon" />
        </div>
    </section>
    <Footer />
</template>

<style scoped lang="scss">
@use "/assets/styles/contactPage.scss";
</style>
