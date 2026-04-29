"use client";

import { useEffect, useRef, useState } from "react";

const avatarSampleVideo =
  "https://res.cloudinary.com/dowcybzve/video/upload/v1776868318/avatar_2_ekxnl4.mp4";

export default function Home() {
  const avatarVideoRef = useRef<HTMLVideoElement | null>(null);
  const [avatarMuted, setAvatarMuted] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [showGiftPopup, setShowGiftPopup] = useState(false);
  const [offerDismissed, setOfferDismissed] = useState(false);

  const toggleAvatarSound = () => {
    const video = avatarVideoRef.current;
    if (!video) return;
    const nextMuted = !avatarMuted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      video.play().catch(() => {});
    }
    setAvatarMuted(nextMuted);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowGiftPopup(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="topNav">
        <a href="#" className="brand">
          <span className="brandMark">LQ</span>
          <span>ListQik</span>
        </a>
        <button
          type="button"
          className="navToggle"
          aria-label="Open or close navigation menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Main navigation" className={navOpen ? "open" : ""}>
          <a href="#compare" onClick={() => setNavOpen(false)}>
            价格
          </a>
          <a href="#seller" onClick={() => setNavOpen(false)}>
            出售
          </a>
          <a href="#compare" onClick={() => setNavOpen(false)}>
            比较
          </a>
          <a href="#seller" onClick={() => setNavOpen(false)}>
            立即开始
          </a>
        </nav>
        <div className="navActions">
          <a href="#compare" className="btn btnSecondary">
            查看套餐
          </a>
          <a href="#seller" className="btn btnPrimary">
            发布你的房源
          </a>
        </div>
      </header>

      <main className="pageShell">
        <section className="hero">
          <div className="heroInner reveal">
            <div className="heroContent">
              <p className="eyebrow">现代房地产平台</p>
              <h1>更聪明地挂牌，更快速地成交，自信完成交易。</h1>
              <p className="heroCopy">
                通过高质量房源展示，触达高意向买家，并连接行动迅速的本地专家。
              </p>
              <div className="heroActions">
                <a href="#seller" className="btn btnPrimary">
                  开始挂牌
                </a>
                <a href="#compare" className="btn btnSecondary">
                  比较套餐
                </a>
              </div>
              <ul className="heroStats" aria-label="Featured metrics">
                <li>
                  <strong>24h</strong> 平均响应时间
                </li>
                <li>
                  <strong>100%</strong> 客户满意度
                </li>
                <li className="heroStatWide">
                  一次提交，无限曝光：即时发布到 750+ 房产网站，包括本地 MLS、Zillow、
                  Trulia、Realtor.com、Redfin 和 Homes.com
                </li>
                <li className="heroStatHighlight">
                  <strong>$9,000</strong> 卖家平均可节省 $9,000 佣金
                </li>
              </ul>
            </div>

            <aside className="heroAvatarCard" aria-label="AI assistant preview">
              <p className="avatarKicker">林婉晴（Lín Wǎnqíng）｜林女士（Ms. Lín）</p>
              <div className="avatarVideoWrap">
                {avatarSampleVideo ? (
                  <video
                    ref={avatarVideoRef}
                    className="avatarVideo"
                    src={avatarSampleVideo}
                    autoPlay
                    loop
                    muted={avatarMuted}
                    playsInline
                    preload="metadata"
                    onClick={toggleAvatarSound}
                    aria-label={
                      avatarMuted
                        ? "Tap to unmute video sound"
                        : "Tap to mute video sound"
                    }
                  />
                ) : (
                  <div
                    className="avatarVideo avatarPlaceholder"
                    aria-label="Video placeholder"
                  >
                    Add your video URL in `avatarSampleVideo`
                  </div>
                )}
              </div>
            </aside>
          </div>
        </section>

        <section id="compare" className="section pricing reveal">
          <div className="sectionHeading">
            <p className="sectionKicker">价格方案</p>
            <h2>选择你想要的出售方式</h2>
            <p>
              无隐藏费用或长期合约，只提供你保留更多收益所需的工具与房产支持。
            </p>
          </div>
          <p className="pricingHighlight">
            房主相比传统挂牌方式，平均可节省 $11,785。
          </p>

          <div className="pricingGrid">
            <article className="pricingCard isPopular">
              <p className="planBadge">最受欢迎</p>
              <h3>Subsonic</h3>
              <p className="planCopy">
                你所需的一切，轻松上架 MLS，按你的节奏出售房产。
              </p>
              <p className="planPrice">
                <span className="planPriceWas">$99</span> $79
              </p>
              <p className="planSub">$79 / .5%</p>
              <a href="#seller" className="btn btnPrimary wide">
                选择 Subsonic
              </a>
              <ul>
                <li>上架 MLS 和主流房产平台</li>
                <li>协助准备所有必需文件</li>
                <li>无限次修改房源信息</li>
                <li>看房与咨询统一转发</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">增长套餐</p>
              <h3>Supersonic</h3>
              <p className="planCopy">
                通过高质量内容与更强曝光，让房源更快脱颖而出。
              </p>
              <p className="planPrice">$299</p>
              <p className="planSub">$299 / .3%</p>
              <a href="#seller" className="btn btnSecondary wide">
                选择 Supersonic
              </a>
              <ul>
                <li>包含 Subsonic 全部服务</li>
                <li>专业房产摄影服务</li>
                <li>优先房源优化支持</li>
                <li>扩大社交广告覆盖</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">性能套餐</p>
              <h3>Hypersonic</h3>
              <p className="planCopy">
                为高时效、高影响力房源提供最大化曝光能力。
              </p>
              <p className="planPrice">$599</p>
              <p className="planSub">$599 / .25%</p>
              <a href="#seller" className="btn btnSecondary wide">
                选择 Hypersonic
              </a>
              <ul>
                <li>包含 Supersonic 全部服务</li>
                <li>高级排名提升</li>
                <li>卖家优先支持流程</li>
                <li>扩展营销渠道分发</li>
              </ul>
            </article>

            <article className="pricingCard">
              <p className="planBadge isDark">超值方案</p>
              <h3>全程服务</h3>
              <p className="planCopy">
                持牌经纪人全程陪伴，从上架到谈判再到顺利成交。
              </p>
              <p className="planPrice">1%</p>
              <p className="planSub">成交时 + $199 服务费</p>
              <a href="#seller" className="btn btnSecondary wide">
                联系经纪人
              </a>
              <ul>
                <li>专属持牌经纪人</li>
                <li>报价审核与谈判支持</li>
                <li>买家筛选与资质核验</li>
                <li>定价策略优化成交收益</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="seller" className="section sellerCta reveal">
          <h2>准备好自信挂牌了吗？</h2>
          <p>
            选择你的套餐，启动吸引高意向买家的挂牌策略。
          </p>
          <div className="heroActions">
            <a href="#compare" className="btn btnPrimary">
              现在以 $99 开始挂牌
            </a>
          </div>
        </section>
      </main>

      {showGiftPopup ? (
        <div
          className="giftPopupOverlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gift-popup-title"
        >
          <div className="giftPopup">
            <button
              type="button"
              className="giftPopupClose"
              aria-label="Close offer popup"
              onClick={() => {
                setShowGiftPopup(false);
                setOfferDismissed(true);
              }}
            >
              ×
            </button>
            <p className="giftPopupKicker">专属福利</p>
            <h3 id="gift-popup-title">使用优惠可获得免费礼品</h3>
            <p>今天开启挂牌，即可获得免费礼品。</p>
            <p className="giftCoupon">免费礼品将自动应用。</p>
            <a
              href="#seller"
              className="btn btnPrimary wide"
              onClick={() => {
                setShowGiftPopup(false);
                setOfferDismissed(true);
              }}
            >
              立即领取
            </a>
          </div>
        </div>
      ) : null}

      {offerDismissed && !showGiftPopup ? (
        <button
          type="button"
          className="claimOfferMini"
          onClick={() => {
            setShowGiftPopup(true);
            setOfferDismissed(false);
          }}
        >
          领取优惠
        </button>
      ) : null}

      <footer className="siteFooter">
        <div className="footerGrid">
          <div>
            <a href="#" className="brand">
              <span className="brandMark">LQ</span>
              <span>ListQik</span>
            </a>
            <p className="footerBlurb">
              快速、现代的房地产支持服务，帮助卖家精准定价、吸引合格买家并自信成交。
            </p>
          </div>

          <div>
            <h4>公司</h4>
            <a href="#seller">为什么选择 ListQik</a>
            <a href="#compare">价格方案</a>
            <a href="#seller">立即开始</a>
          </div>

          <div>
            <h4>联系</h4>
            <a href="tel:+18005551234">(800) 555-1234</a>
            <a href="mailto:hello@listqik.com">hello@listqik.com</a>
            <span>周一至周五，09:00 - 18:00</span>
          </div>
        </div>

        <div className="footerBottom">
          <p>© {new Date().getFullYear()} ListQik. 保留所有权利。</p>
          <div className="footerLegal">
            <a href="#">隐私</a>
            <a href="#">条款</a>
            <a href="#">公平住房</a>
          </div>
        </div>
      </footer>
    </>
  );
}
