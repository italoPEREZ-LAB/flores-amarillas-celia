(() => {
  'use strict';
  const $ = id => document.getElementById(id), config = window.FLOWERS;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, opening = false, typing;
  document.querySelectorAll('[data-name]').forEach(el => el.textContent = config.name);
  document.title = `${config.name} · Un universo amarillo para ti`;
  const dots = config.phrases.map(() => { const dot = document.createElement('i'); $('dots').append(dot); return dot; });
  function phrase() {
    $('quote').textContent = config.phrases[index];
    $('counter').textContent = `${String(index + 1).padStart(2,'0')} / ${String(config.phrases.length).padStart(2,'0')}`;
    dots.forEach((dot,i) => dot.classList.toggle('active', i === index));
  }
  phrase();
  function whatsapp() {
    const message = $('message').value.trim() || config.defaultMessage;
    $('whatsapp').href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
  $('message').addEventListener('input', whatsapp); whatsapp();
  function reveal() {
    $('welcome').hidden = true; $('garden').hidden = false;
    document.body.classList.add('opened');
    $('garden-title').focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'});
    // The full sentence is available to assistive technology during the visual reveal.
    $('reveal-line').setAttribute('aria-label', config.opening);
    if (reduced.matches) { $('reveal-line').textContent = config.opening; return; }
    let letter = 0; $('reveal-line').textContent = '';
    typing = setInterval(() => {
      $('reveal-line').textContent = config.opening.slice(0, ++letter);
      if (letter >= config.opening.length) clearInterval(typing);
    }, 28);
  }
  $('enter').addEventListener('click', () => {
    if (opening) return; opening = true; $('enter').disabled = true;
    if (reduced.matches) { reveal(); opening = false; return; }
    $('portal').classList.add('active');
    setTimeout(reveal, 850);
    setTimeout(() => { $('portal').classList.remove('active'); opening = false; }, 1750);
  });
  $('next').addEventListener('click', () => {
    index = (index + 1) % config.phrases.length; phrase();
    if (!reduced.matches) {
      const flower = document.createElement('span'); flower.textContent = index % 2 ? '🌼' : '🌻';
      $('bloom').replaceChildren(flower); flower.addEventListener('animationend', () => flower.remove(), {once:true});
    }
  });
  $('again').addEventListener('click', () => {
    if (opening) return;
    clearInterval(typing); $('garden').hidden = true; $('welcome').hidden = false;
    $('enter').disabled = false; document.body.classList.remove('opened'); $('enter').focus({preventScroll:true});
    window.scrollTo({top:0,behavior:'instant'});
  });
  const audio = $('audio'); audio.volume = .35;
  let musicBusy = false;
  function musicState(playing) { $('music').setAttribute('aria-pressed',String(playing)); $('music-label').textContent = playing ? 'Pausar música' : 'Activar música'; }
  $('music').addEventListener('click', async () => {
    if (musicBusy) return;
    if (!audio.paused) { audio.pause(); musicState(false); return; }
    musicBusy = true;
    try { await audio.play(); musicState(true); }
    catch { musicState(false); $('music-label').textContent = 'Reintentar música'; }
    finally { musicBusy = false; }
  });
  audio.addEventListener('pause', () => musicState(false));
  document.addEventListener('visibilitychange', () => { if (document.hidden) audio.pause(); });
  $('art-panel').addEventListener('pointermove', event => {
    if (reduced.matches || event.pointerType !== 'mouse') return;
    const rect = $('art-panel').getBoundingClientRect();
    $('art-panel').style.setProperty('--tilt', `${((event.clientX - rect.left) / rect.width - .5) * 7}deg`);
  });
  $('art-panel').addEventListener('pointerleave', () => $('art-panel').style.setProperty('--tilt','0deg'));
  for (let i = 0; i < 28; i++) {
    const point = document.createElement('i');
    point.style.left = `${Math.random()*100}%`; point.style.top = `${Math.random()*100}%`;
    point.style.animationDuration = `${8+Math.random()*12}s`; point.style.animationDelay = `${-Math.random()*20}s`;
    $('particles').append(point);
  }
})();
