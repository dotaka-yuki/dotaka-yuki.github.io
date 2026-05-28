/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            'site.title': 'Resume - Yuki Dotaka',
            'site.description': 'A bilingual resume for Yuki Dotaka (Nagoya Institute of Technology).',
            'brand.name': 'Yuki Dotaka',
            'brand.profileAlt': 'Profile picture of Yuki Dotaka',
            'nav.toggle': 'Toggle navigation',
            'nav.about': 'About',
            'nav.experience': 'Research History',
            'nav.education': 'Education',
            'nav.presentations': 'Presentations',
            'nav.publications': 'Publications',
            'nav.skills': 'Skills',
            'nav.interests': 'Interests',
            'nav.awards': 'Awards',
            'education.heading': 'Education',
            'awards.heading': 'Awards & Certifications',
        },
        ja: {
            'site.title': '履歴書 - Start Bootstrap テーマ',
            'site.description': '日本語と英語を切り替えられる履歴書テンプレートです。',
            'brand.name': '堂高 友樹',
            'brand.profileAlt': '堂高友樹のプロフィール写真',
            'nav.toggle': 'ナビゲーションを切り替え',
            'nav.about': '概要',
            'nav.experience': '研究歴',
            'nav.education': '学歴',
            'nav.presentations': '学会発表',
            'nav.publications': '学術論文',
            'nav.skills': 'スキル',
            'nav.interests': '興味',
            'nav.awards': '受賞歴',
            'education.heading': '学歴',
            'awards.heading': '受賞歴',
        },
    };

    const sideNav = document.body.querySelector('#sideNav');
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
    const languageButtons = [].slice.call(document.querySelectorAll('[data-lang-switch]'));
    const descriptionMeta = document.querySelector('meta[name="description"]');

    function applyLanguage(language) {
        const selectedLanguage = translations[language] ? language : 'en';
        const bundle = translations[selectedLanguage];

        document.documentElement.lang = selectedLanguage;
        document.title = bundle['site.title'];

        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', bundle['site.description']);
        }

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            const value = bundle[key];

            if (value === undefined) {
                return;
            }

            if (element.dataset.i18nAttr) {
                element.setAttribute(element.dataset.i18nAttr, value);
                return;
            }

            if (element.dataset.i18nHtml === 'true') {
                element.innerHTML = value;
                return;
            }

            element.textContent = value;
        });

        languageButtons.forEach((button) => {
            const isActive = button.dataset.langSwitch === selectedLanguage;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', String(isActive));
        });

        try {
            localStorage.setItem('site-language', selectedLanguage);
        } catch (error) {
            // Ignore storage failures in private browsing or restricted environments.
        }
    }

    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    languageButtons.forEach((button) => {
        button.addEventListener('click', () => {
            applyLanguage(button.dataset.langSwitch);
            // reload data to reflect language change (JSON files may contain bilingual fields)
            loadAndRenderJSON('data/about.json', renderAbout);
            loadAndRenderJSON('data/experience.json', renderExperience);
            loadAndRenderJSON('data/education.json', renderEducation);
            loadAndRenderJSON('data/awards.json', renderAwards);
            loadAndRenderJSON('data/publications.json', renderPublications);
            loadAndRenderJSON('data/presentations.json', renderPresentations);
        });
    });

    responsiveNavItems.forEach((responsiveNavItem) => {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    let initialLanguage = 'en';
    let storedLanguage = null;

    try {
        storedLanguage = localStorage.getItem('site-language');
    } catch (error) {
        storedLanguage = null;
    }

    if (storedLanguage) {
        initialLanguage = storedLanguage;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('ja')) {
        initialLanguage = 'ja';
    }

    applyLanguage(initialLanguage);

    // Helpers and renderers for external section data (about, experience, education, awards)
    function getLocalizedField(it, base) {
        if (!it) return '';
        const lang = document.documentElement.lang || 'en';
        const keyLang = `${base}_${lang}`;
        if (it[keyLang] && String(it[keyLang]).trim() !== '') return it[keyLang];
        const keyEn = `${base}_en`;
        if (it[keyEn] && String(it[keyEn]).trim() !== '') return it[keyEn];
        if (it[base] && String(it[base]).trim() !== '') return it[base];
        return '';
    }

    function renderAbout(data) {
        if (!data) return;
        const first = document.querySelector('[data-i18n="about.firstName"]');
        const last = document.querySelector('[data-i18n="about.lastName"]');
        const contact = document.querySelector('[data-i18n="about.contact"]');
        const lead = document.querySelector('[data-i18n="about.lead"]');
        if (first) first.textContent = getLocalizedField(data, 'firstName');
        if (last) last.textContent = getLocalizedField(data, 'lastName');
        if (contact) {
            const affiliation = getLocalizedField(data, 'affiliation');
            const email = (data.email || '').trim();
            if (affiliation && email) {
                contact.innerHTML = `${affiliation} · <a href="mailto:${email}">${email}</a>`;
            } else {
                // Backward-compatible fallback for legacy JSON structure.
                contact.innerHTML = getLocalizedField(data, 'contact');
            }
        }
        if (lead) lead.textContent = getLocalizedField(data, 'lead');
    }

    function renderExperience(data) {
        const container = document.getElementById('experience-list');
        if (!container) return;
        container.innerHTML = '';
        if (!data) return;
        const items = Array.isArray(data) ? data : (Array.isArray(data.items) ? data.items : []);
        // optional heading from data
        if (!Array.isArray(data) && data) {
            const headingEl = document.querySelector('[data-i18n="experience.heading"]');
            if (headingEl) {
                const lang = document.documentElement.lang || 'en';
                const key = `heading_${lang}`;
                if (data[key]) headingEl.textContent = data[key];
            }
        }
        if (!items || items.length === 0) return;
        items.forEach((it) => {
            const row = document.createElement('div');
            row.className = 'd-flex flex-column flex-md-row justify-content-between mb-5';
            const left = document.createElement('div');
            left.className = 'flex-grow-1';
            const title = getLocalizedField(it, 'title');
            const org = getLocalizedField(it, 'organization');
            const desc = getLocalizedField(it, 'description');
            if (title) left.innerHTML += `<h3 class="mb-0">${title}</h3>`;
            if (org) left.innerHTML += `<div class="subheading mb-3">${org}</div>`;
            if (desc) left.innerHTML += `<p>${desc}</p>`;
            const right = document.createElement('div');
            right.className = 'flex-shrink-0';
            if (it.period) right.innerHTML = `<span class="text-primary">${it.period}</span>`;
            row.appendChild(left);
            row.appendChild(right);
            container.appendChild(row);
        });
    }

    function renderEducation(items) {
        const container = document.getElementById('education-list');
        if (!container) return;
        container.innerHTML = '';
        const eduItems = Array.isArray(items) ? items : (Array.isArray(items && items.items) ? items.items : []);
        if (!eduItems || eduItems.length === 0) return;
        // Populate static education-related data-i18n placeholders from JSON
        try {
            const mappings = [
                { key: 'education.school1', idx: 0, base: 'school' },
                { key: 'education.degree', idx: 0, base: 'degree' },
                { key: 'education.focus', idx: 0, base: 'focus' },
                { key: 'education.gpa1', idx: 0, base: 'period' },
                { key: 'education.period1', idx: 0, base: 'period' },
                { key: 'education.school2', idx: 1, base: 'school' },
                { key: 'education.program2', idx: 1, base: 'focus' },
                { key: 'education.program', idx: 1, base: 'focus' },
                { key: 'education.period2', idx: 1, base: 'period' },
                { key: 'education.school3', idx: 2, base: 'school' },
                { key: 'education.program3', idx: 2, base: 'focus' },
                { key: 'education.period3', idx: 2, base: 'period' },
            ];
            mappings.forEach((m) => {
                const el = document.querySelector(`[data-i18n="${m.key}"]`);
                const it = eduItems[m.idx];
                if (el && it) {
                    const val = getLocalizedField(it, m.base);
                    if (val !== undefined && val !== null) el.textContent = val;
                }
            });
        } catch (e) {
            // ignore any errors when populating static fields
        }
        eduItems.forEach((it) => {
            const row = document.createElement('div');
            row.className = 'd-flex flex-column flex-md-row justify-content-between mb-5';
            const left = document.createElement('div');
            left.className = 'flex-grow-1';
            const school = getLocalizedField(it, 'school');
            const degree = getLocalizedField(it, 'degree');
            const focus = getLocalizedField(it, 'focus');
            if (school) left.innerHTML += `<h3 class="mb-0">${school}</h3>`;
            if (degree) left.innerHTML += `<div class="subheading mb-3">${degree}</div>`;
            if (focus) left.innerHTML += `<div>${focus}</div>`;
            const right = document.createElement('div');
            right.className = 'flex-shrink-0';
            if (it.period) right.innerHTML = `<span class="text-primary">${it.period}</span>`;
            row.appendChild(left);
            row.appendChild(right);
            container.appendChild(row);
        });
    }

    function renderAwards(items) {
        const ul = document.getElementById('awards-list');
        if (!ul) return;
        ul.innerHTML = '';
        const awardItems = Array.isArray(items) ? items : (Array.isArray(items && items.items) ? items.items : []);
        if (!awardItems || awardItems.length === 0) return;
        awardItems.forEach((it) => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="fa-li"><i class="fas fa-trophy text-warning"></i></span> ${getLocalizedField(it, 'text')}`;
            ul.appendChild(li);
        });
    }

    // Load section data files and render
    loadAndRenderJSON('data/about.json', renderAbout);
    loadAndRenderJSON('data/experience.json', renderExperience);
    loadAndRenderJSON('data/education.json', renderEducation);
    loadAndRenderJSON('data/awards.json', renderAwards);

    // Load and render publications and presentations from JSON files in /data/
    function loadAndRenderJSON(url, renderFn) {
        const tryUrls = (() => {
            const base = window.location.pathname.replace(/\/[^/]*$/, '/');
            return [url, './' + url, base + url, '/' + url];
        })();

        let tried = 0;

        function attempt(nextUrls) {
            if (!nextUrls || nextUrls.length === 0) {
                console.error(`loadAndRenderJSON: failed to fetch ${url} after ${tried} attempts`);
                renderFn(null);
                return;
            }
            const u = nextUrls[0];
            tried += 1;
            // Append cache-busting query to avoid stale cached JSON in browser
            const fetchUrl = u + (u.indexOf('?') !== -1 ? '&' : '?') + 'cb=' + Date.now();
            fetch(fetchUrl)
                .then((resp) => {
                    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                    return resp.json();
                })
                .then((data) => {
                    console.debug(`loadAndRenderJSON: fetched ${u}`);
                    renderFn(data);
                })
                .catch((err) => {
                    console.warn(`loadAndRenderJSON: fetch ${u} failed: ${err}`);
                    attempt(nextUrls.slice(1));
                });
        }

        attempt(tryUrls);
    }

    function renderPublications(items) {
        const container = document.getElementById('publications-list');
        if (!container) return;
        const pubItems = Array.isArray(items) ? items : (Array.isArray(items && items.items) ? items.items : []);
        if (!pubItems || pubItems.length === 0) {
            container.innerHTML = '';
            return;
        }
        function getLocalized(it, base) {
            const lang = document.documentElement.lang || 'en';
            const keyLang = `${base}_${lang}`;
            if (it[keyLang] && String(it[keyLang]).trim() !== '') return it[keyLang];
            const keyEn = `${base}_en`;
            if (it[keyEn] && String(it[keyEn]).trim() !== '') return it[keyEn];
            if (it[base] && String(it[base]).trim() !== '') return it[base];
            return '';
        }
        function getDateValue(it) {
            if (!it) return 0;
            if (it.date) {
                const t = Date.parse(it.date);
                if (!isNaN(t)) return t;
                const t2 = Date.parse(it.date + '-01');
                if (!isNaN(t2)) return t2;
            }
            if (it.year) {
                const y = Number(it.year);
                if (!isNaN(y)) return new Date(y, 0, 1).getTime();
            }
            return 0;
        }

        const sorted = pubItems.slice().sort((a, b) => getDateValue(b) - getDateValue(a));

        const ul = document.createElement('ul');
        ul.className = 'mb-0';
        sorted.forEach((it) => {
            const li = document.createElement('li');
            const parts = [];
            const title = getLocalized(it, 'title');
            const authors = getLocalized(it, 'authors');
            const journal = getLocalized(it, 'journal');
            if (title) parts.push(`<strong>${title}</strong>`);
            if (authors) parts.push(authors);
            if (journal) parts.push(`<em>${journal}</em>`);
            if (it.year) parts.push(`(${it.year})`);
            if (it.link) parts.push(`<a href="${it.link}" target="_blank" rel="noopener">リンク</a>`);
            li.innerHTML = parts.join(' — ');
            ul.appendChild(li);
        });

        container.innerHTML = '';
        container.appendChild(ul);
    }

    function renderPresentations(items) {
        const container = document.getElementById('presentations-list');
        if (!container) return;
        const presItems = Array.isArray(items) ? items : (Array.isArray(items && items.items) ? items.items : []);
        if (!presItems || presItems.length === 0) {
            container.innerHTML = '';
            return;
        }
        function getDateValue(it) {
            if (!it) return 0;
            if (it.date) {
                const t = Date.parse(it.date);
                if (!isNaN(t)) return t;
                const t2 = Date.parse(it.date + '-01');
                if (!isNaN(t2)) return t2;
            }
            return 0;
        }
        function getLocalized(it, base) {
            const lang = document.documentElement.lang || 'en';
            const keyLang = `${base}_${lang}`;
            if (it[keyLang] && String(it[keyLang]).trim() !== '') return it[keyLang];
            const keyEn = `${base}_en`;
            if (it[keyEn] && String(it[keyEn]).trim() !== '') return it[keyEn];
            if (it[base] && String(it[base]).trim() !== '') return it[base];
            return '';
        }

        const sorted = presItems.slice().sort((a, b) => getDateValue(b) - getDateValue(a));

        const ul = document.createElement('ul');
        ul.className = 'mb-0';
        sorted.forEach((it) => {
            const li = document.createElement('li');
            const parts = [];
            const title = getLocalized(it, 'title');
            const venue = getLocalized(it, 'venue');
            if (title) parts.push(`<strong>${title}</strong>`);
            if (venue) parts.push(venue);
            if (it.date) parts.push(it.date);
            if (it.link) parts.push(`<a href="${it.link}" target="_blank" rel="noopener">リンク</a>`);
            li.innerHTML = parts.join(' — ');
            // 備考（ローカライズ対応）
            const note = getLocalized(it, 'note');
            if (note) {
                const noteDiv = document.createElement('div');
                noteDiv.className = 'small text-muted mt-1';
                noteDiv.textContent = note;
                li.appendChild(noteDiv);
            }
            ul.appendChild(li);
        });

        container.innerHTML = '';
        container.appendChild(ul);
    }

    loadAndRenderJSON('data/publications.json', renderPublications);
    loadAndRenderJSON('data/presentations.json', renderPresentations);
});
