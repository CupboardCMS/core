{{ '<?xml version="1.0"?>' }}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>{{ e(site_title()) }}</title>
		<link>{{ Cupboard::route('/') }}</link>
		<atom:link href="{{ Cupboard::route('posts.rss') }}" rel="self" type="application/rss+xml" />
		<description></description>
		<copyright>{{ Cupboard::route('/') }}</copyright>
		<ttl>30</ttl>

		@foreach ($posts as $post)
			<item>
				<title>{{ $post->title }}</title>
				<description>
					{{ htmlspecialchars($post->parsed_content) }}
				</description>
				<link>{{ Cupboard::route('posts.show', $post->slug) }}</link>
				<guid isPermaLink="true">{{ Cupboard::route('posts.show', $post->slug) }}</guid>
				<pubDate>{{ $post->rss_date }}</pubDate>
			</item>
		@endforeach
	</channel>
</rss>
