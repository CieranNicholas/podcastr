import { GeneratePodcastProps } from '@/types';
import React, { useState } from 'react';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Loader } from 'lucide-react';

const useGeneratePodcast = (props: GeneratePodcastProps) => {
	const { audio, setAudio, setAudioStorageId, voicePrompt, setVoicePrompt, setAudioDuration } = props;
	const [isGenerating, setIsGenerating] = useState(false);

	const generatePodcast = async () => {
		setIsGenerating(true);
		setAudio('');

		if (!voicePrompt) {
			return setIsGenerating(false);
		}

		try {
			// Call the API to generate the podcast
		} catch (error) {
			console.error('Error generating podcast', error);
			setIsGenerating(false);
		}
	};

	return {
		isGenerating,
		generatePodcast,
	};
};

const GeneratePodcast: React.FC<GeneratePodcastProps> = (props) => {
	const { audio, setAudio, setAudioStorageId, voicePrompt, setVoicePrompt, setAudioDuration } = props;
	const { isGenerating, generatePodcast } = useGeneratePodcast(props);

	return (
		<div>
			<div className='flex flex-col gap-2.5'>
				<Label className='text-16 font-bold text-white-1'>Ai Prompt to generate Podcast</Label>
				<Textarea
					className='input-class font-light focus-visible:ring-offset-orange-1 focus-visible:ring-orange-1'
					placeholder='Provide text to generate audio'
					rows={5}
					value={voicePrompt}
					onChange={(e) => setVoicePrompt(e.target.value)}
				/>
			</div>
			<div className='mt-5 w-full max-w-[200px]'>
				<Button type='submit' className='text-16 bg-orange-1 py-4 font-bold text-white-1' disabled={isGenerating}>
					{isGenerating ? (
						<>
							Generating
							<Loader size={20} className='animate-spin ml-2' />
						</>
					) : (
						<>Generate</>
					)}
				</Button>
			</div>
			{audio && (
				<audio controls src={audio} autoPlay className='mt-5' onLoadedMetadata={(e) => setAudioDuration(e.currentTarget.duration)} />
			)}
		</div>
	);
};

export default GeneratePodcast;
