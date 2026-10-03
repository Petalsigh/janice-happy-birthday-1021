import React, { useState } from 'react';

const reasons = [
  '遇i就e，遇e就i的宝宝',
  '很喜欢笑，不知道是不是笑点低的宝宝',
  '很喜欢逛街、很爱美、很有秩序地生活的宝宝',
  '很善良、很柔软的宝宝',
  '很会表达爱，也很会让人感受到爱的宝宝',
  '很努力成为更好的自己的宝宝',
  '非常值得被珍惜、尊重、喜欢的宝宝',
  '偶尔小迷糊也很可爱的宝宝',
  '很有自己的想法和闪光点的宝宝',
  '你努力的每一天都值得鼓励',
  '对待朋友真心又真诚的宝宝',
  '很有耐心、很会照顾别人情绪的宝宝',
  '让别人感受到温暖和温柔的宝宝',
  '把小小的幸福放在手心的宝宝',
  '有一颗柔软又温柔的心的宝宝',
  '很会维护好朋友关系的宝宝',
  '可以把难过慢慢变成力量和动力的宝宝',
  '全世界最好的宝宝呀',
];

const pages = {
  memories: { label: '回忆', note: '和你幸福的每一帧都难忘', sticker: '/pochacco-ruby.png' },
  reasons: { label: '十八', note: '世界不过是一个蓝色的蛋糕，我们会和同样柔软的人越过时间，以火焰相见。', sticker: '/pochacco-reasons.png' },
  letter: { label: '信笺', note: '生日快乐宝宝', sticker: '/pochacco-letter.png' },
  wishes: { label: '祝福', note: '愿岁岁年年，你都被温柔与欢喜拥抱', sticker: '/pochacco-wishes-pillow-cutout.png' },
};

const pageComponents = {
  ruby: VinylPage,
  memories: MemoriesPage,
  reasons: ReasonsPage,
  letter: LetterPage,
  wishes: WishesPage,
};

function VinylPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pink-detail ruby-detail" aria-label="RUBY 唱片">
      <div className="ruby-showcase">
        <div className="ruby-cover-art">
          <img
            className="ruby-cover-image"
            src="/ruby-jennie-cover.png"
            alt="JENNIE《Ruby》专辑封面"
          />
        </div>
        <div className="ruby-floral-border" aria-hidden="true">
          <img className="ruby-flower ruby-flower-side ruby-flower-side-top" src="/ruby-flower-side.png" alt="" />
          <img className="ruby-flower ruby-flower-side ruby-flower-side-middle" src="/ruby-flower-corner.png" alt="" />
          <img className="ruby-flower ruby-flower-side ruby-flower-side-bottom" src="/ruby-flower-bottom.png" alt="" />
          <img className="ruby-flower ruby-flower-edge ruby-flower-edge-left" src="/ruby-flower-corner.png" alt="" />
          <img className="ruby-flower ruby-flower-edge ruby-flower-edge-center" src="/ruby-flower-side.png" alt="" />
          <img className="ruby-flower ruby-flower-edge ruby-flower-edge-right" src="/ruby-flower-corner.png" alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-one" src="/ruby-flower-accent.png" alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-two" src="/ruby-flower-bottom.png" alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-three" src="/ruby-flower-corner.png" alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-four" src="/ruby-flower-accent.png" alt="" />
        </div>
        <div className="ruby-record-player">
          <img className="ruby-wordmark" src="/ruby-wordmark.png" alt="Ruby" />
          <a
            className={`vinyl-button${isPlaying ? ' is-playing' : ''}`}
            href="https://music.163.com/#/search/m/?s=JENNIE%20Ruby&type=1"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsPlaying(true)}
            aria-label="在网易云音乐搜索并播放 JENNIE 的 Ruby"
            data-testid="vinyl-link"
          >
            <span className="vinyl-disc" aria-hidden="true">
              <span className="vinyl-label">
                <span className="vinyl-label-ring" />
                <span className="vinyl-center-hole" />
              </span>
            </span>
          </a>
          <p className="vinyl-hint">Click</p>
          <h2 className="detail-title ruby-birthday-title">Happy Birthday</h2>
        </div>
      </div>
    </section>
  );
}

