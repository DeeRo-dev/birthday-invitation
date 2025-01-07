declare module 'confetti-js' {
    interface ConfettiConfig {
      target?: string;
      max?: number;
      size?: number;
      animate?: boolean;
      respawn?: boolean;
      props?: string[];
      colors?: number[][];
      clock?: number;
      interval?: number;
      rotate?: boolean;
      width?: number;
      height?: number;
      start_from_edge?: boolean;
      speed?: number;
    }
  
    export default class ConfettiGenerator {
      constructor(config: ConfettiConfig);
      render(): void;
      clear(): void;
    }
  }
  
  