<template>
    <button
        style="position: absolute; color: red; z-index: 2"
        @click="toCanvas()"
    >
        Hola
    </button>
    <select style="position: absolute; color: red; z-index: 2" v-model="local">
        <option :value="dato" v-for="(dato, d) in datos" :key="d">
            {{ dato }}
        </option>
    </select>
    <select
        style="position: absolute; color: red; z-index: 2; left: 150px"
        v-model="visitante"
    >
        <option :value="dato" v-for="(dato, d) in datos" :key="d">
            {{ dato }}
        </option>
    </select>
    <div
        style="
            position: absolute;
            display: flex;
            flex-direction: column;
            z-index: 2;
            left: 300px;
        "
    >
        <input type="text" placeholder="jornada" v-model="fecha" />
        <input type="text" placeholder="dia texto" v-model="dia" />
        <input type="text" placeholder="dia nro" v-model="diaNro" />
        <input type="text" placeholder="mes" v-model="mes" />
        <input type="text" placeholder="hora" v-model="hora" />
    </div>
    <div id="node">
        <div
            style="
                height: 1080px;
                width: 1920px;
                background: #000;
                position: relative;
                display: flex;
                align-items: center;
            "
        >
            <div
                style="
                    position: absolute;
                    width: fit-content;
                    margin-left: auto;
                    margin-right: auto;
                    top: 0;
                    left: 0;
                    right: 0;
                "
            >
                <img
                    origin="anonymous"
                    style="margin-top: 20px; width: 200px"
                    src="./assets/LPF-condescripcin2fondososcuros.svg"
                    alt=""
                />
            </div>
            <div
                style="
                    margin-top: 35px;
                    position: absolute;
                    font-size: 100px;
                    color: white;
                    width: fit-content;
                    top: 0;
                    right: 50px;
                    z-index: 5;
                "
            >
                FECHA {{ fecha }}
            </div>
            <div
                style="
                    position: absolute;
                    font-size: 600px;
                    letter-spacing: 10px;
                    color: white;
                    width: fit-content;
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                "
            >
                PRÓXIMO PARTIDO
            </div>
            <div
                style="
                    padding: 20px 40px;
                    z-index: 5;
                    position: absolute;
                    background: rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    width: 350px;
                    height: 170px;
                    margin-left: auto;
                    margin-right: auto;
                    bottom: 350px;
                    left: 0;
                    right: 0;
                "
            >
                <div
                    style="
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 350px;
                        height: 170px;
                    "
                >
                    <img
                        :src="'/escudos/144/' + local + '.png'"
                        alt=""
                        srcset=""
                    />

                    <div
                        style="font-weight: 300; color: black; font-size: 60px"
                    >
                        VS.
                    </div>
                    <img
                        :src="'/escudos/144/' + visitante + '.png'"
                        alt=""
                        srcset=""
                    />
                </div>
            </div>
            <div
                style="
                    font-weight: 300;
                    color: white;
                    font-size: 50px;
                    position: absolute;
                    font-size: 72px;
                    color: white;
                    width: fit-content;
                    margin-left: auto;
                    margin-right: auto;
                    bottom: 50px;
                    left: 0;
                    right: 0;
                    letter-spacing: 5px;
                "
            >
                {{ dia }} {{ diaNro }} DE {{ mes }} - {{ hora }} HS.
            </div>

            <img
                style="
                    position: absolute;
                    width: 250px;
                    margin-left: auto;
                    margin-right: auto;
                    bottom: -60px;
                    left: 0;
                    right: 0;
                    z-index: 2;
                "
                src="./assets/cacc_iso_logotipo.svg"
                alt=""
                srcset=""
            />
        </div>
    </div>
</template>

<script>
import domtoimage from "dom-to-image-more";
import { saveAs } from "file-saver";

export default {
    components: {
        domtoimage,
    },
    name: "BaseComponent",
    props: {},
    data() {
        return {
            fecha: "5",
            local: "central",
            visitante: "central",
            dia: null,
            diaNro: null,
            mes: null,
            hora: null,

            datos: [
                "argentinos",
                "arsenal",
                "atletico",
                "banfield",
                "barracas",
                "belgrano",
                "boca",
                "central",
                "colon",
                "defensa",
                "estudiantes",
                "gimnasia",
                "godoy_cruz",
                "huracan",
                "independiente",
                "instituto",
                "lanus",
                "nob",
                "platense",
                "racing",
                "river",
                "rosario_central",
                "san_lorenzo",
                "sarmiento",
                "talleres",
                "tigre",
                "union",
                "velez",
            ],

            docSize: {
                width: null,
                height: null,
            },
            stageSize: {
                width: 72,
                height: 72,
            },
            image: null,
            image2: null,
        };
    },
    mounted() {},
    computed: {},
    methods: {
        toCanvas() {
            var node = document.getElementById("node");
            var aqui = document.getElementsByClassName("popu");
            console.log(node);
            console.log(domtoimage);
            domtoimage
                .toBlob(node, { width: 1920, height: 1080 })
                .then(function (dataUrl) {
                    var img = new Image();
                    img.src = dataUrl;
                    console.log(img);
                    saveAs(dataUrl, "my-node");
                })
                .catch(function (error) {
                    console.error("oops, something went wrong!", error);
                });
        },
    },
    mounted() {},
    watch: {
        local(val) {
            console.log(val);
        },
    },
};
</script>

<style>
/* Estilos CSS */
</style>
