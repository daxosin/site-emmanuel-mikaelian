/**
 * main.js — Site personnel Emmanuel Mikaelian
 * Dual-personality: "editorial" (jour, élégant) / "terminal" (sombre, hacker)
 * Vanilla JS ES6+, aucune dépendance.
 */

(function () {
  'use strict';

  /* =========================================================
     CONSTANTES GLOBALES
  ========================================================= */

  const THEME_KEY        = 'em-theme';
  const THEME_EDITORIAL  = 'editorial';
  const THEME_TERMINAL   = 'terminal';
  const HEADER_SCROLL_PX = 50;
  const COUNTER_DURATION = 2000;  // ms
  const SCAN_DURATION    = 800;   // ms par élément

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* =========================================================
     HELPERS UTILITAIRES
  ========================================================= */

  function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  function $$(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /* =========================================================
     LIGNES DE CODE PHARMA (fond terminal)
  ========================================================= */

  /* --- Code lines for terminal background --- */
  const TERMINAL_LINES = [
    '[2025-04-15 09:14:22] RGPD_AUDIT :: scanning patient_records...                    OK',
    'function validateDPOCompliance(establishment) {',
    '  const dpo = await db.query(`SELECT * FROM dpo_registry WHERE active = true`);',
    '  if (!dpo) throw new ComplianceError("DPO_NOT_REGISTERED");',
    '  return dpo.validateMandatoryFields();',
    '}',
    '// ISO 9001:2015 § 7.5 — Maîtrise des informations documentées',
    'const ehpad_count = await db.query(\'SELECT COUNT(*) FROM ehpad WHERE status = "active"\');',
    '[PRAQ] Processing batch #2847 — PDA automation cycle complete',
    'export const PHARMA_REGULATIONS = [\'BPP\', \'ANSM\', \'CSP_L5125-1\', \'GMP_EU\'];',
    'await robot.dispense({ patient: \'EHPAD_resident_0042\', medication: verified_rx });',
    '[2025-04-15 09:15:01] ANSM_FEED :: importing regulatory updates...                 200',
    'SELECT p.nom, p.dci, p.lot_number, s.conformity_score',
    '  FROM pharma_products p',
    '  JOIN audits s ON p.id = s.product_id',
    '  WHERE s.conformity_score < 0.95',
    '  ORDER BY s.audit_date DESC;',
    'if (conformity.score >= 0.95) return AUDIT_PASS;',
    '// PRAQ — Plan de Réduction des Accidents Qualité',
    'const AUDIT_PASS    = Symbol(\'AUDIT_PASS\');',
    'const AUDIT_FAIL    = Symbol(\'AUDIT_FAIL\');',
    'const AUDIT_PENDING = Symbol(\'AUDIT_PENDING\');',
    '[ROBOT] Dispensing tray 4/12 — verifying barcodes...                               OK',
    'async function runMonthlyAudit(site_id) {',
    '  const docs  = await fetchDocumentSet(site_id);',
    '  const gaps  = docs.filter(d => d.review_overdue);',
    '  const score = (docs.length - gaps.length) / docs.length;',
    '  await db.update(\'audit_log\', { site_id, score, ts: Date.now() });',
    '}',
    '// Référentiel HAS — Certification V2020',
    '[2025-04-15 09:16:44] EHPAD_SYNC :: replicating 347 resident profiles...           OK',
    'export type ConformityLevel = \'A\' | \'B\' | \'C\' | \'NC\';',
    'const DISPENSING_PROTOCOLS = {',
    '  NOMINATIVE:  \'dose unitaire nominative\',',
    '  GLOBAL:      \'dispensation globale\',',
    '  SEMI_GLOBAL: \'dispensation semi-globale\',',
    '};',
    '// CSP Art. L5126-1 — Pharmacie à usage intérieur',
    'SELECT COUNT(*) AS active_residents',
    '  FROM residents',
    '  WHERE discharge_date IS NULL',
    '  AND   establishment_id = :eid;',
    '[PDA] Generating weekly blister packs for 128 residents...                         RUN',
    'function checkExpiryDates(inventory) {',
    '  return inventory.filter(item => {',
    '    const daysLeft = daysBetween(new Date(), item.expiry);',
    '    return daysLeft < 90;',
    '  });',
    '}',
    '// BPP — Bonnes Pratiques de Préparation (ANSM 2021)',
    '[2025-04-15 09:17:55] TRACABILITY :: lot_number QC-2025-0431 verified              PASS',
    'const ISO_9001_VERSION  = \'2015\';',
    'const CERTIFICATION_BODY = \'AFNOR\';',
    'await sendAlert({ type: \'EXPIRY_WARNING\', product: \'DOLIPRANE_500MG\', days: 42 });',
    'INSERT INTO incident_log (type, description, severity, ts)',
    '  VALUES (\'NEAR_MISS\', \'wrong dose intercepted at validation step\', 2, NOW());',
    '// § 7.5.3 — Maîtrise des informations documentées',
    '[AUDIT] Non-conformity NC-2025-017 closed — root cause verified',
    'export interface DrugRecord {',
    '  dci:       string;',
    '  cip13:     string;',
    '  lot:       string;',
    '  expiry:    Date;',
    '  quantity:  number;',
    '  dispensed: boolean;',
    '}',
    'SELECT r.nom, r.prenom, m.dci, m.posologie, m.voie',
    '  FROM residents r',
    '  JOIN prescriptions m ON r.id = m.resident_id',
    '  WHERE m.active = true AND r.establishment_id = :eid;',
    '[ROBOT] Tray validation complete — 0 errors, 128/128 blisters OK',
    'const conformity = await evaluateISO9001(site, cycle);',
    '// CAQES — Contrat d\'Amélioration de la Qualité et de l\'Efficience des Soins',
    '[2025-04-15 09:19:03] REGULATORY_CHECK :: ANSM database sync...                    200',
    'function generateAuditReport(findings) {',
    '  const critical = findings.filter(f => f.level === \'critical\');',
    '  const major    = findings.filter(f => f.level === \'major\');',
    '  const minor    = findings.filter(f => f.level === \'minor\');',
    '  return { critical, major, minor, score: computeScore(findings) };',
    '}',
    'UPDATE pharma_products',
    '  SET status = \'RECALLED\'',
    '  WHERE lot_number IN (SELECT lot FROM recall_notices WHERE active = true);',
    '// Décret n°2019-489 — circuit du médicament en EHPAD',
    '[PRAQ] Automated risk matrix updated — 12 action items generated',
    'const EHPAD_CAPACITY = { small: 25, medium: 80, large: 200 };',
    'export const version = \'3.14.2\'; // pharma-compliance-engine',
    '[2025-04-15 09:20:11] SESSION :: user pharmacien@h8pharma.fr authenticated         OK',
    'await db.transaction(async (trx) => {',
    '  await trx(\'dispensing_records\').insert(batch);',
    '  await trx(\'stock\').decrement(\'quantity\', batch.length);',
    '});',
    '// Traçabilité nominative — obligation réglementaire (CSP R.5194-1)',
    'const pda_cycle = new PDA_Cycle({ site: \'H8_PHARMA_BELLECOUR\', week: 16 });',
    'await pda_cycle.generate();',
    '[QUALITY] Document QMS-2025-089 approved — effective 2025-05-01',
    'SELECT AVG(conformity_score) AS mean_score FROM audits WHERE year = 2025;',
    '[2025-04-15 09:21:30] DPO_CHECK :: reviewing data processing agreements...         OK',
    'const gdpr = await fetchGDPRregister({ org: \'H8_PHARMA\', year: 2025 });',
    'if (gdpr.missing_dpia.length > 0) await scheduleDPIA(gdpr.missing_dpia);',
    '// Art. 35 RGPD — Analyse d\'Impact sur la Protection des Données',
    '[2025-04-15 09:22:44] BATCH_AUDIT :: 9 EHPAD sites processed, 0 critical findings',
    'export function computeRiskScore(factors) {',
    '  return factors.reduce((acc, f) => acc + f.weight * f.value, 0) / factors.length;',
    '}',
  ];

  /* --- System broadcast lines (achievements/capabilities) --- */
  const SYSTEM_LINES = [
    '█▓▒░ DPO CERTIFIÉ — conformité RGPD opérationnelle ░▒▓█',
    '█▓▒░ 9 EHPAD — PDA robotisée active ░▒▓█',
    '█▓▒░ ISO 9001 — certification en cours ░▒▓█',
    '█▓▒░ 2 500 m² — projet PURE opérationnel ░▒▓█',
    '█▓▒░ +7,7% croissance — H8 Pharma 2025 ░▒▓█',
    '█▓▒░ IA Santé — workflows automatisés ░▒▓█',
    '█▓▒░ PRAQ — direction qualité pharmaceutique ░▒▓█',
    '█▓▒░ pharmacien architecte digital ░▒▓█',
    '█▓▒░ automatisation — libérer du temps soignant ░▒▓█',
    '█▓▒░ Pharma78 — transformation digitale santé ░▒▓█',
  ];

  /* --- Keywords to highlight in code lines --- */
  const HIGHLIGHT_KEYWORDS = [
    'RGPD', 'DPO', 'ISO 9001', 'ISO_9001', 'EHPAD', 'PDA', 'PRAQ',
    'H8_PHARMA', 'H8 Pharma', 'PURE', 'Pharma78', 'pharmacien',
    'conformité', 'conformity', 'automatisation', 'automation',
    'certification', 'AFNOR', 'ANSM', 'BPP', 'qualité', 'QUALITY',
    'traçabilité', 'TRACABILITY', 'robot', 'ROBOT',
  ];

  /* =========================================================
     MODULE 1 — GESTIONNAIRE DE THÈME
  ========================================================= */

  const ThemeManager = (function () {

    function getSystemPreference() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? THEME_TERMINAL
        : THEME_EDITORIAL;
    }

    function getCurrent() {
      return document.documentElement.getAttribute('data-theme') || THEME_EDITORIAL;
    }

    function apply(theme, shouldDispatch) {
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem(THEME_KEY, theme);

      const btn = document.getElementById('theme-toggle');
      if (btn) {
        const isTerminal = theme === THEME_TERMINAL;
        btn.setAttribute('aria-pressed', isTerminal ? 'true' : 'false');
        btn.setAttribute(
          'aria-label',
          isTerminal ? 'Passer au mode éditorial' : 'Passer au mode terminal'
        );
      }

      if (shouldDispatch !== false) {
        document.dispatchEvent(
          new CustomEvent('themechange', { detail: { theme }, bubbles: true })
        );
      }
    }

    function init() {
      const saved = localStorage.getItem(THEME_KEY);
      apply(saved || getSystemPreference(), false);
    }

    function toggle() {
      apply(getCurrent() === THEME_TERMINAL ? THEME_EDITORIAL : THEME_TERMINAL);
    }

    return { init, apply, toggle, getCurrent };
  }());

  /* =========================================================
     MODULE 2 — FOND TERMINAL (code qui défile)
  ========================================================= */

  const TerminalBg = (function () {
    const LINE_HEIGHT = 22;    // px per line
    const LINES_PER_COL = 60;  // lines per column

    // Column configs: position, speed, opacity multiplier
    const COLUMNS = [
      { cls: 'tbg-column--left',   speed: 0.25, opMul: 0.7 },
      { cls: 'tbg-column--center', speed: 0.45, opMul: 1.0 },
      { cls: 'tbg-column--right',  speed: 0.35, opMul: 0.8 },
    ];

    let container    = null;
    let columns      = [];   // { el, wrapper, speed, offset }
    let rafId        = null;
    let flashTimerId = null;
    let allHighlightLines = [];  // references to lines with keywords

    // --- Escape HTML for safe innerHTML ---
    function esc(s) {
      return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    // --- Build regex for keyword detection ---
    const kwRegex = new RegExp(
      '(' + HIGHLIGHT_KEYWORDS.map(k =>
        k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      ).join('|') + ')',
      'gi'
    );

    function classifyLine(line) {
      const t = line.trim();
      if (t.startsWith('//') || t.startsWith('#'))            return 'comment';
      if (t.startsWith('[') && t.includes(']'))               return 'log';
      if (
        /^(function |async function |const |let |var |export |import |await |return |if \(|UPDATE |INSERT |SELECT )/.test(t)
      ) return 'keyword';
      if (/^[}\)];?$/.test(t) || t === '});' || t === '};')  return 'structure';
      return 'default';
    }

    function makeLine(text, isSystem) {
      const el = document.createElement('div');

      if (isSystem) {
        el.className = 'tbg-line tbg-line--system';
        el.innerHTML = esc(text);
        return el;
      }

      const cls = classifyLine(text);
      el.className = 'tbg-line tbg-line--' + cls;

      // Inject highlight spans for keywords
      const escaped = esc(text);
      if (kwRegex.test(text)) {
        kwRegex.lastIndex = 0;
        el.innerHTML = escaped.replace(kwRegex, '<span class="tbg-highlight">$1</span>');
        el.dataset.hasKeyword = '1';
      } else {
        el.textContent = text;
      }

      return el;
    }

    function buildPool(colIndex) {
      const pool = [];
      const systemInterval = 8 + colIndex * 3; // inject system lines periodically

      // Shuffle source lines
      const shuffled = TERMINAL_LINES.slice().sort(() => Math.random() - 0.5);
      let si = 0;
      let sysIdx = 0;

      while (pool.length < LINES_PER_COL) {
        // Every N lines, inject a system broadcast
        if (pool.length > 0 && pool.length % systemInterval === 0) {
          pool.push({ text: SYSTEM_LINES[sysIdx % SYSTEM_LINES.length], system: true });
          sysIdx++;
        } else {
          pool.push({ text: shuffled[si % shuffled.length], system: false });
          si++;
        }
      }
      return pool;
    }

    function createColumn(config, index) {
      const col = document.createElement('div');
      col.className = 'tbg-column ' + config.cls;
      col.style.setProperty('--col-opacity', config.opMul);

      const wrapper = document.createElement('div');
      wrapper.className = 'tbg-wrapper';
      col.appendChild(wrapper);

      const pool = buildPool(index);
      // Double for seamless loop
      [...pool, ...pool].forEach(({ text, system }) => {
        const line = makeLine(text, system);
        wrapper.appendChild(line);
        if (line.dataset.hasKeyword || system) {
          allHighlightLines.push(line);
        }
      });

      return { el: col, wrapper, speed: config.speed, offset: 0 };
    }

    function tick() {
      const loopPoint = (LINES_PER_COL / 2) * LINE_HEIGHT;

      columns.forEach(col => {
        col.offset += col.speed;
        if (col.offset >= loopPoint) col.offset = 0;
        col.wrapper.style.transform = 'translateY(-' + col.offset + 'px)';
      });

      rafId = requestAnimationFrame(tick);
    }

    // --- Flash random keyword lines periodically ---
    function triggerFlash() {
      if (!allHighlightLines.length) return;
      const idx = Math.floor(Math.random() * allHighlightLines.length);
      const line = allHighlightLines[idx];

      line.classList.add('tbg-line--flash');
      setTimeout(() => line.classList.remove('tbg-line--flash'), 1800);
    }

    function startFlashTimer() {
      if (flashTimerId) return;
      // First flash after 1.5s, then random 2.5-5s
      flashTimerId = setInterval(triggerFlash, 2500 + Math.random() * 2500);
      // Immediate first flash
      setTimeout(triggerFlash, 800);
    }

    function stopFlashTimer() {
      if (flashTimerId) {
        clearInterval(flashTimerId);
        flashTimerId = null;
      }
    }

    function startScrolling() {
      if (!rafId && !prefersReducedMotion) {
        tick();
        startFlashTimer();
      }
    }

    function stopScrolling() {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      stopFlashTimer();
    }

    function init() {
      container = document.getElementById('terminal-bg');
      if (!container) {
        container = document.createElement('div');
        container.id = 'terminal-bg';
        document.body.insertBefore(container, document.body.firstChild);
      }

      // Clear any previous content
      container.innerHTML = '';
      allHighlightLines = [];

      COLUMNS.forEach((config, i) => {
        const col = createColumn(config, i);
        container.appendChild(col.el);
        columns.push(col);
      });

      document.addEventListener('themechange', ({ detail }) => {
        detail.theme === THEME_TERMINAL ? startScrolling() : stopScrolling();
      });

      if (ThemeManager.getCurrent() === THEME_TERMINAL) startScrolling();
    }

    return { init };
  }());

  /* =========================================================
     MODULE 3 — SCROLL REVEAL + SCAN TERMINAL
  ========================================================= */

  const RevealManager = (function () {
    let observer = null;

    function getDelay(el) {
      const raw = el.dataset.revealDelay;
      return raw ? parseFloat(raw) * 1000 : 0;
    }

    function revealEditorial(el, delay) {
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('is-revealed');
      }, delay);
    }

    function revealTerminal(el, delay) {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('terminal-scanned', 'is-revealed');
        setTimeout(
          () => el.classList.remove('terminal-scanned'),
          SCAN_DURATION + 120
        );
      }, delay);
    }

    function handleEntries(entries) {
      const isTerminal = ThemeManager.getCurrent() === THEME_TERMINAL;

      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const el    = entry.target;
        const delay = getDelay(el);

        observer.unobserve(el); // ne se déclenche qu'une seule fois

        if (prefersReducedMotion) {
          el.classList.add('is-revealed');
          return;
        }

        isTerminal ? revealTerminal(el, delay) : revealEditorial(el, delay);
      });
    }

    function init() {
      // Support both .reveal class and [data-reveal] attribute
      const elements = $$('[data-reveal], .reveal');
      if (!elements.length) return;

      // Cacher les éléments avant qu'ils ne soient révélés
      if (!prefersReducedMotion) {
        elements.forEach(el => {
          if (!el.classList.contains('is-revealed')) {
            el.style.opacity   = '0';
            el.style.transform = 'translateY(20px)';
          }
        });
      }

      observer = new IntersectionObserver(handleEntries, {
        threshold:  0.05,
        rootMargin: '50px 0px -30px 0px',
      });

      elements.forEach(el => observer.observe(el));

      // Force-reveal above-fold elements after a short delay
      // (IO can miss elements that are already in view at page load)
      setTimeout(() => {
        elements.forEach(el => {
          if (el.classList.contains('is-revealed')) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const delay = getDelay(el);
            const isTerminal = ThemeManager.getCurrent() === THEME_TERMINAL;
            observer.unobserve(el);
            if (prefersReducedMotion) {
              el.classList.add('is-revealed');
              el.style.opacity = '1';
              el.style.transform = 'none';
            } else {
              isTerminal ? revealTerminal(el, delay) : revealEditorial(el, delay);
            }
          }
        });
      }, 200);
    }

    function observe(el) {
      if (observer) observer.observe(el);
    }

    return { init, observe };
  }());

  /* =========================================================
     MODULE 4 — HEADER AU SCROLL
  ========================================================= */

  const Header = (function () {
    let header  = null;
    let ticking = false;

    function update() {
      if (!header) return;
      header.classList.toggle('header--scrolled', window.scrollY > HEADER_SCROLL_PX);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    function init() {
      header = $('header, .site-header, #header, [data-header]');
      if (!header) return;
      window.addEventListener('scroll', onScroll, { passive: true });
      update();
    }

    return { init };
  }());

  /* =========================================================
     MODULE 5 — MENU MOBILE
  ========================================================= */

  const MobileMenu = (function () {
    let toggleBtn = null;
    let nav       = null;
    let isOpen    = false;

    function open() {
      isOpen = true;
      nav.classList.add('nav--open');
      toggleBtn.classList.add('hamburger--active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.setAttribute('aria-label', 'Fermer le menu');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      isOpen = false;
      nav.classList.remove('nav--open');
      toggleBtn.classList.remove('hamburger--active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Ouvrir le menu');
      document.body.style.overflow = '';
    }

    function onKeydown(e) {
      if (e.key === 'Escape' && isOpen) close();
    }

    function onDocumentClick(e) {
      if (
        isOpen &&
        !nav.contains(e.target) &&
        !toggleBtn.contains(e.target)
      ) close();
    }

    function init() {
      toggleBtn = $('.hamburger');
      nav       = $('.nav, #nav-menu');
      if (!toggleBtn || !nav) return;

      toggleBtn.addEventListener('click', () => isOpen ? close() : open());

      // Close on link click
      $$('a', nav).forEach(link =>
        link.addEventListener('click', () => { if (isOpen) close(); })
      );

      document.addEventListener('keydown', onKeydown);
      document.addEventListener('click',   onDocumentClick);
    }

    return { init };
  }());

  /* =========================================================
     MODULE 6 — SMOOTH SCROLL AVEC OFFSET HEADER
  ========================================================= */

  const SmoothScroll = (function () {
    function getHeaderHeight() {
      const h = $('header, .site-header, #header, [data-header]');
      return h ? h.getBoundingClientRect().height : 0;
    }

    function scrollToId(id) {
      const target = document.getElementById(id);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY
                  - getHeaderHeight() - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    function onLinkClick(e) {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const id = href.slice(1);
      if (!id) return;
      e.preventDefault();
      scrollToId(id);
    }

    function init() {
      $$('a[href^="#"]').forEach(link =>
        link.addEventListener('click', onLinkClick)
      );
    }

    return { init };
  }());

  /* =========================================================
     MODULE 7 — COMPTEURS STATISTIQUES
  ========================================================= */

  const StatCounter = (function () {
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    // Extraire la valeur numérique de "2 500 m²", "+7,7%", "ISO 9001", etc.
    function parseNumber(raw) {
      const normalized = raw.replace(/\s/g, '').replace(',', '.');
      const match = normalized.match(/[+-]?\d+(\.\d+)?/);
      return match ? parseFloat(match[0]) : null;
    }

    // Reconstruire la chaîne originale avec la valeur animée
    function formatValue(original, current) {
      const isDecimal = /[,.]/.test(original);
      const formatted = isDecimal
        ? current.toFixed(1).replace('.', ',')
        : Math.round(current).toLocaleString('fr-FR');

      // Remplacer le premier groupe numérique (espaces inclus) dans la chaîne originale
      return original.replace(/[\d\s]+([.,]\d+)?/, formatted);
    }

    function animateCounter(el) {
      const original = el.textContent.trim();
      const target   = parseNumber(original);

      if (target === null) {
        // Valeur non-numérique : fade simple
        if (!prefersReducedMotion) {
          el.style.opacity    = '0';
          el.style.transition = 'opacity 0.8s ease';
          requestAnimationFrame(() => { el.style.opacity = '1'; });
        }
        return;
      }

      const startTime = performance.now();

      function frame(now) {
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / COUNTER_DURATION, 1);
        const eased    = easeOutCubic(progress);

        el.textContent = formatValue(original, target * eased);

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          el.textContent = original; // restaurer la valeur exacte
        }
      }

      requestAnimationFrame(frame);
    }

    function init() {
      const stats = $$('.stat__value');
      if (!stats.length || prefersReducedMotion) return;

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          animateCounter(entry.target);
        });
      }, { threshold: 0.5 });

      stats.forEach(el => observer.observe(el));
    }

    return { init };
  }());

  /* =========================================================
     MODULE 8 — VALIDATION FORMULAIRE CONTACT
  ========================================================= */

  const ContactForm = (function () {
    const FIELD_RULES = {
      name: {
        label: 'Le nom',
        required: true,
        minLength: 2,
      },
      email: {
        label: "L'adresse email",
        required: true,
        isEmail: true,
      },
      subject: {
        label: 'Le sujet',
        required: true,
      },
      message: {
        label: 'Le message',
        required: true,
        minLength: 20,
      },
    };

    function isValidEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
    }

    function validateForm(form) {
      const errors = {};

      Object.entries(FIELD_RULES).forEach(([name, rule]) => {
        const field = form.elements[name];
        if (!field) return;

        const val = field.value.trim();

        if (rule.required && !val) {
          errors[name] = `${rule.label} est requis.`;
        } else if (val && rule.minLength && val.length < rule.minLength) {
          errors[name] = `${rule.label} doit contenir au moins ${rule.minLength} caractères.`;
        } else if (val && rule.isEmail && !isValidEmail(val)) {
          errors[name] = 'Veuillez saisir une adresse email valide.';
        }
      });

      return errors;
    }

    function clearErrors(form) {
      $$('[data-error]', form).forEach(el => {
        el.textContent = '';
        el.removeAttribute('role');
      });
      $$('.field--error', form).forEach(el =>
        el.classList.remove('field--error')
      );
      $$('[aria-invalid]', form).forEach(el =>
        el.removeAttribute('aria-invalid')
      );
    }

    function displayErrors(form, errors) {
      Object.entries(errors).forEach(([name, message]) => {
        const field   = form.elements[name];
        const errorEl = form.querySelector(`[data-error="${name}"]`);

        if (field) {
          field.setAttribute('aria-invalid', 'true');
          const wrapper = field.closest('.field, .form__group, .form__field');
          if (wrapper) wrapper.classList.add('field--error');
        }

        if (errorEl) {
          errorEl.textContent = message;
          errorEl.setAttribute('role', 'alert');
        }
      });

      // Focus sur le premier champ en erreur
      const firstKey = Object.keys(errors)[0];
      if (firstKey && form.elements[firstKey]) {
        form.elements[firstKey].focus();
      }
    }

    function showSuccess(form) {
      let msg = form.querySelector('.form__success');
      if (!msg) {
        msg = document.createElement('p');
        msg.className = 'form__success';
        form.appendChild(msg);
      }
      msg.textContent =
        'Votre message a bien été envoyé. Je vous répondrai dans les meilleurs délais.';
      msg.setAttribute('role', 'status');
      msg.hidden = false;
      form.reset();
    }

    function onSubmit(e) {
      e.preventDefault();
      const form   = e.currentTarget;
      const errors = validateForm(form);

      clearErrors(form);

      // Masquer un éventuel message de succès précédent
      const prev = form.querySelector('.form__success');
      if (prev) prev.hidden = true;

      if (Object.keys(errors).length) {
        displayErrors(form, errors);
        return;
      }

      showSuccess(form);
    }

    function init() {
      const form = document.getElementById('contact-form');
      if (!form) return;

      form.setAttribute('novalidate', '');
      form.addEventListener('submit', onSubmit);

      // Effacer l'erreur d'un champ dès que l'utilisateur le modifie
      $$('input, textarea, select', form).forEach(field => {
        field.addEventListener('input', () => {
          field.removeAttribute('aria-invalid');
          const errorEl = form.querySelector(`[data-error="${field.name}"]`);
          if (errorEl) errorEl.textContent = '';
          const wrapper = field.closest('.field, .form__group, .form__field');
          if (wrapper) wrapper.classList.remove('field--error');
        });
      });
    }

    return { init };
  }());

  /* =========================================================
     MODULE 9 — BOUTON BASCULE DE THÈME
  ========================================================= */

  function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => ThemeManager.toggle());
  }

  /* =========================================================
     MODULE 10 — INJECTION CSS TERMINAL (garde-fou)
     Au cas où la feuille de style ne contient pas ces règles.
  ========================================================= */

  function injectTerminalStyles() {
    if (document.getElementById('em-terminal-styles')) return;

    const style = document.createElement('style');
    style.id    = 'em-terminal-styles';
    /* eslint-disable */
    style.textContent = `
      /* =============================================
         TERMINAL BACKGROUND — Takeover Effect
         ============================================= */

      #terminal-bg {
        display: none;
        position: fixed;
        inset: 0;
        z-index: -1;
        overflow: hidden;
        pointer-events: none;
        user-select: none;
      }
      [data-theme="terminal"] #terminal-bg {
        display: block;
      }

      /* --- Columns --- */
      .tbg-column {
        position: absolute;
        top: 0;
        bottom: 0;
        overflow: hidden;
      }
      .tbg-column--left {
        left: 0;
        width: 38%;
        opacity: calc(0.55 * var(--col-opacity, 1));
      }
      .tbg-column--center {
        left: 30%;
        width: 42%;
        opacity: calc(0.75 * var(--col-opacity, 1));
      }
      .tbg-column--right {
        right: 0;
        width: 36%;
        opacity: calc(0.5 * var(--col-opacity, 1));
      }

      .tbg-wrapper {
        display: flex;
        flex-direction: column;
        will-change: transform;
      }

      /* --- Base lines --- */
      .tbg-line {
        font-family: 'Geist Mono', 'JetBrains Mono', 'Courier New', monospace;
        font-size: 12px;
        line-height: 22px;
        white-space: pre;
        padding: 0 16px;
        letter-spacing: 0.02em;
        opacity: 0.14;
        transition: opacity 0.3s ease;
      }
      .tbg-line--keyword   { color: #4ade80; opacity: 0.20; }
      .tbg-line--log       { color: #86efac; opacity: 0.17; }
      .tbg-line--comment   { color: #374151; opacity: 0.08; }
      .tbg-line--structure  { color: #6b7280; opacity: 0.07; }
      .tbg-line--default   { color: #d1d5db; opacity: 0.12; }

      /* --- System broadcast lines (achievements) --- */
      .tbg-line--system {
        color: #4ade80;
        opacity: 0.40;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.08em;
        text-shadow: 0 0 10px rgba(34,197,94,0.35), 0 0 30px rgba(34,197,94,0.15);
        padding: 4px 16px;
      }

      /* --- Keyword highlights within lines --- */
      .tbg-highlight {
        color: #4ade80;
        opacity: 1;
        text-shadow: 0 0 8px rgba(34,197,94,0.5), 0 0 20px rgba(34,197,94,0.25);
        font-weight: 500;
      }

      /* --- Flash animation (periodic spotlight) --- */
      @keyframes tbg-flash {
        0%   { opacity: var(--base-op, 0.14); filter: brightness(1); }
        12%  { opacity: 0.85; filter: brightness(2.5); text-shadow: 0 0 24px #4ade80, 0 0 48px rgba(34,197,94,0.6); }
        35%  { opacity: 0.6; filter: brightness(1.8); }
        100% { opacity: var(--base-op, 0.14); filter: brightness(1); text-shadow: none; }
      }
      .tbg-line--flash {
        animation: tbg-flash 1.8s ease-out forwards !important;
        z-index: 1;
        position: relative;
      }
      .tbg-line--system.tbg-line--flash {
        --base-op: 0.40;
      }

      /* --- Scanline overlay for CRT feel --- */
      [data-theme="terminal"] #terminal-bg::after {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
          0deg,
          transparent 0px,
          transparent 2px,
          rgba(0,0,0,0.06) 2px,
          rgba(0,0,0,0.06) 4px
        );
        pointer-events: none;
        z-index: 2;
      }

      /* --- Reveal au scroll (mode éditorial) --- */
      .reveal {
        will-change: opacity, transform;
      }
      .reveal.is-revealed {
        opacity: 1 !important;
        transform: none !important;
      }

      /* --- Effet scan terminal sur les éléments de contenu --- */
      @keyframes em-terminal-scan {
        0%   { opacity: 0.3; color: inherit; text-shadow: none; }
        25%  { opacity: 1;   color: #4ade80; text-shadow: 0 0 16px #4ade80, 0 0 32px rgba(74,222,128,0.4); }
        65%  { opacity: 1;   color: #86efac; text-shadow: 0 0 6px #4ade80; }
        100% { opacity: 1;   color: inherit; text-shadow: none; }
      }
      @media (prefers-reduced-motion: no-preference) {
        .terminal-scanned {
          animation: em-terminal-scan ${SCAN_DURATION}ms ease-out forwards;
        }
      }

      /* --- Reduced motion: no animations, just static --- */
      @media (prefers-reduced-motion: reduce) {
        .tbg-line--flash { animation: none !important; }
        .tbg-wrapper { transform: none !important; }
        .tbg-line--system { opacity: 0.25; text-shadow: none; }
        .tbg-highlight { text-shadow: none; }
        #terminal-bg::after { display: none; }
      }
    `;
    /* eslint-enable */
    document.head.appendChild(style);
  }

  /* =========================================================
     MODULE 11 — LANGUAGE SWITCH (FR/EN)
  ========================================================= */

  const LangSwitch = (function () {
    const LANG_KEY = 'em-lang';

    // Translation map: data-i18n="key" → { fr: '...', en: '...' }
    const TRANSLATIONS = {
      // ===== SHARED (all pages) =====
      'nav.parcours':     { fr: 'Parcours',      en: 'Background' },
      'nav.expertises':   { fr: 'Expertises',     en: 'Expertise' },
      'nav.realisations': { fr: 'Réalisations',   en: 'Projects' },
      'nav.blog':         { fr: 'Blog',           en: 'Blog' },
      'nav.contact':      { fr: 'Contact',        en: 'Contact' },
      'footer.tagline':   { fr: 'Pharmacien DPO · Architecte de la Santé de Demain', en: 'Pharmacist DPO · Architect of Tomorrow\'s Healthcare' },
      'footer.copy':      { fr: '© 2026 Emmanuel Mikaelian. Tous droits réservés.', en: '© 2026 Emmanuel Mikaelian. All rights reserved.' },

      // ===== INDEX =====
      'hero.badge':       { fr: 'Disponible pour nouveaux projets', en: 'Available for new projects' },
      'hero.eyebrow':     { fr: 'PHARMACIEN · DPO · TRANSFORMATION DIGITALE', en: 'PHARMACIST · DPO · DIGITAL TRANSFORMATION' },
      'hero.title.1':     { fr: 'La complexité réglementaire,', en: 'Regulatory complexity,' },
      'hero.title.2':     { fr: 'transformée en clarté.', en: 'transformed into clarity.' },
      'hero.desc':        { fr: "J'aide les établissements de santé et startups pharma à libérer du temps soignant grâce à l'automatisation maîtrisée et la conformité intégrée.", en: 'I help healthcare facilities and pharma startups free up caregiver time through controlled automation and integrated compliance.' },
      'hero.cta.1':       { fr: 'Discutons de votre projet', en: "Let's discuss your project" },
      'hero.cta.2':       { fr: 'Découvrir mon approche', en: 'Discover my approach' },
      'stat.ehpad':       { fr: 'EHPAD accompagnés', en: 'Nursing homes supported' },
      'stat.pure':        { fr: 'PURE — Pharma78', en: 'PURE — Pharma78' },
      'stat.croissance':  { fr: 'Croissance 2025', en: '2025 Growth' },
      'stat.iso':         { fr: 'En cours de certification', en: 'Certification in progress' },
      'exp.eyebrow':      { fr: 'Trois piliers', en: 'Three pillars' },
      'exp.title':        { fr: 'Une expertise transversale au service du soin', en: 'Cross-cutting expertise in service of care' },
      'exp.desc':         { fr: 'Rigueur réglementaire, excellence opérationnelle et innovation technologique — trois dimensions indissociables pour une transformation durable.', en: 'Regulatory rigor, operational excellence and technological innovation — three inseparable dimensions for lasting transformation.' },
      'card.conformite':  { fr: 'Conformité & Qualité', en: 'Compliance & Quality' },
      'card.pda':         { fr: 'PDA & Automatisation', en: 'ADD & Automation' },
      'card.tech':        { fr: 'Tech & IA Santé', en: 'Tech & Health AI' },
      'card.conformite.t':{ fr: 'RGPD, DPO externalisé, ISO 9001, BPP, ANSM, pharmacovigilance. Une conformité qui devient avantage compétitif, pas une contrainte.', en: 'GDPR, outsourced DPO, ISO 9001, GMP, ANSM, pharmacovigilance. Compliance as a competitive advantage, not a constraint.' },
      'card.pda.t':       { fr: "Pilotage automates PDA, intégration LGO/SSI, traçabilité end-to-end, services EHPAD. L'automatisation au service du soin et de la sécurité.", en: 'ADD robot management, LGO/HIS integration, end-to-end traceability, nursing home services. Automation serving care and safety.' },
      'card.tech.t':      { fr: 'Workflows IA documentaires, développement outils internes, architecture SI santé, prompt engineering. La tech qui libère du temps soignant.', en: 'Document AI workflows, internal tool development, health IS architecture, prompt engineering. Tech that frees up caregiver time.' },
      'card.link':        { fr: 'En savoir plus', en: 'Learn more' },
      'parcours.eyebrow': { fr: 'Mon parcours', en: 'My background' },
      'parcours.title':   { fr: "15+ ans d'expertise pharmaceutique", en: '15+ years of pharmaceutical expertise' },
      'parcours.desc':    { fr: "Du comptoir officinal à la direction qualité, en passant par l'automatisation PDA et la protection des données : un parcours construit pour comprendre chaque maillon de la chaîne de santé.", en: 'From the pharmacy counter to quality management, through ADD automation and data protection: a career built to understand every link in the healthcare chain.' },
      'parcours.2025':    { fr: 'Directeur Qualité PRAQ — H8 Pharma', en: 'Quality Director PRAQ — H8 Pharma' },
      'parcours.2022':    { fr: 'DPO Certifié — Conformité RGPD', en: 'Certified DPO — GDPR Compliance' },
      'parcours.2018':    { fr: 'Lancement PDA automatisée — 9 EHPAD', en: 'Automated ADD launch — 9 nursing homes' },
      'parcours.link':    { fr: 'Voir le parcours complet', en: 'View full background' },
      'blog.eyebrow':     { fr: 'Réflexions', en: 'Insights' },
      'blog.title':       { fr: 'Derniers articles', en: 'Latest articles' },
      'blog.desc':        { fr: 'Analyses, retours d\'expérience et prospectives sur la santé de demain.', en: 'Analyses, experience feedback and insights on tomorrow\'s healthcare.' },
      'blog.link':        { fr: 'Voir tous les articles', en: 'View all articles' },
      'blog.read':        { fr: "Lire l'article", en: 'Read article' },
      'blog.art1.title':  { fr: "L'IA au service du pharmacien : libérer du temps pour l'essentiel", en: 'AI serving the pharmacist: freeing up time for what matters' },
      'blog.art1.excerpt':{ fr: "Comment l'intelligence artificielle transforme le quotidien du pharmacien d'officine et libère du temps pour le conseil à valeur ajoutée.", en: 'How artificial intelligence transforms the daily life of community pharmacists and frees up time for high-value counseling.' },
      'blog.art2.title':  { fr: 'PDA robotisée : retour d\'expérience après deux ans', en: 'Automated dose dispensing: two years of experience' },
      'blog.art2.excerpt':{ fr: 'Retour d\'expérience concret sur la mise en place d\'une PDA robotisée pour 9 EHPAD — bénéfices, obstacles et enseignements.', en: 'Hands-on feedback on implementing automated dose dispensing for 9 nursing homes — benefits, obstacles and lessons learned.' },
      'blog.art3.title':  { fr: 'RGPD en pharmacie : les 5 erreurs à éviter absolument', en: 'GDPR in pharmacy: the 5 mistakes to absolutely avoid' },
      'blog.art3.excerpt':{ fr: 'Les erreurs RGPD les plus courantes en officine et établissements de santé, et comment les corriger avant un contrôle CNIL.', en: 'The most common GDPR mistakes in pharmacies and healthcare facilities, and how to fix them before a CNIL audit.' },
      'cta.title':        { fr: 'Un projet ? Une question ?', en: 'A project? A question?' },
      'cta.text':         { fr: 'Discutons de la façon dont je peux vous aider à transformer vos défis réglementaires en opportunités opérationnelles.', en: "Let's discuss how I can help you turn regulatory challenges into operational opportunities." },
      'cta.btn':          { fr: 'Prendre contact', en: 'Get in touch' },

      // ===== PARCOURS PAGE =====
      'p.eyebrow':        { fr: 'Mon parcours', en: 'My background' },
      'p.title.1':        { fr: 'Un chemin construit sur la rigueur,', en: 'A path built on rigor,' },
      'p.title.2':        { fr: 'enrichi par la curiosité.', en: 'enriched by curiosity.' },
      'p.desc':           { fr: 'Un parcours professionnel guidé par une conviction : la technique doit servir l\'humain. De la dispensation officinale à la direction qualité, en passant par l\'automatisation PDA et la protection des données.', en: 'A professional career guided by one conviction: technology must serve people. From pharmacy dispensing to quality management, through ADD automation and data protection.' },
      'p.exp.eyebrow':    { fr: 'Expériences', en: 'Experience' },
      'p.exp.title':      { fr: 'Expériences professionnelles', en: 'Professional experience' },
      'p.job1.date':      { fr: '2023 → Présent', en: '2023 → Present' },
      'p.job1.title':     { fr: 'Pharmacien DPO / PRAQ', en: 'Pharmacist DPO / PRAQ' },
      'p.job1.desc':      { fr: 'Pilotage de la transformation digitale du groupement. Responsable du projet PURE/Pharma78 : création d\'un pôle de 2 500 m² intégrant PDA robotisée pour 9 EHPAD. Certification ISO 9001 en cours. Mise en conformité RGPD et fonction DPO externalisé.', en: 'Leading the group\'s digital transformation. Head of the PURE/Pharma78 project: creation of a 2,500 m² hub integrating automated dose dispensing for 9 nursing homes. ISO 9001 certification in progress. GDPR compliance and outsourced DPO function.' },
      'p.job2.title':     { fr: 'Pharmacien Titulaire', en: 'Pharmacy Owner' },
      'p.job2.desc':      { fr: 'Gestion complète d\'une officine de quartier. Développement d\'une approche centrée patient avec accent sur le conseil personnalisé et l\'accompagnement des patients chroniques.', en: 'Full management of a community pharmacy. Development of a patient-centered approach focused on personalized counseling and chronic patient support.' },
      'p.job3.title':     { fr: 'Pharmacien Assistant', en: 'Assistant Pharmacist' },
      'p.job3.desc':      { fr: 'Construction des fondamentaux du métier : dispensation, conseil, gestion des stocks, relation avec les prescripteurs. Exposition à différents modèles d\'officine.', en: 'Building career fundamentals: dispensing, counseling, stock management, prescriber relations. Exposure to different pharmacy models.' },
      'p.form.eyebrow':   { fr: 'Formation', en: 'Education' },
      'p.form.title':     { fr: 'Formation & certifications', en: 'Education & certifications' },
      'p.form1.title':    { fr: 'Doctorat en Pharmacie', en: 'Doctor of Pharmacy' },
      'p.form1.desc':     { fr: 'Université Paris Cité. Formation complète de pharmacien avec spécialisation officine. Acquisition des fondamentaux scientifiques et réglementaires.', en: 'Université Paris Cité. Comprehensive pharmacist training with community pharmacy specialization. Scientific and regulatory foundations.' },
      'p.form2.title':    { fr: 'DU Intelligence Artificielle en Santé', en: 'University Diploma in Health AI' },
      'p.form2.desc':     { fr: 'Compréhension des enjeux et applications de l\'IA dans le domaine de la santé. Machine learning, traitement du langage naturel, éthique de l\'IA médicale.', en: 'Understanding AI challenges and applications in healthcare. Machine learning, natural language processing, medical AI ethics.' },
      'p.form3.title':    { fr: 'Certifications complémentaires', en: 'Additional certifications' },
      'p.form3.desc':     { fr: 'RGPD / DPO, ISO 9001, Bonnes Pratiques de Préparation, Management de la qualité en établissement de santé.', en: 'GDPR / DPO, ISO 9001, Good Preparation Practices, Quality management in healthcare facilities.' },
      'p.skills.eyebrow': { fr: 'Compétences', en: 'Skills' },
      'p.skills.title':   { fr: 'Compétences techniques', en: 'Technical skills' },
      'p.skills1':        { fr: 'Pharma & Réglementaire', en: 'Pharma & Regulatory' },
      'p.skills2':        { fr: 'PDA & Automatisation', en: 'ADD & Automation' },
      'p.skills3':        { fr: 'Tech & IA', en: 'Tech & AI' },
      'p.cta.title':      { fr: 'Télécharger mon CV', en: 'Download my resume' },
      'p.cta.text':       { fr: 'Pour une vision complète de mon parcours et de mes compétences.', en: 'For a complete overview of my background and skills.' },
      'p.cta.btn':        { fr: 'Télécharger le CV (PDF)', en: 'Download resume (PDF)' },

      // ===== EXPERTISES PAGE =====
      'e.eyebrow':        { fr: 'Trois piliers', en: 'Three pillars' },
      'e.title.1':        { fr: 'Une expertise transversale', en: 'Cross-cutting expertise' },
      'e.title.2':        { fr: 'au service du soin.', en: 'in service of care.' },
      'e.desc':           { fr: 'Rigueur réglementaire, excellence opérationnelle et innovation technologique — trois dimensions indissociables pour une transformation durable.', en: 'Regulatory rigor, operational excellence and technological innovation — three inseparable dimensions for lasting transformation.' },
      'e.c.eyebrow':      { fr: '01', en: '01' },
      'e.c.title':        { fr: 'Conformité & Qualité', en: 'Compliance & Quality' },
      'e.c.desc':         { fr: 'La conformité n\'est pas une contrainte mais un avantage compétitif. Je transforme les obligations réglementaires en leviers d\'excellence opérationnelle.', en: 'Compliance is not a constraint but a competitive advantage. I transform regulatory obligations into drivers of operational excellence.' },
      'e.c1.title':       { fr: 'RGPD / DPO externalisé', en: 'GDPR / Outsourced DPO' },
      'e.c1.desc':        { fr: 'Mise en conformité, registre des traitements, analyses d\'impact, formation des équipes.', en: 'Compliance implementation, processing records, impact assessments, team training.' },
      'e.c2.title':       { fr: 'ISO 9001 / Système Qualité', en: 'ISO 9001 / Quality System' },
      'e.c2.desc':        { fr: 'Déploiement SMQ, procédures, indicateurs, préparation certification.', en: 'QMS deployment, procedures, indicators, certification preparation.' },
      'e.c3.title':       { fr: 'BPP / ANSM', en: 'GMP / ANSM' },
      'e.c3.desc':        { fr: 'Bonnes Pratiques de Préparation, conformité ANSM, dossiers d\'autorisation.', en: 'Good Preparation Practices, ANSM compliance, authorization files.' },
      'e.p.eyebrow':      { fr: '02', en: '02' },
      'e.p.title':        { fr: 'PDA & Automatisation', en: 'ADD & Automation' },
      'e.p.desc':         { fr: 'L\'automatisation au service du soin. La technologie doit libérer du temps pour ce qui compte vraiment : la relation patient et la sécurisation du circuit du médicament.', en: 'Automation serving care. Technology must free up time for what truly matters: patient relationships and medication circuit safety.' },
      'e.p1.title':       { fr: 'Pilotage automates PDA', en: 'ADD robot management' },
      'e.p1.desc':        { fr: 'Sélection, déploiement, paramétrage et optimisation des robots de préparation.', en: 'Selection, deployment, configuration and optimization of dispensing robots.' },
      'e.p2.title':       { fr: 'Intégration LGO / SSI', en: 'LGO / HIS integration' },
      'e.p2.desc':        { fr: 'Connexion logiciel de gestion officine, systèmes d\'information santé, interopérabilité.', en: 'Pharmacy management software connection, health information systems, interoperability.' },
      'e.p3.title':       { fr: 'Traçabilité end-to-end', en: 'End-to-end traceability' },
      'e.p3.desc':        { fr: 'Suivi complet du circuit du médicament, de la commande à l\'administration.', en: 'Complete medication circuit tracking, from ordering to administration.' },
      'e.t.eyebrow':      { fr: '03', en: '03' },
      'e.t.title':        { fr: 'Tech & IA Santé', en: 'Tech & Health AI' },
      'e.t.desc':         { fr: 'La technologie qui libère du temps. L\'intelligence artificielle et les outils numériques doivent simplifier le quotidien, pas le complexifier.', en: 'Technology that frees up time. AI and digital tools should simplify daily work, not complicate it.' },
      'e.t1.title':       { fr: 'Workflows IA documentaires', en: 'Document AI workflows' },
      'e.t1.desc':        { fr: 'Automatisation du traitement documentaire, extraction d\'informations, synthèses.', en: 'Document processing automation, information extraction, summaries.' },
      'e.t2.title':       { fr: 'Développement outils internes', en: 'Internal tool development' },
      'e.t2.desc':        { fr: 'Applications métier sur mesure, tableaux de bord, outils de suivi.', en: 'Custom business applications, dashboards, tracking tools.' },
      'e.t3.title':       { fr: 'Prompt engineering', en: 'Prompt engineering' },
      'e.t3.desc':        { fr: 'Conception de prompts efficaces, intégration IA dans les processus métier.', en: 'Effective prompt design, AI integration in business processes.' },
      'e.cta.title':      { fr: 'Un besoin spécifique ?', en: 'A specific need?' },
      'e.cta.text':       { fr: 'Discutons de la manière dont ces expertises peuvent s\'appliquer à votre contexte.', en: 'Let\'s discuss how this expertise can apply to your context.' },
      'e.cta.btn':        { fr: 'Prendre contact', en: 'Get in touch' },

      // ===== REALISATIONS PAGE =====
      'r.eyebrow':        { fr: 'Projets', en: 'Projects' },
      'r.title.1':        { fr: 'Des résultats concrets,', en: 'Concrete results,' },
      'r.title.2':        { fr: 'des transformations mesurables.', en: 'measurable transformations.' },
      'r.desc':           { fr: 'Découvrez comment j\'ai accompagné la transformation d\'établissements de santé.', en: 'Discover how I supported the transformation of healthcare facilities.' },
      'r.feat.eyebrow':   { fr: 'Projet phare', en: 'Flagship project' },
      'r.feat.title':     { fr: 'PURE / Pharma78 — H8 Pharma', en: 'PURE / Pharma78 — H8 Pharma' },
      'r.feat.desc':      { fr: 'Pilotage de la transformation digitale complète d\'un groupement pharmaceutique : création d\'une plateforme de PDA robotisée de 2 500 m², approvisionnement de 9 EHPAD, et mise en place d\'un système qualité visant la certification ISO 9001.', en: 'Leading the complete digital transformation of a pharmaceutical group: creation of a 2,500 m² automated dispensing platform, supplying 9 nursing homes, and implementing a quality system targeting ISO 9001 certification.' },
      'r.stat1':          { fr: 'Surface pharmaceutique', en: 'Pharmaceutical area' },
      'r.stat2':          { fr: 'EHPAD approvisionnés', en: 'Nursing homes supplied' },
      'r.stat3':          { fr: 'Croissance 2025', en: '2025 Growth' },
      'r.stat4':          { fr: 'Taux d\'erreur', en: 'Error rate' },
      'r.other.eyebrow':  { fr: 'Missions', en: 'Missions' },
      'r.other.title':    { fr: 'Autres réalisations', en: 'Other projects' },
      'r.other.desc':     { fr: 'Missions d\'accompagnement et projets complémentaires.', en: 'Support missions and complementary projects.' },
      'r.card1.title':    { fr: 'DPO externalisé', en: 'Outsourced DPO' },
      'r.card1.desc':     { fr: 'Mise en conformité RGPD complète : registre des traitements, procédures de gestion des droits, sensibilisation des équipes.', en: 'Complete GDPR compliance: processing records, rights management procedures, team awareness.' },
      'r.card2.title':    { fr: 'Système Qualité ISO 9001', en: 'ISO 9001 Quality System' },
      'r.card2.desc':     { fr: 'Conception et déploiement d\'un SMQ : cartographie des processus, indicateurs, revues de direction.', en: 'QMS design and deployment: process mapping, indicators, management reviews.' },
      'r.card3.title':    { fr: 'SOPs PDA & Procédures BPP', en: 'ADD SOPs & GMP Procedures' },
      'r.card3.desc':     { fr: 'Rédaction de l\'ensemble des procédures opérationnelles standardisées conformes aux Bonnes Pratiques de Préparation.', en: 'Writing all standardized operating procedures compliant with Good Preparation Practices.' },
      'r.card4.title':    { fr: 'Outils internes & Workflows IA', en: 'Internal tools & AI Workflows' },
      'r.card4.desc':     { fr: 'Développement d\'outils de productivité internes : automatisation de documents, workflows documentaires assistés par IA.', en: 'Development of internal productivity tools: document automation, AI-assisted document workflows.' },
      'r.card5.title':    { fr: 'Formation équipes EHPAD', en: 'Nursing home staff training' },
      'r.card5.desc':     { fr: 'Programmes de formation pour les équipes soignantes sur la gestion des traitements, l\'utilisation des piluliers et la traçabilité.', en: 'Training programs for care teams on medication management, pill organizer use and traceability.' },
      'r.card6.title':    { fr: 'Optimisation achats fournisseurs', en: 'Supplier procurement optimization' },
      'r.card6.desc':     { fr: 'Renégociation des contrats grossistes et laboratoires, analyse des conditions commerciales, optimisation de la marge brute.', en: 'Wholesaler and laboratory contract renegotiation, commercial terms analysis, gross margin optimization.' },
      'r.cta.title':      { fr: 'Un projet similaire ?', en: 'A similar project?' },
      'r.cta.text':       { fr: 'Discutons de vos enjeux et de la façon dont je peux vous accompagner.', en: 'Let\'s discuss your challenges and how I can support you.' },
      'r.cta.btn':        { fr: 'Me contacter', en: 'Contact me' },

      // ===== BLOG PAGE =====
      'b.eyebrow':        { fr: 'Réflexions', en: 'Insights' },
      'b.title.1':        { fr: 'Analyses & retours', en: 'Analyses & experience' },
      'b.title.2':        { fr: 'd\'expérience.', en: 'feedback.' },
      'b.desc':           { fr: 'Réflexions sur la pharmacie, la conformité, l\'automatisation et la transformation digitale en santé.', en: 'Reflections on pharmacy, compliance, automation and digital transformation in healthcare.' },
      'b.cta.title':      { fr: 'Restez informé', en: 'Stay informed' },
      'b.cta.text':       { fr: 'Recevez les prochains articles directement par email. Pas de spam, désinscription en un clic.', en: 'Receive upcoming articles directly by email. No spam, one-click unsubscribe.' },
      'b.cta.btn':        { fr: 'Me contacter', en: 'Contact me' },

      // ===== CONTACT PAGE =====
      'co.badge':         { fr: 'Disponible pour nouveaux projets', en: 'Available for new projects' },
      'co.title.1':       { fr: 'Discutons de', en: "Let's discuss" },
      'co.title.2':       { fr: 'votre projet.', en: 'your project.' },
      'co.desc':          { fr: 'Une question, un projet de collaboration, une opportunité ? Je vous réponds sous 48h.', en: 'A question, a collaboration project, an opportunity? I respond within 48 hours.' },
      'co.form.title':    { fr: 'Envoyez-moi un message', en: 'Send me a message' },
      'co.form.name':     { fr: 'Nom complet', en: 'Full name' },
      'co.form.email':    { fr: 'Email', en: 'Email' },
      'co.form.subject':  { fr: 'Objet', en: 'Subject' },
      'co.form.message':  { fr: 'Message', en: 'Message' },
      'co.form.submit':   { fr: 'Envoyer le message', en: 'Send message' },
      'co.form.select':   { fr: 'Sélectionnez un sujet', en: 'Select a subject' },
      'co.form.dpo':      { fr: 'DPO / RGPD', en: 'DPO / GDPR' },
      'co.form.pda':      { fr: 'PDA / Automatisation', en: 'ADD / Automation' },
      'co.form.qualite':  { fr: 'Système Qualité / ISO', en: 'Quality System / ISO' },
      'co.form.conseil':  { fr: 'Conseil / Accompagnement', en: 'Consulting / Support' },
      'co.form.recruit':  { fr: 'Opportunité professionnelle', en: 'Professional opportunity' },
      'co.form.autre':    { fr: 'Autre', en: 'Other' },
      'co.email':         { fr: 'Email', en: 'Email' },
      'co.linkedin':      { fr: 'LinkedIn', en: 'LinkedIn' },
      'co.location':      { fr: 'Localisation', en: 'Location' },
      'co.location.v':    { fr: 'Bois-d\'Arcy, Yvelines (78)', en: 'Bois-d\'Arcy, Yvelines (78), France' },
      'co.location.sub':  { fr: 'Interventions Île-de-France & distanciel', en: 'Paris region & remote' },
      'co.structure':     { fr: 'Structure', en: 'Organization' },
      'co.structure.v':   { fr: 'H8 Pharma — Groupement Boticinal', en: 'H8 Pharma — Boticinal Group' },
      'co.cv.title':      { fr: 'Télécharger mon CV', en: 'Download my resume' },
      'co.cv.desc':       { fr: 'Parcours détaillé, compétences et références.', en: 'Detailed background, skills and references.' },
      'co.cv.btn':        { fr: 'Télécharger le CV (PDF)', en: 'Download resume (PDF)' },
      'co.faq.eyebrow':   { fr: 'FAQ', en: 'FAQ' },
      'co.faq.title':     { fr: 'Questions fréquentes', en: 'Frequently asked questions' },
      'co.faq1.title':    { fr: 'Quel est votre périmètre d\'intervention ?', en: 'What is your scope of intervention?' },
      'co.faq1.text':     { fr: 'Île-de-France pour les missions sur site, partout en France pour le distanciel (DPO externalisé, conseil, formation).', en: 'Paris region for on-site missions, anywhere in France for remote work (outsourced DPO, consulting, training).' },
      'co.faq2.title':    { fr: 'Quels types de structures ?', en: 'What types of organizations?' },
      'co.faq2.text':     { fr: 'Pharmacies d\'officine, groupements, EHPAD, startups santé, laboratoires. Toute structure ayant des enjeux de conformité ou transformation digitale.', en: 'Community pharmacies, groups, nursing homes, health startups, laboratories. Any organization with compliance or digital transformation challenges.' },
      'co.faq3.title':    { fr: 'Missions ponctuelles ?', en: 'One-off missions?' },
      'co.faq3.text':     { fr: 'Oui : audits, formations, accompagnement projet. Aussi des missions récurrentes (DPO externalisé, revues qualité).', en: 'Yes: audits, training, project support. Also recurring missions (outsourced DPO, quality reviews).' },
    };

    function getCurrent() {
      return localStorage.getItem(LANG_KEY) || 'fr';
    }

    function apply(lang) {
      localStorage.setItem(LANG_KEY, lang);
      document.documentElement.setAttribute('lang', lang);

      // Update all [data-i18n] elements
      $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const t = TRANSLATIONS[key];
        if (t && t[lang]) el.textContent = t[lang];
      });

      // Update switch buttons
      $$('.lang-switch__btn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('lang-switch__btn--active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
    }

    function init() {
      const saved = getCurrent();
      apply(saved);

      $$('.lang-switch__btn').forEach(btn => {
        btn.addEventListener('click', () => {
          apply(btn.dataset.lang);
        });
      });
    }

    return { init, apply, getCurrent };
  }());

  /* =========================================================
     INITIALISATION
  ========================================================= */

  function boot() {
    injectTerminalStyles();
    ThemeManager.init();
    TerminalBg.init();
    Header.init();
    MobileMenu.init();
    SmoothScroll.init();
    RevealManager.init();
    StatCounter.init();
    ContactForm.init();
    initThemeToggle();
    LangSwitch.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

}());
