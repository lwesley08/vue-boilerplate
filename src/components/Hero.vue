<template>
  <div class="hero hero--full-image">
    <div class="hero__wrapper">
      <v-img
        class="hero__image"
        src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        position="bottom"
        alt="Alt Text"
      ></v-img>
      <div class="hero__title">
        <slot name="title">
          <h1>Hello World</h1>
        </slot>
      </div>
      <div class="hero__subtitle">
        <slot name="subtitle">
          <p>Lorem ipsum dolor sit amet</p>
        </slot>
      </div>
      <div class="hero__button-container">
        <slot name="cta">
          <router-link to="/" custom v-slot="{ navigate }">
            <v-btn @click="navigate" role="link" class="hero__cta hero__cta--primary"
              ><span class="button-text">Shop Now</span></v-btn
            >
          </router-link>
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  min-height: calc(100vh - 70px);
  position: relative;

  &__wrapper {
    width: 100%;
    min-height: calc(100vh - 70px);
    @include contentContainer;
  }

  &__title {
    z-index: 1;

    * {
      text-align: center;
      color: white;
      font-size: 2.0625em;
      font-family: $display-font-family;
      font-weight: 800;
      text-transform: uppercase;
      line-height: normal;

      @include tabletAndAbove {
        font-size: 3rem;
        max-width: 600px;
        text-align: center;
      }
    }
  }

  &__subtitle {
    z-index: 1;

    * {
      text-align: center;
      line-height: normal;
      margin-top: 15px;
      font-weight: 600;
      color: white;
      font-size: 1.5rem;
      font-family: $body-font-family;

      @include tabletAndAbove {
        font-size: 1.5rem;
        max-width: 600px;
        text-align: center;
      }
    }
  }

  &__button-container {
    z-index: 1;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include laptopAndAbove {
      max-width: 600px;
    }
  }

  &__cta {
    padding: 16px 33px;
    height: unset !important;
    width: 100%;
    background-color: $primary-900;
    color: white;
    border-radius: 10px;

    @include laptopAndAbove {
      width: unset;
    }
  }
}

// Full Image
.hero {
  .hero--full-image &__image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    :deep(.v-img__img) {
      object-fit: cover;
    }
  }

  .hero--full-image &__wrapper {
    display: grid;
    align-content: center;
    justify-content: center;
    padding-bottom: 2rem;
    padding-top: 2rem;

    @include laptopAndAbove {
      align-content: center;
      justify-content: center;
    }
  }
}
</style>
