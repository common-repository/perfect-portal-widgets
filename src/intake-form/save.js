/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import perfectPortalIcon from "./icon.svg";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save( { attributes } ) {
	const { perfectPortalRegion, leadIntakeGuid } = attributes;
	let leadIntakeScript = '//cdn.perfectportal.co.uk/widgets/intake/production/' + perfectPortalRegion + '/index.js';
	return (
		<div class="wp-block-create-block-perfect-portal-widgets" {...useBlockProps.save()}>
			<script src={leadIntakeScript} type="module"></script>
			<div data-pp-guid={leadIntakeGuid}></div>
		</div>
	);
}
