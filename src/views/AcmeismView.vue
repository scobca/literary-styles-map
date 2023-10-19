<template>
  <v-parallax :src="require('@/assets/img/bg_1.jpg')" class="parallax">
    <y-header class="header"/>
    <div class="main_container">
      <div class="text_block">
        <div class="block" data-aos="fade-up" data-aos-duration="750">
          <h1>Акмеизм —</h1>
          <p>
            литературное течение, противостоящее символизму и возникшее в начале XX века в России. Акмеисты
            провозглашали материальность, предметность тематики и образов, точность слова
          </p>
        </div>
        <div class="block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <h2>Общие черты акмеизма в литературе:</h2>
          <ul class="ul_block">
            <li> романтизация чувств первочеловека;</li>
            <li> разговор о земной первозданной красоте;</li>
            <li> ясность и прозрачность образов;</li>
            <li> понимание искусства как инструмента по улучшению человеческой природы;</li>
          </ul>
        </div>
      </div>
      <div class="global_names_block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500">
        <div class="slider_container">
          <h2 class="header_color_light">Писатели акмеисты</h2>
          <y-acmeism-slider/>
        </div>
      </div>
    </div>
    <div class="main_composition">
      <h2 data-aos="fade-up" data-aos-duration="750">Произведения акмеизма</h2>
      <div class="card_container">
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side class="card card_template">
            <div class="name">
              <h2>Николай Гумилёв —</h2>
            </div>
            <div class="composition">
              <h3>"Сонет"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение передает сильное чувство и преданность поэзии как источнику вдохновения и смысла жизни.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>Владимир Нарбут —</h2>
            </div>
            <div class="composition">
              <h3>"Встреча"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              В стихотворении рассказывается о радости и счастье при встрече, о чувстве близости и тепла, которое
              испытывают встречающиеся. Автор передает момент счастья и эмоциональной близости, создавая яркую и теплую
              картину момента встречи.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
          <template v-slot:front-side>
            <div class="name">
              <h2>Анна Ахматова —</h2>
            </div>
            <div class="composition">
              <h3>"Сжала руки под тёмной вуалью..."</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение "Сжала руки под тёмной вуалью" Анны Ахматовой описывает чувства тоски, потери и скорби. В
              стихотворении ощущается оттенок горечи и невыразимой печали, а также желание сохранить чувства и эмоции
              внутри себя, не раскрывая их миру.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side>
            <div class="name">
              <h2>Осип Мандельштам —</h2>
            </div>
            <div class="composition">
              <h3>"На бледно-голубой эмали"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Автор создает образы моря, гор, светящихся облаков и других природных элементов, чтобы выразить свое
              восхищение перед величественным и бесконечным миром природы. Стихотворение призывает читателя остановиться
              и насладиться моментом, вдохновляясь красотой окружающего мира.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>Анна Ахматова —</h2>
            </div>
            <div class="composition">
              <h3>"Реквием"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              В поэме отражены чувства всех людей, которые когда-либо теряли родного человека. Это жгучая боль от
              несправедливости и протест против насилия над людьми, в частности над заключенными.
            </p>
          </template>
        </y-card>
      </div>
    </div>
  </v-parallax>
</template>

<script lang="ts">
//@ts-ignore
import AOS from 'aos';
import {Options, Vue} from "vue-class-component";
import YHeader from "@/components/UI/YHeader.vue";
import YCard from "@/components/UI/YCard.vue";
import YAcmeismSlider from "@/components/UI/YAcmeismSlider.vue";

AOS.init()

@Options({
  name: 'aсmeism-view',
  components: {YAcmeismSlider, YCard, YHeader},
})
export default class AcmeismView extends Vue {

}
</script>

<style scoped lang="less">
@import '@/assets/styles/color';

.card_container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  gap: 1rem;
  margin-top: 2rem;
  max-width: 80%;
}

.main_composition {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;

  margin: 5rem auto;
}

.main_composition > h2 {
  background: @bg-text-color-dark;
  height: 3rem;
  width: 30rem;
  padding: 0.3rem .5rem;
  border-radius: .75rem;
}

.header {
  margin: auto;
  background-color: @bg-text-color-dark;
  color: @text-color-dark !important;
}

.parallax {
  width: 100vw;
  min-height: 200vh;
}

.main_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 1rem 20rem;
  min-height: 86vh;
}

.text_block {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 75vh;
  margin-top: 1rem;
  gap: 1rem;

  font-size: 1.1rem;
}

.block {
  display: flex;
  flex-direction: column;

  max-width: 30vw;
  text-align: left;

  background: @bg-text-color-dark;

  padding: 1.5rem 2.5rem;
  border-radius: .5rem;
}

</style>
