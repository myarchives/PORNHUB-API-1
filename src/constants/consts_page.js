module.exports = {
	COMMENTS_LIST: '#cmtContent .topCommentBlock',
	RELATED_VIDEOS_LIST: '#relatedVideosCenter li',
	page_element_attributs: {
		TITLE: 'textContent',
		VIEWS: 'textContent',
		UP_VOTES: 'textContent',
		DOWN_VOTES: 'textContent',
		PERCENT: 'textContent',
		AUTHOR: 'textContent',
		AUTHOR_SUBSCRIBER: 'textContent',
		PORNSTARS: 'multi_textContent',
		CATEGORIES: 'multi_textContent',
		TAGS: 'multi_textContent',
		PRODUCTION: 'textContent',
		DURATION: 'textContent',
		NUMBER_OF_COMMENT: 'textContent',
		AVATAR: 'data-src',
		USERNAME: 'innerHTML',
		DATE: 'innerHTML',
		MESSAGE: 'innerHTML',
		TOTAL_VOTE: 'innerHTML',
		UPLOAD_DATE: 'javascript',
		DESCRIPTION: 'javascript',
		THUMBNAIL_URL: 'javascript'
	},
	page_related_videos_element_attributs: {
		LINK: 'href',
		TITLE: 'title',
		HD: null,
		DURATION: 'innerHTML',
		VIEWS: 'innerHTML',
		PREMIUM: null,
		AUTHOR: 'innerHTML',
		RATINGS: 'innerHTML',
		RELATED_SEARCH: 'multi_textContent',
		RELATED_PORNSTARS: 'multi_textContent',
		ACTOR: 'innerHTML',
		VIDEO_NUMBER: 'innerHTML',
		VIEW_NUMBER: 'innerHTML',
		RANK: 'innerHTML'
	},
	page_selectors: {
		TITLE: '.title-container .title .inlineFree',
		VIEWS: '.count',
		UP_VOTES: '.votesUp',
		DOWN_VOTES: '.votesDown',
		PERCENT: '.percent',
		AUTHOR: '.video-detailed-info .usernameBadgesWrapper a',
		AUTHOR_SUBSCRIBER: '.userInfo span:nth-child(4)',
		PORNSTARS: '.pornstarsWrapper .pstar-list-btn',
		CATEGORIES: '.categoriesWrapper a:not(.add-btn-small)',
		TAGS: '.tagsWrapper a:not(.add-btn-small)',
		PRODUCTION: '.productionWrapper',
		DURATION: 'meta[property="video:duration"]',
		NUMBER_OF_COMMENT: '#cmtWrapper h2 span',
		UPLOAD_DATE: 'script[type="application/ld+json"',
		DESCRIPTION: 'script[type="application/ld+json"',
		THUMBNAIL_URL: 'script[type="application/ld+json"'
	},
	comment_selectors: {
		AVATAR: '.avatarTrigger',
		USERNAME: '.usernameLink',
		DATE: '.date',
		MESSAGE: '.commentMessage span',
		TOTAL_VOTE: '.voteTotal'
	},
	related_videos_selectors: {
		LINK: 'a',
		TITLE: '.title a',
		HD: 'a .marker-overlays .hd-thumbnail',
		DURATION: 'a .marker-overlays .duration',
		VIEWS: '.videoDetailsBlock var',
		PREMIUM: 'a .marker-overlays .premiumIcon',
		AUTHOR: '.videoUploaderBlock .usernameWrap a',
		RATINGS: '.rating-container .value'
	},
	javascript: {
		UPLOAD_DATE: 'uploadDate',
		DESCRIPTION: 'description',
		THUMBNAIL_URL: 'thumbnailUrl'
	}
};
