<template>
  <div>
    <VueSlickCarousel v-if="companies.length" v-bind="slickSettings">
      <div v-for="company in companies" :key="company.id">
        <div class="slide-image-normalize">
          <a :href="company.link">
            <img :src="$strapiAsset(company.logo.url)" class="image" alt="">
          </a>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  async fetch () {
    const companies = await this.$strapi.$acompanamientos.find()
    this.companies = companies
  },
  data () {
    return {
      companies: [],
      slickSettings: {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  },
  fetchOnServer: false
}
</script>

<style lang="scss" scoped>
.slide-image-normalize {
  height: 130px;
  margin: 10px;
  position: relative;
  img{
    max-height: 60%;
    max-width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
  }
}
</style>
