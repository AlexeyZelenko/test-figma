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
            <div class="rating-title">4.8 Rating</div>
          </div>

          <div class="members-block">
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
            <div class="awards-title">Awwwards</div>
          </div>

          <div class="award-block">
            <img class="award-icon" alt="Ellipse" src="/ellipse-14.png" />
            <div class="award-text">
              <span class="award-text-normal">Best of </span>
              <span class="award-text-highlight">2021</span>
              <span class="award-text-normal"> on Github</span>
            </div>
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
      <section class="achievement-text">
        <header class="achievement-header">
          <p class="achievement-subtitle">Our Achievement</p>
          <h2 class="achievement-title">
            We are Connecting You The Digital Life.
          </h2>
        </header>

        <p class="achievement-description">
          The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.
        </p>

        <div class="discover-button-container">
          <a href="#" class="discover-button">
            <span>Discover me</span>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </section>

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

  @media (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 95rem;
    margin: 0 auto;
    gap: 30px;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: stretch;

    @media (max-width: 1024px) {
      justify-content: center;
      gap: 40px;
    }

    @media (max-width: 768px) {
      gap: 30px;
    }
  }

  .card {
    width: 336px;
    height: 340px;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 26px 49px rgba(146, 165, 183, 0.14);
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 336px;
      height: auto;
      min-height: 360px;
    }

    &:hover {
      transform: translateY(-5px);
    }

    &.rating-card {
      .star-icon {
        color: #217bf4;
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
    }

    .card-content {
      position: relative;
      height: 100%;
      padding: 42px 44px;
      box-sizing: border-box;

      @media (max-width: 768px) {
        padding: 30px 20px;
      }
    }

    .icon-container {
      display: flex;
      margin-bottom: 40px;
      align-items: center;
    }

    .rating-title, .awards-title {
      font-weight: 500;
      color: #0a093d;
      font-size: 20px;
      letter-spacing: 0;
      line-height: 20px;
      white-space: nowrap;
    }

    .members-block, .award-block {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .members-container {
      margin-bottom: 20px;
    }

    .member-avatars {
      position: relative;
      height: 24px;
      width: 60px;
    }

    .member-avatar {
      position: absolute;
      width: 24px;
      height: 24px;
      top: 0;
      object-fit: cover;

      &:nth-child(1) { left: 0; }
      &:nth-child(2) { left: 18px; }
      &:nth-child(3) { left: 36px; }
    }

    .members-count {
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 18px;

      &-highlight {
        font-weight: 600;
        color: #217bf4;
        letter-spacing: 0;
        margin-right: 5px;
      }

      &-text {
        font-weight: 500;
        color: #5c5a6f;
        letter-spacing: 0;
      }
    }

    .trophy-icon {
      width: 27px;
      height: 21px;
      margin-right: 10px;
    }

    .award-icon {
      width: 24px;
      height: 24px;
      margin-bottom: 20px;
    }

    .award-text {
      margin-bottom: 20px;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 18px;

      &-normal {
        color: #5c5a6f;
      }

      &-highlight {
        font-weight: 600;
        color: #217bf4;
      }
    }

    .card-description {
      font-weight: normal;
      color: #8c8c8c;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 26px;
      margin-bottom: 30px;
    }

    .link-button {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 16px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }

      &.primary {
        color: #217bf4;
      }

      &.secondary {
        color: #494956;
      }
    }
  }

  .achievement-text {
    width: 387px;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1024px) {
      width: 100%;
      max-width: 500px;
      text-align: center;
      margin-top: 20px;
    }

    .achievement-subtitle {
      font-weight: 500;
      color: #217bf4;
      font-size: 18px;
      letter-spacing: 0;
      line-height: 18px;
      margin-bottom: 20px;
    }

    .achievement-title {
      font-weight: 700;
      color: #0a093d;
      font-size: 36px;
      letter-spacing: 0;
      line-height: 48px;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 28px;
        line-height: 38px;
      }
    }

    .achievement-description {
      font-weight: normal;
      color: #656464;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 28px;
      margin-bottom: 30px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 24px;
      }
    }

    .discover-button-container {
      @media (max-width: 1024px) {
        display: flex;
        justify-content: center;
      }
    }

    .discover-button-wrapper {
      position: relative;
      width: 224px;
      height: 90px;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        width: 180px;
        height: 70px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }

    .discover-button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: white;
      font-size: 14px;
      text-align: center;
      letter-spacing: -0.28px;
      line-height: 14px;
      background: none;
      border: none;
      cursor: pointer;
      gap: 8px;
      transition: opacity 0.3s ease;
      height: 60px;
      background: #217BF4;
      width: 224px;
      border-radius: 14px;
      box-shadow: 0 10px 22px -6px rgba(13, 110, 253, 0.26);

      &:hover {
        opacity: 0.8;
      }

      @media (max-width: 768px) {
        font-size: 12px;
      }

      .arrow-icon {
        stroke: currentColor;
      }
    }
  }
}
</style>