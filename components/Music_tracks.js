import {Music_track} from './Music_track'; 

let tracks = [
	{
		title: 'seinix', 
		instruments: ['electronics'], 
		text: 'After creating <span class="namedTitle">foniq</span>, which was a remix from supplied sound samples, I decided to recreate its spirit in a piece that used completely original sounds. This collection of clicks and bleeps is the result.'
	}, 
	{
		title: 'menige', 
		instruments: ['electronics'], 
		text: 'This piece is constructed entirely from processed piano sounds, sometimes recognisable, occasionally processed out of all recognition. It originated from an invitation by the record label 12k to remix the source sounds used by Taylor Deupree and Kenneth Kirschner in their release <a href="http://12k.com/index.php/site/releases/post_piano_2/" className="newWindow">Post_Piano 2</a>. In my own mind it is perhaps the piece with which I am most pleased listening back. The orginal samples were of very low quality and much of the sound present here is as much the tape hiss and background noise present on the orginals as the actual pianos.'
	}, 
	{
		title: 'cifre', 
		instruments: ['electronics', 'radio', 'guitar'], 
		text: 'Atmospheric rumblings disturbed by keyboards, heavily distorted guitar and sounds gathered from the ether make up this piece. It was made around the time of the UK general election of 2005, and some of the radio reflects that. Mostly though, I wanted to use a load of speech samples in a variety of languages—most of which I would not undertand—by a process of turning through the radio dial to capture whatever happened to be there at that moment. There was originally a clarinet improvisation on this and some of the sounds on the piece are processed responses to this, although I removed the orginal source leaving a kind of emptiness.'
	}, 
	{
		title: 'foniq', 
		instruments: ['electronics'], 
		text: 'This has its origins as a remix project for the <a href="http://porousher.hu" className="newWindow">porousher</a> label in Hungary. It was supposed to feature on a CD but to be honest I have no idea if it ever did, although it did get some radio play on <a href="http://wrvu.org" className="newWindow">WRVU</a> in Nashville. This piece, and the subsequent reworking <span className="namedTitle">seinix</span>, probably represent the nearest approach I have ever made—and maybe am likely to make—to something that approaches standard notions of beat and melody. I don’t go there often but, contrary to the opinion of some, I have nothing against these things.'
	}, 
	{
		title: 'y21b_b', 
		instruments: ['electronics', 'clarinet'], 
		text: 'This is a variation on the slightly earlier piece, <span className="namedTitle">year zero</span>, which is based on a processed motif played on clarinet together with some electronic sounds based on those. The clarinet motif is slowed down and repeated over and over throughout the piece, although I don’t think it would be easily recognised as such.'
	}, 
	{
		title: 'year zero', 
		instruments: ['electronics', 'guitar'], 
		text: 'This piece is based on swirling electronic drones and whines battling with the sounds of a heavily-processed guitar. I was inspired by a photograph in John Pilger’s book <span className="namedTitle"><a href="http://johnpilger.com/books/reporting-the-world-john-pilgers-great-eyewitness-photographers" className="newWindow">Reporting the World: John Pilger’s Great Eyewitness Photographers</a></span>, depicting cars and other modern day household items decaying and overgrown by vegetation as a result of policies of the Khmer Rouge in Cambodia—a haunting image. I was after a kind of mix of an electronic machine-created, metallic sound interrupted and eventually overcome by the more organic sound of an electric guitar played, if I remember correctly, with a screwdriver. It might be the noisiest piece I’ve ever done although still a little way off Merzbow.'
	}, 
	{
		title: 'scr3h', 
		instruments: ['electronics', 'clarinet'], 
		text: 'This piece began life as a low-frequency drone that slowly splits into two separate drones of sightly different frequencies and then returns to its original form. On top of this I layered some multi-tracked improvised clarinet motifs. These appear at intervals that are random, although programmed to occure with increasing and then decreasing frequency, in phase with the drones. I guess that makes it a pretty explicit mix of system-based and improvised sound.'
	}, 
	{
		title: 'sc_c2d4g', 
		instruments: ['electronics', 'clarinet'], 
		text: 'This is based on a drone with a processed clarinet motif. Listening again it’s interesting that I seemed to be struggling at this time to escape from the need to base it in some fairly conventional musical ideas of actual notes and rhythm—you can even tap your foot to it here and there—but maybe it would fail the Old Grey Whistle Test. I would soon get over it though.'
	}, 
	{
		title: 'fkdmxr', 
		instruments: ['electronics', 'clarinet'], 
		text: 'I was setting up my mixer after moving house and found I’d connected it up wrongly leading to a sudden squall of feedback. The noise was so good I recorded it and some time later added some improvised clarinet. As such it’s a kind of very rough spur of the moment kind of thing—a case of serendipity. I have occasionally thought about developing it further but never have. Maybe one day…'
	}, 
	{
		title: 'control z', 
		instruments: ['electronics'], 
		text: 'This is an excerpt from a compilation CD released by the <a href="http://reaktion.free.fr/" className="newWindow">(re)aktion</a> label in France. It was one of many pieces of a minute’s duration or less submitted to the label and released on CD. It involved, if I remember corrrectly, the random distribution of a number of samples which were made into a more meaningful soundwork and sent back to be compiled.'
	}
]

export function Music_tracks() {
	return (
		<div className="music__tracks">
			{
				tracks.map(track => 
					<Music_track 
						title={track.title} 
						instruments={track.instruments}
						text={track.text}
					/>
				)
			}
		</div>
	)
}
