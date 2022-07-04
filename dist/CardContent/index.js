"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardContent = void 0;

var _react = _interopRequireDefault(require("react"));

require("ds-in-code-design-system/dist/components/card");

require("ds-in-code-design-system/dist/components/tag");

require("ds-in-code-design-system/dist/components/typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var styles = ".dscTeamCardContent::part(card) {\n  padding: var(--spacing-inset-size-md);\n  box-sizing: border-box;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  cursor: pointer;\n}\n.dscTeamCardContent dsc-tag {\n  margin-bottom: auto;\n}\n.dscTeamCardContent dsc-typography[component=heading] {\n  margin-bottom: var(--spacing-size-xxxs);\n}\n.dscTeamCardContent dsc-typography[component=heading]::part(typography) {\n  font-weight: var(--font-weight-bold);\n}\n.dscTeamCardContent dsc-typography[component=paragraph]::part(typography) {\n  line-height: var(--line-height-lg);\n}";
  var fileName = "index_cardContent";
  var element = document.querySelector("style[data-sass-component='index_cardContent']");

  if (!element) {
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

var CardContent = function CardContent(_ref) {
  var tagContent = _ref.tagContent,
      headingContent = _ref.headingContent,
      paragraphContent = _ref.paragraphContent;
  return /*#__PURE__*/_react.default.createElement("dsc-card", {
    class: "dscTeamCardContent"
  }, /*#__PURE__*/_react.default.createElement("dsc-tag", null, tagContent), /*#__PURE__*/_react.default.createElement("dsc-typography", {
    variant: "h2",
    component: "heading",
    size: "lg"
  }, headingContent), /*#__PURE__*/_react.default.createElement("dsc-typography", {
    component: "paragraph"
  }, paragraphContent));
};

exports.CardContent = CardContent;