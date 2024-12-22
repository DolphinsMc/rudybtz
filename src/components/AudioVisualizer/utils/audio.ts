export function createAudioContext() {
  const audioContext = new AudioContext();
  const analyzer = audioContext.createAnalyser();
  
  // Configure analyzer for better frequency resolution
  analyzer.fftSize = 512;
  analyzer.smoothingTimeConstant = 0.8;
  
  const dataArray = new Uint8Array(analyzer.frequencyBinCount);
  
  return {
    audioContext,
    analyzer,
    dataArray
  };
}

export function connectAudioSource(
  audioElement: HTMLAudioElement,
  analyzer: AnalyserNode,
  audioContext: AudioContext
) {
  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(analyzer);
  analyzer.connect(audioContext.destination);
  return source;
}