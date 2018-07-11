/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * sideNav function
 *
 * A vertical list of links for site navigation typically placed next to the body content.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

// ES5 dependency: import AUlinkList from '@gov.au/link-list';
// ES6 dependency: import AUlinkList from './link-list';
// ES5 dependency: import AUaccordion from '@gov.au/accordion';
// ES6 dependency: import AUaccordion from './accordion';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


const AUsideNavMenu = ({ items, linkComponent }) => {

	const GenerateMenu = ( items ) => {
		const menu = items.map( item => {
			const link = {
				link: item.link,
				text: item.text,
			};

			if( item.children ){
				link.children = <AUlinkList items={ GenerateMenu( item.children ) } linkComponent={ item.linkComponent } />
			}

			return link;
		});

		return menu;
	}

	return (
		<AUlinkList items={ GenerateMenu( items ) } linkComponent={ linkComponent } />
	);
}


/**
 * DEFAULT
 * The side navigation component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alternate variation class, optional
 * @param  {string}  accordionHeader  - The accordion header
 * @param  {string}  menuHeader       - The header text for the menu
 * @param  {string}  menuHeaderLink   - The link for the header in the menu
 * @param  {array}   items            - The menu items and their children
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const AUsideNav = ({
	dark,
	alt,
	accordionHeader,
	menuHeader,
	menuHeaderLink,
	linkComponent,
	items,
	className = '',
	attributeOptions
}) => (
	<AUaccordion
		closed
		className={ 'au-side-nav au-accordion ' +
			`${ dark ? 'au-side-nav--dark au-accordion--dark ' : '' }` +
			`${ alt ? 'au-side-nav--alt au-accordion--alt ' : '' }` +
			`${ className }`
		}
		{ ...attributeOptions }
		header={ accordionHeader }
	>
		<div className="au-side-nav__content">
			<h2 className="au-sidenav__title">
				<a href={ menuHeaderLink }>{ menuHeader }</a>
			</h2>
			<AUsideNavMenu items={ items } linkComponent={ linkComponent } />
		</div>
	</AUaccordion>
);

AUsideNav.propTypes = {
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

AUsideNav.defaultProps = {
	linkComponent: 'a',
};

export default AUsideNav;