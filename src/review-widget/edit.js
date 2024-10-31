/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import PerfectPortalLogo from "./icon.svg";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { perfectPortalRegion, reviewWidgetGuid, companyGuid } = attributes;

	return (
		<div>
			<InspectorControls>
				<PanelBody title={__('Settings', 'perfect-portal-review-widget')}>
					<SelectControl
						label={__(
							'Review Widget Region',
							'perfect-portal-widgets'
						)}
						options={[
							{ value: '', label: 'Select a Region', disabled: true },
							{ label: 'Australia', value: 'https://widgets.perfectportal.com.au' },
							{ label: 'Canada', value: 'https://widgets.perfectportalcanada.ca' },
							{ label: 'New Zealand', value: 'https://widgets.perfectportal.co.nz' },
							{ label: 'United Kingdom', value: 'https://widgets.perfectportal.co.uk' },
							{ label: 'United States', value: 'https://widgets.perfectportal.com' },
						]}
						value={perfectPortalRegion || ''}
						onChange={(value) =>
							setAttributes({ perfectPortalRegion: value })
						}
					/>
					<TextControl
						label={__(
							'Company Guid',
							'perfect-portal-widgets'
						)}
						value={companyGuid || ''}
						onChange={(value) =>
							setAttributes({ companyGuid: value })
						}
					/>
					<TextControl
						label={__(
							'Review Widget Guid',
							'perfect-portal-widgets'
						)}
						value={reviewWidgetGuid || ''}
						onChange={(value) =>
							setAttributes({ reviewWidgetGuid: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()} data-review-widget={reviewWidgetGuid}>
				<div style={{ border: 'solid 1px black', padding: '5px', display: 'flex' }}>
					<img src={PerfectPortalLogo} />
					<span style={{ paddingInlineStart: '15px' }}>
						<b>Perfect Portal Review Widget</b><br />
						Company Guid: {companyGuid} <br />
						Widget Guid: {reviewWidgetGuid}
					</span>
				</div>
			</div>
		</div>
	);
}
