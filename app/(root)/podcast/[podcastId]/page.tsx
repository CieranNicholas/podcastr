import React from 'react';

type Props = {
	params: Promise<{ podcastId: string }>;
};

const PodcastDetails: React.FC<Props> = async ({ params }) => {
	const podcastId = (await params).podcastId;

	return <p className='text-white-1'>Podcast Details for {podcastId}</p>;
};

export default PodcastDetails;
