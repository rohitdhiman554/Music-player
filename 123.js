const musicContainer=document.querySelector('.musicContainer');
const musicinfo=document.querySelector('.music');
const audio=document.querySelector('.audio');
const prevBtn=document.querySelector('#prev');
const nextBtn=document.querySelector('#next');
const playBtn=document.querySelector('#play');
const title = document.querySelector('.title');
const cover = document.querySelector('#cover');
const progressContainer= document.querySelector('.progressContainer');
const progress= document.querySelector('.progress');

 
const songs = ['hey', 'summer', 'ukulele'];
let songsIndex=2;
loadSong(songs[songsIndex])

function loadSong(song)
{
	audio.src=`${song}.mp3`;
	title.innerText=song;
	cover.src=`${song}.jpg`;


}

function playSong()
{
	musicContainer.classList.add('play');
	musicContainer.style.animationPlayState='running';
	playBtn.querySelector('i.fas').classList.remove('fa-play');
		playBtn.querySelector('i.fas').classList.add('fa-pause');
		audio.play();


}
function pauseSong()
{
		musicContainer.style.animationPlayState='paused';


	musicContainer.classList.remove('play');
		playBtn.querySelector('i.fas').classList.add('fa-play');
		playBtn.querySelector('i.fas').classList.remove('fa-pause');
		audio.pause();

}
function nextSong()
{
	songsIndex++;
	if(songsIndex>songs.length-1)
	{
		songsIndex=0;
	}
	loadSong(songs[songsIndex]);
	playSong();	

}
function prevSong()
{
	
	songsIndex--;
	if(songsIndex<0)
	{
		songsIndex=songs.length-1;
	}
	loadSong(songs[songsIndex]);
	playSong();
}
function updateProgress(e)
{
	console.log(e);
	const {duration,currentTime}=e.target;
	

	let position=(currentTime/duration)*100;
	progress.style.width=`${position}%`;
}
function setProgress(e)
{
	
	const width=this.clientWidth;
	console.log(width);
	const clickX=e.offsetX;
	const duration=audio.duration;
	audio.currentTime= (clickX / width) * duration;
}







 playBtn.addEventListener('click',function()
 {
 	var playing=musicContainer.classList.contains('play');
 	if(playing)
 	{
 		pauseSong();
 	}
 	else
 	{
 		playSong();
 	}


 });	
 nextBtn.addEventListener('click',nextSong);
prevBtn.addEventListener('click',prevSong)
audio.addEventListener('timeupdate',updateProgress);
progressContainer.addEventListener('click',setProgress);
audio.addEventListener('ended',nextSong);


