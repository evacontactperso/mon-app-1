/**
 * Archives pubs Meta — page /meta retirée.
 * Conservé : MetaAd00 (grille) + MetaAd00legacy (copie rose).
 */
import type { ReactNode } from "react";
import {
  META_AD,
  META_AD_BRAND,
  META_AD_FEATURED,
} from "@/app/data/content/meta";

const { colors } = META_AD;

function AdRoot({
  children,
  bg = colors.cream,
}: {
  children: ReactNode;
  bg?: string;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ containerType: "inline-size", backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

function LogoM({ color, size = "9cqw" }: { color: string; size?: string }) {
  const L = 34;
  const R = 86;
  const top = 32;
  const bot = 88;
  const midX = 60;
  const valley = 78;
  const gap = 2.4;
  const strokeWidth = 1.35;
  const triple = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    return ([-gap, 0, gap] as const).map((offset) => (
      <line
        key={`${x1}-${y1}-${offset}`}
        x1={x1 + nx * offset}
        y1={y1 + ny * offset}
        x2={x2 + nx * offset}
        y2={y2 + ny * offset}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
      />
    ));
  };

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
      style={{ width: size, height: size }}
    >
      <rect x="10" y="10" width="100" height="100" stroke={color} strokeWidth="3" fill="none" />
      {triple(L, top, L, bot)}
      {triple(L, top, midX, valley)}
      {triple(R, top, midX, valley)}
      {triple(R, top, R, bot)}
    </svg>
  );
}

