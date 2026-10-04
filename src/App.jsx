import React, { useEffect, useRef, useState } from 'react';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

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
  memories: { label: '和你', note: '和你幸福的每一帧都难忘', sticker: asset('pochacco-ruby.png') },
  reasons: { label: '十八', note: '世界不过是一个蓝色的蛋糕，我们会和同样柔软的人越过时间，以火焰相见。', sticker: asset('pochacco-reasons.png') },
  letter: { label: '信笺', note: '铃兰的花语是幸福归来', sticker: asset('pochacco-letter.png') },
  wishes: { label: '祝福', note: '愿岁岁年年，你都被温柔与欢喜拥抱', sticker: asset('pochacco-wishes-pillow-cutout.png') },
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
            src={asset('ruby-jennie-cover.png')}
            alt="JENNIE《Ruby》专辑封面"
          />
        </div>
        <div className="ruby-floral-border" aria-hidden="true">
          <img className="ruby-flower ruby-flower-side ruby-flower-side-top" src={asset('ruby-flower-side.png')} alt="" />
          <img className="ruby-flower ruby-flower-side ruby-flower-side-middle" src={asset('ruby-flower-corner.png')} alt="" />
          <img className="ruby-flower ruby-flower-side ruby-flower-side-bottom" src={asset('ruby-flower-bottom.png')} alt="" />
          <img className="ruby-flower ruby-flower-edge ruby-flower-edge-left" src={asset('ruby-flower-corner.png')} alt="" />
          <img className="ruby-flower ruby-flower-edge ruby-flower-edge-center" src={asset('ruby-flower-side.png')} alt="" />
          <img className="ruby-flower ruby-flower-edge ruby-flower-edge-right" src={asset('ruby-flower-corner.png')} alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-one" src={asset('ruby-flower-accent.png')} alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-two" src={asset('ruby-flower-bottom.png')} alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-three" src={asset('ruby-flower-corner.png')} alt="" />
          <img className="ruby-flower ruby-flower-fill ruby-flower-fill-four" src={asset('ruby-flower-accent.png')} alt="" />
        </div>
        <div className="ruby-record-player">
          <img className="ruby-wordmark" src={asset('ruby-wordmark.png')} alt="Ruby" />
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
  const [previewCard, setPreviewCard] = useState(null);
  const memoryCards = [
    { src: asset('memory-double-crown.png'), alt: '双人冠名卡' },
    { src: asset('memory-invitation.png'), alt: '邀请函' },
    { src: asset('memory-birthday-letter.png'), alt: '生日信' },
  ];

  useEffect(() => {
    if (!previewCard) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setPreviewCard(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewCard]);

  return (
    <section className="pink-detail memories-detail" aria-labelledby="memories-heading">
      <img className="memory-cd-frame-art" src={asset('memory-gothic-frame.png')} alt="" aria-hidden="true" />
      <div className="memory-heading">
        <h2 className="detail-title" id="memories-heading">和你</h2>
        <p className="section-intro">和你幸福的每一帧都难忘。</p>
      </div>
      <div className="memory-grid">
        {memoryCards.map((card, index) => (
          <article className={`memory-card memory-card-${index + 1}`} key={card.src}>
            <button
              className="memory-card-trigger"
              type="button"
              onClick={() => setPreviewCard(card)}
              aria-label={`放大预览：${card.alt}`}
            >
              <img className="memory-card-image" src={card.src} alt={card.alt} />
            </button>
          </article>
        ))}
      </div>
      {previewCard && (
        <div
          className="memory-preview"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewCard.alt}图片预览`}
          onClick={(event) => {
            if (event.target === event.currentTarget) setPreviewCard(null);
          }}
        >
          <button
            className="memory-preview-close"
            type="button"
            onClick={() => setPreviewCard(null)}
            aria-label="关闭图片预览"
          >
            ×
          </button>
          <img className="memory-preview-image" src={previewCard.src} alt={previewCard.alt} />
        </div>
      )}
    </section>
  );
}

function ReasonsPage() {
  const [reasonIndex, setReasonIndex] = useState(0);

  return (
    <section className="pink-detail reasons-detail" aria-labelledby="reasons-heading">
      <div className="reasons-layout">
        <div className="reasons-avatar-frame">
          <img className="reasons-avatar" src={asset('reasons-avatar.jpg')} alt="粉色长发女孩头像" />
          <img className="reasons-avatar-ornament" src={asset('reasons-avatar-frame.png')} alt="" aria-hidden="true" />
        </div>
        <div className="reasons-content">
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
        </div>
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
                <img className="envelope-wax-seal" src={`${asset('cat-wax-seal.png')}?v=5`} alt="" />
                <span className="envelope-hint">Click</span>
              </>
            ) : (
              <>
                <span className="envelope-postmark" aria-hidden="true">♡　✦　♡</span>
                <span className="envelope-back-stamp" aria-hidden="true">十八岁<br />生日快乐</span>
                <img className="envelope-back-seal" src={`${asset('cat-wax-seal.png')}?v=5`} alt="" />
                <span className="envelope-hint">点击打开信封</span>
              </>
            )}
          </span>
        </button>
      ) : (
        <article className="letter-paper">
          <span className="letter-flower" aria-hidden="true">✿</span>
          <p>最爱的芯芯宝贝：</p>
          <p>时间过得好快！已经认识芯芯宝贝九个月24天啦(*^▽^*)</p>
          <p>很开心认识宝宝，很高兴和宝宝度过第一个生日，很荣幸见证了宝宝的十八岁呀！希望我的宝贝midterm考的顺利！我也没想到你居然是在midterm中紧凑凑度过十八岁这个重要节点的qaq，希望宝宝不要因为紧张的学业影响心情～</p>
          <p>我想了好多祝福，但是我怕有猪妞看不懂太复杂的中文，所以文绉绉的话我就不多说啦，么么～</p>
          <p>最后祝福语：对惹，我有句话送给宝宝 人是在决定幸福的时候，才开始幸福的。希望宝宝永远都有再开始的勇气，不管是人还是事，我永远相信宝宝有能力处理好。希望宝宝在人生下一阶段的新篇章，谱写独属于你的精彩故事。</p>
          <p>生日快乐呀，芯芯宝贝！</p>
          <p className="letter-signoff">月月月色❤</p>
        </article>
      )}
    </section>
  );
}

function BirthdayCake() {
  return (
    <div className="birthday-cake" aria-hidden="true">
      <img className="birthday-cake-image" src={asset('birthday-cake-cutout-hd.png')} alt="" />
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
      <img className="wishes-cloud-overlay" src={asset('wishes-cloud-overlay.png')} alt="" aria-hidden="true" />
      <div className="wish-meteors" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span className={`wish-meteor wish-meteor-${index + 1}`} key={index} />
        ))}
      </div>
      <div className="wish-candlelight" aria-hidden="true" />
      <p className="section-kicker">MAKE A WISH · 18</p>
      <BirthdayCake />
      <p className={`wish-copy${wishCount === 0 ? ' wish-copy-prompt' : ''}`} aria-live="polite">
        {wishCount ? wishes[wishCount - 1] : 'Click'}
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
  const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] = useState(false);
  const [backgroundMusicError, setBackgroundMusicError] = useState(false);
  const backgroundMusicRef = useRef(null);
  const backgroundMusicRequestRef = useRef(0);
  const ActivePage = pageComponents[activePage];

  const toggleBackgroundMusic = () => {
    const audio = backgroundMusicRef.current;
    if (!audio) return;

    if (!audio.paused) {
      backgroundMusicRequestRef.current += 1;
      audio.pause();
      setIsBackgroundMusicPlaying(false);
      return;
    }

    const request = ++backgroundMusicRequestRef.current;
    audio.volume = 0.28;
    setIsBackgroundMusicPlaying(true);
    setBackgroundMusicError(false);
    try {
      Promise.resolve(audio.play()).then(() => {
        if (backgroundMusicRequestRef.current === request && !audio.paused) {
          setIsBackgroundMusicPlaying(true);
        }
      }).catch(() => {
        if (backgroundMusicRequestRef.current === request) {
          setIsBackgroundMusicPlaying(false);
          setBackgroundMusicError(true);
        }
      });
    } catch {
      if (backgroundMusicRequestRef.current === request) {
        setIsBackgroundMusicPlaying(false);
        setBackgroundMusicError(true);
      }
    }
  };

  return (
    <main
      className="pink-app"
      style={{
        '--outer-page-background': `url("${asset('outer-page-background.png')}")`,
        '--home-background': `url("${asset('home-background.png')}")`,
        '--letter-stars-background': `url("${asset('letter-stars.png')}")`,
      }}
    >
      <audio
        ref={backgroundMusicRef}
        className="background-music-audio"
        src={asset('trust-me-background.mp3')}
        loop
        preload="auto"
        onError={() => setBackgroundMusicError(true)}
        onPlay={() => {
          setIsBackgroundMusicPlaying(true);
          setBackgroundMusicError(false);
        }}
        onPause={() => setIsBackgroundMusicPlaying(false)}
      />
      <button
        className={`background-music-toggle${isBackgroundMusicPlaying ? ' is-playing' : ''}`}
        type="button"
        onClick={toggleBackgroundMusic}
        aria-label={isBackgroundMusicPlaying ? '暂停背景音乐' : '播放背景音乐'}
        aria-pressed={isBackgroundMusicPlaying}
      >
        <span className="background-music-icon" aria-hidden="true">{isBackgroundMusicPlaying ? '♫' : '♪'}</span>
        <span>{isBackgroundMusicPlaying ? '暂停音乐' : '播放音乐'}</span>
      </button>
      {backgroundMusicError && (
        <span className="background-music-error" role="status">自动播放受限，点击音乐按钮重试</span>
      )}
      <div className="pink-sparkles" aria-hidden="true">
        <span>✦</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
      </div>
      {activePage ? (
        <div className={`pink-page-shell${activePage === 'ruby' ? ' ruby-page-shell' : ''}${activePage === 'letter' ? ' letter-page-shell' : ''}${activePage === 'wishes' ? ' wishes-page-shell' : ''}${activePage === 'memories' ? ' memory-page-shell' : ''}`}>
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
</div>
          <div className="home-lace-frame" aria-hidden="true">
            <span className="ribbon-edge ribbon-edge-top" />
            <span className="ribbon-edge ribbon-edge-right" />
            <span className="ribbon-edge ribbon-edge-bottom" />
            <span className="ribbon-edge ribbon-edge-left" />
            <img className="frame-bow frame-bow-corner" src={asset('ribbon-corner-tl.png')} alt="" />
            <img className="frame-bow frame-bow-right" src={asset('ribbon-corner-tl-mirrored.png')} alt="" />
          </div>
          <div className="mascot-row">
            <img className="mascot-sticker" src={asset('pochacco-sticker.png')} alt="" />
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
          </div>
          <div className="cover-heading">
            <p className="home-eyebrow">THE BIRTHDAY EDITION <span>·</span> NO. 18</p>
            <div className="cover-name-ribbon">
              <h1 className="home-title" id="home-heading" aria-label="To Janice">To Janic<span className="title-final-letter">e<span className="wind-chime-flower-anchor wind-chime-photo-anchor">
                <img className="wind-chime-watermist" src={asset('wind-chime-watermist-cluster.png')} alt="" aria-hidden="true" />
              </span></span><img className="title-crown" src={asset('birthday-crown.png')} alt="" aria-hidden="true" /></h1>
              <span className="title-ribbon" aria-hidden="true">
                <img className="title-ribbon-bow" src={asset('ribbon-bow.png')} alt="" />
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
