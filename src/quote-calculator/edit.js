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
import PerfectPortalLogo from "./icon.svg";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { perfectPortalRegion, leadIntakeGuid, intakeFormType } = attributes;
	
	return (
		<div>
			<InspectorControls>
				<PanelBody title={__('Settings', 'perfect-portal-quote-calculator-widget')}>
					<SelectControl
						label={__(
							'Intake Form Region',
							'perfect-portal-widgets'
						)}
						options={[
							{ value: '', label: 'Select a Region', disabled: true },
							{ label: 'Australia', value: 'https://webcalc.perfectportal.com.au' },
							{ label: 'Canada', value: 'https://webcalc.perfectportalcanada.ca' },
							{ label: 'New Zealand', value: 'https://webcalc.perfectportal.co.nz' },
							{ label: 'United Kingdom', value: 'https://webcalc.perfectportal.co.uk' },
							{ label: 'United States', value: 'https://webcalc.perfectportal.com' },
						]}
						value={perfectPortalRegion || ''}
						onChange={(value) =>
							setAttributes({ perfectPortalRegion: value })
						}
					/>
					<TextControl
						label={__(
							'Intake Form Guid',
							'perfect-portal-widgets'
						)}
						value={leadIntakeGuid || ''}
						onChange={(value) =>
							setAttributes({ leadIntakeGuid: value  })
						}
					/>
					<SelectControl
						label={__(
							'Intake Form Type',
							'perfect-portal-widgets'
						)}
						options={[
							{ value: '', label: 'Select a Type', disabled: true },
							{ label: 'Embedded', value: 'embed' },
							{ label: 'Floating', value: 'float' },
							{ label: 'Dual', value: 'dual' },
						]}
						value={intakeFormType || ''}
						onChange={(value) =>
							setAttributes({ intakeFormType: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()} id={leadIntakeGuid}>
				{/*<div>*/}
				{/*	<img src={PerfectPortalLogo} /> Quote Calculator*/}
				{/*	{leadIntakeGuid}*/}
				{/*</div>*/}
				<div style={{ border: 'solid 1px black', padding: '5px', display: 'flex' }}>
					<img src={PerfectPortalLogo} />
					<span style={{ paddingInlineStart: '15px' }}>
						<b>Perfect Portal Quote Calculator</b><br />
						Intake Form Guid: {leadIntakeGuid}<br />
						Intake Form Type: {intakeFormType}
					</span>
				</div>
			</div>
		</div>
	);
}
