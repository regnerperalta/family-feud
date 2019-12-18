export class AnimationService {

  public intializeAnimations(): string[][] {
    var animations: string[][] = [];
    animations.push(this.createAnimations([
      "/assets/images/animated/reindeer01.gif",
      "/assets/images/animated/reindeer02.gif",
      "/assets/images/animated/reindeer03.gif",
      "/assets/images/animated/reindeer04.gif"]));
    
    animations.push(this.createAnimations([
      "/assets/images/animated/elf01.gif",
      "/assets/images/animated/elf02.gif",
      "/assets/images/animated/elf03.gif",
      "/assets/images/animated/elf04.gif"]));
    
    animations.push(this.createAnimations([
      "/assets/images/animated/santa01.gif",
      "/assets/images/animated/santa02.gif",
      "/assets/images/animated/santa03.gif",
      "/assets/images/animated/santa04.gif"]));
    
    animations.push(this.createAnimations([
      "/assets/images/animated/snowman01.gif",
      "/assets/images/animated/snowman02.gif",
      "/assets/images/animated/snowman03.gif",
      "/assets/images/animated/snowman04.gif"]));

    return animations;
  }

  public intializeAnimationSongs(): any[][] {
    var animationSongs: any[][] = [];
    animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav"]));
    animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav"]));
    animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav"]));
    animationSongs.push(this.createAnimationSongs([
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav",
      "/assets/sound_effects/animation_songs/ChristmasBeat.wav"]));

      return animationSongs;
  }

  public intializeAnimationDurations(): number[][] {
    var animationDurations: number[][] = [];
    let DEFAULT_DURATION: number = 11;
    animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));
    animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));
    animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));
    animationDurations.push(this.createAnimationDurations([DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION, DEFAULT_DURATION]));

    return animationDurations;
  }

  public intializeAnimationIndeces(): number[] {
    var animationIndeces: number[] = [];
    animationIndeces.push(0);
    animationIndeces.push(0);
    animationIndeces.push(0);
    animationIndeces.push(0);

    return animationIndeces;
  }

  public createAnimations(animationUrls: string[]) : string[] {
    let animations: string[] = [];
    for (let i = 0; i < animationUrls.length; i++) {
      animations.push(animationUrls[i]);
    }
    return animations;
  }

  public createAnimationDurations(animationDurations: number[]) : number[] {
    let durations: number[] = [];
    for (let i = 0; i < animationDurations.length; i++) {
      durations.push(animationDurations[i]);
    }
    return durations;
  }

  public createAnimationSongs(animationSongUrls: string[]) : any[] {
    let animationSongs: any[] = [];
    for (let i = 0; i < animationSongUrls.length; i++) {
      let song = new Audio();
      song.src = animationSongUrls[i];
      song.load();
      animationSongs.push(song);
    }
    return animationSongs;
  }
}