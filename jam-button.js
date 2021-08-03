/**
 * JustAuthMe Login button SDK
 * Author: Peter Cauty
 * Release date: 2020-02-17
 * License: MIT
 */

const justauthme_button_html = (size, lang, shape, app_id, callback) => {
    if (app_id === null || callback === null) {
        return '<pre>JustAuthMe button error: missing app ID or callback URL</pre>';
    }

    const sizes = {
        'regular': '',
        'small': 'jam-btn-small',
        'large': 'jam-btn-large'
    };
    const langs = {
        'fr': 'fr',
        'en': 'en'
    };
    const shapes = {
        'squared': '',
        'rounded': 'jam-btn-rounded'
    };

    lang = lang || '';
    if (lang === '' || !(lang in langs)) {
        lang = navigator.language || navigator.userLanguage;
        lang = lang.substr(0, 2).toLowerCase();

        if (!(lang in langs)) {
            lang = 'en';
        }
    }
    if (!(size in sizes)) {
        size = 'regular';
    }
    if (!(shape in shapes)) {
        shape = 'squared';
    }

    const t = (lang, param) => {
        const strings = {
            'en': '<span class="jam-btn-label">Login with</span> %s',
            'fr': '<span class="jam-btn-label">Connexion avec</span> %s'
        };

        return strings[lang].replace('%s', param);
    }

    return '<a href="https://core.justauth.me/auth?app_id=' + app_id + '&redirect_url=' + callback + '"' +
    '    class="jam-btn ' + sizes[size] + ' ' + shapes[shape] + '">' +
    '    <div class="jam-btn-content">' +
    '        <div class="jam-btn-logo">' +
    '            <img src="https://static.justauth.me/medias/2_WHITE.png" alt="JAM" />' +
    '        </div>' +
    '        <div class="jam-btn-text">' +
                 t(langs[lang], '<span class="jam-btn-brand">' +
                     '<span class="jam-btn-bold">JustAuth</span><span class="jam-btn-thin">Me</span>' +
                 '</span>') +
    '        </div>' +
    '    </div>' +
    '</a>';
};

const header = document.getElementsByTagName('head')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './jam-button.css';
header.appendChild(link);

const justauthme_render_buttons = () => {
    const buttons = document.getElementsByClassName('jam-button');
    for (let i = 0; i < buttons.length; i++) {
        const size = buttons[i].getAttribute('data-size');
        const lang = buttons[i].getAttribute('data-lang');
        const shape = buttons[i].getAttribute('data-shape');
        const app_id = buttons[i].getAttribute('data-app-id');
        const callback = buttons[i].getAttribute('data-callback');

        buttons[i].innerHTML = justauthme_button_html(size, lang, shape, app_id, callback);
    }
};

justauthme_render_buttons();
