const matchHtmlRegExp = /["'&<>]/;

/**
 * @description 将非法字符进行转义 防止xss
 * @param string
 * @returns {string}
 */
function escapeHtml(content: string) {
    let str = `${content}`;
    let match = matchHtmlRegExp.exec(str);

    if (!match) {
        return str;
    }
    let escape;
    let html = '';
    let index = 0;
    let lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
        case 34: // "
            escape = '&quot;';
            break;
        case 38: // &
            escape = '&amp;';
            break;
        case 39: // '
            escape = '&#x27;';// modified from escape-html; used to be '&#39'
            break;
        case 60: // <
            escape = '&lt;';
            break;
        case 62: // >
            escape = '&gt;';
            break;
        default:
            continue;
        }

        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escape;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

export default escapeHtml;
