import './progress.css';
import { useEffect, useState } from "react";

export const Progress = () => {

  

  const ProgressBar = (props:ProgressBar) => {
    const {progress} = props;

    const [animate, setAnimate] = useState(0);

    useEffect(() => {
       setTimeout(() => {
        setAnimate(progress);
      }, 100);
    }, [progress]);

    const clampedProgress = Math.max(0, Math.min(100, progress));
    
    return (
      <div className="progressContainer">
        <div role='progressbar' aria-valuenow={clampedProgress} aria-valuemax={100} aria-valuemin={0} className="progressinner" style={{ transform: `translateX(${animate - 100}%)` }}>{clampedProgress}%</div>
      </div>
    );
  };

    
    return (
        // CUSTOM progress bar
        <div>

        <ProgressBar  progress={50}/>

        // default progress bar 


        <div>
            <progress
            value={50}
             max={100}  style={{backgroundColor:"red"}} />
        </div>
        </div>
        )
}

type ProgressBar = {
    progress: number;
}