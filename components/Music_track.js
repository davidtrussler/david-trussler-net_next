export function Music_track(props) {
	return (
		<section className="music__track">
			<h3>{props.title}</h3>

			<ul>
			{
				props.instruments.map(instrument =>
					<li>{instrument}</li>
				)
			}
			</ul>

			<img src={`images/music/tracks/${props.title}.gif`}/>

			<p>{props.text}</p>

			<p>{props.text_2}</p>

			<audio controls>
				<source src={`http://www.zen146343.zen.co.uk/davidtrussler/audio/${props.title}.mp3`} type="audio/mpeg"/>
				<source src={`http://www.zen146343.zen.co.uk/davidtrussler/audio/${props.title}.ogg`} type="audio/ogg; codecs=&quot;vorbis&quot;"/> 
			</audio> 
		</section>
	)
}
