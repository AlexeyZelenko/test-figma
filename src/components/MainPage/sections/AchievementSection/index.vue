<template>
  <section class="achievement-section">
    <div class="container">
      <!-- Rating Card -->
      <div class="card rating-card">
        <div class="card-content">
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>

          <div class="rating-title">4.8 Rating</div>

          <div class="members-container">
            <div class="member-avatars">
              <img class="member-avatar" alt="Member" src="/ellipse-13.svg" />
              <img class="member-avatar" alt="Member" src="/ellipse-14-1.svg" />
              <img class="member-avatar" alt="Member" src="/ellipse-15.svg" />
            </div>
          </div>

          <div class="members-count">
            <span class="members-count-highlight">+836k</span>
            <span class="members-count-text">Members</span>
          </div>

          <div class="card-description">
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </div>

          <button class="link-button primary">
            Join Our Community
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <!-- Awards Card -->
      <div class="card awards-card">
        <div class="card-content">
          <div class="icon-container">
            <img class="trophy-icon" alt="Trophy" src="/trophy.png" />
          </div>

          <div class="awards-title">Awwwards</div>

          <img class="award-icon" alt="Ellipse" src="/ellipse-14.png" />

          <div class="award-text">
            <span class="award-text-normal">Best of </span>
            <span class="award-text-highlight">2021</span>
            <span class="award-text-normal"> on Github</span>
          </div>

          <div class="card-description">
            More than 2 billion we people over countries use socibooks we to
            stay in touch with friends.
          </div>

          <button class="link-button secondary">
            Go To Awards
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <!-- Achievement Text Section -->
      <div class="achievement-text">
        <div class="achievement-subtitle">Our Achievement</div>

        <h2 class="achievement-title">
          We are Connecting You The Digital Life.
        </h2>

        <p class="achievement-description">
          The scope the Social Media becomes crucial Is helps the business to
          directly engage with their needs and wants.
        </p>

        <div class="discover-button-container">
          <div class="discover-button-wrapper">
            <button class="discover-button">
              Discover me
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AchievementSection'
}
</script>

<style lang="scss" scoped>
.achievement-section {
  max-width: 1960px;
  width: 100%;
  padding: 4rem 0;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    gap: 30px;
  }

  .card {
    width: 336px;
    height: 340px;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 26px 49px rgba(146, 165, 183, 0.14);

    &.rating-card {
      .star-icon {
        color: #217bf4;
        width: 24px;
        height: 24px;
      }
    }

    .card-content {
      position: relative;
      height: 100%;
      padding: 0;
    }

    .icon-container {
      position: absolute;
      width: 28px;
      height: 28px;
      top: 42px;
      left: 44px;
    }

    .rating-title, .awards-title {
      position: absolute;
      top: 46px;
      left: 82px;
      font-weight: 500;
      color: #0a093d;
      font-size: 20px;
      letter-spacing: 0;
      line-height: 20px;
      white-space: nowrap;
    }

    .members-container {
      position: absolute;
      width: 60px;
      height: 24px;
      top: 102px;
      left: 44px;
    }

    .member-avatars {
      position: relative;
      height: 24px;
    }

    .member-avatar {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 0;
      object-fit: cover;

      &:nth-child(1) {
        left: 0;
      }

      &:nth-child(2) {
        left: 18px;
      }

      &:nth-child(3) {
        left: 36px;
      }
    }

    .members-count {
      position: absolute;
      top: 105px;
      left: 120px;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      white-space: nowrap;

      &-highlight {
        font-weight: 600;
        color: #217bf4;
        letter-spacing: 0;
        margin: 0 5px;
      }

      &-text {
        font-weight: 500;
        color: #5c5a6f;
        letter-spacing: 0;
      }
    }

    .trophy-icon {
      position: absolute;
      width: 27px;
      height: 21px;
      top: 4px;
      left: 1px;
    }

    .award-icon {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 105px;
      left: 44px;
      object-fit: cover;
    }

    .award-text {
      position: absolute;
      top: 108px;
      left: 84px;
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 18px;
      white-space: nowrap;

      &-normal {
        color: #5c5a6f;
      }

      &-highlight {
        font-weight: 600;
        color: #217bf4;
      }
    }

    .card-description {
      position: absolute;
      width: 274px;
      top: 166px;
      left: 44px;
      font-weight: normal;
      color: #8c8c8c;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 26px;
    }

    .link-button {
      position: absolute;
      top: 284px;
      left: 44px;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 16px;
      padding: 0;
      height: auto;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;

      &.primary {
        color: #217bf4;
      }

      &.secondary {
        color: #494956;
      }

      .arrow-icon {
        margin-left: 8px;
      }
    }
  }

  .achievement-text {
    width: 387px;
    height: 322px;
    position: relative;
    margin-left: 50px;

    .achievement-subtitle {
      position: absolute;
      top: 0;
      left: 0;
      font-weight: 500;
      color: #217bf4;
      font-size: 18px;
      letter-spacing: 0;
      line-height: 18px;
      white-space: nowrap;
    }

    .achievement-title {
      position: absolute;
      width: 381px;
      top: 28px;
      left: 0;
      font-weight: 700;
      color: #0a093d;
      font-size: 36px;
      letter-spacing: 0;
      line-height: 48px;
      margin: 0;
    }

    .achievement-description {
      position: absolute;
      width: 365px;
      top: 142px;
      left: 0;
      font-weight: normal;
      color: #656464;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 28px;
      margin: 0;
    }

    .discover-button-container {
      position: absolute;
      width: 194px;
      height: 58px;
      top: 264px;
      left: 0;
    }

    .discover-button-wrapper {
      position: relative;
      width: 224px;
      height: 90px;
      top: -6px;
      left: -16px;
      background-image: url(/rectangle-12.svg);
      background-size: 100% 100%;
    }

    .discover-button {
      position: absolute;
      top: 28px;
      left: 54px;
      font-weight: 500;
      color: white;
      font-size: 14px;
      text-align: center;
      letter-spacing: -0.28px;
      line-height: 14px;
      white-space: nowrap;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;

      .arrow-icon {
        margin-left: 8px;
      }
    }
  }
}
</style>