import {Music_heading} from '../components/Music_heading'; 
import {Music_intro} from '../components/Music_intro'; 
import {Music_tracks} from '../components/Music_tracks'; 

export function Main_music() {
	return (
	  <main>
	    <div className="constrained">
	      <div className="main__inner">
	      	<Music_heading/>
	      	<Music_intro/>
	      	<Music_tracks/>
	      </div>
	    </div>
	  </main>
  )
}
