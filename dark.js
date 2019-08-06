const main = '#222629';
const main_dark = '#191C1E';
const main_light = '#2E3338';
const text = '#ddd';
const text_light = '#fff';
const text_dark = '#222';
const text_disabled = '#999';

const primary = '#26547C';
const info = '#FFD166';
const success = '#06D6A0';
const error = '#EF476F';
const warn = '#E55934';

module.exports = {
    '@layout-header-height': '48px',
    '@primary-color': primary,
    '@processing-color': info,
    '@info-color': info,
    '@success-color': success,
    '@error-color': error,
    '@highlight-color': error,
    '@warning-color': warn,
    '@text-color': text,
    '@text-color-dark': text_dark,
    '@disabled-color': text_disabled,
    '@text-color-secondary': text_disabled,
    '@heading-color': text_light,
    '@heading-color-dark': text_dark,
    '@link-color': `lighten(${primary}, 10%)`,
    '@body-background': main,
    '@component-background': main_light,
    '@item-active-bg': primary,
    '@item-hover-bg': primary,
    '@menu-highlight-color': text,
    '@table-row-hover-bg': `darken(${primary}, 10%)`,
    '@border-color-base': main_dark,
    '@border-color-split': main_light,
    '@background-color-light': main_light,
    '@background-color-base': main_light,
    '@checkbox-check-color': main_light,
    '@layout-header-background': main_dark,
    '@layout-body-background': main,
    '@alert-success-border-color': success,
    '@alert-success-bg-color': `darken(${success}, 20%)`,
    '@alert-success-icon-color': success,
    '@alert-info-border-color': info,
    '@alert-info-bg-color': `darken(${info}, 30%)`,
    '@alert-info-icon-color': info,
    '@alert-warning-border-color': warn,
    '@alert-warning-bg-color': `darken(${warn}, 20%)`,
    '@alert-warning-icon-color': warn,
    '@alert-error-border-color': error,
    '@alert-error-bg-color': `darken(${error}, 20%)`,
    '@alert-error-icon-color': error
}