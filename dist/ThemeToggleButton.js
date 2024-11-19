import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import Cookies from 'universal-cookie';
import { Icon } from '@openedx/paragon';
import { WbSunny, Nightlight } from '@openedx/paragon/icons';
var themeCookie = 'indigo-toggle-dark';
var themeCookieExpiry = 90; // days

var ThemeToggleButton = function ThemeToggleButton() {
  var cookies = new Cookies();
  var isThemeToggleEnabled = getConfig().INDIGO_ENABLE_DARK_TOGGLE;
  var getCookieExpiry = function getCookieExpiry() {
    var today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + themeCookieExpiry);
  };
  var getCookieOptions = function getCookieOptions(serverURL) {
    return {
      domain: serverURL.hostname,
      path: '/',
      expires: getCookieExpiry()
    };
  };
  var onToggleTheme = function onToggleTheme() {
    var serverURL = new URL(getConfig().LMS_BASE_URL);
    var theme = '';
    if (cookies.get(themeCookie) === 'dark') {
      document.body.classList.remove('indigo-dark-theme');
      var logo = document.querySelector('.logo');
      if (logo) {
        logo.src = getConfig().LOGO_URL;
      }
      theme = 'light';
    } else {
      document.body.classList.add('indigo-dark-theme');
      var _logo = document.querySelector('.logo');
      if (_logo) {
        _logo.src = getConfig().LOGO_WHITE_URL;
      }
      theme = 'dark';
    }
    cookies.set(themeCookie, theme, getCookieOptions(serverURL));
    var learningMFEUnitIframe = document.getElementById('unit-iframe');
    if (learningMFEUnitIframe) {
      learningMFEUnitIframe.contentWindow.postMessage({
        'indigo-toggle-dark': theme
      }, serverURL.origin);
    }
  };
  if (!isThemeToggleEnabled) {
    return /*#__PURE__*/React.createElement("div", null);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "theme-toggle-button"
  }, /*#__PURE__*/React.createElement("div", {
    className: "light-theme-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    src: WbSunny
  })), /*#__PURE__*/React.createElement("div", {
    className: "toggle-switch"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "theme-toggle-checkbox",
    className: "switch"
  }, /*#__PURE__*/React.createElement("input", {
    id: "theme-toggle-checkbox",
    defaultChecked: cookies.get(themeCookie) === 'dark',
    onChange: onToggleTheme,
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: "slider round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dark-theme-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    src: Nightlight
  })));
};
export default ThemeToggleButton;
//# sourceMappingURL=ThemeToggleButton.js.map