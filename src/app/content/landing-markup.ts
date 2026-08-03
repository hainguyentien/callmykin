export const landingMarkup = String.raw`
  <!-- ═══════════════════════════════ NAV ═══════════════════════════════ -->
  <header class="nav" id="nav">
    <div class="nav__inner">
      <a href="#" class="nav__brand">
        <img src="/cmk/brand_assets/callmykin_2.jpg" alt="CallMyKin Logo" class="nav__logo">
        <span class="nav__name">CallMyKin</span>
      </a>
      <nav class="nav__links" id="navLinks" aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#dialects">Dialects</a>
        <a href="#videos">Videos</a>
        <a href="#download">Download</a>
      </nav>
      <a href="#download" class="btn btn--red nav__cta">Download Free</a>
      <button class="nav__burger" id="navBurger" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main>

    <!-- ═══════════════════════════════ HERO ══════════════════════════════ -->
    <section class="hero" id="hero">
      <div class="hero__floats" aria-hidden="true">
        <span class="hero__char" style="--delay:0s;   --x:6%;  --y:15%;">Grandpa</span>
        <span class="hero__char" style="--delay:0.6s; --x:80%; --y:10%;">Grandma</span>
        <span class="hero__char" style="--delay:1.2s; --x:70%; --y:65%;">Uncle</span>
        <span class="hero__char" style="--delay:1.8s; --x:3%;  --y:70%;">Auntie</span>
        <span class="hero__char" style="--delay:2.4s; --x:40%; --y:88%;">Cousin</span>
        <span class="hero__char" style="--delay:3s;   --x:87%; --y:45%;">In-law</span>
      </div>

      <div class="hero__content">
        <p class="hero__eyebrow">Family &middot; Titles &middot; Made &middot; Easy</p>
        <h1 class="hero__headline">
          If it's not Uncle...<br>
          then what do I call him?
        </h1>
        <p class="hero__sub">
          CallMyKin helps you navigate how to address family and relatives in various Chinese dialects — with native audio, a family tree builder, and quizzes that help you learn!
        </p>
        <div class="hero__dialect-chips" aria-label="Supported dialects">
          <span>Mandarin</span>
          <span>Cantonese</span>
          <span>Hokkien</span>
          <span>Hakka</span>
          <span>Teochew</span>
        </div>
        <div class="hero__actions">
          <a href="#download" class="btn btn--store btn--apple" aria-label="Download on the App Store">
            <svg width="18" height="22" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
              <path d="M16.52 12.7c-.03-3.17 2.59-4.7 2.71-4.77-1.48-2.16-3.78-2.45-4.59-2.48-1.95-.2-3.82 1.16-4.81 1.16-.99 0-2.52-1.13-4.15-1.1-2.13.03-4.1 1.24-5.2 3.13-2.22 3.85-.57 9.55 1.59 12.67 1.06 1.53 2.32 3.24 3.98 3.18 1.6-.06 2.2-1.03 4.13-1.03 1.92 0 2.47 1.03 4.15.99 1.72-.03 2.81-1.55 3.86-3.09 1.22-1.77 1.72-3.49 1.75-3.58-.04-.01-3.38-1.29-3.42-5.08z"/>
              <path d="M13.33 3.56C14.19 2.52 14.77 1.1 14.6-.35c-1.24.05-2.74.83-3.63 1.87-.8.92-1.5 2.39-1.31 3.8 1.38.11 2.79-.7 3.67-1.76z"/>
            </svg>
            <span><small>Download on the</small>App Store</span>
          </a>
          <a href="#download" class="btn btn--store btn--google" aria-label="Get it on Google Play">
            <svg width="18" height="20" viewBox="0 0 20 22" aria-hidden="true">
              <path d="M1.22.42C.86.8.64 1.39.64 2.14v17.72c0 .75.22 1.34.58 1.72l.09.08 9.93-9.93v-.23L1.31.34l-.09.08z" fill="#4FC3F7"/>
              <path d="M14.56 14.06l-3.32-3.32v-.24l3.32-3.32.07.04 3.93 2.23c1.12.64 1.12 1.68 0 2.32l-3.93 2.23-.07.06z" fill="#FFCA28"/>
              <path d="M14.63 14l-3.39-3.39-9.99 9.99c.37.39.97.44 1.65.05L14.63 14" fill="#F44336"/>
              <path d="M14.63 7.61L2.9.97C2.22.58 1.62.63 1.25 1.02l9.99 9.99 3.39-3.4z" fill="#4CAF50"/>
            </svg>
            <span><small>Get it on</small>Google Play</span>
          </a>
        </div>
        <p class="hero__free">Free · No account needed · iOS &amp; Android</p>
      </div>

      <div class="hero__mockup">
        <img src="/cmk/brand_assets/CMK%20Iphone%2015.png" alt="iPhone showing the CallMyKin app's relative calculator — select Me, Father, Mother to get the correct Mandarin title: 婆婆 (Mother-in-law)" class="hero__app-screenshot">
        <div class="hero__mockup-glow" aria-hidden="true"></div>
      </div>
    </section>

    <!-- Wave: cream → cream-dark -->
    <div class="wave-sep wave-sep--cream-to-creamy" aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="#F5EDD0"/>
      </svg>
    </div>

    <!-- ══════════════════════════ PROBLEM ════════════════════════════════ -->
    <section class="problem" id="problem">
      <div class="container">
        <span class="section-eyebrow">Sound familiar?</span>
        <h2 class="section-title">The Struggle is <span class="text-red">Real</span></h2>
        <p class="section-sub">That moment of panic when a relative walks toward you and you have absolutely no idea what to call them.</p>
        <div class="problem__cards">
          <div class="problem__card fade-in">
            <div class="problem__emoji">😅</div>
            <div class="problem__zh-deco" aria-hidden="true" lang="zh">囧</div>
            <h3>CNY Reunion Chaos</h3>
            <p>15 relatives. Zero idea what to call them. You've been nodding and smiling for 3 hours straight.</p>
          </div>
          <div class="problem__card fade-in">
            <div class="problem__emoji">😬</div>
            <div class="problem__zh-deco" aria-hidden="true" lang="zh">哎</div>
            <h3>The Auntie Incident</h3>
            <p>Called your husband's grandmother "Auntie." She hasn't forgiven you. That was four years ago.</p>
          </div>
          <div class="problem__card fade-in">
            <div class="problem__emoji">😰</div>
            <div class="problem__zh-deco" aria-hidden="true" lang="zh">难</div>
            <h3>Teochew Terror</h3>
            <p>Your in-laws speak Teochew. You speak… panic. Fluent, eloquent, very convincing panic.</p>
          </div>
        </div>
        <div class="problem__bridge">
          <p>Sound familiar? <strong>CallMyKin</strong> has you covered — across all 5 dialects.</p>
          <a href="#features" class="btn btn--red">See How It Works →</a>
        </div>
      </div>
    </section>

    <!-- Wave: cream-dark → brown -->
    <div class="wave-sep wave-sep--creamy-to-brown" aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,35 C240,0 480,70 720,35 C960,0 1200,70 1440,35 L1440,70 L0,70 Z" fill="#2C1A0E"/>
      </svg>
    </div>

    <!-- ═══════════════════════════ VIDEOS ════════════════════════════════ -->
    <section class="videos" id="videos">
      <div class="container">
        <span class="section-eyebrow section-eyebrow--light">真实情境 · Real Scenarios</span>
        <h2 class="section-title section-title--light">Watch the <span class="text-gold">Chaos</span> Unfold</h2>
        <p class="section-sub section-sub--light">Relatable situations, zero judgment. More videos dropping soon!</p>
        <div class="videos__grid">

          <div class="video-card fade-in">
            <div class="video-card__thumb" data-youtube-id="22kaLtRE5Q8">
              <div class="video-card__placeholder">
                <div class="video-card__play-ring">&#9654;</div>
                <span class="video-card__coming">Coming Soon</span>
              </div>
            </div>
            <div class="video-card__info">
              <h3>The In-Law Test</h3>
              <p>The kwailou challenge</p>
            </div>
          </div>

          <div class="video-card fade-in">
            <div class="video-card__thumb" data-youtube-id="CGPLdPUifps">
              <div class="video-card__placeholder">
                <div class="video-card__play-ring">&#9654;</div>
                <span class="video-card__coming">Coming Soon</span>
              </div>
            </div>
            <div class="video-card__info">
              <h3>The Whatsapp Group</h3>
              <p>Never depend on chats for fast answers</p>
            </div>
          </div>

          <div class="video-card fade-in">
            <div class="video-card__thumb" data-youtube-id="-56yWhHlH-k">
              <div class="video-card__placeholder">
                <div class="video-card__play-ring">&#9654;</div>
                <span class="video-card__coming">Coming Soon</span>
              </div>
            </div>
            <div class="video-card__info">
              <h3>The Classic Uncle Fail</h3>
              <p>No, not Uncle!</p>
            </div>
          </div>

          <div class="video-card fade-in">
            <div class="video-card__thumb" data-youtube-id="RmynSOUiNI4">
              <div class="video-card__placeholder">
                <div class="video-card__play-ring">&#9654;</div>
                <span class="video-card__coming">Coming Soon</span>
              </div>
            </div>
            <div class="video-card__info">
              <h3>Dialect Bootcamp</h3>
              <p>Five dialects, one deadline, zero chill.</p>
            </div>
          </div>

          <div class="video-card fade-in">
            <div class="video-card__thumb" data-youtube-id="SSkP5sJyOws">
              <div class="video-card__placeholder">
                <div class="video-card__play-ring">&#9654;</div>
                <span class="video-card__coming">Coming Soon</span>
              </div>
            </div>
            <div class="video-card__info">
              <h3>Hong Pao Hostage</h3>
              <p>No blessings, no red envelope.</p>
            </div>
          </div>

          <div class="video-card fade-in">
            <div class="video-card__thumb" data-youtube-id="Oc8mysDvC7k">
              <div class="video-card__placeholder">
                <div class="video-card__play-ring">&#9654;</div>
                <span class="video-card__coming">Coming Soon</span>
              </div>
            </div>
            <div class="video-card__info">
              <h3>The Kitchen</h3>
              <p>Too many aunties, one stove.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Wave: brown → cream -->
    <div class="wave-sep wave-sep--brown-to-cream" aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,0 L0,0 Z" fill="#FDF6E3"/>
      </svg>
    </div>

    <!-- ═══════════════════════ DIALECT SHOWCASE ══════════════════════════ -->
    <section class="dialects" id="dialects">
      <div class="container">
        <span class="section-eyebrow">5种方言 · 5 Dialects</span>
        <h2 class="section-title">Hear It in <span class="text-red">Your Dialect</span></h2>
        <p class="section-sub">One relative. Five completely different titles. This is exactly why we built CallMyKin.</p>

        <div class="dialect-tabs" role="tablist" aria-label="Chinese dialects">
          <button class="dialect-tab active" role="tab" data-dialect="mandarin"
            id="tab-mandarin" aria-selected="true" aria-controls="panel-mandarin">
            <span lang="zh">普通话</span><small>Mandarin</small>
          </button>
          <button class="dialect-tab" role="tab" data-dialect="cantonese"
            id="tab-cantonese" aria-selected="false" aria-controls="panel-cantonese">
            <span lang="zh">粤语</span><small>Cantonese</small>
          </button>
          <button class="dialect-tab" role="tab" data-dialect="hokkien"
            id="tab-hokkien" aria-selected="false" aria-controls="panel-hokkien">
            <span lang="zh">闽南语</span><small>Hokkien</small>
          </button>
          <button class="dialect-tab" role="tab" data-dialect="hakka"
            id="tab-hakka" aria-selected="false" aria-controls="panel-hakka">
            <span lang="zh">客家话</span><small>Hakka</small>
          </button>
          <button class="dialect-tab" role="tab" data-dialect="teochew"
            id="tab-teochew" aria-selected="false" aria-controls="panel-teochew">
            <span lang="zh">潮州话</span><small>Teochew</small>
          </button>
        </div>

        <div class="dialect-panels">

          <div class="dialect-panel active" id="panel-mandarin" role="tabpanel" aria-labelledby="tab-mandarin">
            <div class="dialect-panel__word">
              <span class="dp-zh" lang="zh">奶奶</span>
              <span class="dp-roman">Nǎi nai</span>
              <span class="dp-meaning">Paternal Grandmother</span>
              <button class="dp-play" type="button" data-audio="/cmk/audio/mandarin.wav" aria-label="Play Mandarin pronunciation">🔊</button>
            </div>
            <div class="dialect-panel__fact">
              <span class="fact-icon">💡</span>
              <div>
                <strong>About Mandarin</strong>
                <p>The official language of China, Taiwan, and Singapore with over 920 million speakers. Mandarin family terms are often the first ones diaspora Chinese encounter — but they're just one of many systems used across communities worldwide.</p>
              </div>
            </div>
          </div>

          <div class="dialect-panel" id="panel-cantonese" role="tabpanel" aria-labelledby="tab-cantonese">
            <div class="dialect-panel__word">
              <span class="dp-zh" lang="zh">嫲嫲</span>
              <span class="dp-roman">Màh màh</span>
              <span class="dp-meaning">Paternal Grandmother</span>
              <button class="dp-play" type="button" data-audio="/cmk/audio/cantonese.mp3" aria-label="Play Cantonese pronunciation">🔊</button>
            </div>
            <div class="dialect-panel__fact">
              <span class="fact-icon">💡</span>
              <div>
                <strong>About Cantonese</strong>
                <p>Spoken by around 85 million people, Cantonese dominates Hong Kong, Guangdong province, and large overseas communities in North America and Australia. Its rich tonal system and distinct vocabulary make family terms sound very different from Mandarin.</p>
              </div>
            </div>
          </div>

          <div class="dialect-panel" id="panel-hokkien" role="tabpanel" aria-labelledby="tab-hokkien">
            <div class="dialect-panel__word">
              <span class="dp-zh" lang="zh">阿嬤</span>
              <span class="dp-roman">A-má</span>
              <span class="dp-meaning">Grandmother</span>
              <button class="dp-play" type="button" data-audio="/cmk/audio/hokkien.wav" aria-label="Play Hokkien pronunciation">🔊</button>
            </div>
            <div class="dialect-panel__fact">
              <span class="fact-icon">💡</span>
              <div>
                <strong>About Taiwan Hokkien</strong>
                <p>Taiwan Hokkien (Minnan / Taiwanese) is spoken by most of Taiwan's population and widely across Southeast Asia — especially Malaysia, Indonesia, and the Philippines. Many overseas Chinese families speak Hokkien at home, even when they don't realise it has a name.</p>
              </div>
            </div>
          </div>

          <div class="dialect-panel" id="panel-hakka" role="tabpanel" aria-labelledby="tab-hakka">
            <div class="dialect-panel__word">
              <span class="dp-zh" lang="zh">阿婆</span>
              <span class="dp-roman">A-pô</span>
              <span class="dp-meaning">Grandmother</span>
              <button class="dp-play" type="button" data-audio="/cmk/audio/hakka.wav" aria-label="Play Hakka pronunciation">🔊</button>
            </div>
            <div class="dialect-panel__fact">
              <span class="fact-icon">💡</span>
              <div>
                <strong>About Hakka</strong>
                <p>Hakka people are famously described as the "wanderers" of China — scattered from Malaysia to Jamaica. With 40–50 million speakers worldwide, Hakka has its own distinct kinship system that surprises even native Chinese speakers from other dialect groups.</p>
              </div>
            </div>
          </div>

          <div class="dialect-panel" id="panel-teochew" role="tabpanel" aria-labelledby="tab-teochew">
            <div class="dialect-panel__word">
              <span class="dp-zh" lang="zh">阿嫲</span>
              <span class="dp-roman">A-mâ</span>
              <span class="dp-meaning">Grandmother</span>
              <button class="dp-play" type="button" data-audio="/cmk/audio/teochew.wav" aria-label="Play Teochew pronunciation">🔊</button>
            </div>
            <div class="dialect-panel__fact">
              <span class="fact-icon">💡</span>
              <div>
                <strong>About Teochew</strong>
                <p>Teochew (Chaozhou) speakers have a strong presence in Thailand, Cambodia, Vietnam, and Malaysia. Despite linguistic similarities to Hokkien, Teochew has its own distinct vocabulary and pronunciation — enough to confuse even fluent Hokkien speakers.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Wave: cream → cream-dark (inside features top) -->
    <div class="wave-sep wave-sep--cream-to-creamy" aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,35 C240,0 480,70 720,35 C960,0 1200,70 1440,35 L1440,70 L0,70 Z" fill="#F5EDD0"/>
      </svg>
    </div>

    <!-- ═══════════════════════════ FEATURES ══════════════════════════════ -->
    <section class="features" id="features">
      <div class="container">
        <span class="section-eyebrow">功能特色 · What You Get</span>
        <h2 class="section-title">Everything You Need to <span class="text-red">Get It Right</span></h2>
        <div class="features__grid">

          <div class="feature-card fade-in">
            <div class="feature-card__icon">🔊</div>
            <h3>Native Audio</h3>
            <p>Hear every family term pronounced by real native speakers — in both formal and informal registers, across all 5 dialects.</p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-card__icon">🌳</div>
            <h3>Family Tree Builder</h3>
            <p>Map your actual relatives. Get the precise term for your specific family situation — not just a generic textbook list.</p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-card__icon">🧠</div>
            <h3>Smart Quizzes</h3>
            <p>Spaced repetition that actually works. You'll remember <span class="term-phonetic">dà bó</span> from <span class="term-phonetic">èr bó</span> — and still know it at the next reunion.</p>
          </div>

          <div class="feature-card fade-in">
            <div class="feature-card__icon">🔥</div>
            <h3>Daily Streaks</h3>
            <p>Build the habit. Keep the streak. Impress the in-laws at the next gathering. Never panic-smile again.</p>
          </div>

        </div>

        <div class="features__stats">
          <div class="stat fade-in">
            <span class="stat__num">5</span>
            <span class="stat__label">Dialects</span>
          </div>
          <div class="stat fade-in">
            <span class="stat__num">200+</span>
            <span class="stat__label">Relationship Terms</span>
          </div>
          <div class="stat fade-in">
            <span class="stat__num">100%</span>
            <span class="stat__label">Native Audio</span>
          </div>
          <div class="stat fade-in">
            <span class="stat__num">Free</span>
            <span class="stat__label">Download</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Wave: cream-dark → cream -->
    <div class="wave-sep wave-sep--creamy-to-cream" aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,0 L0,0 Z" fill="#FDF6E3"/>
      </svg>
    </div>

    <!-- ══════════════════════ TESTIMONIALS ═══════════════════════════════ -->
    <section class="testimonials" id="testimonials">
      <div class="container">
        <span class="section-eyebrow">真实故事 · Real Stories</span>
        <h2 class="section-title">They Survived. <span class="text-red">So Can You.</span></h2>
        <div class="testimonials__grid">

          <div class="testimonial-card fade-in">
            <div class="testimonial-card__quote" aria-hidden="true">"</div>
            <p class="testimonial-card__text">I married into a Hakka family and had no idea what to call anyone. Three months with CallMyKin and I addressed my mother-in-law's sister correctly at CNY. She cried. Good tears.</p>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar avatar--red">S</div>
              <div>
                <strong>Sarah L.</strong>
                <span>Married into a Hakka family, Kuala Lumpur</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card fade-in">
            <div class="testimonial-card__quote" aria-hidden="true">"</div>
            <p class="testimonial-card__text">I'm third-generation overseas Chinese. My grandparents speak Teochew but I never learned. This app helped me reconnect with them before it was too late. I'm not crying, you're crying.</p>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar avatar--green">M</div>
              <div>
                <strong>Marcus T.</strong>
                <span>Third-gen overseas Chinese, Melbourne</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card fade-in">
            <div class="testimonial-card__quote" aria-hidden="true">"</div>
            <p class="testimonial-card__text">My Cantonese husband was <em>shocked</em> when I correctly called his <span class="term-phonetic">ji6 baak3 mou5</span> at a family dinner. I've never seen him look at me like that. Genuinely, thank you CallMyKin.</p>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar avatar--gold">A</div>
              <div>
                <strong>Aisha R.</strong>
                <span>Married a Cantonese man, Singapore</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════ DOWNLOAD CTA ═════════════════════════════ -->
    <section class="cta-download" id="download">
      <div class="cta-download__lanterns" aria-hidden="true">
        <div class="lantern"></div>
        <div class="lantern lantern--tall"></div>
        <div class="lantern lantern--short"></div>
        <div class="lantern lantern--tall"></div>
        <div class="lantern"></div>
      </div>
      <span class="cta-download__watermark" aria-hidden="true" lang="zh">家</span>
      <div class="container cta-download__inner">
        <h2>Ready to Call Your Kin<br>with <em>Confidence?</em></h2>
        <p class="cta-download__sub">Free Download. Works on iOS and Android.</p>
        <div class="cta-download__badges">
          <a href="#" class="btn btn--store btn--store-light btn--apple" aria-label="Download on the App Store">
            <svg width="18" height="22" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
              <path d="M16.52 12.7c-.03-3.17 2.59-4.7 2.71-4.77-1.48-2.16-3.78-2.45-4.59-2.48-1.95-.2-3.82 1.16-4.81 1.16-.99 0-2.52-1.13-4.15-1.1-2.13.03-4.1 1.24-5.2 3.13-2.22 3.85-.57 9.55 1.59 12.67 1.06 1.53 2.32 3.24 3.98 3.18 1.6-.06 2.2-1.03 4.13-1.03 1.92 0 2.47 1.03 4.15.99 1.72-.03 2.81-1.55 3.86-3.09 1.22-1.77 1.72-3.49 1.75-3.58-.04-.01-3.38-1.29-3.42-5.08z"/>
              <path d="M13.33 3.56C14.19 2.52 14.77 1.1 14.6-.35c-1.24.05-2.74.83-3.63 1.87-.8.92-1.5 2.39-1.31 3.8 1.38.11 2.79-.7 3.67-1.76z"/>
            </svg>
            <span><small>Download on the</small>App Store</span>
          </a>
          <a href="#" class="btn btn--store btn--store-light btn--google" aria-label="Get it on Google Play">
            <svg width="18" height="20" viewBox="0 0 20 22" aria-hidden="true">
              <path d="M1.22.42C.86.8.64 1.39.64 2.14v17.72c0 .75.22 1.34.58 1.72l.09.08 9.93-9.93v-.23L1.31.34l-.09.08z" fill="#4FC3F7"/>
              <path d="M14.56 14.06l-3.32-3.32v-.24l3.32-3.32.07.04 3.93 2.23c1.12.64 1.12 1.68 0 2.32l-3.93 2.23-.07.06z" fill="#FFCA28"/>
              <path d="M14.63 14l-3.39-3.39-9.99 9.99c.37.39.97.44 1.65.05L14.63 14" fill="#F44336"/>
              <path d="M14.63 7.61L2.9.97C2.22.58 1.62.63 1.25 1.02l9.99 9.99 3.39-3.4z" fill="#4CAF50"/>
            </svg>
            <span><small>Get it on</small>Google Play</span>
          </a>
        </div>
        <p class="cta-download__note">🎉 Join thousands of families who finally know what to call each other</p>
      </div>
    </section>

  </main>

  <!-- ═══════════════════════════ FOOTER ═══════════════════════════════ -->
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <img src="/cmk/brand_assets/callmykin_2.jpg" alt="CallMyKin" class="footer__logo">
        <p class="footer__tagline">Speak family.<br>Across every dialect.</p>
      </div>
      <nav class="footer__links" aria-label="Footer navigation">
        <a href="#features">Features</a>
        <a href="#dialects">Dialects</a>
        <a href="#videos">Videos</a>
        <a href="#download">Download</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
        <a href="mailto:callmykin89@gmail.com">Contact</a>
      </nav>
      <div class="footer__social">
        <a href="#" aria-label="Facebook" class="footer__social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="#" aria-label="Instagram" class="footer__social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="#" aria-label="TikTok" class="footer__social-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.83 1.56V6.81a4.85 4.85 0 01-1.06-.12z"/></svg>
        </a>
      </div>
    </div>
    <div class="footer__legal">
      <div class="container">
        <p>Call My Kin is owned and operated by ZETARA PTY LTD. ABN 87 640 215 667. Registered address: 697 Collins Street, Docklands, Victoria 3008, Australia. Business email: <a href="mailto:callmykin89@gmail.com" style="color:inherit;">callmykin89@gmail.com</a>. Business phone: 0482 619 996.</p>
        <p class="footer__account"><a href="/delete-account">Delete Account</a></p>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container">
        <p>© 2026 Zetara Pty Ltd (CallMyKin). All rights reserved. Made with ❤️ for families everywhere.</p>
      </div>
    </div>
  </footer>

`;
