import React, {useEffect, useRef} from "react";
import { words } from "./data";
import "./style.css";
import {introAnimation,collapseWords, progressAnimation} from "./animation"

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordGroupsRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(introAnimation(wordGroupsRef))
        .add(progressAnimation(progressRef, progressNumberRef), 0)
        .add(collapseWords(loaderRef), "-=1");
  }, [timeline]);

  return (
    <div className={'loader_wrapper'}>
      <div className={"loader_progressWrapper"}>
        <div className={"loader_progress"} ref={progressRef}></div>
        <span className={"loader_progressNumber"} ref={progressNumberRef}>
          0
        </span>
      </div>
      <div className={"loader"} ref={loaderRef}>
        <div className={"loader_words"}>
          <div className={"loader_overlay"}></div>
          <div ref={wordGroupsRef} className={"loader_wordsGroup"}>
            {words.map((word, index) => {
              return (
                <span key={index} className={"loader_word"}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

///===========================================
