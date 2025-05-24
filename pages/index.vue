<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight);
</script>

<template>
    <div class="section-header">
        <div class="background-container">
            <div class="overlay-blur"></div>
            <div class="overlay-rectangle"></div>

            <div class="header-content">
                <div class="top-text">
                    <p class="hour-text">RM. &nbsp&nbsp12:17PM</p>
                    <div class="social-text">
                        <p>LINKEDIN</p>
                        <p>INSTAGRAM</p>
                        <p>GITHUB</p>
                    </div>
                </div>

                <div class="header-title">
                    <div class="title-name">
                        <p class="first-name">RARES</p>
                        <div class="second-name-div">
                            <p>MUNTEAN</p>
                            <p class="skills">
                                DEVELOPER • DESIGNER • PHOTOGRAPHER • EDITOR •
                                BUILDER
                            </p>
                        </div>
                    </div>

                    <div class="menu">
                        <div class="menu-item">
                            <p>SHOP</p>
                            <FontAwesomeIcon icon="arrow-right" size="xs" />
                        </div>

                        <div class="menu-item">
                            <p>WORK</p>
                            <FontAwesomeIcon icon="arrow-right" size="xs" />
                        </div>

                        <div class="menu-item">
                            <p>ABOUT</p>
                            <FontAwesomeIcon icon="arrow-right" size="xs" />
                        </div>

                        <div class="menu-item">
                            <p>WHAT I USE</p>
                            <FontAwesomeIcon icon="arrow-right" size="xs" />
                        </div>

                        <div class="menu-item">
                            <p>CONTACT</p>
                            <FontAwesomeIcon icon="arrow-right" size="xs" />
                        </div>
                    </div>
                </div>

                <div class="bottom-text">
                    <p class="span-text">DESIGN IN MOTION.</p>
                    <div class="copyright-text">
                        <p>COPYRIGHT &copy 2025</p>
                        <p>MUNTEAN RARES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/index.scss";
</style>
