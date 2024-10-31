<?php
/**
 * Plugin Name:       Perfect Portal Widgets
 * Description:       A collection of Gutenberg blocks and Shortcodes from Perfect Portal. These blocks/shortcodes will allow you to easily implement a range of features from Perfect Portal onto your WordPress website.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           3.0.3
 * Author:            Perfect Portal (UK) Ltd
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       perfect-portal-widgets
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function perfect_portal_widgets_block_init()
{
	register_block_type(__DIR__ . '/build/quote-calculator');
	register_block_type(__DIR__ . '/build/intake-form');
	register_block_type(__DIR__ . '/build/review-widget');
}
add_action('init', 'perfect_portal_widgets_block_init');

function perfect_portal_auto_update_setting_html($html, $plugin_file, $plugin_data)
{
	if ('perfect-portal-widgets/perfect-portal-widgets.php' === $plugin_file) {
		$html = __('Auto-updates are not available for this plugin.', 'perfect-portal-widgets');
	}

	return $html;
}
add_filter('plugin_auto_update_setting_html', 'perfect_portal_auto_update_setting_html', 10, 3);


/* Non Gutenberg Plugin */
function perfect_portal_init_theme_method()
{
	add_thickbox();
}
add_action('init', 'perfect_portal_init_theme_method');


function perfect_portal_register_shortcodes()
{
	add_shortcode('perfect_portal_intake_form', 'perfect_portal_show_intake_form_widgets');
	add_shortcode('perfect_portal_quote_calculator', 'perfect_portal_show_quote_calc_widgets');
	add_shortcode('perfect_portal_website_calculator', 'perfect_portal_show_quote_calc_widgets');

	//$quoteCalcType = get_option('perfect_portal_quote_calc_intake_type');

	//if($quoteCalcType == 'dual'){
	//	add_shortcode('perfect_portal_quote_calculator', 'remove_v1plugin_shortcode');
	//}

	$company_guid = get_option('perfect_portal_company_guid');
	if ($company_guid != '') {
		add_shortcode('perfect_portal_review_widget', 'perfect_portal_show_review_widget');
	}
}

// START Admin Area
function perfect_portal_scripts_and_styles()
{
	wp_register_style('perfect-portal-admin-css', plugins_url('assets/css/perfect-portal-admin.css', __FILE__), null, '3.0.3');
	wp_enqueue_style('perfect-portal-admin-css');

	wp_register_script('perfect-portal-embed-script', plugins_url('assets/scripts/perfect-portal-admin.js', __FILE__), null, '3.0.3', true);
	wp_enqueue_script('perfect-portal-embed-script');
}
add_action('admin_head', 'perfect_portal_scripts_and_styles');

function perfect_portal_admin_menu()
{
	add_menu_page('Perfect Portal', 'Perfect Portal', 'manage_options', 'perfect-portal-settings', 'perfect_portal_admin_page', 'none', 66);
}
add_action('admin_menu', 'perfect_portal_admin_menu');

function perfect_portal_submit_settings()
{
	if (!empty($_POST)) {
        //if (wp_verify_nonce($_REQUEST['_wpnonce'], 'perfect-portal-admin-settings-nonce')) {
        if (wp_verify_nonce( sanitize_text_field( wp_unslash ( $_REQUEST['_wpnonce'] ) ) , 'pp-save-settings')) {
			$region = sanitize_text_field( wp_unslash ( $_POST['perfect_portal_region']) );
			$intake_type = sanitize_text_field( wp_unslash ( $_POST['perfect_portal_quote_calc_intake_type']) );
			$intake_guid = sanitize_text_field( wp_unslash ( $_POST['perfect_portal_quote_calc_intake_guid']) );
			$company_guid = sanitize_text_field( wp_unslash( $_POST['perfect_portal_company_guid']) );
			update_option('perfect_portal_region', $region, 'yes');
			update_option('perfect_portal_quote_calc_intake_type', $intake_type, 'yes');
			update_option('perfect_portal_quote_calc_intake_guid', $intake_guid, 'yes');
			update_option('perfect_portal_company_guid', $company_guid, 'yes');
		}
		wp_redirect(admin_url('admin.php?page=perfect-portal-settings&success=1'));
		die();
	}
}
add_action('admin_post_perfect_portal_settings', 'perfect_portal_submit_settings');

function perfect_portal_install()
{
	add_option('perfect_portal_quote_calc_intake_type', 'per_page', '', 'yes');
}
register_activation_hook(__FILE__, 'perfect_portal_install');

function perfect_portal_uninstall()
{
	delete_option('perfect_portal_version');
	delete_site_option('perfect_portal_version');
}
register_uninstall_hook(__FILE__, 'perfect_portal_uninstall');


