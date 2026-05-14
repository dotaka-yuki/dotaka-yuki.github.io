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
            'site.title': 'Resume - Start Bootstrap Theme',
            'site.description': 'A bilingual resume template that switches between Japanese and English.',
            'brand.name': 'Clarence Taylor',
            'brand.profileAlt': 'Clarence Taylor profile picture',
            'nav.toggle': 'Toggle navigation',
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.education': 'Education',
            'nav.skills': 'Skills',
            'nav.interests': 'Interests',
            'nav.awards': 'Awards',
            'about.firstName': 'Clarence',
            'about.lastName': 'Taylor',
            'about.contact': 'Nagoya Institute of Technology · <a href="mailto:dotaka.yuki.9@gmail.com">dotaka.yuki.9@gmail.com</a>',
            'about.lead': 'I am a master\'s student at Nagoya Institute of Technology, conducting research on wheeled drone control. My work focuses on flight control and obstacle avoidance algorithms for autonomous drones.',
            'experience.heading': 'Research Experience',
            'experience.job1.title': 'Graduate Research Assistant',
            'experience.job1.description': 'Assisted with research on wheeled drone control, including simulation, experimental setup, and data analysis.',
            'experience.job2.title': 'Master\'s Thesis Project',
            'experience.job2.description': 'Developed and evaluated control and obstacle-avoidance methods for autonomous wheeled drones.',
            'experience.job3.title': 'Laboratory Research Member',
            'experience.job3.description': 'Worked with lab members on sensor integration, algorithm implementation, and experimental validation.',
            'experience.job4.title': 'Research Assistant',
            'experience.job4.description': 'Supported prototype testing, documentation, and repeated verification of experimental results.',
            'education.heading': 'Academic Background',
            'education.school1': 'Nagoya Institute of Technology',
            'education.degree': 'Master\'s Program',
            'education.focus': 'Wheeled drone control and autonomous systems',
            'education.gpa1': 'Expected graduation: 2026',
            'education.period1': 'Master\'s student',
            'education.school2': 'Nagoya Institute of Technology',
            'education.program': 'Bachelor\'s Program',
            'education.gpa2': 'Computer science and engineering foundations',
            'education.period2': 'Bachelor\'s student',
            'skills.heading': 'Skills',
            'skills.languagesTools': 'Programming Languages & Tools',
            'skills.workflowHeading': 'Workflow',
            'skills.workflow1': 'Mobile-First, Responsive Design',
            'skills.workflow2': 'Cross Browser Testing & Debugging',
            'skills.workflow3': 'Cross Functional Teams',
            'skills.workflow4': 'Agile Development & Scrum',
            'interests.heading': 'Interests',
            'interests.paragraph1': 'Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.',
            'interests.paragraph2': 'When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.',
            'awards.heading': 'Awards & Certifications',
            'awards.item1': 'Google Analytics Certified Developer',
            'awards.item2': 'Mobile Web Specialist - Google Certification',
            'awards.item3': '1 <sup>st</sup> Place - University of Colorado Boulder - Emerging Tech Competition 2009',
            'awards.item4': '1 <sup>st</sup> Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)',
            'awards.item5': '2 <sup>nd</sup> Place - University of Colorado Boulder - Emerging Tech Competition 2008',
            'awards.item6': '1 <sup>st</sup> Place - James Buchanan High School - Hackathon 2006',
            'awards.item7': '3 <sup>rd</sup> Place - James Buchanan High School - Hackathon 2005',
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
            'experience.job1.title': '大学院研究補助員',
            'experience.job1.description': '車輪付きドローン制御の研究に参加し、シミュレーション、実験環境の構築、データ解析を担当しました。',
            'experience.job2.title': '修士論文研究',
            'experience.job2.description': '自律走行する車輪付きドローン向けの制御手法と障害物回避手法を開発・評価しています。',
            'experience.job3.title': '研究室メンバー',
            'experience.job3.description': '研究室のメンバーと協力し、センサ統合、アルゴリズム実装、実験検証を行っています。',
            'experience.job4.title': '研究補助',
            'experience.job4.description': '試作機のテスト、資料作成、実験結果の再検証を支援しました。',
            'education.heading': '学歴',
            'education.school1': '名古屋工業大学大学院',
            'education.degree': '博士前期課程（修士課程）',
            'education.focus': '車輪付きドローン制御・自律移動システム',
            'education.gpa1': '2026年修了予定',
            'education.period1': '修士課程在籍',
            'education.school2': '名古屋工業大学',
            'education.program': '学士課程',
            'education.gpa2': 'コンピュータサイエンス・工学基礎',
            'education.period2': '学士課程在籍',
            'skills.heading': 'スキル',
            'skills.languagesTools': 'プログラミング言語とツール',
            'skills.workflowHeading': '業務フロー',
            'skills.workflow1': 'モバイルファーストのレスポンシブデザイン',
            'skills.workflow2': 'クロスブラウザテストとデバッグ',
            'skills.workflow3': '部門横断チームでの連携',
            'skills.workflow4': 'アジャイル開発とスクラム',
            'interests.heading': '興味',
            'interests.paragraph1': 'Web 開発者である以外の時間は、屋外で過ごすことが多いです。冬は熱心なスキーヤーで、初心者のアイスクライマーでもあります。コロラドの暖かい季節には、マウンテンバイク、フリークライミング、カヤックを楽しみます。',
            'interests.paragraph2': '屋内にいるときは、SF やファンタジー作品の映画やテレビ番組をよく見ます。料理の腕も磨きたいと思っており、空いた時間の多くをフロントエンド Web 開発の最新技術を調べることに使っています。',
            'awards.heading': '受賞歴と資格',
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
});
