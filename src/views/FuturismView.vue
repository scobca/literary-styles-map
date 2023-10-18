<template>
  <v-parallax :src="require('@/assets/img/bg_1.jpg')" class="parallax">
    <y-header class="header"/>
    <div class="main_container">
      <div class="text_block">
        <div class="block" data-aos="fade-up" data-aos-duration="750">
          <h1>Футуризм —</h1>
          <p>
            течение авангардного искусства 1910-х — начала 1920-х годов, прежде всего в поэзии и живописи Италии и
            России. Автор термина — итальянский поэт Филиппо Томмазо Маринетти. В 1909 году он опубликовал «Первый
            манифест футуризма», где провозгласил, что на смену старому искусству пришло новое и оно должно спасти мир
          </p>
        </div>
        <div class="block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <h2>Общие черты футуризма в литературе:</h2>
          <ul class="ul_block">
            <li> приветствие краху старой жизни;
            </li>
            <li> приветствие краху старой жизни;</li>
            <li> урбанистические темы и приемы поэзии;</li>
            <li> интерес к живописи, введение новой графики и звукописи;</li>
          </ul>
        </div>
      </div>
      <div class="global_names_block" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1500">
        <div class="slider_container">
          <h2 class="header_color_light">Писатели футуристы</h2>
          <y-futurism-slider/>
        </div>
      </div>
    </div>
    <div class="main_composition">
      <h2 data-aos="fade-up" data-aos-duration="750">Произведения футуризма</h2>
      <div class="card_container">
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side class="card card_template">
            <div class="name">
              <h2>Владимир Маяковский —</h2>
            </div>
            <div class="composition">
              <h3>"Эта книжечка моя про моря и про маяк"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение передает идею о свободе, стремлении к неизведанному, и метафорический образ маяка служит
              символом направления и опорой для людей, идущих в неизвестность.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>Владимир Маяковский —</h2>
            </div>
            <div class="composition">
              <h3>"Товарищу Нетте-пароходу и человеку"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение отражает образ мужественных и стойких людей, которые идут на встречу опасностям и неведомым
              просторам моря, служа высоким идеалам и целям.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
          <template v-slot:front-side>
            <div class="name">
              <h2>Марина Цветаева —</h2>
            </div>
            <div class="composition">
              <h3>"Я с вызовом ношу его кольцо..."</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Стихотворение передает образ сильной и страстной женщины, готовой принимать вызовы любви и судьбы.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <template v-slot:front-side>
            <div class="name">
              <h2>Борис Пастернак —</h2>
            </div>
            <div class="composition">
              <h3>"Лирика"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              В стихотворении Пастернак говорит о том, что линии лирической поэзии как будто "загораются в одинокой
              мгле", что символизирует их способность освещать внутренний мир поэта и передавать его состояния и
              настроения. Это произведение подчеркивает важность и ценность лирической поэзии в выражении человеческих
              переживаний и чувств.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
          <template v-slot:front-side>
            <div class="name">
              <h2>Велимир Хлебников —</h2>
            </div>
            <div class="composition">
              <h3>"Председатель земного шара"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              Поэт в стихотворении подчеркивает абсурдность и искусственность идеи такого "председателя" и призывает к
              освобождению человеческого духа от таких иллюзий и амбиций. Стихотворение является сатирой на политические
              иерархии и выражает недовольство автора властью и бюрократией.
            </p>
          </template>
        </y-card>
        <y-card class="card" data-aos="fade-up" data-aos-duration="750" data-aos-delay="1000">
          <template v-slot:front-side>
            <div class="name">
              <h2>Давид Бурлюк —</h2>
            </div>
            <div class="composition">
              <h3>"Фрагменты из воспоминаний футуриста"</h3>
            </div>
          </template>

          <template v-slot:back-side class="card card_template">
            <p>
              В стихотворении отражается атмосфера экспериментов и изменений в искусстве начала 20 века, когда футуристы
              стремились к разрыву с традиционными формами и созданию нового искусства
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
import YRealismSlider from "@/components/UI/YRealismSlider.vue";
import YHeader from "@/components/UI/YHeader.vue";
import YCard from "@/components/UI/YCard.vue";
import YSymbolismSlider from "@/components/UI/YSymbolismSlider.vue";
import YFuturismSlider from "@/components/UI/YFuturismSlider.vue";

AOS.init()

@Options({
  name: 'futurism-view',
  components: {YFuturismSlider, YCard, YHeader},
})
export default class FuturismView extends Vue {

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
