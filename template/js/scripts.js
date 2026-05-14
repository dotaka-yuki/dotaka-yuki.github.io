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
            'about.contact': '3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · <a href="mailto:name@email.com">name@email.com</a>',
            'about.lead': 'I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
            'experience.heading': 'Experience',
            'experience.job1.title': 'Senior Web Developer',
            'experience.job1.description': 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
            'experience.job2.title': 'Web Developer',
            'experience.job2.description': 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.',
            'experience.job3.title': 'Junior Web Designer',
            'experience.job3.description': 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.',
            'experience.job4.title': 'Web Design Intern',
            'experience.job4.description': 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
            'education.heading': 'Education',
            'education.degree': 'Bachelor of Science',
            'education.focus': 'Computer Science - Web Development Track',
            'education.gpa1': 'GPA: 3.23',
            'education.program': 'Technology Magnet Program',
            'education.gpa2': 'GPA: 3.56',
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
            'brand.name': '堂高　友樹',
            'brand.profileAlt': '堂高　友樹 のプロフィール写真',
            'nav.toggle': 'ナビゲーションを切り替え',
            'nav.about': '概要',
            'nav.experience': '職歴',
            'nav.education': '学歴',
            'nav.skills': 'スキル',
            'nav.interests': '興味',
            'nav.awards': '受賞歴',
            'about.firstName': '友樹',
            'about.lastName': '堂高',
            'about.contact': '名古屋工業大学· <a href="mailto:dotaka.yuki.9@gmail.com">dotaka.yuki.9@gmail.com</a>',
            'about.lead': '車輪付きドローンの制御に関する研究を行っています．特に、ドローンの飛行制御や障害物回避に関するアルゴリズムの開発に注力しています．',
            'experience.heading': '職歴',
            'experience.job1.title': 'シニア Web 開発者',
            'experience.job1.description': '積極的な主導を確実にするため、双方に利益のある成長戦略を提案します。最終的には、世代 X から進化した新しい流れの中で、効率化されたクラウドソリューションへとつながります。リアルタイムのユーザー生成コンテンツは、オフショア開発の多くの接点を生みます。',
            'experience.job2.title': 'Web 開発者',
            'experience.job2.description': '目の前の成果を活かして、試験導入に向けた価値のある取り組みを見極めます。DevOps による追加のクリック誘導で、デジタル格差を乗り越えます。情報ハイウェイ上でのナノテクノロジーの導入は、最終的に利益だけに集中する姿勢を是正します。',
            'experience.job3.title': 'ジュニア Web デザイナー',
            'experience.job3.description': 'ワークフロー内の運用変更管理をポッドキャストのように回し、仕組みを構築します。シームレスな重要指標をオフライン化し、長期的な成果を最大化します。スタートアップ志向を深く掘り下げ、クロスプラットフォーム統合へと収束させます。',
            'experience.job4.title': 'Web デザインインターン',
            'experience.job4.description': 'プラグアンドプレイ型のネットワークで、権限を持つ市場を協働で運営します。導入済み基盤の恩恵を受けた B2C ユーザーを柔軟に先送りし、顧客主導の収束を大胆に可視化します。',
            'education.heading': '学歴',
            'education.degree': '理学士',
            'education.focus': 'コンピュータサイエンス - Web 開発トラック',
            'education.gpa1': 'GPA: 3.23',
            'education.program': 'テクノロジー・マグネット・プログラム',
            'education.gpa2': 'GPA: 3.56',
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
