// change the width and the top margin
$('#profile').toggleClass('linkedincv_mainwidth');

// Remove the body background
$('body').toggleClass('linkedincv_nobg');

if ($('#premium-image-container').length)
{
	// for premium accounts like https://www.linkedin.com/profile/view?id=206580
	$('#topcard-background').toggleClass('linkedincv_hide');
	// $('#top-card div').toggleClass('top-card');
}
else
{
	// For normal accounts like: https://www.linkedin.com/profile/view?id=51621002
	// change the width and the top margin
	$('#body').toggleClass('linkedincv_body');
	
	// Fix the position of the profile preview
	$('.profile-overview').toggleClass('linkedincv_profileoverview');
}

// Hide things
$('#text-ad-container').toggleClass('linkedincv_hide');
$('#siteflow-widget-next').toggleClass('linkedincv_hide');
$('#header').toggleClass('linkedincv_hide');
$('#activity').toggleClass('linkedincv_hide');
$('.hidden-view-more.view-media-link.evt-dispatch').toggleClass('linkedincv_hide');
$('#badge-container').toggleClass('linkedincv_hide');
$('#preview-ctx').toggleClass('linkedincv_hide');
$('#freemium-bg').toggleClass('linkedincv_hide');
$('#aux').toggleClass('linkedincv_hide');
$('#connections').toggleClass('linkedincv_hide');
$('#following-container').toggleClass('linkedincv_hide');
$('#groups-container').toggleClass('linkedincv_hide');
$('#endorsements').toggleClass('linkedincv_hide');
$('.education-associated').toggleClass('linkedincv_hide');
$('.treasury-container').toggleClass('linkedincv_hide');
$('.profile-aux').toggleClass('linkedincv_hide');
$('.fp-degree-icon').toggleClass('linkedincv_hide');
$('.profile-card-extras').toggleClass('linkedincv_hide');
$('.endorsers-container').toggleClass('linkedincv_hide');
// $('#profile-skills h5').toggleClass('linkedincv_hide');
$('#profile-skills .endorsing').toggleClass('linkedincv_hide');
$('#profile-skills .endorse-count').toggleClass('linkedincv_hide');
$('#profile-skills .endorse-button').toggleClass('linkedincv_hide');
$('#footer').toggleClass('linkedincv_hide');
$('#see-more-less-skill').toggleClass('linkedincv_hide');

// Compact best skills
$('#profile-skills > ul.skills-section:first').toggleClass('compact-view');

// Emulate clicks to show more
$('#control_gen_11').click();
$('#control_gen_19 .toggle-show-more').each().click();