function MemoriesPage() {
  return (
    <section className="pink-detail memories-detail" aria-labelledby="memories-heading">
      <p className="section-kicker">OUR LITTLE ARCHIVE · 01—03</p>
      <h2 className="detail-title" id="memories-heading">回忆</h2>
      <p className="section-intro">和你幸福的每一帧都难忘。</p>
      <div className="memory-grid">
        {['最喜欢的一张合照', '一个特别的日子', '只有我们懂的瞬间'].map((caption, index) => (
          <article className={`memory-card memory-card-${index + 1}`} key={caption}>
            <div className="memory-photo" aria-label={`回忆照片位置 ${index + 1}`}>
              <span aria-hidden="true">＋</span>
              <small>照片位置 0{index + 1}</small>
            </div>
            <h3>{caption}</h3>
            <p>等你发照片和一句小注释</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ReasonsPage() {
  const [reasonIndex, setReasonIndex] = useState(0);

  return (
    <section className="pink-detail reasons-detail" aria-labelledby="reasons-heading">
      <p className="section-kicker">A LOVE NOTE IN 18 PARTS</p>
      <h2 className="detail-title" id="reasons-heading">十八</h2>
      <p className="section-intro">世界不过是一个蓝色的蛋糕，我们会和同样柔软的人越过时间，以火焰相见。</p>
      <div className="reason-viewer" aria-live="polite">
        <span className="reason-viewer-number">{String(reasonIndex + 1).padStart(2, '0')}</span>
        <p className="reason-card-copy">{reasons[reasonIndex]}</p>
        <span className="reason-card-sparkle" aria-hidden="true">✦</span>
      </div>
      <div className="reason-progress" aria-label={`第 ${reasonIndex + 1} 条，共 18 条`}>
        <span className="reason-progress-count">{String(reasonIndex + 1).padStart(2, '0')}</span>
        <span className="reason-progress-track" aria-hidden="true">
          <span style={{ width: `${((reasonIndex + 1) / reasons.length) * 100}%` }} />
        </span>
        <span className="reason-progress-total">18</span>
      </div>
      <div className="reason-controls">
        <button
          type="button"
          onClick={() => setReasonIndex((index) => Math.max(0, index - 1))}
          disabled={reasonIndex === 0}
          aria-label="上一条理由"
        >
          <span aria-hidden="true">←</span>
          上一条
        </button>
        <button
          type="button"
          onClick={() => setReasonIndex((index) => Math.min(reasons.length - 1, index + 1))}
          disabled={reasonIndex === reasons.length - 1}
          aria-label="下一条理由"
        >
          下一条
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}

function LetterPage() {
  const [envelopeSide, setEnvelopeSide] = useState('front');

  return (
    <section className="pink-detail letter-detail" aria-labelledby="letter-heading">
      <p className="section-kicker">SEALED WITH LOVE</p>
      <h2 className="detail-title" id="letter-heading">信笺</h2>
      {envelopeSide !== 'open' ? (
        <button
          className={`letter-envelope${envelopeSide === 'back' ? ' is-back' : ''}`}
          type="button"
          onClick={() => setEnvelopeSide((side) => (side === 'front' ? 'back' : 'open'))}
          aria-label={envelopeSide === 'front' ? '翻到信封背面' : '打开信封'}
        >
          <span className="envelope-content">
            {envelopeSide === 'front' ? (
              <>
                <svg className="envelope-fold-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path className="envelope-fold-shadow" d="M 0 0 L 50 72 L 100 0" />
                  <path className="envelope-fold-crease" d="M 0 0 L 50 72 L 100 0" />
                  <path className="envelope-fold-highlight" d="M 0 1 L 49.5 70.5 L 100 1" />
                </svg>
                <span className="envelope-copy">Happy Birthday</span>
                <img className="envelope-wax-seal" src="/cat-wax-seal.png?v=5" alt="" />
                <span className="envelope-hint">Click</span>
              </>
            ) : (
              <>
                <span className="envelope-postmark" aria-hidden="true">♡　✦　♡</span>
                <span className="envelope-back-stamp" aria-hidden="true">十八岁<br />生日快乐</span>
                <img className="envelope-back-seal" src="/cat-wax-seal.png?v=5" alt="" />
                <span className="envelope-hint">点击打开信封</span>
              </>
            )}
          </span>
        </button>
      ) : (
        <article className="letter-paper">
          <span className="letter-flower" aria-hidden="true">✿</span>
          <p>亲爱的周芯铃：</p>
          <p>时间过得好快！已经认识芯芯宝贝九个月24天啦(*^▽^*)</p>
          <p>很开心认识宝宝，很高兴和宝宝度过第一个生日，很荣幸见证了宝宝的十八岁呀！希望我的宝贝midterm考的顺利！我也没想到你居然是在midterm中紧凑凑度过十八岁这个重要节点的qaq，希望宝宝不要因为紧张的学业影响心情～</p>
          <p>我想了好多祝福，但是我怕有猪妞看不懂太复杂的中文，所以文绉绉的话我就不多说啦，么么～</p>
          <p>最后祝福语：对惹，我有句话送给宝宝——人是在决定幸福的时候，才开始幸福的。希望宝宝永远都有再开始的勇气，不管是人还是事，我永远相信宝宝有能力处理好。希望宝宝在人生下一阶段的新篇章，谱写独属于你自己的精彩故事。</p>
          <p>生日快乐呀，芯芯宝贝！</p>
          <p className="letter-signoff">永远为你加油的人</p>
        </article>
      )}
    </section>
  );
}

function BirthdayCake({ isLit }) {
  return (
    <div className={`birthday-cake${isLit ? ' is-lit' : ''}`} aria-hidden="true">
      <div className="cake-candles">
        {Array.from({ length: 5 }, (_, index) => (
          <span className={`cake-candle cake-candle-${index + 1}`} key={index}>
            <i />
          </span>
        ))}
      </div>
      <div className="cake-tier cake-tier-upper">
        <span className="cake-age-number">18</span>
        <span className="cake-pearl cake-pearl-one" />
        <span className="cake-pearl cake-pearl-two" />
        <span className="cake-pearl cake-pearl-three" />
      </div>
      <div className="cake-tier cake-tier-lower">
        <span className="cake-flower cake-flower-one">✿</span>
        <span className="cake-flower cake-flower-two">✿</span>
        <span className="cake-flower cake-flower-three">✿</span>
        <span className="cake-pearl cake-pearl-four" />
        <span className="cake-pearl cake-pearl-five" />
        <span className="cake-pearl cake-pearl-six" />
      </div>
    </div>
  );
}

function WishesPage() {
  const [wishCount, setWishCount] = useState(0);
  const wishes = [
    '生日快乐呀！今天你最大。',
    '祝你生日快乐，天天开心！',
    '新的一岁也要好好快乐。',
    '祝你每天都有好心情。',
    '祝你所有愿望都能实现。',
    '今天一定要开心到爆！',
    '生日快乐，愿你越来越好。',
    '希望你以后每天都顺顺利利。',
    '愿你的生活一直有惊喜。',
    '祝你吃好喝好玩好睡好。',
    '新的一岁继续闪闪发光吧。',
    '愿你每天都有值得开心的事。',
    '祝你一直被好运追着跑。',
    '希望你的烦恼越来越少。',
    '愿你想要的都慢慢得到。',
    '生日快乐，愿你无忧无虑。',
    '希望你一直保持现在的快乐。',
    '愿你未来每天都比今天开心。',
    '祝你平安顺利，事事如意。',
    '愿你所有小愿望都成真。',
    '今天快乐，明天也要快乐。',
    '祝你以后遇到的都是好事。',
    '愿你永远有期待，也有惊喜。',
    '希望你每天都能笑得很开心。',
    '祝你新的一岁好运连连。',
    '愿你想去的地方都能去。',
    '祝你喜欢的事情一直陪着你。',
    '愿你未来的日子越来越精彩。',
    '希望你永远做自己喜欢的人。',
    '祝你生活有趣，日子有盼头。',
    '愿你所有努力都有好结果。',
    '祝你每天都能睡个好觉。',
    '希望你永远开心，偶尔发疯。',
    '愿你烦恼少一点，快乐多一点。',
    '祝你每天都顺心顺意。',
    '希望你以后越来越幸运。',
    '愿你身边一直有真心的人。',
    '祝你生日快乐，快乐不止今天。',
    '愿你的生活永远热热闹闹。',
    '希望你一直有爱，也有自由。',
    '祝你新的一岁继续可可爱爱。',
    '愿你以后想做什么就去做。',
    '希望你永远有很多值得期待的事。',
    '祝你每一年都比上一年开心。',
    '愿你以后遇到的人都很好。',
    '希望你永远有花不完的快乐。',
    '祝你好运常在，快乐常在。',
    '愿你每天都有小惊喜。',
    '希望你的每一天都值得纪念。',
    '生日快乐宝宝。',
    '很幸运我的青春尾巴里有你。',
    '谢谢你一直陪着我。',
    '我们以后也一直这么好',
    '以后也要一起疯一起笑。',
    '愿我们的友情一直不掉线。',
    '希望以后还能一起过很多个生日。',
    '你的生日当然不能少了我的祝福。',
    '祝你开心，也祝我们一直开心。',
    '希望以后还有好多好多故事。',
    '认识你真的很幸运。',
    '以后也要一直做我的好朋友',
    '希望我们以后还能一起干很多事情',
    '愿我们的友情一直保持原来的样子。',
    '遇到你真的很开心。',
    '谢谢你出现在我的生活里。',
    '希望我们以后有很多合照。',
    '以后不管多大，都要一起开心。',
    '愿我们一直有话聊、有事一起疯。',
    '希望以后每次生日都能收到我的祝福。',
    '友情不一定天天见，但我一定一直在。',
    '祝猪妞生日快乐。',
    '今天是你的生日，所以暂时不骂你。',
    '生日快乐！今天先放过你。',
    '恭喜你又成功长大一岁。',
    '又长大一岁，但还是笨蛋。',
    '生日快乐，十八岁的芯芯。',
    '今天只许开心。',
    '今天的任务只有一个：开心哦',
    '生日快乐，蛋糕记得给我留一口。',
    '礼物送不到，惊喜必须有。',
    '祝你生日快乐，顺便请我吃蛋糕。',
    '今天你负责过生日，我负责蹭好运。',
    '祝你愿望成真心想事成',
    '新的一岁，请继续保持你的猪妞人设。',
    '希望你多一点幸运。',
    '祝你以后少熬夜。',
    '希望你的快乐永远大于烦恼。',
    '生日快乐🎂',
    '希望你以后少点倒霉',
    '祝你天天好运🍀。',
    '愿你每天都有好吃的、好玩的和好心情。',
    '希望你的快乐永远不会过期。',
    '愿你一直做个快乐小孩。',
    '希望你以后想起今天，还是会觉得很开心。',
    '愿你每次回头，都发现自己走了很远。',
    '希望你的未来一直有惊喜。',
    '祝你幸运，自由。',
    '不管以后多少岁，都要记得开心。',
    '生日快乐宝宝 周芯铃要天天开心',
  ];

  return (
    <section
      className={`pink-detail wishes-detail${wishCount > 0 ? ' is-candlelit' : ''}`}
      aria-label="生日祝福页面"
    >
      <div className="wish-meteors" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span className={`wish-meteor wish-meteor-${index + 1}`} key={index} />
        ))}
      </div>
      <div className="wish-candlelight" aria-hidden="true" />
      <p className="section-kicker">MAKE A WISH · 18</p>
      <BirthdayCake isLit={wishCount > 0} />
      <p className="wish-copy" aria-live="polite">
        {wishCount ? wishes[wishCount - 1] : '点击点亮一份祝福，收下今天的小小好运。'}
      </p>
      <button
        className="wish-button"
        type="button"
        onClick={() => setWishCount((count) => Math.min(wishes.length, count + 1))}
        disabled={wishCount === wishes.length}
        aria-label={wishCount === wishes.length
          ? `99 颗星星已全部点亮`
          : wishCount
            ? `点亮下一份祝福 × ${wishCount}`
            : '点亮一份祝福'}
      >
        {wishCount === wishes.length
          ? '99 颗星星已全部点亮'
          : wishCount
            ? `再点亮一颗 × ${wishCount}`
            : '点亮一份祝福'}
        {wishCount < wishes.length && <span aria-hidden="true">✦</span>}
      </button>
    </section>
  );
}

function App() {
  const [activePage, setActivePage] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeBurst, setLikeBurst] = useState(0);
  const ActivePage = pageComponents[activePage];

  return (
    <main className="pink-app">
      <div className="pink-sparkles" aria-hidden="true">
        <span>✦</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
      </div>
      {activePage ? (
        <div className={`pink-page-shell${activePage === 'ruby' ? ' ruby-page-shell' : ''}${activePage === 'letter' ? ' letter-page-shell' : ''}${activePage === 'wishes' ? ' wishes-page-shell' : ''}`}>
          <button
            className={`back-home${activePage === 'ruby' ? ' ruby-back-home' : ''}`}
            type="button"
            onClick={() => setActivePage(null)}
          >
            {activePage === 'ruby'
              ? <span className="ruby-back-home-flower" aria-hidden="true">✿</span>
              : <span className="back-home-star" aria-hidden="true">✦</span>}
            返回首页
          </button>
          <ActivePage />
        </div>
      ) : (
        <section className="home-content" aria-labelledby="home-heading">
          <div className="cover-garden" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => (
              <span
                className={`falling-petal falling-petal-${index + 1}`}
                key={index}
              />
            ))}
            <span className="wind-chime">
              <img className="wind-chime-art" src="/wind-chime-complete.png" alt="" />
            </span>
          </div>
          <div className="home-lace-frame" aria-hidden="true">
            <span className="lace-edge lace-edge-top" />
            <span className="lace-edge lace-edge-right" />
            <span className="lace-edge lace-edge-bottom" />
            <span className="lace-edge lace-edge-left" />
            <span className="pearl-strand pearl-strand-left" />
            <span className="pearl-strand pearl-strand-right" />
            <span className="lace-rose lace-rose-upper">✿</span>
            <span className="lace-rose lace-rose-lower">✿</span>
            <span className="coquette-bow home-bow-top"><i /></span>
            <span className="coquette-bow home-bow-left"><i /></span>
            <span className="coquette-bow home-bow-right"><i /></span>
          </div>
          <div className="mascot-row">
            <img className="mascot-sticker" src="/pochacco-sticker.png" alt="" />
            <span className="cover-age" aria-label="十八岁">
              <svg className="cover-ribbon-age" viewBox="0 0 390 250" aria-hidden="true">
                <defs>
                  <linearGradient id="satin-ribbon" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f8d8e0" />
                    <stop offset=".2" stopColor="#fffafd" />
                    <stop offset=".42" stopColor="#e8a4b8" />
                    <stop offset=".57" stopColor="#fff5f7" />
                    <stop offset=".78" stopColor="#df8fa8" />
                    <stop offset="1" stopColor="#f7dce3" />
                  </linearGradient>
                  <linearGradient id="satin-ribbon-highlight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity=".9" />
                    <stop offset=".48" stopColor="#fff" stopOpacity=".12" />
                    <stop offset=".78" stopColor="#a84d6e" stopOpacity=".18" />
                    <stop offset="1" stopColor="#fff" stopOpacity=".45" />
                  </linearGradient>
                  <linearGradient id="satin-ribbon-fold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#bd6c86" stopOpacity=".16" />
                    <stop offset=".46" stopColor="#fff" stopOpacity=".82" />
                    <stop offset="1" stopColor="#bd6c86" stopOpacity=".2" />
                  </linearGradient>
                </defs>
                <g className="ribbon-age-shadow" fill="none" stroke="#8d4960" strokeOpacity=".18" strokeWidth="23" strokeLinecap="butt" strokeLinejoin="round">
                  <path className="ribbon-age-one" d="M80 72 111 42 132 42 132 200" />
                  <path d="M247 111C216 104 199 91 200 69 201 47 220 34 248 34 277 34 295 48 296 69 297 90 277 103 247 111" />
                  <path d="M247 111C278 119 299 137 299 161 299 188 279 205 249 205 218 205 197 188 197 163 197 139 217 120 247 111" />
                </g>
                <g fill="none" stroke="rgba(255,255,255,.58)" strokeWidth="23" strokeLinecap="butt" strokeLinejoin="round">
                  <path className="ribbon-age-one" d="M80 72 111 42 132 42 132 200" />
                  <path d="M247 111C216 104 199 91 200 69 201 47 220 34 248 34 277 34 295 48 296 69 297 90 277 103 247 111" />
                  <path d="M247 111C278 119 299 137 299 161 299 188 279 205 249 205 218 205 197 188 197 163 197 139 217 120 247 111" />
                </g>
                <g fill="none" stroke="url(#satin-ribbon)" strokeWidth="27" strokeLinecap="butt" strokeLinejoin="round">
                  <path className="ribbon-age-one" d="M80 72 111 42 132 42 132 200" />
                  <path d="M247 111C216 104 199 91 200 69 201 47 220 34 248 34 277 34 295 48 296 69 297 90 277 103 247 111" />
                  <path d="M247 111C278 119 299 137 299 161 299 188 279 205 249 205 218 205 197 188 197 163 197 139 217 120 247 111" />
                </g>
                <g className="ribbon-age-crossing" fill="none" stroke="url(#satin-ribbon)" strokeWidth="21" strokeLinecap="butt" strokeLinejoin="round">
                  <path d="M229 101C235 105 242 108 249 111 256 114 263 118 269 123" />
                </g>
                <g className="ribbon-age-folds" fill="none" stroke="url(#satin-ribbon-fold)" strokeLinecap="round">
                  <path strokeWidth="9" d="M89 63 111 42 132 42 132 78M132 151 132 190" />
                  <path strokeWidth="7" d="M222 45C231 39 240 37 250 38M290 151C289 167 280 179 267 186" />
                  <path strokeWidth="9" d="M218 184C226 195 238 200 250 200M246 111C255 114 262 118 269 123" />
                </g>
                <g fill="none" stroke="url(#satin-ribbon-highlight)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M83 68 111 45 128 45 128 194" />
                  <path d="M205 68C207 49 224 39 248 39 272 39 289 51 290 69 291 84 278 96 260 103M202 162C202 141 221 124 239 117M203 164C203 185 221 199 245 201" />
                </g>
                <g fill="none" stroke="#fff" strokeOpacity=".54" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M83 68 111 44M138 52 138 190" />
                  <path d="M218 49C228 42 239 41 248 42M289 154C286 168 277 178 266 184M220 184C228 193 237 196 246 197" />
                </g>
                <path className="ribbon-age-tail ribbon-age-tail-two" d="M238 204 261 199 285 236 258 229Z" />
                <path className="ribbon-age-tail-fold ribbon-age-tail-fold-two" d="M238 204 251 207 285 236 258 229Z" />
              </svg>
              <span className="cover-eight">
                <span className="mascot-like-area">
                  <button
                    className={`mascot-heart${isLiked ? ' is-liked' : ''}`}
                    type="button"
                    onClick={() => {
                      const nextIsLiked = !isLiked;
                      setIsLiked(nextIsLiked);
                      if (nextIsLiked) setLikeBurst((burst) => burst + 1);
                    }}
                    aria-label={isLiked ? '取消喜欢' : '点赞帕恰狗'}
                    aria-pressed={isLiked}
                    title={isLiked ? '取消喜欢' : '喜欢'}
                    data-testid="mascot-like-button"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.8 4.9a5.5 5.5 0 0 0-7.8 0L12 5.95 10.95 4.9a5.5 5.5 0 0 0-7.8 7.78l1.06 1.06L12 21.5l7.79-7.76 1.06-1.06a5.5 5.5 0 0 0-.05-7.78Z" />
                    </svg>
                  </button>
                  {likeBurst > 0 && (
                    <span className="like-burst" key={likeBurst}>
                      {Array.from({ length: 7 }, (_, index) => (
                        <span key={index} className={`burst-heart burst-heart-${index + 1}`}>♥</span>
                      ))}
                    </span>
                  )}
                </span>
              </span>
            </span>
          </div>
          <div className="cover-heading">
            <p className="home-eyebrow">THE BIRTHDAY EDITION <span>·</span> NO. 18</p>
            <div className="cover-name-ribbon">
              <h1 className="home-title" id="home-heading">To Janice</h1>
              <span className="title-ribbon" aria-hidden="true">
                <svg className="title-ribbon-bow" viewBox="0 0 64 58">
                  <defs>
                    <linearGradient id="title-bow-satin" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#fffafd" />
                      <stop offset=".28" stopColor="#f7d4df" />
                      <stop offset=".55" stopColor="#e99bb2" />
                      <stop offset=".78" stopColor="#f6dce4" />
                      <stop offset="1" stopColor="#d9839e" />
                    </linearGradient>
                    <linearGradient id="title-bow-shine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#fff" stopOpacity=".82" />
                      <stop offset=".48" stopColor="#fff" stopOpacity=".12" />
                      <stop offset="1" stopColor="#fff" stopOpacity=".7" />
                    </linearGradient>
                  </defs>
                  <path d="M29 15C22 13 15 7 10 8 5 9 7 16 13 19 18 22 24 19 29 15ZM26 15C21 14 15 10 11 10 9 11 10 14 14 17 18 19 23 17 26 15ZM35 15C42 13 49 7 54 8 59 9 57 16 51 19 46 22 40 19 35 15ZM38 15C43 14 49 10 53 10 55 11 54 14 50 17 46 19 41 17 38 15Z"
                    fill="url(#title-bow-satin)" fillRule="evenodd" stroke="#d887a0" strokeWidth="1" />
                  <path d="M29 19C28 27 27 37 28 52"
                    fill="none" stroke="#cf7893" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M29 19C28 27 27 37 28 52"
                    fill="none" stroke="url(#title-bow-satin)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M35 19C36 27 37 37 36 52"
                    fill="none" stroke="#cf7893" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M35 19C36 27 37 37 36 52"
                    fill="none" stroke="url(#title-bow-satin)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M27 28C26 35 27 43 27 48M37 28C38 35 37 43 37 48"
                    fill="none" stroke="url(#title-bow-shine)" strokeWidth=".8" strokeLinecap="round" />
                  <path d="M29 13C27 10 27 7 30 6 33 5 35 8 33 11L31 14M35 13C37 10 37 7 34 6"
                    fill="none" stroke="url(#title-bow-satin)" strokeWidth="4.5" strokeLinecap="round" />
                  <ellipse cx="32" cy="20" rx="4" ry="3.5" fill="url(#title-bow-satin)" stroke="#fff" strokeOpacity=".8" strokeWidth=".8" />
                  <path d="M30 19.5Q32 18 34 19.5" fill="none" stroke="#fff" strokeOpacity=".85" strokeWidth=".8" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <p className="cover-date">
              <span className="cover-date-label">THE DAY</span>
              <time dateTime="--10-21">1021</time>
              <span className="cover-date-note">芯芯的生日</span>
              <span className="cover-date-sparkle" aria-hidden="true">✦</span>
            </p>
          </div>
          <div className="contents-heading">
            <span>关于芯芯，正在珍藏</span>
            <span className="contents-rule" />
          </div>
          <div className="home-menu">
            {Object.entries(pages).map(([id, page], index) => (
              <button
                className={`home-menu-item menu-item-${index + 1}`}
                key={id}
                type="button"
                onClick={() => setActivePage(id)}
              >
                <span className="coquette-bow menu-bow" aria-hidden="true"><i /></span>
                <span className="menu-number">0{index + 1}</span>
                <span className="menu-label">{page.label}</span>
                <span className="menu-note">{page.note}</span>
                <img className="menu-sticker" src={page.sticker} alt="" />
              </button>
            ))}
          </div>
          <button className="ruby-feature" type="button" onClick={() => setActivePage('ruby')}>
            <span className="ruby-mini-disc" aria-hidden="true"><span /></span>
            <span className="ruby-feature-copy">
              <small>When I take it all, I know I love me more.</small>
              <strong>RUBY</strong>
            </span>
            <span className="ruby-feature-arrow" aria-hidden="true">↗</span>
          </button>
        </section>
      )}
    </main>
  );
}

export default App;
