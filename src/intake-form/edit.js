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
import { use } from '@wordpress/data';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { perfectPortalRegion, leadIntakeGuid } = attributes;

	const blockProps = useBlockProps({
		className: 'pp-preview'
	});

	return (
		<div>
			<InspectorControls>
				<PanelBody title={__('Settings', 'perfect-portal-intake-form-widget')}>
					<SelectControl
						label={__(
							'Intake Form Region',
							'perfect-portal-widgets'
						)}
						options={[
							{ value: '', label: 'Select a Region', disabled: true },
							{ label: 'Australia', value: 'au' },
							{ label: 'Canada', value: 'ca' },
							{ label: 'New Zealand', value: 'nz' },
							{ label: 'United Kingdom', value: 'uk' },
							{ label: 'United States', value: 'us' },
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
							setAttributes({ leadIntakeGuid: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} data-perfect-portal={leadIntakeGuid}>
				{/*<div className="pp-preview">*/}
				{/*	<img src={PerfectPortalLogo} /> Intake Form*/}
				{/*	{leadIntakeGuid}*/}
				{/*</div>*/}
				<div style={{ border: 'solid 1px black', padding: '5px', display: 'flex' }}>
					<img src={PerfectPortalLogo} />
					<span style={{ paddingInlineStart: '15px' }}>
						<b>Perfect Portal Intake Form</b><br />
						Intake Form Guid: {leadIntakeGuid}
					</span>
				</div>
			</div>
		</div>
	);
}
