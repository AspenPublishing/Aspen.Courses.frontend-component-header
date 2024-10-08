import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@openedx/paragon';
import messages from './messages';
var AuthenticatedUserDropdown = function AuthenticatedUserDropdown(_ref) {
  var intl = _ref.intl,
    username = _ref.username,
    email = _ref.email;
  var dashboardMenuItem = /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard")
  }, intl.formatMessage(messages.dashboard));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "text-gray-700",
    target: "_blank",
    href: "https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next"
  }, intl.formatMessage(messages.help)), /*#__PURE__*/React.createElement(Dropdown, {
    className: "user-dropdown ml-3"
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: "outline-primary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar overflow-hidden d-inline-flex rounded-circle mr-2",
    style: {
      height: '1.5em',
      width: '1.5em'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    version: "1.1",
    role: "img",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      width: '1.5em',
      height: '1.5em'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.10255106,18.1351061 C4.7170266,16.0581859 8.01891846,14.4720277 12,14.4720277 C15.9810815,14.4720277 19.2829734,16.0581859 19.8974489,18.1351061 C21.215206,16.4412566 22,14.3122775 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,14.3122775 2.78479405,16.4412566 4.10255106,18.1351061 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,13 C9.790861,13 8,11.209139 8,9 C8,6.790861 9.790861,5 12,5 C14.209139,5 16,6.790861 16,9 C16,11.209139 14.209139,13 12,13 Z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("span", {
    "data-hj-suppress": true,
    className: "d-none d-md-inline"
  }, email || username)), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: "dropdown-menu-right"
  }, dashboardMenuItem, /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().ACCOUNT_PROFILE_URL, "/u/").concat(username)
  }, intl.formatMessage(messages.profile)), /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().ACCOUNT_SETTINGS_URL
  }, intl.formatMessage(messages.account)), getConfig().ORDER_HISTORY_URL && /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().ORDER_HISTORY_URL
  }, intl.formatMessage(messages.orderHistory)), /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().LOGOUT_URL
  }, intl.formatMessage(messages.signOut)))));
};
AuthenticatedUserDropdown.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string
};
AuthenticatedUserDropdown.defaultProps = {
  email: null
};
export default injectIntl(AuthenticatedUserDropdown);
//# sourceMappingURL=AuthenticatedUserDropdown.js.map