/** Layout « avant corrections » (00 · copie). */
function MetaAdFeatured({
  accent,
  glowA,
  glowB,
}: {
  accent: string;
  glowA: string;
  glowB: string;
}) {
  const { intro, learnTitle, learnItems, footerOffers, phone } =
    META_AD_FEATURED;

  return (
    <AdRoot bg={colors.cream}>
      <div
        className="pointer-events-none absolute -right-[18%] top-[-6%] h-[48%] w-[70%] rounded-full opacity-90"
        style={{
          background: `radial-gradient(circle, ${glowA} 0%, transparent 68%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[20%] bottom-[-8%] h-[42%] w-[65%] rounded-full opacity-80"
        style={{
          background: `radial-gradient(circle, ${glowB} 0%, transparent 70%)`,
        }}
        aria-hidden
      />

      <div
        className="absolute inset-0 z-[2] flex flex-col"
        style={{ padding: "8.7% 4.7% 5% 4.7%" }}
      >
        <div className="flex w-full shrink-0 justify-end">
          <img
            src="/hec-paris-wordmark.png"
            alt="HEC Paris"
            className="block bg-transparent object-contain"
            style={{
              height: "9.5cqw",
              width: "auto",
              maxWidth: "26cqw",
              background: "transparent",
            }}
          />
        </div>

        <div
          className="flex w-full shrink-0 flex-col"
          style={{ marginTop: "2cqw" }}
        >
          <p
            className="whitespace-nowrap font-[family-name:var(--font-heading)] font-extrabold tracking-tight"
            style={{
              color: colors.ink,
              fontSize: "6.2cqw",
              lineHeight: 1.02,
              margin: 0,
            }}
          >
            Votre ado travaille beaucoup…
          </p>
          <p
            className="whitespace-nowrap font-[family-name:var(--font-heading)] font-extrabold tracking-tight"
            style={{
              color: colors.ink,
              fontSize: "6.2cqw",
              lineHeight: 1.05,
              marginTop: "0.25cqw",
              marginBottom: 0,
            }}
          >
            mais manque de{" "}
            <span
              className="inline-block rounded-full font-extrabold text-white"
              style={{
                backgroundColor: accent,
                padding: "0.15cqw 1.5cqw 0.25cqw",
                fontSize: "5.7cqw",
              }}
            >
              méthode
            </span>{" "}
            ?
          </p>
        </div>

        <p
          className="shrink-0"
          style={{
            color: "#515154",
            fontSize: "3.2cqw",
            lineHeight: 1.42,
            marginTop: "2.6cqw",
            marginBottom: 0,
            maxWidth: "100%",
          }}
        >
          {intro}
        </p>

        <div
          className="flex shrink-0 flex-col"
          style={{
            marginTop: "3.2cqw",
            width: "62%",
            borderRadius: "3cqw",
            border: "1px solid rgba(226,232,240,0.85)",
            backgroundColor: "#F6F7FB",
            boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            paddingTop: "4.2cqw",
            paddingBottom: "2.8cqw",
            paddingLeft: "3cqw",
            paddingRight: "3cqw",
          }}
        >
          <p
            className="shrink-0 font-[family-name:var(--font-heading)] font-bold tracking-tight"
            style={{ color: colors.ink, fontSize: "2.8cqw" }}
          >
            {learnTitle}
          </p>
          <ul
            className="flex min-h-0 flex-col"
            style={{ marginTop: "2.4cqw", gap: "2.2cqw" }}
          >
            {learnItems.map((item) => (
              <li
                key={item}
                className="flex items-start whitespace-nowrap"
                style={{
                  color: colors.ink,
                  fontSize: "2.45cqw",
                  lineHeight: 1.3,
                  gap: "1.6cqw",
                }}
              >
                <span
                  className="mt-[0.2cqw] flex shrink-0 items-center justify-center rounded-full font-bold text-white"
                  style={{
                    width: "2.8cqw",
                    height: "2.8cqw",
                    backgroundColor: accent,
                    fontSize: "1.55cqw",
                  }}
                  aria-hidden
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex shrink-0 flex-col"
          style={{ marginTop: "2.8cqw", width: "52%", gap: "1.6cqw" }}
        >
          <p
            className="font-[family-name:var(--font-heading)] font-bold tracking-tight"
            style={{ color: accent, fontSize: "2.7cqw" }}
          >
            {footerOffers}
          </p>
          <div className="flex items-center" style={{ gap: "1.5cqw" }}>
            <span
              className="flex shrink-0 items-center justify-center rounded-full text-white"
              style={{
                width: "4.2cqw",
                height: "4.2cqw",
                backgroundColor: accent,
              }}
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{ width: "2.3cqw", height: "2.3cqw" }}
              >
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span
              className="whitespace-nowrap font-[family-name:var(--font-heading)] font-bold tracking-tight"
              style={{ color: colors.ink, fontSize: "3cqw" }}
            >
              {phone}
            </span>
          </div>
        </div>
      </div>

      <img
        src="/eva-cutout.png"
        alt="Eva — L'Atelier des Méthodes"
        className="pointer-events-none absolute z-[3] object-contain object-bottom"
        style={{
          right: "-6%",
          bottom: "0",
          height: "50%",
          width: "auto",
        }}
      />
    </AdRoot>
  );
}

/** 00 — Grille stricte 1080×1350 (version finale lab). */
export function MetaAd00() {
  const { intro, learnTitle, learnItems, footerOffers, phone } =
    META_AD_FEATURED;
  const accent = colors.pink;

  const X = (px: number) => `${(px / 1080) * 100}%`;
  const Y = (px: number) => `${(px / 1350) * 100}%`;
  const W = (px: number) => `${(px / 1080) * 100}%`;
  const H = (px: number) => `${(px / 1350) * 100}%`;
  const FS = (px: number) => `${(px / 1080) * 100}cqw`;

  const itemYs = [715, 785, 855, 925, 995] as const;

  return (
    <AdRoot bg={colors.cream}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 100% 20%, rgba(253,232,232,0.7) 0%, transparent 60%),
            linear-gradient(180deg, #FAF8F5 0%, #f7f3f0 100%)
          `,
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute z-[1] overflow-hidden"
        style={{
          left: X(660),
          top: Y(480),
          width: W(420),
          height: H(870),
        }}
      >
        <img
          src="/eva-cutout.png"
          alt=""
          className="absolute object-cover"
          style={{
            left: "18%",
            bottom: "0",
            top: "0",
            width: "auto",
            height: "105%",
            maxWidth: "none",
            objectFit: "cover",
            objectPosition: "center 8%",
            transform: "translateX(-50%)",
            filter: "drop-shadow(8px 10px 24px rgba(15,23,42,0.16))",
          }}
        />
      </div>

      <div
        className="absolute z-[2] flex items-center justify-between"
        style={{
          left: X(64),
          top: Y(64),
          width: W(952),
          height: H(48),
        }}
      >
        <div className="flex items-center" style={{ gap: FS(14) }}>
          <LogoM color={colors.ink} size={FS(44)} />
          <p
            className="font-[family-name:var(--font-heading)] font-bold tracking-tight"
            style={{
              color: colors.ink,
              fontSize: FS(24),
              margin: 0,
              lineHeight: 1,
            }}
          >
            {META_AD_BRAND}
          </p>
        </div>
        <img
          src="/hec-paris-wordmark.png"
          alt="HEC Paris"
          className="block bg-transparent object-contain object-right"
          style={{
            height: FS(80),
            width: "auto",
            maxWidth: W(340),
            background: "transparent",
          }}
        />
      </div>

      <div
        className="absolute z-[2]"
        style={{
          left: X(64),
          top: Y(172),
          width: W(952),
          height: H(140),
        }}
      >
        <p
          className="whitespace-nowrap font-[family-name:var(--font-heading)] font-bold tracking-tight"
          style={{
            color: colors.ink,
            fontSize: FS(64),
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Votre ado travaille beaucoup…
        </p>
        <p
          className="whitespace-nowrap font-[family-name:var(--font-heading)] font-bold tracking-tight"
          style={{
            color: colors.ink,
            fontSize: FS(64),
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          mais manque de{" "}
          <span
            className="inline-flex items-center justify-center rounded-full font-bold text-white"
            style={{
              backgroundColor: accent,
              height: FS(84),
              paddingLeft: FS(24),
              paddingRight: FS(24),
              paddingTop: FS(8),
              paddingBottom: FS(8),
              borderRadius: FS(42),
              fontSize: FS(58),
              verticalAlign: "middle",
            }}
          >
            méthode
          </span>
          <span style={{ marginLeft: FS(10) }}>?</span>
        </p>
      </div>

      <p
        className="absolute z-[2]"
        style={{
          left: X(64),
          top: Y(384),
          width: W(576),
          height: H(174),
          color: "#515154",
          fontSize: FS(30),
          fontWeight: 400,
          lineHeight: 1.45,
          margin: 0,
        }}
      >
        {intro}
      </p>

      <p
        className="absolute z-[2] font-[family-name:var(--font-heading)] font-bold"
        style={{
          left: X(64),
          top: Y(646),
          width: W(576),
          height: H(33),
          color: colors.ink,
          fontSize: FS(26),
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {learnTitle}
      </p>
      {learnItems.map((item, i) => (
        <div
          key={item}
          className="absolute z-[2] flex"
          style={{
            left: X(64),
            top: Y(itemYs[i]),
            width: W(576),
            height: H(32),
          }}
        >
          <span
            className="flex shrink-0 items-center justify-center rounded-full font-bold text-white"
            style={{
              width: FS(28),
              height: FS(28),
              marginTop: H(2),
              backgroundColor: accent,
              fontSize: FS(14),
            }}
            aria-hidden
          >
            ✓
          </span>
          <span
            style={{
              marginLeft: FS(18),
              color: colors.ink,
              fontSize: FS(24),
              fontWeight: 400,
              lineHeight: 1.35,
            }}
          >
            {item}
          </span>
        </div>
      ))}

      <p
        className="absolute z-[2] whitespace-nowrap font-[family-name:var(--font-heading)]"
        style={{
          left: X(64),
          top: Y(1153),
          width: W(576),
          height: H(33),
          color: accent,
          fontSize: FS(26),
          fontWeight: 600,
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {footerOffers}
      </p>

      <a
        href="tel:+33651853275"
        className="absolute z-[3] inline-flex items-center whitespace-nowrap"
        style={{
          left: X(64),
          top: Y(1214),
          height: H(72),
          gap: FS(16),
          textDecoration: "none",
        }}
      >
        <span
          className="flex shrink-0 items-center justify-center rounded-full text-white"
          style={{
            width: FS(56),
            height: FS(56),
            backgroundColor: accent,
          }}
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            style={{ width: FS(28), height: FS(28) }}
          >
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span
          className="whitespace-nowrap font-[family-name:var(--font-heading)] font-bold tracking-tight"
          style={{
            color: colors.ink,
            fontSize: FS(30),
            lineHeight: 1,
          }}
        >
          {phone}
        </span>
      </a>
    </AdRoot>
  );
}

/** 00 · copie — rose avant corrections. */
export function MetaAd00legacy() {
  return (
    <MetaAdFeatured
      accent={colors.pink}
      glowA="rgba(253,232,232,0.9)"
      glowB="rgba(243,229,245,0.75)"
    />
  );
}
