'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target}/*! @gov.au/tags v3.1.5 *//***************************************************************************************************************************************************************
 *
 * tags function
 *
 * Use tags to apply a taxonomy and link to similar content.
 *
 **************************************************************************************************************************************************************//**
 * A tag item inside the AUtags component
 *
 * @param  {string}  link             - The link for this tag, optional
 * @param  {string}  text             - The text for the tag
 * @param  {object}  li               - An additional object to be spread into the wrapping element, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */var AUtagItem=function AUtagItem(_ref){var link=_ref.link,linkComponent=_ref.linkComponent,text=_ref.text,_ref$li=_ref.li,li=_ref$li===undefined?{}:_ref$li,attributeOptions=_objectWithoutProperties(_ref,['link','linkComponent','text','li']);var LinkComponent=linkComponent;if(link){// If we are using a normal link
if(LinkComponent==='a'){attributeOptions.href=link}// If we are using a link component
else if(typeof LinkComponent==='function'){attributeOptions.to=link}}return _react2.default.createElement('li',li,link?_react2.default.createElement(LinkComponent,attributeOptions,text):_react2.default.createElement('span',attributeOptions,text))};AUtagItem.propTypes={link:_propTypes2.default.string,text:_propTypes2.default.string.isRequired,li:_propTypes2.default.object,linkComponent:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.func])};AUtagItem.defaultProps={linkComponent:'a'};/**
 * DEFAULT
 * The tags component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   tags             - The tags, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */var AUtags=function AUtags(_ref2){var dark=_ref2.dark,linkComponent=_ref2.linkComponent,tags=_ref2.tags,_ref2$className=_ref2.className,className=_ref2$className===undefined?'':_ref2$className,attributeOptions=_objectWithoutProperties(_ref2,['dark','linkComponent','tags','className']);return _react2.default.createElement('ul',_extends({className:'au-tags '+className+' '+(dark?'au-tags--dark':'')},attributeOptions),tags.map(function(tag,i){return _react2.default.createElement(AUtagItem,_extends({linkComponent:linkComponent,key:i},tag))}))};AUtags.propTypes={dark:_propTypes2.default.bool,tags:_propTypes2.default.arrayOf(_propTypes2.default.shape({link:_propTypes2.default.string,text:_propTypes2.default.string.isRequired,li:_propTypes2.default.object})).isRequired,className:_propTypes2.default.string,linkComponent:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.func])};AUtags.defaultProps={linkComponent:'a'};exports.default=AUtags;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmVzNS5qcyJdLCJuYW1lcyI6WyJBVXRhZ0l0ZW0iLCJsaW5rIiwibGlua0NvbXBvbmVudCIsInRleHQiLCJsaSIsImF0dHJpYnV0ZU9wdGlvbnMiLCJMaW5rQ29tcG9uZW50IiwiaHJlZiIsInRvIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJBVXRhZ3MiLCJkYXJrIiwidGFncyIsImNsYXNzTmFtZSIsIm1hcCIsInRhZyIsImkiLCJib29sIiwiYXJyYXlPZiIsInNoYXBlIl0sIm1hcHBpbmdzIjoib1NBU0EsNEIsMkNBQ0EscUMsd1VBVkEsMEJBQ0E7Ozs7OztnS0FZQTs7Ozs7OztHQVFBLEdBQU1BLFdBQVksUUFBWkEsVUFBWSxNQUFpRSxJQUE5REMsS0FBOEQsTUFBOURBLElBQThELENBQXhEQyxhQUF3RCxNQUF4REEsYUFBd0QsQ0FBekNDLElBQXlDLE1BQXpDQSxJQUF5QyxjQUFuQ0MsRUFBbUMsQ0FBbkNBLEVBQW1DLHFCQUE5QixFQUE4QixTQUF2QkMsZ0JBQXVCLHFFQUNsRixHQUFNQyxlQUFnQkosYUFBdEIsQ0FFQSxHQUFJRCxJQUFKLENBQVUsQ0FDVDtBQUNBLEdBQUlLLGdCQUFrQixHQUF0QixDQUE0QixDQUMzQkQsaUJBQWlCRSxJQUFqQixDQUF3Qk4sSUFDeEIsQ0FDRDtBQUhBLElBSUssSUFBSSxNQUFPSyxjQUFQLEdBQXlCLFVBQTdCLENBQTBDLENBQzlDRCxpQkFBaUJHLEVBQWpCLENBQXNCUCxJQUN0QixDQUNELENBRUQsTUFDQyxvQ0FBU0csRUFBVCxDQUVFSCxLQUNHLDhCQUFDLGFBQUQsQ0FBb0JJLGdCQUFwQixDQUF5Q0YsSUFBekMsQ0FESCxDQUVHLHFDQUFXRSxnQkFBWCxDQUFnQ0YsSUFBaEMsQ0FKTCxDQVFELENBdkJELENBMEJBSCxVQUFVUyxTQUFWLENBQXNCLENBQ3JCUixLQUFNUyxvQkFBVUMsTUFESyxDQUVyQlIsS0FBTU8sb0JBQVVDLE1BQVYsQ0FBaUJDLFVBRkYsQ0FHckJSLEdBQUlNLG9CQUFVRyxNQUhPLENBSXJCWCxjQUFlUSxvQkFBVUksU0FBVixDQUFvQixDQUFFSixvQkFBVUMsTUFBWixDQUFvQkQsb0JBQVVLLElBQTlCLENBQXBCLENBSk0sQ0FBdEIsQ0FPQWYsVUFBVWdCLFlBQVYsQ0FBeUIsQ0FDeEJkLGNBQWUsR0FEUyxDQUF6QixDQUtBOzs7Ozs7OztHQVNBLEdBQU1lLFFBQVMsUUFBVEEsT0FBUyxXQUFHQyxLQUFILE9BQUdBLElBQUgsQ0FBU2hCLGFBQVQsT0FBU0EsYUFBVCxDQUF3QmlCLElBQXhCLE9BQXdCQSxJQUF4Qix1QkFBOEJDLFNBQTlCLENBQThCQSxTQUE5Qiw2QkFBMEMsRUFBMUMsaUJBQWlEZixnQkFBakQsbUZBQ2QsOENBQUkscUJBQXdCZSxTQUF4QixNQUF1Q0YsS0FBTyxlQUFQLENBQXlCLEVBQWhFLENBQUosRUFBaUZiLGdCQUFqRixFQUVFYyxLQUFLRSxHQUFMLENBQ0MsU0FBRUMsR0FBRixDQUFPQyxDQUFQLFFBQWMsK0JBQUMsU0FBRCxXQUFXLGNBQWdCckIsYUFBM0IsQ0FBMkMsSUFBTXFCLENBQWpELEVBQTBERCxHQUExRCxFQUFkLENBREQsQ0FGRixDQURjLENBQWYsQ0FVQUwsT0FBT1IsU0FBUCxDQUFtQixDQUNsQlMsS0FBTVIsb0JBQVVjLElBREUsQ0FFbEJMLEtBQU1ULG9CQUFVZSxPQUFWLENBQ0xmLG9CQUFVZ0IsS0FBVixDQUFnQixDQUNmekIsS0FBTVMsb0JBQVVDLE1BREQsQ0FFZlIsS0FBTU8sb0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlIsQ0FHZlIsR0FBSU0sb0JBQVVHLE1BSEMsQ0FBaEIsQ0FESyxFQU1KRCxVQVJnQixDQVNsQlEsVUFBV1Ysb0JBQVVDLE1BVEgsQ0FVbEJULGNBQWVRLG9CQUFVSSxTQUFWLENBQW9CLENBQUVKLG9CQUFVQyxNQUFaLENBQW9CRCxvQkFBVUssSUFBOUIsQ0FBcEIsQ0FWRyxDQUFuQixDQWFBRSxPQUFPRCxZQUFQLENBQXNCLENBQ3JCZCxjQUFlLEdBRE0sQ0FBdEIsQyxnQkFJZWUsTSIsImZpbGUiOiJyZWFjdC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQGdvdi5hdS90YWdzIHYzLjEuNSAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICpcbiAqIHRhZ3MgZnVuY3Rpb25cbiAqXG4gKiBVc2UgdGFncyB0byBhcHBseSBhIHRheG9ub215IGFuZCBsaW5rIHRvIHNpbWlsYXIgY29udGVudC5cbiAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cblxuLyoqXG4gKiBBIHRhZyBpdGVtIGluc2lkZSB0aGUgQVV0YWdzIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIGxpbmsgICAgICAgICAgICAgLSBUaGUgbGluayBmb3IgdGhpcyB0YWcsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0ZXh0ICAgICAgICAgICAgIC0gVGhlIHRleHQgZm9yIHRoZSB0YWdcbiAqIEBwYXJhbSAge29iamVjdH0gIGxpICAgICAgICAgICAgICAgLSBBbiBhZGRpdGlvbmFsIG9iamVjdCB0byBiZSBzcHJlYWQgaW50byB0aGUgd3JhcHBpbmcgZWxlbWVudCwgb3B0aW9uYWxcbiAqIEBwYXJhbSAge29iamVjdH0gIGF0dHJpYnV0ZU9wdGlvbnMgLSBBbnkgb3RoZXIgYXR0cmlidXRlIG9wdGlvbnNcbiAqL1xuY29uc3QgQVV0YWdJdGVtID0gKHsgbGluaywgbGlua0NvbXBvbmVudCwgdGV4dCwgbGkgPSB7fSwgLi4uYXR0cmlidXRlT3B0aW9ucyB9KSA9PiB7XG5cdGNvbnN0IExpbmtDb21wb25lbnQgPSBsaW5rQ29tcG9uZW50O1xuXG5cdGlmKCBsaW5rICl7XG5cdFx0Ly8gSWYgd2UgYXJlIHVzaW5nIGEgbm9ybWFsIGxpbmtcblx0XHRpZiggTGlua0NvbXBvbmVudCA9PT0gJ2EnICkge1xuXHRcdFx0YXR0cmlidXRlT3B0aW9ucy5ocmVmID0gbGluaztcblx0XHR9XG5cdFx0Ly8gSWYgd2UgYXJlIHVzaW5nIGEgbGluayBjb21wb25lbnRcblx0XHRlbHNlIGlmKCB0eXBlb2YgTGlua0NvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdGF0dHJpYnV0ZU9wdGlvbnMudG8gPSBsaW5rO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGxpIHsgLi4ubGkgfT5cblx0XHRcdHtcblx0XHRcdFx0bGlua1xuXHRcdFx0XHRcdD8gPExpbmtDb21wb25lbnQgeyAuLi5hdHRyaWJ1dGVPcHRpb25zIH0+eyB0ZXh0IH08L0xpbmtDb21wb25lbnQ+XG5cdFx0XHRcdFx0OiA8c3BhbiB7IC4uLmF0dHJpYnV0ZU9wdGlvbnMgfT57IHRleHQgfTwvc3Bhbj5cblx0XHRcdH1cblx0XHQ8L2xpPlxuXHQpXG59O1xuXG5cbkFVdGFnSXRlbS5wcm9wVHlwZXMgPSB7XG5cdGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0bGk6IFByb3BUeXBlcy5vYmplY3QsXG5cdGxpbmtDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoWyBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYyBdKSxcbn07XG5cbkFVdGFnSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG5cdGxpbmtDb21wb25lbnQ6ICdhJyxcbn07XG5cblxuLyoqXG4gKiBERUZBVUxUXG4gKiBUaGUgdGFncyBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0gIHtib29sZWFufSBkYXJrICAgICAgICAgICAgIC0gQWRkIHRoZSBkYXJrIHZhcmlhdGlvbiBjbGFzcywgb3B0aW9uYWxcbiAqIEBwYXJhbSAge2FycmF5fSAgIHRhZ3MgICAgICAgICAgICAgLSBUaGUgdGFncywgZm9ybWF0OiB7IGxpbms6ICcnLCB0ZXh0OiAnJywgb25DbGljazogKCkgfVxuICogQHBhcmFtICB7c3RyaW5nfSAgY2xhc3NOYW1lICAgICAgICAtIEFuIGFkZGl0aW9uYWwgY2xhc3MsIG9wdGlvbmFsXG4gKiBAcGFyYW0gIHtvYmplY3R9ICBhdHRyaWJ1dGVPcHRpb25zIC0gQW55IG90aGVyIGF0dHJpYnV0ZSBvcHRpb25zXG4gKi9cbmNvbnN0IEFVdGFncyA9ICh7IGRhcmssIGxpbmtDb21wb25lbnQsIHRhZ3MsIGNsYXNzTmFtZSA9ICcnLCAuLi5hdHRyaWJ1dGVPcHRpb25zIH0pID0+IChcblx0PHVsIGNsYXNzTmFtZT17IGBhdS10YWdzICR7IGNsYXNzTmFtZSB9ICR7IGRhcmsgPyAnYXUtdGFncy0tZGFyaycgOiAnJyB9YCB9IHsgLi4uYXR0cmlidXRlT3B0aW9ucyB9PlxuXHRcdHtcblx0XHRcdHRhZ3MubWFwKFxuXHRcdFx0XHQoIHRhZywgaSApID0+IDxBVXRhZ0l0ZW0gbGlua0NvbXBvbmVudD17IGxpbmtDb21wb25lbnQgfSBrZXk9eyBpIH0geyAuLi50YWcgfSAvPlxuXHRcdFx0KVxuXHRcdH1cblx0PC91bD5cbik7XG5cbkFVdGFncy5wcm9wVHlwZXMgPSB7XG5cdGRhcms6IFByb3BUeXBlcy5ib29sLFxuXHR0YWdzOiBQcm9wVHlwZXMuYXJyYXlPZihcblx0XHRQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0bGluazogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRcdHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRcdGxpOiBQcm9wVHlwZXMub2JqZWN0LFxuXHRcdH0pXG5cdCkuaXNSZXF1aXJlZCxcblx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRsaW5rQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFsgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmMgXSksXG59O1xuXG5BVXRhZ3MuZGVmYXVsdFByb3BzID0ge1xuXHRsaW5rQ29tcG9uZW50OiAnYScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBVXRhZ3M7XG4iXX0=