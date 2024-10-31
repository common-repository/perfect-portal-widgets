=== Perfect Portal Widgets ===
Contributors:      perfectportal
Tags:              block, intake form, reviews
Requires at least: 6.1
Requires PHP:      7.0
Tested up to:      6.5.5
Stable tag:        3.0.3
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A set of Gutenberg blocks and Shortcodes to display Perfect Portal website widgets

== Description ==
Allow your customers to generate a quote, generate intake form enquiries directly from your website. Also display customer reviews directly on your website. You must be an authenticated and active customer of Perfect Portal in order for this plugin to work.

Widgets included:
* Perfect Portal Intake Form
* Perfect Portal Quote Calculator
* Perfect Portal Review Widget

== Installation ==

From your WordPress admin page:

    1. Visit Plugins > Add Plugins.
    2. Search for Perfect Portal Widgets.
    3. Install and activate the Perfect Portal plugin.

== External / 3rd Party References ==

Each of the widgets are dependent on loading scripts that are externally hosted on Perfect Portal's CDN.
The url of the script that will be added to the page is based on the type of widget added (intake form, quote calculator, review widget) and the region that has been selected in the settings area.

Use of the service is subject to the terms and conditions set out by Perfect Portal (UK) Ltd which can be found at:
For Australia: https://www.perfectportal.com.au/terms-conditions
For Canada: https://www.perfectportalcanada.ca/terms-conditions
For New Zealand: https://www.perfectportal.co.nz/terms-conditions
For United Kingdom: https://www.perfectportal.co.uk/terms-conditions
For United States of America: https://www.perfectportal.com/terms-conditions

Use of the service is subject to the privacy policy set out by Perfect Portal (UK) Ltd which can be found at:
For Australia: https://www.perfectportal.com.au/privacy-policy
For Canada: https://www.perfectportalcanada.ca/privacy-policy
For New Zealand: https://www.perfectportal.co.nz/privacy-policy
For United Kingdom: https://www.perfectportal.co.uk/privacy-policy
For United States of America: https://www.perfectportal.com/privacy-policy

= Intake Form =
The intake form widget requires loading external scripts from the Perfect Portal CDN where the region can be any of the following au, ca, nz, uk, us.
Therefore the possible external links/services required for the intake form widget are:

For Australia: https://cdn.perfectportal.co.uk/widgets/intake/production/au/index.js
For Canada: https://cdn.perfectportal.co.uk/widgets/intake/production/ca/index.js
For New Zealand: https://cdn.perfectportal.co.uk/widgets/intake/production/nz/index.js
For United Kingdom: https://cdn.perfectportal.co.uk/widgets/intake/production/uk/index.js
For United States of America: https://cdn.perfectportal.co.uk/widgets/intake/production/us/index.js

= Quote Calculator =
The quote calculator requires loading external scripts from the Perfect Portal CDN based on the region configured, the identifier of the quote calculator requested and the display type of form to render (this can either be embedded directly on the page or a floating button to be clicked).

For Australia: https://webcalc.perfectportal.com.au/apps/webcalc/v2.0/
For Canada: https://webcalc.perfectportalcanada.ca/apps/webcalc/v2.0/
For New Zealand: https://webcalc.perfectportal.co.nz/apps/webcalc/v2.0/
For United Kingdom: https://webcalc.perfectportal.co.uk/apps/webcalc/v2.0/
For United States of America: https://webcalc.perfectportal.com/apps/webcalc/v2.0/

Display Types:
Embedded: this appends 'embed.' to the region base url
Floating: this appends 'float.' to the region base url

Quote Calculator Identifier:
This is a GUID of the particular form to display on a specific page that the web administrator will receive from their Perfect Portal account manager: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

Therefore the url can be any combination of the above.

E.g.
UK example:
https://webcalc.perfectportal.co.uk/apps/webcalc/v2.0/embed.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.js
https://webcalc.perfectportal.co.uk/apps/webcalc/v2.0/float.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.js

Australia example:
https://webcalc.perfectportal.com.au/apps/webcalc/v2.0/embed.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.js
https://webcalc.perfectportal.com.au/apps/webcalc/v2.0/float.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.js

= Review Widget =
The review widget requires loading externally hosted scripts from the Perfect Portal CDN based on the region configured and the company identifier (provided to the web administrator by their Perfect Portal account manager).

For Australia: https://widgets.perfectportal.com.au/apps/reviews/v0.1/
For Canada: https://widgets.perfectportalcanada.ca/apps/reviews/v0.1/
For New Zealand: https://widgets.perfectportal.co.nz/apps/reviews/v0.1/
For United Kingdom: https://widgets.perfectportal.co.uk/apps/reviews/v0.1/
For United States of America: https://widgets.perfectportal.com/apps/reviews/v0.1/

E.g.
UK Example:
https://widgets.perfectportal.co.uk/apps/reviews/v0.1/reviews.XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.js

== Frequently Asked Questions ==

= How do I add an Intake Form =

The new block will appear in the widgets section in the block editor.
Perfect Portal Intake Form requires:
* Intake form region
* Intake form guid

To get these please contact your Perfect Portal account manager

= How do I add a Quote Calculator =

Perfect Portal Quote Calculator requires:
* Intake form region
* Intake form guid
* Intake form type

To get these please contact your Perfect Portal account manager

= How do I add a Review Widget =

Perfect Portal Review Widget requires:
* Review widget region
* Company guid
* Review widget guid

To get these please contact your Perfect Portal account manager

== Changelog ==

= 3.0.3 =
* Modified region url's for Canada (perfectportalcanada.ca) and New Zealand (perfectportal.co.nz)

= 3.0.2 =
* Corrected form submission

= 3.0.1 =
* Updated function names to have common prefixes

= 3.0.0 =
* Initial release of intake form, quote calculator and review widget with Gutenberg blocks and Shortcodes


== Upgrade Notice ==

= 3.0.3 =
* Modified region url's for Canada (perfectportalcanada.ca) and New Zealand (perfectportal.co.nz)

= 3.0.2 =
* Corrected form submission

= 3.0.1 =
* Updated function names to have common prefixes

= 3.0.0 =
* Initial release of intake form, quote calculator and review widget with Gutenberg blocks and Shortcodes



