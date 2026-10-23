// Mastrospace — behaviour

// Services shown in the scrolling ticker under the hero.
const TICKER_WORDS = ['Cleaning Services', 'Furniture Works', 'Landscaping', 'Painting'];

// The set is repeated 4x so the track is long enough for the seamless
// -50% marquee loop defined in styles.css.
function buildTicker() {
  const track = document.getElementById('marquee-track');
  if (!track) return;

  const items = [].concat(TICKER_WORDS, TICKER_WORDS, TICKER_WORDS, TICKER_WORDS);
  const svgNS = 'http://www.w3.org/2000/svg';

  items.forEach((text) => {
    const item = document.createElement('div');
    item.className = 'marquee-item';

    const label = document.createElement('span');
    label.textContent = text;

    const diamond = document.createElementNS(svgNS, 'svg');
    diamond.setAttribute('width', '14');
    diamond.setAttribute('height', '14');
    diamond.setAttribute('viewBox', '0 0 24 24');
    diamond.setAttribute('fill', '#111111');
    diamond.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M12 2l10 10-10 10L2 12z');
    diamond.appendChild(path);

    item.append(label, diamond);
    track.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', buildTicker);
