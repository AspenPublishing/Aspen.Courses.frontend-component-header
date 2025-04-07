import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@openedx/paragon';
import messages from './messages';
var AuthenticatedUserDropdown = function AuthenticatedUserDropdown(_ref) {
  var intl = _ref.intl,
    username = _ref.username,
    email = _ref.email,
    name = _ref.name;
  var dashboardMenuItem = /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard")
  }, intl.formatMessage(messages.dashboard));
  return /*#__PURE__*/React.createElement(Dropdown, {
    className: "user-dropdown ml-3"
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: "outline-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hamburger-menu"
  }, /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "line"
  })), /*#__PURE__*/React.createElement("span", {
    "data-hj-suppress": true,
    className: "d-none d-md-inline"
  }, name)), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: "dropdown-menu-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard"),
    className: "pgn__dropdown-item dropdown-item h-desktop"
  }, "My Courses"), dashboardMenuItem, /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().ACCOUNT_PROFILE_URL, "/u/").concat(username)
  }, intl.formatMessage(messages.profile)), /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().ACCOUNT_SETTINGS_URL
  }, intl.formatMessage(messages.account)), getConfig().ORDER_HISTORY_URL && /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().ORDER_HISTORY_URL
  }, intl.formatMessage(messages.orderHistory)), /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().LOGOUT_URL
  }, intl.formatMessage(messages.signOut))));
};
AuthenticatedUserDropdown.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
AuthenticatedUserDropdown.defaultProps = {
  email: null,
  name: null
};
export default injectIntl(AuthenticatedUserDropdown);
//# sourceMappingURL=AuthenticatedUserDropdown.js.map