function perfect_portal_admin_page()
{
	$country = get_option('perfect_portal_region');
	$intake_guid = get_option('perfect_portal_quote_calc_intake_guid');
	$company_guid = get_option('perfect_portal_company_guid');
	$intake_type = get_option('perfect_portal_quote_calc_intake_type') == '' ? 'per_page' : get_option('perfect_portal_quote_calc_intake_type');
    $success = isset($_GET['success']) && $_GET['success'] == 1;

    wp_verify_nonce('pp-save-settings', 'pp-save-settings');
	?>
	<div class="wrap">
		<form method="POST" action="admin-post.php">
            <?php wp_nonce_field('pp-save-settings'); ?>
			<input type="hidden" name="action" value="perfect_portal_settings" />
			<img src="<?php echo esc_url(plugins_url('assets/images/icon.svg', __FILE__)); ?>" height="45" style="max-height: 45px;" alt="perfect-portal-logo" class="adminLogo" />
			<h1>Perfect Portal - Website Widgets</h1>
            <?php if ($success == 1) { ?><br clear="all" /><div class="alert alert-success">Settings updated successfully!</div><?php } ?>
			<div class="metabox-holder">
				<h2>General Settings</h2>
				<div class="postbox">
					<div class="inside">
						<p>Perfect Portal is available in multiple countries. Please select the region in which you are located.</p>
						<table class="form-table">
							<tbody>
								<tr>
									<th scope="row"><label for="perfect_portal_region">Country / Region</label></th>
									<td>
										<select name="perfect_portal_region" id="perfect-portal-region">
											<option value="" <?php echo !empty($country) ? ' ' : '' ?>>-- Please select a region --</option>
											<option value="au" <?php echo $country == 'au' ? 'selected' : ''; ?>>Australia</option>
											<option value="ca" <?php echo $country == 'ca' ? 'selected' : ''; ?>>Canada</option>
											<option value="nz" <?php echo $country == 'nz' ? 'selected' : ''; ?>>New Zealand</option>
											<option value="uk" <?php echo $country == 'uk' ? 'selected' : ''; ?>>United Kingdom</option>
											<option value="us" <?php echo $country == 'us' ? 'selected' : ''; ?>>United States of America</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="perfect-portal-region-selected <?php echo get_current_screen()->is_block_editor() == false && !empty($country) ? '' : 'pp-hide'; ?>">
					<h2>Intake Form Settings</h2>
					<div class="postbox">
						<div class="inside">
							<table class="form-table">
								<tbody>
									<tr>
										<th scope="row"><label>Installation</label></th>
										<td>
											Simply add <code>[perfect_portal_intake_form guid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"]</code> to the page you would like the Perfect Portal Intake Form form to be displayed.
											<p>Simply replace the guid attribute as follows:</p>
											<ul>
												<li><b>guid</b> - Please replace the guid placeholder value above with the guid of the Intake Form you wish to be displayed.</li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<h2>Quote Calculator Settings</h2>
					<div class="postbox">
						<div class="inside">
							<table class="form-table">
								<tbody>
									<tr>
										<th scope="row"><label for="perfect_portal_quote_calc_intake_type">Intake Type</label></th>
										<td>
											<select name="perfect_portal_quote_calc_intake_type" id="perfect-portal-quote-calc-intake-type">
												<option data-section-visible="page-specific-calculator" data-section-hidden="global-calculator" value="per_page" <?php echo $intake_type == 'per_page' ? 'selected' : ''; ?>>Set Per Page</option>
												<option data-section-visible="global-calculator" data-section-hidden="page-specific-calculator" value="embed" <?php echo $intake_type == 'embed' ? 'selected' : ''; ?>>Embed</option>
												<option data-section-visible="global-calculator" data-section-hidden="page-specific-calculator" value="float" <?php echo $intake_type == 'float' ? 'selected' : ''; ?>>Float</option>
												<option data-section-visible="global-calculator" data-section-hidden="page-specific-calculator" value="dual" <?php echo $intake_type == 'dual' ? 'selected' : ''; ?>>Embed &amp; Float</option>
											</select>
										</td>
									</tr>
								</tbody>
							</table>
							<table data-view="global-calculator" class="form-table<?php echo $intake_type == 'per_page' ? ' pp-hide' : ''; ?>">
								<tbody>
									<tr>
										<th scope="row"><label for="perfect_portal_quote_calc_intake_guid">Intake Form Guid</label></th>
										<td><input name="perfect_portal_quote_calc_intake_guid" type="text" id="perfect-portal-quote-calc-intake-guid" value="<?php echo esc_attr($intake_guid); ?>" class="large-text" /></td>
									</tr>
									<tr>
										<th scope="row"><label>Installation</label></th>
										<td>Simply add <code>[perfect_portal_quote_calculator]</code> to the page you would like the Perfect Portal quoting tool to be displayed.</td>
									</tr>
								</tbody>
							</table>
							<table data-view="page-specific-calculator" class="form-table<?php echo $intake_type == 'per_page' ? '' : ' pp-hide'; ?>">
								<tbody>
									<tr>
										<th scope="row"><label>Installation</label></th>
										<td>
											Simply add <code>[perfect_portal_quote_calculator guid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" type="XXX"]</code> to the page you would like the Perfect Portal quote calculator form to be displayed.
											<p>Simply replace the guid and the type attributes as follows:</p>
											<ul>
												<li><b>guid</b> - Please replace the guid placeholder value above with the guid of the Quote Calculator you wish to be displayed.</li>
												<li><b>type</b> - Please replace the type placeholder value above with "embed", "float" or "dual".</li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<h2>Review Widget Settings</h2>
					<div class="postbox">
						<div class="inside">
							<table class="form-table">
								<tbody>
									<tr>
										<th scope="row"><label for="perfect_portal_company_guid">Company Guid</label></th>
										<td><input name="perfect_portal_company_guid" type="text" id="perfect-portal-company-guid" value="<?php echo esc_attr($company_guid); ?>" class="large-text" /></td>
									</tr>
									<tr>
										<th scope="row"><label>Installation</label></th>
										<td>
											Simply add <code>[perfect_portal_review_widget guid="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"]</code> to the page you would like the Perfect Portal review widget to be displayed.
											<p>Simply replace the guid and the type attributes as follows:</p>
											<ul>
												<li><b>guid</b> - Please replace the guid placeholder value above with the guid of the Review Widget you wish to be displayed.</li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

				</div>
			</div>
			<p><i><b>Please note: all intake forms MUST have the enabled domain name registered within Perfect Portal before installation</b></i></p>
			<button type="submit" name="submit" id="submit" class="button button-primary">Save Changes</button>
		</form>
	</div>
	<?php
}


function perfect_portal_show_user_page()
{

	ob_start();
	user_page_content();
	$output_string = stripslashes(ob_get_contents());
	ob_end_clean();

	return $output_string;

}

//function remove_v1plugin_shortcode()
//{
//	$output_string = '';
//	return $output_string;
//}

function perfect_portal_env_status()
{
	$url = '';
	$country = get_option('perfect_portal_region');
	switch ($country) {
		case 'au':
			$url = 'https://webcalc.perfectportal.com.au/apps/webcalc/v2.0/';
			break;
		case 'ca':
		case 'nz':
		case 'uk':
		case 'us':
		default:
			$url = 'https://webcalc.perfectportal.co.uk/apps/webcalc/v2.0/';
			break;
	}
	$env_array = array(
		'status' => '',
		'url' => $url,
		'plugin_name' => 'Plugin Name: Perfect Portal Website Calculator Plugin',
		'ssl_verify' => true
	);

	return $env_array;

}

function perfect_portal_show_intake_form_widgets($atts = [], $content = null, $tag = '')
{
	//perfect_portal_write_log('perfect_portal_show_intake_form_widgets');
	$html = '';
	if (!empty($atts['guid'])) {
		$region = get_option('perfect_portal_region');
		$script_link = 'https://cdn.perfectportal.co.uk/widgets/intake/production/' . $region . '/index.js';

        wp_register_script_module(
            'perfect-portal-intake-form-script-' . $atts['guid'],
            $script_link,
            array(),
            '3.0.3',
            array(
                'strategy' => 'defer',
                'in_footer' => false
            )
        );
        wp_enqueue_script_module('perfect-portal-intake-form-script-' . $atts['guid']);

		$html = '<div data-pp-guid="' . $atts['guid'] . '"></div>';

	}
	return $html;
}

function perfect_portal_show_quote_calc_widgets($atts = [], $content = null, $tag = '')
{
	//perfect_portal_write_log('perfect_portal_show_quote_calc_widgets');

	$env = perfect_portal_env_status();
	$html = [];

	$get_type = get_option('perfect_portal_quote_calc_intake_type');
	if (!is_array($atts)) {
		$atts = [];
	}
	if (empty($atts['guid'])) {
		$atts['guid'] = get_option('perfect_portal_quote_calc_intake_guid');
	}
	if (empty($atts['type'])) {
		$atts['type'] = !empty($get_type) ? $get_type : 'embed';
	}


	switch (true) {
		case(!empty($atts['guid']) && $atts['type'] == "embed"):
			$script_link = $env['url'] . 'embed.' . $atts['guid'] . '.js' . (!empty($atts['hide_button']) ? '?button=0' : '');
			$html[] = '<div id="' . $atts['guid'] . '"></div>';
			wp_register_script('perfect-portal-embed-script-' . $atts['guid'], $script_link, null, '3.0.3', true);
			wp_enqueue_script('perfect-portal-embed-script-' . $atts['guid']);
			break;
		case(!empty($atts['guid']) && $atts['type'] == "float"):
			$script_link = $env['url'] . 'float.' . $atts['guid'] . '.js' . (!empty($atts['hide_button']) ? '?button=0' : '');
			$html[] = '<div id="' . $atts['guid'] . '"></div>';
			wp_register_script('perfect-portal-float-script-' . $atts['guid'], $script_link, null, '3.0.3', true);
			wp_enqueue_script('perfect-portal-float-script-' . $atts['guid']);
			break;
		case(!empty($atts['guid']) && $atts['type'] == "dual"):
			$script_link = $env['url'] . 'embed.' . $atts['guid'] . '.js' . (!empty($atts['hide_button']) ? '?button=0' : '');
			$html[] = '<div id="' . $atts['guid'] . '"></div>';
			wp_register_script('perfect-portal-dual-embed-script-' . $atts['guid'], $script_link, null, '3.0.3', true);
			wp_enqueue_script('perfect-portal-dual-embed-script-' . $atts['guid']);
			$script_link = $env['url'] . 'float.' . $atts['guid'] . '.js' . (!empty($atts['hide_button']) ? '?button=0' : '');
			wp_register_script('perfect-portal-dual-float-script-' . $atts['guid'], $script_link, null, '3.0.3', true);
			wp_enqueue_script('perfect-portal-dual-float-script-' . $atts['guid']);
			break;
		default:
			break;
	}


	return implode("\n", $html);

}






function perfect_portal_enqueue_quote_calc_scripts()
{
	//$env = perfect_portal_env_status();

	//$webcalcV2Guid = get_option('perfect_portal_quote_calc_intake_guid');
	//$webcalcV2Type = get_option('perfect_portal_quote_calc_intake_type');
	//switch ($webcalcV2Type) {
	//	case "float": {
	//		$script_link = $env['url'] . 'float.' . $webcalcV2Guid . '.js';
	//		wp_register_script('perfect-portal-float-script', $script_link, null, null, true);
	//		wp_enqueue_script('perfect-portal-float-script');
	//		//add_shortcode('perfect_portal_intake_form', 'remove_v1plugin_shortcode');
	//		break;
	//	}
	//	case "dual": {
	//		$script_link = $env['url'] . 'float.' . $webcalcV2Guid . '.js';
	//		wp_register_script('perfect-portal-float-script', $script_link, null, null, true);
	//		wp_enqueue_script('perfect-portal-float-script');
	//		//add_shortcode('perfect_portal_intake_form', 'show_perfect_portal_widgets');
	//		break;
	//	}
	//	default: {
	//		//add_shortcode('perfect_portal_intake_form', 'show_perfect_portal_widgets');
	//		break;
	//	}
	//}
}




function perfect_portal_show_review_widget($atts = [], $content = null, $tag = '')
{
	//perfect_portal_write_log('show_perfect_portal_review_widget');
	$html = '';
	if (!is_array($atts)) {
		$atts = [];
	}
	if (!empty($atts['guid'])) {
		$review_widget_guid = $atts['guid'];
		$html = '<div data-review-widget="' . $review_widget_guid . '"></div>';
	}

	return $html;
}

function perfect_portal_enqueue_review_scripts()
{
	//perfect_portal_write_log('perfect_portal_enqueue_review_scripts');
	$company_guid = get_option('perfect_portal_company_guid');

	if ($company_guid != '') {
		$region = get_option('perfect_portal_region');
		$domain = '';

		switch ($region) {
			case 'au':
				$domain = 'perfectportal.com.au';
				break;
			case 'ca':
				$domain = 'perfectportalcanada.ca';
				break;
			case 'nz':
				$domain = 'perfectportal.co.nz';
				break;
			case 'us':
				$domain = 'perfectportal.com';
				break;
			case 'uk':
			default:
				$domain = 'perfectportal.co.uk';
				break;
		}

		$script_link = 'https://widgets.' . $domain . '/apps/reviews/v0.1/reviews.' . $company_guid . '.js';


		wp_register_script('perfect-portal-review-script-' . $company_guid, $script_link, null, '3.0.3', true);
		wp_enqueue_script('perfect-portal-review-script-' . $company_guid);
	}


	//add_shortcode('perfect_portal_review_widget', 'show_perfect_portal_review_widget');
}

function perfect_portal_write_log($data)
{
	if (true === WP_DEBUG) {
		if (is_array($data) || is_object($data)) {
			error_log(print_r($data, true));
		} else {
			error_log($data);
		}
	}
}


if (!is_admin()) {
	// Add the functions to WP loading list.
	//add_action('wp_enqueue_scripts', 'perfect_portal_enqueue_quote_calc_scripts');
	add_action('wp_enqueue_scripts', 'perfect_portal_enqueue_review_scripts');
	add_action('init', 'perfect_portal_register_shortcodes');
}
