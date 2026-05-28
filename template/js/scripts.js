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
            'site.title': 'Resume - Dotaka Yuki',
            'site.description': 'A bilingual resume for Yuki Dotaka (Nagoya Institute of Technology).',
            'brand.name': 'Yuki Dotaka',
            'brand.profileAlt': 'Yuki Dotaka profile picture',
            'nav.toggle': 'Toggle navigation',
            'nav.about': 'About',
            'nav.experience': 'Research Experience',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.interests': 'Interests',
            'nav.awards': 'Awards',
            'about.firstName': 'Yuki',
            'about.lastName': 'Dotaka',
            'about.contact': 'Nagoya Institute of Technology · <a href="mailto:dotaka.yuki.9@gmail.com">dotaka.yuki.9@gmail.com</a>',
            'about.lead': 'I am a second-year master\'s student at Nagoya Institute of Technology researching control of wheeled drones. I focus on developing flight control and obstacle-avoidance algorithms. (This site is under construction and may contain inaccuracies.)',
            'experience.heading': 'Research Experience',
            'experience.job1.title': 'Master\'s Thesis Research',
            'experience.job1.description': 'Developing and evaluating control and obstacle-avoidance methods for autonomous wheeled drones.',
            'experience.job2.title': 'Laboratory Research Member',
            'experience.job2.description': 'Collaborating with lab members on sensor integration, algorithm implementation, and experimental validation.',
            'experience.job3.title': 'Research Assistant',
            'experience.job3.description': 'Supported prototype testing, documentation, and repeated verification of experimental results.',
            'experience.job4.title': 'Research Assistant (Additional)',
            'experience.job4.description': 'Assisted with experiments, data collection, and analysis.',
            'education.heading': 'Academic Background',
            'education.school1': 'Nagoya Institute of Technology',
            'education.degree': 'Master\'s Program',
            'education.focus': 'Wheeled drone control',
            'education.gpa1': 'Expected graduation: 2026',
            'education.period1': 'Master\'s student',
            'education.school2': 'Nagoya Institute of Technology',
            'education.program': 'Mechanical Engineering (Bachelor)',
            'education.gpa2': 'Mechanical Engineering',
            'education.period2': 'Bachelor\'s student',
            'skills.heading': 'Skills',
            'skills.languagesTools': 'Programming Languages & Tools',
            'skills.workflowHeading': 'Workflow',
            'skills.workflow1': 'Mobile-First, Responsive Design',
            'skills.workflow2': 'Cross Browser Testing & Debugging',
            'skills.workflow3': 'Cross Functional Teams',
            'skills.workflow4': 'Agile Development & Scrum',
            'interests.heading': 'Interests',
            'interests.paragraph1': 'I enjoy spending time outdoors. In winter I ski; in warmer months I enjoy mountain biking and climbing.',
            'interests.paragraph2': 'I am also interested in technology advancements in robotics and control systems.',
            'awards.heading': 'Awards & Certifications',
            'publications.heading': 'Publications',
            'presentations.heading': 'Presentations',
        },
        ja: {
            'site.title': '履歴書 - Start Bootstrap テーマ',
            'site.description': '日本語と英語を切り替えられる履歴書テンプレートです。',
            'brand.name': '堂高 友樹',
            'brand.profileAlt': '堂高友樹のプロフィール写真',
            'nav.toggle': 'ナビゲーションを切り替え',
            'nav.about': '概要',
            'nav.experience': '職歴',
            'nav.education': '学歴',
            'nav.skills': 'スキル',
            'nav.interests': '興味',
            'nav.awards': '受賞歴',
            'about.firstName': '堂高',
            'about.lastName': '友樹',
            'about.contact': '名古屋工業大学大学院 · <a href="mailto:dotaka.yuki.9@gmail.com">dotaka.yuki.9@gmail.com</a>',
            'about.lead': '名古屋工業大学大学院の修士2年生です．車輪付きドローンの制御に関する研究を行っています．特に、ドローンの飛行制御や障害物回避に関するアルゴリズムの開発に取り組んでいます．（ホームページは作成途中のため間違った情報が含まれていることがあります．）',
            'experience.heading': '研究歴',
            'experience.job1.title': '修士論文研究',
            'experience.job1.description': '自律走行する車輪付きドローン向けの制御手法と障害物回避手法を開発・評価しています。',
            'experience.job2.title': '研究室メンバー',
            'experience.job2.description': '研究室のメンバーと協力し、センサ統合、アルゴリズム実装、実験検証を行っています。',
            'education.heading': '学歴',
            'education.school1': '名古屋工業大学大学院',
            'education.degree': '博士前期課程（修士課程）',
            'education.focus': '車輪付きドローン制御',
            'education.gpa1': '2026年修了予定',
            'education.period1': '修士課程在籍',
            'education.school2': '名古屋工業大学',
            'education.program2': '電気・機械工学科　機械工学プログラム',
            'education.period2': '学士課程卒業',
            'education.school3': '石川工業高等専門学校',
            'education.program3': '機械工学科',
            'education.period3': '準学士課程卒業',
            'awards.heading': '受賞歴と資格',
            'publications.heading': '学術論文',
            'presentations.heading': '学会発表',
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

    // Load and render publications and presentations from JSON files in /data/
    function loadAndRenderJSON(url, renderFn) {
        fetch(url)
            .then((resp) => {
                if (!resp.ok) return [];
                return resp.json();
            })
            .then((data) => {
                renderFn(Array.isArray(data) ? data : []);
            })
            .catch(() => renderFn([]));
    }

    function renderPublications(items) {
        const container = document.getElementById('publications-list');
        if (!container) return;
        if (!items || items.length === 0) {
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

        const sorted = items.slice().sort((a, b) => getDateValue(b) - getDateValue(a));

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
        if (!items || items.length === 0) {
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

        const sorted = items.slice().sort((a, b) => getDateValue(b) - getDateValue(a));

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
            ul.appendChild(li);
        });

        container.innerHTML = '';
        container.appendChild(ul);
    }

    loadAndRenderJSON('data/publications.json', renderPublications);
    loadAndRenderJSON('data/presentations.json', renderPresentations);
});
