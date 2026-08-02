import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/globals.css";

type Theme = "light" | "dark";

const themeStorageKey = "portfolio-theme";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

function getBackgroundCodeImageUrls(theme: Theme) {
  const color = theme === "dark" ? "%23dbe6dc" : "%2355705b";

  return [
    `https://api.iconify.design/lucide:code-xml.svg?color=${color}`,
    `https://api.iconify.design/lucide:file-code-2.svg?color=${color}`,
    `https://api.iconify.design/lucide:terminal.svg?color=${color}`,
    `https://api.iconify.design/lucide:braces.svg?color=${color}`,
  ];
}

interface BackgroundCodeImage {
  src: string;
  top: number;
  left: number;
  size: number;
  rotate: number;
  opacity: number;
}

function createRandomBackgroundCodeImages(
  count: number,
  viewportWidth: number,
  viewportHeight: number,
  theme: Theme
) {
  const backgroundCodeImageUrls = getBackgroundCodeImageUrls(theme);
  const minGapPx = 20;
  const maxAttempts = 4000;
  const placed: BackgroundCodeImage[] = [];

  let attempts = 0;

  while (placed.length < count && attempts < maxAttempts) {
    attempts += 1;

    const size = Math.random() * 30 + 46;
    const xPaddingPercent = (size / 2 / viewportWidth) * 100;
    const yPaddingPercent = (size / 2 / viewportHeight) * 100;
    const minLeft = Math.max(2, xPaddingPercent);
    const maxLeft = Math.min(98, 100 - xPaddingPercent);
    const minTop = Math.max(2, yPaddingPercent);
    const maxTop = Math.min(98, 100 - yPaddingPercent);

    if (minLeft >= maxLeft || minTop >= maxTop) {
      break;
    }

    const left = Math.random() * (maxLeft - minLeft) + minLeft;
    const top = Math.random() * (maxTop - minTop) + minTop;

    const centerX = (left / 100) * viewportWidth;
    const centerY = (top / 100) * viewportHeight;

    const overlapsExisting = placed.some((existing) => {
      const existingCenterX = (existing.left / 100) * viewportWidth;
      const existingCenterY = (existing.top / 100) * viewportHeight;
      const dx = centerX - existingCenterX;
      const dy = centerY - existingCenterY;
      const distance = Math.hypot(dx, dy);
      const minDistance = size / 2 + existing.size / 2 + minGapPx;

      return distance < minDistance;
    });

    if (overlapsExisting) {
      continue;
    }

    placed.push({
      src: backgroundCodeImageUrls[Math.floor(Math.random() * backgroundCodeImageUrls.length)],
      top,
      left,
      size,
      rotate: Math.random() * 70 - 35,
      opacity: Math.random() * 0.06 + 0.03,
    });
  }

  return placed;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [backgroundCodeImages, setBackgroundCodeImages] = useState<BackgroundCodeImage[]>([]);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(themeStorageKey);

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

  useEffect(() => {
    const regenerate = () => {
      setBackgroundCodeImages(createRandomBackgroundCodeImages(8, window.innerWidth, window.innerHeight, theme));
    };

    regenerate();
    window.addEventListener("resize", regenerate);

    return () => {
      window.removeEventListener("resize", regenerate);
    };
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <div className={`${displayFont.variable} ${bodyFont.variable}`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio site for Jaden Edwards, a full-stack developer building clean, human-centered web experiences."
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var storedTheme=localStorage.getItem('${themeStorageKey}');var theme=storedTheme==='light'||storedTheme==='dark'?storedTheme:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=theme;}catch(error){document.documentElement.dataset.theme='light';}})();`,
          }}
        />
        <title>Jaden E. | Portfolio</title>
      </Head>

      <Layout theme={theme} onToggleTheme={handleToggleTheme}>
        <Component {...pageProps} />
      </Layout>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="relative h-full w-full">
          {backgroundCodeImages.map((image, index) => {
            return (
              <img
                key={`${image.top}-${image.left}-${index}`}
                src={image.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute"
                style={{
                  top: `${image.top}%`,
                  left: `${image.left}%`,
                  width: `${image.size}px`,
                  height: `${image.size}px`,
                  transform: `translate(-50%, -50%) rotate(${image.rotate}deg)`,
                  opacity: image.opacity,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyApp;
